/* JSX - JavaScript XML
** Indecision App
******************************************************/
const appRoot = document.getElementById('app');

const app = {
	title: 'Indecision App',
	subtitle: 'Best shit youll ever see on the net.',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		rerender();
	}
};

const reset = () => {
	app.options = [];
	rerender();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const rerender = () => {
	const template = (
		<div>
			<h1>{app.title}</h1> 
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? app.options : 'No options bitch'}</p>
			<p>{app.options.length}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
			<button onClick={reset}>Reset</button>
			<ol>
				{app.options.map((option) => <li key={option}>{option}</li>)}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>				
			</form>

		</div>
	);	
	ReactDOM.render(template, appRoot);	
};

rerender();