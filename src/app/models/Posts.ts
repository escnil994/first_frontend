export class Post {

  constructor(
    public _id: string,
    public title: string,
    public intro: string,
    public content: string,
    public more: string,
    public author: string,
    public image:{
      secure_url:{
        type: string,
        default: 'no image'
      } 
    },
    public date: any
  ) {
  }
}
