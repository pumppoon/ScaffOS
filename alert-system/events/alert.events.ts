import { SharedAlert } from '../schemas/shared.types';

export const ALERT_PUBLISHED = 'alert.published';

export interface AlertPublishedEvent { alert: SharedAlert; }