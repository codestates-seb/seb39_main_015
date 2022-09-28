package roobits.roobit.dto;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import roobits.roobit.entity.Roobit;
import roobits.roobit.repository.RoobitRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.domain.Sort.Order.desc;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class FloorDto<T> {

    private long roomId;
//    private String roomName;
//    private LocalDateTime dDay;
//    private long restDay;
//    private String roomTheme;
//    private long viewCount;
//    private String weather;
//    private URL url;
//    private long roobitAmount;

    private List<Content> contents = new ArrayList<>();
    private int numberOfElements;
    private int totalElements;
    private int totalPages;

//    @AllArgsConstructor
//    @Getter
//    public class FloorInfo {
//        //    private int floor;
//        private int roobitLimit = 3;   // 한 floor의 루빗 리미트 = 10
//        private long totalRoobits;  // 총 루빗 개수
//        private int totalFloor;     // 총 floor 개수
//    }

    @Data
    @NoArgsConstructor
    public static class Content{
        private long roobitId;
        private String nickname;
//        private String body;
//        private String email;
//        private String reception;
//        private String style;
//        private LocalDateTime createdAt;
//        private Roobit.RoobitStatus roobitStatus;
    }

    void pagingWithQueryMethod() throws JsonProcessingException {
        Page<Roobit> floor = RoobitRepository.findByRoomId(roomId, PageRequest.of(0, 10, Sort.by(desc("roobitId"))));  // 검색 리턴한 데이터를 객체에 담기

        List<Content> contents = new ArrayList<>();  // 담은 객체를 Content 객체에 담기
        floor.getContent().forEach(content -> {
            Content cont = new Content();
            cont.setRoobitId(content.getRoobitId());
            cont.setNickname(content.getNickname());
            contents.add(cont);
        });

        FloorDto floorDto = new FloorDto();  // List<Content>를 FloorDto에 담기
        floorDto.setContents(contents);
        floorDto.setTotalPages(floor.getTotalPages());
        floorDto.setNumberOfElements(floor.getNumberOfElements());
        floorDto.setTotalElements(floorDto.getTotalElements());

//        //json String 으로 변환된 floorDto를 보기 좋게 변환.
//        System.out.println(JsonFormatter.prettyPrint(floorResponse));

    }
}
