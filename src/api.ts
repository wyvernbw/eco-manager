import { get } from 'http';
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

export async function getEnergy() {
	return await fetch('192.167.0.40/api/energy')
		.then(res => res.json())
		.then(res => electricitySchema.parse(res));
}

export async function getHeating() {
	return await fetch('192.167.0.40/api/heating')
		.then(res => res.json())
		.then(res => heatingSchema.parse(res));
}

export async function getTemperature() {
	return await fetch('192.167.0.40/api/temperature')
		.then(res => res.json())
		.then(res => temperatureSchema.parse(res));
}

export async function getWater() {
	return await fetch('192.167.0.40/api/water')
		.then(res => res.json())
		.then(res => waterSchema.parse(res));
}

export async function getSystemStatus() {
	return await fetch('192.167.0.40/api/system')
		.then(res => res.json())
		.then(res => systemStatusSchema.parse(res));
}
