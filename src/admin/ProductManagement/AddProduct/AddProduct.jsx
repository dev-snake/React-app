import {
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalContent,
	Button,
	useDisclosure,
	Input
} from '@nextui-org/react';
import { useState } from 'react';

export default function AddProduct({ isOpen, onOpenChange }) {
	const [state, setState] = useState({
		name: null,
		price: null,
		image: null,
		quantityImported: null,
		sale: null,
		category: null
	});
	const handleSubmit = () => {
		console.log(state);
	};
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>Add new Products</ModalHeader>
						<ModalBody>
							<form className="flex flex-col gap-3">
								<Input
									label="Enter name's product"
									type="text"
									onChange={(e) =>
										setState((prev) => ({ ...prev, name: e.target.value }))
									}
								/>
								<Input
									type="number"
									label="Price"
									placeholder="0.00"
									onChange={(e) =>
										setState((prev) => ({ ...prev, price: +e.target.value }))
									}
								/>
								<Input
									label="Enter Quantity import"
									aria-labelledby=""
									type="number"
									max={100}
									onChange={(e) =>
										setState((prev) => ({
											...prev,
											quantityImported: +e.target.value
										}))
									}
								/>
								<Input
									label="Image"
									aria-labelledby=""
									type="text"
									onChange={(e) =>
										setState((prev) => ({
											...prev,
											image: e.target.value
										}))
									}
								/>
								<Input
									label="Category"
									type="text"
									onChange={(e) =>
										setState((prev) => ({
											...prev,
											category: +e.target.value
										}))
									}
								/>
							</form>
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose} variant="light" color="danger">
								Close
							</Button>
							<Button
								onClick={() => {
									onClose();
									handleSubmit();
								}}
								color="primary"
								type="submit"
							>
								Add Product
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
