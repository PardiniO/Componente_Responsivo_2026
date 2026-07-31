import { Component } from "@angular/core";

export type BookActionType = 'favorite' | 'read' | 'read-later' | 'save';

export interface BookAction {
    id: number;
    type: BookActionType;
    label: string;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    coverUrl: string;
    fileType: string;
    size: string;
    pages: number;
    actions: BookAction[];
}

@Component({
    selector: 'app-ejemplo',
    templateUrl: './ejemplo.component.html',
    styleUrls: ['./ejemplo.component.scss']
})

export class EjemploComponent {
    private buildActions(): BookAction[] {
        return [
            { id: 1, type: 'favorite', label: 'Agregar a favoritos' },
            { id: 2, type: 'read', label: 'Marcar como leído' },
            { id: 3, type: 'read-later', label: 'Leer más tarde' },
            { id: 4, type: 'save', label: 'Guardar' }
        ];
    }

    books: Book[] = [
        {
            id: 1,
            title: 'Harry Potter y la piedra filosofal',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 2,
            title: 'Juego de Tronos',
            author: 'George R.R.Martin',
            coverUrl: 'https://i.pinimg.com/1200x/2a/f3/dc/2af3dc94665e7a0465b4b614ab32026b.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 3,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 4,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 5,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 6,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 7,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 8,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 9,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 10,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 11,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 12,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 13,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 14,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        },
        {
            id: 15,
            title: 'Harry',
            author: 'J.K.Rowling',
            coverUrl: 'https://i.pinimg.com/control1/1200x/ba/04/e6/ba04e627219222aa722c7c47f1262675.jpg',
            fileType: 'PDF',
            size: '335 Kb',
            pages: 228,
            actions: this.buildActions()
        }
    ];
}