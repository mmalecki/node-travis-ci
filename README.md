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

