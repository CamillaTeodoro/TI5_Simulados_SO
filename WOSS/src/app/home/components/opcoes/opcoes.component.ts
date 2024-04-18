import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss']
})
export class OpcoesComponent {
  constructor(public dialog: MatDialog) {}

  selectedCardIndex: number | null = null;
  quantumValue: number = 0;
  ioTimeValue: number = 0;
  overheadValue: number = 0;

  cards = [
    { image: 'assets/imagem_mock1.png', title: 'Round Robin', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { image: 'assets/imagem_mock2.png', title: 'FIFO', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { image: 'assets/imagem_mock3.png', title: 'Prioridade', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { image: 'assets/imagem_mock4.png', title: 'SJF', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  selectCard(index: number) {
    this.selectedCardIndex = index;
    console.log("selecionado: " + index)
  }

  openModal(event: MouseEvent, index: number) {
    event.stopPropagation(); 
    this.selectCard(index);
    this.dialog.open(ModalComponent);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 's';
    }

    return `${value}`;
  }

  saveSelection() {
    if (this.selectedCardIndex !== null) {
      const selectedCard = this.cards[this.selectedCardIndex];
      console.log('Card selecionado:', selectedCard.title);
      console.log('Valor do Quantum:', this.quantumValue);
      console.log('Tempo de I/O:', this.ioTimeValue);
      console.log('Overhead:', this.overheadValue);

    } else {
      console.log('Nenhum card foi selecionado');
    }
  }
}
