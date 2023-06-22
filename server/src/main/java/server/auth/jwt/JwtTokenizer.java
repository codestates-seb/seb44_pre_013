//package server.auth.jwt;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jws;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.io.Decoders;
//import io.jsonwebtoken.io.Encoders;
//import io.jsonwebtoken.security.Keys;
//import lombok.Getter;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//import server.member.entity.Member;
//
//import java.nio.charset.StandardCharsets;
//import java.security.Key;
//import java.util.Calendar;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//@Component
//public class JwtTokenizer {
//    @Getter
//    @Value("${jwt.key}")
//    private String secretKey;
//
//    @Getter
//    @Value("${jwt.access-token-expiration-minutes}")
//    private int accessTokenExpirationMinutes;
//
//    @Getter
//    @Value("${jwt.refresh-token-expiration-minutes}")
//    private int refreshTokenExpirationMinutes;
//
//    // byte[] -> base64 인코딩
//    public String encodeBase64SecretKey(String secretKey) {
//        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
//    }
//
//    // 인증된 사용자에게 JWT 생성
//    public String generateAccessToken(Map<String, Object> claims,
//                                      String subject,
//                                      Date expiration,
//                                      String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setSubject(subject)
//                .setIssuedAt(Calendar.getInstance().getTime())
//                .setExpiration(expiration)
//                .signWith(key)
//                .compact();
//    }
//
//    // refreshToken 생성
//    public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        return Jwts.builder()
//                .setSubject(subject)
//                .setIssuedAt(Calendar.getInstance().getTime())
//                .setExpiration(expiration)
//                .signWith(key)
//                .compact();
//    }
//
//    // 검증 후, Claims 반환
//    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        Jws<Claims> claims = Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(jws);
//        return claims;
//    }
//
//    // JWT 검증
//    public void verifySignature(String jws, String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(jws);
//    }
//
//    // JWT 만료 일시 지정
//    public Date getTokenExpiration(int expirationMinutes) {
//        Calendar calendar = Calendar.getInstance();
//        calendar.add(Calendar.MINUTE, expirationMinutes);
//        Date expiration = calendar.getTime();
//
//        return expiration;
//    }
//
//    // secret key 생성
//    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
//        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
//        Key key = Keys.hmacShaKeyFor(keyBytes);
//
//        return key;
//    }
//
//    public String delegateAccessToken(Member member) {
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("name", member.getEmail());
//
//        String subject = member.getEmail();
//        Date expiration = getTokenExpiration(getAccessTokenExpirationMinutes());
//
//        String base64EncodedSecretKey = encodeBase64SecretKey(getSecretKey());
//
//        String accessToken = generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);
//
//        return accessToken;
//    }
//
//    public String delegateRefreshToken(Member member) {
//        String subject = member.getEmail();
//        Date expiration = getTokenExpiration(getRefreshTokenExpirationMinutes());
//        String base64EncodedSecretKey = encodeBase64SecretKey(getSecretKey());
//
//        String refreshToken = generateRefreshToken(subject, expiration, base64EncodedSecretKey);
//
//        return refreshToken;
//    }
//}