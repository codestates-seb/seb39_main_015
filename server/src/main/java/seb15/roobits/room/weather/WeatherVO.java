package seb15.roobits.room.weather;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@NoArgsConstructor
@Component
@Data
public class WeatherVO {
    List<Weather> weather;
    @Data
    public class Weather{
        int id;
    }
}

