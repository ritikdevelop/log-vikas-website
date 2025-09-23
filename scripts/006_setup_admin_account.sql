-- Setup specific admin account with predefined credentials
-- Email: admin@logvikas.com
-- Password: Admin@123

-- First, we need to insert the user into auth.users table
-- Note: In production, this should be done through Supabase Auth API for proper password hashing

-- Insert admin user into auth.users (this creates the authentication record)
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  role,
  aud,
  confirmation_token,
  email_change_token_new,
  recovery_token,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  last_sign_in_at
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'admin@logvikas.com',
  crypt('Admin@123', gen_salt('bf')), -- Hash the password using bcrypt
  now(),
  now(),
  now(),
  'authenticated',
  'authenticated',
  '',
  '',
  '',
  '{"provider": "email", "providers": ["email"]}',
  '{"name": "Admin User"}',
  false,
  now()
) ON CONFLICT (email) DO NOTHING;

-- Insert or update the profile for admin user
INSERT INTO public.profiles (
  id,
  email,
  full_name,
  role,
  created_at,
  updated_at
) 
SELECT 
  u.id,
  'admin@logvikas.com',
  'Admin User',
  'admin',
  now(),
  now()
FROM auth.users u 
WHERE u.email = 'admin@logvikas.com'
ON CONFLICT (id) 
DO UPDATE SET 
  role = 'admin',
  full_name = 'Admin User',
  updated_at = now();

-- Verify the admin account was created
SELECT 
  u.email,
  u.email_confirmed_at,
  p.role,
  p.full_name
FROM auth.users u
JOIN public.profiles p ON u.id = p.id
WHERE u.email = 'admin@logvikas.com';
