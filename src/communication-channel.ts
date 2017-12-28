import {Comlink} from 'comlinkjs';

export interface ICommLink {
    userService: IUserService;
    pageService: IPage;
}

export interface IUserService {
    setToken(token: string): Promise<string>;
    getToken(): Promise<string>;
}

export interface IPage {
    setProperties(properties: IPageProperties): Promise<any>;
    getProperties(): Promise<any>;
}

export interface IPageProperties {
    showHeader: boolean;
    showSidebar: boolean;
    redirectToDefault: boolean;
    authorized: boolean;
}

/**
 * Communication channel between the parent and the child
 */
export default class CommunicationChannel {
    private static _proxySvcs = {};

    private constructor() {
    }

    public static registerServices(services: ICommLink, window: Window) {
        Comlink.expose(services, window);
        this._proxySvcs = {...this._proxySvcs, ...services};
        Comlink.proxyValue(this._proxySvcs);
    }

    public static open(window: any): any {
        return Comlink.proxy(window);
    }
}