import * as crypto from 'crypto';
import dayjs from 'dayjs';

export const initialName = (name: string | undefined) => {
    return name
        ?.split(' ')
        ?.map((word) => word.charAt(0)?.toUpperCase())
        .join('');
};

export function randomPassword(length: number) {
    const bytes = crypto.randomBytes(length);
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let result = '';

    for (let i = 0; i < length - 1; i++) {
        const randomIndex = bytes[i] % charactersLength;
        result += characters.charAt(randomIndex);
    }

    return `x${result}Z!`;
}

export function fromatRupiah(num: string | number): string {
    if (typeof num === 'string') {
        num = num.replace(/\./g, ''); // Menghapus semua titik (.)
    }
    return (
        Number(num)
            .toFixed(0)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',-'
    );
}

/**
 * @param tzDate - timezone date.
 * @param {string} [dateFormat='DD/MM/YY - HH:mm:ss']
 */
export const convertDateFormat = (tzDate: any, dateFormat?: string) => {
    if (!tzDate) return '-';
    const format = dateFormat || 'DD/MM/YY - HH:mm:ss';
    return dayjs(tzDate).format(format);
};

export const convertToFiles = (fileName: string | undefined): FileList => {
    const file = new File([], fileName || '');
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    return dataTransfer.files;
};

export const camelToSnake = (string: string): string => {
    return (string || '')
        .replace(/([A-Z])/g, (match, group) => `_${group.toLowerCase()}`)
        .replace(/^_/, '');
};

export const snakeToCamel = (str: string) => {
    return str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
    );
}

export const formatCamelToPascal = (text: string) => {
    if (!text) return;
    return text.replace(/^[a-z]|[A-Z]/g, (c, i) => (i ? ' ' : '') + c.toUpperCase());
};

export function getBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            let base64String = reader.result as string;
            const prefix = 'data:image/jpeg;base64';

            if (base64String.startsWith(prefix)) {
                base64String = base64String.split(prefix)[1];
            }

            resolve(base64String); // Remove data URL prefix
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}
