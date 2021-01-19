interface IDeadline {
    _id?: string;
    timestamp?: string;
    title?: string;
    userID?: string;
}

type DeadlineState = {
    success: boolean;
    pending: boolean;
    deadline: IDeadline;
};
