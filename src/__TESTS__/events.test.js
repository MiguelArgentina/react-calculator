import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom/extend-expect';

describe('Tests event handling by the Button component`s callback function:', () => {
  test('calls the callback function when clicked', () => {
    const handleClick = jest.fn();

    render(<Button
      name="Test button"
      color="test-color-css-class"
      wide="test-width-css-class"
      clickHandler={handleClick}
    />);

    fireEvent.click(screen.getByRole('button'), {
      target: { value: 'JavaScript' },
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});
