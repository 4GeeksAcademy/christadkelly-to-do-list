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
					<input 
					className="input"
					type='text' 
					placeholder='What needs to be done?' 
					value={items} 
					onChange={(e) => setItems(e.target.value)} 
					onKeyDown={addItemToList}>
					</input>
				</li>
				{addToList.map((a, index) => 
					(<li>
						<span
						className="hide"
						// style={show}
						onClick={() => setAddToList(addToList.filter((t, currentIndex) => index != currentIndex))}>
							<i class="fa-solid fa-eraser"></i>
						</span>
						<input 
						type="checkbox"
						className="checkbox"/> 
						<label>{a}</label>
					</li>))
				}
			</ul>
			<p>tasks remaining: {addToList.length}</p>
		</div>
	);
};

export default Home;

