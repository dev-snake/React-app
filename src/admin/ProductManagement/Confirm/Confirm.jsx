import {
	Modal,
	ModalContent,
	ModalBody,
	ModalHeader,
	ModalFooter,
	Button
} from '@nextui-org/react';
import { useState } from 'react';
export default function Confirm({ isOpen, onOpenChange, setState, message, btnMessage }) {
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
						<ModalHeader className="flex flex-col gap-1">{message}</ModalHeader>
						<ModalBody>{/* <p>{message}</p> */}</ModalBody>
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
								{btnMessage}
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
