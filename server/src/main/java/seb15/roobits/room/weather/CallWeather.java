package seb15.roobits.room.weather;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import seb15.roobits.room.entity.Room;

import java.net.URLEncoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class CallWeather {

        private final WeatherVO weatherVO;
        private static OpenWeatherAPI openWeatherAPI;

        public CallWeather(WeatherVO weatherVO, OpenWeatherAPI openWeatherAPI) {
                this.weatherVO = weatherVO;
                this.openWeatherAPI = openWeatherAPI;
        }

        public static String getWeatherData(Room findRoom) {

                final String BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
                final String apiKey = openWeatherAPI.getOpenWeatherKey(); // 발급받은 API key

                String weather;

                StringBuilder urlBuilder = new StringBuilder(BASE_URL);
                try {
                        urlBuilder.append("?" + URLEncoder.encode("id", "UTF-8") + "=1835848");
                        urlBuilder.append("&" + URLEncoder.encode("appid", "UTF-8") + "=" + apiKey);

                        RestTemplate restTemplate = new RestTemplate();
                        WeatherVO response = restTemplate.getForObject(urlBuilder.toString(), WeatherVO.class);
                        String strWeather = String.valueOf(response.getWeather());
                        String weatherId = strWeather.replaceAll("[^\\d]", "");

                        Pattern p6 = Pattern.compile("(^6\\d\\d$)");
                        Pattern p7 = Pattern.compile("721");
                        Pattern p8 = Pattern.compile("(^80\\d$)");

                        Matcher m6 = p6.matcher(weatherId);
                        Matcher m7 = p7.matcher(weatherId);
                        Matcher m8 = p8.matcher(weatherId);

                        if (weatherId == "800") {
                                weather = "clear";
                        }
                        else if (m6.find()) {
                                weather = "snow";
                        }
                        else if (m7.find()) {
                                weather = "clouds";
                        }
                        else if (m8.find()) {
                                weather = "clouds";
                        } else {
                                weather = "rain";
                        }
//
                        findRoom.setWeather(weather);

                } catch (Exception e) {
                        e.printStackTrace();
                }

                return null;
        }
}