var submit= $('#form').submit(function (event) {
    event.preventDefault()
    var data1 = {
      name=$('input[name="name"]').val(),
      place= $('input[name="place"]').val(),
      sex= $('input[name="sex"]').val(),
      date= $('input[name="birth"]').val(),
      email= $('input[name="email"]').val(),
      phone= $('input[name="phone"]').val(),
      course= $('input[name="course"]').val(),
      user= $('input[name="username"]').val(),
      pass= $('input[name="pass"]').val(),
      note= $('input[name="note"]').val()
    }
    console.log(data1)

    // $.post('./php/user/add.php',{data: $('#form').serialize()})
    // .done(data=>{
    //     console.log(data)
    // })
    
    // Ajax Function to send a get request
    $.ajax({
      type: "POST",
      url: '/php/user/add.php',
      contentType: 'application/json',
      data: data1,
      success: function(response){
          //if request if made successfully then the response represent the data
        alert(response)
      },
      fail: function(res) {
        alert(0)
      }
    })
  })
// {
  // name: $('#name').val(),
  // place: $('#place').val(),
  // sex: $('input[name="sex"]').val(),
  // date : $('#birth').val(),
  // email : $('#email').val(),
  // phone : $('#phone').val(),
  // course: $('input[name="course"]').val(),
  // user : $('#username').val(),
  // pass : $('#pass').val(),
  // note : $('#note').val()
// }

// name: $('input[name="name"]').val(),
// place: $('#place').val(),
// sex: $('input[name="sex"]').val(),
// date : $('#birth').val(),
// email : $('#email').val(),
// phone : $('#phone').val(),
// course: $('input[name="course"]').val(),
// user : $('#username').val(),
// pass : $('#pass').val(),
// note : $('#note').val()