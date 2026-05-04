import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BMIScreen from '../BMIScreen';

describe('BMIScreen', () => {
  it('ar trebui sa calculeze corect BMI-ul si sa afiseze interpretarea', () => {
    const { getByPlaceholderText, getByText } = render(<BMIScreen />);
    
    // Gasim inputurile si introducem datele (75 kg si 180 cm)
    const weightInput = getByPlaceholderText('Greutate (kg)');
    const heightInput = getByPlaceholderText('Înălțime (cm)');
    
    fireEvent.changeText(weightInput, '75');
    fireEvent.changeText(heightInput, '180');
    
    // Apasam butonul
    fireEvent.press(getByText('Calculează'));

    // 75 / (1.8 * 1.8) = 23.148... rotunjit la 23.15
    expect(getByText('Indice BMI: 23.15')).toBeTruthy();
    expect(getByText('🟢 Greutate normală')).toBeTruthy();
  });
});