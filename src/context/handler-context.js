import { createContext } from "react";

export const HandlerContext = createContext({
    addInexListHandler: (newInexData) => {},
    deleteHandler: (id) => {},
    editHandler: (id, inex) => {}
});