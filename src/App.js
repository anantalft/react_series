
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react';
function App() {
    const [items, setItems] = useState([
      {
          id: 1,
          checked: false,
          item: "Onion"
      },
      {
          id: 2,
          checked: false,
          item: "cabbage"
      }, {
          id: 3,
          checked: true,
          item: 'cauli'
      }
  ]);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id == id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    console.log(`key: ${id}`)
    const listItems = items.filter((item) => item.id !== id );
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }


  return (
    <div className="App">
      <Header title='Groceries list'/>
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
