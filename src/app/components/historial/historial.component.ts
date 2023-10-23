import { Component } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  images: any = [
    { id: 1, src: 'assets/images/historial/test-01.png', title: 'Imagen de Testeo' },
    { id: 2, src: 'assets/images/historial/test-01.png', title: 'Imagen de Testeo 02' },
    { id: 2, src: 'assets/images/historial/test-01.png', title: 'Imagen de Testeo 02' },
    { id: 2, src: 'assets/images/historial/test-01.png', title: 'Imagen de Testeo 02' },
    { id: 2, src: 'assets/images/historial/test-01.png', title: 'Imagen de Testeo 02' },
  ]
}
