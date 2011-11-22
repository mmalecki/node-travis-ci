# node-travis-ci
Copyright (C) 2011 by Maciej Małecki  
MIT License (see LICENSE file)

**travis-ci** is a thin wrapper around [Travis CI](http://travis-ci.org) [API](http://about.travis-ci.org/docs/dev/api/).

## Installation

    npm install travis-ci

## Usage
If not stated otherwise, callback takes 3 arguments:

  * an error when applicable
  * `http.ClientResponse` object
  * JSON output

### travisCI.listRepositories(callback)
Lists last repositories (these you'd see at the left panel on
[Travis CI webpage](http://travis-ci.org)).

Output format is:

```json
[ { id: 891,
   last_build_id: 329717,
   last_build_number: '1392',
   last_build_started_at: '2011-11-21T23:09:20Z',
   last_build_finished_at: null,
   last_build_status: null,
   last_build_result: null,
   slug: 'rails/rails' },
 ...
 { id: 1827,
   last_build_id: 329921,
   last_build_number: '371',
   last_build_started_at: '2011-11-21T22:58:09Z',
   last_build_finished_at: '2011-11-21T23:00:27Z',
   last_build_status: 0,
   last_build_result: 0,
   slug: 'Shopify/batman' },
]
```

### travisCI.getRepository(owner, name, callback)
Get record for `<owner>/<name>` repository.

Output format is (when invoked as `travisCI.getRepository('flatiron', 'nconf', cb)`):

```json
{ id: 3935,
  last_build_id: 326510,
  last_build_number: '7',
  last_build_started_at: '2011-11-21T01:00:18Z',
  last_build_finished_at: '2011-11-21T01:00:45Z',
  last_build_status: 0,
  last_build_result: 0,
  slug: 'flatiron/nconf' }
```

### travisCI.listBuilds(owner, name, callback)
List recent builds for `<owner>/<name>` repository.

Output format is (when invoked as `travisCI.listBuild('flatiron', 'nconf', cb)`):

```json
[ { id: 326510,
    repository_id: 3935,
    number: '7',
    state: 'finished',
    started_at: '2011-11-21T01:00:18Z',
    finished_at: '2011-11-21T01:00:45Z',
    config:
     { language: 'node_js',
       node_js: [Object],
       notifications: [Object],
       '.configured': 'true' },
    status: 0,
    result: 0,
    matrix: [ [Object], [Object] ],
    commit: '29383b1ed47ba1d9ae4da2d80e89b6d9a1476841',
    branch: '0.5.x',
    message: '[minor] Dont allow `.set()` calls to change values in readOnly stores: argv, env, and literal',
    committed_at: '2011-11-21T01:00:04Z',
    committer_name: null,
    committer_email: null,
    author_name: 'indexzero',
    author_email: 'charlie.robbins@gmail.com',
    compare_url: 'https://github.com/flatiron/nconf/compare/42b0c4c...29383b1' },
  ...,
  { id: 325967,
    repository_id: 3935,
    number: '5',
    state: 'finished',
    started_at: '2011-11-20T21:21:36Z',
    finished_at: '2011-11-20T21:21:58Z',
    config:
     { language: 'node_js',
       node_js: [Object],
       notifications: [Object],
       '.configured': 'true' },
    status: 0,
    result: 0,
    matrix: [ [Object], [Object] ],
    commit: 'ea5caa200a664d470792d76e1059f9d7d3c42e8d',
    branch: '0.5.x',
    message: '[refactor] Refactor to make using nconf more fluent.',
    committed_at: '2011-11-20T21:21:09Z',
    committer_name: null,
    committer_email: null,
    author_name: 'indexzero',
    author_email: 'charlie.robbins@gmail.com',
    compare_url: 'https://github.com/flatiron/nconf/commit/ea5caa2' }
]
```

### travisCI.getBuild(owner, repo, id, callback)
Get build record for `id` build of `<owner>/<repo>`.

Output format is (when invoked as travisCI.getBuild('flatiron', 'nconf', 325967, cb)):

```json
{ id: 325967,
  repository_id: 3935,
  number: '5',
  state: 'finished',
  started_at: '2011-11-20T21:21:36Z',
  finished_at: '2011-11-20T21:21:58Z',
  config:
   { language: 'node_js',
     node_js: [ '0.4', '0.6' ],
     notifications: { email: [Object], irc: 'irc.freenode.org#nodejitsu' },
     '.configured': 'true' },
  status: 0,
  result: 0,
  matrix:
   [ { id: 325968,
       repository_id: 3935,
       number: '5.1',
       state: 'finished',
       started_at: '2011-11-20T21:21:36Z',
       finished_at: '2011-11-20T21:21:58Z',
       config: [Object],
       status: 0,
       log: 'Using worker: nodejs1.worker.travis-ci.org:worker-3 (...)'
       result: 0,
       parent_id: 325967,
       commit: 'ea5caa200a664d470792d76e1059f9d7d3c42e8d',
       branch: '0.5.x',
       message: '[refactor] Refactor to make using nconf more fluent.',
       committed_at: '2011-11-20T21:21:09Z',
       committer_name: null,
       committer_email: null,
       author_name: 'indexzero',
       author_email: 'charlie.robbins@gmail.com',
       compare_url: 'https://github.com/flatiron/nconf/commit/ea5caa2' },
     { id: 325969,
       repository_id: 3935,
       number: '5.2',
       state: 'finished',
       started_at: '2011-11-20T21:21:36Z',
       finished_at: '2011-11-20T21:21:58Z',
       config: [Object],
       status: 0,
       log: 'Using worker: nodejs1.worker.travis-ci.org:worker-1 (...)'
       result: 0,
       parent_id: 325967,
       commit: 'ea5caa200a664d470792d76e1059f9d7d3c42e8d',
       branch: '0.5.x',
       message: '[refactor] Refactor to make using nconf more fluent.',
       committed_at: '2011-11-20T21:21:09Z',
       committer_name: null,
       committer_email: null,
       author_name: 'indexzero',
       author_email: 'charlie.robbins@gmail.com',
       compare_url: 'https://github.com/flatiron/nconf/commit/ea5caa2' } ],
  commit: 'ea5caa200a664d470792d76e1059f9d7d3c42e8d',
  branch: '0.5.x',
  message: '[refactor] Refactor to make using nconf more fluent.',
  committed_at: '2011-11-20T21:21:09Z',
  committer_name: null,
  committer_email: null,
  author_name: 'indexzero',
  author_email: 'charlie.robbins@gmail.com',
  compare_url: 'https://github.com/flatiron/nconf/commit/ea5caa2' }
```

