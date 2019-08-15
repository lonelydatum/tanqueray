const start = (x, time)=>{
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	tl.add('end', "+=.2")
	tl.from('.t1', time, {opacity:0}, 'end')
	tl.from('.product', time, {x:`-=${x}`}, 'end')
	tl.from('.legal', time, {opacity:0}, 'end')
}





module.exports = start;

