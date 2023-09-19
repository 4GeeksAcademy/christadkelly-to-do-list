import React, { useState } from "react";


//create your first component
const Home = () => {
	const [items, setItems] = useState('');
	const [addToList, setAddToList] = useState([]);
	const [show, setShow] = useState({display : 'none'});

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
					<input 
					type='text' 
					placeholder='What needs to be done?' 
					value={items} 
					onChange={(e) => setItems(e.target.value)} 
					onKeyDown={addItemToList}>
					</input>
				</li>
				{addToList.map((a, index) => 
					(<li 
					onMouseEnter={(e) => {setShow({display: 'block'});}} 
					onMouseLeave={(e) => {setShow({display: 'none'});}}>
						{a}
						<button 
						style={show}
						onClick={() => setAddToList(addToList.filter((t, currentIndex) => index != currentIndex))}>
							<i class="fa-solid fa-x"></i>
						</button>
					</li>))
				}
			</ul>
			<p>tasks remaining: {addToList.length}</p>
		</div>
	);
};

export default Home;

