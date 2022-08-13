# CompanionInABox-Subgraph

### Subgraph Studio: https://api.studio.thegraph.com/query/31368/companioninabox/v1.8

---

### Query Sample
```
{
  tokens(first: 5) {
    id
    tokenID
    tokenURI
    externalURL
  }
  users(first: 5) {
    id
    tokens {
      id
    }
  }
}
```