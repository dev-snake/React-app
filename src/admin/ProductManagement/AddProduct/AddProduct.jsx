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

export default function AddProduct() {
	const { isOpen, onClose, onOpenChange } = useDisclosure();
	return (
		<>
			<Modal>
				<ModalContent>
					{(onClose) => {
						<>
							<ModalHeader>Add new Products</ModalHeader>
							<ModalBody>
								<form action="">
									<Input label="Enter name`s product" type="text" />
									<Input label="Enter Price" type="number" />
									<Input label="Enter Quantity import" type="number" />
								</form>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>;
					}}
				</ModalContent>
			</Modal>
		</>
	);
}
