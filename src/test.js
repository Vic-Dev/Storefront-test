import { extractImage } from './utils';

export class MyComponent {

  init() {
    this.flux.on('results', this.updateItems);
    this.items = ['a', 'b', 'c'];
    this.currentImage = 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg';
  }

  updateItems({ records }) {
    this.update({
      items: records.map(({ id }) => id)
    });
  }

  alertUser(e) {
    const id = e.target.innerText;
    const found = this.flux.results.records.find((record) => record.id === id);
    if (found) {
      this.update({
        currentImage: extractImage(found.allMeta)
      });
    }
  }
}
