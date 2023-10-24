import React, { useContext } from "react";
import Container from "../components/layout/Container";
import Heading from "../components/typography/Heading";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import useScrollToTopOnPageLoad from "../hooks/useScrollToTopOnPageLoad";
import globalContext from "../context/global/globalContext";
import contentContext from "../context/content/contentContext";
import modalContext from "../context/modal/modalContext";
import Header from "../layouts/Header";
import CardItem from "../components/CardItem";
import SystemImg from "../assets/img/system.png";
import BounsImg from "../assets/img/bonus.png";
import GiveawyasmImg from "../assets/img/giveaways.png";
import RainImg from "../assets/img/rain.png";
import BonusBgImg from "../assets/img/bonusbg.png";
import GamePanImage from "../assets/img/gamepan.png";
import GameTable from "../components/Table";
import Tabs from "../components/Tabs";
import BottomCard from "../components/BottomCard";
import SearchIcon from "../components/icons/SearchIcon";
// import Text from "../components/typography/Text";

// const MainMenuWrapper = styled.div`
//   margin: 0 0 auto 0;
//   display: grid;
//   justify-content: center;
//   align-content: center;
//   grid-template-columns: repeat(2, minmax(250px, auto));
//   grid-template-rows: repeat(2, minmax(250px, auto));
//   grid-gap: 2rem;
//   max-width: 600px;

//   @media screen and (max-width: 900px) and (max-height: 450px) and (orientation: landscape) {
//     grid-template-columns: repeat(4, 140px);
//     grid-template-rows: repeat(1, minmax(140px, auto));
//     grid-gap: 1rem;
//   }

//   @media screen and (max-width: 590px) and (max-height: 420px) and (orientation: landscape) {
//     grid-template-columns: repeat(4, 120px);
//     grid-template-rows: repeat(1, minmax(120px, auto));
//     grid-gap: 1rem;
//   }

//   @media screen and (max-width: 468px) {
//     grid-template-columns: repeat(1, auto);
//     grid-template-rows: repeat(4, auto);
//     grid-gap: 1rem;
//   }
// `;

// const MainMenuCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   text-align: center;
//   cursor: pointer;
//   background-color: ${(props) => props.theme.colors.playingCardBg};
//   border-radius: ${(props) => props.theme.other.stdBorderRadius};
//   padding: 1.5rem 2rem;
//   box-shadow: ${(props) => props.theme.other.cardDropShadow};

//   &,
//   & > * {
//     user-select: none;
//     -moz-user-select: none;
//     -khtml-user-select: none;
//     -webkit-user-select: none;
//     -o-user-select: none;
//   }

//   ${Heading} {
//     margin-bottom: 0;
//     color: ${(props) => props.theme.colors.primaryCta};
//     word-wrap: break-word;
//   }

//   img {
//     margin: 1rem;
//     width: 75%;
//     max-width: 170px;
//   }

//   @media screen and (min-width: 648px) {
//     font-size: 3rem;
//   }

//   @media screen and (max-width: 648px) {
//     padding: 0.5rem;
//   }

//   @media screen and (max-width: 468px) {
//     flex-direction: row;
//     justify-content: space-between;
//     border-radius: 90px 40px 40px 90px;
//     padding: 0 1rem 0 0;

//     ${Heading} {
//       text-align: right;
//       margin: 0 1rem;
//     }

//     img {
//       max-width: 80px;
//       margin: 0;
//     }
//   }
// `;

const CardContainer = styled.div`
  width: 98.5%;
  display: flex;
  gap: 20px;
`;

