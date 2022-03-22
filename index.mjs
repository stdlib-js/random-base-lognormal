// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";var f=u.isPrimitive,c=g.isPrimitive,b=p,v=h;var x=function(e,t){return!f(e)||v(e)?new TypeError(b("invalid argument. `%s` must be a number and not `NaN`. Value: `%s`.","mu",e)):c(t)?null:new TypeError(b("invalid argument. `%s` must be a positive number. Value: `%s`.","sigma",t))},y=j;var w=function(e,t,n){return y(t+n*e())},N=e,L=t,E=n,O=s,T=r,P=i,V=o,G=m,R=d.factory,A=a,J=l,M=p,S=x,z=w;var k=function(){var e,t,n,s,r,i,o;if(0===arguments.length)t=R();else if(1===arguments.length){if(!O(n=arguments[0]))throw new TypeError(M("invalid argument. Options argument must be an object. Value: `%s`.",n));if(P(n,"prng")){if(!T(n.prng))throw new TypeError(M("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",n.prng));t=R({prng:n.prng})}else t=R(n)}else{if(i=S(o=arguments[0],e=arguments[1]))throw i;if(arguments.length>2){if(!O(n=arguments[2]))throw new TypeError(M("invalid argument. Options argument must be an object. Value: `%s`.",n));if(P(n,"prng")){if(!T(n.prng))throw new TypeError(M("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",n.prng));t=R({prng:n.prng})}else t=R(n)}else t=R()}return r=void 0===o?j:h,s=t.PRNG,N(r,"NAME","lognormal"),n&&n.prng?(N(r,"seed",null),N(r,"seedLength",null),E(r,"state",V(null),G),N(r,"stateLength",null),N(r,"byteLength",null),N(r,"toJSON",V(null))):(L(r,"seed",m),L(r,"seedLength",d),E(r,"state",p,u),L(r,"stateLength",a),L(r,"byteLength",l),N(r,"toJSON",g)),N(r,"PRNG",s),r;function m(){return s.seed}function d(){return s.seedLength}function a(){return s.stateLength}function l(){return s.byteLength}function p(){return s.state}function u(e){s.state=e}function g(){var t={type:"PRNG"};return t.name=r.NAME,t.state=J(s.state),t.params=void 0===o?[]:[o,e],t}function h(){return z(t,o,e)}function j(e,n){return A(e)||A(n)||n<=0?NaN:z(t,e,n)}},q=k(),B=k;e(q,"factory",B);var C=q;export{C as default,B as factory};
//# sourceMappingURL=index.mjs.map
