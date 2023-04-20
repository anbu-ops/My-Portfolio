import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailSetupService } from './email-setup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My-portfolio';
  FormData = new FormGroup({
    Name: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),
    Subject: new FormControl(''),
    Details: new FormControl(''),
  });
   constructor(private builder: FormBuilder,private contact: EmailSetupService){}
  ngOnInit(): void {
}
onSubmit() {
  console.warn(this.FormData.value);
  console.log(this.FormData.controls['Name'].value);
  this.contact.PostMessage(this.FormData.value).subscribe(
    (data)=>
  {
    window.location.href='https://mailthis.to/confirm'
    console.log(data)
  }
  )
  //   .subscribe((response: any) => {
  //     location.href = 'https://mailthis.to/confirm'
  //   }, (error: { responseText: any; }) => {
  //   console.warn(error.responseText)
  //   console.log({ error })
  // })
}

downloadMyResume(){
  
}
}

// const sendContact = (e) => {
//   e.preventDefault()
//       axios.post('https://mailthis.to/rogeriorioli', contact).then(response => {
//         window.location.href = 'https://mailthis.to/confirm'
//       }).catch(err => {
//         err = 'oh fuck '
//       })
// }

