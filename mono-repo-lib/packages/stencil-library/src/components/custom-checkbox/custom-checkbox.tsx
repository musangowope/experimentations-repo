import {Component, Host, h, State} from '@stencil/core';

@Component({
  tag: 'custom-checkbox',
  styleUrl: 'custom-checkbox.css',
  shadow: true,
})
export class CustomCheckbox {
  @State() checked: boolean = false

  render() {
    return (
      <Host>
        <label htmlFor="custom-checkbox">{this.checked ? 'checked' : 'unchecked'}</label>
        <input
          type="checkbox"
          id="custom-checkbox"
          name="custom-checkbox"
          onChange={() => this.checked = !this.checked}
        />
      </Host>
    );
  }

}
