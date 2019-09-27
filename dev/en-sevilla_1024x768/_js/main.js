import start from '../../_common/js/sevilla.js'

const tl = new TimelineMax()
tl.add('leaf')	
tl.from('.leaf.top', .9, {y:"-=400"}, 'leaf')
tl.from('.leaf.bottom', 1.2, {y:"+=400"}, 'leaf+=.2')
TweenLite.from(".t2", 2, {opacity:0, delay:1.3})
start()

