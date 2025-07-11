package com.esatadiloglu.TurkishEnglishTranslator.mapper;

import com.esatadiloglu.TurkishEnglishTranslator.domain.OriginalWordsRequest;
import com.esatadiloglu.TurkishEnglishTranslator.domain.dtos.OriginalWordsRequestDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface WordMapper {

    OriginalWordsRequest fromDto(OriginalWordsRequestDto originalWordsRequestDto);

    OriginalWordsRequestDto toDto(OriginalWordsRequest originalWordsRequest);
}
