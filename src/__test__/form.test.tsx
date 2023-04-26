import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

describe('Form', () => {
  it('should call onSubmit with the input value when the form is submitted', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByRole } = render(<Form onSubmit={onSubmit} />);

    const input = getByPlaceholderText('Enter IP address');
    console.log("sddsds",input)
    const submitButton = getByRole('button', { name: /show sunlight timing/i });
    console.log("submitButton",submitButton)
    fireEvent.change(input, { target: { value: '127.0.0.1' } });
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledWith('127.0.0.1');
  });
});
