// global.d.ts
export {};

declare global {
    interface Window {
        SetUrl: (items: any[]) => void;
    }
}
