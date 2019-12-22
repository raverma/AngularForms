import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { HttpClient, HttpEventType} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Product} from './product.model';
import { FileUploader, FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';



@Injectable()
export class ProductService {
 
  uploader: FileUploader;
  selectedFile: File;
  formData: Product;
  constructor(private http: Http) { }

  // postProduct(product: Product, fileUploader: FileUploader){
  postProduct(formData: Product){
    
    // this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // console.log('ImageUpload:uploaded:', item, status, response);
       // alert('File uploaded successfully');
    // };
    // var body = JSON.stringify(product);
   
    
    var headerOptions = new Headers({'Content-Type': 'application/json',
                                    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzQzNWY4Y2VlNzAzZjY4MmU1YTExOTYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU1MDczMzMxfQ.XHFeYyz2qm1PSGNwUlNR5n_p-wMz7z-1bL7XwwLU-tA'
                                    });
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:3000/api/products',formData, requestOptions).map(x => x.json());
  }
}
