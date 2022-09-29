package seb15.roobits.roobit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class PageInfo {
    private int page;
    private int roobitLimit;
    private long roobitAmount;
    private int totalPages;
}
