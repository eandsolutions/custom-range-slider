import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RangeSlider from './RangeSlider';

describe('RangeSlider', () => {
	test('renders without crashing', () => {
		render(<RangeSlider min={0} max={100} />);
	});

	test('calls onChange with correct values when min slider is moved', () => {
		const handleChange = jest.fn();
		const { getByLabelText } = render(<RangeSlider min={0} max={100} onChange={handleChange} />);
		const slider = getByLabelText('min-slider');
		fireEvent.change(slider, { target: { value: 50 } });
		expect(handleChange).toHaveBeenCalledWith({ min: 50, max: 100 });
	});

	test('calls onChange with correct values when max slider is moved', () => {
		const handleChange = jest.fn();
		const { getByLabelText } = render(<RangeSlider min={0} max={100} onChange={handleChange} />);
		const slider = getByLabelText('max-slider');
		fireEvent.change(slider, { target: { value: 50 } });
		expect(handleChange).toHaveBeenCalledWith({ min: 0, max: 50 });
	});

	test('calls onChange with correct values when min slider is moved and options prop is provided', () => {
		const handleChange = jest.fn();
		const { getByLabelText } = render(<RangeSlider min={0} max={100} options={[0, 25, 50, 75, 100]} onChange={handleChange} />);
		const slider = getByLabelText('min-slider');
		fireEvent.change(slider, { target: { value: 25 } });
		expect(handleChange).toHaveBeenCalledWith({ min: 25, max: 100 });
	});

	test('calls onChange with correct values when max slider is moved and options prop is provided', () => {
		const handleChange = jest.fn();
		const { getByLabelText } = render(<RangeSlider min={0} max={100} options={[0, 25, 50, 75, 100]} onChange={handleChange} />);
		const slider = getByLabelText('max-slider');
		fireEvent.change(slider, { target: { value: 75 } });
		expect(handleChange).toHaveBeenCalledWith({ min: 0, max: 75 });
	});
});