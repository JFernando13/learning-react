import { create } from 'zustand'
import { QuestionType } from './model/question.model'

const initialState = {
  quistions: [] as QuestionType[],
  currentQuestion: 0,
  answer: {
    correct: 0,
    incorrect: 0
  },
}

export const quizState = create(() => ({
  questions: [] as QuestionType[],
  currentQuestion: 0,
  answer: {
    correct: 0,
    incorrect: 0
  },
}))

const fetchQuestions = async (limit: number) => {
  const res = await fetch("http://localhost:5173/questions.json")
  const data: QuestionType[] = await res.json()

  const questions = data.sort(() => Math.random() - .5).slice(0, limit)
  return questions
}

export const quizActions = {
  getQuestions: (limit: number) => fetchQuestions(limit).then(questions => quizState.setState({ questions })),
  nextQuestions: () => quizState.setState(() => ({ currentQuestion: quizState.getState().currentQuestion + 1 })),
  correctAnswer: (index: number) => quizState.setState(() => {
    const { questions, currentQuestion } = quizState.getState()

    if (index === questions[currentQuestion].correctAnswer) {
      return { answer: { ...quizState.getState().answer, correct: quizState.getState().answer.correct + 1 } }
    }

    return { answer: { ...quizState.getState().answer, incorrect: quizState.getState().answer.incorrect + 1 } }
  }),
  resetGame: () => quizState.setState(() => initialState)
}