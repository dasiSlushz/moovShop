import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, plugins ,LinearTickOptions} from 'chart.js';
import { Color } from 'ng2-charts';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent  {
  constructor() { }
  /*
  @ViewChild('canvas', { static: true })
 // canvas= new ElementRef<HTMLCanvasElement>();  

  lineChartData: ChartDataSets[] = [
    //Y
    { data:[{x: 10, y: 20},{x: 50, y: 60}, {x: 15, y: 20}, {x: 40, y: 50},{x: 20, y: 5},{x: 20, y: 5},{x: 20, y: 5},], label: 'Crude oil prices', fill: false,
  steppedLine:true}
  ];
  //X
  ChartoverrideslinespanGaps = true;
  lineChartLabels: number[] =  [0,10,20,30,40,50,60,70,80,90,100];
  lineChartOptions = {
   
    responsive: true,
      interaction: {
          intersect: false,
          axis: 'x'
        },
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(180,100,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins =[{plugins: {
          title: {
            display: true,
            text: (ctx) => 'Step ' + ctx.chart.data.datasets[0][0].stepped + ' Interpolation',
          }}}]   
  lineChartType = 'line';



  


  
  
  private ctx: CanvasRenderingContext2D;
x:number;
 y:number;
 width:number;
 height:number; 
  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.beginPath();
    this.ctx.moveTo(0, 1000);
    this.ctx.lineTo(100, 10);
    this.ctx.lineTo(20, 10);
    this.ctx.closePath();
    this.ctx.stroke();
  }
  //draw(g:list) {
    //this.ctx.fillRect(z * x, z * y, z, z);
  }
  */
}
