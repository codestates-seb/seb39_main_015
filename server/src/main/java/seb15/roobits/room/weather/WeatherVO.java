package seb15.roobits.room.weather;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@NoArgsConstructor
@Component
@Data
public class WeatherVO {
    public List<Weather> weather;
    @Data
    public static class Weather{
        public int id;
    }


}

