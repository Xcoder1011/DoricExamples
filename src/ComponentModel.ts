
// export class ComponentModel {
//     name!: string;
//     desc!: string;
//     constructor(){}
// }

export interface CasesModel {
    title: string;
    desc: string;
    code: string
    ui: string;
}

export interface ComponentModel {
    title: string;
    subTitle: string
    desc: string;
    cases: CasesModel[]
}