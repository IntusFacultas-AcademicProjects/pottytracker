import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTint, faPoop, faBed, faSun,
} from '@fortawesome/free-solid-svg-icons';
import { PottyForm } from '../components/PottyForm';
import { CheckboxButton } from '../components/CheckboxButton';
import { PrimaryButton } from '../components/PrimaryButton';
import { ToastContext } from '../components/ToastManager';
import ButtonGroup from '../components/ButtonGroup';
import { API } from '../hooks';
import { ReactComponent as AccidentIcon } from '../assets/accident.svg';
import { IconographicLabel } from '../components/IconographicLabel';
import { ComposableInput, StyledInput } from '../components/ComposableInput';
import { formatDate, formatDateForDisplay } from '../utils';

export const FormView = () => {
  const [pee, onPee] = useState(false);
  const [poo, onPoop] = useState(false);
  const [diarrhea, onDiarrhea] = useState(false);
  const [accident, onAccident] = useState(false);
  const [sleep, onNapStarted] = useState(false);
  const [awoke, onNapEnded] = useState(false);
  const [datetime, setDateTime] = useState(new Date());

  const { toast, flavors } = React.useContext(ToastContext);
  const testToasts = (e) => {
    e.preventDefault();
    toast('Test Toast', flavors.success);
  };
  const submit = async (e) => {
    e.preventDefault();
    const postData = {
      pee,
      poo,
      accident,
      diarrhea,
      sleep,
      awoke,
      datetime: formatDateForDisplay(datetime),
    };
    try {
      await API.submit(postData);
      onPee(false);
      onPoop(false);
      onDiarrhea(false);
      onAccident(false);
      onNapStarted(false);
      onNapEnded(false);
      setDateTime(new Date());
      toast('Submitted successfully', flavors.success);
    } catch (error) {
      toast('Submission failed. Server error.', flavors.error);
    }
  };
  const handleDateTimeInput = (e) => {
    if (!e.target.validity.valid) return;
    const [date, time] = e.target.value.split('T');
    const [year, month, day] = date.split('-');
    const [hour, minutes] = time.split(':');
    const newDate = new Date(
      Number(year), Number(month) - 1, Number(day), Number(hour), Number(minutes),
    );
    setDateTime(newDate);
  };

  return (
    <PottyForm>
      <ComposableInput
        label="Date and Time"
        name="DateAndTime"
        input={(
          <StyledInput
            id="DateAndTime"
            type="datetime-local"
            value={formatDate(datetime)}
            onChange={handleDateTimeInput}
          />
        )}
      />
      <ButtonGroup>
        <CheckboxButton label="Pee" name="Pee" checked={pee} onChange={() => onPee(!pee)}>
          <IconographicLabel>
            Went Pee
          </IconographicLabel>
          <FontAwesomeIcon icon={faTint} />
        </CheckboxButton>
        <CheckboxButton label="Poop" name="Poop" checked={poo} onChange={() => onPoop(!poo)}>
          <IconographicLabel>
            Went Poo
          </IconographicLabel>
          <FontAwesomeIcon icon={faPoop} />
        </CheckboxButton>
        <CheckboxButton
          label="Diarrhea"
          name="Diarrhea"
          checked={diarrhea}
          onChange={() => { onPoop(!diarrhea ? true : poo); onDiarrhea(!diarrhea); }}
        >
          <IconographicLabel>
            Had Diarrhea
          </IconographicLabel>
          <FontAwesomeIcon icon={faPoop} />
        </CheckboxButton>
        <CheckboxButton label="Accident" name="Accident" checked={accident} onChange={() => onAccident(!accident)}>
          <IconographicLabel>
            Was Accident
          </IconographicLabel>
          <AccidentIcon />
        </CheckboxButton>
        <CheckboxButton
          label="NapStarted"
          disabled={awoke}
          name="NapStarted"
          checked={sleep}
          onChange={() => onNapStarted(!sleep)}
        >
          <IconographicLabel>
            Began Nap
          </IconographicLabel>
          <FontAwesomeIcon icon={faBed} />
        </CheckboxButton>
        <CheckboxButton
          label="NapEnded"
          name="NapEnded"
          disabled={sleep}
          checked={awoke}
          onChange={() => onNapEnded(!awoke)}
        >
          <IconographicLabel>
            Woke Up
          </IconographicLabel>
          <FontAwesomeIcon icon={faSun} />
        </CheckboxButton>
        <PrimaryButton
          disabled={![pee, poo, accident, sleep, awoke, diarrhea].some((value) => value)}
          role="button"
          onClick={submit}
        >
          Submit
        </PrimaryButton>
      </ButtonGroup>
    </PottyForm>
  );
};

export default FormView;
