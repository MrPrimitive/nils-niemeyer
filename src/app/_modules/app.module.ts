import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {APP_IMPORT_MODULES} from './app-import.module'
import {BOOTSTRAP_MODULE, DECLARATIONS_MODULES} from './app-declaration.module'


@NgModule({
	declarations: [DECLARATIONS_MODULES],
	imports: [
		APP_IMPORT_MODULES,
	],
	providers: [],
	bootstrap: [BOOTSTRAP_MODULE],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
