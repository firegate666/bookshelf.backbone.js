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

		<script type="text/template" id="new_book">
			<form name="newBook">
				<div class="error"></div>
				&nbsp;Title&nbsp;<input name='title' value="<% form_data.title %>"/>
				&nbsp;Author&nbsp;<input name='author' value="<% form_data.author %>" />
				&nbsp;Publisher&nbsp;<input name='publisher' value="<% form_data.publisher %>" />
				&nbsp;Signature&nbsp;<input name='signature' value="<% form_data.signature %>" />
				&nbsp;Keywords&nbsp;<input name='keywords' value="<% form_data.keywords %>" />
				&nbsp;ISBN-13&nbsp;<input name='isbn13' value="<% form_data.isbn13 %>" />
			</form>
			<button id='add'>Add book</button>
		</script>

		<script type="text/template" id="books">
			<div id="new_book_form"></div>

			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Publisher</th>
						<th>Author</th>
						<th>Signature</th>
						<th>Keywords</th>
						<th>ISBN-13</th>
						<th><!--action column--></th>
					</tr>
				</thead>
				<tbody>
					<!--books here-->
				</tbody>
			</table>

		</script>

		<script type="text/template" id="book">
			<td><%= book.get('id') %></td>
			<td><%= book.get('title') %></td>
			<td><%= book.get('publisher') %></td>
			<td><%= book.get('author') %></td>
			<td><%= book.get('signature') %></td>
			<td><%= book.get('keywords') %></td>
			<td><%= book.get('isbn13') %></td>
			<td>
				<span class="delete">D</span>
			</td>
		</script>

	</body>
</html>
