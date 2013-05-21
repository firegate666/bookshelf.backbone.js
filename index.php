<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>hello-backbonejs</title>

		<script src="js/lib/jquery-2.0.0.js"></script>

		<script src="js/lib/json2.js" type="text/javascript"></script>
		<script src="js/lib/underscore-1.4.4.js" type="text/javascript"></script>
		<script src="js/lib/backbone-1.0.0.js" type="text/javascript"></script>

		<script src="js/book.model.js" type="text/javascript"></script>
		<script src="js/books.collection.js" type="text/javascript"></script>
		<script src="js/book.view.js" type="text/javascript"></script>
		<script src="js/books.view.js" type="text/javascript"></script>

		<script src="js/bootstrap.js" type="text/javascript"></script>

	</head>
	<body>

		<script type="text/template" id="books">
			&nbsp;signature&nbsp;<input name='signature' />
			&nbsp;name&nbsp;<input name='name' />
			<button id='add'>Add book</button>
			<ul></ul>
		</script>

		<script type="text/tenplate" id="book">
			<span class="model" style="color:black;"></span>
			&nbsp; &nbsp;
			<span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">
				[swap]
			</span>
			<span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">
				[delete]
			</span>
		</script>

	</body>
</html>
