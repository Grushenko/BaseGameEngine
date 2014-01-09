function TexturePack(src)
{
	this.textures = [];
	
	this.data = {"frames": [

		{
			"filename": "test1.jpg",
			"frame": {"x":2,"y":2,"w":300,"h":265},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {"x":0,"y":0,"w":300,"h":265},
			"sourceSize": {"w":300,"h":265}
		},
		{
			"filename": "test2.jpg",
			"frame": {"x":2,"y":269,"w":400,"h":300},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {"x":0,"y":0,"w":400,"h":300},
			"sourceSize": {"w":400,"h":300}
		}],
		"meta": {
			"app": "http://www.codeandweb.com/texturepacker ",
			"version": "1.0",
			"image": "test.png",
			"format": "RGBA8888",
			"size": {"w":512,"h":1024},
			"scale": "1",
			"smartupdate": "$TexturePacker:SmartUpdate:dd0e10a817be36e3f2cbfe2368a567da:3880c82ce453080697d579b78ee0453a:d8fea9755334f66846062fbb85536091$"
		}
	};

	//loadJSON(src, function(r){console.log(r)})
	this.img = new Image();
}

TexturePack.prototype.load = function(callback)
{
	this.img.onload = function(){
		//textures.push(blablabla)
		callback();
	};
	this.img.src = src;
}