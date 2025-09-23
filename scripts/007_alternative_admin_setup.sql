-- Alternative method: Update existing user to admin role
-- Use this if the above script doesn't work due to auth table permissions

-- If you manually create the user through Supabase Dashboard or sign-up form,
-- then run this script to assign admin role

UPDATE public.profiles 
SET 
  role = 'admin',
  full_name = 'Admin User',
  updated_at = now()
WHERE email = 'admin@logvikas.com';

-- If profile doesn't exist, create it
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
  AND NOT EXISTS (
    SELECT 1 FROM public.profiles p WHERE p.id = u.id
  );

-- Verify the setup
SELECT 
  u.email,
  u.email_confirmed_at,
  p.role,
  p.full_name
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE u.email = 'admin@logvikas.com';
