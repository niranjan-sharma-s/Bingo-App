import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./BingoCard.styles";
import confetti from "canvas-confetti";
import quotes from "../data/quotes";

const BingoCard = () => {
  const [card, setCard] = useState([]);
  const [bingoCellsLength, setBingoCellsLength] = useState();
  const classes = useStyles();

  useEffect(() => {
    console.log("BingoCard useEffect()");
    const newCard = Array(5)
      .fill(null)
      .map(() =>
        Array(5)
          .fill(null)
          .map(() => ({
            value: quotes[Math.floor(Math.random() * quotes.length)],
            checked: false,
          }))
      );
    newCard[2][2] = { value: "Sensory-Minds", checked: true };
    setCard(newCard);
  }, []);

  useEffect(() => {
    confetti();
  }, [bingoCellsLength]);

  const checkBingo = () => {
    const bingoCells = [];

    // Check rows
    for (let i = 0; i < 5; i++) {
      const row = card[i];
      if (row.every((cell) => cell.checked)) {
        bingoCells.push(...row);
      }
    }

    // Check columns
    for (let i = 0; i < 5; i++) {
      const column = card.map((row) => row[i]);
      if (column.every((cell) => cell.checked)) {
        bingoCells.push(...column);
      }
    }

    // Check diagonals
    const diag1 = card.map((row, i) => row[i]);
    const diag2 = card.map((row, i) => row[4 - i]);

    if (diag1.every((cell) => cell.checked)) {
      bingoCells.push(...diag1);
    }

    if (diag2.every((cell) => cell.checked)) {
      bingoCells.push(...diag2);
    }

    if (bingoCells.length > 0) {
      setBingoCellsLength(bingoCells.length);
    }
  };

  const handleCheck = (rowIdx, cellIdx) => {
    if (rowIdx === 2 && cellIdx === 2) return;
    const newCard = [...card];
    newCard[rowIdx][cellIdx].checked = !newCard[rowIdx][cellIdx].checked;
    setCard(newCard);
    checkBingo();
  };

  return (
    <>
      <Typography className={classes.bingoHeading}>
        Sensory-Minds : The Bingo App Experience
      </Typography>
      <Box sx={{ flexGrow: 1 }} className={classes.bingoBox}>
        <Grid container spacing={0}>
          {card.map((row, rowIndex) => (
            <Grid
              key={rowIndex}
              container
              item
              spacing={0}
              xs={12}
              className={classes.bingoBoard}
            >
              {row.map((cell, cellIndex) => (
                <Grid key={`${rowIndex}-${cellIndex}`} item xs={2}>
                  <Button
                    variant={cell.checked ? "contained" : "outlined"}
                    color={cell.checked ? "primary" : "default"}
                    onClick={() => handleCheck(rowIndex, cellIndex)}
                    className={classes.bingoButton}
                    data-testid={`bingoCell-${rowIndex}-${cellIndex}`}
                  >
                    {cell.value}
                  </Button>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BingoCard;
