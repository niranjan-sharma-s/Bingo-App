// import React from 'react';
// import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react';
// import BingoCard from './BingoCard';

// describe('BingoCard', () => {
// //   it('renders correctly', () => {
// //     const { getByText } = render(<BingoCard />);
// //     expect(getByText('Sensory-Minds : The Bingo App Experience')).toBeInTheDocument();
// //   });

//   it('checks a bingo cell', async () => {
//     const { getByTestId } = render(<BingoCard />);
//     // const button = getByText('Sensory-Minds');
//     const button = getByTestId('bingoCell')
//     expect(button).toHaveAttribute('aria-checked', 'false');
//     fireEvent.click(button);
//     await waitFor(() => expect(button).toHaveAttribute('aria-checked', 'true'));
//   });

// //   it('checks for bingo', async () => {
// //     const { getByText } = render(<BingoCard />);
// //     const button = getByText('Sensory-Minds');
// //     console.log(button,'button')
// //     fireEvent.click(button);
// //     await waitFor(() => expect(button).toHaveAttribute('aria-checked', 'true'));
// //     const bingoCells = [];
// //     for (let i = 0; i < 5; i++) {
// //       const row = getByText(`Row ${i + 1}`);
// //       fireEvent.click(row);
// //       bingoCells.push(row);
// //     }
// //     expect(bingoCells.length).toBe(5);
// //   });
// });


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BingoCard from './BingoCard';

describe('BingoCard component', () => {
  it('renders without crashing', () => {
    render(<BingoCard />);
  });

  it('renders correct initial bingo card', () => {
    const { getByText } = render(<BingoCard />);
    expect(getByText('Sensory-Minds : The Bingo App Experience')).toBeInTheDocument();
  });

  it('clicking a cell toggles its color indicating checked', () => {
    const { getByTestId } = render(<BingoCard />);
    const cell = getByTestId('bingoCell-0-0');
    fireEvent.click(cell);
    expect(cell).toHaveStyle('color:#fff')
  });

  it('clicking the center cell does not toggle its color ', () => {
    const { getByTestId } = render(<BingoCard />);
    const centerCell = getByTestId('bingoCell-2-2')
    console.log(centerCell, 'centerCell...............')
    fireEvent.click(centerCell);
    expect(centerCell).toHaveStyle('color: #fff' )
    const checkMarkedClassList = centerCell.classList.contains('marked');
    expect(checkMarkedClassList).toBeFalsy()
  });

});
