import * as Joi from 'joi';

export const validationSchema = Joi.object({
  DISCORD_BOT_TOKEN: Joi.string().required(),
});
