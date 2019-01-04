import { CHANGE_INPUT_VALUE, ADD_VALUE, DEL_VALUE } from './actionTypes';

export const getChangeInputValue = (input) => ({
    type: CHANGE_INPUT_VALUE,
    input
})

export const getAddValue = () => ({
    type: ADD_VALUE,
})

export const getDelValue = (index) => ({
    type:DEL_VALUE,
    index
})