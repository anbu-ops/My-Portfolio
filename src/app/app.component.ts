import { APP_BOOTSTRAP_LISTENER, Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailSetupService } from './email-setup.service';
import { Contact } from './contact';
import { Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
// import { SplitPipe } from './split.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMenuCollapsed = true;
  title = 'My-portfolio';
  FormData = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
    Subject: new FormControl(''),
    Details: new FormControl(''),
  });
  date = new Date('DD-MON-YYYY');
  skills: any = [
    {
      'id': '1',
      'skill': 'GIT/GITHUB/TFS',
      'progress': '80%'
    },
    {
      'id': '2',
      'skill': 'ANGULAR',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'HTML/CSS',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'JAVASCRIPT',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'SQL',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'API',
      'progress': '75%'
    },
    {
      'id': '7',
      'skill': 'PYTHON',
      'progress': '80%'
    },
    {
      'id': '8',
      'skill': 'R',
      'progress': '70%'
    },
  ];
  test: boolean = false;
  EmailValidator: boolean = false;
  document: any;
  currentDate!: string;

  contact_model:any = new Contact();
  submitted = false;
  error = {};
  browserWidth!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
  this.browserWidth = event.target.innerWidth;
  if(this.browserWidth<1000){
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarSupportedContent')
  
    navLinks.forEach((l) => {
      l.addEventListener('click', () => { console.log(l) })
  })
  }
  }

   constructor(private builder: FormBuilder,private contact: EmailSetupService,private router: Router,
    ){}
  
ngOnInit(){
  this.browserWidth = window.innerWidth;
  this.date = new Date();
    let day = this.date.getDate();
    let Month = this.date.getMonth()+1;
    let Year = this.date.getFullYear();
    this.currentDate = (day+'-'+Month+'-'+Year).toString();
}
payLoadCreation() {
  this.submitted = true;
  return this.contact.PostMessage(this.contact_model).subscribe(
  data => this.contact_model = data,
  error => this.error = error
    );
  }
  onSubmit(){
    this.payLoadCreation();
    if(this.submitted){
      window.open('https://mailthis.to/confirm','_blank')
    }
  }

pdfOpen(){
  window.open('../assets/Ankit_resume.pdf','_blank')
}
}

