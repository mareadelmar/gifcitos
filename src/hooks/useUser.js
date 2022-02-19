import { useState, useContext, useCallback } from "react";
import Context from "../context/UserContext";

export default function useUser() {
	const { jwt, setJWT } = useContext(Context);
	const [state, setState] = useState({ isLoading: false, isError: false });

	const login = useCallback(() => {
		setState({ isLoading: true, isError: false });
		// TODO
	}, []);

	const logout = useCallback(() => {
		setJWT(null);
	}, [setJWT]);

	return {
		isLogged: false,
		login,
		logout,
		isLoginLoading: state.isLoading,
		isLoginError: state.isError,
	};
}
