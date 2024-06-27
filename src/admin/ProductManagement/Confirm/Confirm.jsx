import {
	Modal,
	ModalContent,
	ModalBody,
	useDisclosure,
	ModalHeader,
	ModalFooter,
	Button
} from '@nextui-org/react';
import { useState } from 'react';
export default function Confirm({ isOpen, onOpenChange, setState }) {
	const [scrollBehavior, setScrollBehavior] = useState('inside');

	return (
		<Modal
			isOpen={isOpen}
			placement="center"
			onOpenChange={onOpenChange}
			scrollBehavior={scrollBehavior}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Do you want to delete this product ?
						</ModalHeader>
						<ModalBody>
							<p> Are you sure want to delete this product ? </p>
						</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="light"
								onPress={() => {
									setState((prev) => ({ ...prev, isConfirm: false }));
									onClose();
								}}
							>
								Cancel
							</Button>
							<Button
								color="primary"
								onPress={() => {
									setState((prev) => ({ ...prev, isConfirm: true }));

									onClose();
								}}
							>
								Confirm
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
