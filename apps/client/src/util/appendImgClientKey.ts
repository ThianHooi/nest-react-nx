const ACCESS_KEY = 'QW4awUxAUYON-b2tlifNaBVBAPkettFrRxPcWqy3uzQ';

export const appendClientKey = (imgOriUrl: string): string => {
  const url = new URL(imgOriUrl);

  url.searchParams.set('client_id', ACCESS_KEY);

  return url.toString();
};
