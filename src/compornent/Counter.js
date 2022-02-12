import { useState } from 'react';

export const Counter = () => {
	//カーリーブラケットとぶらっけっとの使い分けがよくわからない、、、
	const [count, setCount] = useState(1);

	// useEffect(() => {
	// 	setCount(10);
	// }, []);

	console.log({ count });
	return (
		<>
			<h3>useStete Counter</h3>
			<p>Counter : {count}</p>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setCount(count - 1)}>-1</button>
		</>
	);
};
