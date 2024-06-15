/** @format */

import Button from "./Button";

function ButtonGroup() {
	return (
		<section className='button-group'>
			<Button type='secondary' text='Mark all as complete' />
			<Button type='secondary' text='Mark all as incomplete' />
			<Button type='secondary' text='Reset to initial' />
			<Button type='secondary' text='Remove all items' />
		</section>
	);
}

export default ButtonGroup;
