import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
selector: 'my-app',
template: 'Hello World!',
providers: []
})
export class AppComponent {
constructor(private http: Http){
//http get example
this.http.get('/test')
.subscribe((res)=>{
console.log(res);
});
}
}
