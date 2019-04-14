//Console.log out elements in JSON file
var json = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

var array = json.video;

for(var i = 0; i < array.length; i++) {
    var item = array[i];
    console.log("Id: " + item.id);
    console.log("Name: " + item.name);
    console.log("Url: " + item.url);
    console.log("Author data:");
for(var j = 0; j < item.author.data.length; j++) {
    var newItem = item.author.data[j];
    console.log("Author name: " + newItem.name_author);
    console.log("Author url: " + newItem.url);
    console.log("Author type: " + newItem.type);
    }
}




let (url) = "https://api.magicthegathering.io/v1/cards";

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log("JSON", out);
})
.catch(err => { throw err });