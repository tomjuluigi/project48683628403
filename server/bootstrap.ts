import dotenv from 'dotenv';
import path from 'path';

// Load base .env first so any modules imported afterwards see the variables.
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// In development allow .env.development to override values.
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.resolve(process.cwd(), '.env.development'), override: true });
}

// Now import the real server entrypoint.
// Import the main server after env vars are loaded.
(async () => {
  try {
    await import('./index');
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();
