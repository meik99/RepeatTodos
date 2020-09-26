export class Preset {
  private _id = 0;
  private _title = "";
  private _todos: string[] = [];

  constructor(args?: {
    id?: number,
    title?: string,
    todos?: string[]
  }) {
    if (args) {
      if (args.title) {
        this.title = args.title;
      }
      if (args.todos) {
        this.todos = args.todos;
      }
      if (args.id) {
        this.id = args.id;
      }
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get todos(): string[] {
    return this._todos;
  }

  set todos(value: string[]) {
    this._todos = value;
  }
}
