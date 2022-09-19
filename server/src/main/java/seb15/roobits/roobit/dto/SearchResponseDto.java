package seb15.roobits.roobit.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class SearchResponseDto<T> {

    private long memberId;
    private long roomId;
    private String keywords;

    private List<T> data;
    private roobits.roobit.dto.PageInfo pageInfo;

    public SearchResponseDto(long memberId, long roomId, String keywords, List<T> data, Page page) {
        this.memberId = memberId;
        this.roomId = roomId;
        this.keywords = keywords;
        this.data = data;
        this.pageInfo = new roobits.roobit.dto.PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }

}
