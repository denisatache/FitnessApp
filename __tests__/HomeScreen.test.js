import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  it('ar trebui sa navigheze catre ecranele corecte cand butoanele sunt apasate', () => {
    // Creăm un mock (o copie falsă) pentru funcția de navigare
    const mockNavigate = jest.fn();
    const mockNavigation = { navigate: mockNavigate };

    // Randăm ecranul dându-i navigarea falsă
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);

    // Apăsăm butonul BMI și verificăm dacă s-a apelat navigarea către 'BMI'
    const bmiButton = getByText('📏 BMI');
    fireEvent.press(bmiButton);
    expect(mockNavigate).toHaveBeenCalledWith('BMI');

    // Apăsăm butonul Timer și verificăm navigarea
    const timerButton = getByText('⏱️ Timer');
    fireEvent.press(timerButton);
    expect(mockNavigate).toHaveBeenCalledWith('Timer');
    
    // Apăsăm butonul History și verificăm navigarea
    const historyButton = getByText('📅 History');
    fireEvent.press(historyButton);
    expect(mockNavigate).toHaveBeenCalledWith('History');
  });
});