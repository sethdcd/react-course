
/* Examples of conditional logic
*******************/
const user = {
	name: 'Seth',
	age: 13,
	location: 'Your Anus'
};

const templateTwo = (
	<div>
		<h1>Name: {user.name ? user.name : 'Anon'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}