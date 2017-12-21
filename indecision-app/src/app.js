class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of my code!';
		const options = ['one', 'two', 'three'];

		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options} />
				<AddOption options={options}/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	onPick() {
		alert('ferg');
	}

	render() {
		return (
			<div>
				<button onClick={this.onPick}>What Should I Do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.removeAll = this.removeAll.bind(this);
	}
	removeAll() {
		alert(this.props.options);
	}

	render() {		
		return (
			<div>
				<button onClick={this.removeAll}>Remove All Items</button>
				{this.props.options.map((option) => <Option key={option} optionText={option} />)}			
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.optionText}</li>
				</ul>
			</div>
		);
	}
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const getOption = this.props.options.bind()
		if (option) {
			this.props.options.push(option);
			e.target.elements.option.value = '';
			console.log(this.props.options);
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type='text' name='option' placeholder='Enter Option Here' />
					<button>Add Option</button>					
				</form>
			</div>
		);
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));