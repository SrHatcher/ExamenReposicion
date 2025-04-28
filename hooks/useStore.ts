import { create } from 'zustand';

interface dataStore {
    id: number;
    operation: string;
    result: string;
    date: string;

    setId: (value: number) => void;
    setOperation: (value: string) => void;
    setResult: (value: string) => void;
    setDate: (value: string) => void;
}

export const useHistoryStore = create<dataStore>((set) => ({
    id: 0,
    operation: '',
    result: '',
    date: '',

    setId: (value) => set({ id: value }),
    setOperation: (value) => set({ operation: value }),
    setResult: (value) => set({ result: value }),
    setDate: (value) => set({ date: value })
}));