import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnDestroy {

  title!: String;
  textarea!: String;
  password!: String;
  display!: Boolean;
  respones!: any;
  dialogString: string = `sumbit not happened`;
  link!: String;
  header: string = '';

  private subscriptions = new Subscription();


  constructor(private httpService: HttpService, private router: Router) { }

  onSubmit() {
    this.subscriptions = this.httpService.sendSubmit({ title: this.title, body: this.textarea, password: this.password }).subscribe(data => {
      this.dialogString = `Hi Cambium, you paste is ready in: http://localhost:4200/copypaste/${data?.id}`;
      this.link = `/copypaste/${data?.id}`;
    })
    this.display = true;
  }

  afterSubmit() {
    this.router.navigate([this.link]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
