import { LoaderFunction } from "react-router";

export type LoaderData = {
    data: string;
}

export const loader = async () => {
    return { data: "data hai" } as LoaderData;
}