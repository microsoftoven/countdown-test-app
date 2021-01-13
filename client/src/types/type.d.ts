interface RootState {
    user: UserState,
    theme: ThemeState
}

type ActionTypes = { 
    type: string,
    payload: {},
    message?: string
};

