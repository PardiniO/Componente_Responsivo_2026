import { Component } from "@angular/core";

export interface Book {
    id: number;
    title: string;
    author: string;
    coverUrl: string;
}

@Component({
    selector: 'app-ejemplo',
    templateUrl: './ejemplo.component.html',
    styleUrls: ['./ejemplo.component.scss']
})

export class EjemploComponent {
    books: Book[] = [
        {
            id: 1,
            title: 'Harry Potter y la piedra filosofal',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 2,
            title: 'Juego de Tronos',
            author: 'George R.R.Martin',
            coverUrl: 'https://i.pinimg.com/1200x/2a/f3/dc/2af3dc94665e7a0465b4b614ab32026b.jpg'
        },
        {
            id: 3,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 4,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 5,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 6,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 7,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 8,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 9,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 10,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 11,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 12,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 13,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 14,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        },
        {
            id: 15,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg'
        }
    ];
}