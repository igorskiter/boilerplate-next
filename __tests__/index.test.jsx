import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index.tsx';
import theme from '../theme/index.ts';

import '@testing-library/jest-dom';
import 'jest-styled-components';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>);
    const heading = screen.getByRole('heading', {
      name: /welcome/i, hidden: false ,
    });

    expect(heading).toBeInTheDocument();
  });
});
