export interface HelmetedPageMeta {
  id: string | number;
  name: 'description' | 'keywords';
  content: string;
}

export interface HelmetedPageProps {
  meta: HelmetedPageMeta[];
  title: string;
}
