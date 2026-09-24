import { MetadataRoute } from 'next';
import { PRODUCT_CATEGORIES } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://priyanpharmaceuticals.com';

  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/quality',
    '/global-presence',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCT_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
