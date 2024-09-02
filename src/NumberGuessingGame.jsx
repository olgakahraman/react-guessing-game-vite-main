import { useState } from 'react';
import GameOver from './GameOver';
import GuessControl from './GuessControl';
import GuessMessage from './GuessMessage';

function getRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

export default function NumberGuessingGame({ onGuess }) {
	const [numberToGuess, setNumberToGuess] = useState(
		getRandomNumber()
	);
	const [numberOfGuesses, setNumberOfGuesses] = useState(0);
	const [latestGuess, setLatestGuess] = useState(null);

	function handleGuess(event) {
		event.preventDefault();
		GuessControl({ onGuess });
		setLatestGuess(Number(numberOfGuesses +1));
	}

	function handleReset(event) {
		event.preventDefault();
		setNumberToGuess(getRandomNumber());
		setNumberOfGuesses(0);
		setLatestGuess(null);
	}

	const isCorrectGuess = latestGuess === numberToGuess;
	const isGameOver =
		isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

	return (
		<div>
			<h2>I'm thinking of a number from 1 to 100.</h2>
			<h2>
				Can you guess the number I am thinking of in{' '}
				{MAX_ATTEMPTS} tries?
			</h2>
			<GuessControl onGuess={handleGuess} />
			{isGameOver && (
				<GameOver
					hasWon={isCorrectGuess}
					onReset={handleReset}
				/>
			)}
			{!isGameOver && (
				<GuessMessage
					guess={latestGuess}
					numberToGuess={numberToGuess}
					numberOfGuesses={numberOfGuesses}
				/>
			)}
		</div>
	);
}
