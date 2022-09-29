//package seb15.roobits.roobit.dto;//package roobits.roobit.dto;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.PropertyNamingStrategies;
//import com.fasterxml.jackson.databind.annotation.JsonNaming;
//import lombok.*;
//import org.springframework.boot.autoconfigure.web.WebProperties;
//import org.springframework.data.annotation.CreatedDate;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Sort;
//import roobits.roobit.entity.Roobit;
//import roobits.roobit.repository.RoobitRepository;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.springframework.data.domain.Sort.Order.desc;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
//@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
//public class FloorDto<T> {   // ManagetController return 쪽 형식 수정하고 FloorDto도 형식 수정
//
//    private long roomId;   // roobitAmount까지를 roomData로 묶기
////    private String roomName;
////    private LocalDateTime dDay;
////    private long restDay;
////    private String roomTheme;
////    private long viewCount;
////    private String weather;
////    private URL url;
////    private long roobitAmount;
//
//    //루빗츠 내부 > 플로어 내부 > 10개 루빗
//    private List<Floors> floors = new ArrayList<>();
//
//    @Data
//    @NoArgsConstructor
//    public static class Floors{
//        private int floorNum;
//        private List<Contents> contents = new ArrayList<>();
//
//        Page<Roobit> floor = RoobitRepository.findByRoomId(1, PageRequest.of(0, 10, Sort.by(desc("roobitId"))));  // 검색 리턴한 데이터를 객체에 담기
//
//        public Floors(int floorNum, Roobits roobits ) {
//            this.floorNum = floor.getNumber();
//        }
//
//
//    }
//
//    //루빗츠 내부 > 플로어 내부 > 10개 루빗
//    public static class Contents{
//        private long roobitId;
//        private String nickname;
////        private String body;
////        private String email;
////        private String reception;
////        private String style;
////        private LocalDateTime createdAt;
////        private Roobit.RoobitStatus roobitStatus;
//    }
//
//    Page<Roobit> floor = RoobitRepository.findByRoomId(roomId, PageRequest.of(0, 10, Sort.by(desc("roobitId"))));  // 검색 리턴한 데이터를 객체에 담기
//
//        List<Contents> contents = new ArrayList<>();  // 담은 객체를 Content 객체에 담기
//        floor.getContent().forEach(content -> {
//            Contents cont = new Contents();
//            cont.setRoobitId(contents.getRoobitId());
//            cont.setNickname(contents.getNickname());
//            contents.add(cont);
//        });
//
//        FloorDto floorDto = new FloorDto();  // List<Content>를 FloorDto에 담기
//        floorDto.setContents(contents);
//        floorDto.setTotalPages(floor.getTotalPages());
//        floorDto.setNumberOfElements(floor.getNumberOfElements());
//        floorDto.setTotalElements(floorDto.getTotalElements());
//
////        //json String 으로 변환된 floorDto를 보기 좋게 변환.
////        System.out.println(JsonFormatter.prettyPrint(floorResponse));
//private int floorNum;
//    private FloorInfo floorInfo;  //  floor 정보 ( floor번호, 한 floor 루빗 limit, 총 루빗 개수, 총 floor 개수)
//    private List<T> data;  // floor 안의 모든 데이터들
//
//    public FloorResponseDto(long roomId, int floorNum, Page page, List<T> data ) {
//        this.roomId = roomId;
//        this.floorNum = page.getNumber() + 1;  // floorNum - floor 번호
//        this.floorInfo = new FloorInfo(
//                page.getNumber(),             // int floor 번호
//                page.getSize(),               // int roobitLimit - 한 floor의 루빗 리미트 = 10
//                page.getTotalElements(),     // long totalRoobits - 총 루빗 개수
//                page.getTotalPages());      // int totalFloor - 총 floor 개수
//        this.data = data;
//    }
//
//}
