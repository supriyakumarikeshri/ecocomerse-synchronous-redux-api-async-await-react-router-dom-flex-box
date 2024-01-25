import { ActionTypes } from "../constants/action-types";

const initialStates = {
    prodcuts: []//{ title: "fff" }
};

export const productReducer = (state = initialStates, { type, payload }) => {
    //console.log("type", type)
    // console.log(ActionTypes.SET_PRODUCTS)
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            // console.log("type", type)
            // console.log(payload)
            return { ...state, prodcuts: payload };
        default:
            // console.log("default")
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    console.log("selectedProductReducer")
    console.log(type)
    switch (type) {

        case ActionTypes.SELECTED_PRODUCT:
            console.log("selectedProductReducer", type)
            //  console.log(...payload)
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}