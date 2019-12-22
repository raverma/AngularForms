import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { HttpClient, HttpEventType} from '@angular/common/http';
import {ProductService} from '../shared/product.service';
//import {NgForm} from '@angular/forms';
//import { FileUploader, FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';


const apiURL = 'http://localhost:3000/api/products/';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedFile: File = null;
  //public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'productImage'});
  //constructor(private productService: ProductService, private http: HttpClient) { }
  constructor( private http: HttpClient) { }
  ngOnInit() {
    //this.resetForm();
    
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  // resetForm(form?: NgForm){
  //   if (form!=null)
  //     form.resetForm();
  //   this.productService.formData = {
  //     // productID: null,
  //     productName: '',
  //     price: 0,
  //     productSpecs: '',
  //     supplier: '',
  //     quoteDate: '',
  //     contactEmail: '',
  //     productImage: ''
  //   }
  // }

  // onSubmit(form: NgForm){
  //     this.productService.postProduct(form.value)
  //     .subscribe(data => {
  //       this.resetForm(form);
  //     });
  // }

  // insertRecord(form: NgForm){

  // }
  
  onSave(){
    const fdata = new FormData();
    fdata.append('productImage', this.selectedFile, this.selectedFile.name);
    this.http.post(apiURL, fdata, {
      reportProgress: true,
      observe: 'events'
    } )
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
        {
          console.log('Upload Progress :' + Math.round(event.loaded * 100/event.total) + '%' );
          //this.progress = Math.round(event.loaded * 100/event.total) + '%';
        }
        else if (event.type === HttpEventType.Response){
          console.log(event);
        }
        
      });
  }
  
  
}
