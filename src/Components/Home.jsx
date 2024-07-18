import {useState} from 'react';
import "./Home.css"
const Home = () => {
    const [items,setItems] = useState([]);
    const [eachItem, setEachItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedItems = [...items,eachItem];
        setItems(updatedItems);
        setEachItem("");
    }
    const handleDelete = (idx) => {
        const updatedItems = [...items];
        updatedItems.splice(idx,1)
        setItems(updatedItems);
    }
    return (
        <>
            <div className='main'>
                <h1>Grocery Bud</h1>
                <form onSubmit={handleSubmit}> 
                    <div>
                        <input
                            placeholder="enter your grocery"
                            required="item"
                            value={eachItem}
                            onChange={(e) => setEachItem(e.target.value)}
                        />
                        <button type="submit">Add Items</button>
                    </div>
                </form>

            </div>

            <ul>
                    {
                        items.map((ele,idx) => (
                            <li key={idx}>
                                {idx+1}. {ele}
                                {/* <MdDelete onClick={() => handleDelete(idx)}/> */}
                                <button onClick={() => handleDelete(idx)}>❌ </button>
                            </li>
                        ))
                    }
                </ul>
    
        </>

    )
}
export default Home;