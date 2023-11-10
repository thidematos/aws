const mongoose = require('mongoose');
const slugify = require('slugify');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Uma nova postagem deve ter um título!'],
    minlength: [5, 'Um título deve ter, no mínimo, 5 letras!'],
    maxlength: [30, 'Um título deve ter, máximo, 30 caracteres'],
  },
  material: {
    type: String,
    required: [true, 'Uma nova postagem deve ter um tipo de material!'],
    minlength: [1, 'Um material não pode ter menos que uma letra!'],
    maxlength: [20, 'Um material não pode ter mais que 20 letras!'],
  },
  local: {
    type: String,
    required: [true, 'Uma nova postagem deve ter um local!'],
    maxlength: [20, 'Um local não pode ter mais que 20 caracteres!'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imgs: {
    type: [String],
    required: [true, 'Uma nova postagem deve ter, pelo menos, uma imagem!'],
  },
  description: {
    type: String,
    maxlength: [150, 'Uma descrição não pode ter mais de 100 caracteres'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Uma postagem deve ter um autor'],
  },
  slug: String,
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});

postSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
