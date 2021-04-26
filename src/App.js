import './styles/global.scss';
import { useEffect, useState } from 'react';
import StarWarsCards from './Components/StarWarsCards';
import Character from './Components/Character';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { api } from './services/api';

function App() {
  //return <PostCards posts={posts} />;
  return (
    <Router>
      <Route path="/" component={StarWarsCards} exact />
      <Route path="/characters/:id" component={Character} />
    </Router>
  );
}

export default App;

//{data.length !== 0 && <PostCard src="Teste" name={data} />}
