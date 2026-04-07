import { Alert } from '../schemas/alert.schema';

export const ALERT_PUBLISHED = 'alert.published';

export interface AlertPublishedEvent { alert: Alert; }