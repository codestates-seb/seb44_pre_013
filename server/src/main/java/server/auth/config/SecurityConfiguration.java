package server.auth.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import server.auth.filter.JwtAuthenticationFilter;
import server.auth.filter.JwtVerificationFilter;
import server.auth.handler.*;
import server.auth.jwt.JwtTokenizer;
import server.auth.utils.CustomAuthorityUtils;
import server.member.repository.MemberRepository;
import server.member.service.MemberService;

import java.util.Arrays;
@RequiredArgsConstructor
@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors()
                .configurationSource(corsConfigurationSource())

                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .csrf().disable()
                .httpBasic().disable()
                .formLogin().disable()

                .exceptionHandling()
                .authenticationEntryPoint(new CustomAuthenticationEntryPoint())  // (1) 추가
                .accessDeniedHandler(new CustomAccessDeniedHandler())

                .and()
                .logout().logoutUrl("/logout").permitAll()
                .logoutSuccessUrl("/") // 로그아웃 성공 시 이동 페이지

                .and()
                .apply(new CustomFilterConfigurer())

                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers("/login").permitAll()
                        .antMatchers("/user").permitAll()
                        .antMatchers(HttpMethod.GET, "/question/**").permitAll()
                        .anyRequest().authenticated()) // 요청별 권한 작성하기

                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2SuccessHandler(jwtTokenizer, memberService)));

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(Arrays.asList("*"));
        corsConfiguration.setAllowedMethods(Arrays.asList("POST", "PATCH", "GET", "DELETE", "OPTIONS"));
        corsConfiguration.setAllowedHeaders(Arrays.asList("*"));
        corsConfiguration.setExposedHeaders(Arrays.asList("*"));
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.setAllowCredentials(false);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {  // (2-1)
        @Override
        public void configure(HttpSecurity builder) throws Exception {  // (2-2)
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);  // (2-3)

            JwtAuthenticationFilter customAuthenticationFilter =
                    new JwtAuthenticationFilter(jwtTokenizer, authenticationManager);// (2-4)

//            customAuthenticationFilter.setFilterProcessesUrl("/auth/login"); //request URL - 디폴트는 /login
            customAuthenticationFilter.setAuthenticationSuccessHandler(new CustomAuthenticationSuccessHandler(memberService));  // (3) 추가
            customAuthenticationFilter.setAuthenticationFailureHandler(new CustomAuthenticationFailureHandler());

            JwtVerificationFilter verificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils, memberRepository);

            builder
                    .addFilter(JwtAuthenticationFilter)
                    .addFilterAfter(verificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}