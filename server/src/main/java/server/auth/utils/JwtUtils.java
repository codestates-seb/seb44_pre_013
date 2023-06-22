package server.auth.utils;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import server.auth.jwt.JwtTokenizer;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Component
public class JwtUtils {

    private final JwtTokenizer jwtTokenizer;

    public JwtUtils(JwtTokenizer jwtTokenizer) {
        this.jwtTokenizer = jwtTokenizer;
    }

    public Map<String, Object> getJwsClaimsFromRequest(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }
}