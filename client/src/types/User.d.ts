interface IUser {
    _id: string | null | undefined;
    googleID?: string;
    __v?: number;
}

type UserState = IUser;
