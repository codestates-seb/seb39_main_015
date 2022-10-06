package seb15.roobits.room.weather;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@Configuration
public class VendorAPIConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplateBuilder()
                .rootUri("http://api.openweathermap.org/data/2.5/weather")
                .setReadTimeout(Duration.ofSeconds(3))
                .setReadTimeout(Duration.ofSeconds(3))
                .build();
    }

    //요청 재시도 로직
//    public ClientHttpRequestInterceptor clientHttpRequestInterceptor() {
//        return ((request, body, execution) -> {
//            RetryTemplate retryTemplate = new RetryTemplate();
//            retryTemplate.setRetryPolicy(new SimpleRetryPolicy(3));
//            try {
//                return retryTemplate.excute(context -> execution.execute(request, body));
//            } catch (Throwable throwable) {
//                throw new RuntimeException(throwable);
//            }
//        };
//    }
}
