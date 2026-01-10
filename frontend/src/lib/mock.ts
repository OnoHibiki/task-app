import { type Task } from "./types";

const now = new Date().toISOString(); 

export const mockTask: Task[] = [
    {
        id: "t1",
        title: "UI作成",
        description: "テスト",
        status: "todo",
        priority: "high",
        dueDate: "2026-01-12",
        createdAt: now,
        updatedAt: now,
    },
    
    {
        id: "t2",
        title: "タスク作成を実装",
        status: "doing",
        priority: "med",
        dueDate: "2026-01-13",
        createdAt: now,
        updatedAt: now,
    },

    {
        id: "t3",
        title: "READMEの骨組みを書く",
        status: "done",
        priority: "low",
        createdAt: now,
        updatedAt: now,
    },
]