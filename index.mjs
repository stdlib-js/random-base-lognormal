// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";function g(e,t){return!f(e)||j(e)?new TypeError(a("0of6v,NI",e)):h(t)?null:new TypeError(a("0of72,Go",t))}function c(e,t,s){return u(t+s*e())}function v(){var f,h,j,u,v,b,x;if(0===arguments.length)h=m();else if(1===arguments.length){if(!n(j=arguments[0]))throw new TypeError(a("0of2V,FD",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0of6u,JI","prng",j.prng));h=m({prng:j.prng})}else h=m(j)}else{if(b=g(x=arguments[0],f=arguments[1]))throw b;if(arguments.length>2){if(!n(j=arguments[2]))throw new TypeError(a("0of2V,FD",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0of6u,JI","prng",j.prng));h=m({prng:j.prng})}else h=m(j)}else h=m()}return v=void 0===x?P:J,u=h.PRNG,e(v,"NAME","lognormal"),j&&j.prng?(e(v,"seed",null),e(v,"seedLength",null),s(v,"state",o(null),d),e(v,"stateLength",null),e(v,"byteLength",null),e(v,"toJSON",o(null))):(t(v,"seed",y),t(v,"seedLength",w),s(v,"state",E,T),t(v,"stateLength",N),t(v,"byteLength",L),e(v,"toJSON",G)),e(v,"PRNG",u),v;function y(){return u.seed}function w(){return u.seedLength}function N(){return u.stateLength}function L(){return u.byteLength}function E(){return u.state}function T(e){u.state=e}function G(){var e={type:"PRNG"};return e.name=v.NAME,e.state=p(u.state),e.params=void 0===x?[]:[x,f],e}function J(){return c(h,x,f)}function P(e,t){return l(e)||l(t)||t<=0?NaN:c(h,e,t)}}var b=v();e(b,"factory",v);export{b as default,v as factory};
//# sourceMappingURL=index.mjs.map
