import { QuartoInstance } from './quartoInstance';
import { CartaoMB } from './cartaoMB';
import { Morada } from './morada';

export interface Reserva {
    _id: string;
    userEmail: string;
    emailReserva: string;
    quarto: QuartoInstance;
    metodoDePagamento: CartaoMB;
    morada: Morada;
    checkIn: Date;
    checkOut: Date;
    preco: Number;
  }