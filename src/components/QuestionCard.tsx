import React from 'react';

// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

// Types
import { AnswerObject } from '../App';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNr: number;
	totalQuestions: number;
};


/*
	Atenção, para a conversão feita no elemento de botão abaixo, poderia ter sido usada também a sintaxe seguinte:
	<button disabled={!!answer} ...>
*/
const QuestionCard: React.FC<Props> = ({ 	
	question, 
	answers, 
	callback, 
	userAnswer, 
	questionNr, 
	totalQuestions 
}) => (
	<Wrapper>
		<p className="number">
			Question: {questionNr} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		<div>
			{answers.map((answer, index) => (
				<ButtonWrapper 
					key={answer}
					correct={userAnswer?.correctAnswer === answer}
					userClicked={userAnswer?.answer === answer}
				>
					<button 
						disabled={userAnswer ? true : false} 
						value={answer}
						onClick={callback} 
					>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</ButtonWrapper>
			))}
		</div>
	</Wrapper>
);




export default QuestionCard





