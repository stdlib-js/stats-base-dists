/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import arcsine = require( '@stdlib/stats-base-dists-arcsine' );
import bernoulli = require( '@stdlib/stats-base-dists-bernoulli' );
import beta = require( '@stdlib/stats-base-dists-beta' );
import betaprime = require( '@stdlib/stats-base-dists-betaprime' );
import binomial = require( '@stdlib/stats-base-dists-binomial' );
import cauchy = require( '@stdlib/stats-base-dists-cauchy' );
import chi = require( '@stdlib/stats-base-dists-chi' );
import chisquare = require( '@stdlib/stats-base-dists-chisquare' );
import cosine = require( '@stdlib/stats-base-dists-cosine' );
import degenerate = require( '@stdlib/stats-base-dists-degenerate' );
import discreteUniform = require( '@stdlib/stats-base-dists-discrete-uniform' );
import erlang = require( '@stdlib/stats-base-dists-erlang' );
import exponential = require( '@stdlib/stats-base-dists-exponential' );
import f = require( '@stdlib/stats-base-dists-f' );
import frechet = require( '@stdlib/stats-base-dists-frechet' );
import gamma = require( '@stdlib/stats-base-dists-gamma' );
import geometric = require( '@stdlib/stats-base-dists-geometric' );
import gumbel = require( '@stdlib/stats-base-dists-gumbel' );
import hypergeometric = require( '@stdlib/stats-base-dists-hypergeometric' );
import invgamma = require( '@stdlib/stats-base-dists-invgamma' );
import kumaraswamy = require( '@stdlib/stats-base-dists-kumaraswamy' );
import laplace = require( '@stdlib/stats-base-dists-laplace' );
import levy = require( '@stdlib/stats-base-dists-levy' );
import logistic = require( '@stdlib/stats-base-dists-logistic' );
import lognormal = require( '@stdlib/stats-base-dists-lognormal' );
import negativeBinomial = require( '@stdlib/stats-base-dists-negative-binomial' );
import normal = require( '@stdlib/stats-base-dists-normal' );
import pareto1 = require( '@stdlib/stats-base-dists-pareto-type1' );
import poisson = require( '@stdlib/stats-base-dists-poisson' );
import rayleigh = require( '@stdlib/stats-base-dists-rayleigh' );
import signrank = require( '@stdlib/stats-base-dists-signrank' );
import tukey = require( '@stdlib/stats-base-dists-studentized-range' );
import t = require( '@stdlib/stats-base-dists-t' );
import triangular = require( '@stdlib/stats-base-dists-triangular' );
import truncatedNormal = require( '@stdlib/stats-base-dists-truncated-normal' );
import uniform = require( '@stdlib/stats-base-dists-uniform' );
import weibull = require( '@stdlib/stats-base-dists-weibull' );

/**
* Interface describing the `dists` namespace.
*/
interface Namespace {
	/**
	* Arcsine distribution.
	*/
	arcsine: typeof arcsine;

	/**
	* Bernoulli distribution.
	*/
	bernoulli: typeof bernoulli;

	/**
	* Beta distribution.
	*/
	beta: typeof beta;

	/**
	* Beta prime distribution.
	*/
	betaprime: typeof betaprime;

	/**
	* Binomial distribution.
	*/
	binomial: typeof binomial;

	/**
	* Cauchy distribution.
	*/
	cauchy: typeof cauchy;

	/**
	* Chi distribution.
	*/
	chi: typeof chi;

	/**
	* Chi-squared distribution.
	*/
	chisquare: typeof chisquare;

	/**
	* Raised cosine distribution.
	*/
	cosine: typeof cosine;

	/**
	* Degenerate distribution.
	*/
	degenerate: typeof degenerate;

	/**
	* Discrete uniform distribution.
	*/
	discreteUniform: typeof discreteUniform;

	/**
	* Erlang distribution.
	*/
	erlang: typeof erlang;

	/**
	* Exponential distribution.
	*/
	exponential: typeof exponential;

	/**
	* Fisher's F distribution.
	*/
	f: typeof f;

	/**
	* Fréchet distribution.
	*/
	frechet: typeof frechet;

	/**
	* Gamma distribution.
	*/
	gamma: typeof gamma;

	/**
	* Geometric distribution.
	*/
	geometric: typeof geometric;

	/**
	* Gumbel distribution.
	*/
	gumbel: typeof gumbel;

	/**
	* Hypergeometric distribution.
	*/
	hypergeometric: typeof hypergeometric;

	/**
	* Inverse gamma distribution.
	*/
	invgamma: typeof invgamma;

	/**
	* Kumaraswamy's double bounded distribution.
	*/
	kumaraswamy: typeof kumaraswamy;

	/**
	* Laplace distribution.
	*/
	laplace: typeof laplace;

	/**
	* Lévy distribution.
	*/
	levy: typeof levy;

	/**
	* Logistic distribution.
	*/
	logistic: typeof logistic;

	/**
	* Lognormal distribution.
	*/
	lognormal: typeof lognormal;

	/**
	* Negative binomial distribution.
	*/
	negativeBinomial: typeof negativeBinomial;

	/**
	* Normal distribution.
	*/
	normal: typeof normal;

	/**
	* Pareto (Type I) distribution.
	*/
	pareto1: typeof pareto1;

	/**
	* Poisson distribution.
	*/
	poisson: typeof poisson;

	/**
	* Rayleigh distribution.
	*/
	rayleigh: typeof rayleigh;

	/**
	* Distribution of Wilcoxon signed rank test statistic.
	*/
	signrank: typeof signrank;

	/**
	* Studentized range distribution.
	*/
	tukey: typeof tukey;

	/**
	* Student's t distribution.
	*/
	t: typeof t;

	/**
	* Triangular distribution.
	*/
	triangular: typeof triangular;

	/**
	* Truncated normal distribution.
	*/
	truncatedNormal: typeof truncatedNormal;

	/**
	* Uniform distribution.
	*/
	uniform: typeof uniform;

	/**
	* Weibull distribution.
	*/
	weibull: typeof weibull;
}

/**
* Base (i.e., lower-level) probability distributions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
