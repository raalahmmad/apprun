import app, { Model, View, Update } from './index-zero';
import Router from './router';
import { h, updateElement } from './vdom-my';
import ComponentBase from './component';

export { Router };

export class Component extends ComponentBase {
  protected initVdom() {
    this.updateElement =  updateElement.bind(this);
    this.app.createElement = h;
  }
}

app.start = (element: HTMLElement, model: Model, view: View, update: Update, options?) =>
  new Component(element, model, view, update, options);

app.createElement = app.h = h;
export default app;
