export const putItem = async (key: string, value: any) => {
    try {
        if (key && value) {
            const data = JSON.stringify(value);
            await localStorage.setItem(key, data);
            return true;
        }
    } catch(e) {
        console.warn('Error putItem: ', e);
        return false;
    }
}

export const removeItem = async (key: string) => {
    try {
        if (key) {
            await localStorage.removeItem(key);
            return true;
        }
    } catch(e) {
        console.warn('Error removeItem: ', e);
        return false;
    }
}

export const readItem = async (key: string) => {
    try {
        if (key) {
            const result = await localStorage.getItem(key);
            return result;
        }
    } catch(e) {
        console.warn('Error readStorage: ', e);
        return false;
    }
}