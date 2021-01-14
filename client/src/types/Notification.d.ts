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
    message: string;
    type: NotificationType;
    size: NotificationSize;
    autoDismiss: boolean;
}

type NotificationState = {
    message: string;
    type: NotificationType;
    size: NotificationSize;
    autoDismiss: boolean;
};
