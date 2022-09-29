package seb15.roobits.globaldto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> roomData;
    private PageInfo pageInfo;

    public MultiResponseDto(List<T> roomData, Page page) {
        this.roomData = roomData;
        this.pageInfo = new PageInfo(page.getNumber() + 1, page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}
