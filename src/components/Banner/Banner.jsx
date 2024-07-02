import keyboardImage from '../../assets/images/keyboard1.png';
import bannerGreen from '../../assets/images/banner.png';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
export default function Banner() {
	return (
		<section className="max-w-[1500px] mx-auto max-xl:p-1  mt-20 ">
			<div className="w-full h-[500px] rounded-2xl max-sm:p-4 ">
				<img
					src={keyboardImage}
					alt="errr"
					className="h-full w-full object-cover rounded-2xl"
				/>
			</div>
			<div className="mt-4 grid sm:flex w-full gap-2 max-sm:p-4 max-[850px]:flex max-[850px]:flex-col">
				<div>
					<img
						src={bannerGreen}
						alt=""
						className="h-full rounded-2xl w-full"
						loading="lazy"
					/>
				</div>
				<div className="grid w-full grid-cols-3 gap-4 max-sm:grid-cols-1">
					<Card isPressable>
						<CardHeader>
							<i className="bx bx-package text-5xl  mx-auto"></i>
						</CardHeader>
						<CardBody className="inline-block">
							<p className="pl-4 pr-4 text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
							</p>
						</CardBody>
					</Card>

					<Card isPressable>
						<CardHeader>
							<i className="bx bx-award text-5xl mx-auto"></i>
						</CardHeader>
						<CardBody>
							<p className="pl-4 pr-4 text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
							</p>
						</CardBody>
					</Card>
					<Card isPressable>
						<CardHeader>
							<i className="bx bx-objects-vertical-bottom text-5xl mx-auto"></i>
						</CardHeader>
						<CardBody className="inline-block">
							<p className="pl-4 pr-4 text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
							</p>
						</CardBody>
					</Card>
				</div>
			</div>
		</section>
	);
}
