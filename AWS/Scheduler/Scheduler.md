1.What are the tasks we can do with scheduler ?
- Database & System Maintenance
    - Cleanup: Deleting expired session tokens, old logs, or "soft-deleted" records.
    - Backups: Automatically triggering a database dump or file system backup (e.g., daily at 2:00 AM).
    - Log Rotation: Compressing or moving log files to long-term storage (like AWS S3) to save local disk space.

- Communication & Notifications
    - Reminder Emails: Sending "You have items in your cart" or "Your subscription expires in 3 days."
    - Drip Campaigns: Automatically sending a series of welcome emails over the first week a user signs up.
- Data Sync & External Integrations
    - Report Generation: Gathering metrics for the last 24 hours and emailing a PDF report to the admin team
- Application Business Logic
    - Subscription Billing: Checking which users are due for their monthly charge.


*For E-commerce project*
- Serverless lamda
    - Shopping Cart Recovery: Schedule a one-time event (e.g., 2 hours after a "Cart Created" event) to check if the cart is still active and send a "You forgot something!" email via AWS SES.
    - Flash Sale Automation: Set a cron expression to update product prices and availability the second a sale starts and ends.
    - Inventory Alerts: A daily check at 8:00 AM to scan your database (DynamoDB/RDS) for low-stock items and send a summary report to the warehouse team.
    - Order Status Transitions: Automatically move orders from "Shipped" to "Delivered" after a certain duration if your shipping provider doesn't support real-time webhooks.



## Error Handling: Always wrap your scheduled code in try/catch. If a cron job crashes and isn't handled, it might stop the entire scheduler or leave your data in a half-finished state.

## Avoid Overlap: If a task runs every 1 minute but takes 2 minutes to finish, you'll eventually crash your server. Use Locking (available in libraries like Agenda or BullMQ) to ensure only one instance of a task runs at a time.

## Timezones: Always schedule in UTC. If you schedule for "9:00 AM" based on your local time, Daylight Savings could cause your task to run an hour early or late twice a year.

## Flexible Time Windows: For tasks that aren't time-critical (like cleaning up old logs), use a Flexible Time Window in the Scheduler. This allows AWS to spread the load, making your system more reliable.

## Idempotency: Since EventBridge offers at-least-once delivery, your Lambda might run twice for the same event. Always check if a task (like charging a credit card) has already been done before doing it again.

## Dead Letter Queues (DLQ): Always attach an Amazon SQS queue as a DLQ. If a scheduled task fails (e.g., your database is down), the event is saved so you can investigate and re-run it later.

Features of event bridge
1.Content Based filtering.
2.Event archives and playbacks.
3.Schema registry
4.DLQ can be configured per target.
5.Retry policy upto 24 hours.
6.In each DLQ we can set how many times it can retry.
7.Iam role based permission policy like events.PutEvents.

Q.How to setup scheduler for lamda trigger?
Q.How much imp services scheduler can trigger?
Q.Why we should use DLQ?
Q.How DLQ will hold it if scheduler fails?
Q.how to setup idmpotency to avoid same event?
Q.How to add retry mechanism if scheduler fails?
Q.How can we run scheduler automatically or manually once its failed?
Q.What are the drawback of using scheduler?

1.We can write 300 rules per events bus?
2.The each rule can be connect to 5 target like lamda, SQS, Step functions