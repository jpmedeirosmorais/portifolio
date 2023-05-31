import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useTheme } from "./contexts/ThemeContext";
import { Contacts } from "./pages/Contatcs";
import { Homepage } from "./pages/Homepage";
import { Works } from "./pages/Works";
import { GlobalStyles } from "./styles/globalStyles";

const AboutPage: React.FC = () => <h1>About Page</h1>;

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <GlobalStyles theme={theme} />
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/trabalhos" exact component={Works} />
          <Route path="/sobre" exact component={AboutPage} />
          <Route path="/contato" exact component={Contacts} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
