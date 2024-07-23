import * as React from "react";
import axios from "axios";


//pake endpoin datasetsAnomali
// const datasetsAnomali = [
// 	{
// 		device_id: "D8fRCvhyRWUNtzfWuhbdb9q5azNkrE4g",
// 		index_id: "618bce88109f491b98e68b59",
// 		elementId: "sensorph1",
// 		sensor_name: "PH1"
// 	},
// 	{
// 		device_id: "lWwWZ7RHI5HToRocg122mLHgmqKsT7F7",
// 		index_id: "618bce88109f491b98e68b59",
// 		elementId: "sensorph2",
// 		sensor_name: "PH2"
// 	},
// 	{
// 		device_id: "BngyuCFVukyQakpJyBug4WubAdpnt2g5",
// 		index_id: "6142a70446514f50ff8ed6a8",
// 		elementId: "sensorst1",
// 		sensor_name: "ST1"
// 	},
// 	{
// 		device_id: "J3c6xgg64gyL8pJ5uCZw69Ec4FJBj97R",
// 		index_id: "6142a70446514f50ff8ed6a8",
// 		elementId: "sensorst2",
// 		sensor_name: "ST1"
// 	},
// 	{
// 		device_id: "AMJ6RHSdwf4XMv2dhPRh8hxnE92exg7U",
// 		index_id: "638d8677245a8f9cc00b4bcc",
// 		elementId: "sensordht",
// 		sensor_name: "DHT"
// 	},
// 	{
// 		device_id: "fPMkkgECQndBCs7eFtha09uy57Qv8Xks",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "sensortds1",
// 		sensor_name: "tds1"
// 	},
// 	{
// 		device_id: "wqZeXsBhFSL6CLzfaUjJsnavudV3WvL7",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "sensortds2",
// 		sensor_name: "tds2"
// 	}, 
// ];


//pake endpoin datalist
const datasoil = [
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "kemaraur1",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "hujanr1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "manualr1",
	},

	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61305378590b802f53935e9a",
		elementId: "kemaraur2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61305378590b802f53935e9a",
		elementId: "hujanr2",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61305378590b802f53935e9a",
		elementId: "manualr2",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "6130523e590b802f53935e99",
		elementId: "kemaraur3",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6130523e590b802f53935e99",
		elementId: "hujanr3",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6130523e590b802f53935e99",
		elementId: "manualr3",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618f89476941b53a5d35606f",
		elementId: "kemaraur4",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618f89476941b53a5d35606f",
		elementId: "hujanr4",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618f89476941b53a5d35606f",
		elementId: "manualr4",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "kemaraur5",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "hujanr5",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "manualr5",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "kemaraur6",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "hujanr6",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "manualr6",
	},
	
	
///sensor NPK
	
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork2",
	},
	
	////sensor_name dipake buat di ngirim ke codingan ML
	{
		device_id: "D8fRCvhyRWUNtzfWuhbdb9q5azNkrE4g",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph1",
		sensor_name: "PH1"
	},
	{
		device_id: "lWwWZ7RHI5HToRocg122mLHgmqKsT7F7",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph2",
		sensor_name: "PH2"
	},
	{
		device_id: "BngyuCFVukyQakpJyBug4WubAdpnt2g5",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst1",
		sensor_name: "ST1"
	},
	{
		device_id: "J3c6xgg64gyL8pJ5uCZw69Ec4FJBj97R",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst2",
		sensor_name: "ST1"
	},
	{
		device_id: "AMJ6RHSdwf4XMv2dhPRh8hxnE92exg7U",
		index_id: "638d8677245a8f9cc00b4bcc",
		elementId: "sensordht",
		sensor_name: "DHT"
	},
	
		////log buat prediksi tambahin yang iryna nanti
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khaliwaktu",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khalipersen",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "musan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "musap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "musak1",
	},
	
	//ganti punya iryna nanti
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak1",
	},
	
];

