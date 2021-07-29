import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';
import Display from '../components/Display';
import NotFound from '../components/NotFound';
import '@testing-library/jest-dom/extend-expect';

const handleClick = () => 'Test click event handling function';
const { next, total, operation } = { next: 'Test display text', total: null, operation: null };

describe('Tests rendering components and showing their HTML output:', () => {
  test('renders the Button component', () => {
    render(<Button
      name="Test button"
      color="test-color-css-class"
      wide="test-width-css-class"
      clickHandler={handleClick}
    />);
    expect(screen.getByText('Test button'))
      .toBeInTheDocument();
    screen.debug();
  });

  test('renders the NotFound component', () => {
    render(
      <Router>
        <NotFound />
      </Router>,
    );

    expect(screen.getByText('The page you are looking for does not exist.'))
      .toBeInTheDocument();
    screen.debug();
  });

  test('renders the Display component', () => {
    render(<Display
      operation={operation}
      result={next || total}
    />);
    expect(screen.getByText('Test display text'))
      .toBeInTheDocument();
    screen.debug();
  });
});
