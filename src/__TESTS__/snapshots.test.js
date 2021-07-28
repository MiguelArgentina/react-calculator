import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '../components/Button';
import Display from '../components/Display';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quote from '../components/Quote';

describe('Tests snapshots of components', () => {
  it('the Home component renders correctly:', () => {
    const homeSnapshot = renderer
      .create(
        <Home />,
      )
      .toJSON();
    expect(homeSnapshot).toMatchSnapshot();
  });

  it('the Calculator component renders correctly:', () => {
    const calcSnapshot = renderer
      .create(
        <Calculator />,
      )
      .toJSON();
    expect(calcSnapshot).toMatchSnapshot();
  });

  it('the Quote component renders correctly:', () => {
    const quoteSnapshot = renderer
      .create(
        <Quote />,
      )
      .toJSON();
    expect(quoteSnapshot).toMatchSnapshot();
  });

  it('the Button component renders correctly:', () => {
    const handleClick = jest.fn();
    const btnSnapshot = renderer
      .create(<Button
        name="Test button"
        color="test-color-css-class"
        wide="test-width-css-class"
        clickHandler={handleClick}
      />)
      .toJSON();
    expect(btnSnapshot).toMatchSnapshot();
  });

  it('the Display component renders correctly:', () => {
    const { next, total, operation } = { next: 'Test display text', total: null, operation: null };
    const dispSnapshot = renderer
      .create(<Display
        operation={operation}
        result={next || total}
      />)
      .toJSON();
    expect(dispSnapshot).toMatchSnapshot();
  });

  it('the NotFound component renders correctly:', () => {
    const notFoundSnapshot = renderer
      .create(
        <Router>
          <NotFound />
        </Router>,
      )
      .toJSON();
    expect(notFoundSnapshot).toMatchSnapshot();
  });
});
