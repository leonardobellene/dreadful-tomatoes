import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  const title = 'The Matrix';
  const releaseYear = 1999;
  const description = 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.';
  const image = 'https://example.com/the-matrix.jpg';
  const handleSelectCard = jest.fn();
  const isSelected = false;

  beforeEach(() => {
    handleSelectCard.mockClear();
  });

  test('calls handleSelectCard when card is clicked', () => {
    render(
      <Card
        title={title}
        releaseYear={releaseYear}
        description={description}
        image={image}
        handleSelectCard={handleSelectCard}
        isSelected={isSelected}
      />
    );

    const card = screen.getByTestId('card');
    fireEvent.click(card);

    expect(handleSelectCard).toHaveBeenCalledWith(title);
  });
});
