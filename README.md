<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Lognormal Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Lognormal][lognormal] distributed pseudorandom numbers.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-base-lognormal
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var lognormal = require( '@stdlib/random-base-lognormal' );
```

#### lognormal( mu, sigma )

Returns a pseudorandom number drawn from a [lognormal][lognormal] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var r = lognormal( 2.0, 5.0 );
// returns <number>
```

If `mu` or `sigma` is `NaN` or `sigma <= 0`, the function returns `NaN`.

```javascript
var r = lognormal( 2.0, -2.0 );
// returns NaN

r = lognormal( NaN, 5.0 );
// returns NaN

r = lognormal( 2.0, NaN );
// returns NaN
```

#### lognormal.factory( \[mu, sigma, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [lognormal][lognormal] distribution.

```javascript
var rand = lognormal.factory();

var r = rand( 0.1, 1.5 );
// returns <number>
```

If provided `mu` and `sigma`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = lognormal.factory( 10.0, 2.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `mu` and `sigma`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = lognormal.factory();

var r = rand( 0.0, 1.0 );
// returns <number>

r = rand( -2.0, 2.0 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random-base-minstd' );

var rand = lognormal.factory({
    'prng': minstd.normalized
});

var r = rand( 1.0, 2.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = lognormal.factory({
    'seed': 12345
});

var r1 = rand1( 1.0, 2.0 );
// returns <number>

var rand2 = lognormal.factory( 1.0, 2.0, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = lognormal( 1.0, 2.0 );
}

// Create a new PRNG initialized to the current state of `lognormal`:
rand = lognormal.factory({
    'state': lognormal.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 1.0, 2.0 ) === lognormal( 1.0, 2.0 ) );
// returns true
```

#### lognormal.NAME

The generator name.

```javascript
var str = lognormal.NAME;
// returns 'lognormal'
```

#### lognormal.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = lognormal.PRNG;
// returns <Function>
```

#### lognormal.seed

The value used to seed `lognormal()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = lognormal( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = lognormal.factory( 2.0, 2.0, {
    'seed': lognormal.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = lognormal.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### lognormal.seedLength

Length of generator seed.

```javascript
var len = lognormal.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = lognormal.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### lognormal.state

Writable property for getting and setting the generator state.

```javascript
var r = lognormal( 2.0, 5.0 );
// returns <number>

r = lognormal( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = lognormal.state;
// returns <Uint32Array>

r = lognormal( 2.0, 5.0 );
// returns <number>

r = lognormal( 2.0, 5.0 );
// returns <number>

// Reset the state:
lognormal.state = state;

// Replay the last two pseudorandom numbers:
r = lognormal( 2.0, 5.0 );
// returns <number>

r = lognormal( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = lognormal.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### lognormal.stateLength

Length of generator state.

```javascript
var len = lognormal.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = lognormal.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### lognormal.byteLength

Size (in bytes) of generator state.

```javascript
var sz = lognormal.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = lognormal.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### lognormal.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = lognormal.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = lognormal.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lognormal = require( '@stdlib/random-base-lognormal' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( lognormal( 0.0, 1.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = lognormal.factory( 5.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = lognormal.factory( 0.0, 1.0, {
    'seed': lognormal.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-array/lognormal`][@stdlib/random/array/lognormal]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="package-name">[`@stdlib/random-iter/lognormal`][@stdlib/random/iter/lognormal]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="package-name">[`@stdlib/random-streams/lognormal`][@stdlib/random/streams/lognormal]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a lognormal distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-lognormal.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-lognormal

[test-image]: https://github.com/stdlib-js/random-base-lognormal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-lognormal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-lognormal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-lognormal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-lognormal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-lognormal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-lognormal/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-lognormal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-lognormal/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-lognormal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-lognormal/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-lognormal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-lognormal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-lognormal/main/LICENSE

[lognormal]: https://en.wikipedia.org/wiki/Log-normal_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/lognormal]: https://github.com/stdlib-js/random-array-lognormal

[@stdlib/random/iter/lognormal]: https://github.com/stdlib-js/random-iter-lognormal

[@stdlib/random/streams/lognormal]: https://github.com/stdlib-js/random-streams-lognormal

<!-- </related-links> -->

</section>

<!-- /.links -->
