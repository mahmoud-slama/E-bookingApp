import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  constructor (private httpClient :HttpClient) {}

  selectedFile !:File ;
  retrievedImage: any;
  base64Data:any ;
  retrieveResonse :any;
  message!: string;
  imageName:any ;


  public onFileChanged(event:any){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){

  console.log(this.selectedFile);

  const uploadImageData = new FormData ();
  uploadImageData.append('imageFile',this.selectedFile,this.selectedFile.name)

  this.httpClient.post('http://localhost:8075/image/upload', uploadImageData, { observe: 'response' })
  .subscribe((response) => {
    if (response.status === 200) {
      this.message = 'Image uploaded successfully';
    } else {
      this.message = 'Image not uploaded successfully';
    }
  }
  );
  
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8075/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }


}
