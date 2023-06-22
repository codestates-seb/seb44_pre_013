package server.auth.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import server.auth.utils.ErrorResponder;
import server.auth.utils.JwtUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Slf4j
@Component
@Configuration
public class JwtParseInterceptor implements HandlerInterceptor {
    private final JwtUtils jwtUtils;
    private static final ThreadLocal<Long> authenticatedMemberId = new ThreadLocal<>();

    public JwtParseInterceptor(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    public static long getAuthenticatedMemberId() {
        return authenticatedMemberId.get();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        try {
            Map<String, Object> claims = jwtUtils.getJwsClaimsFromRequest(request);  // JWT 검증 및 claims 얻기
            authenticatedMemberId.set(Long.valueOf(claims.get("memberId").toString()));  // ThreadLocal에 memberId setting.
            return true;
        } catch (Exception e) {
            /**
             * JWT 검증 및 Expiration 시, Error Response 전송.
             * - GlobalExceptionAdvice에서 처리할 수 있으나 보안과 관련된 에러는 이미 만들어 둔 ErrorResponder룰 사용해서 중복 로직을 최소화 한다.
             */
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
            return false;
        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           @Nullable ModelAndView modelAndView) {
        this.authenticatedMemberId.remove();
    }
}