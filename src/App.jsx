/** @format */

import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
	const [items, setItems] = useState(initialItems);

	const handleAddItem = (newItemText) => {
		const newItem = {
			id: new Date().getTime(),
			name: newItemText,
			packed: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	const handleDeleteItem = (id) => {
		const newItems = items.filter((i) => i.id != id);
		setItems(newItems);
	};

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList items={items} handleDeleteItem={handleDeleteItem} />
				<Sidebar handleAddItem={handleAddItem} />
			</main>
			<Footer />
		</>
	);
}

export default App;
