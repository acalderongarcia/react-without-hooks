export const API_TOKEN = 'API_TOKEN';

export const getApiToken = async (firebaseToken: string) => {
    const promise = await window.fetch('http://172.16.19.109:3000/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            accessToken: firebaseToken,
        })
    })

    return promise.json();

}

