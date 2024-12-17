import { ModuleFunction } from "../src/types/module"

export const name = "Demo Module"
export const version = "0.0.1"

export const run: ModuleFunction = (props) => {
    const { checkableStrings } = props

    for (let string of checkableStrings) {
        if (string.includes("rejectable string")) return { reject: true }
    }

    return { reject: false }
}