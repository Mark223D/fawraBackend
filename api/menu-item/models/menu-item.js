'use strict';
const slugify = require('slugify');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
        console.log("BeforeCreate", data);
        data.slug = slugify(data.title, { lower: true });


    },
    async beforeUpdate(params, data) {
        console.log("BeforeUpdate", data);
        data.slug = slugify(data.title, { lower: true });

    },
  }
};
