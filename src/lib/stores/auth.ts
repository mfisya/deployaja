import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface User {
    id: string;
    name: string;
    email: string;
    avatar_url?: string;
}

const storedUser = browser ? localStorage.getItem('user') : null;
const initialUser: User | null = storedUser ? JSON.parse(storedUser) : null;

export const user: Writable<User | null> = writable(initialUser);

if (browser) {
    user.subscribe((value) => {
        if (value) {
            localStorage.setItem('user', JSON.stringify(value));
        } else {
            localStorage.removeItem('user');
        }
    });
}

export function getSession() {
    if(browser){
        return localStorage.getItem("user")
    }
    return null
}

// Auth functions
export function login(userData: User): void {
    document.cookie = "userId=" + userData.id;
    user.set(userData);
}

export function logout(): void {
    document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    user.set(null);
}
