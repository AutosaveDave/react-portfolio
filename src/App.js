import './App.css';
import React, { useState } from "react";
import TitleNavBar from "./components/TitleNav";
import Page from "./components/Page";
import Container from '@mui/material/Container';


export default function App() {
  const [page] = useState([
    { name: "About Me"},
    { name: "Portfolio"},
    { name: "Contact"},
    { name: "Resume"},
  ]);
  const [currentPage, setCurrentPage] = useState(page[0]);

  return (
    <div className="App">
        <header className="App-header">
          <TitleNavBar
            page={page}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></TitleNavBar>
        </header>
        <main>
          <Container>
            <Page currentPage = { currentPage }></Page>
          </Container>
        </main>
    </div>
  );
}
