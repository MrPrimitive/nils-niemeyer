export function normalize(val: number, min: number, max: number): number {
	const delta: number = max - min
	return (val - min) / delta
}
