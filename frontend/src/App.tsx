import { Box, Container, Paper, Stack, Typography } from "@mui/material";

const columns = [
  { key: "todo", title: "Todo" },
  { key: "doing", title: "Doing"},
  { key: "done", title: "Done"},
] as const;

function App() {
  return (
    <Container maxWidth="lg" sx={{ py:3 }}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Task Manager
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)"},
            gap: 2,
          }}
        >
          {columns.map((col) =>(
            <Paper key={col.key} variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1}}>
                {col.title}
              </Typography>

              <Stack spacing={1}>
                <Paper sx={{ p: 1.5, borderRadius: 2}}>
                  <Typography fontWeight={600}>サンプルタスク</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ここにタスクカードが並びます
                  </Typography>
                </Paper>

                <Paper sx={{ p: 1.5, borderRadius: 2}}>
                  <Typography fontWeight={600}>優先度や期限も後で追加</Typography>
                  <Typography variant="body2" color="text.secondary">
                    まずは見た目を完成させる
                  </Typography>
                </Paper>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}

export default App;