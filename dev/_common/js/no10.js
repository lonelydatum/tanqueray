const start = (x, time)=>{
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	
	tl.from('.product', time, {x:`-=${x}`})

	tl.add('end', "-=.7")
	tl.from('.t1', time, {opacity:0}, 'end')
	
	tl.from('.legal', time, {opacity:0}, 'end')
}





module.exports = start;

