import { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

function App() {
	const [count, setCount] = useState(1);

	return (
		<div>
			<h3>useStete Counter</h3>
			<p>Counter : {count}</p>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setCount(count - 1)}>-1</button>
		</div>
	);
}

const mapStateToProps = (state) => ({ value: state.count.value });
const mapDispatchToProps = (dispatch) => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement()),
});

export default App;
