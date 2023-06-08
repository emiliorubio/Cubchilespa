(async() => {
    const {value: responder}  = await Swal.fire({
	title:"Bienvenido!",
	text: 'Buscas un Presupuesto?',
	imageUrl: '/imagenes/Logo-CubChile.jpg',
	imageWidth: 100,
    imageHeight: 100,
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
	inputPlaceholder: 'responder',
	inputValue:'',
	inputOptions: {
        Si: 'Si',
        No: 'No'
    }
    });


if (responder === 'Si') {
    Swal.fire({
        title: `${responder} puedes comprar`,
		icon:'success',
        timer: 3000,
	    timerProgressBar:true,
    })
} else {
    swal.fire({
    title:`No puedes comprar`,
	icon: 'error',
    showConfirmButton: false,
    allowOutsideClick: false,
	allowEscapeKey:false,
	allowEnterKey:false,
    })
    setTimeout(()=>{
        document.location.reload()
    },4000)
}


})() 