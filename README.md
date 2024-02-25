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

# Probability Distributions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) probability distribution modules.



<section class="usage">

## Usage

To use in Observable,

```javascript
dists = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dists = require( 'path/to/vendor/umd/stats-base-dists/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dists;
})();
</script>
```

#### dists

Namespace containing "base" (i.e., lower-level) probability distribution modules.

```javascript
var distributions = dists;
// returns {...}
```

### Continuous Distributions

<!-- <toc keywords="+continuous, -discrete"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine`][@stdlib/stats/base/dists/arcsine]</span><span class="delimiter">: </span><span class="description">arcsine distribution.</span>
-   <span class="signature">[`beta`][@stdlib/stats/base/dists/beta]</span><span class="delimiter">: </span><span class="description">beta distribution.</span>
-   <span class="signature">[`betaprime`][@stdlib/stats/base/dists/betaprime]</span><span class="delimiter">: </span><span class="description">beta prime distribution.</span>
-   <span class="signature">[`cauchy`][@stdlib/stats/base/dists/cauchy]</span><span class="delimiter">: </span><span class="description">Cauchy distribution.</span>
-   <span class="signature">[`chi`][@stdlib/stats/base/dists/chi]</span><span class="delimiter">: </span><span class="description">Chi distribution.</span>
-   <span class="signature">[`chisquare`][@stdlib/stats/base/dists/chisquare]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution.</span>
-   <span class="signature">[`cosine`][@stdlib/stats/base/dists/cosine]</span><span class="delimiter">: </span><span class="description">raised cosine distribution.</span>
-   <span class="signature">[`erlang`][@stdlib/stats/base/dists/erlang]</span><span class="delimiter">: </span><span class="description">Erlang distribution.</span>
-   <span class="signature">[`exponential`][@stdlib/stats/base/dists/exponential]</span><span class="delimiter">: </span><span class="description">exponential distribution.</span>
-   <span class="signature">[`f`][@stdlib/stats/base/dists/f]</span><span class="delimiter">: </span><span class="description">fisher's F distribution.</span>
-   <span class="signature">[`frechet`][@stdlib/stats/base/dists/frechet]</span><span class="delimiter">: </span><span class="description">Fréchet distribution.</span>
-   <span class="signature">[`gamma`][@stdlib/stats/base/dists/gamma]</span><span class="delimiter">: </span><span class="description">gamma distribution.</span>
-   <span class="signature">[`gumbel`][@stdlib/stats/base/dists/gumbel]</span><span class="delimiter">: </span><span class="description">Gumbel distribution.</span>
-   <span class="signature">[`invgamma`][@stdlib/stats/base/dists/invgamma]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy`][@stdlib/stats/base/dists/kumaraswamy]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace`][@stdlib/stats/base/dists/laplace]</span><span class="delimiter">: </span><span class="description">Laplace distribution.</span>
-   <span class="signature">[`levy`][@stdlib/stats/base/dists/levy]</span><span class="delimiter">: </span><span class="description">Lévy distribution.</span>
-   <span class="signature">[`logistic`][@stdlib/stats/base/dists/logistic]</span><span class="delimiter">: </span><span class="description">logistic distribution.</span>
-   <span class="signature">[`lognormal`][@stdlib/stats/base/dists/lognormal]</span><span class="delimiter">: </span><span class="description">lognormal distribution.</span>
-   <span class="signature">[`normal`][@stdlib/stats/base/dists/normal]</span><span class="delimiter">: </span><span class="description">normal distribution.</span>
-   <span class="signature">[`pareto1`][@stdlib/stats/base/dists/pareto-type1]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution.</span>
-   <span class="signature">[`rayleigh`][@stdlib/stats/base/dists/rayleigh]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution.</span>
-   <span class="signature">[`signrank`][@stdlib/stats/base/dists/signrank]</span><span class="delimiter">: </span><span class="description">distribution of the Wilcoxon signed rank test statistic.</span>
-   <span class="signature">[`tukey`][@stdlib/stats/base/dists/studentized-range]</span><span class="delimiter">: </span><span class="description">Studentized range distribution.</span>
-   <span class="signature">[`t`][@stdlib/stats/base/dists/t]</span><span class="delimiter">: </span><span class="description">Student's t distribution.</span>
-   <span class="signature">[`triangular`][@stdlib/stats/base/dists/triangular]</span><span class="delimiter">: </span><span class="description">triangular distribution.</span>
-   <span class="signature">[`truncatedNormal`][@stdlib/stats/base/dists/truncated-normal]</span><span class="delimiter">: </span><span class="description">truncated normal distribution.</span>
-   <span class="signature">[`uniform`][@stdlib/stats/base/dists/uniform]</span><span class="delimiter">: </span><span class="description">continuous uniform distribution.</span>

</div>

<!-- </toc> -->

### Discrete Distributions

<!-- <toc keywords="-continuous, +discrete"> -->

<div class="namespace-toc">

-   <span class="signature">[`bernoulli`][@stdlib/stats/base/dists/bernoulli]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution.</span>
-   <span class="signature">[`binomial`][@stdlib/stats/base/dists/binomial]</span><span class="delimiter">: </span><span class="description">binomial distribution.</span>
-   <span class="signature">[`discreteUniform`][@stdlib/stats/base/dists/discrete-uniform]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution.</span>
-   <span class="signature">[`geometric`][@stdlib/stats/base/dists/geometric]</span><span class="delimiter">: </span><span class="description">geometric distribution.</span>
-   <span class="signature">[`hypergeometric`][@stdlib/stats/base/dists/hypergeometric]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution.</span>
-   <span class="signature">[`negativeBinomial`][@stdlib/stats/base/dists/negative-binomial]</span><span class="delimiter">: </span><span class="description">negative binomial distribution.</span>
-   <span class="signature">[`poisson`][@stdlib/stats/base/dists/poisson]</span><span class="delimiter">: </span><span class="description">Poisson distribution.</span>

</div>

<!-- </toc> -->

### Other

<!-- <toc keywords="+degenerate"> -->

<div class="namespace-toc">

-   <span class="signature">[`degenerate`][@stdlib/stats/base/dists/degenerate]</span><span class="delimiter">: </span><span class="description">degenerate distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( dists ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists

[test-image]: https://github.com/stdlib-js/stats-base-dists/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-base-dists/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/base/dists/degenerate]: https://github.com/stdlib-js/stats-base-dists-degenerate/tree/umd

[@stdlib/stats/base/dists/bernoulli]: https://github.com/stdlib-js/stats-base-dists-bernoulli/tree/umd

[@stdlib/stats/base/dists/binomial]: https://github.com/stdlib-js/stats-base-dists-binomial/tree/umd

[@stdlib/stats/base/dists/discrete-uniform]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform/tree/umd

[@stdlib/stats/base/dists/geometric]: https://github.com/stdlib-js/stats-base-dists-geometric/tree/umd

[@stdlib/stats/base/dists/hypergeometric]: https://github.com/stdlib-js/stats-base-dists-hypergeometric/tree/umd

[@stdlib/stats/base/dists/negative-binomial]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/tree/umd

[@stdlib/stats/base/dists/poisson]: https://github.com/stdlib-js/stats-base-dists-poisson/tree/umd

[@stdlib/stats/base/dists/arcsine]: https://github.com/stdlib-js/stats-base-dists-arcsine/tree/umd

[@stdlib/stats/base/dists/beta]: https://github.com/stdlib-js/stats-base-dists-beta/tree/umd

[@stdlib/stats/base/dists/betaprime]: https://github.com/stdlib-js/stats-base-dists-betaprime/tree/umd

[@stdlib/stats/base/dists/cauchy]: https://github.com/stdlib-js/stats-base-dists-cauchy/tree/umd

[@stdlib/stats/base/dists/chi]: https://github.com/stdlib-js/stats-base-dists-chi/tree/umd

[@stdlib/stats/base/dists/chisquare]: https://github.com/stdlib-js/stats-base-dists-chisquare/tree/umd

[@stdlib/stats/base/dists/cosine]: https://github.com/stdlib-js/stats-base-dists-cosine/tree/umd

[@stdlib/stats/base/dists/erlang]: https://github.com/stdlib-js/stats-base-dists-erlang/tree/umd

[@stdlib/stats/base/dists/exponential]: https://github.com/stdlib-js/stats-base-dists-exponential/tree/umd

[@stdlib/stats/base/dists/f]: https://github.com/stdlib-js/stats-base-dists-f/tree/umd

[@stdlib/stats/base/dists/frechet]: https://github.com/stdlib-js/stats-base-dists-frechet/tree/umd

[@stdlib/stats/base/dists/gamma]: https://github.com/stdlib-js/stats-base-dists-gamma/tree/umd

[@stdlib/stats/base/dists/gumbel]: https://github.com/stdlib-js/stats-base-dists-gumbel/tree/umd

[@stdlib/stats/base/dists/invgamma]: https://github.com/stdlib-js/stats-base-dists-invgamma/tree/umd

[@stdlib/stats/base/dists/kumaraswamy]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy/tree/umd

[@stdlib/stats/base/dists/laplace]: https://github.com/stdlib-js/stats-base-dists-laplace/tree/umd

[@stdlib/stats/base/dists/levy]: https://github.com/stdlib-js/stats-base-dists-levy/tree/umd

[@stdlib/stats/base/dists/logistic]: https://github.com/stdlib-js/stats-base-dists-logistic/tree/umd

[@stdlib/stats/base/dists/lognormal]: https://github.com/stdlib-js/stats-base-dists-lognormal/tree/umd

[@stdlib/stats/base/dists/normal]: https://github.com/stdlib-js/stats-base-dists-normal/tree/umd

[@stdlib/stats/base/dists/pareto-type1]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/tree/umd

[@stdlib/stats/base/dists/rayleigh]: https://github.com/stdlib-js/stats-base-dists-rayleigh/tree/umd

[@stdlib/stats/base/dists/signrank]: https://github.com/stdlib-js/stats-base-dists-signrank/tree/umd

[@stdlib/stats/base/dists/studentized-range]: https://github.com/stdlib-js/stats-base-dists-studentized-range/tree/umd

[@stdlib/stats/base/dists/t]: https://github.com/stdlib-js/stats-base-dists-t/tree/umd

[@stdlib/stats/base/dists/triangular]: https://github.com/stdlib-js/stats-base-dists-triangular/tree/umd

[@stdlib/stats/base/dists/truncated-normal]: https://github.com/stdlib-js/stats-base-dists-truncated-normal/tree/umd

[@stdlib/stats/base/dists/uniform]: https://github.com/stdlib-js/stats-base-dists-uniform/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
