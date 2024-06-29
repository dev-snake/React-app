import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { API } from '../service/api/API';
import { useNavigate } from 'react-router-dom';
export const useFormValidation = (initialState, validate) => {
	const navigative = useNavigate();
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		const validationErrors = validate(values);
		setErrors({
			...errors,
			[name]: validationErrors[name]
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length === 0) {
			const registerPromise = new Promise((resolve, reject) => {
				axios
					.post(`${API.USERS}/register`, values)
					.then((res) => {
						setValues(initialState);
						resolve(res);
						navigative('/auth/login');
					})
					.catch((err) => reject(err));
			});
			toast.promise(registerPromise, {
				loading: 'Đang xử lý...',
				success: (res) => {
					return 'Đăng kí thành công';
				},
				error: (err) => {
					if (err.response && err.response.data) {
						console.log(err.response);
						return err.response.data;
					}
					return 'Đăng kí thất bại';
				}
			});
		}
	};

	return {
		values,
		errors,
		handleChange,
		handleBlur,
		handleSubmit
	};
};
export const validate = (values) => {
	let errors = {};

	if (!values.fullname.trim()) {
		errors.fullname = 'Họ và tên không được để trống';
	}

	if (!values.email) {
		errors.email = 'Email không được để trống';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email không hợp lệ';
	}

	if (!values.username.trim()) {
		errors.username = 'Username không được để trống';
	}

	if (!values.password) {
		errors.password = 'Password không được để trống';
	} else if (values.password.length < 6) {
		errors.password = 'Password phải dài ít nhất 6 ký tự';
	}

	return errors;
};
