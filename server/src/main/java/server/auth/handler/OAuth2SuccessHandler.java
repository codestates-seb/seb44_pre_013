package server.auth.handler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;
import server.auth.jwt.JwtTokenizer;
import server.member.entity.Member;
import server.member.service.MemberService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;

@RequiredArgsConstructor
@Slf4j
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final MemberService memberService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, java.io.IOException {
        var oAuth2User = (OAuth2User) authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email")); // (3)

        Member member = saveMember(email);
        redirect(request, response, member);  // (6)
    }

    private Member saveMember(String email) { // 이미 디비에 있으면 이 로직 건너 뛰기?
        Member member = new Member();
        member.setEmail(email);
        return memberService.createMember(member);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, Member member)
            throws IOException, java.io.IOException {
        String accessToken = jwtTokenizer.delegateAccessToken(member);
        String refreshToken = jwtTokenizer.delegateRefreshToken(member);

        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh", refreshToken);

        String uri = createURI(accessToken, refreshToken).toString();   // (6-3)
        log.info("# Authenticated successfully!");
        getRedirectStrategy().sendRedirect(request, response, uri);   // (6-4)
    }

    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
                .port(3000)
                .path("/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}