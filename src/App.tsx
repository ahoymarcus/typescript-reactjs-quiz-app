// https://www.youtube.com/watch?v=F2JCjVSZlG0
//  0hs  17'  39''


// Components 
import QuestionCard from './components/QuestionCard';


// Styles



// types

   

 
 
 
const App = () => {
	const startTrivia = async () => {
		
	};
	
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		
	};
	
	const nextQuestion = () => {
		
	};
	
	
	
	return ( 
    <div>
			<h1>REACT QUIZ</h1>
			<button className="start" onClick={startTrivia}>
				Start
			</button>
			<p className="score">Score:</p>
			<p>Loading Questions...</p>
			<QuestionCard />
			<button className="nest" onClick={nextQuestion}>
				Next Question
			</button>
		</div>
  );
};



export default App;




