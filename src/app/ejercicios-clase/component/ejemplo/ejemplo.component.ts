import { Component, Input } from "@angular/core";

export type BookActionType = 'favorite' | 'read' | 'read-later' | 'save';

export interface BookAction {
    type: BookActionType;
    label: string;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    coverUrl: string;
    pages: number;
}

@Component({
    selector: 'app-ejemplo',
    templateUrl: './ejemplo.component.html',
    styleUrls: ['./ejemplo.component.scss']
})

export class EjemploComponent {
    nombre: string = "Libro";

    mostrar_nombre: boolean = false;

    mostrarNombre() {
        this.mostrar_nombre = !this.mostrar_nombre;
    };

    bookActions: BookAction[] = [
        { type: 'favorite', label: 'Agregar a favoritos' },
        { type: 'read', label: 'Marcar como leído' },
        { type: 'read-later', label: 'Leer más tarde' },
        { type: 'save', label: 'Guardar' }
    ];

    books: Book[] = [
        {
            id: 1,
            title: 'Harry Potter y la piedra filosofal',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 2,
            title: 'Juego de Tronos',
            author: 'George R.R.Martin',
            coverUrl: 'https://i.pinimg.com/1200x/2a/f3/dc/2af3dc94665e7a0465b4b614ab32026b.jpg',
            pages: 228
        },
        {
            id: 3,
            title: 'Harry Potter y la piedra filosofal',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 4,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 5,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 6,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 7,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 8,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 9,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 10,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 11,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 12,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 13,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 14,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        },
        {
            id: 15,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            pages: 228
        }
    ];
}