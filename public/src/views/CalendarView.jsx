import { React, useEffect, useState } from 'react';
// import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import { ComposableInput, StyledInput } from '../components/ComposableInput';
import ButtonGroup from '../components/ButtonGroup';
import CheckboxButton from '../components/CheckboxButton';
import API from '../hooks';
import { formatDate } from '../utils';
import Day, { DaysContainer } from '../components/Day';

const CalendarContainer = styled.div`
  /* ${({ theme }) => css`
    max-width: ${theme.maxWidth};
  `} */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
`;
const CalendarFormContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.maxWidth};
  `}
`;

export const CalendarView = () => {
  const [day, setDayOrMonth] = useState(true);
  const [data, setData] = useState([]);
  const [shownDate, setShownDate] = useState(new Date());
  const retrieveDate = async () => {
    const date = formatDate(shownDate).substr(0, 10);
    const response = await API.retrieveEventsForDay(date);
    setData([response]);
  };
  const handleDateTimeInput = (e) => {
    if (!e.target.validity.valid) return;
    const [date, time] = e.target.value.split('T');
    const [year, month, d] = date.split('-');
    const [hour, minutes] = time.split(':');
    const dt = new Date(Number(year), Number(month) - 1, Number(d), Number(hour), Number(minutes));
    setShownDate(dt);
  };
  const retrieveWeek = async () => {
    const END_OF_WEEK = 6;
    const startOfWeek = shownDate.getDay() === 0
      ? shownDate
      : (() => { const a = new Date(); a.setDate(shownDate.getDate() - shownDate.getDay()); return a; })();
    const endOfWeek = shownDate.getDay() === 6
      ? shownDate
      : (() => {
        const a = new Date(); a.setDate(shownDate.getDate() + (END_OF_WEEK - shownDate.getDay())); return a;
      })();
    const response = await API.retrieveEventsForDuration(
      formatDate(startOfWeek).substr(0, 10),
      formatDate(endOfWeek).substr(0, 10),
    );
    const groupByDate = (ajaxData) => {
      const groupedObj = ajaxData.reduce((acc, cur) => {
        const [date, time] = cur.datetime.split('T');
        Array.isArray(acc[date]) ? acc[date].push(cur) : acc[date] = [cur];
        return acc;
      }, {});
      const groupedArr = [];
      Object.keys(groupedObj).forEach((key) => {
        groupedArr.push(groupedObj[key]);
      });
      return groupedArr;
    };
    const groupedData = groupByDate(response);
    setData(groupedData);
  };
  useEffect(() => {
    day ? retrieveDate() : retrieveWeek();
  }, [day, shownDate]);
  return (
    <CalendarContainer>
      <CalendarFormContainer>
        <ComposableInput
          label="Date and Time"
          name="DateAndTime"
          input={(
            <StyledInput
              id="DateAndTime"
              type="datetime-local"
              value={formatDate(shownDate)}
              onChange={handleDateTimeInput}
            />
          )}
        />
        <ButtonGroup horizontal>
          <CheckboxButton label="Day" name="Day" checked={day} onChange={() => setDayOrMonth(true)}>
            Day
          </CheckboxButton>
          <CheckboxButton label="Week" name="Week" checked={!day} onChange={() => setDayOrMonth(false)}>
            Week
          </CheckboxButton>
        </ButtonGroup>
      </CalendarFormContainer>
      <DaysContainer>
        {/* eslint-disable-next-line */}
        {data.map((recordDay, index) => <Day key={`${shownDate.toISOString()}-${index}`} records={recordDay} />)}
        {data.length === 0 && <b>No records available.</b>}
      </DaysContainer>
    </CalendarContainer>
  );
};

export default CalendarView;
