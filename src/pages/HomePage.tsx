import { FC } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/userSlice";

const HomePage:FC = () => {
	const dispatch = useAppDispatch();

	const { isAuth, email } = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		}
	});

	if (isAuth) {
		return (
			<div>
				<h1>Welcome</h1>

				<button onClick={() => dispatch(removeUser())}>
					Log out from {email}
				</button>
			</div>
		);
	}
};

export default HomePage;
