declare global {
    interface Window {
        env: { [key: string]: string };
    }
}

export function getEnv(name: string): string {
    const env = window.env[name];

    if (!env) {
        throw new Error(`The environment variable is not defined: ${name}`);
    }

    return env;
}
