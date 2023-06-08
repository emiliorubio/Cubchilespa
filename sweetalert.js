(async() => {
    await Swal.fire({
	title:"Bienvenidos a Cub Chile!",
	text: '¡Donde cumpliras tus sueños!',
	imageUrl: '/imagenes/Logo-CubChile.jpg',
	imageWidth: 100,
    imageHeight: 100,
	confirmButtonText: 'Siguenos',
	footer: 'Todos nuestros trabajos cuentan con garantia 30 dias.',
	width: '40%',
	padding:'2rem',
	backdrop: true,
	allowOutsideClick: false,
	allowEscapeKey:true,
	allowEnterKey:true,
	stopKeydownPropagation:true,
	timer: 3000,
	timerProgressBar:true,

	

	});
	
})() 