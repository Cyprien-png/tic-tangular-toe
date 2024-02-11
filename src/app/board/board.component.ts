import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [],
    templateUrl: './board.component.html',
    styleUrl: './board.component.scss'
})
export class BoardComponent {
    squares: any[];
    xIsNext: boolean;
    winner: string | null;

    constructor() {}

    ngOnInit() {
        this.newGame();
    }

    newGame(){
        this.squares = Array(9).fill(null);
        this.winner = null;
        this.xIsNext = true;
    }
}
