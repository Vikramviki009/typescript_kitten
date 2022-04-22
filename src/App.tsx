import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
// import { getData } from './utils/fetch.utils';
import ClassDemo from './classComponents/classDemo';

export type kitten = {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [kittens, setkittens] = useState <kitten[]>([]);
  const [showDemo, setShowDemo] = useState(false)
  const [filteredkittens, setFilterkittens] = useState(kittens);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
      .then((users) => setkittens(users));
    // const fetchUsers = async() => {
    //   const users = await getData<kitten[]>('https://jsonplaceholder.typicode.com/users');
    //   setkittens(users)
    // }

    // fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredkittens = kittens.filter((kitten) => {
      return kitten.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterkittens(newFilteredkittens);
  }, [kittens, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>kittens</h1>

      <SearchBox
        className='kittens-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search kittens'
      />
      <CardList kittens={kittens} />
      {showDemo && <ClassDemo message="I am a classDemo" />}
      <button onClick={() => setShowDemo(!showDemo)}>showDemo</button>
    </div>
  );
};

export default App;
