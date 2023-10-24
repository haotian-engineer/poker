import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as IconFive } from "../../assets/icons/icon-five.svg";
import gameContext from "../../context/game/gameContext";
import socketContext from "../../context/websocket/socketContext";
import { useHistory } from "react-router-dom";

const TableHeader = styled.div`
  margin-top: 10px;
  background-color: #323846;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 98.3%;
  & .players {
    width: 10%;
  }
  & .name {
    width: 18%;
  }
  & .speeds {
    width: 18%;
  }
  & .avg {
    width: 18%;
  }
  & .wait {
    width: 18%;
  }
  & .stakes {
    width: 18%;
  }
  span {
    text-align: center;
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const TableBody = styled.div`
  max-height: 450px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  padding: 4px;
  margin-top: 10px;
  background-color: #181a26;
  height: 52.9px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 99%;
  & .players {
    position: relative;
    text-align: center;
    width: 10%;
    p {
      position: absolute;
      font-size: 9px;
      color: #fff;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 36%;
    }
  }
  & .name {
    display: flex;
    flex-direction: column;
    width: 18%;
    align-items: center;
    & p {
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      color: #878282;
      margin-bottom: 0px;
    }
  }
  & .speeds {
    width: 18%;
  }
  & .avg {
    width: 18%;
  }
  & .wait {
    width: 18%;
  }
  & .stakes {
    width: 18%;
  }
  span {
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 15.6px;
  }
`;

const GameTable = (props) => {
  const history = useHistory();
  const { joinTable } = useContext(gameContext)
  const {socket} = useContext(socketContext)

  const joinGame = (tableId) => {
    if(socket && tableId) {
      console.log("props.tableData", props.tableData)
      joinTable(tableId)
      history.push("/play")
    }
    else
      console.log("out")
  }


  return (
    <>
      <TableHeader>
        <span className="players">Players</span>
        <span className="name">Name</span>
        <span className="speeds">Speeds</span>
        <span className="avg">Avg. Pot</span>
        <span className="wait">Wait</span>
        <span className="stakes">Stakes</span>
      </TableHeader>
      <TableBody>
        {props.tableData.map((item, idx) => {
          console.log("item", item)
          return (
            <TableRow
              key={idx}
              onClick={() => joinGame(item.id)}
            >
              <div className="players">
                <p>{`${item.players}/${item.maxPlayers}`}</p>
                <IconFive />
              </div>
              <div className="name">
                <span>{item.name}</span>
                <p>{item.mode}</p>
              </div>
              <span className="speeds">{item.speed}</span>
              <span className="avg">{item.avg}</span>
              <span className="wait">{item.wait}</span>
              <span className="stakes">{item.stake}</span>
            </TableRow>
          );
        })}
      </TableBody>
    </>
  );
};

export default GameTable;
