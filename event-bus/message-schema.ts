export interface MessageSchema<T> {
    eventType: string;
    payload: T;
    timestamp: number;
}

export interface CommonEventTypes {
    USER_CREATED: string;
    ORDER_PLACED: string;
    ITEM_SHIPPED: string;
}

export const EventTypes: CommonEventTypes = {
    USER_CREATED: 'USER_CREATED',
    ORDER_PLACED: 'ORDER_PLACED',
    ITEM_SHIPPED: 'ITEM_SHIPPED',
};
