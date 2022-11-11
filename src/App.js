import './App.css';
import { Button, Typography, Card } from "@mui/material";
import TitleNav from "./components/TitleNav";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleNav></TitleNav>
      </header>
    </div>
  );
}
