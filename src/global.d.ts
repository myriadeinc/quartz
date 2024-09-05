export { };
declare global {
    interface Window {
        electronAPI: {
            startXmrig: () => void;
            stopXmrig: () => void;
            getSystemInfo: () => Promise<{ cpu: string; load: number; temperature: number; error?: string }>;
            changeConfig: (data: { [key: string]: any }) => void;
        };
    }
}