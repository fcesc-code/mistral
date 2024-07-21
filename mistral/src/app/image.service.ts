import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  ENDPOINT = 'http://localhost:3000/api/img';
  constructor(private http: HttpClient) {}

  // getArrayStream(prompt: string): Observable<any[]> {
  //   return this.http.post<any[]>(this.ENDPOINT, {
  //     prompt: prompt,
  //   });
  // }
  getArrayStream(prompt: string): Observable<Observable<string>> {
    return this.http
      .get(this.ENDPOINT, { responseType: 'blob' })
      .pipe(map((blob) => this.blobToBase64(blob)));
  }

  private blobToBase64(blob: Blob): Observable<string> {
    return new Observable<string>((observer) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        observer.next(reader.result as string);
        observer.complete();
      };
      reader.onerror = (error) => {
        observer.error(error);
      };
    });
  }
}
