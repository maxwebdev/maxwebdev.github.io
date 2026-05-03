import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '5byn3t53',
  dataset: 'production',
  apiVersion: '2024-05-02', // use current date
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
