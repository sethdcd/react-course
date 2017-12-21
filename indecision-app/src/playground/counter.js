/* Counter Example
*******************/
// This example represents how to re render something to get the value to update 
// each time the button is clicked.
let count = 0;

const addOne = () => {
	count++;
	renderCounterApp();
};
const minusOne = () => {
	count--;
	renderCounterApp();	
};
const resetBtn = () => {
	count = 0;
	renderCounterApp();	
};

const renderCounterApp = () => {
	const templateThree = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne} className="button">+1</button>
			<button onClick={minusOne} className="button">-1</button>
			<button onClick={resetBtn} className="button">Reset</button>
		</div>
	);
	// Render App
	ReactDOM.render(templateThree, appRoot);	
};

renderCounterApp();	