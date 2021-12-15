import React from 'react';


// Types
type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
	questionNr: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ 	
	questions, 
	answers, 
	callback, 
	userAnswer, 
	questionNr, 
	totalQuestions 
}) => (
	<div>
		<p className="number">
			Question: {questionNr} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		<div>
			{answers.map((answer) => (
				<div>
					<button disabled={userAnswer} onClick={callback} >
						<span dangerouslySetInnerHTML={{ __thml: answer }} />
					</button>
				</div>
			))}
		</div>
	</div>
);




export default QuestionCard





