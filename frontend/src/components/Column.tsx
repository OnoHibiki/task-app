import { Paper, Stack, Typography } from "@mui/material";
import TaskCard from "./TaskCard";
import { type Task, type TaskStatus } from "../lib/types";

type Props = {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onMove: (id: string, nextStatus: TaskStatus) => void;
  onDelete: (id: string) => void;
};

export default function Column({ title, status, tasks, onMove, onDelete }: Props) {
  const filtered = tasks.filter((t) => t.status === status);

  return (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
        {title} <Typography component="span" color="text.secondary">({filtered.length})</Typography>
      </Typography>

      <Stack spacing={1}>
        {filtered.length === 0 ? (
          <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">
              まだタスクがありません
            </Typography>
          </Paper>
        ) : null}

        {filtered.map((task) => (
          <TaskCard key={task.id} task={task} onMove={onMove} onDelete={onDelete} />
        ))}
      </Stack>
    </Paper>
  );
}
