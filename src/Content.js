import  {useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Content = () => {
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
        <main>
            {items.length ? (
         <uL>
            {items.map((item) => (
                <li className='item' key={item.id}>
                   <input
                    type="checkbox"
                    onChange={(id) => handleCheck(item.id)}
                    checked={item.checked}
                    />
                    <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                    <FaTrashAlt onClick={(id)=>handleDelete(item.id)} role="button" tabIndex="0"/>
                
                </li>
            ))}
         </uL>
         ) : (
            <p style={{marginTop: '2rem'}}>Your list is empty.</p>
         )}
        </main>
    )
}

export default Content;