const MainWrapper = styled.div`
  padding: 0px 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

const BoounsItem = styled.div`
  position: relative;
  border-radius: 12px;
  background: linear-gradient(90deg, #da367f, #f95e42);
  height: 123px;
`;

const PlayerNames = styled.div`
  height: 264px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: solid 1px #333541;
`;

const PlayerNameTitle = styled.div`
  color: #fff;
  width: 100%;
  height: 44px;
  border-radius: 8px 8px 0px 0px;
  background-color: #181a26;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;

const PlayerContents = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  background-color: #333541;
  padding: 0px 20px;
`;

const PlayerRow = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 6px 0px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const GamePanel = styled.div`
  height: 240px;
  padding: 10px;
  margin-top: 16px;
  width: 100%;
  border-radius: 8px;
  border: solid 1px #333541;
`;

const BottomCardsWrapper = styled.div`
  display: flex;
  gap: 4px;
  width: 98.5%;
`;

const TableWrapper = styled.div`
  width: 98.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const SearchWrapper = styled.div`
  margin-top: 26px;
  position: relative;
`;

const SearchButton = styled.div`
  position: absolute;
  z-index: 40;
  left: 12px;
  bottom: 8px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 269px;
  height: 37px;
  border-radius: 4px;
  color: #fff;
  background-color: #212531;
  padding: 10px 10px 10px 40px;
  border: solid 0px;
  @media screen and (max-width: 1240px) {
    width: 144px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const MainPage = ({ history }) => {
  // const { userName } = useContext(globalContext);
  // const { getLocalizedString } = useContext(contentContext);

  const cardsData = [
    {
      imgUrl: SystemImg,
      title: "RakeBack System",
      desc: "Flexible system, get a big bonus from the rake.",
      width: "51px",
      height: "51px",
    },
    {
      imgUrl: BounsImg,
      title: "Weekly Bonus",
      desc: "Come to us more often & earn bonuses!",
      width: "80px",
      height: "51px",
    },
    {
      imgUrl: GiveawyasmImg,
      title: "Giveaways",
      desc: "The higher rank you are, the more surprising it will be.",
      width: "80px",
      height: "57px",
    },
    {
      imgUrl: RainImg,
      title: "Chat Rain",
      desc: "Randomly reward players in chat room every 6 hours.",
      width: "80px",
      height: "57px",
    },
  ];

  const tableData = [
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
    {
      count: 5,
      name: ".50/1 NLH",
      mode: "TexasHoldEm, NL",
      speed: "Noarmal",
      avg: "7.08 $",
      wait: 0,
      stake: "0.5$/1$",
    },
  ];

  const bottomCardsData = [
    {
      title: "Mini",
      value: "8 176.88",
    },
    {
      title: "Minor",
      value: "8 176.88",
    },
    {
      title: "Major",
      value: "8 176.88",
    },
    {
      title: "Mega",
      value: "8 176.88",
    },
  ];

  // const { openModal } = useContext(modalContext);
  useScrollToTopOnPageLoad();
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      padding="6rem 2rem 2rem 2rem"
    >
      <Header dashboard={true} />
      <MainWrapper>
        <SideWrapper width="72%">
          <CardContainer>
            {cardsData.map((item, idx) => {
              return (
                <CardItem
                  key={idx}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  desc={item.desc}
                  width={item.width}
                  height={item.height}
                />
              );
            })}
          </CardContainer>
          <TableWrapper>
            <Tabs
              items={[
                {
                  name: "Crash Games",
                  active: true,
                },
                {
                  name: "Tournament",
                  active: false,
                },
                {
                  name: "Spin%Go",
                  active: false,
                },
              ]}
            />
            <SearchWrapper>
              <SearchInput placeholder="Search" />
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </SearchWrapper>
          </TableWrapper>

          <GameTable tableData={tableData}></GameTable>
          <BottomCardsWrapper>
            {bottomCardsData.map((item, idx) => {
              return (
                <BottomCard
                  key={idx}
                  title={item.title}
                  value={item.value}
                ></BottomCard>
              );
            })}
          </BottomCardsWrapper>
        </SideWrapper>
        <SideWrapper width="25%">
          <BoounsItem>
            <img src={BonusBgImg} alt="bouns" width="100%" height="123px" />
            <span
              style={{
                fontSize: "22px",
                position: "absolute",
                textWrap: "nowrap",
                fontWeight: "600",
                top: "50%",
                left: "50%",
                color: "#FFF",
                transform: "translate(-50%, -120%)",
              }}
            >
              GET UP TO <span style={{ color: "#F1BB3A" }}>$500</span> BONUS!
            </span>
            <span
              style={{
                fontSize: "12px",
                position: "absolute",
                top: "50%",
                textWrap: "nowrap",
                color: "#FFF",
                left: "50%",
                transform: "translate(-50%, -40%)",
              }}
            >
              Refer a friend & earn!
            </span>
            <div
              style={{
                fontSize: "12px",
                position: "absolute",
                top: "50%",
                textWrap: "nowrap",
                color: "#FFF",
                left: "50%",
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.13)",
                padding: "6px 16px",
                borderRadius: "8px",
                transform: "translate(-50%, 50%)",
              }}
              onClick={() => history.push("/play")}
            >
              Get Referal Code
            </div>
          </BoounsItem>
          <PlayerNames>
            <PlayerNameTitle>
              <span># PLAYER NAME</span>
              <span>CREDIT</span>
            </PlayerNameTitle>
            <PlayerContents>
              <PlayerRow>
                <span>1 fostersov</span>
                <span>25.34 $</span>
              </PlayerRow>
              <PlayerRow>
                <span>2 GuNDaL</span>
                <span>42.85 $</span>
              </PlayerRow>
              <PlayerRow>
                <span>3 Rolyat</span>
                <span>47.15 $</span>
              </PlayerRow>
              <PlayerRow>
                <span>4 Kudoshinichi</span>
                <span>119.27 $</span>
              </PlayerRow>
              <PlayerRow>
                <span>5 IMDENVER</span>
                <span>26.4$</span>
              </PlayerRow>
              <PlayerRow>
                <span>6 skeezer</span>
                <span>34.93 $</span>
              </PlayerRow>
            </PlayerContents>
          </PlayerNames>
          <GamePanel>
            <img src={GamePanImage} alt="game-pan" height="227px" />
          </GamePanel>
        </SideWrapper>
      </MainWrapper>
      {/* <MainMenuWrapper>
        <MainMenuCard onClick={() => history.push("/play")}>
          <Heading as="h3" headingClass="h5" textCentered>
            {getLocalizedString("main_page-join_table").toUpperCase()}
          </Heading>
        </MainMenuCard>
        <MainMenuCard onClick={() => history.push("/play")}>
          <Heading as="h3" headingClass="h5" textCentered>
            {getLocalizedString("main_page-quick_game").toUpperCase()}
          </Heading>
        </MainMenuCard>
        <MainMenuCard
          onClick={() => {
            openModal(
              () => (
                <Text textAlign="center">
                  {getLocalizedString("main_page-modal_text")}
                </Text>
              ),
              getLocalizedString("main_page-modal_heading"),
              getLocalizedString("main_page-modal_button_text")
            );
          }}
        >
          <Heading as="h3" headingClass="h5" textCentered>
            {getLocalizedString("main_page-open_shop").toUpperCase()}
          </Heading>
        </MainMenuCard>
        <MainMenuCard onClick={() => history.push("/game-rules")}>
          <Heading as="h3" headingClass="h5" textCentered>
            {getLocalizedString("main_page-open_rules").toUpperCase()}
          </Heading>
        </MainMenuCard>
      </MainMenuWrapper> */}
    </Container>
  );
};

export default withRouter(MainPage);
