import { Paper, Stack, Typography, Button } from "@mui/material";
import { type Task, type TaskStatus } from "../lib/types";

type Props = {
    task: Task;
    onMove: (id: string, nextStatus: TaskStatus) => void;
    onDelete: (id: string) => void;
};

const statusLabel: Record<TaskStatus, string> = {
    todo: "Todo",
    doing: "Doing",
    done: "Done",
}

export default function TaskCard({ task, onMove, onDelete }: Props) {
    const canMoveLeft = task.status !== "todo";
    const canMoveRight = task.status !== "done";

    const moveleft = () => {
        if (task.status === "doing") onMove(task.id, "todo");
        if (task.status === "done") onMove(task.id, "doing");
    };

    const MoveRight = () => {
        if (task.status === "todo") onMove(task.id, "doing");
        if (task.status === "doing") onMove(task.id, "doing");
    };

    return(
        <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2}}>
            <Stack spacing={0.5}>
                <Typography fontWeight={700}>{task.title}</Typography>
                {task.description ? (
                    <Typography variant="body2" color="textSecondary">
                        {task.description}
                    </Typography>
                ) : null}

                <Typography variant="caption" color="text.secondary">
                    Status: {statusLabel[task.status]} / Priority: {task.priority}
                    {task.dueDate ? ` / Due: ${task.dueDate}` : ""}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button size="small" variant="outlined" disabled={!canMoveLeft} onClick={moveleft}>
                        ←
                    </Button>
                    <Button size="small" variant="outlined" disabled={!canMoveRight} onClick={MoveRight}>
                        →
                    </Button>
                    <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        onClick={() => onDelete(task.id)}
                        sx={{ ml: "auto"}}
                    >
                        Delete                        

                    </Button>
                </Stack>
            </Stack>
        </Paper>
    )
}