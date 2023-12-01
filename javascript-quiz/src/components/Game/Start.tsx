import { Button, Typography } from '@mui/joy';
import { quizActions, } from '../../store';
import { PlayIcon } from '../icons/PlayIcon';

export function Start() {

  return (
    <>
      <Typography level='h1' textColor={"#fff"}>JavaScript Quiz</Typography>
      <Button
        variant='solid'
        startDecorator={<PlayIcon />}
        color='primary'
        onClick={() => quizActions.getQuestions(5)}
      >
        Start Quiz
      </Button>
    </>
  )
}