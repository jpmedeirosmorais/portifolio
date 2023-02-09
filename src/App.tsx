import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useTheme } from "./contexts/ThemeContext";
import { GlobalStyles } from "./styles/globalStyles";

const HomePage: React.FC = () => <h1>Home Page</h1>;
const AboutPage: React.FC = () => <h1>About Page</h1>;
const PortifolioPage: React.FC = () => <h1>Portifolio Page</h1>;
const ContactPage: React.FC = () => <h1>Contact Page</h1>;

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <GlobalStyles theme={theme} />
      <Layout>
        <>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/portifolio" exact component={PortifolioPage} />
            <Route path="/sobre" exact component={AboutPage} />
            <Route path="/contato" exact component={ContactPage} />
          </Switch>
        </>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
