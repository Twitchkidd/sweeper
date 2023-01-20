# sweeper - minesweeper clone!

## dev instructions

It's a create-react-app build, have git, node, and yarn installed and set up, clone the repo and run `yarn && yarn start` to install dependencies and serve it up to localhost:3000

We're following Issue Based Development and semver, so branches off main reflect the version, then a dev branch, then branches that start with the issue number and include a concise description, like 001-colors-and-font-location.

## From Wikipedia:

Minesweeper is a logic puzzle video game genre generally played on personal computers. The game features a grid of clickable squares, with hidden "mines" scattered throughout the board. The objective is to clear the board without detonating any mines, with help from clues about the number of neighboring mines in each field.

Minesweeper is a puzzle video game. In the game, mines (that resemble naval mines in the classic theme) are scattered throughout a board, which is divided into cells. Cells have three states: unopened, opened and flagged. An unopened cell is blank and clickable, while an opened cell is exposed. Flagged cells are unopened cells marked by the player to indicate a potential mine location; some implementations make flagged cells unopenable to reduce the risk of uncovering a suspected mine.

A player selects a cell to open it. If a player opens a mined cell, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally and/or adjacent to it, or a blank tile (or "0"), and all adjacent non-mined cells will automatically be opened. Players can also flag a cell, visualised by a flag being put on the location, to denote that they believe a mine to be in that place. Flagged cells are still considered unopened, and may be unflagged. In some versions of the game when the number of adjacent mines is equal to the number of adjacent flagged cells, all adjacent non-flagged unopened cells will be opened, a process known as chording.
Objective and strategy

A game of Minesweeper begins when the player first selects a cell on a board. In some versions of the game the first click is guaranteed to be safe; whilst some other variants further guaranteeing that all adjacent cells are safe as well. During the game, the player uses information given from the opened cells to deduce further cells that are safe to open, iteratively gaining more information to solve the board. The player is also given the number of remaining mines in the board, known as the minecount, which is calculated as the total number of mines subtracted by the number of flagged cells (thus the minecount can be negative if too many flags have been placed).

To win a game of Minesweeper, all non-mine cells must be opened without opening a mine. There is no score, however there is a timer recording the time taken to finish the game. Difficulty can be increased by adding mines or starting with a larger grid. Microsoft Minesweeper offers three default board configurations, usually known as beginner, intermediate and expert, in order of increasing difficulty. Beginner is usually on an 8x8 or 9x9 board containing 10 mines, Intermediate is usually on a 16x16 board with 40 mines and expert is usually on a 30x16 board with 99 mines, however this is usually customisable.

## 2023-01-17 0.0.0!

To the future!

## 2023-01-14

https://www.taniarascia.com/react-architecture-directory-structure/

## colors and font location

They're in index.css ... normally they'd be worked into a global stylesheet with styled-components, this project wasn't created with the intent to stay a create-react-app project forever, HENCE!

## 2023-01-19

Are some of the things in layout actually layout components or are they components that have an aspect of layout to them, cause it seems like you see them in one context, so, something to thing about in the morning.

## 2023-01-20

I can't find anything on what the game bar (?) or anything are supposed to be called, so we've got the title bar, menu bar, and game bar now, go!

> yellow squares look bigger on a white background compared to a black background, while red squares look smaller on a white background than a black background! ~Itten: Elements of Color
