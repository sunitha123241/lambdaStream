<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
	<h1 align="center"><i>Login Page</i></h1>
</head>
<body align="center">
	<script type="text/javascript">
		function fun()
		{
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(document.myform.Firstname.value=="")
				alert("enter Firstname");
			else if(document.myform.Lastname.value=="")
				alert("Enter Lastname");
			else if(!filter.test(document.myform.EmailId.value))
				alert("Enter valid email");
			else if(document.myform.Password.value.length<=6)
				alert("Password minimum length is greater than or equal to 6");
			else if(document.myform.phone.value.length!=10)
				alert("enter phone no: correctly");
			else
				alert("success");
		}
	</script>
	<style type="text/css">
		body
		{
			background-color: skyblue;
		}
		form
		{
			background-color: pink;
		}
		input[type=submit]
		{
			background-color: lightgreen;
		}
		input[type=text],[type=password],[type=number]
		{
			width:30%;
			height:30%; 
		}
	</style>
	<div align="center">
	<form name="myform" method="post">
		<label>FirstName:</label>
		<input type="text" name="Firstname" placeholder="enter your first name" required>
		<br></br>
		<label>LastName:</label>
		<input type="text" name="Lastname" placeholder="enter your last name" required>
		<br></br>
		<label>Email ID:</label>
		<input type="text" name="EmailId" placeholder="enter your email id" required>
		<br></br>
		<label>Password:</label>
		<input type="Password" name="Password" placeholder="enter your password" required="">
		<br></br>
		<label>Phone no:</label>
		<input type="number" name="phone" placeholder="enter your phone number" required>
		<br></br>
		<input type="submit" name="button" value="submit" onclick="fun()">
	</form>
</div>
</body>
</html>