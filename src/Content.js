import  {useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Ananta');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Ananta', 'dave'];
        const int = Math.floor(Math.random() * 3);
        return setName(names[int]);
       }

       const handleClick = () => {
        setCount(count + 1);
        // it will always print the initial value of count. ie. when entering the count function it print the value of count
        console.log(count); 

       }

       const handleClick2 = (name) => {
        console.log(`${name} was clicked` );

       }

       const handleClick3 = (e) => {
        console.log(e.target);

       }

       const handleClick4 = () => {
        console.log(count);
       }

    return (
        <main>
         <p onDoubleClick={handleClick}>
             Hello { name }!
        </p>
        <button onClick={handleNameChange}> Click it and change name </button>
        <button onClick={ () => { handleClick2('Ananta')}}> Click it </button>
        <button onClick={ (e) => { handleClick3(e)}}> Click it </button>
        <button onClick={ handleClick} > Click it check count  </button>
        <button onClick={ handleClick4}> Check count value </button>
        </main>
    )
}

export default Content;