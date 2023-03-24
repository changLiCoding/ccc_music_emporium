DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  sub_category_id INTEGER NOT NULL REFERENCES sub_categories(id) ON DELETE CASCADE,
  store_id INTEGER NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
  make VARCHAR(255) NOT NUll,
  model VARCHAR(255) NOT NULL,
  price_in_cents INTEGER NOT NULL,
  rent_rate_in_cents INTEGER NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  stock_quantity INTEGER NOT NULL
  );
