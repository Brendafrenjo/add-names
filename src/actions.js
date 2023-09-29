export const ADD_NAME = "ADD_NAME";

export default function addName(text) {
    return {
        type: "ADD_NAME",
        payload: text,
    };
}