require('dotenv').config();
const { MONGODB_URI } = process.env;
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(`${MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!');
});

// lang은, 학교별로 그 기준점이 상이할텐데 이 부분 어떻게 할 지 고민해보기
const tableSchema = new Schema({
  id: Schema.Types.ObjectId,
  koUniv: { type: String, required: true },
  continent: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  forUniv: { type: String, required: true },
  TO: { type: Number, required: true },
  period: { type: String, required: true },
  lang: { type: String, required: true },
});

const forUnivSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    forUniv: { type: String, required: true },
    continent: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [
      { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'review' },
    ],
  },
  { versionKey: false }
);

const postSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    title: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'user',
    },
    category: { type: String, required: true },
    content: { type: String, required: true },
    like: { type: Number, default: 0, required: true },
    view: { type: Number, default: 0, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date, default: Date.now, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
  },
  { versionKey: false }
);

// 새로운 review 스키마
const reviewSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    avg_point: { type: Number, required: true },
    text: { type: String, required: true },
    korean: { type: Number, required: true },
    difficulty: { type: Number, required: true },
    avg_cost: { type: Number, required: true },
    transportation: { type: Number, required: true },
    safety: { type: Number, required: true },
  },
  { versionKey: false }
);

// Comment 스키마
const commentSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    target: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    text: { type: String, required: true },
    createdAt: { type: String, required: true },
  },
  { versionKey: false }
);

// 임시 User 스키마
const userSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    // posts: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
);

tableSchema.set('collection', 'table');
forUnivSchema.set('collection', 'forUniv');
reviewSchema.set('collection', 'review');
commentSchema.set('collection', 'comment');
userSchema.set('collection', 'user');

const table = mongoose.model('table', tableSchema);
const forUniv = mongoose.model('forUniv', forUnivSchema);
const comment = mongoose.model('comment', commentSchema);
const review = mongoose.model('review', reviewSchema);
const user = mongoose.model('user', userSchema);
const allBoard = mongoose.model('allBoard', postSchema, 'board_All');
const asiaBoard = mongoose.model('asiaBoard', postSchema, 'board_Asia');
const southAmericaBoard = mongoose.model(
  'southAmericaBoard',
  postSchema,
  'board_SouthAmerica'
);
const northAmericaBoard = mongoose.model(
  'northAmericaBoard',
  postSchema,
  'board_NorthAmerica'
);
const africaBoard = mongoose.model('africaBoard', postSchema, 'board_Africa');
const europeBoard = mongoose.model('europeBoard', postSchema, 'board_Europe');
const oceaniaBoard = mongoose.model(
  'oceaniaBoard',
  postSchema,
  'board_Oceania'
);

module.exports = {
  table,
  forUniv,
  comment,
  review,
  user,
  allBoard,
  asiaBoard,
  southAmericaBoard,
  northAmericaBoard,
  africaBoard,
  europeBoard,
  oceaniaBoard,
};
