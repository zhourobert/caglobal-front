export class Base {
    id!: number;
    createTime!: string;
    updateTime!: string;
    status!: number;
    delFlag!: number;



}

export class User extends Base {
    username!: string;
    password!: string;
}


export class Menu extends Base{
    supId!:string;
    name!:string;
    icon!:string;
    type!:number;
}
export class MenuVo extends Menu{
    subMenu!:Menu[];
    subMenuShow?:any;



}

