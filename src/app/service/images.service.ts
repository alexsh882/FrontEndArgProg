import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url: string = '';

  constructor(private storage: Storage) { }

  uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `image/` + name);

    uploadBytes(imgRef, file).then(
      resp => { this.getImage() }
    ).catch(
      error => { console.log(error.message); }
    );

  }

  getImage() {
    const imgURL = ref(this.storage, 'image/');
    list(imgURL)
      .then(async resp => {
        for (let item of resp.items) {
          this.url = await getDownloadURL(item);
          console.log("la url es: " + this.url);
        }
      })
      .catch(
        error => { console.log(error.message); }
      );
  }
}
