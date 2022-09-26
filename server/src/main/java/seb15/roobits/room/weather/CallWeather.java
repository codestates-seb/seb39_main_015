package seb15.roobits.room.weather;

import org.springframework.web.client.RestTemplate;
import seb15.roobits.room.entity.Room;

import java.net.URLEncoder;

public class CallWeather {

        public static String getWeatherData(Room findRoom) {

                final String BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
                final String apiKey = "da86330d5932041c2374b0b1398c26d1"; // 발급받은 API key
                String weather;

                StringBuilder urlBuilder = new StringBuilder(BASE_URL);
                try {
                        urlBuilder.append("?" + URLEncoder.encode("id", "UTF-8") + "=1835848");
                        urlBuilder.append("&" + URLEncoder.encode("appid", "UTF-8") + "=" + apiKey);

                        RestTemplate restTemplate = new RestTemplate();
                        WeatherVO.Weather response = restTemplate.getForObject(urlBuilder.toString(), WeatherVO.Weather.class);

//                        if (String.valueOf(response) == "800")  return "clear";
//                        else if (String.valueOf(response) == "600") return "snow";
//                        else if (String.valueOf(response) == "700") return "clouds";
//                        else if (String.valueOf(response) == "80*") return "clouds";
//                        else return "rain";

                        if (String.valueOf(response) == "800") {
                                weather = "clear";
                        }
                        else if (String.valueOf(response) == "600") {
                                weather = "snow";
                        }
                        else if (String.valueOf(response) == "700") {
                                weather = "clouds";
                        }
                        else if (String.valueOf(response) == "80*") {
                                weather = "clouds";
                        } else {
                                weather = "rain";
                        }

                        findRoom.setWeather(weather);

                } catch (Exception e) {
                        e.printStackTrace();
                }

                return null;
        }
}