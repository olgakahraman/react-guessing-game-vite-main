import React, { useState } from 'react';
import Button from './Button';

export default function GuessControl({ onGuess }) {
	const [currentGuess, setCurrentGuess] = useState('');

	function handleInputChange(event) {
		let newGuess = event.target.value;
		setCurrentGuess(newGuess);
	}

	function onSubmitGuess(event) {
		event.preventDefault();
		onGuess(Number(currentGuess));
		setCurrentGuess = '';
	}
  
    	return (
		<div>
			<input
				type="number"
				value={currentGuess}
				onChange={handleInputChange}
			/>
			<Button onClick={onSubmitGuess}>Submit Guess</Button>
		</div>
	);
  

}
