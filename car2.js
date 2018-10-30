var carAndModels = {};
carAndModels['Toyota'] = ['Fortuner', 'Alphard', 'Velfire', 'Voxy'];
carAndModels['Daihatsu'] = ['Sirion', 'Xenia'];
carAndModels['merci'] = ['Mercedez Benz C Class', 'Mercedez Benz C Class Coupe', 'Mercedez Benz S Class Ultimate', 'Mercedez Benz E Class'];
carAndModels['bmw'] = ['BMW 3 Series', 'BMW 5 Series', 'BMW 6 Series', 'BMW 6 Series Estate', 'BMW 7 Series'];
carAndModels['audi'] = ['Audi A3', 'Audi A3 Quatro', 'Audi A4', 'Audi A8'];

function ChangeCarList() {
	var carList = document.getElementById("merk");
	var modelList = document.getElementById("varian");

	var selCar = carList.options[carList.selectedIndex].value;
	while(modelList.options.length) {
		modelList.remove(0);
	}

	var cars = carAndModels[selCar];
	if (cars) {
		var i;
		for(i=0; i<cars.length; i++) {
			var car = new Option(cars[i], i);
			modelList.options.add(car);
		}
	}
}

function BandingCar() {
	var carBanding = document.getElementById("merkBanding");
	var modelBanding = document.getElementById("modelBanding");

	var banCar = carBanding.options[carBanding.selectedIndex].value;
	while (modelBanding.options.length) {
		modelBanding.remove(0);
	}

	var mobil = carAndModels[banCar];
	if (mobil) {
		var x;
		for (x=0; x<mobil.length; x++) {
			var mobils = new Option(mobil[x], x);
			modelBanding.options.add(mobils);
		}
	}
}