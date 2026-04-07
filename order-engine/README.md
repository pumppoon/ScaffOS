# Order Engine

## Overview
The Order Engine is a service responsible for managing orders in a trading system. It supports various types of orders, including limit, market, and stop orders.

## Setup Instructions
1. Clone the repository.
2. Navigate to the `order-engine` directory.
3. Install dependencies using `npm install`.
4. Create a `.env` file in the root directory with the following variables:
   - `PORT`: The port on which the service will run (default is 3000).
   - `DATABASE_URL`: The URL of the database.
5. Run the service in development mode using `npm run dev`.

## API Documentation
### Endpoints
- **POST /orders**: Creates a new order.
  - Request body should contain a JSON object representing the order, including `id`, `type`, `price`, and `quantity`.
- **DELETE /orders/:orderId**: Cancels an existing order.
  - Requires `orderId` as a URL parameter.

## Contributing
Feel free to submit issues or pull requests.