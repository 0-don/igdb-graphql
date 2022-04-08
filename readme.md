<p align="center">
  <a href="https://github.com/Don-Cryptus/traefik">
    <img src="img/igdb-graphql.png" alt="Logo" width=400 />
  </a>

  <p align="center">
    <h1 align="center">igdb-graphql</h1>

  <p align="center">
    <a  href="https://studio.apollographql.com/sandbox/explorer?endpoint=https://igdb.myngz.com/">Test it out</a>
    ·
    <a  href="https://github.com/Don-Cryptus/igdb-graphql/issues">Report Bug</a>
    ·
    <a href="https://github.com/Don-Cryptus/igdb-graphql/issues">Request Feature</a>
  </p>

</p>

IGDB.com wrapper Graphql API with working relation fetch.

### About The Project

Currently only games inputs finished, everything else works fine feel free to add more to it.


### Example

- **Query**
```graphql
query Games($where: GamesWhereInput, $sort: GamesSortInput, $limit: Int, $offset: Int) {
  games(where: $where, sort: $sort, limit: $limit, offset: $offset) {
    id
    aggregated_rating
    aggregated_rating_count
    category
    created_at
    first_release_date
    follows
    hypes
    name
    rating
    rating_count
    slug
    status
    storyline
    summary
    tags
    total_rating
    total_rating_count
    updated_at
    url
    version_title
    checksum
  }
}
```
- **Variables**
```json
{
  "where": {
    "AND": [
      {
        "follows": {
          "gt": 100
        },
        "hypes": {
          "gt": 100
        },
        "OR": [
          {
            "status": {
              "equals": null
            }
          }
        ]
      }
    ]
  },
  "sort": {
    "id": "asc"
  },
  "limit": 100,
  "offset": 10
}
```
