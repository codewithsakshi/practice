import React from "react";

export const ComposeProvider = (...providers) => {
    return ({children}) => {
        return providers.reduceRight((acc, Provider) => {
            return <Provider>{acc}</Provider>;
        }, children)
    }
}