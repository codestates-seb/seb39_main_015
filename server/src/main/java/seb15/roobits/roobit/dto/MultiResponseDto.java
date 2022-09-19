package roobits.roobit.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;
import seb15.roobits.room.dto.PageInfo;

import javax.validation.constraints.Positive;
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

}
