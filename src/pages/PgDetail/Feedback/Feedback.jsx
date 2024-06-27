import { Button, Textarea } from '@nextui-org/react';
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
			<Textarea
				className="w-full outline-none "
				label="Nhập bình luận của bạn"
				variant="faded"
			></Textarea>
			<Button
				className="text-[1rem] block w-full outline-none mt-4"
				color="primary"
				variant="shadow"
			>
				Gửi đánh giá
			</Button>
		</form>
	);
}
