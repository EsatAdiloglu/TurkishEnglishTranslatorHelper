package com.esatadiloglu.TurkishEnglishTranslator.domain.dtos;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OriginalWordsRequestDto {

    @NotEmpty(message = "Error: At least one word is required")
    @Valid
    private List<String> words = new ArrayList<>();
}
