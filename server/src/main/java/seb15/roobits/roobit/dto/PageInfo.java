package seb15.roobits.roobit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class PageInfo {
    private int pageId; //page -> Floor
    private int roobitLimit = 10 ;  // size 10
    private long totalRoobits;   // 루빗이 123개라면
    private int totalPages;   // 몇칸인지.. 13개 칸

}
