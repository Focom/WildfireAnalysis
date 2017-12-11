1/ annee

db.Fires.createIndex({
  {
    FIRE_YEAR:1
  }
})

2/ annee etat
db.Fires.createIndex({
  {
    FIRE_YEAR:1,
    STATE:1
  }
})

3/par cause
db.Fires.createIndex({
  {
    STAT_CAUSE_DESCR:1
  }
})