//package seb15.roobits.member.controller;
//
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
//import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
//import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
//import org.springframework.security.oauth2.core.OAuth2AccessToken;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//
//@Controller
//public class HelloHomeController {
//
//    private final OAuth2AuthorizedClientService authorizedClientService;
//
//
//    public HelloHomeController(OAuth2AuthorizedClientService authorizedClientService) {
//        this.authorizedClientService = authorizedClientService;
//    }
//
//    @GetMapping("/hello-oauth2")
//    public String home(@RegisteredOAuth2AuthorizedClient("google") OAuth2AuthorizedClient authorizedClient) {
//
//        OAuth2AccessToken accessToken = authorizedClient.getAccessToken();
//        System.out.println("Access Token Value: " + accessToken.getTokenValue());  // (3-1)
//        System.out.println("Access Token Type: " + accessToken.getTokenType().getValue());  // (3-2)
//        System.out.println("Access Token Scopes: " + accessToken.getScopes());       // (3-3)
//        System.out.println("Access Token Issued At: " + accessToken.getIssuedAt());    // (3-4)
//        System.out.println("Access Token Expires At: " + accessToken.getExpiresAt());  // (3-5)
//
//        return "hello-oauth2";
//    }
//}
