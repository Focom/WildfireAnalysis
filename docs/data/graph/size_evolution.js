var map = function () {
  emit(this.FIRE_YEAR, this.FIRE_SIZE)
};

var reduce = function (key, values) {
  return Array.sum(values)
};

db.Fires.mapReduce(map, reduce, {out: {inline: 1}})

var size_Evolution = {
  'results': [
    {"name":"Quantity of acre burned each year"},
      {
        '_id': 1992,
        'value': 2199958.001000616
      },
      {
        '_id': 1993,
        'value': 2191696.003000703
      },
      {
        '_id': 1994,
        'value': 4116675.529001074
      },
      {
        '_id': 1995,
        'value': 2049585.0580006833
      },
      {
        '_id': 1996,
        'value': 6005155.708997327
      },
      {
        '_id': 1997,
        'value': 3214635.310000685
      },
      {
        '_id': 1998,
        'value': 2011102.4000106575
      },
      {
        '_id': 1999,
        'value': 6080199.71528615
      },
      {
        '_id': 2000,
        'value': 7639498.6439948045
      },
      {
        '_id': 2001,
        'value': 3724072.30400108
      },
      {
        '_id': 2002,
        'value': 6803258.397754413
      },
      {
        '_id': 2003,
        'value': 4483572.945758978
      },
      {
        '_id': 2004,
        'value': 8234208.17413507
      },
      {
        '_id': 2005,
        'value': 9665105.128013862
      },
      {
        '_id': 2006,
        'value': 10043497.911544891
      },
      {
        '_id': 2007,
        'value': 9265428.728143834
      },
      {
        '_id': 2008,
        'value': 5406532.106677623
      },
      {
        '_id': 2009,
        'value': 6057166.106711094
      },
      {
        '_id': 2010,
        'value': 3493455.2156902812
      },
      {
        '_id': 2011,
        'value': 9623597.287495853
      },
      {
        '_id': 2012,
        'value': 9439888.45199436
      },
      {
        '_id': 2013,
        'value': 4492502.414909765
      },
      {
        '_id': 2014,
        'value': 3673490.39271306
      },
      {
        '_id': 2015,
        'value': 10218267.617792603
      }
    ],
  'timeMillis': 17648,
  'counts': {
      'input': 1880465,
      'emit': 1880465,
      'reduce': 12151,
      'output': 24
    },
  'ok': 1
}
