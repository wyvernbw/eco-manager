import { useQuery } from 'react-query';

function Usage(props: { type: string }) {
	const usage = useQuery(props.type);
}

export default Usage;
