import React from "react";
import ContentContext from "./contentContext";

const ContentProvider = ({ children }) => {
  const getLocalizedString = (key) => key;
  const isLoading = false;
  const staticPages = null;

  return (
    <ContentContext.Provider
      value={{ isLoading, staticPages, getLocalizedString }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
