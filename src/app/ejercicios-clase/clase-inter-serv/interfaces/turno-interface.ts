export interface TurnoInterface {
    id: number;
    fecha: string;
    hora: string;
    paciente: string;
    estado: 'pendiente' | 'confirmado' | 'cancelado';
}