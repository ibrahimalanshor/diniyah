import { getCollection, type CollectionEntry } from 'astro:content';

export async function getArticles(
  section: CollectionEntry<'section'>,
): Promise<CollectionEntry<'article'>[]> {
  const articles = await getCollection(
    'article',
    (article) => article.data.section.id === section.id,
  );

  articles.sort(
    (a, b) =>
      new Date(a.data.publishedAt).getTime() -
      new Date(b.data.publishedAt).getTime(),
  );

  return articles;
}
