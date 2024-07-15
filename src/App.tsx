import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import NoteDetails from './pages/NoteDetails';
import EditNote from './pages/EditNote';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddNote} />
        <Route path="/note/:id" component={NoteDetails} />
        <Route path="/edit/:id" component={EditNote} />
      </Switch>
    </Router>
  );
}

export default App;
