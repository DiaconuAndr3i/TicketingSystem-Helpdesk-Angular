export function deleteCookie(name: string) {
    const date = new Date();
    const day = 24 * 60 * 60 * 1000;

    date.setTime(date.getTime() - day);

    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}