
export * from "./types"

declare global {
    interface String {
        params(vars:Record<string,any> | any[] | Set<any> | Map<string,any>): string;
        params(...vars: any[]): string; 
        replaceAll(searchValue: string | RegExp, replaceValue: string): string;
    }
}

 