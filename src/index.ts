import fetch, { Response } from 'node-fetch';
const DDG_URL = 'http://api.duckduckgo.com/';

export async function search(term: string) {
  const res = await fetch(`${DDG_URL}?q=${encodeURIComponent(term)}&format=json`);
  
  return await res.json() as IResponse;
}

export interface IResponse {
  /** the search text */
  Heading: string;
  Abstract: string;
  AbstractSource: string;
  AbstractURL: string;
  Entity: string;
  RelatedTopics: IRelatedTopic[];
  InfoBox?: IInfobox;
  Image: string;
  ImageIsLogo: boolean;
  Results: IResult[];
}

export interface IRelatedTopic {
  Result: string;
  Icon: IIcon;
  FirstURL: string;
  Text: string;
}

export interface IResult {
  /** HTML <a> link to site */
  Result: string;
  Icon: IIcon;
  /** fully qualified URL */
  FirstURL: string;
  /** text from firstURL */
  Text: string;
}

export interface IIcon {
  URL: string;
  /** the height of the icon in pixels */
  Height: number;
  /** the width of the icon in pixels */
  Width: number;
}

export interface IInfobox {
  content?: IInfoboxSection[];
  meta?: IMetaSection[];
}

export interface IInfoboxSection {
  data_type: string;
  label: string;
  value: string;
  wiki_order: number;
  sort_order: number;
}

export interface IMetaSection {
  data_type: string;
  label: string;
  value: string;
}
