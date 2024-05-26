import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kittens',
  standalone: true,
  imports: [],
  template: `
  <section>
    <p>
      Wanna see some cute kittens?
    </p>
    <button (click)="GetKitty()">Get Kitty</button>
    <button (click)="goTo('movies')">Go to Movies</button>
    @if (catImage) {
      <p>Kitty is here! 😻</p>
      <img [src]="catImage" />
      <p>Isn't cute? <br>I used to be a cat person<br>But I'm a cat now!</p>
      <p>I used this API to get a cute kitten: <a href="https://cataas.com/cat">https://cataas.com/cat</a></p>
      
    }
  </section>
  `,
  styles: `
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #282C34;
    border-radius: 20px;
    padding: 32px 30px;
    max-width: 720px;
    margin: 0px auto;
    gap: 8px;
  }
  img {
    width: 100%;
    max-width: 400px;
  }
  /* https://uiverse.io/satyamchaudharydev/loud-seahorse-55 */
  /* inspired form gumroad website */
  button {
    --bg: #343941;
    --hover-bg: #0288D1;
    --hover-text: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid var(--bg);
    border-radius: 4px;
    padding: 0.8em 2em;
    background: var(--bg);
    transition: 0.2s;
  }

  button:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
  }

  button:active {
    transform: translate(0);
    box-shadow: none;
  }
    `
})
export class KittensComponent {
  @Output() changeStatus = new EventEmitter<string>();
  catImage: string = '';

  goTo(whereTo: string){
    this.changeStatus.emit(whereTo)
  }

  GetKitty() {
    fetch('https://cataas.com/cat', {
      method: 'GET',
    })
    .then((response) => response.blob())
    .then((blob) => {
      this.catImage = URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
