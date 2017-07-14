export const ENV = process.env.NODE_ENV || 'develpment';
export const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || null;
export const basename = `/${process.env.PUBLIC_PATH || ''}`.replace('//', '/');
