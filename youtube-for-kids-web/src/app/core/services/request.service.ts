import { Injectable } from '@angular/core';
import { Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class RequestService {

    constructor() { }

    getJsonHeader = (headers?: Headers): Headers =>
        new Headers({ ...headers, 'Content-Type': 'application/json' });

    getParams<T>(obj: T, parent?: URLSearchParams): URLSearchParams {
        const params = parent || new URLSearchParams();
        Object.keys(obj || {}).forEach(key => params.append(key, `${obj[key]}`));
        return params;
    }

    getQueryObject<T>(obj?: T) {
        if (!obj || !Object.keys(obj).length) {
            return undefined;
        }

        const flatObject = this.flatObject({}, obj, '');
        return { query: JSON.stringify(flatObject) };
    }

    getTextPlainHeader = (headers?: Headers): Headers =>
        new Headers({ ...headers, 'Content-Type': 'text/plain' });

    private flatObject<T>(destination: {}, obj: T, parentName: string) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] !== 'object') {
                    destination[parentName + key] = obj[key];
                    continue;
                }
                this.flatObject(destination, obj[key], `${key}.`);
            }
        }
        return destination;
    }

}
