import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductDetails: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when fetching data', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({} as any);
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays product details after successful fetch', async () => {
    const mockData = { name: 'Sample Product' };
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/sample product/i)).toBeInTheDocument());
  });

  test('handles error during data fetch', async () => {
    const errorMessage = 'Failed to fetch';
    (fetchProductDetails as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument());
  });

  test('allows user interaction with product details', () => {
    const mockData = { name: 'Sample Product' };
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/sample product/i));
    expect(fetchProductDetails).toHaveBeenCalledWith('Sample Product');
  });

  test('ensures accessibility features are in place', () => {
    const mockData = { name: 'Sample Product' };
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    const productLink = screen.getByText(/sample product/i);
    expect(productLink).toHaveAttribute('role', 'link');
    expect(productLink).toHaveAttribute('aria-label', 'Sample Product');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductDetails: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when fetching data', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({} as any);
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays product details after successful fetch', async () => {
    const mockData = { name: 'Sample Product' };
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/sample product/i)).toBeInTheDocument());
  });

  test('handles error during data fetch', async () => {
    const errorMessage = 'Failed to fetch';
    (fetchProductDetails as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument());
  });

  test('allows user interaction with product details', () => {
    const mockData = { name: 'Sample Product' };
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/sample product/i));
    expect(fetchProductDetails).toHaveBeenCalledWith('Sample Product');
  });

  test('ensures accessibility features are in place', () => {
    const mockData = { name: 'Sample Product' };
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce(mockData);
    render(<CoreFunctionalityComponent />);
    const productLink = screen.getByText(/sample product/i);
    expect(productLink).toHaveAttribute('role', 'link');
    expect(productLink).toHaveAttribute('aria-label', 'Sample Product');
  });
});