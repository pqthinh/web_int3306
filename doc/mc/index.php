<!DOCTYPE html><html><head>
	<title>MC</title>
	<meta charset="utf-8">
</head><body>
	<h1>Tổng hai số</h1>
	<div>
		<label id="lx"></label>
		<label id="plus"></label>
		<label id="ly"></label>
		<label id="equal"></label>
		<label id="sum"></label>
	</div>
	<form method="post">
        x = <input type="text" name="x" id="x"/> <br/>
        y = <input type="text" name="y" id="y"/> <br/>
        <input type="submit" value="Chấp nhận"/>
    </form>
	<?php
		require_once("c.php");
		$ctrl = new SumControl();
	?>
	<script>
		// Nhan ket qua JSON
		let v = '<?php $ctrl->proc(); ?>';
		if (v.length > 0) {
			// chuyen thanh doi tuong JavaScript
			let o = JSON.parse(v);
			// Cap nhat DOM
			document.getElementById("lx").innerHTML = o.x;
			document.getElementById("ly").innerHTML = o.y;
			document.getElementById("sum").innerHTML = o.sum;
			document.getElementById("plus").innerHTML = " + ";
			document.getElementById("equal").innerHTML = " = ";
			
			document.getElementById("x").value = o.x;
			document.getElementById("y").value = o.y;
		}
	</script>
</body></html>
