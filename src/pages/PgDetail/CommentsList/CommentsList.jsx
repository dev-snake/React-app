import { Button, Textarea, Avatar } from '@nextui-org/react';
import formatDate from '../../../utils/formatDate';
export default function CommentsList({ commentsList }) {
	console.log(commentsList);
	return (
		<div className="bg-white mt-4 text-[1rem] p-4 rounded-md max-[998px]:m-4">
			<h1>Các đánh giá nhận xét về sản phẩm </h1>
			<div>
				{commentsList.map((item, index) => (
					<div key={index} className="mt-4">
						<div className="flex justify-between">
							<div className="flex items-center gap-1">
								<Avatar name={item.fullname[0]} size="sm" color="secondary" />
								<span> {item.fullname}</span>
							</div>
							<p className="text-sm font-semibold">
								<i className="fa-regular fa-clock mr-2"></i>
								{formatDate(item.date)}
							</p>
						</div>
						<div className="mt-2">
							<Textarea value={item.comments} isDisabled />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
