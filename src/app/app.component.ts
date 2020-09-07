import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Pagina-Personal';

	constructor () {

	}

	ngOnInit(): void{
		$(".subir").click(function(e){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: 0
			}, 1500);

			return false;
		});
	}
}
