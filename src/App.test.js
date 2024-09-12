import { render, screen } from '@testing-library/react';
import App from './App';

test('renders titre h1 de la page', async () => {
  render(<App />);
  await screen.findByText("Argent Bank");
});
