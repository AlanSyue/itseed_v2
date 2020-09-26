import { INestApplication } from '@nestjs/common';
import AdminBro from 'admin-bro';
import * as AdminBroExpress from 'admin-bro-expressjs';

export async function setupAdminPanel(app: INestApplication): Promise<void> {

    /** Create adminBro instance */
    const adminBro = new AdminBro({
        resources: [],        // Here we will put resources
        rootPath: '/admin',   // Define path for the admin panel
    });

    /** Create router */
    const router = AdminBroExpress.buildRouter(adminBro);

    /** Bind routing */
    app.use(adminBro.options.rootPath, router);

}
