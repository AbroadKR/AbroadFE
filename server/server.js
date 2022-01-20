require('dotenv').config();
const express = require('express');
const { ObjectId } = require('mongodb');
const path = require('path');
const app = express();
const {
  table,
  forUniv,
  commentModel,
  reviewModel,
  userModel,
  allBoard,
  asiaBoard,
  southAmericaBoard,
  northAmericaBoard,
  africaBoard,
  europeBoard,
  oceaniaBoard,
} = require('./db/database');
const { PORT } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.text());

app.listen(PORT, () => {
  console.log('Listening on 8080 Port💡');
});

app.get('/api/getKoUnivs', (req, res) => {
  table
    .find({}, (err, koUnivs) => {
      if (err) {
        res.end();
        return;
      }
      res.json(koUnivs);
    })
    .select('koUniv')
    .distinct('koUniv');
});

app.post('/api/getContinents', (req, res) => {
  const {
    body: { selKoUniv },
  } = req;
  table
    .find({ koUniv: selKoUniv }, (err, tables) => {
      if (err) {
        res.end();
        return;
      }
      res.json(tables);
    })
    .select('continent')
    .distinct('continent');
});

app.post('/api/getCountries', (req, res) => {
  const {
    body: { selKoUniv, selContinent },
  } = req;
  const continentList = selContinent.split(',');
  table
    .find(
      {
        koUniv: selKoUniv,
        continent: { $in: continentList },
      },
      (err, tables) => {
        if (err) {
          res.end();
          return;
        }
        res.json(tables);
      }
    )
    .select('country')
    .distinct('country');
});

app.post('/api/getTables', (req, res) => {
  const data = req.body;
  if (!data['continent'] && !data['country']) {
    table
      .find({ koUniv: data['koUniv'] }, (err, tables) => {
        if (err) {
          res.end();
          return;
        }
        res.json(tables);
      })
      .select('continent country forUniv_eng forUniv_kor TO period');
  } else if (data['continent'] && !data['country']) {
    table
      .find(
        {
          koUniv: data['koUniv'],
          continent: { $in: data['continent'] },
        },
        (err, tables) => {
          if (err) {
            res.end();
            return;
          }
          res.json(tables);
        }
      )
      .select('continent country forUniv_eng forUniv_kor TO period');
  } else {
    table
      .find(
        {
          koUniv: data['koUniv'],
          continent: { $in: data['continent'] },
          country: { $in: data['country'] },
        },
        (err, tables) => {
          if (err) {
            res.end();
            return;
          }
          res.json(tables);
        }
      )
      .select('continent country forUniv_eng forUniv_kor TO period');
  }
});

// 대학평가 -> 검색창에서 해외대학 이름으로 검색할 때 (onChange)
app.get('/api/getForUnivs', (req, res) => {
  const {
    query: { query },
  } = req;
  if (query.length <= 2) {
    forUniv
      .find({ forUniv: { $regex: query, $options: 'i' } }, (err, tables) => {
        if (err) {
          res.end();
          return;
        }
        res.json(tables);
      })
      .select('forUniv')
      .limit(10)
      .sort({ forUniv: 1 });
  } else {
    forUniv
      .find({ forUniv: { $regex: query, $options: 'i' } }, (err, tables) => {
        if (err) {
          res.end();
          return;
        }
        res.json(tables);
      })
      .select('forUniv');
  }
});

app.post('/api/getReviews', (req, res) => {
  const data = req.body;
  forUniv
    .find({ forUniv: data.forUniv }, (err, details) => {
      if (err) {
        res.end();
        return;
      }
      res.json(details);
    })
    .populate({ path: 'reviews', populate: { path: 'owner' } });
});

