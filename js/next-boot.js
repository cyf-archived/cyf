$(document).ready(function(){$(document).trigger("bootstrap:before"),CONFIG.fastclick&&NexT.utils.isMobile()&&window.FastClick.attach(document.body),CONFIG.lazyload&&NexT.utils.lazyLoadPostsImages(),NexT.utils.registerESCKeyEvent(),CONFIG.back2top&&NexT.utils.registerBackToTop(),$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav"),t="site-nav-on",o=e.hasClass(t),a=o?"slideUp":"slideDown",i=o?"removeClass":"addClass";e.stop()[a]("fast",function(){e[i](t)})}),CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.tabs&&NexT.utils.registerTabsTag(),NexT.utils.embeddedVideoTransformer(),NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar),$(document).trigger("motion:before"),CONFIG.motion.enable&&NexT.motion.integrator.bootstrap(),$(document).trigger("bootstrap:after")});