// dataset buat nampilin hasil prediksi dan log
// const datasetsB = [
// 	{
// 		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
// 		index_id: "65792115cc701ed1363c640f",
// 		elementId: "khaliwaktu",
// 	},
// 	{
// 		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
// 		index_id: "65792115cc701ed1363c640f",
// 		elementId: "khalipersen",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "6280a8465a0c89673d266101",
// 		elementId: "musan1",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "6280a8275a0c89673d266100",
// 		elementId: "musap1",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "6280a8505a0c89673d266102",
// 		elementId: "musak1",
// 	},
// ];

// const datasetsC = [
// 	{
// 		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
// 		index_id: "6280a8275a0c89673d266100",
// 		elementId: "sensorn1",
// 	},
// 	{
// 		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
// 		index_id: "6280a8275a0c89673d266100",
// 		elementId: "sensorn2",
// 	},
// 	{
// 		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
// 		index_id: "6280a8465a0c89673d266101",
// 		elementId: "sensorp1",
// 	},
// 	{
// 		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
// 		index_id: "6280a8465a0c89673d266101",
// 		elementId: "sensorp2",
// 	},
// 	{
// 		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
// 		index_id: "6280a8505a0c89673d266102",
// 		elementId: "sensork1",
// 	},
// 	{
// 		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
// 		index_id: "6280a8505a0c89673d266102",
// 		elementId: "sensork2",
// 	},
// 		{
// 		device_id: "D8fRCvhyRWUNtzfWuhbdb9q5azNkrE4g",
// 		index_id: "618bce88109f491b98e68b59",
// 		elementId: "sensorph1",
// 		sensor_name: "PH1"
// 	},
// 	{
// 		device_id: "lWwWZ7RHI5HToRocg122mLHgmqKsT7F7",
// 		index_id: "618bce88109f491b98e68b59",
// 		elementId: "sensorph2",
// 		sensor_name: "PH2"
// 	},
// 	{
// 		device_id: "BngyuCFVukyQakpJyBug4WubAdpnt2g5",
// 		index_id: "6142a70446514f50ff8ed6a8",
// 		elementId: "sensorst1",
// 		sensor_name: "ST1"
// 	},
// 	{
// 		device_id: "J3c6xgg64gyL8pJ5uCZw69Ec4FJBj97R",
// 		index_id: "6142a70446514f50ff8ed6a8",
// 		elementId: "sensorst2",
// 		sensor_name: "ST1"
// 	},
// 	{
// 		device_id: "AMJ6RHSdwf4XMv2dhPRh8hxnE92exg7U",
// 		index_id: "638d8677245a8f9cc00b4bcc",
// 		elementId: "sensordht",
// 		sensor_name: "DHT"
// 	},
// 	{
// 		device_id: "fPMkkgECQndBCs7eFtha09uy57Qv8Xks",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "sensortds1",
// 		sensor_name: "tds1"
// 	},
// 	{
// 		device_id: "wqZeXsBhFSL6CLzfaUjJsnavudV3WvL7",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "sensortds2",
// 		sensor_name: "tds2"
// 	},
// ]

