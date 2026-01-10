//タスクの状態と、優先度

export type TaskStatus = "todo" | "doing" | "done" ;
export type TaskPriority = "low" | "med" | "high";

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: string;
    createdAt: string;
    updateAt: string;
}