package seb15.roobits.roobit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class SingleResponseDto<T> {
    private T data; // FloorResponseDto로 보냄
}
