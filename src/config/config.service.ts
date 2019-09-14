import * as Joi from '@hapi/joi';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    let config;
    if (process.env.NODE_ENV !== 'production') {
      config = dotenv.parse(fs.readFileSync(filePath));
    } else {
      const {
        NODE_ENV,
        PORT,
        CLIENT_ID,
        CLIENT_SECRET,
        JWT_SECRET_KEY,
      } = process.env;

      config = {
        NODE_ENV,
        PORT,
        CLIENT_ID,
        CLIENT_SECRET,
        JWT_SECRET_KEY,
      };
    }

    this.envConfig = this.validateInput(config);
  }

  get clientId(): string {
    return this.envConfig.CLIENT_ID;
  }

  get clientSecret(): string {
    return this.envConfig.CLIENT_SECRET;
  }

  get JWTSecret(): string {
    return this.envConfig.JWT_SECRET_KEY;
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
      PORT: Joi.number().default(3000),
      CLIENT_ID: Joi.string().required(),
      CLIENT_SECRET: Joi.string().required(),
      JWT_SECRET_KEY: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
