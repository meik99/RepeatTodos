export class Todo {
  private _id: number;
  private _name: string;
  private _done: boolean;

  constructor(args?: {
    id?: number,
    name?: string,
    done?: boolean
  }) {
    if (args) {
      if(args.id) {
        this.id = args.id;
      }
      if (args.name) {
        this.name = args.name;
      }
      if (args.done) {
        this.done = args.done;
      }
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get done(): boolean {
    return this._done;
  }

  set done(value: boolean) {
    this._done = value;
  }
}
