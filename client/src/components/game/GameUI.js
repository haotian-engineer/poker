import React from "react";
import { BetSlider } from "./BetSlider";
import { UIWrapper } from "./UIWrapper";
import GameUIButton from "../buttons/GameUIButton";

export const GameUI = ({
  currentTable,
  seatId,
  bet,
  setBet,
  raise,
  standUp,
  fold,
  check,
  call,
}) => {
  return (
    <UIWrapper>
      <div className="row">
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          Bet {bet}
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={standUp}
        >
          Stand Up
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() =>
            raise(
              currentTable.seats[seatId].stack + currentTable.seats[seatId].bet
            )
          }
        >
          All In ({currentTable.seats[seatId].stack})
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={() =>
            raise(
              currentTable.seats[seatId].stack + currentTable.seats[seatId].bet
            )
          }
        >
          POT 1.75$
        </GameUIButton>
      </div>
      <div className="row">
        <GameUIButton
          width="60.05px"
          height="48.03px"
          fill={false}
          radius="7px"
          // onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          MIN
        </GameUIButton>
        <GameUIButton
          width="40.47px"
          height="40.47px"
          fill={true}
          radius="98px"
          // onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          -
        </GameUIButton>
        <BetSlider
          currentTable={currentTable}
          seatId={seatId}
          bet={bet}
          setBet={setBet}
        />
        <GameUIButton
          width="40.47px"
          height="40.47px"
          fill={true}
          radius="98px"
          // onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          +
        </GameUIButton>
        <GameUIButton
          width="60.05px"
          height="48.03px"
          fill={false}
          radius="7px"
          // onClick={() => raise(bet + currentTable.seats[seatId].bet)}
        >
          MAX
        </GameUIButton>
      </div>
      <div className="row">
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={fold}
        >
          Fold
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          onClick={check}
        >
          Check
        </GameUIButton>
        <GameUIButton
          width="33%"
          height="48.03px"
          fill={false}
          radius="7px"
          disabled={
            currentTable.callAmount === 0 ||
            currentTable.seats[seatId].bet >= currentTable.callAmount
          }
          onClick={call}
        >
          Call
          {currentTable.callAmount &&
          currentTable.seats[seatId].bet < currentTable.callAmount &&
          currentTable.callAmount <= currentTable.seats[seatId].stack
            ? currentTable.callAmount - currentTable.seats[seatId].bet
            : ""}
        </GameUIButton>
      </div>
    </UIWrapper>
  );
};
