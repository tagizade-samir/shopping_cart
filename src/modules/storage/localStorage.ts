export const putItem = async (key: string, value: any): Promise<boolean> => {
    try {
        if (key && value) {
            const data: string = JSON.stringify(value);
            await localStorage.setItem(key, data);
            return true;
        }

        return false;
    } catch(e) {
        console.warn('Error putItem: ', e);
        return false;
    }
}

export const removeItem = async (key: string): Promise<boolean> => {
    try {
        if (key) {
            await localStorage.removeItem(key);
            return true;
        }

        return false;
    } catch(e) {
        console.warn('Error removeItem: ', e);
        return false;
    }
}

export const readItem = async (key: string): Promise<string | null> => {
    try {
        if (key) {
            const result: string | null = await localStorage.getItem(key);
            return result;
        }

        return null;
    } catch(e) {
        console.warn('Error readStorage: ', e);
        return null;
    }
}