import React from "react";
import { Layout } from "./components/Layout";
import { useApp } from "./contexts/AppContext";

import { GlobalStyles } from "./styles/globalStyles";

const App: React.FC = () => {
  const { theme } = useApp();
  return (
    <>
      <GlobalStyles theme={theme} />
      <Layout>
        <p>Teste</p>
      </Layout>
    </>
  );
};

export default App;
