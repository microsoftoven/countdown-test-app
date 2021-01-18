interface RootState {
    user: UserState;
    theme: ThemeState;
    deadlineList: DeadlineListState;
    activeDeadline?: DeadlineState;
    error?: true;
    loading?: false;
    notification?: NotificationState;
    modalState: ModalState;
}

type ActionTypes = {
    type: string;
    payload: {};
    message?: string;
};
