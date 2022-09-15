package com.board.board.room.dto;

import javax.validation.constraints.Max;

@Max(30)
public @interface RestDay {
    long max();
    String message();
}
