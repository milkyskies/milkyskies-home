
export interface Get<
    PathParams = { [key: string]: unknown },
    QueryParams = { [key: string]: unknown },
    Output = { [key: string]: unknown }
> {
    parameters: {
        path?: PathParams;
        query: QueryParams;
    };
    responses: {
        200: Output;
    };
}

export interface Post<
    PathParams = { [key: string]: unknown },
    RequestBody = { [key: string]: unknown },
    QueryParams = { [key: string]: unknown },
    Output = { [key: string]: unknown }
> {
    parameters: {
        path?: PathParams;
        body: RequestBody;
        query?: QueryParams;
    };
    responses: {
        200: Output;
    };
}

export interface Put<
    PathParams = { [key: string]: unknown },
    RequestBody = { [key: string]: unknown },
    QueryParams = { [key: string]: unknown },
    Output = { [key: string]: unknown }
> {
    parameters: {
        path?: PathParams;
        body: RequestBody;
        query?: QueryParams;
    };
    responses: {
        200: Output;
    };
}

export interface Delete<
    PathParams = { [key: string]: unknown },
    QueryParams = { [key: string]: unknown },
    Output = { [key: string]: unknown }
> {
    parameters: {
        path?: PathParams;
        query: QueryParams;
    };
    responses: {
        200: Output;
    };
}

export interface Patch<
    PathParams = { [key: string]: unknown },
    RequestBody = { [key: string]: unknown },
    QueryParams = { [key: string]: unknown },
    Output = { [key: string]: unknown }
> {
    parameters: {
        path?: PathParams;
        body: RequestBody;
        query?: QueryParams;
    };
    responses: {
        200: Output;
    };
}

export type RecursiveJSONSchema = {
    description?: string
    type: string
    const?: string
    format?: string
    properties?: {
        [key: string]: RecursiveJSONSchema
    }
    items?: RecursiveJSONSchema
    required?: string[]
}
export interface APIPaths {
  'api': {
    GET: {
      parameters: {
        path?: never,
        query?: never,
      },
      responses: {
        200: {
          status: "ok",
        },
      }
    },
  },
  'api/spotify': {
    GET: {
      parameters: {
        path?: never,
        query?: never,
      },
      responses: {
        200: {
  nowPlaying: {
    timestamp: number;
    device: {
      id: null | string;
      is_active: boolean;
      is_restricted: boolean;
      is_private_session: boolean;
      name: string;
      type: string;
      volume_percent: null | number;
    };
    actions: {
      disallows: {
        interrupting_playback?: false | true;
        pausing?: false | true;
        resuming?: false | true;
        seeking?: false | true;
        skipping_next?: false | true;
        skipping_prev?: false | true;
        toggling_repeat_context?: false | true;
        toggling_repeat_track?: false | true;
        toggling_shuffle?: false | true;
        transferring_playback?: false | true;
      };
    };
    progress_ms: null | number;
    is_playing: boolean;
    item: null | {
      album: {
        album_group?: 'album' | 'single' | 'compilation' | 'appears_on';
        album_type: 'album' | 'single' | 'compilation';
        artists: Array<
          {
            name: string;
            id: string;
            type: 'artist';
            href: string;
            external_urls: {
              spotify: string;
            };
            uri: string;
          }
        >;
        available_markets?: string[];
        id: string;
        images: Array<
          {
            height?: number;
            url: string;
            width?: number;
          }
        >;
        name: string;
        release_date: string;
        release_date_precision: 'year' | 'month' | 'day';
        restrictions?: {
          reason: string;
        };
        type: 'album';
        total_tracks: number;
        href: string;
        external_urls: {
          spotify: string;
        };
        uri: string;
      };
      external_ids: {
        isrc?: string;
        ean?: string;
        upc?: string;
      };
      popularity: number;
      is_local?: false | true;
      artists: Array<
        {
          name: string;
          id: string;
          type: 'artist';
          href: string;
          external_urls: {
            spotify: string;
          };
          uri: string;
        }
      >;
      available_markets?: string[];
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_playable?: false | true;
      linked_from?: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        type: 'track';
        uri: string;
      };
      restrictions?: {
        reason: string;
      };
      name: string;
      preview_url: null | string;
      track_number: number;
      type: 'track';
      uri: string;
    } | {
      show: {
        available_markets: string[];
        copyrights: Array<
          {
            text: string;
            type: 'C' | 'P';
          }
        >;
        description: string;
        html_description: string;
        explicit: boolean;
        id: string;
        images: Array<
          {
            height?: number;
            url: string;
            width?: number;
          }
        >;
        is_externally_hosted: null | false | true;
        languages: string[];
        media_type: string;
        name: string;
        publisher: string;
        type: 'show';
        total_episodes?: number;
        href: string;
        external_urls: {
          spotify: string;
        };
        uri: string;
      };
      uri: string;
      audio_preview_url: null | string;
      description: string;
      duration_ms: number;
      explicit: boolean;
      html_description: string;
      id: string;
      images: Array<
        {
          height?: number;
          url: string;
          width?: number;
        }
      >;
      is_externally_hosted: boolean;
      is_playable: boolean;
      language: string;
      languages?: string[];
      name: string;
      release_date: string;
      release_date_precision: string;
      resume_point?: {
        fully_played: boolean;
        resume_position_ms: number;
      };
      type: 'episode';
      href: string;
      external_urls: {
        spotify: string;
      };
    };
    context: null | {
      type: 'episode' | 'album' | 'artist' | 'show' | 'playlist';
      href: string;
      external_urls: {
        spotify: string;
      };
      uri: string;
    };
    currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown';
  };
},
        400: string,
      }
    },
  },
  'api/admin/spotify/login': {
    GET: {
      parameters: {
        path?: never,
        query?: never,
      },
      responses: {
      }
    },
  },
  'api/admin/spotify/set-tokens': {
    POST: {
      parameters: {
        path?: never,
        body: {
  accessToken: string;
  refreshToken: string;
},
        query?: never,
      },
      responses: {
        200: {
  status: string;
} | never,
      }
    },
  },
};
export interface ActionPaths {
};
