//package seb15.roobits.weather;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDateTime;
//
//@AllArgsConstructor
//@NoArgsConstructor
//@Component
//@Data
//public WeatherVO getWeatherData(int x, int y, LocalDateTime localDateTime) throws UnsupportedEncodingException {
//        WeatherDataVO weatherDataVO = new WeatherDataVO();
//
//        URI uri = this.makeRequestURIForWeatherData(58,125,localDateTime);
//        WeatherDataFromJson data = this.restTemplate.getForObject(uri, WeatherDataFromJson.class);
//
//        return weatherDataVO;
//        }