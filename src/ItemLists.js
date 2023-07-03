import LineItem from './LineItem'


const ItemList = ({items, handleCheck, handleDelete}) => {
         return (
            <uL>
            {items.map((item) => (
               <LineItem key={item.id}  item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
            ))}
         </uL>
     )
 }
 
 export default ItemList;