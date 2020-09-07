export type User = {
    name: string;
    password: string;
}

export type AuthState = {
    isLoggedIn: boolean;
    user1: User;
};

export const state: AuthState = {
    isLoggedIn: false,
    user1: {
        name: 'John',
        password: 'Doe',
    },
};
