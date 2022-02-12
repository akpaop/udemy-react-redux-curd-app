function App() {
	const dom = <h1>udemy-react-redux-curd-app start jsx dom</h1>;
	return (
		<div className='foo'>
			{dom}
			<input
				type='text'
				onClick={() => {
					console.log('Clicked.');
				}}
			/>
		</div>
	);
}

export default App;
