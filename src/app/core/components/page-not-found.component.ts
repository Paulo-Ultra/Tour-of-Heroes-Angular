import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  //Há a possibilidade de usar um template tbm por aqui sem necessidade de arquivos HTML e SCSS
  //Não recomendado com templates muito grandes
  template: `
    <mat-card>
      <mat-card-title>404: Page Not Found</mat-card-title>
      <mat-card-content>
        We couldn't find that page! Not even with x-ray vision.
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">
          Take me Home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
    :host {
      text-align: center;
    }
    `
  ]
})
export class PageNotFoundComponent {

}
