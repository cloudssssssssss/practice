import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import UserProfile from './UserProfile';
import '@testing-library/jest-dom';

describe('UserProfile Component', () => {
  it('відображає індикатор завантаження спочатку', () => {
    render(<UserProfile />);
    expect(screen.getByText(/Завантаження.../i)).toBeInTheDocument();
  });

  it('відображає дані користувача після успішного запиту', async () => {
    const mockUser = { name: 'Ivan Franko', email: 'ivan@example.com' };
    
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockUser,
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByText('Ivan Franko')).toBeInTheDocument();
      expect(screen.getByText('ivan@example.com')).toBeInTheDocument();
    });
  });

  it('відображає повідомлення про помилку при невдалому запиті', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByText(/Помилка: Помилка завантаження/i)).toBeInTheDocument();
    });
  });
});