app.get('/api/getPosts', (req, res) => {
  const {
    query: { board, category },
  } = req;
  let model;
  if (board === 'all') {
    model = allBoard;
  } else if (board === 'sa') {
    model = southAmericaBoard;
  } else if (board === 'na') {
    model = northAmericaBoard;
  } else if (board === 'asia') {
    model = asiaBoard;
  } else if (board === 'africa') {
    model = africaBoard;
  } else if (board === 'europe') {
    model = europeBoard;
  } else if (board === 'oceania') {
    model = oceaniaBoard;
  }
  if (board === 'all') {
    model
      .find({ category: board }, (err, result) => {
        if (err) {
          res.end();
          return;
        }
        res.json(result);
      })
      .populate('owner')
      .populate('comments');
    return;
  } else {
    model
      .find({ category: category }, (err, result) => {
        if (err) {
          res.end();
          return;
        }
        res.json(result);
      })
      .populate('owner')
      .populate('comments');
  }
  return;
});

app.get('/api/getSinglePost', (req, res) => {
  const {
    query: { board, category, id },
  } = req;
  let model;
  if (board === 'all') {
    model = allBoard;
  } else if (board === 'sa') {
    model = southAmericaBoard;
  } else if (board === 'na') {
    model = northAmericaBoard;
  } else if (board === 'asia') {
    model = asiaBoard;
  } else if (board === 'africa') {
    model = africaBoard;
  } else if (board === 'europe') {
    model = europeBoard;
  } else if (board === 'oceania') {
    model = oceaniaBoard;
  }
  model
    .findOne({ _id: id }, (err, post) => {
      if (err) {
        res.sendStatus(404);
        return;
      }
      res.json(post);
    })
    .populate('owner')
    .populate({ path: 'comments', populate: { path: 'owner' } });
  return;
});

app.post('/api/postBoard', (req, res) => {
  const {
    body: { userObject, board, category, post },
  } = req;
  let model;
  if (board === 'all') {
    model = allBoard;
  } else if (board === 'sa') {
    model = southAmericaBoard;
  } else if (board === 'na') {
    model = northAmericaBoard;
  } else if (board === 'asia') {
    model = asiaBoard;
  } else if (board === 'africa') {
    model = africaBoard;
  } else if (board === 'europe') {
    model = europeBoard;
  } else if (board === 'oceania') {
    model = oceaniaBoard;
  }
  if (board === 'all') {
    model.create(
      {
        title: post.title,
        owner: ObjectId('61c474fbf5f1305f4fc84576'),
        category: 'all',
        content: post.body,
        like: 0,
        view: 0,
        createdAt: post.date,
        updatedAt: post.date,
        comments: [],
      },
      (err) => {
        if (err) {
          console.log(err);
          res.send(err);
          return;
        }
        res.sendStatus(201);
      }
    );
  } else {
    model.create(
      {
        title: post.title,
        owner: ObjectId('61c474fbf5f1305f4fc84576'),
        category: category,
        content: post.body,
        like: 0,
        view: 0,
        createdAt: post.date,
        updatedAt: post.date,
        comments: [],
      },
      (err) => {
        if (err) {
          console.log(err);
          res.send(err);
          return;
        }
        res.sendStatus(201);
      }
    );
  }
  return;
});

app.post('/api/postComment', (req, res) => {
  const {
    body: { category, continent, owner, target, comment },
  } = req;
  let model;
  let newCommentId;
  if (continent === 'all') {
    model = allBoard;
  } else if (continent === 'sa') {
    model = southAmericaBoard;
  } else if (continent === 'na') {
    model = northAmericaBoard;
  } else if (continent === 'asia') {
    model = asiaBoard;
  } else if (continent === 'africa') {
    model = africaBoard;
  } else if (continent === 'europe') {
    model = europeBoard;
  } else if (continent === 'oceania') {
    model = oceaniaBoard;
  }
  commentModel.create(
    {
      owner: ObjectId(owner),
      target,
      text: comment.text,
      createdAt: comment.createdAt,
      like: 0,
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.send(err);
        return;
      }
      res.sendStatus(200);
      newCommentId = doc._id;
      userModel
        .findByIdAndUpdate(owner, { $push: { comments: newCommentId } })
        .exec();
      model
        .findByIdAndUpdate(target, { $push: { comments: newCommentId } })
        .exec();
      return;
    }
  );
  return;
});

app.get('/api/getPosts/search', (req, res) => {
  const {
    query: { target, keyword },
  } = req;
  free.find({ title: { $regex: keyword } }, (err, frees) => {
    if (err) {
      res.end();
      return;
    }
    res.json(frees);
  });
});
