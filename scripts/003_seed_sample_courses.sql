-- Insert sample courses
INSERT INTO public.courses (id, title, description, thumbnail_url, instructor_name, duration, level, category, is_published) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Sales Training Fundamentals', 'Master the art of selling with proven techniques and strategies used by top performers.', '/placeholder.svg?height=200&width=300', 'Log Vikas Expert', '4 hours', 'Beginner', 'Sales Training', true),
('550e8400-e29b-41d4-a716-446655440002', 'Advanced Presentation Skills', 'Develop confidence and expertise in delivering impactful presentations.', '/placeholder.svg?height=200&width=300', 'Log Vikas Expert', '3 hours', 'Intermediate', 'Behavioral Training', true),
('550e8400-e29b-41d4-a716-446655440003', 'Leadership Development Program', 'Transform your leadership capabilities with practical tools and techniques.', '/placeholder.svg?height=200&width=300', 'Log Vikas Expert', '6 hours', 'Advanced', 'Personal Leadership Training', true),
('550e8400-e29b-41d4-a716-446655440004', 'Email Etiquette Mastery', 'Professional email communication skills for the modern workplace.', '/placeholder.svg?height=200&width=300', 'Log Vikas Expert', '2 hours', 'Beginner', 'Business Etiquette', true);

-- Insert sample videos for courses
INSERT INTO public.course_videos (course_id, title, description, video_url, duration, order_index, is_free) VALUES
-- Sales Training Fundamentals videos
('550e8400-e29b-41d4-a716-446655440001', 'Introduction to Sales Psychology', 'Understanding customer mindset and buying behavior', 'https://example.com/video1.mp4', 1800, 1, true),
('550e8400-e29b-41d4-a716-446655440001', 'Building Rapport with Customers', 'Techniques for establishing trust and connection', 'https://example.com/video2.mp4', 2100, 2, false),
('550e8400-e29b-41d4-a716-446655440001', 'Handling Objections', 'Professional strategies for overcoming customer concerns', 'https://example.com/video3.mp4', 1950, 3, false),
('550e8400-e29b-41d4-a716-446655440001', 'Closing Techniques', 'Proven methods for securing sales commitments', 'https://example.com/video4.mp4', 2250, 4, false),

-- Presentation Skills videos
('550e8400-e29b-41d4-a716-446655440002', 'Presentation Planning', 'Structure and organize your content effectively', 'https://example.com/video5.mp4', 1500, 1, true),
('550e8400-e29b-41d4-a716-446655440002', 'Visual Design Principles', 'Creating engaging slides and visual aids', 'https://example.com/video6.mp4', 1800, 2, false),
('550e8400-e29b-41d4-a716-446655440002', 'Delivery Techniques', 'Voice, body language, and stage presence', 'https://example.com/video7.mp4', 2100, 3, false),

-- Leadership Development videos
('550e8400-e29b-41d4-a716-446655440003', 'Leadership Fundamentals', 'Core principles of effective leadership', 'https://example.com/video8.mp4', 2400, 1, true),
('550e8400-e29b-41d4-a716-446655440003', 'Team Building Strategies', 'Creating high-performing teams', 'https://example.com/video9.mp4', 2700, 2, false),
('550e8400-e29b-41d4-a716-446655440003', 'Conflict Resolution', 'Managing and resolving workplace conflicts', 'https://example.com/video10.mp4', 2100, 3, false),
('550e8400-e29b-41d4-a716-446655440003', 'Strategic Planning', 'Long-term vision and goal setting', 'https://example.com/video11.mp4', 2550, 4, false),

-- Email Etiquette videos
('550e8400-e29b-41d4-a716-446655440004', 'Professional Email Structure', 'Components of effective business emails', 'https://example.com/video12.mp4', 900, 1, true),
('550e8400-e29b-41d4-a716-446655440004', 'Tone and Language', 'Appropriate communication style for different contexts', 'https://example.com/video13.mp4', 1200, 2, false),
('550e8400-e29b-41d4-a716-446655440004', 'Email Management', 'Organizing and prioritizing your inbox', 'https://example.com/video14.mp4', 1050, 3, false);
