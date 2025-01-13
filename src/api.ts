import { z } from 'zod';

export const systemStatusSchema = z.object({
	heating: z.enum(['on', 'off', 'unknown']),
	water: z.enum(['connected', 'unknown']),
	electricity: z.enum(['on', 'off', 'unknown']),
});

export type SystemStatus = z.infer<typeof systemStatusSchema>;
export type SystemParams = keyof SystemStatus;

export const electricitySchema = z.object({
	electricity: z.number(),
});

export const temperatureSchema = z.object({
	temperature: z.number(),
});

export const waterSchema = z.object({
	water: z.number(),
});

export const heatingSchema = z.object({
	heating: z.number(),
});

export async function getUsage() {
	return {
		...(await getEnergy()),
		...(await getHeating()),
		...(await getWater()),
	};
}

const url = '192.168.0.40:4226';
const logResponse = (res: any) => {
	console.log(res);
	return res;
};

export async function getEnergy() {
	console.log('FETCH');

	return await fetch(`${url}/api/electricity`)
		.then(res => res.json())
		.then(logResponse)
		.then(res => electricitySchema.parse(res));
}

export async function getHeating() {
	console.log('FETCH');

	return await fetch(`${url}/api/heat`)
		.then(logResponse)
		.then(res => res.json())
		.then(res => heatingSchema.parse(res));
}

export async function getTemperature() {
	console.log('FETCH');

	return await fetch(`${url}/api/temperature`)
		.then(res => res.json())
		.then(logResponse)
		.then(res => temperatureSchema.parse(res));
}

export async function getWater() {
	console.log('FETCH');

	return await fetch(`${url}/api/water`)
		.then(res => res.json())
		.then(logResponse)
		.then(res => waterSchema.parse(res));
}

export async function getSystemStatus() {
	console.log('FETCH');

	return await fetch(`${url}/api/system`)
		.then(res => res.json())
		.then(logResponse)
		.then(res => systemStatusSchema.parse(res));
}
