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

     //続きはここから！！
}