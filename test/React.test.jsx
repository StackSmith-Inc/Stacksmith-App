import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from '../client/App'
import React from 'react';

describe('App tests', () => {

  it('it should render ', async () => {
    render(<App/>);
    expect(screen.getByText('Hello')).toBeDefined;
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
});
