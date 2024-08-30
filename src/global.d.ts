export { };
declare global {
    interface Window {
        electronAPI: {
            startXmrig: () => void;
            stopXmrig: () => void;
            onXmrigOutput: (callback: (event: any, data: string) => void) => void;
            onXmrigExit: (callback: (event: any, data: string) => void) => void;
            getSystemInfo: () => Promise<{ cpu: string; load: number; temperature: number; error?: string }>;
            changeConfig: (data: { [key: string]: any }) => void;  // Type for changeConfig
        };
    }
}