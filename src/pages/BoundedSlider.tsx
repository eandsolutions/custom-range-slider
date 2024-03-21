import React, {useEffect, useState} from 'react';
import RangeSlider from "@src/components/RangeSlider";
import {fetchRange} from "@src/services/boundRange.service";
import {Range} from "@src/types/range";

const BoundedSlider: React.FC = () => {

	const [range, setRange] = useState<Range>({ min: 0, max: 0 });

	useEffect(() => {
		fetchRange().then((data: Range) => {
			setRange(data)
		});
	}, []);

	return (
		<div>
			<h1>Exercise 1: Normal Range Slider</h1>
			<RangeSlider max={range.max} min={range.min}/>
		</div>
	);
};

export default BoundedSlider;