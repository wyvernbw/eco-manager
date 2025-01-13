import {
	getSystemStatus,
	getUsage,
	SystemParams,
	toggle,
	toUnits,
} from '@/api';
import { useMutation, useQuery } from 'react-query';
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
import { useEffect, useState } from 'react';
import { Switch } from './ui/switch';
import { set } from 'date-fns';

function Usage(props: { type: SystemParams }) {
	const status = useQuery(props.type, () => getSystemStatus());
	const usageData = useQuery({
		queryKey: props.type,
		refetchInterval: 2000,
		queryFn: async () => {
			return await getUsage();
		},
	});
	const [budgets, setBudgets] = useState({
		heating: 0,
		water: 0,
		electricity: 0,
	});
	const [budgetsText, setBudgetsText] = useState({
		heating: '0',
		water: '0',
		electricity: '0',
	});
	const [toggleState, setToggleState] = useState(false);
	const toggleMutation = useMutation({
		mutationFn: async () => {
			return await toggle(props.type, !toggleState);
		},
	});
	useEffect(() => {
		if (status.data) {
			setToggleState(status.data[props.type] === 'on');
		}
	}, [status.data]);
	useEffect(() => {
		console.log('BUDGETS: ', budgets);
	}, [budgets]);

	if (!usageData.data) return <div>Loading...</div>;
	const usage = usageData.data[props.type] ?? 0;
	const budget = budgets[props.type];
	return (
		<Card>
			<CardHeader>
				<CardTitle>{props.type}</CardTitle>
				<CardDescription>Monthly {props.type} usage</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="my-2 font-semibold">
					Current usage: {usage} {toUnits(props.type)}
				</div>
				<div className="flex gap-2 items-center">
					<span>Budget:</span>
					<Input
						className="w-32"
						onChange={e => {
							setBudgetsText(prev => ({
								...prev,
								[props.type]: e.target.value,
							}));
							setBudgets(prev => ({
								...prev,
								[props.type]: parseInt(e.target.value),
							}));
						}}
					/>
					<Progress value={(usage / budget) * 100} />
					<Switch
						value={toggleState ? 'on' : 'off'}
						onClick={() => {
							return toggleMutation.mutate();
						}}
					/>
				</div>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}

export default Usage;
