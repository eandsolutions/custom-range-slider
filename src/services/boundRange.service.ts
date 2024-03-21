export const fetchRange = async (): Promise<{ min: number; max: number }> => {
	const response = await fetch('/api/range');
	const data = await response.json();
	return data;
};