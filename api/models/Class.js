/**
 * Grade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    class_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    instructor_id: {
      type: 'integer',
      maxLength: 10
    },
    subject: {
      type: 'string',
      maxLength: 30
    },
    course: {
      type: 'integer',
      maxLength: 4
    }
  },
  autoPK: false
};
