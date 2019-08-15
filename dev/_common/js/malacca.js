const start = (num)=>{
	TweenLite.defaultEase = Power4.easeOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	
	
	const tl_leaf = new TimelineMax()
	tl_leaf.add('leaf')	
	tl_leaf.from('.leaf_nw', 1, {y:`-=${num}`, x:`-=${num}`}, 'leaf')
	tl_leaf.from('.leaf_ne', 1, {y:`-=${num}`, x:`+=${num}`}, 'leaf')
	tl_leaf.from('.leaf_se', 1, {y:`+=${num}`, x:`+=${num}`}, 'leaf')

	


	const time = 1.5
	tl.add('end', .6)
	tl.from('.t1', time, {opacity:0}, 'end')
	tl.from('.legal', time, {opacity:0}, 'end')

}





module.exports = start;

