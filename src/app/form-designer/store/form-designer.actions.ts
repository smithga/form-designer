import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { type } from '../shared/util';

@Injectable()
export class FormDesignerActions {

    static LOGIN = type('[Auth] Login');
    login() {
        return {
            type: FormDesignerActions.LOGIN,
            payload: null
        };
    }

    static LOGIN_SUCCESS = type('[Auth] Login Success');
    loginSuccess(state: any) {
        return {
            type: FormDesignerActions.LOGIN_SUCCESS,
            payload: state
        };
    }

    static LOGIN_ERROR = type('[Auth] Login Error');
    loginError(error: string) {
        return {
            type: FormDesignerActions.LOGIN_ERROR,
            payload: error
        };
    }

}
