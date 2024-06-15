/** @format */

import Button from "./Button";

function AddItemForm() {
	return (
		<form>
			<h2>Add an Item</h2>
			<input type='text' />
			<Button text='Add to list' />
		</form>
	);
}

export default AddItemForm;
