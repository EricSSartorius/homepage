webpackJsonp([0xc260c743ec7c],{291:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(36),o=i(s),n=a(48),r=i(n),l=a(47),d=i(l),c=a(119),u=i(c),f=a(118),p=i(f),h=a(1),m=i(h),g=a(293),y=i(g),v=function(e){var t=(0,p.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},b={},w=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!b[a]||(b[a]=!0,!1)},E=void 0,S=[];"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&e.isIntersecting&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"}));var L=function(e,t){E.observe(e),S.push([e,t])},z=null,I=function(){if(null!==z)return z;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return z=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},N=function(e){var t=e.opacity,a=e.onLoad,i=e.transitionDelay,s=void 0===i?"":i,o=(0,u.default)(e,["opacity","onLoad","transitionDelay"]);return m.default.createElement("img",(0,p.default)({},o,{onLoad:a,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:s,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};N.propTypes={opacity:y.default.number,transitionDelay:y.default.string,onLoad:y.default.func};var j=function(e){function t(a){(0,o.default)(this,t);var i=(0,r.default)(this,e.call(this,a)),s=!0,n=!0,l=!1,d=w(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,n=!1,l=!0),"undefined"==typeof window&&(s=!1,n=!1),i.state={isVisible:s,imgLoaded:n,IOSupported:l},i.handleRef=i.handleRef.bind(i),i}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&L(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,s=t.className,o=t.outerWrapperClassName,n=t.style,r=void 0===n?{}:n,l=t.sizes,d=t.resolutions,c=t.backgroundColor,u=void 0;if(u="boolean"==typeof c?"lightgray":c,l){var f=l;return f.srcWebp&&f.srcSetWebp&&I()&&(f.src=f.srcWebp,f.srcSet=f.srcSetWebp),m.default.createElement("div",{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative"}},m.default.createElement("div",{className:(s?s:"")+" gatsby-image-wrapper",style:(0,p.default)({position:"relative",overflow:"hidden",zIndex:1},r),ref:this.handleRef},m.default.createElement("div",{style:{width:"100%",paddingBottom:100/f.aspectRatio+"%"}}),f.base64&&m.default.createElement(N,{alt:i,title:a,src:f.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),f.tracedSVG&&m.default.createElement(N,{alt:i,title:a,src:f.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&m.default.createElement("div",{title:a,style:{backgroundColor:u,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(N,{alt:i,title:a,srcSet:f.srcSet,src:f.src,sizes:f.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){return e.state.IOSupported&&e.setState({imgLoaded:!0})}})))}if(d){var h=d,g=(0,p.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:h.width,height:h.height},r);return"inherit"===r.display&&delete g.display,h.srcWebp&&h.srcSetWebp&&I()&&(h.src=h.srcWebp,h.srcSet=h.srcSetWebp),m.default.createElement("div",{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative",width:h.width,height:h.height}},m.default.createElement("div",{className:(s?s:"")+" gatsby-image-wrapper",style:g,ref:this.handleRef},h.base64&&m.default.createElement(N,{alt:i,title:a,src:h.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),h.tracedSVG&&m.default.createElement(N,{alt:i,title:a,src:h.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&m.default.createElement("div",{title:a,style:{backgroundColor:u,width:h.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:h.height}}),this.state.isVisible&&m.default.createElement(N,{alt:i,title:a,width:h.width,height:h.height,srcSet:h.srcSet,src:h.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){return e.setState({imgLoaded:!0})}})))}return null},t}(m.default.Component);j.defaultProps={fadeIn:!0,alt:""},j.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool])},t.default=j},194:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),o=i(s),n=a(34),r=i(n),l=a(291),d=(i(l),function(e){var t=e.data;return console.log(t),o.default.createElement("div",{className:"projects"},o.default.createElement("h1",{className:"title"},"Dev Projects"),o.default.createElement("div",{className:"project-grid"},t.allMarkdownRemark.edges.map(function(e){return o.default.createElement("div",{key:e.node.frontmatter.path,className:"project-single"},o.default.createElement(r.default,{key:e.node.id,to:e.node.frontmatter.path},o.default.createElement("div",{className:"overlay"},o.default.createElement("h2",{className:"",key:e.node.frontmatter.title},e.node.frontmatter.title))))})))});t.pageQuery="** extracted graphql fragment **";t.default=d}});
//# sourceMappingURL=component---src-pages-projects-js-188055d89c0f0b753b16.js.map