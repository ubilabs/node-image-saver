node-image-saver
================

Saves an image data URI back to the file system.


### Quick Start:

```sh
node bin/image-server.js
```

### Example POST-Request


```js
$.ajax("http://localhost:8888/", {
  type: "POST",
  crossDomain: true,
  data: {
    name: "myimage.png",
    data: canvas.toDataURL('image/png')
  },
  success: function(){
    console.log("Image saved");
  }
});
```

### Author

Martin Kleppe / Ubilabs