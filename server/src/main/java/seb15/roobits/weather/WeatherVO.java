package seb15.roobits.weather;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
@Data
public class WeatherVO {
    private String cityname;
    private Weather weather;

    @Data
    public class Weather{
        String main;
        String description;
    }
}
