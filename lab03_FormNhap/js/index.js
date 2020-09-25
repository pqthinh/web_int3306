document.getElementById('name').focus()

document.getElementById('name').onkeyup = function(e) {
    doKeyUp(e, this, "place")
}
document.getElementById("place").onkeyup = function(e) {
    doKeyUp(e, this, "birth")
}
document.getElementById("birth").onkeyup = function(e) {
    doKeyUp(e, this, "email")
}
document.getElementById("email").onkeyup = function(e) {
    doKeyUp(e, this, "phone")
}
document.getElementById('phone').onkeyup = function(e) {
    doKeyUp(e, this, "username")
}
document.getElementById('username').onkeyup = function(e) {
    doKeyUp(e, this, "pass")
}
document.getElementById('pass').onkeyup = function(e) {
    doKeyUp(e, this, "repass")
}
document.getElementById('repass').onkeyup = function(e) {
    doKeyUp(e, this, "note")
}
function doKeyUp(e, current, next) {
    console.log(e)
    if (window.event) e = window.event;

    if(e.keyCode == 13) {
        document.getElementById(next).focus();
    }
}

function formatName(name) {
    dname = name;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}

document.getElementById("name").onblur = function() {
	this.value = formatName(this.value)
}

function checkPhone(phone) {
    const reg = /^([0])\d{9}$/
    return reg.test(phone.toLowerCase())
}

function checkEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email.toLowerCase())
}

function laTenSD(name) {
	//name = formatName(name)
	ss=name.split(' ')
	console.log(ss)
	console.log(name)
    const reg0= /^[A-Za-z]+$/
    for(i=0;i<ss.length;i++) 
		if(!reg0.test(ss[i])) return false
	return true
}
function laNgayThang(date) {
	d= date
	s = d.split('/');

	if (s.length != 3) return false; //phai co 3 phan
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;//ca 3 la so

	//chuyen thanh cac so nguyen
	ngay = parseInt(s[0]);
	thang = parseInt(s[1]);
	nam = parseInt(s[2]);

	//kiem tra
	if (thang > 12 || thang < 1) return false;
	if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
		if (ngay > 31) return false;
	} else if (thang == 2){
		if (nam%4 == 0 && nam%100 != 0) {
			if (ngay > 29) return false;
		} else if (ngay > 28) return false;
	} else if (ngay > 30) return false;

	if (ngay < 1) return false;

	date = new Date();
	if (nam > date.getFullYear() || nam < 1950) return false;

	return true;
}

document.getElementById('birth').onkeyup = function(e) {
	if(e.keyCode !=13 || e.keyCode !=18) {
		date =  document.getElementById('birth').value
		if(date.length==2) date+='/'
		if(date.length==5) date+='/'
		if(date.length==10) {
			if(date == 'nn/tt/nnn') date=''
		}
		document.getElementById('birth').value = date
	}
}

function ChapNhan() {
    //return
    var okie = true; //chua co loi
	//xoa cac thong bao loi
	document.getElementById("error_name").innerHTML  = "";
	document.getElementById("error_email").innerHTML = "";
	document.getElementById("error_birth").innerHTML = "";
	document.getElementById("error_pass").innerHTML = "";
	document.getElementById("error_user").innerHTML = "";
	document.getElementById("error_repass").innerHTML = "";

	//kiem tra cac truong bat buoc nhap
	
	if (document.getElementById("pass").value == "") {
		document.getElementById("error_pass").innerHTML = "Quý vị chưa nhập mật khẩu";
		document.getElementById("pass").focus();
		okie = false;
	} else if (document.getElementById("repass").value == "") {
		document.getElementById("error_repass").innerHTML = "Quý vị chưa gõ lại mật khẩu";
		document.getElementById("repass").focus();
		okie = false;
	} else if (document.getElementById("pass").value  != document.getElementById("repass").value ) {
		document.getElementById("error_pass").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
		document.getElementById("repass").focus();
		okie = false;
	}

	if (document.getElementById("username").value == "") {
		document.getElementById("error_user").innerHTML = "Quý vị chưa nhập tên sử dụng";
		document.getElementById("username").focus();
		okie = false;
	} else if (!laTenSD(document.getElementById("name").value)) {
		document.getElementById("error_name").innerHTML = "Tên sử dụng không đúng định dạng";
		document.getElementById("name").focus();
		okie = false;
	}

	if (document.getElementById("email").value == "") {
		document.getElementById("error_email").innerHTML = "Quý vị chưa nhập e-mail";
		document.getElementById("email").focus();
		okie = false;
	} else if (!checkEmail(document.getElementById("email").value)) 				{
		document.getElementById("error_email").innerHTML = "E-mail không đúng định dạng";
		document.getElementById("email").focus();
		okie = false;
	}

	if (document.getElementById("birth").value == "") {
		document.getElementById("error_birth").innerHTML = "Quý vị chưa nhập ngày sinh";
		document.getElementById("birth").focus();
		okie = false;
	} else if (!laNgayThang(document.getElementById("birth").value)) {
		document.getElementById("error_birth").innerHTML = "Ngày sinh không đúng định dạng";
		document.getElementById("birth").focus();
		okie = false;
	}


	if (document.getElementById("name").value == "") {
		document.getElementById("error_name").innerHTML = "Quý vị chưa nhập họ tên";
		document.getElementById("name").focus();
		okie = false;
	}

	//neu tất cả các dữ liệu được nhập đúng đắn
	//submit form
	if (okie) document.getElementById("form").submit();
}
function quit() {
    //return
    document.location.href = "";
}