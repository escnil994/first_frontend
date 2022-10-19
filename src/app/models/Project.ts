export class Project {

  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public video: string,
    public type: string,
    public url: string,
    public comments: string,
    public image: string,
    public date: any
  ) {
  }
}
