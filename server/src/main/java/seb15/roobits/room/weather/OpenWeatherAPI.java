package seb15.roobits.room.weather;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class OpenWeatherAPI {

    @Value("${spring.profiles.weather-id}")
    private String openWeatherKey;

}
