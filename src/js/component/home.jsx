import React, { useState } from "react";


//create your first component
const Home = () => {
	const [items, setItems] = useState('');
	const [addToList, setAddToList] = useState([]);

	function addItemToList(e) {
        if (e.key === "Enter") {
            setAddToList(addToList.concat([items]));
            setItems("");
        }
    };

	return (
		<div className="container">
			<h1>to-do's</h1>
			<ul>
				<li>
					<input type='text' placeholder='What needs to be done?' value={items} onChange={(e) => setItems(e.target.value)} onKeyDown={addItemToList}/>
				</li>
				{addToList.map((a) => (<li>{a}<i class="fa-solid fa-x"></i></li>))}
			</ul>
			<p>{addToList.length} tasks remaining</p>
		</div>
	);
};

export default Home;

{/* <button onClick={() => setAddToList(addToList.filter ((t, currentIndex)=> index != currentIndex))}></button> */}
