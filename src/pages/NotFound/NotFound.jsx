import ImageNotFound from '../../assets/images/pagenotfound.png';
export default function NotFound() {
	return (
		<div class="max-w-[1300px] mx-auto mb-20 mt-20">
			<p class="uppercase font-semibold text-center tracking-[1.6px] text-2xl">
				Opps! Page not found !
			</p>
			<img
				src={ImageNotFound}
				alt=""
				class="bg-[#f8fafc] object-cover text-center mx-auto mt-20"
			/>
		</div>
	);
}
