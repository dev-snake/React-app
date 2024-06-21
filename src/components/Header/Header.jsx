import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
export default function Header() {
	return (
		<header className=" w-full fixed top-0 left-0 right-0 bg-white z-[100] shadow-sm">
			<Navbar />
		</header>
	);
}
