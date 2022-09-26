package seb15.roobits.room.weather;

import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;

@RestController
@RequestMapping("/weather")
@Validated
@Slf4j
public class CallWeather {

        private final String BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
        private final String apiKey = "da86330d5932041c2374b0b1398c26d1"; // 발급받은 API key

        @GetMapping
        public void getWeatherData() {
                StringBuilder urlBuilder = new StringBuilder(BASE_URL);
                try {
                        urlBuilder.append("?" + URLEncoder.encode("id", "UTF-8") + "=1835848");
                        urlBuilder.append("&" + URLEncoder.encode("appid", "UTF-8") + "=" + apiKey);

                        RestTemplate restTemplate = new RestTemplate();
                        WeatherVO response = restTemplate.getForObject(urlBuilder.toString(), WeatherVO.class);

                        if (response == )
                } catch (Exception e) {
                        e.printStackTrace();
                } finally {
                        // 에러가 뜨든 뭐든 나든 서비스단으로 이부분을 날림
                }

        }
}