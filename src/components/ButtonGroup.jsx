/** @format */

import Button from "./Button";
import { secondaryButtons } from "../lib/constants";

function ButtonGroup() {
	return (
		<section className='button-group'>
			{secondaryButtons.map((buttonText, index) => (
				<Button key={index} type='secondary' text={buttonText} />
			))}
		</section>
	);
}

export default ButtonGroup;
