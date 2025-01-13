import { z } from 'zod';

const systemStatusSchema = z.object({
	heating: z.enum(['on', 'off', 'unknown']),
	ac: z.enum(['on', 'off', 'unknown']),
	water: z.enum(['connected', 'unknown']),
	electricity: z.enum(['on', 'off', 'unknown']),
});

const energySchema = z.object({
	energy: z.number(),
});

const temperatureSchema = z.object({
	temperature: z.number(),
});

const waterSchema = z.object({
	water: z.number(),
});

async function getEnergy() {
	await fetch('192.167.0.40/api/energy')
		.then(res => res.json())
		.then(res => energySchema.parse(res));
}

async function getTemperature() {
	await fetch('192.167.0.40/api/temperature')
		.then(res => res.json())
		.then(res => temperatureSchema.parse(res));
}

async function getWater() {
	await fetch('192.167.0.40/api/water')
		.then(res => res.json())
		.then(res => waterSchema.parse(res));
}

async function getSystemStatus() {
	await fetch('192.167.0.40/api/system')
		.then(res => res.json())
		.then(res => systemStatusSchema.parse(res));
}
