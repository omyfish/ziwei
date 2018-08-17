import { Palace } from './../data/palace-pos';
import { Component, OnInit, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvasRef: ElementRef;
  private canvas: any;
  size = 500;
  color = 'orange';
  charNumber = 1;
  palace = new Palace();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('SmileyDirective ngAfterViewInit: size: ', this.size, ', color: ', this.color, ', this.canvas: ', this.canvas);
    this.canvas = this.canvasRef.nativeElement;
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    console.log(this.canvas.offsetHeight);
    console.log(this.canvas.offsetWidth);
    this.draw();
}

  addNumber() {
    if (this.charNumber === 12) {
      this.charNumber = 0;
    }
    this.charNumber++;
    this.draw();
  }
  draw() {
    if (this.canvas.getContext) {
        const canvas = this.canvas;
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'pink';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();

            const pointers = this.palace.getFourPointerTriangle(this.charNumber);

           ctx.moveTo(this.getColumn(pointers[0].x),  this.getRow(pointers[0].y));
           pointers.forEach(pos => {
            ctx.lineTo(this.getColumn(pos.x), this.getRow(pos.y));
           });

           const gradient = ctx.createLinearGradient(0, 0, 170, 0);
            gradient.addColorStop('0', 'magenta');
            gradient.addColorStop('0.5', 'blue');
            gradient.addColorStop('1.0', 'red');
            ctx.strokeStyle = gradient;

            ctx.stroke();
        }
    }
  }

  getColumn(currentCol: number) {
    const totalWidth = this.canvas.width;
    let widthPerBox = totalWidth / 4;
    switch (currentCol) {
      case 1:
        widthPerBox = 0;
        break;
      case 2:
      case 3:
        widthPerBox = widthPerBox / 2;
        break;
    }
    return (totalWidth / 4 * currentCol) - widthPerBox;
  }

  getRow(currentRow: number) {
    const totalHeight = this.canvas.height - 50;
    let heightPerBox = totalHeight / 4;
    switch (currentRow) {
      case 1:
      heightPerBox = 0;
        break;
      case 2:
      case 3:
      heightPerBox = heightPerBox / 2;
        break;
    }
    return (totalHeight / 4 * currentRow) - heightPerBox;
  }
}
