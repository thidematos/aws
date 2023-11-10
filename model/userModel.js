const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'É necessário um nome para o usuário'],
    },
    password: {
      type: String,
      required: [true, 'É necessário uma senha para o usuário'],
      minlength: [8, 'A senha deve ter, pelo menos, 8 caracteres'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'É necessário uma confirmação de senha!'],
      minlength: [8, 'A senha deve ter, pelo menos, 8 caracteres'],
      select: false,
      validate: {
        validator: function (field) {
          return field === this.password;
        },
      },
    },
    user: {
      type: String,
      required: [true, 'É necessário um username para o usuário'],
      unique: [true, 'Um username deve ser único!'],
    },
    role: {
      type: String,
      enum: ['MASTER', 'ADMIN'],
      default: 'ADMIN',
    },
    photo: String,

    passwordChangedAt: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.post('save', function () {
  this.password = undefined;
  this.role = undefined;
});

userSchema.virtual('posts', {
  ref: 'User',
  foreignField: 'user',
  localField: '_id',
});

userSchema.methods.correctPassword = async function (
  reqPassword,
  userPassword
) {
  return await bcrypt.compare(reqPassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (jwtTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtTimeStamp < changedTimeStamp;
  }

  return false;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
