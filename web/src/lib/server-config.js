import { headers } from 'next/headers';

const env = process.env;

export const getTemplateId = () => {
    return env.TEMPLATE_ID || env.APP_TEMPLATE_ID || env['NEXT_PUBLIC_TEMPLATE_ID'] || '001';
};

export const getRequestBaseUrl = () => {
    const headerList = headers();
    const proto = (headerList.get('x-forwarded-proto') || 'http').split(',')[0].trim();
    const host = (headerList.get('x-forwarded-host') || headerList.get('host') || '').split(',')[0].trim();

    if (host) {
        return `${proto}://${host}`;
    }

    return env.BASE_HOST_URL || '';
};
