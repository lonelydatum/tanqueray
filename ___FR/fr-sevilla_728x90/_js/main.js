import start from '../../_common/js/sevilla.js'

const tl = new TimelineMax()
tl.add('leaf')	
tl.from('.leaf.top', .9, {x:"-=100"}, 'leaf')
tl.from('.leaf.bottom', 1.2, {x:"+=100"}, 'leaf+=.2')

start()

