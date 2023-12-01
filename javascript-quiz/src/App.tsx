import { Stack } from '@mui/joy';
import { EndGame } from './components/Game/EndGame';
import { Question } from './components/Game/Question';
import { Start } from './components/Game/Start';
import { quizState } from './store';


export function App() {
  const { questions, currentQuestion } = quizState()

  if (currentQuestion > 4) {
    return <EndGame />
  }
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" height="100">
      {
        questions.length === 0 ? <Start /> : <Question question={questions[currentQuestion]} />
      }
    </Stack>
  )
}