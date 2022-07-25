import { useState , useEffect} from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from  './components/card-list/card-list.component';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] =  useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newfilterMonsters = monsters.filter((monster) => {
       return   monster.name.toLocaleLowerCase().includes(searchField)
    })

     setFilterMonsters(newfilterMonsters);
  },[monsters, searchField])

  const onSearchChange = (event) => {
    const searchBoxString = event.target.value.toLocaleLowerCase();
      // reset the state of search string
      setSearchField(searchBoxString); 
  }
 
   return (
        <div className='App'>
           <h1 className='app-title'>Monoster Rolodex</h1>
            <SearchBox 
               className='search-box'
               placeholder='search text'  
               onChangeHandler ={onSearchChange} />
            <CardList   monsters={filteredMonsters}/>
        </div>
   )
}


export default App;
