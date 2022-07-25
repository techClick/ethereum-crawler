import React from 'react';
import * as S from './Loading.styled';

const Loading = function Loading({ text }:{ text: string }) {
  return (
    <S.Container>{text}</S.Container>
  );
};

export default Loading;
