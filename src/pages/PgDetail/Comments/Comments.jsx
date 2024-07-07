import { Textarea, Card, Button } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { API } from '../../../service/api/API';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { config } from '../../../config/config';
export default function Comments() {
	console.log('Comments');
	const [comments, setComments] = useState('');
	const { productId } = useParams();
	const handleSendComment = () => {
		if (!comments) {
			toast.error('Vui lòng nhập bình luận !', { duration: 1000 });
			return;
		}
		const newComment = new Promise((resolve, reject) => {
			axios
				.post(`${API.SEND_COMMENT}`, { productId, comments }, config)
				.then((res) => resolve(res.data))
				.catch((err) => reject(err));
		});
		toast.promise(newComment, {
			loading: 'Đang gửi bình luận',
			success: (res) => {
				setComments('');
				return 'Gửi bình luận thành công';
			},
			error: (err) => {
				console.log(err);
				return 'Gửi bình luận thất bại';
			}
		});
	};
	return (
		<Card className="bg-white p-2" radius="sm">
			<Textarea
				isRequired
				label="Comments"
				labelPlacement="outside"
				placeholder="Enter your Comments"
				variant="bordered"
				onChange={(e) => setComments(e.target.value)}
			/>
			<Button className="mt-4 " color="primary" onClick={handleSendComment}>
				Gửi bình luận
			</Button>
		</Card>
	);
}
