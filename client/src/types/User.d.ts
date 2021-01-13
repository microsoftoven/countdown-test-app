interface IUser {
    _id: string,
    googleID: string,
    __v: number
}

type UserState = {}

type UserAction = { 
    type: string,
    payload: {},
    message?: string
};
