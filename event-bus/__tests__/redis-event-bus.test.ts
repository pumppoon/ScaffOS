it('should return subscribers for an event', async () => {
    const event = 'test-event';
    const listener1 = jest.fn();
    const listener2 = jest.fn();

    await eventBus.subscribe(event, listener1);
    await eventBus.subscribe(event, listener2);

    const subscribers = await eventBus.getSubscribers(event);
    expect(subscribers).toContain(listener1);
    expect(subscribers).toContain(listener2);
});