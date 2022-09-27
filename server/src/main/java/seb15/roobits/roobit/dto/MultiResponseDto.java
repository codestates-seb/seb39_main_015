package roobits.roobit.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;
import roobits.roobit.dto.PageInfo;

import java.util.List;


@Getter
public class MultiResponseDto<T> {

    private List<T> data;
    private PageInfo pageInfo;

    public MultiResponseDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
//    private List<T> roomData;
//    private List<T> roobits;
//
//    public MultiResponseDto(List<T> roomData, List<T> roobits){
//        this.roomData = roomData;
//        this.roobits = roobits;
//    }
}