function App() {
	// const [dataAnomali, setDataAnomali] = React.useState({
	// 	sensorph1: null,
	// 	sensorph2: null,
	// 	sensorst1: null,
	// 	sensorst2: null,
	// 	sensordht: null,
	// 	sensortds1: null,
	// 	sensortds2: null,
	// });


//nanti dipisah yang NPK
	const [soil, setSoil] = React.useState({
		kemaraur1: null,
		hujanr1: null,
		manualr1: null,
		kemaraur2: null,
		hujanr2: null,
		manualr2: null,
		kemaraur3: null,
		hujanr3: null,
		manualr3: null,
		kemaraur4: null,
		hujanr4: null,
		manualr4: null,
		kemaraur5: null,
		hujanr5: null,
		manualr5: null,
		kemaraur6: null,
		hujanr6: null,
		manualr6: null,
	    sensorn1: null,
		sensorn2: null,
		sensorp1: null,
		sensorp2: null,
		sensork1: null,
		sensork2: null,
		sensorph1: null,
		sensorph2: null,
		sensorst1: null,
		sensorst2: null,
		sensordht: null,

		
		//log prediksi tambahin iryna
		khaliwaktu: [],
	    khalipersen: [],
	    musan1: [],
	    musap1: [],
	    musak1: [],
	    irynan1: [],
	    irynap1: [],
	    irynak1: [],
	    
	    
	});

// 	const [dataB, setDataB] = React.useState({
// 	    khaliwaktu: [],
// 	    khalipersen: [],
// 	    musan1: [],
// 	    musap1: [],
// 	    musak1: [],
// 	});
	
// 	const [dataC, setDataC] = React.useState({
// 		sensorn1: null,
// 		sensorn2: null,
// 		sensorp1: null,
// 		sensorp2: null,
// 		sensork1: null,
// 		sensork2: null,
// 		sensorph1: null,
// 		sensorph2: null,
// 		sensorst1: null,
// 		sensorst2: null,
// 		sensordht: null,
// 		sensortds1: null,
// 		sensortds2: null,
// 	});



	React.useEffect(() => {
		//////fetch yang anomali, bikin juga buat NPK karena pisah
		// datasetsAnomali.forEach((datasetAnomali) => {
		// 	axios
		// 		.get("https://https://api.sf2.ctailab.com/datasetAnomali", {
		// 			params: {
		// 				device_id: datasetAnomali.device_id,
		// 				index_id: datasetAnomali.index_id,
		// 			},
		// 		})
		// 		.then((res) => {
		// 			setDataAnomali((prevState) => ({
		// 				...prevState,
		// 				[datasetAnomali.elementId]: res?.data[0] || "No data",
		// 			}));
		// 		})
		// 		.catch((err) => {
		// 			console.log("error => ", err);
		// 		});
		// });


        //nanti ini dipake buat log aja paling ya?
		datasoil.forEach((dtsoil) => {
			console.log("dtsoil", dtsoil);
			axios
				.get("https://https://api.sf2.ctailab.com/datalist", {
					params: {
						device_id: dtsoil.device_id,
						index_id: dtsoil.index_id,
					},
				})
				.then((res) => {
					console.log("res soil", res.data[0]);
					setSoil((prevState) => ({
						...prevState,
						[dtsoil.elementId]: res?.data[0] || "No data",
					}));
				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});

// 		datasetsB.forEach((datasetB) => {
// 			console.log("datasetB", datasetB);
// 			axios
// 				.get("https://https://api.sf2.ctailab.com/datalist", {
// 					params: {
// 						device_id: datasetB.device_id,
// 						index_id: datasetB.index_id,
// 						},
// 					})
// 				.then((res) => {
// 					setDataB((prevState) => ({
// 						...prevState,
// 						[datasetB.elementId]: res.data || [],
// 						}));
// 					})
// 				.catch((err) => {
// 					console.log("error => ", err);
// 					});
// 			});
		
// 		datasetsC.forEach((datasetC) => {
// 			console.log("datasetC", datasetC);
// 			axios
// 				.get("https://https://api.sf2.ctailab.com/datalist", {
// 					params: {
// 						device_id: datasetC.device_id,
// 						index_id: datasetC.index_id,
// 					},
// 				})
// 				.then((res) => {
// 					setDataC((prevState) => ({
// 						...prevState,
// 						[datasetC.elementId]: res?.data[0] || "No data",
// 					}));
// 				})
// 				.catch((err) => {
// 					console.log("error => ", err);
// 				});
// 		});


    


	}, []);

	return (
		<>
			<div className="py-10 pr-20 pl-6 h-screen bg-slate-50 max-md:px-5">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0">
					<aside className="flex flex-col w-[20%]">
						<div className="flex flex-col grow max-md:mt-10">
							<div className="flex gap-2.5 text-2xl font-semibold tracking-wide text-black whitespace-nowrap">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/d598265a0d3ee4cf75971a42cdb5110d29abf4741753f518235fc1b5745025f5?apiKey=d03d160494014eaf8a1af94dd934f586&"
									alt=""
									className="shrink-0 shadow-2xl aspect-[0.88] w-[38px]"
								/>
								<div className="flex-auto self-start mt-3">SmartFarming</div>
							</div>
						</div>
					</aside>
					<main className="flex flex-col max-h-[calc(100vh-10rem)] overflow-y-auto hide-scrollbar ml-5 w-[80%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">
							<h1 className="text-2xl font-medium text-black max-md:max-w-full">
								Home
							</h1>
							
							
// 							/////// nanti buat bagian analisis
							
// 							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
// 								<div className="flex flex-col w-full p-5">
// 									<div className="flex gap-5 text-sm tracking-normal w-full">
// 										<div className="flex flex-col gap-3 w-full">
// 											<h2 className="text-2xl font-semibold tracking-tight text-black">
// 												INFORMASI!!!!
// 											</h2>
											
// 											////bagian informasi erornya sensor
// 											if(soil?.sensorph1?.anomaly === 1 && soil?.sensorph2?.anomaly === 1 && soil?.sensorst1?.anomaly === 1 soil?.sensorst2?.anomaly === 1 && soil?.sensorn1?.anomaly === 1 && soil?.sensorp1?.anomaly === 1 soil?.sensork1?.anomaly === 1 && soil?.sensorn2?.anomaly === 1 && soil?.sensorp2?.anomaly === 1 soil?.sensork2?.anomaly === 1) {
// 											    <div className="text-teal-500">
// 											        Terdapat beberapa sensor dalam kondisi tidak baik, tertera di tabel dengan status ANOMALI. Harap cek ke lokasi.
// 											    </div>
// 											} else {
// 											    <div className="text-teal-500">
// 											        Semua sensor dalam keadaan baik.
// 											    </div>
// 											}

//                                             ////cek apakah pemberian air dan nutrisinya sudah sesuai?
// 											    if({soil?musan1.value} === {soil?iryna.value} && {soil?musap1.value} === {soil?iryna.value}){
											        
// 											    }
											    
											    
// 												<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
// 														{"Anomali"}
// 												</div>
// 												) : (
// 												<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
// 													{"Normal"}
// 												</div>

											
// 											<div className="text-teal-500">
// 												Pemberian air dan nutrisi sudah sesuai kebutuhan tanaman
// 											</div>

// 											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
// 												<div className="font-medium w-full text-center justify-center items-center content-center">
// 													Hujan
// 												</div>
// 												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
// 													{soil?.sensorn1?.value}
// 													<br />
// 												</div>
// 												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
// 													{soil?.sensorp1?.value}
// 													<br />
// 												</div>
// 												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
// 													{soil?.sensork1?.value}
// 													<br />
// 												</div>
// 												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													
// {/* 													<br /> */}
// 													{soil?.sensorn1?.value === 0 ? (
// 														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
// 															{"Anomali"}
// 														</div>
// 													) : (
// 														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
// 															{"Normal"}
// 														</div>
// 													)}
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</section>
							
							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Soil Moisture
											</h2>
											<div className="text-teal-500">
												sensor kelembaban tanah
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Baris
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Hujan
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Manual
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R1
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur1?.value}
													<br />
													{soil?.kemaraur1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr1?.value}
													<br />
													{soil?.hujanr1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr1?.value}
													<br />
													{soil?.manualr1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R2
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur2?.value}
													<br />
													{soil?.kemaraur2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr2?.value}
													<br />
													{soil?.hujanr2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr2?.value}
													<br />
													{soil?.manualr2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R3
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur3?.value}
													<br />
													{soil?.kemaraur3?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr3?.value}
													<br />
													{soil?.hujanr3?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr3?.value}
													<br />
													{soil?.manualr3?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R4
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur4?.value}
													<br />
													{soil?.kemaraur4?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr4?.value}
													<br />
													{soil?.hujanr4?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr4?.value}
													<br />
													{soil?.manualr4?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R5
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur5?.value}
													<br />
													{soil?.kemaraur5?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr5?.value}
													<br />
													{soil?.hujanr5?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr5?.value}
													<br />
													{soil?.manualr5?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R6
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur6?.value}
													<br />
													{soil?.kemaraur6?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr6?.value}
													<br />
													{soil?.hujanr6?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr6?.value}
													<br />
													{soil?.manualr6?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</section>

							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												PH dan Suhu Tanah
											</h2>
											<div className="text-teal-500">
												nilai PH dan suhu pada tanah
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Sensor
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Bedeng
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Nilai
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Status
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													PH
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Kemarau
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{dataC?.sensorph2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													
{/* 													<br /> */}
{/* 													{data?.sensorph2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)} */}

													{soil?.sensorph2?.anomaly === 1 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													PH
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Hujan
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorph1?.value}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorph1?.anomaly === 1 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													ST
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Kemarau
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst2?.value}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst2?.anomaly === 1 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													ST
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Hujan
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst1?.value}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst1?.anomaly === 1 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												
											</div>
											
										</div>
									</div>
								</div>
							</section>

							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Sensor NPK
											</h2>
											<div className="text-teal-500">
												Nilai NPK pada tanah
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Bedeng
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Status
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													Kemarau
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorn2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorp2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensork2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													
{/* 													<br /> */}
													{soil?.sensorn2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													Hujan
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorn1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorp1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensork1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													
{/* 													<br /> */}
													{soil?.sensorn1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											
											
										</div>
									</div>
								</div>
							</section>


							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Log Control Valve 1
											</h2>
											<div className="text-teal-500">
												Status pemberian irigasi bedeng hujan
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Waktu
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Durasi (detik)
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Bukaan (0-225)
												</div>
											</div>
								// 			{soil.khaliwaktu.map((item, index) => (
								// 				<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
								// 					<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
								// 						<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
								// 							{new Date(item.createdAt).toLocaleDateString()}
								// 							{new Date(item.createdAt).toLocaleTimeString()}
								// 							<br />
								// 						</div>
								// 						<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
								// 							{item.value}
								// 							<br />
								// 						</div>
								// 						<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
								// 							{soil.khalipersen[index] ? soil.khalipersen[index].value : "No data"}
								// 							<br />
								// 						</div>
								// 					</div>												
								// 				</div>
								// 			))}
								
								        
								            {soil.khaliwaktu
								                .filter(item => item.value !== 0) // Menyaring item yang nilainya tidak sama dengan 0
								                .map((item, index) => (
								                <div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
								                    <div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
								                        {new Date(item.createdAt).toLocaleDateString()}
								                        {new Date(item.createdAt).toLocaleTimeString()}
								                    <br />
								                    </div>
								                    <div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
								                        {item.value}
								                        <br />
								                    </div>
								                    <div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
								                        {soil.khalipersen[index] ? soil.khalipersen[index].value : "No data"}
								                        <br />
								                    </div>
								                </div>
								            ))}

								            
										</div>
									</div>
								</div>
							</section>
							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Prediksi NPK
											</h2>
											<div className="text-teal-500">
												Nilai prediksi NPK untuh masa kini
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Waktu Prediksi
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K
												</div>
											</div>
											{soil.musan1.map((item, index) => (
												<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
													<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{new Date(item.createdAt).toLocaleDateString()}
															{new Date(item.createdAt).toLocaleTimeString()}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{item.value}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{soil.musap1[index] ? dataB.musap1[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{soil.musak1[index] ? dataB.musak1[index].value : "No data"}
															<br />
														</div>
													</div>												
												</div>
											))}
										</div>
									</div>
								</div>
							</section>

							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Prediksi NPK
											</h2>
											<div className="text-teal-500">
												Nilai prediksi NPK untuh masa mendatang
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Waktu Prediksi
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K
												</div>
											</div>
{/* 											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{new Date(
														soil?.musan1?.createdAt
													).toLocaleDateString()}{" "}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.musan1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.musap1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.musak1?.value}
													<br />
												</div>
												
											</div> */}
										</div>
									</div>
								</div>
							</section>
							
							
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
