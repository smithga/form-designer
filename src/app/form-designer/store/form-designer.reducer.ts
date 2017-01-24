import { createSelector } from 'reselect';

import { FormDesignerActions } from './form-designer.actions';

export interface FormDesignerState {
    processing: boolean;
    processingError: string;
};

const initialState: FormDesignerState = {
    processing: false,
    processingError: null
};

// This function allows us to read certain properties from localStorage!
function getInitialState(): FormDesignerState {
    return initialState;
}

// This function allows us to save certain properties to localStorage!
function saveState(state: FormDesignerState): FormDesignerState {
    return state;
}

export function FormDesignerReducer(state, action): FormDesignerState {
    let newState: FormDesignerState;
    if (!state) {
        state = getInitialState();
    }
    switch (action.type) {
        case FormDesignerActions.LOGIN: {
            newState = Object.assign({}, state,
                {
                    authenticated: false,
                    errorMessage: null,
                    loading: true
                });
            break;
        }
        case FormDesignerActions.LOGIN_SUCCESS: {
            newState = Object.assign({}, state,
                {
                    authenticated: true,
                    token: action.payload.token,
                    username: action.payload.user.name,
                    user: action.payload.user,
                    loading: false,
                    errorMessage: null
                });
            break;
        }
        case FormDesignerActions.LOGIN_ERROR: {
            newState = Object.assign({}, state,
                {
                    authenticated: false,
                    errorMessage: action.payload,
                    loading: false
                });
            break;
        }

        default: {
            newState = state;
            break;
        }
    }
    return saveState(newState);
}

export class FormDesignerBaseActions {
    static getProcessing = (state: FormDesignerState) => state.processing;
    static getProcessingMessage = (state: FormDesignerState) => state.processingError;
}
