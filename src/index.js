import React from "react";
import { render } from "react-dom";
import Container from '@material-ui/core/Container';
import {Provider} from "react-redux";

// local files
import './styles/style.css'
import ListComponent from './components/list';
import RefillComponent from "./components/refill";
import {store} from './reducers';

function App() {
  const [showList, setShowList] = React.useState(true);
  const showListEvent = val => setShowList(val);

  return <Container maxWidth="sm">
    {showList ? <ListComponent showListEvent={showListEvent} />
    : <RefillComponent showListEvent={showListEvent} />}
  </Container>;
}

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
