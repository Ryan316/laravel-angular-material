class RegisterFormController {
	constructor(API) {
		'ngInject';

		this.API = API;
		this.totalImages = [];
		this.images = [];
		this.start = 0;
		this.end = 0;
	}

    $onInit(){
        this.API.all('').get('mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY').then((response) => {
            this.totalImages = response.photos;
            this.start = 0;
			this.end = 5;
            for (var i = this.start; i <= this.end; i++) {    
            	this.images.push(this.totalImages[i])
            }
        });
    }

    loadMore() {
    	this.start += 5;	
		this.end += 5;
	    for(let i = this.start+1; i <= this.end; i++) {
	    	if (!!this.totalImages[i]) {
	      		this.images.push(this.totalImages[i]);
	    	}
	    }
 	};
}

export const RegisterFormComponent = {
	templateUrl: './views/app/components/register-form/register-form.component.html',
	controller: RegisterFormController,
	controllerAs: 'vm',
	bindings: {}
}
