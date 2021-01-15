export enum NotificationType {
    Success,
    Error,
    Info,
}

export enum NotificationSize {
    Large,
    Small,
}

export const NOTIFICATION_FETCH_USER_ERROR: INotification = {
    active: true,
    message:
        'Unable to load your information. Please refresh the page and log in again.',
    type: NotificationType.Error,
    size: NotificationSize.Large,
    autoDismiss: false,
};

export const NOTIFICATION_FETCH_DEADLINE_ERROR: INotification = {
    active: true,
    message:
        'Error loading notification. Please refresh the page and try again.',
    type: NotificationType.Error,
    size: NotificationSize.Small,
    autoDismiss: false,
};

export const NOTIFICATION_ADD_DEADLINE_SUCCESS: INotification = {
    active: true,
    message: 'Deadline added!',
    type: NotificationType.Success,
    size: NotificationSize.Small,
    autoDismiss: true,
};

export const NOTIFICATION_ADD_DEADLINE_ERROR: INotification = {
    active: true,
    message: "Couldn't add deadline. Please try again.",
    type: NotificationType.Error,
    size: NotificationSize.Small,
    autoDismiss: false,
};

export const NOTIFICATION_UPDATE_DEADLINE_SUCCESS: INotification = {
    active: true,
    message: 'Deadline updated!',
    type: NotificationType.Success,
    size: NotificationSize.Small,
    autoDismiss: true,
};

export const NOTIFICATION_UPDATE_DEADLINE_ERROR: INotification = {
    active: true,
    message: "Couldn't update deadline. Please try again.",
    type: NotificationType.Error,
    size: NotificationSize.Small,
    autoDismiss: false,
};

export const NOTIFICATION_DELETE_DEADLINE_ERROR: INotification = {
    active: true,
    message: "Couldn't delete deadline. Please try again.",
    type: NotificationType.Error,
    size: NotificationSize.Small,
    autoDismiss: false,
};

export const NOTIFICATION_FETCH_DEADLINE_LIST_ERROR: INotification = {
    active: true,
    message: 'Error loading the list. Please refresh the page and try again.',
    type: NotificationType.Error,
    size: NotificationSize.Large,
    autoDismiss: false,
};
