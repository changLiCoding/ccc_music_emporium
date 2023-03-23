  DROP TABLE IF EXISTS rent_line_items CASCADE;
CREATE TABLE rent_line_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  rent_start DATE NOT NULL,
  rent_end DATE NOT NULL,
  days_rent INTEGER NOT NULL,
  created_at DATE NOT NULL DEFAULT now()
)
