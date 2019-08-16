const start = ()=>{
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	


	const time = 1.5;
	tl.add('end', 1)
	tl.from('.t1', time, {opacity:0}, 'end')
	tl.from('.legal', time, {opacity:0}, 'end')

}





module.exports = start;

