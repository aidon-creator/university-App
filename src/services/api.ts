export interface UniversityPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

const API_URL =
  'https://alt.edu.kz/wp-json/wp/v2/posts?per_page=5&_embed';

export const getPosts = async (): Promise<UniversityPost[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('API қатесі');
  }

  return await response.json();
};

export const cleanHTML = (html: string): string => {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCharCode(Number(code))
    )
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};