import PropTypes from 'prop-types';

function App() {
	const dom = <h1>udemy-react-redux-curd-app start jsx dom</h1>;

	const Users = [
		{ LastName: 'Taro', FirstName: 'Yamada' },
		{ LastName: 'Jiro', FirstName: 'Yamada' },
		{ LastName: 'Saburo', FirstName: 'Yamada' },
	];

	return (
		<div>
			{dom}
			<input
				type='text'
				onClick={() => {
					console.log('Clicked.');
				}}
			/>

			{Users.map((User, index) => {
				return (
					<DispUser
						LastName={User.LastName}
						FirstName={User.FirstName}
						key={index}
					/>
				);
			})}
		</div>
	);
}

//FunctionalCompornetは最初大文字縛り
//ひとまず最初大文字にすればよいのではなかろうか
const DispUser = (props) => {
	return (
		<div>
			<span>Hello! {props.FirstName} </span>
			<span>{props.LastName} !!</span>
		</div>
	);
};

DispUser.propTypes = {
	FirstName: PropTypes.string,
	LastName: PropTypes.string,
};

export default App;
