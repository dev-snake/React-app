import keyboardImage from '../../assets/images/keyboard1.png';
import bannerGreen from '../../assets/images/banner.png';
export default function Banner() {
	return (
		<section className="max-w-[1300px] mx-auto max-xl:p-2 ">
			<div className="w-full h-[500px] rounded-2xl max-sm:p-4 mt-20">
				<img
					src={keyboardImage}
					alt="errr"
					className="h-full w-full object-cover rounded-2xl"
				/>
			</div>
			<div className="mt-4 grid sm:flex w-full gap-2 max-sm:p-4 max-md:grid">
				<div>
					<img src={bannerGreen} alt="" className="rounded-2xl" loading="lazy" />
				</div>
				<div className="grid w-full grid-cols-3 gap-4 max-sm:grid-cols-1">
					<div className="bg-slate-100 rounded-2xl">
						<i className="bx bx-package text-5xl text-center block mt-6 p-4"></i>
						<p className="pl-4 pr-4 text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
						</p>
					</div>

					<div className="bg-slate-100 rounded-2xl">
						<i className="bx bx-award text-5xl text-center block mt-6 p-4"></i>
						<p className="pl-4 pr-4 text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
						</p>
					</div>
					<div className="bg-slate-100 rounded-2xl">
						<i className="bx bx-objects-vertical-bottom text-5xl text-center block mt-6 p-4"></i>
						<p className="pl-4 pr-4 text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
