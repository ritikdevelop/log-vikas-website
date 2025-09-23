-- Add role column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS role TEXT CHECK (role IN ('user', 'admin')) DEFAULT 'user';

-- Update RLS policies for admin access
-- Drop existing course policies and recreate with admin access
DROP POLICY IF EXISTS "Anyone can view published courses" ON public.courses;

-- New policies for courses
CREATE POLICY "Anyone can view published courses" ON public.courses
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage all courses" ON public.courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Admin policies for course videos
CREATE POLICY "Admins can manage all course videos" ON public.course_videos
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Admin policies for viewing all purchases
CREATE POLICY "Admins can view all purchases" ON public.user_purchases
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Admin policies for viewing all progress
CREATE POLICY "Admins can view all progress" ON public.user_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Create a default admin user (you can change the email)
-- Note: This will need to be run after creating the user in Supabase Auth
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@logvikas.com';
