import ProductList from '../ProductList/ProductList';
import { Accordion, AccordionItem, Card } from '@nextui-org/react';
import Promotion from '../Promotion/Promotion';
export default function Products() {
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

	return (
		<section className="max-w-[1500px] mx-auto mt-6 w-full">
			<p className="font-semibold uppercase text-center text-2xl">sản phẩm nổi bật</p>
			<ProductList />
			<Promotion />
			<Card className="mt-8   p-3">
				<h1 className="text-center capitalize mb-4 font-semibold text-2xl">
					Các câu hỏi thường gặp ?
				</h1>
				<Accordion variant="light">
					<AccordionItem key="1" aria-label="Accordion 1" title="Sản phẩm có tốt không ">
						{defaultContent}
					</AccordionItem>
					<AccordionItem
						key="2"
						aria-label="Accordion 2"
						title="Mua hàng ở đây có uy tín không ?"
					>
						{defaultContent}
					</AccordionItem>
					<AccordionItem
						key="3"
						aria-label="Accordion 3"
						title="Chính sách bảo hành ở đây có tốt không"
					>
						{defaultContent}
					</AccordionItem>
				</Accordion>
			</Card>
		</section>
	);
}
