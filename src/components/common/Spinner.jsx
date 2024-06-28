import { Spinner } from '@nextui-org/react';
export default function SpinnerUi() {
	return (
		<div className="flex justify-center w-full mt-20">
			<Spinner label="Loading ..." color="primary" />
		</div>
	);
}
