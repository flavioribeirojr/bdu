(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1c7f":function(e,a,t){"use strict";t("HAE/"),Object.defineProperty(a,"__esModule",{value:!0});var n=r(t("q1tI")),l=r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,l=e.breakLinkClassName,r=e.onClick,s=t||"break";return n.default.createElement("li",{className:s},n.default.createElement("a",{className:l,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};s.propTypes={breakLabel:l.default.oneOfType([l.default.string,l.default.node]),breakClassName:l.default.string,breakLinkClassName:l.default.string,onClick:l.default.func.isRequired},a.default=s},"3LHp":function(e,a,t){"use strict";t("HAE/"),Object.defineProperty(a,"__esModule",{value:!0});var n=r(t("q1tI")),l=r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,l=e.onClick,r=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a=void 0!==a?a+" "+e.activeClassName:e.activeClassName,void 0!==t?void 0!==e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:l,role:"button",className:t,href:r,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:l},e.page))};s.propTypes={onClick:l.default.func.isRequired,selected:l.default.bool.isRequired,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,extraAriaContext:l.default.string,href:l.default.string,ariaLabel:l.default.string,page:l.default.number.isRequired},a.default=s},JVW3:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),s=t("Wbzz"),i=t("IP2g"),o=t("wHSu"),u=t("oolq"),c=t.n(u);var d=function(e){var a=e.post;return l.a.createElement("div",{className:c.a.blogPreview},l.a.createElement("img",{src:a.cover,alt:a.alt||"Capa do post",className:c.a.blogPreviewCover}),l.a.createElement("div",{className:c.a.blogPreviewInfo},l.a.createElement("a",{href:"/"+a.slug,className:c.a.blogPreviewInfoTitle},a.title),l.a.createElement("p",{className:c.a.blogPreviewInfoDescription},a.description),l.a.createElement("div",{className:c.a.blogPreviewInfoOptions},l.a.createElement("button",{className:c.a.blogPreviewInfoOptionsItem},l.a.createElement(i.a,{className:c.a.blogPreviewInfoOptionsItemIcon,icon:o.b}),l.a.createElement("span",{className:c.a.blogPreviewInfoOptionsItemText},a.date)),l.a.createElement("button",{className:c.a.blogPreviewInfoOptionsItem},l.a.createElement(i.a,{className:c.a.blogPreviewInfoOptionsItemIcon,icon:o.d}),l.a.createElement("span",{className:c.a.blogPreviewInfoOptionsItemText},"Compartilhar")),l.a.createElement("button",{className:c.a.blogPreviewInfoOptionsItem},l.a.createElement(i.a,{className:c.a.blogPreviewInfoOptionsItemIcon,icon:o.a}),l.a.createElement("span",{className:c.a.blogPreviewInfoOptionsItemText},"Ler Depois")))))},f=t("werx"),p=t.n(f),g=t("CaWh"),m=t.n(g);var b=function(e){var a=e.posts,t=e.numberOfPages,n=e.currentPage;return l.a.createElement("div",{className:m.a.blog},l.a.createElement("div",{className:m.a.blogList},a.map((function(e){return l.a.createElement(d,{key:e.slug,post:e})}))),t>1&&l.a.createElement(p.a,{initialPage:n-1,pageCount:t,pageRangeDisplayed:5,marginPagesDisplayed:5,onPageChange:function(e){var a=e.selected+1;a!==n&&(1!==a?Object(s.navigate)("/blog/"+a):Object(s.navigate)("/"))},containerClassName:m.a.blogPagination,pageClassName:m.a.blogPaginationItem,activeClassName:m.a.active,previousLabel:"",nextLabel:""}))},v=t("vrFN");t.d(a,"blogListQuery",(function(){return C}));a.default=function(e){var a,t=e.data,n=e.pageContext;return l.a.createElement(r.a,null,l.a.createElement(v.a,{title:"Home"}),l.a.createElement(b,{posts:(a=t.allMarkdownRemark.edges,a.map((function(e){return e.node.frontmatter}))),numberOfPages:n.numberOfPages,currentPage:n.currentPage}))};var C="333894451"},kzof:function(e,a,t){"use strict";t("2Spj"),t("/SS/"),t("hHhE"),t("HAE/"),Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),l=t("q1tI"),r=u(l),s=u(t("17x9")),i=u(t("3LHp")),o=u(t("1c7f"));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,l=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,u=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(l<=n)for(var f=0;f<l;f++)e.push(t.getPageElement(f));else{var p=n/2,g=n-p;d>l-n/2?p=n-(g=l-d):d<n/2&&(g=n-(p=d));var m=void 0,b=void 0,v=void 0,C=function(e){return t.getPageElement(e)};for(m=0;m<l;m++)(b=m+1)<=s?e.push(C(m)):b>l-s?e.push(C(m)):m>=d-p&&m<=d+g?e.push(C(m)):i&&e[e.length-1]!==v&&(v=r.default.createElement(o.default,{key:m,breakLabel:i,breakClassName:u,breakLinkClassName:c,onClick:t.handleBreakClick.bind(null,m)}),e.push(v))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,l=t.pageLinkClassName,s=t.activeClassName,o=t.activeLinkClassName,u=t.extraAriaContext;return r.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:l,activeClassName:s,activeLinkClassName:o,extraAriaContext:u,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,l=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,o=e.previousLabel,u=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,f=t+(0===d?" "+a:""),p=n+(d===l-1?" "+a:""),g=0===d?"true":"false",m=d===l-1?"true":"false";return r.default.createElement("ul",{className:s},r.default.createElement("li",{className:f},r.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":g},o)),this.pagination(),r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handleNextPage,className:u,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":m},c)))}}]),a}(l.Component);c.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=c},werx:function(e,a,t){"use strict";t("HAE/"),Object.defineProperty(a,"__esModule",{value:!0});var n,l=t("kzof"),r=(n=l)&&n.__esModule?n:{default:n};a.default=r.default}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-a37b9784d99b5c501824.js.map