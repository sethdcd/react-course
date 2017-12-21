/* Visible Challenge
****************************************/
let onShow = false;

const showQuote = () => {
	onShow = !onShow;
	rerender();
};	

const rerender = () => {	
	const visibleTemplate = (
		<div>
			<h1>Visibility Challenge</h1>
			<button onClick={showQuote}>
				{onShow ? 'Hide Details' : 'Show Details'}
			</button>
			{onShow && <p>Hey! Here are some details to show you!!</p>}
		</div>
	);

	ReactDOM.render(visibleTemplate, document.getElementById('app'));
};

rerender();


