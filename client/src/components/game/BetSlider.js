import React from "react";
import { BetSliderInput } from "./BetSliderInput";

export const BetSlider = ({ currentTable, seatId, bet, setBet }) => (
  <BetSliderInput
    type="range"
    step="10"
    min={
      currentTable.minBet >= currentTable.callAmount
        ? currentTable.minBet
        : currentTable.callAmount
    }
    max={
      currentTable &&
      currentTable.seats &&
      currentTable.seats[seatId].stack &&
      (currentTable.seats[seatId].stack < currentTable.limit
        ? currentTable.seats[seatId].stack
        : currentTable.limit)
    }
    value={bet}
    onChange={(e) => setBet(+e.target.value)}
  />
);
