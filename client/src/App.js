import React, { useContext, useEffect } from "react";
import Axios from "axios";
import MainLayout from "./layouts/_MainLayout";
import LoadingScreen from "./components/loading/LoadingScreen";
import globalContext from "./context/global/globalContext";
import Routes from "./components/routing/Routes";
import contentContext from "./context/content/contentContext";
import Text from "./components/typography/Text";
import modalContext from "./context/modal/modalContext";
import config from "./clientConfig";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import "./App.css";

const App = () => {
  const { isLoading, chipsAmount, setChipsAmount, setIsLoading } =
    useContext(globalContext);
  const { getLocalizedString } = useContext(contentContext);
  const { openModal, closeModal } = useContext(modalContext);
  const { isLoading: contentIsLoading } = useContext(contentContext);

  function showFreeChipsModal() {
    openModal(
      () => (
        <Text textAlign="center">
          Oh noes, it seems like you're running out of chips! But don't worry,
          here's a fresh batch of chips for you so you can continue playing!
        </Text>
      ),
      `Refuel`,
      `Get Your Free Chips`,
      handleFreeChipsRequest
    );
  }

  const handleFreeChipsRequest = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.token;

      const res = await Axios.get("/api/chips/free", {
        headers: {
          "x-auth-token": token,
        },
      });

      const { chipsAmount } = res.data;

      setChipsAmount(chipsAmount);
    } catch (error) {
      alert(error);
    } finally {
      closeModal();
    }

    setIsLoading(false);
  };

  useEffect(() => {
    chipsAmount !== null &&
      chipsAmount < 1000 &&
      !isLoading &&
      !contentIsLoading &&
      setTimeout(showFreeChipsModal, 2000);

    // eslint-disable-next-line
  }, [chipsAmount, isLoading, contentIsLoading]);

  return (
    <>
      {isLoading || contentIsLoading ? (
        <LoadingScreen />
      ) : (
        <MainLayout>
          <Routes />
        </MainLayout>
      )}
      {config.isProduction && <GoogleAnalytics />}
    </>
  );
};

export default App;
