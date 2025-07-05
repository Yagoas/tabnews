import { act, render } from '@testing-library/react';

import useKeyboardShortcuts from '../../../hooks/useKeyboardShortcuts';

function TestComponent() {
  const shortcuts = useKeyboardShortcuts();
  return <div data-testid="shortcuts">{JSON.stringify(shortcuts)}</div>;
}

describe('useKeyboardShortcuts', () => {
  test('Pressionar "/" deve abrir a pesquisa', () => {
    const { getByTestId } = render(<TestComponent />);
    const event = new KeyboardEvent('keydown', { key: '/' });

    act(() => {
      document.dispatchEvent(event); // Envolva o evento em act
    });

    const shortcuts = JSON.parse(getByTestId('shortcuts').textContent);
    expect(shortcuts.isSearchOpen).toBe(true);
  });
});

test('Pressionar "j" deve navegar para o próximo post', () => {
  const { getByTestId } = render(<TestComponent />);
  const event = new KeyboardEvent('keydown', { key: 'j' });

  act(() => {
    document.dispatchEvent(event); // Envolva o evento em act
  });

  const shortcuts = JSON.parse(getByTestId('shortcuts').textContent);
  expect(shortcuts.currentPostIndex).toBe(1);
});

test('Pressionar "k" deve navegar para o post anterior', () => {
  const { getByTestId } = render(<TestComponent />);
  const event = new KeyboardEvent('keydown', { key: 'k' });

  act(() => {
    document.dispatchEvent(event); // Envolva o evento em act
  });

  const shortcuts = JSON.parse(getByTestId('shortcuts').textContent);
  expect(shortcuts.currentPostIndex).toBe(-1);
});
