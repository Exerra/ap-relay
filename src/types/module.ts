export type ModuleProps = { 
    checkableStrings: string[],
    rawActivity: any
}
export type ModuleFunction = (props: ModuleProps) => Promise<{ reject: boolean }>