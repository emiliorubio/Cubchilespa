(async() => {
    const {value: responder}  = await Swal.fire({
	title:"¿Buscas un Presupuesto?",
	text: 'Contamos con los siguientes servicios',
	confirmButtonText: 'Seleccionar',
	footer: 'Todos nuestros trabajos cuentan con garantia 30 dias.',
	width: '40%',
	padding:'2rem',
	backdrop: true,
	allowOutsideClick: false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,

	input: 'select',
	inputPlaceholder: 'Selecciona una opcion',
	inputValue:'',
	inputOptions: {
        Tabiques: 'Tabiques y cielos',
        Electricidad: 'Electricidad',
		Gasfiteria:'Gasfiteria',
		Pintura:'Pintura',

    }
    });


if (responder === 'Tabiques') {
    Swal.fire({
        title: `Trabajamos con vulcometal, Madera, Fierro, de la mejor calidad del mercado `,
		icon:'info',
        timer: 5000,
	    timerProgressBar:true,
    }).then(function() {
		window.location = "/secciones/tabiquesyCielos.html";
	});
}
if (responder === 'Electricidad') {
    Swal.fire({
        title: `Todas nuestras instalaciones estan certificadas y bajo norma establecida por chile`,
		icon:'info',
        timer: 5000,
	    timerProgressBar:true,
    }).then(function() {
		window.location = "/secciones/electricidad.html";
	});
} 
if (responder === 'Gasfiteria') {
    swal.fire({
    title:`Trabajamos con pvc, dyd, cobre y hacemos conexiones de aguas como tambien de alcantarillado`,
	icon: 'info',
	timer: 5000,
	timerProgressBar:true,
	}).then(function() {
		window.location = "/secciones/gasfiteria.html";
	});
}
if (responder === 'Pintura') {
    swal.fire({
    title:`Trabajamos con la mejor pintura y tambien nos acogemos al presupuesto que tienes en mente`,
	icon: 'info',
	timer: 5000,
	timerProgressBar:true,
	}).then(function() {
		window.location = "/secciones/pintura.html";
	});
}


})() 