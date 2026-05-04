import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StartWorkout from '../StartWorkout';

describe('StartWorkout Screen', () => {
  it('ar trebui sa arate sesiunea in desfasurare cand apasam Start', () => {
    // Trimitem un route mockuit (gol), asa cum o face React Navigation
    const { getByText, queryByText } = render(<StartWorkout route={{ params: {} }} />);
    
    const startButton = getByText('Start Workout');
    fireEvent.press(startButton);

    // Dupa apasare, ar trebui sa apara textul de sesiune in desfasurare
    expect(getByText('⏱️ Sesiune în desfășurare...')).toBeTruthy();
    
    // Si butonul ar trebui sa se fi schimbat in "Stop"
    expect(getByText('Stop')).toBeTruthy();
  });
});