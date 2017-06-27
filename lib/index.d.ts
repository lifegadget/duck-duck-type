export declare function search(term: string): Promise<IResponse>;
export interface IResponse {
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
    Result: string;
    Icon: IIcon;
    FirstURL: string;
    Text: string;
}
export interface IIcon {
    URL: string;
    Height: number;
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
