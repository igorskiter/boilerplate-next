
import { render, screen } from '@testing-library/react';
import Home from '../app/page.tsx';

import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /welcome/i, hidden: false ,
    });

    expect(heading).toBeInTheDocument();
  });
});
