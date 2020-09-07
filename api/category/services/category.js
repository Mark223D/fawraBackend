'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

const slugify = require('slugify');

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            strapi.log.debug("beforeCreate")
            data.slug = slugify(data.title, { lower: true });

        },
        async beforeUpdate(params, data) {
            strapi.log.debug("beforeUpdate")
            data.slug = slugify(data.title, { lower: true });
        },
    },
};