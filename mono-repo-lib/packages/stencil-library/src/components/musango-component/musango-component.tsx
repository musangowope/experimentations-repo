import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'musango-component',
  styleUrl: 'musango-component.css',
  shadow: true,
})
export class MusangoComponent {

  render() {
    return (
      <Host>
        <div>The Musango Component</div>
      </Host>
    );
  }

}
