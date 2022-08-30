import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-03',
  styleUrl: 'component-03.css',
  shadow: true,
})
export class Component03 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
