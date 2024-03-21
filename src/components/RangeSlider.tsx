import React, {useState, useCallback, useEffect} from 'react';
import './RangeSlider.css'; // Make sure to create the appropriate CSS file

interface RangeSliderProps {
	min: number;
	max: number;
	options?: number[];
	onChange?: (value: { min: number; max: number }) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, options, onChange }) => {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);

	useEffect(() => {
		setMaxVal(max);
		setMinVal(min);
	}, [min, max]);

	const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = Number(event.target.value);
		if (options) {
			value = options.reduce((prev, curr) =>
				Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
			);
			if (value < maxVal) {
				setMinVal(value);
				if (onChange) {
					onChange({ min: value, max: maxVal });
				}
			}
		} else {
			value = Math.min(Number(event.target.value), maxVal - 1);
			setMinVal(value);
			if (onChange) {
				onChange({ min: value, max: maxVal });
			}
		}
	};

	const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = Number(event.target.value);
		if (options) {
			value = options.reduce((prev, curr) =>
				Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
			);
			if (value > minVal) {
				setMaxVal(value);
				if (onChange) {
					onChange({ min: minVal, max: value });
				}
			}
		} else {
			value = Math.max(Number(event.target.value), minVal + 1);
			setMaxVal(value);
			if (onChange) {
				onChange({ min: minVal, max: value });
			}
		}
	};

	const getPercent = useCallback(
		(value: number) => Math.round(((value - min) / (max - min)) * 100),
		[min, max]
	);

	return (
		<div className="slider-container">
			<input
				type="range"
				min={min}
				max={max}
				value={minVal}
				onChange={handleMinChange}
				className="thumb thumb--zindex-3"
				style={{zIndex: minVal > max - 100 ? '5' : '3'}}
				aria-label="min-slider"
			/>
			<input
				type="range"
				min={min}
				max={max}
				value={maxVal}
				onChange={handleMaxChange}
				className="thumb thumb--zindex-4"
				aria-label="max-slider"
			/>

			<div className="slider-track"/>
			<div
				className="slider-range"
				style={{
					left: `${getPercent(minVal)}%`,
					width: `${getPercent(maxVal) - getPercent(minVal)}%`,
				}}
			/>

			<div className="slider-labels">
				<span className="slider-label-min">{minVal}€</span>
				<span className="slider-label-max">{maxVal}€</span>
			</div>
		</div>
	);
};

export default RangeSlider;