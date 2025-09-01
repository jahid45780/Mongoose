 export interface INotes{
     title:string,
    content:string,
    category:'personal'| 'work'|'study'|'coding'
    pinned:boolean,
    tags:{
        label:string,
        color:string
  }
}