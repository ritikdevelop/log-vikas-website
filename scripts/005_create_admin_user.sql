-- Create an admin user (run this after creating the user account through Supabase Auth)
-- Replace 'admin@logvikas.com' with your desired admin email

-- First, you need to create the user account through Supabase Auth Dashboard or sign-up
-- Then run this script to make them an admin

-- Update the user role to admin (replace the email with your admin email)
UPDATE public.profiles 
SET role = 'admin', 
    full_name = 'Log Vikas Admin'
WHERE email = 'admin@logvikas.com';

-- If the profile doesn't exist yet, you can insert it manually
-- (This should only be used if the trigger didn't create the profile)
-- INSERT INTO public.profiles (id, email, full_name, role)
-- SELECT id, email, 'Log Vikas Admin', 'admin'
-- FROM auth.users 
-- WHERE email = 'admin@logvikas.com'
-- ON CONFLICT (id) DO UPDATE SET role = 'admin', full_name = 'Log Vikas Admin';

-- Verify the admin user was created
SELECT id, email, full_name, role, created_at 
FROM public.profiles 
WHERE role = 'admin';
