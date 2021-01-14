enum NotificationType {
    Success,
    Error,
    Info,
}

enum NotificationSize {
    Large,
    Small,
}

interface INotification {
    active: boolean;
    message: string;
    type: NotificationType;
    size: NotificationSize;
    autoDismiss: boolean;
}

type NotificationState = {
    active: false;
    message: string;
    type: NotificationType;
    size: NotificationSize;
    autoDismiss: boolean;
};
