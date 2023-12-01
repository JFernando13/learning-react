import { Box, Button, Stack, Typography } from "@mui/joy"
import { quizActions, quizState } from "../../store"

export function EndGame() {
  const { answer } = quizState()

  return (
    <Stack spacing={3}>
      <Stack direction={"row"} gap={8}>
        <article style={{ display: "grid", placeContent: "center", gap: 10 }}>
          <Box
            height={100}
            width={100}
            sx={{ borderRadius: "50%", border: "solid 8px green", display: "flex", placeItems: "center", placeContent: "center", placeSelf: "center" }}
          >
            <Typography color="success" fontSize={40}>

              {answer.correct}
            </Typography>
          </Box>
          <Typography level="title-lg" color="success">Correct Answers</Typography>
        </article>
        <article style={{ display: "grid", placeContent: "center", gap: 10 }}>
          <Box
            height={100}
            width={100}
            sx={{ borderRadius: "50%", border: "solid 8px #a22", display: "flex", placeItems: "center", placeContent: "center", placeSelf: "center" }}
          >
            <Typography color="danger" fontSize={40}>

              {answer.incorrect}
            </Typography>
          </Box>
          <Typography level="title-lg" color="danger">Incorrect Answers</Typography>
        </article>
      </Stack>
      <Button onClick={quizActions.resetGame}>Reset Game</Button>
    </Stack>
  )
}