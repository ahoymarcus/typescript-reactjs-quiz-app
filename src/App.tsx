// https://www.youtube.com/watch?v=F2JCjVSZlG0
//  0hs  49'  40''
import { useState } from 'react';

import { QuestionState, fetchQuizQuestions } from './API';

// Components 
import QuestionCard from './components/QuestionCard';


// Styles
 


// types
import { Difficulty } from './API';
  
type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};
	

const TOTAL_QUESTIONS = 10; 
  
const App = () => {
	const [ loading, setLoading ] = useState(false);
	const [ questions, setQuestions ] = useState<QuestionState[]>([]);
	const [ number, setNumber ] = useState(0);
	const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([]);
	const [ score, setScore ] = useState(0);
	const [ gameOver, setGameOver ] = useState(true);
	
	 
	console.log(questions);
	
	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);
		
		try {
			const newQuestions = await fetchQuizQuestions(
				TOTAL_QUESTIONS,
				Difficulty.EASY
			);
			
			setQuestions(newQuestions);
			setScore(0);
			setUserAnswers([]);
			setNumber(0);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
		
	};
	
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// Users answer
			const answer = e.currentTarget.value;
			
			// Check answer agains correct answer
			const correct = questions[number].correct_answer === answer;
			
			// Add score if answer is correct
			if (correct) setScore(prev => prev + 1);
			
			// Save answer in the array for user answers
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			
			setUserAnswers((prev) => [ ...prev, answerObject ]);
		}
	};
	
	const nextQuestion = () => {
		
	};
	
	
	
	return ( 
    <div>
			<h1>REACT QUIZ</h1>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? 
			(<button className="start" onClick={startTrivia}>
				Start
			</button>) : null}
			{!gameOver ? <p className="score">Score:</p> : null}
			{loading && <p>Loading Questions...</p>}
			{!loading && !gameOver && (
				<QuestionCard 
					questionNr={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined }
					callback={checkAnswer}
				/> 
			)} 
			{!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ? (
				<button 
					className="nest" 
					onClick={nextQuestion}
				>
					Next Question
				</button>
			) : null }
			
		</div>
  );
};
  
 

export default App;




