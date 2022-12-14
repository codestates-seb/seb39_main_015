//package seb15.roobits.weather;
//
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import lombok.Getter;
//import lombok.Setter;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.ResponseEntity;
//import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.client.HttpClientErrorException;
//import org.springframework.web.client.HttpServerErrorException;
//import org.springframework.web.client.RestTemplate;
//import org.springframework.web.util.UriComponents;
//import org.springframework.web.util.UriComponentsBuilder;
//
//import java.util.*;
//
//@RestController
//@RequestMapping("/weather")
//@ConfigurationProperties(prefix="greeting")
//public class WeatherController {
//    private final WeatherDAO weatherDAO;
//
//    public WeatherController(WeatherDAO weatherDAO) {
//        this.weatherDAO = weatherDAO;
//    }
//
//    @Getter
//    @Setter
//    String returnString;
//
//    @GetMapping("/getall")
//    public List<WeatherVO> getAll() {
//        return weatherDAO.getDatas();
//    }
//
//    @GetMapping("/get")
//    public String getWeather(@RequestParam(value = "name", defaultValue = "Seoul") String cityname,
//                             @RequestParam(value = "APIkey", defaultValue = "") String apikey) throws JsonProcessingException {
//
//        HashMap<String, Object> result = new HashMap<String, Object>();
//        WeatherVO w = new WeatherVO();
//
//        try {
//            HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
//            factory.setConnectTimeout(5000); //???????????? ?????? 5???
//            factory.setReadTimeout(5000);//???????????? ?????? 5???
//            RestTemplate restTemplate = new RestTemplate(factory);
//
//            HttpHeaders header = new HttpHeaders();
//            HttpEntity<?> entity = new HttpEntity<>(header);
//
//            String url = "http://api.openweathermap.org/data/2.5/weather";
//
//            UriComponents uri = UriComponentsBuilder.fromHttpUrl(url+"?q="+cityname+"&appid="+apikey).build();
//
//            //??? ????????? ????????? API??? ????????? MAP???????????? ?????? ?????????.
//            ResponseEntity<Map> resultMap = restTemplate.exchange(uri.toString(), HttpMethod.GET, entity, Map.class);
//            result.put("statusCode", resultMap.getStatusCodeValue()); //http status code??? ??????
//            result.put("header", resultMap.getHeaders()); //?????? ?????? ??????
//            result.put("body", resultMap.getBody()); //?????? ????????? ?????? ??????
//
//            //???????????? ????????? ?????? ???????????? ?????? string????????? ????????????
//            ObjectMapper mapper = new ObjectMapper();
//
//            //???????????? WeatherVO ????????? ????????? weatherDAO??? ?????????
//            w.setCityname(cityname);
//            w.getWeather().setMain(
//                    ((LinkedHashMap)((ArrayList)resultMap.getBody().get("weather")).get(0)).get("main").toString()
//            );
//            w.getWeather().setDescription(
//                    ((LinkedHashMap)((ArrayList)resultMap.getBody().get("weather")).get(0)).get("description").toString()
//            );
//            weatherDAO.addData(w);
//            returnString = w.getWeather();
//        } catch (HttpClientErrorException | HttpServerErrorException e) {
//            result.put("statusCode", e.getRawStatusCode());
//            result.put("body"  , e.getStatusText());
//            System.out.println("dfdfdfdf");
//            System.out.println(e.toString());
//        } catch (Exception e) {
//            result.put("statusCode", "999");
//            result.put("body"  , "excpetion??????");
//            System.out.println(e.toString());
//        }
//        return returnString;
//    }
//}