declare global {
    interface Window {
        env: { [key: string]: string };
    }
}

export function getEnv(name: string): string {
    console.log('env', window.env);
    const env = window.env[name];

    console.log('🚀 ~ getEnv ~ env:', env);

    if (!env) {
        throw new Error(`The environment variable is not defined: ${name}`);
    }

    return env;
}
