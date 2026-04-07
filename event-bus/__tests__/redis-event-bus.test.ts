import { RedisEventBus } from '../redis-event-bus';
import { RedisClient } from 'redis';

describe('RedisEventBus', () => {
    let redisClientMock: RedisClient;
    let eventBus: RedisEventBus;

    beforeEach(() => {
        redisClientMock = { publish: jest.fn(), subscribe: jest.fn(), on: jest.fn() } as any;
        eventBus = new RedisEventBus(redisClientMock);
    });

    it('should publish events correctly', async () => {
        const event = 'test-event';
        const data = { key: 'value' };

        await eventBus.publish(event, data);

        expect(redisClientMock.publish).toHaveBeenCalledWith(event, JSON.stringify(data), expect.any(Function));
    });

    it('should subscribe to events and invoke listener', async () => {
        const event = 'test-event';
        const listener = jest.fn();

        await eventBus.subscribe(event, listener);

        expect(redisClientMock.subscribe).toHaveBeenCalledWith(event);

        const message = JSON.stringify({ key: 'value' });
        redisClientMock.on.mock.calls[0][1](event, message);

        expect(listener).toHaveBeenCalledWith({ key: 'value' });
    });
});