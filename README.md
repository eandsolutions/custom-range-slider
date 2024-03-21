# 🎛️ RangeSlider Component

The `RangeSlider` is a versatile React component that provides a double-ended range slider for selecting a range of values. It's perfect for scenarios where you need to let users select a range within a larger set of values.

## 🚀 Installation

To use the `RangeSlider` component, you need to import it from its file location:

```typescript
import RangeSlider from './components/RangeSlider';
```

## 🎯 Usage
Here's an example of how to use the RangeSlider component:
    
```typescript jsx
<RangeSlider min={0} max={100} onChange={(value) => console.log(value)} />
```

## 📝 Props
The RangeSlider component accepts the following props:  
* min: The minimum value of the range. This is a required prop.
* max: The maximum value of the range. This is a required prop.
* options: An optional array of numbers. If provided, the slider values will snap to these numbers.
* onChange: A function that gets called whenever the range values change. It receives an object with min and max properties representing the current range values.

## 🎨 Styling
The RangeSlider component uses CSS for styling. The styles can be found in the RangeSlider.css file. You can modify these styles to suit your needs.  

🧪##  Testing
This component is tested using Jest and React Testing Library. The tests can be found in the RangeSlider.spec.tsx file. To run the tests, use the npm test command.

```bash
npm run test
```