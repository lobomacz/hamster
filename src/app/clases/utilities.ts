export class Utilities {

	static DateFormat(dateString:string):string{
		let date = dateString.slice(0, 10);
		return date;
	}

	static CalculaEdad(fechaNac:string):number{
	    let hoy = new Date();
	    let nac = new Date(fechaNac);
	    let millisDiff = hoy.getTime() - nac.getTime();
	    let mes = hoy.getMonth();
	    let dia = hoy.getDay();
	    let edad = (millisDiff/86400000)/365;
	    if (mes < nac.getMonth()) {
	      edad--;
	    } else if (mes == nac.getMonth()) {
	      if (dia < nac.getDay()) {
	        edad--;
	      }
	    }

	    return edad;
	}

	static BadgeColor(count:number):string{
    
	    let color:string;

	    if(count < 50){
	      color = 'medium';
	    } else if (count >= 50 && count < 100){
	      color = 'primary';
	    } else if (count >= 100 && count < 300) {
	      color = 'warning';
	    } else {
	      color = 'danger';
	    }

	    return color;
	}

	static FullName(names:string[]):string{
		let fullname = '';

		names.forEach((name) => {
			if (name) {
				fullname = fullname.concat(' ', name);
			}
		});

		return fullname;		
	}

	static CheckExpiration(expiracion:Date){

    let hoy = new Date();

    if(expiracion < hoy){
      return false;
    } else {
      return true;
    }

  }
	
}
