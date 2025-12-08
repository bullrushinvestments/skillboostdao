import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

// Mock external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('renders design architecture items correctly when data is available', async () => {
    const mockData = { items: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/item 1/i));
    expect(screen.getByText(/item 2/i)).toBeInTheDocument();
  });

  test('handles user interactions such as clicking on items', async () => {
    const mockData = { items: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    fireEvent.click(screen.getByText(/item 1/i));
    await waitFor(() => screen.getByText(/selected item 1/i));
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockData = { items: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    expect(screen.getByText(/item 1/i)).toHaveAttribute('role', 'button');
    expect(screen.getByText(/item 1/i)).toHaveAttribute('tabindex', '0');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

// Mock external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('renders design architecture items correctly when data is available', async () => {
    const mockData = { items: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/item 1/i));
    expect(screen.getByText(/item 2/i)).toBeInTheDocument();
  });

  test('handles user interactions such as clicking on items', async () => {
    const mockData = { items: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    fireEvent.click(screen.getByText(/item 1/i));
    await waitFor(() => screen.getByText(/selected item 1/i));
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockData = { items: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    expect(screen.getByText(/item 1/i)).toHaveAttribute('role', 'button');
    expect(screen.getByText(/item 1/i)).toHaveAttribute('tabindex', '0');
  });
});