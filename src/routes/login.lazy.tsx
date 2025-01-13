import { createLazyFileRoute } from '@tanstack/react-router';

const Login = () => {
	return <div className="login-container">hello world!</div>;
};

export const Route = createLazyFileRoute('/login')({
	component: () => <div className="h-screen w-screen bg-red-300"></div>,
});

export default Login;
