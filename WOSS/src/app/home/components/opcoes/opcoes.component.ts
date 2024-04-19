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
    { image: 'assets/imagem_mock.png', title: 'Round Robin', content: 'Cada processo recebe um pequeno intervalo de tempo (quantum) para ser executado na CPU.' },
    { image: 'assets/imagem_mock.png', title: 'FIFO', content: 'Os processos são executados na ordem em que foram colocados na fila.' },
    { image: 'assets/imagem_mock.png', title: 'Prioridade', content: 'A cada processo é atribuído uma prioridade. Processos com prioridades mais altas são executados antes dos processos com prioridades mais baixas.' },
    { image: 'assets/imagem_mock.png', title: 'SJF', content: 'O processo com o menor tempo de execução é executado primeiro.' }
  ];

  modalContent: { [key: string]: string } = {
    'Round Robin': 'É uma política de escalonamento de tempo compartilhado, onde cada processo recebe um pequeno intervalo de tempo (quantum) para ser executado na CPU. Quando o quantum acaba, o processo é colocado no final da fila e o próximo processo é executado. Essa política garante que todos os processos recebam um tempo justo de CPU e evita que um processo monopolize a CPU por muito tempo.',
    'FIFO': 'First In, First Out é uma política de escalonamento simples, onde os processos são executados na ordem em que foram colocados na fila. O primeiro processo a chegar na fila é o primeiro a ser executado na CPU. Essa política pode levar a problemas de inanição (starvation), onde um processo de baixa prioridade pode ficar preso na fila enquanto outros processos são executados.',
    'Prioridade': 'É uma política de escalonamento onde cada processo é atribuído uma prioridade. Processos com prioridades mais altas são executados antes dos processos com prioridades mais baixas. Essa política permite que processos críticos sejam executados rapidamente, mas pode levar a problemas de inanição se um processo de baixa prioridade nunca for executado',
    'SJF': 'Shortest Job First é uma política de escalonamento onde o processo com o menor tempo de execução é executado primeiro. Essa política minimiza o tempo médio de espera dos processos na fila, mas pode levar a problemas de inanição se houver sempre processos mais curtos chegando na fila. Pode ser com ou sem preempção.'
  };

  selectCard(index: number) {
    if (this.selectedCardIndex === null || this.selectedCardIndex === index) {
      this.selectedCardIndex = this.selectedCardIndex === index ? null : index;
    }
  } 

  openModal(event: MouseEvent, index: number) {
    event.stopPropagation(); 
    this.selectCard(index);
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: this.cards[index].title,
        content: this.modalContent[this.cards[index].title]
      }
    });
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return (value / 100000) + 's';
    }
    return `${value}`;
  }

  formatLabelQuantum(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 5000) + 's';
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
