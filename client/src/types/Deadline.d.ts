interface IDeadline {
    _id?: string;
    timestamp?: string;
    title?: string;
    userID?: string;
    redirectOnSave?: string | null;
}

type DeadlineState = {
    success: boolean;
    pending: boolean;
    deadline: IDeadline;
    redirectOnSave?: string | null;
};
