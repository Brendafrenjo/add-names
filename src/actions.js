export const ADD_NAME = "ADD_NAME";
export const DELETE_NAME = "DELETE_NAME";

export default function addName(text) {
  return {
    type: "ADD_NAME",
    payload: text,
  };
}

export function deleteName(text) {
  return {
    type: "DELETE_NAME",
    payload: text,
  };
}
