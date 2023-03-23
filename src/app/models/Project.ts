export class Project {

  constructor(
    public _id: string,
    public title: string,
    public content: string,
    public video: string,
    public type: string,
    public url: string,
    public comments: string,
    public image: {
      secure_url:{
        type: string
      }
    },
    public date: any
  ) {
  }
}
