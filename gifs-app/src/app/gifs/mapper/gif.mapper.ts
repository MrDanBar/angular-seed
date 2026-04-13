import { Gif } from "../interfaces/gif-interface";
import { GiphyItem } from "../interfaces/giphy.interface";

export class GifMapper {
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      url: item.images.original.url,
      title: item.title,
    }
  }

  static mapGiphyItemsToGifs(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
