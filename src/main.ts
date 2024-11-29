import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';  // Asegúrate de importar appRoutes
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Asegúrate de incluir este proveedor también

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), 
    provideHttpClient(), provideAnimationsAsync() // Esta línea asegura que HttpClient esté disponible en toda la aplicación
  ],
}).catch((err) => console.error(err));
