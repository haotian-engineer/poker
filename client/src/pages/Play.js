import React, { useContext, useEffect, useState } from "react";
import gameContext from "../context/game/gameContext";
import socketContext from "../context/websocket/socketContext";
import PokerTable from "../components/game/PokerTable";
import { RotateDevicePrompt } from "../components/game/RotateDevicePrompt";
import { PositionedUISlot } from "../components/game/PositionedUISlot";
import { PokerTableWrapper } from "../components/game/PokerTableWrapper";
import { Seat } from "../components/game/Seat";
import Text from "../components/typography/Text";
import modalContext from "../context/modal/modalContext";
import { withRouter } from "react-router-dom";
import { TableInfoWrapper } from "../components/game/TableInfoWrapper";
import { InfoPill } from "../components/game/InfoPill";
import { GameUI } from "../components/game/GameUI";
import { GameStateInfo } from "../components/game/GameStateInfo";
import PokerCard from "../components/game/PokerCard";
import contentContext from "../context/content/contentContext";
import Header from "../layouts/Header";
import styled from "styled-components";
import PlayBGImage from "../assets/img/playbg.png";
import GradientButton from "../components/GradientButton";
import { ReactComponent as IconStar } from "../assets/icons/star-icon.svg";
import { ReactComponent as IconMArrorw } from "../assets/icons/multiarrow-icon.svg";
import SwitchButton from "../components/SwitchButton";
import { BetSlider } from "../components/game/BetSlider";

const PlayContainer = styled.div`
  background-image: url("${PlayBGImage}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GamePanelContainer = styled.div`
  height: calc(100vh - 240px - 76px);
`;

const GameInfoContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 240px;
`;

const GameChatWrapper = styled.div`
  border-top-right-radius: 8px;
  border: 1px solid #212531;
  background: #212531;
  width: 33%;
`;

const ChatTitle = styled.div`
  padding: 0px 16px;
  gap: 32px;
  align-items: center;
  text-transform: uppercase;
  display: flex;
  height: 43px;
  color: #fff;
  color: #fff;
  font-family: IBM Plex Mono;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: solid 1px #2e2e2e;
`;

const GameSettingWrapper = styled.div`
  margin-right: 21px;
  margin-bottom: 21px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 33%;
  & .row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  & .row input::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: ew-resize;
    background: linear-gradient(180deg, #dc387b 0%, #f55949 100%);
  }
`;

const GameMiddleWrapper = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 1px solid #212531;
  background: #212531;
  width: 33%;
  padding: 13.9px;

  & .title {
    color: #fff;
    font-family: IBM Plex Mono;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }

  & .row {
    margin-top: 20px;
    display: flex;
    gap: 19.93px;
    align-items: center;
  }

  & .row .info {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-family: IBM Plex Mono;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px; /* 109.091% */
    text-transform: capitalize;
  }

  & .row .prev-amount {
    color: #fff;
    font-family: IBM Plex Mono;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 4px;
    border: 1px solid #181a26;
    background: #181a26;
    padding: 10px;
  }
`;

const InputSlider = styled.input`
  border: solid 2px #fff;
  border-radius: 8px;
  height: 3px;
  width: 50%;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
