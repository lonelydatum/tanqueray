import start from '../../_common/js/london_gin.js'

TweenLite.to(".bg", 2, {x:0, ease:Power3.easeOut})
start(180, 1.5)
TweenLite.from(".t2", 2, {opacity:0, delay:1.3})

