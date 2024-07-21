import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ImageService } from '../image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.sass',
})
export class ImageComponent implements OnInit, OnDestroy {
  arrayStreamData: any[] = [];
  encodedImage: string;
  private subscription: Subscription = new Subscription();

  constructor(private imageService: ImageService) {}

  @Input() prompt = '';

  ngOnInit() {
    this.subscription.add(
      // this.imageService.getArrayStream(this.prompt).subscribe((data) => {
      //   this.arrayStreamData = data;
      //   this.encodedImage = `data:image/jpeg;base64,${data}`;
      // })
      this.imageService.getArrayStream(this.prompt).subscribe((base64Image) => {
        base64Image.subscribe((rawImage) => {
          this.encodedImage = rawImage; // Directly use the base64 string received from the service
        }); // Directly use the base64 string received from the service
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
