
export default function getCSRFToken() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=').map(c => c.trim());
        if (key === 'csrftoken') {
            return value;
        }
    }
    return null;
}
