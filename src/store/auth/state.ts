export type User = {
    name: string;
    password: string;
}

export type IState = {
    isLoggedIn: boolean;
    user1: User;
};

export const state: IState = {
    isLoggedIn: false,
    user1: {
        name: 'John',
        password: 'Doe',
    },
};
