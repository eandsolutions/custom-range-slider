import React, {useEffect, useState} from 'react';
import RangeSlider from "@src/components/RangeSlider";
import {fetchFixedRange} from "@src/services/fixedRange.service";
import {Range} from "@src/types/range";
const FixedSlider: React.FC = () => {
    const [range, setRange] = useState<number[]>([]);

    useEffect(() => {
        fetchFixedRange().then((data: number[]) => setRange(data));
    }, []);

    return (
        <div>
            <h1>Exercise 2: Fixed Options Range Slider</h1>
            <RangeSlider max={range[range.length - 1]} min={range[0]} options={range}/>
        </div>
    );
};

export default FixedSlider;