import {
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalContent,
	Button,
	Input
} from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'sonner';
export default function AddProduct({ isOpen, onOpenChange }) {
	const [state, setState] = useState({
		name: null,
		price: null,
		image: null,
		quantityImported: null,
		sale: null,
		category: null
	});
	const [invalid, setInvalid] = useState({
		name: false,
		price: false,
		image: false,
		quantityImported: false,
		category: false
	});
	const handleInvalid = (event, field) => {
		const value = event.target.value;
		if (value === '') {
			setInvalid((prev) => ({ ...prev, [field]: true }));
		} else {
			setInvalid((prev) => ({ ...prev, [field]: false }));
		}
	};
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
									aria-labelledby=""
									label="Enter name's product"
									type="text"
									isInvalid={invalid.name}
									onChange={(e) => {
										setState((prev) => ({ ...prev, name: e.target.value }));
									}}
									onBlur={(e) => handleInvalid(e, 'name')}
								/>
								<Input
									aria-labelledby=""
									type="number"
									label="Price"
									isInvalid={invalid.price}
									placeholder="0.00"
									onChange={(e) => {
										setState((prev) => ({ ...prev, price: +e.target.value }));
										handleInvalid(e);
									}}
								/>
								<Input
									label="Enter Quantity import"
									aria-labelledby=""
									isInvalid={invalid.quantityImported}
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
									isInvalid={invalid.image}
									onChange={(e) =>
										setState((prev) => ({
											...prev,
											image: e.target.value
										}))
									}
								/>
								<Input
									label="Category"
									aria-labelledby=""
									type="text"
									isInvalid={invalid.category}
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
