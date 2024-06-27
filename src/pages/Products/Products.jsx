import { useMemo, useState } from 'react';
import { CircularProgress } from '@nextui-org/react';
export default function Products() {
	const invalid = true;
	return (
		<section className="max-w-[1300px] mx-auto mt-20 mb-20">
			<CircularProgress color="success" label="Loading ..."></CircularProgress>
		</section>
	);
}
