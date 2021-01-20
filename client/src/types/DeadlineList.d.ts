interface IDeadlineList {
    deadlines?: IDeadline[];
    pending: boolean;
    success: boolean;
}

type DeadlineListState = {
    pending: boolean;
    success: boolean;
    deadlines: IDeadline[];
};
