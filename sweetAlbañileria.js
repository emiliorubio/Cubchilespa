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
	inputPlaceholder: 'Albañileria',
	inputValue:'',
	inputOptions: {
        Hormigon: 'Hormigon',
        Muros: 'Muros',
		Columnas:'Columnas'
    }
    });


if (responder === 'Hormigon') {
    Swal.fire({
        title: `Trabajamos con los mejores aridos del mercado y con un secado muy rapido y con mayor duracion`,
		icon:'info',
        timer: 5000,
	    timerProgressBar:true,
    })
}
if (responder === 'Muros') {
    Swal.fire({
        title: `trabajamos con distintos tipos de materiales para buscar tu mejor opcion de construcion`,
		icon:'info',
        timer: 5000,
	    timerProgressBar:true,
    })
} 
if (responder === 'Columnas') {
    swal.fire({
    title:`trabajamos con concreto armado para una mejor resistencia en las estructuras`,
	icon: 'info',
	timer: 5000
	})
}


})() 