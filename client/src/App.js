import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import Title from "./components/layout/Title";
import "./App.css";

import Home from "./Home";
import ShowDetail from "./components/details/ShowDetail";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Title name="PEOPLE AND THEIR CARS" header={true} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<ShowDetail />}></Route>
        </Routes>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;

