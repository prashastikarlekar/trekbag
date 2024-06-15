/** @format */

import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ onAddItem }) {
	const [itemText, setItemText] = useState("");
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		//validation
		if (!itemText) {
			alert("Item can not be empty!");
			inputRef.current.focus();
			return;
		}

		onAddItem(itemText);
		// setItems((prevItems) => [...prevItems, newItem]);
		setItemText("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an Item</h2>
			<input
				type='text'
				ref={inputRef}
				value={itemText}
				onChange={(e) => setItemText(e.target.value)}
				autoFocus={true}
			/>
			<Button text='Add to list' />
		</form>
	);
}

export default AddItemForm;
