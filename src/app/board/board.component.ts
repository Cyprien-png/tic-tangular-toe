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

    constructor() { }

    ngOnInit() {
        this.newGame();
    }

    newGame() {
        this.squares = Array(9).fill(null);
        this.winner = null;
        this.xIsNext = true;
    }

    get player() {
        return this.xIsNext ? 'X' : 'O';
    }

    makeMove(idx: number) {
        if (!this.squares[idx]){
            this.squares.splice(idx, 1, this.player);
            this.xIsNext = !this.xIsNext;
        }
    }

    calculateWinner() {
        // 0 | 1 | 2
        // 3 | 4 | 5
        // 6 | 7 | 8
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        lines.forEach(line => {
            const [a, b, c] = line
            if (this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
                return this.squares[a];
            }
        })

        return null;
    }
}
