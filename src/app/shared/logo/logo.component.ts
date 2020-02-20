import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-logo [id] [alt] [srcImage]',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit, AfterViewInit {


  @ViewChild('svgElement', {static: false})
  svgElement: ElementRef;

  @Input() width?: number;
  @Input() height?: number;
  @Input() saturation?: number;
  @Input() srcImage: string;
  @Input() alt: string;
  @Input() id: string;
  @Input() disabled: any;

  constructor(private render: Renderer2) {
    console.log('constructor');
  }

  /**
   *  Remember in ngOnInit input are ready
   */
  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.svgElement);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.srcImage);
    console.log(this.svgElement);
    this.setConfig(this.height, this.width, this.saturation);
  }

  setConfig(height: number, width: number, saturation: number) {
    if (height === undefined) {
      this.height = 100;
    }
    if (width === undefined) {
      this.width = 100;
    }
    if (saturation === undefined) {
      this.saturation = 0;
    }
    console.log('view filger');
    console.log(this.disabled);
    console.log(this.id);
    if (this.disabled === 'true') {
      console.log('try put class');

      // Bad practices
      //document.querySelector('#' + this.id).classList.add('svg-disabled');
      //this.svgElement.nativeElement.style.backgroundColor = '#5789D8';
      //this.render.addClass(this.svgElement.nativeElement, 'one');
      // Good practices
      //this.render.addClass(this.svgElement.nativeElement, 'svg-disabled');

    } else {
      //console.log('false jejje');
    }

  }


}
