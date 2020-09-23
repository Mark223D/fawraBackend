'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const slugify = require('slugify');
const category = require('../../category/services/category');
module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            console.log("BeforeCreate", data);

            let category = await strapi.query('category').find({ slug: 'all-articles' });
            let rating = await strapi.query('ratings').find({ slug: 'most-recent' });

            data.slug = slugify(data.title, { lower: true });
            data.categories = [category[0]];
            data.ratings = [rating[0]];

        },
        async beforeUpdate(params, data) {
            console.log("BeforeUpdate", data);
            data.slug = slugify(data.title, { lower: true });

        },
        async afterCreate(data) {
            console.log('AfterCreate', data);

        },
        async afterUpdate(data) {
            console.log('AfterUpdate', data);
        }
    },
};