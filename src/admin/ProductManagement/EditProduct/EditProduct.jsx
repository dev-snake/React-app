import {
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalContent,
	Button,
	Input
} from '@nextui-org/react';
export default function EditProduct({ isOpen, onOpenChange }) {
	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>Edit Product</ModalHeader>
							<ModalBody>
								<form className="flex flex-col gap-3">
									<Input
										aria-labelledby=""
										label="Enter name's product"
										type="text"
									/>
									<Input
										aria-labelledby=""
										type="number"
										label="Price"
										placeholder="0.00"
									/>
									<Input
										label="Enter Quantity import"
										aria-labelledby=""
										type="number"
										max={100}
									/>
									<Input label="Image" aria-labelledby="" type="text" />
									<Input label="Category" aria-labelledby="" type="text" />
								</form>
							</ModalBody>
							<ModalFooter>
								<Button onClick={onClose} variant="light" color="danger">
									Close
								</Button>
								<Button color="primary" type="submit">
									Update Product
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