`;

const GameLeaveButton = styled.button`
  width: 99px;
  height: 43px;
  border-radius: 10px;
  background: linear-gradient(90deg, #db387c 6.49%, #f65a47 92.91%);
  text-align: center;
  font-family: IBM Plex Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  float: right;
  position: absolute;
  right: 31px;
  top: 0px;
  color: #fff;
  border: 0px;
  cursor: pointer;
`;

const GameChatContent = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 43px);
  padding: 16px;
`;

const ChatHistory = styled.div`
  height: 80%;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChatInput = styled.input`
  width: 90%;
  padding: 4px 12px;
  color: #fff;
  font-family: IBM Plex Mono;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 13px;
  border: 1px solid #181a26;
  background: #181a26;
  height: 28px;
`;

const SendButton = styled.button`
  width: 29px;
  height: 28px;
  border-radius: 15px;
  background: #fff;
  border: none;
`;

const Play = ({ history }) => {
  const { socket } = useContext(socketContext);
  const { openModal } = useContext(modalContext);
  const {
    messages,
    currentTable,
    isPlayerSeated,
    seatId,
    joinTable,
    leaveTable,
    sitDown,
    standUp,
    fold,
    check,
    call,
    raise,
  } = useContext(gameContext);
  const { getLocalizedString } = useContext(contentContext);
  const [slValue, setSlValue] = useState(40);
  const [bet, setBet] = useState(0);

  useEffect(() => {
    !socket &&
      openModal(
        () => (
          <Text>{getLocalizedString("game_lost-connection-modal_text")}</Text>
        ),
        getLocalizedString("game_lost-connection-modal_header"),
        getLocalizedString("game_lost-connection-modal_btn-txt"),
        () => history.push("/")
      );
    socket && joinTable(1);
    return () => leaveTable();
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    currentTable &&
      (currentTable.callAmount > currentTable.minBet
        ? setBet(currentTable.callAmount)
        : currentTable.pot > 0
        ? setBet(currentTable.minRaise)
        : setBet(currentTable.minBet));
  }, [currentTable]);

  const handleChangeSlider = (e) => {
    setSlValue(e.target.value);
  };

  const [sitOut, setSitOut] = useState(true);
  const [twice, setTwice] = useState(false);
  const [straddle, setStraddle] = useState(false);

  return (
    <PlayContainer>
      {/* {currentTable && (
        <>
          {!isPlayerSeated && (
            <TableInfoWrapper>
              <Text textAlign="right">
                <strong>{currentTable.name}</strong> | <strong>Limit: </strong>
                {new Intl.NumberFormat(document.documentElement.lang).format(
                  currentTable.limit
                )}{" "}
                | <strong>Blinds</strong>
                {new Intl.NumberFormat(document.documentElement.lang).format(
                  currentTable.minBet
                )}{" "}
                /{" "}
                {new Intl.NumberFormat(document.documentElement.lang).format(
                  currentTable.minBet * 2
                )}
              </Text>
            </TableInfoWrapper>
          )}
        </>
      )} */}
      <Header dashboard={false} />
      <GamePanelContainer>
        <PokerTableWrapper>
          <GameLeaveButton onClick={leaveTable}>Leave</GameLeaveButton>
          <PokerTable />
          <PositionedUISlot top="2%" scale="0.55" origin="top center">
            <IconMArrorw />
          </PositionedUISlot>
          {currentTable && (
            <>
              <PositionedUISlot
                top="6%"
                left="18%"
                scale="0.55"
                origin="top center"
              >
                <Seat
                  seatNumber={1}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
                  sitDown={sitDown}
                />
              </PositionedUISlot>
              <PositionedUISlot bottom="-4%" scale="0.55" origin="top center">
                <Seat
                  seatNumber={2}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
                  sitDown={sitDown}
                />
              </PositionedUISlot>
              <PositionedUISlot
                top="6%"
                right="18%"
                scale="0.55"
                origin="top right"
              >
                <Seat
                  seatNumber={3}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
                  sitDown={sitDown}
                />
              </PositionedUISlot>
              <PositionedUISlot
                bottom="6%"
                right="18%"
                scale="0.55"
                origin="bottom right"
              >
                <Seat
                  seatNumber={4}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
                  sitDown={sitDown}
                />
              </PositionedUISlot>
              <PositionedUISlot
                bottom="6%"
                left="18%"
                scale="0.55"
                origin="bottom left"
              >
                <Seat
                  seatNumber={5}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
                  sitDown={sitDown}
                />
              </PositionedUISlot>
              <PositionedUISlot
                width="100%"
                origin="center center"
                scale="0.60"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {currentTable.board && currentTable.board.length > 0 && (
                  <>
                    {currentTable.board.map((card, index) => (
                      <PokerCard key={index} card={card} />
                    ))}
                  </>
                )}
              </PositionedUISlot>
              <PositionedUISlot
                bottom="2%"
                right="2%"
                scale="0.60"
                origin="bottom center"
              >
                {messages && messages.length > 0 && (
                  <>
                    <InfoPill>{messages[messages.length - 1]}</InfoPill>
                    {!isPlayerSeated && (
                      <InfoPill>Sit down to join the game!</InfoPill>
                    )}
                    {currentTable.winMessages.length > 0 && (
                      <InfoPill>
                        {
                          currentTable.winMessages[
                            currentTable.winMessages.length - 1
                          ]
                        }
                      </InfoPill>
                    )}
                  </>
                )}
              </PositionedUISlot>
              {currentTable.winMessages.length === 0 && (
                <GameStateInfo currentTable={currentTable} />
              )}
            </>
          )}
        </PokerTableWrapper>
      </GamePanelContainer>
      <GameInfoContainer>
        <GameChatWrapper>
          <ChatTitle>
            <span>Chat</span>
            <span>Info</span>
            <span>Stats</span>
          </ChatTitle>
          <GameChatContent>
            <ChatHistory></ChatHistory>
            <RowWrapper>
              <ChatInput />
              <SendButton>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.514283 12C0.380565 12 0.248798 11.9488 0.150326 11.8514C-0.00244871 11.7007 -0.043128 11.472 0.048374 11.2791L2.55405 6.00009L0.048374 0.721087C-0.043128 0.528015 -0.00244871 0.299428 0.150326 0.148644C0.302999 -0.00213825 0.535189 -0.0426093 0.731293 0.0475152L12.7032 5.54097C12.8841 5.62403 13 5.80316 13 5.99988C13 6.19669 12.8841 6.37573 12.7032 6.4588L0.731293 11.9523C0.661822 11.9844 0.587738 11.9999 0.514272 11.9999L0.514283 12Z"
                    fill="url(#paint0_linear_423_563)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_423_563"
                      x1="6.5"
                      y1="0"
                      x2="6.5"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#083535" />
                      <stop offset="1" stop-color="#031D1D" />
                    </linearGradient>
                  </defs>
                </svg>
              </SendButton>
            </RowWrapper>
          </GameChatContent>
        </GameChatWrapper>
        <GameMiddleWrapper>
          <span className="title">King High Card</span>
          <div className="row">
            <IconStar />
            <div className="info">
              <span className="hand-id">Hand ID</span>
              <span className="hand-amount">2715797</span>
            </div>
            <span className="prev-amount">Previous -2715796</span>
          </div>
          <SwitchButton
            checked={sitOut}
            onChange={(e) => setSitOut(e.target.checked)}
            label="Sit out next hand"
          />
          <SwitchButton
            checked={twice}
            onChange={(e) => setTwice(e.target.checked)}
            label="Run in twice"
          />
          <SwitchButton
            checked={straddle}
            onChange={(e) => setStraddle(e.target.checked)}
            label="set straddle"
          />
        </GameMiddleWrapper>
        {currentTable &&
          isPlayerSeated &&
          currentTable.seats[seatId] &&
          currentTable.seats[seatId].turn && (
            <GameUI
              currentTable={currentTable}
              seatId={seatId}
              bet={bet}
              setBet={setBet}
              raise={raise}
              standUp={standUp}
              fold={fold}
              check={check}
              call={call}
            />
          )}
      </GameInfoContainer>
      <RotateDevicePrompt />
    </PlayContainer>
  );
};

export default withRouter(Play);
