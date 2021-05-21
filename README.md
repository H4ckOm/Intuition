# Intuition

Intuition is an AI game played between the user and AI, where the player with the last unavailable move will be the winner.

## Description

Intuition is a game implemented using the artificial intelligence AI algorithm Minimax with Alpha-beta pruning.

At each turn, the player may choose to move any number of spaces up, right, down, left, or diagonally as long as the path is not blocked by a previously visited cell.

After the first player selects a cell to start, the second player may choose a starting cell. Players then take turns moving their player to a new cell, according to the rules above, until a player can no longer make a move - meaning that the player is effectively trapped. At this point, the opposing player wins.

The AI computer player uses the Minimax algorithm. This allows the AI to take the current game board state and build a tree of all possible moves and next states that each player may take. The Minimax algorithm is then applied from the bottom of the tree, upwards, to determine the best move to make for the current turn. The AI always assumes that the player will make an optimal move, and bases its decision accordingly.

### Dependencies

This project is made using React.js.

### Installing

To run this project, first of all, clone this repo and make sure you have installed node-package-manager (npm) in your system.

Open a terminal in project directory and run following commands:

<details>
   <summary>Running in Development Mode</summary>

### `npm install`

This will install all the required dependencies (including `devDependencies`).

### `npm run start`

This script will start the app in development mode on [localhost:3000](http://localhost:3000).
Development mode allows the programmer to see changes made to the app in real-time. And,
also warns one of possible (lint) errors which may slip into production.

</details>

<details>
   <summary>Running in Production Mode</summary>

### `npm install --only=prod`

This command will install all dependencies required to build the app.

### `npm run build`

It will create an optimized production build of the app for you.

### `serve -s build`

Running this command with start a production server on [port 3000](http://localhost:3000).

</details>

<!-- ## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details -->

<!-- ## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46) -->
