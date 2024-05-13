export class Base {
  id!: number
  createTime!: string
  updateTime!: string
  status!: number
  delFlag!: number
  route!: string
}

export class User extends Base {
  username!: string
  password!: string
}

export class Menu extends Base {
  supId!: string
  name!: string
  icon!: string
  type!: number
}
export class MenuVo extends Menu {
  subMenu!: Menu[]
  subMenuShow?: any
}

export class Blog extends Base {
  author!: string
  source!: string
  countryId!: number
  title!: string
  text!: string
  hits!: number
  typeId!: number
}

export class BlogDto extends Blog {
  size: number
  current: number

  constructor(size: number, current: number) {
    super()
    this.size = size
    this.current = current
  }
}

export class Country extends Base {
  countryName!: string
}
