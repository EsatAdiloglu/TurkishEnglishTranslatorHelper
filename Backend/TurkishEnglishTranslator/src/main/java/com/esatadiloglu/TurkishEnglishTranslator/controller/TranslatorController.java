package com.esatadiloglu.TurkishEnglishTranslator.controller;

import com.esatadiloglu.TurkishEnglishTranslator.domain.dtos.OriginalWordsRequestDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/translator")
@RequiredArgsConstructor
public class TranslatorController {

    @GetMapping()
    public ResponseEntity<OriginalWordsRequestDto> getTranslatedWords(
            @Valid @RequestBody OriginalWordsRequestDto originalWordsRequestDto
            ){
            return new ResponseEntity<>(originalWordsRequestDto, HttpStatus.OK);
    }
}
