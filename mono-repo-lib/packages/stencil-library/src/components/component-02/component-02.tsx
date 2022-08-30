import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-02',
  styleUrl: 'component-02.css',
  shadow: true,
})
export class Component02 {

  render() {
    return (
      <Host>
        Component two
      </Host>
    );
  }

}
