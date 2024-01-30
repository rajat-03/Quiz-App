import React from "react"
import { useLocation, useNavigate} from "react-router-dom"


import { Link } from "react-router-dom"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)
		const navigate = useNavigate()

		const handleRetakeQuiz = () => {
			navigate("/quiz-stepper");
		}

		return (
			<section className="container mt-5">
				<h3>Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>

				<button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
					Take another quiz
				</button>
			</section>
		)
 }

 export default QuizResult