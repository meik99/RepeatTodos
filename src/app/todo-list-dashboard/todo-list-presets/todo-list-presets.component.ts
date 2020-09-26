import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Preset} from "../../../entity/Preset";
import {TodoListService} from "../../service/todo-list.service";

@Component({
  selector: 'app-todo-list-presets',
  templateUrl: './todo-list-presets.component.html',
  styleUrls: ['./todo-list-presets.component.css']
})
export class TodoListPresetsComponent implements OnInit {
  private _presets: Preset[] = [];

  @Input()
  presetsChange: EventEmitter<Preset[]> = null;

  @Output()
  loadPresetEvent = new EventEmitter<void>();

  displayedPresets: Preset[] = [];
  startIndex = 0;
  num = 5;
  hasNext = false;
  hasPrevious = false;

  constructor(
    private _todoListService: TodoListService
  ) {
  }

  ngOnInit(): void {
    if (this.presetsChange != null) {
      this.presetsChange.subscribe(presets => {
        this.presets = presets;
        this.updateDisplayedPresets();
      })
    }
  }

  next() {
    this.startIndex += this.num;
    this.updateDisplayedPresets();
  }

  previous() {
    this.startIndex -= this.num;
    if(this.startIndex < 0) {
      this.startIndex = 0;
    }
    this.updateDisplayedPresets();
  }

  updateDisplayedPresets() {
    this.hasNext = this.presets.length > this.startIndex + this.num;
    this.hasPrevious = this.startIndex > 0;
    this.displayedPresets = this.presets.slice(this.startIndex, this.startIndex + this.num);
  }

  get presets(): Preset[] {
    return this._presets;
  }

  set presets(value: Preset[]) {
    this._presets = value;
  }

  deletePreset(id: number) {
    this._todoListService.deletePresets(id);
    this.presets = this._todoListService.presets;
    this.updateDisplayedPresets();
  }

  loadPreset(id: number) {
    this._todoListService.loadPreset(id);
    this.loadPresetEvent.emit();
  }
}
