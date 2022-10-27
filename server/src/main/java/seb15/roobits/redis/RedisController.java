package seb15.roobits.redis;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequiredArgsConstructor
@RequestMapping("/redis")
public class RedisController {

    private final RedisService redisService;

    @PostMapping
    public ResponseEntity startRedis(@RequestBody HashMap<String, String> body){
        redisService.setValues(body.get("key"),body.get("value"));
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/{key}")
    public ResponseEntity<?> getRedisKey(@PathVariable String key) {
        String value = redisService.getValues(key);
        return new ResponseEntity<>(value,HttpStatus.OK);
    }

}
