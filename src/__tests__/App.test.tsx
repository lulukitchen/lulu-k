import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../i18n';
import Home from '../pages/Home';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </I18nextProvider>
  </HelmetProvider>
);

describe('App Components', () => {
  it('renders home page correctly', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );
    
    // Check for the unique text in the hero section
    expect(screen.getByText('אוכל סיני אותנטי מוכן טרי בירושלים והסביבה')).toBeInTheDocument();
    expect(screen.getByText('הזמן עכשיו')).toBeInTheDocument();
  });
});