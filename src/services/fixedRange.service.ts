export const fetchFixedRange = async (): Promise<number[]> => {
	const response = await fetch('/api/fixedRange');
	const data = await response.json();
	return data;
};