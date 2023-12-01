export interface QuestionType {
  id: number,
  question: string,
  code: string
  answers: string[]
  correctAnswer: number
  userAnswer?: {
    selected: number,
    isCorrect: boolean
  }
}
