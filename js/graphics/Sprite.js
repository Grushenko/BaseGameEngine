function Sprite(x, y, src)
{
	this.src = src;
	this.img  = new Image();
	this.img.src = src;
	this.x = x;
	this.y = y;
}

Sprite.prototype.setPosition = function(x, y)
{
	
}