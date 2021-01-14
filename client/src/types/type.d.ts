interface RootState {
    user: UserState;
    theme: ThemeState;
    deadlineList: DeadlineListState;
    activeDeadline?: {};
    error?: true;
    loading?: false;
    notification?: NotificationState;
}

type ActionTypes = {
    type: string;
    payload: {};
    message?: string;
};
