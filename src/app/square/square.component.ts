import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-square',
    standalone: true,
    imports: [],
    templateUrl: './square.component.html',
    styleUrl: './square.component.scss'
})
export class SquareComponent {
    @Input() value: 'X' | 'O' | undefined;

    icon() {
        if (this.value) {
            return this.value === 'X' ? "assets/cross.svg" : "assets/circle.svg";
        }
        return null
    }
}
