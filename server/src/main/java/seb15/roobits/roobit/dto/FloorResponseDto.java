package seb15.roobits.roobit.dto;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.repository.RoobitRepository;
import javax.swing.text.AbstractDocument;
import javax.transaction.Transactional;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.data.domain.Sort.Order.desc;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class FloorResponseDto<T> {

    private long roomId;
//    private String roomName;
//    private LocalDateTime dDay;
//    private long restDay;
//    private String roomTheme;
//    private long viewCount;
//    private String weather;
//    private URL url;
//    private long roobitAmount;

//    private int floorNum;
//    private FloorInfo floorInfo;  //  floor 정보
//    private List<T> data;  // floor 안의 모든 데이터들
//
//    public FloorResponseDto(long roomId, int floorNum, Page page, List<T> data ) {
//        this.roomId = roomId;
//        this.floorNum = page.getNumber() + 1;  // floorNum - floor 번호
//        this.floorInfo = new FloorInfo(
//                page.getSize(),          // int roobitLimit - 한 floor의 루빗 리미트 = 10
//                page.getTotalElements(),     // long totalRoobits - 총 루빗 개수
//                page.getTotalPages());      // int totalFloor - 총 floor 개수
//        this.data = data;
//    }



}
