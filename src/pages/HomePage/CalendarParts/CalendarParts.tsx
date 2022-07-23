import React from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import { date as setDate, showPopup as setShowPopup } from 'pages/redux';
import * as S from './CalendarParts.styled';
import './react-calendar.css';

const CalendarParts = function CalendarParts() {
  const dispatch = useDispatch();

  return (
    <S.CalendarPicker>
      <Calendar
        value={new Date()}
        onChange={(value: Date) => {
          dispatch(setDate(value));
          dispatch(setShowPopup({}));
        }}
      />
    </S.CalendarPicker>
  );
};

export default CalendarParts;
