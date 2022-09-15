package com.board.board.room.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class RoomResponseDto {
    private long roomId;

    private String roomName;

    private long dDay;

    private String restDay;

    private long roomTheme;
    
    private long roomStatus;

    private LocalDateTime createdAt;

    public RoomResponseDto(long roomId, String roomName, long roomTheme, Object roomStatus, long createdAt, String restDay) {
    }
}
