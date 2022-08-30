import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-01',
  styleUrl: 'component-01.css',
  shadow: true,
})
export class Component01 {

  render() {
    return (
      <Host>
        Component one
      </Host>
    );
  }

}
