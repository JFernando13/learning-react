import { Box, Chip, List, ListDivider, ListItemButton, Stack, Typography } from "@mui/joy"
import { QuestionType } from "../../model/question.model"
import { quizActions, quizState } from '../../store'

interface Props {
  question: QuestionType
}

export function Question({ question }: Props) {

  const { currentQuestion } = quizState()

  return (
    <Stack spacing={5} width={500}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography level="h2" variant="plain" textColor={"background.body"}>{question.question}</Typography>
          <Typography
            level="body-md" variant="solid" color="primary"
          >
            <code>{question.code}</code>
          </Typography>
        </Stack>
        <List size="lg" sx={{ borderRadius: 8 }}>
          <Typography variant="solid" color="primary">Answers</Typography>
          {
            question.answers.map((answer, index) => (
              <ListItemButton
                onClick={() => {
                  quizActions.correctAnswer(index)
                  quizActions.nextQuestions()
                }}
                variant="soft"
                color="primary"
                key={`${answer}-${index}`}
              >
                {answer}
                <ListDivider inset="gutter" />
              </ListItemButton>
            ))
          }
        </List>
      </Stack>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Chip variant="solid" color="primary" size="lg">{currentQuestion + 1}</Chip>
      </Box>
    </Stack>
  )
}