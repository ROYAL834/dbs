import { Component, OnInit, EventEmitter,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Account } from 'src/model/account.model';
import { AccountService } from '../../services/auth/account.service';
import { LoginService } from '../../services/login/login.service';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http'; 
//import { FileChooser } from '@ionic-native/file-chooser';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import {map, zipAll} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ɵNgSelectMultipleOption } from '@angular/forms';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { MultiFileUploadPage } from '../../multi-file-upload/multi-file-upload.page';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import * as JSZip from 'jszip';
import * as pdfjsLib from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

// import { Kafka }from 'node-rdkafka';m

// var uuid:  '1a216b35-b573-4fa8-9870-e076155a8444';
let zip : any;
var URL = 'http://192.168.0.130:3000/task/1a216b35-b573-4fa8-9870-e076155a8444/download/all.zip';
// console.log(URL)
// var el= document.getElementById('a'); 
// // el.href += uuid



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public progress = 0;
  Output;



  uuid;
  @ViewChild(MultiFileUploadPage) fileField: MultiFileUploadPage;
  account: Account;
  private downloadedFile;
  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  constructor(private file: File, private http: HTTP, public navController: NavController,private dataUtils: JhiDataUtils,public httpClient: HttpClient, private accountService: AccountService, private loginService: LoginService) 
  {    pdfjsLib.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js';}

  ngOnInit() {
    this.accountService.identity().then(account => {
      if (account === null) {
        this.goBackToHomePage();
      } else {
        this.account = account;
      }
    });
   

  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
    this.goBackToHomePage();
  }

  private goBackToHomePage(): void {
    this.navController.navigateBack('');
  }
  
  upload2() {
    let files = this.fileField.getFiles();
    console.log(files);

    let formData = new FormData();
    // formData.append('somekey', 'some value'); // Add any other data you want to send

    files.forEach((file) => {
      formData.append('images', file.rawFile);
    });
    console.log(formData)

   

    this.httpClient.post("http://192.168.0.130:3000/task/new",formData)
      .subscribe(data => {
        console.log(data);
        // console.log(data[UUID]);
        this.uuid= data['uuid']
        console.log(this.uuid)
        URL = 'http://192.168.0.130:3000/task/'+this.uuid+'/download/all.zip'
        this.getdetails()
        console.log(URL)
       }, error => {
        console.log(error);
      });
      // this.getdetails();
  }

  getdetails() {

   setInterval(() =>{
    this.httpClient.get("http://192.168.0.130:3000/task/"+this.uuid+"/info")
    .subscribe(data => {
      console.log(data);
      let info = data['progress']
      this.progress= (info/100)
      console.log(this.progress)
     }, error => {
      console.log(error);
    });

   }, 3000)
    
  }

  taskoutput() {
    this.httpClient.get("http://192.168.0.130:3000/task/"+this.uuid+"/output")
      .subscribe(data => {
        console.log(data);
        this.Output=data.toString()
       }, error => {
        console.log(error);
      });
  }

  
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', URL);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

downloadAndExtractZIP() {
  // Make a request to initiate the ZIP download
  this.httpClient.get(URL, { responseType: 'blob' }).subscribe(
    (zipBlob: Blob) => {
      // Create a Blob URL for the downloaded ZIP file
      const blobUrl = window.URL.createObjectURL(zipBlob);

      // Create a hidden link to trigger the download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'downloaded.zip';

      // Trigger the download link
      link.click();

      // Clean up the Blob URL
      window.URL.revokeObjectURL(blobUrl);

      // Extract the ZIP file automatically
      this.extractZIPFile(zipBlob, "odm_report/report.pdf");
    },
    (error) => {
      console.error('Error downloading ZIP file:', error);
    }
  );
}

// Function to extract ZIP file on the client-side
async extractZIPFile(zipBlob: Blob, fileNameToDownload: string) {
  // Use a JavaScript library like   JSZip for client-side ZIP extraction
  // Example using JSZip (you need to install it first: npm install jszip)


  const zip = new JSZip();

  const loadedZip = await zip.loadAsync(zipBlob);

  const pdfContent: { textContent: string, imageAssets: any[] } = {
    textContent: '',
    imageAssets: [],
  };

  // Check if the specified file exists in the ZIP archive
  if (loadedZip.files[fileNameToDownload]) {
    // Get the file content as a Blob
    const pdfFile = await loadedZip.file(fileNameToDownload)
    // .async('blob');

    const pdfData = await pdfFile.async('arraybuffer');
      const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

    const pageTextArray: string[] = [];
    const pageImageAssets: any[] = [];

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const pageTextContent = await page.getTextContent();

      const pageText = pageTextContent.items.map(item => {
        if ('str' in item) {
          return item.str;
        } else if ('text' in item) {
          return (item as { text: string }).text;
        }
        return '';
      }).join(' ');

      pageTextArray.push(pageText);

      // Extract images from the page
      const viewport = page.getViewport({ scale: 1.0 });
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = { 
              canvasContext: ctx,
              viewport: viewport,
            };
            // @ts-ignore
            const context = ctx as CanvasRenderingContext2D;

            await page.render(renderContext).promise;
            const imageData = canvas.toDataURL('image/jpeg'); // Change format as needed

            pageImageAssets.push(imageData);
    }

    pdfContent.textContent += pageTextArray.join('\n');
    pdfContent.imageAssets.push(...pageImageAssets);
    // Create a Blob URL for the file content
    // const blobUrl = window.URL.createObjectURL(fileContent);

    // // Create a hidden link to trigger the download
    // const link = document.createElement('a');
    // link.href = blobUrl;
    // link.download = fileNameToDownload;

    // // Trigger the download link
    // link.click();

    // // Clean up the Blob URL
    // window.URL.revokeObjectURL(blobUrl);
  } else {
    console.error(`File '${fileNameToDownload}' not found in the ZIP archive.`);
  }
} catch (error) {
  console.error('Error downloading file from ZIP:', error);
}


// Function to initiate ZIP extraction on the server (custom logic)
initiateExtraction() {
  // Send a request to the server to start ZIP extraction
  // You should implement this logic on the server-side
  // Example: this.httpClient.post('server-endpoint-for-extraction', { uuid: this.uuid }).subscribe(...);
}

}

