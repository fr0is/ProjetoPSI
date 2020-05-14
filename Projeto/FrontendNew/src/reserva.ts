export interface Reserva {
    _id: string;
    userEmail: string;
    quarto: string;
    metodoDePagamento: string;
    morada: string;
    checkIn: Date;
    checkOut: Date;
  }