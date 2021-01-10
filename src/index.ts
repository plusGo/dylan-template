import {DylanTemplateEngineExecutor} from './dylan-template-engine-executor';
import {DylanTemplateEngine} from './dylan-template-engine';
import {DylanTemplateDefaultConfig} from './dylan-template-default-config';
import {DylanTemplateParser} from './dylan-template-parser';

export default {
    DylanTemplateEngine: DylanTemplateEngine,
    DylanTemplateDefaultConfig: DylanTemplateDefaultConfig,
    DylanTemplateEngineExecutor: DylanTemplateEngineExecutor,
    DylanTemplateParser: DylanTemplateParser,
};

export * from './dylan-template-default-config';
export * from './dylan-template-engine-executor';
export * from './dylan-template-engine';
export * from './dylan-template-parser';
