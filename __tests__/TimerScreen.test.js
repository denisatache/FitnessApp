import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TimerScreen from '../TimerScreen';

describe('TimerScreen', () => {
  it('ar trebui sa schimbe textul butonului din Start in Stop', () => {
    const { getByText } = render(<TimerScreen />);
    
    // La inceput, butonul ar trebui sa fie pe "Start"
    const startButton = getByText('Start');
    expect(startButton).toBeTruthy();

    // Apasam butonul
    fireEvent.press(startButton);

    // Textul ar trebui sa se fi schimbat in "Stop"
    expect(getByText('Stop')).toBeTruthy();
  });

  it('ar trebui sa adauge un "Lap" in lista cand este apasat', () => {
    const { getByText, queryByText } = render(<TimerScreen />);
    
    // Pornim cronometrul ca sa deblocam butonul Lap
    fireEvent.press(getByText('Start'));
    
    // Apasam Lap
    fireEvent.press(getByText('Lap'));

    // Verificam daca a aparut inregistrarea Lap 1 pe ecran
    expect(getByText(/Lap 1:/i)).toBeTruthy();
  });
});