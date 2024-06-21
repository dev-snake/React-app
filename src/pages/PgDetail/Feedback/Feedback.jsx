export default function Feedback() {
	return (
		<form className="bg-white mt-4 text-[1rem] p-4 rounded-md max-[998px]:m-4">
			<p className="font-medium">Đánh giá mức độ hài lòng về sản phẩm</p>
			<div className="flex justify-center gap-10">
				<div className="flex flex-col items-center">
					<i className=""></i>
					<span className="text-xs"></span>
				</div>
			</div>
			<p className="text-[1rem] font-medium py-2">Vui lòng chia sẻ lí do tại sao</p>
			<textarea className="w-full outline-none border p-1 rounded text-[1rem]"></textarea>
			<button
				className="text-[1rem] bg-blue-400 w-full p-2 rounded text-white
             mt-2 hover:bg-blue-500 transition-all duration-300 ease-linear h-10"
			>
				Gửi đánh giá
			</button>
		</form>
	);
}
