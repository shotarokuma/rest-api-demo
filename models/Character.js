const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stringToArray = (powerString) => {
  return powerString.split(", ");
};

const opts = { toJSON: { virtuals: true } };

const CharacterSchema = new Schema({
 name:{type:String, required:true, maxLength: 30},
 powers: {type:[String], default: ["Super strength"], set:stringToArray},
 type:{type:String, enum:['hero', 'villain'], default:'hero'},
 hp:{type:Number, default:1},
} ,opts);

CharacterSchema.statics.findByType = function(type) {
    return this.find({type:type});
 };
 
CharacterSchema.set('toJSON', { virtuals: true });

CharacterSchema.virtual('description').get(function(){
  return `${this.name} is ${this.type} whose special powers are ${this.powers.join(', ')}.`
}); 


const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;