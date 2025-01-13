import { getSystemStatus, getUsage, SystemParams } from '@/api';
import { useQuery } from 'react-query';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { useState } from 'react';

function Usage(props: { type: SystemParams }) {
	const status = useQuery(props.type, () => getSystemStatus());
	const usageData = useQuery(props.type, () => getUsage());
	const budgets = useState({
		heating: 0,
		water: 0,
		electricity: 0,
	});
	const budget = budgets[0][props.type];
	if (!usageData.data) return <div>Loading...</div>;
	const usage = usageData.data[props.type] ?? 0;
	return (
		<Card>
			<CardHeader>
				<CardTitle>{props.type}</CardTitle>
				<CardDescription>Monthly {props.type} usage</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex gap-2 items-center">
					<span>Budget:</span>
					<Input
						className="w-32"
						onChange={e =>
							(budgets[0][props.type] = parseFloat(
								e.target.value
							))
						}
					/>
					<Progress value={(usage / budget) * 100} />
				</div>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}

export default Usage;
