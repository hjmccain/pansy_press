import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pansy press header', () => {
  render(<App />);
  const header = screen.getByText(/pansy press/i);
  expect(header).toBeInTheDocument();
});
