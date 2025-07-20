import { useLoaderData } from "@remix-run/react";
import { LoaderData } from "./loader.server";

export function RouteComponent() {
    const {data} = useLoaderData() as LoaderData;
    return (
        <div>
            {data}
        </div>
    )
}