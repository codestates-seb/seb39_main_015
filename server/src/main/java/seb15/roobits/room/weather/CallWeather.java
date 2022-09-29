package seb15.roobits.room.weather;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import seb15.roobits.room.entity.Room;

import java.net.URLEncoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class CallWeather {

        //타임아웃을 설정해야 한다. 응답값을 받을 때까지 무한정 대기하지 않게 해야 한다.

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
                        int weatherId = response.getId();

//                        Pattern p6 = Pattern.compile("(^6\\d\\d$)");
//                        Pattern p7 = Pattern.compile("721");
//                        Pattern p8 = Pattern.compile("(^80\\d$)");
//
//                        Matcher m6 = p6.matcher(String.valueOf(weatherId));
//                        Matcher m7 = p7.matcher(String.valueOf(weatherId));
//                        Matcher m8 = p8.matcher(String.valueOf(weatherId));
//                        System.out.println(m6.find());
//                        System.out.println(m7.find());
//                        System.out.println(m8.find());
//
//
//                        if (weatherId == 800) {
//                                weather = "clear";
//                        }
//                        else if (m6.find()) {
//                                weather = "snow";
//                        }
//                        else if (m7.find()) {
//                                weather = "clouds";
//                        }
//                        else if (m8.find()) {
//                                weather = "clouds";
//                        } else {
//                                weather = "rain";
//                        }
//
                        findRoom.setWeather(String.valueOf(weatherId));

                } catch (Exception e) {
                        e.printStackTrace();
                }

                return null;
        }
}