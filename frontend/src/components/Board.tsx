import { useMemo, useState } from "react";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import Column from "./Column";
import { mockTasks } from "../lib/mock";
import { type Task, type TaskPriority,  type TaskStatus } from "../lib/types";

const columns = [
  { key: "todo" as const, title: "Todo" },
  { key: "doing" as const, title: "Doing" },
  { key: "done" as const, title: "Done" },
];

function makeId() {
  // まずは簡易ID（後でuuidに置き換えOK）
  return `t_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}

export default function Board() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [newTitle, setNewTitle] = useState("");
  const [query, setQuery] = useState("");

  const visibleTasks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter((t) => t.title.toLowerCase().includes(q));
  }, [tasks, query]);

  const addTask = () => {
    const title = newTitle.trim();
    if (!title) return;

    const now = new Date().toISOString();
    const task: Task = {
      id: makeId(),
      title,
      status: "todo",
      priority: "med" as TaskPriority,
      createdAt: now,
      updatedAt: now,
    };

    setTasks((prev) => [task, ...prev]);
    setNewTitle("");
  };

  const moveTask = (id: string, nextStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: nextStatus, updatedAt: new Date().toISOString() } : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={800}>
          Kanban Task Manager
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <TextField
            label="新規タスク"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
            fullWidth
          />
          <Button variant="contained" onClick={addTask} sx={{ height: 56 }}>
            Add
          </Button>
        </Stack>

        <TextField
          label="検索（タイトル）"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {columns.map((c) => (
            <Column
              key={c.key}
              title={c.title}
              status={c.key}
              tasks={visibleTasks}
              onMove={moveTask}
              onDelete={deleteTask}
            />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
