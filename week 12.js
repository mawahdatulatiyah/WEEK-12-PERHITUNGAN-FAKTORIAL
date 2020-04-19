<!DOCTYPE html>
<html>
<head>
	<title>perhitungan faktorial</title>
	<meta charset="utf-8">
</head>
<body>
	<div class="container">
  <h3>Mawah Datul Atiyah</h3>
  <h3>D74217055</h3>
  <h3>pendidikan matematika</h3>
  <h3>Cari Hasil Penghitungan Faktorial </h3>
	<form>
		<input type="" name="" id="input">
		<button id="button">Cari</button>
		<div id="demo"></div>
	</form>
	<script type="text/javascript">
		var input = document.getElementById("input")
		var button = document.getElementById("button")
		var demo = document.getElementById("demo")

		
		button.addEventListener("click", function(e){
			e.preventDefault()
			var valInp = input.value;
			var hasil = 1;
			for(var i=valInp; i>0; i--){
				hasil *=i;
				
			}
		demo.innerHTML = `Hasil Faktorial Dari <strong> ${valInp} </strong> adalah <strong> ${hasil} </strong>`;
		})
	</script>
	</div>
</body>
</html>