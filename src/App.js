import "./App.css";
import IntuitionContainer from "./components/IntuitionContainer";
function App() {
  return (
    <div>
      <div className="container mb-5">
        <p className="title pb-4">Intuition</p>
        <div class="row">
          {/* <div class="col-sm"> */}
          <p class="description pb-3">
            Intuition is an AI game developed using Minimax algorithm with
            Alpha-beta pruning. This game is played between two players and
            winners need to be the last player with an available move.
          </p>
          <p class="description pb-5">
            <b>How to play?</b> <br /> <br />
            You are the player 1 (the blue one) and AI will be the player 2 (the
            yellow one), start by any cell and in each play you are allowed to
            visit any adjacent unvisited cell.
            <br />
            <br />
            Cells visited by player 1 will be marked by faint grey shade.
            <br />
            Cells visited by player 2 will be marked by darker grey shade.
          </p>
          {/* </div> */}
          {/* <div class="col-sm"> */}
          <IntuitionContainer width="3" height="3"></IntuitionContainer>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
