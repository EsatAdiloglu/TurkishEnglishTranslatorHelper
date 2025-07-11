package com.esatadiloglu.TurkishEnglishTranslator.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OriginalWordsRequest {

    @NotEmpty(message = "Error: At least one word is required")
    private List<String> words = new ArrayList<>();
}
