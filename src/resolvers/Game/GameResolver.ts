import DataLoader from 'dataloader';
import {fields} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  Args,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {GameEnum, gameFields} from '../../@types/enum';
import {MyContext, RLoader} from '../../@types/types';
import {
  AgeRating,
  AlternativeName,
  Artwork,
  Collection,
  Cover,
  ExternalGame,
  Franchise,
  Game,
  GameEngine,
  GameMode,
  GameVideo,
  Genre,
  InvolvedCompany,
  Keyword,
  MultiplayerMode,
  Platform,
  PlayerPerspective,
  ReleaseDate,
  Screenshot,
  Theme,
  Website,
} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver, wherePipe} from '../../utils/utils';
import {GamesArgs} from '../inputs/GameArgs';

@Resolver(() => Game)
export class GameResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (age_ratings, {context}) =>
      await loaderResolver(age_ratings, 'age_ratings', context),
  )
  async age_ratings(@Root() {id, age_ratings}: Game) {
    return (dataloader: DataLoader<RLoader, AgeRating[]>) =>
      dataloader.load({id, ids: age_ratings});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (alternative_names, {context}) =>
      await loaderResolver(alternative_names, 'alternative_names', context),
  )
  async alternative_names(@Root() {id, alternative_names}: Game) {
    return (dataloader: DataLoader<RLoader, AlternativeName[]>) =>
      dataloader.load({id, ids: alternative_names});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (artworks, {context}) =>
      await loaderResolver(artworks, 'artworks', context),
  )
  async artworks(@Root() {id, artworks}: Game) {
    return (dataloader: DataLoader<RLoader, Artwork[]>) =>
      dataloader.load({id, ids: artworks});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (bundles, {context}) =>
      await loaderResolver(bundles, 'games', context),
  )
  async bundles(@Root() {id, bundles}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: bundles});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (collection, {context}) =>
      await loaderResolver(collection, 'collections', context),
  )
  async collection(@Root() {id, collection}: Game) {
    return (dataloader: DataLoader<RLoader, Collection[]>) =>
      dataloader.load({id, ids: collection});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (cover, {context}) => await loaderResolver(cover, 'covers', context),
  )
  async cover(@Root() {id, cover}: Game) {
    return (dataloader: DataLoader<RLoader, Cover[]>) =>
      dataloader.load({id, ids: cover});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (dlcs, {context}) => await loaderResolver(dlcs, 'games', context),
  )
  async dlcs(@Root() {id, dlcs}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: dlcs});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (expansions, {context}) =>
      await loaderResolver(expansions, 'games', context),
  )
  async expansions(@Root() {id, expansions}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: expansions});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (external_games, {context}) =>
      await loaderResolver(external_games, 'external_games', context),
  )
  async external_games(@Root() {id, external_games}: Game) {
    return (dataloader: DataLoader<RLoader, ExternalGame[]>) =>
      dataloader.load({id, ids: external_games});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (franchise, {context}) =>
      await loaderResolver(franchise, 'franchises', context),
  )
  async franchise(@Root() {id, franchise}: Game) {
    return (dataloader: DataLoader<RLoader, Franchise[]>) =>
      dataloader.load({id, ids: franchise});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (franchises, {context}) =>
      await loaderResolver(franchises, 'franchises', context),
  )
  async franchises(@Root() {id, franchises}: Game) {
    return (dataloader: DataLoader<RLoader, Franchise[]>) =>
      dataloader.load({id, ids: franchises});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (gameEnginesIds, {context}) =>
      await loaderResolver(gameEnginesIds, 'game_engines', context),
  )
  async game_engines(@Root() {id, game_engines}: Game) {
    return (dataloader: DataLoader<RLoader, GameEngine[]>) =>
      dataloader.load({id, ids: game_engines});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (game_modes, {context}) =>
      await loaderResolver(game_modes, 'game_modes', context),
  )
  async game_modes(@Root() {id, game_modes}: Game) {
    return (dataloader: DataLoader<RLoader, GameMode[]>) =>
      dataloader.load({id, ids: game_modes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (genres, {context}) =>
      await loaderResolver(genres, 'genres', context),
  )
  async genres(@Root() {id, genres}: Game) {
    return (dataloader: DataLoader<RLoader, Genre[]>) =>
      dataloader.load({id, ids: genres});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (involved_companies, {context}) =>
      await loaderResolver(involved_companies, 'involved_companies', context),
  )
  async involved_companies(@Root() {id, involved_companies}: Game) {
    return (dataloader: DataLoader<RLoader, InvolvedCompany[]>) =>
      dataloader.load({id, ids: involved_companies});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (keywords, {context}) =>
      await loaderResolver(keywords, 'keywords', context),
  )
  async keywords(@Root() {id, keywords}: Game) {
    return (dataloader: DataLoader<RLoader, Keyword[]>) =>
      dataloader.load({id, ids: keywords});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (multiplayer_modes, {context}) =>
      await loaderResolver(multiplayer_modes, 'multiplayer_modes', context),
  )
  async multiplayer_modes(@Root() {id, multiplayer_modes}: Game) {
    return (dataloader: DataLoader<RLoader, MultiplayerMode[]>) =>
      dataloader.load({id, ids: multiplayer_modes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (parent_game, {context}) =>
      await loaderResolver(parent_game, 'games', context),
  )
  async parent_game(@Root() {id, parent_game}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: parent_game});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platforms, {context}) =>
      await loaderResolver(platforms, 'platforms', context),
  )
  async platforms(@Root() {id, platforms}: Game) {
    return (dataloader: DataLoader<RLoader, Platform[]>) =>
      dataloader.load({id, ids: platforms});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (player_perspectives, {context}) =>
      await loaderResolver(player_perspectives, 'player_perspectives', context),
  )
  async player_perspectives(@Root() {id, player_perspectives}: Game) {
    return (dataloader: DataLoader<RLoader, PlayerPerspective[]>) =>
      dataloader.load({id, ids: player_perspectives});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (release_dates, {context}) =>
      await loaderResolver(release_dates, 'release_dates', context),
  )
  async release_dates(@Root() {id, release_dates}: Game) {
    return (dataloader: DataLoader<RLoader, ReleaseDate[]>) =>
      dataloader.load({id, ids: release_dates});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (screenshots, {context}) =>
      await loaderResolver(screenshots, 'screenshots', context),
  )
  async screenshots(@Root() {id, screenshots}: Game) {
    return (dataloader: DataLoader<RLoader, Screenshot[]>) =>
      dataloader.load({id, ids: screenshots});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (similar_games, {context}) =>
      await loaderResolver(similar_games, 'games', context),
  )
  async similar_games(@Root() {id, similar_games}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: similar_games});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (standalone_expansions, {context}) =>
      await loaderResolver(standalone_expansions, 'games', context),
  )
  async standalone_expansions(@Root() {id, standalone_expansions}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: standalone_expansions});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (themes, {context}) =>
      await loaderResolver(themes, 'themes', context),
  )
  async themes(@Root() {id, themes}: Game) {
    return (dataloader: DataLoader<RLoader, Theme[]>) =>
      dataloader.load({id, ids: themes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (version_parent, {context}) =>
      await loaderResolver(version_parent, 'games', context),
  )
  async version_parent(@Root() {id, version_parent}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: version_parent});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (videos, {context}) =>
      await loaderResolver(videos, 'game_videos', context),
  )
  async videos(@Root() {id, videos}: Game) {
    return (dataloader: DataLoader<RLoader, GameVideo[]>) =>
      dataloader.load({id, ids: videos});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (websites, {context}) =>
      await loaderResolver(websites, 'websites', context),
  )
  async websites(@Root() {id, websites}: Game) {
    return (dataloader: DataLoader<RLoader, Website[]>) =>
      dataloader.load({id, ids: websites});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (remakes, {context}) =>
      await loaderResolver(remakes, 'games', context),
  )
  async remakes(@Root() {id, remakes}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: remakes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (remasters, {context}) =>
      await loaderResolver(remasters, 'games', context),
  )
  async remasters(@Root() {id, remasters}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: remasters});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (expanded_games, {context}) =>
      await loaderResolver(expanded_games, 'games', context),
  )
  async expanded_games(@Root() {id, expanded_games}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: expanded_games});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (ports, {context}) => await loaderResolver(ports, 'games', context),
  )
  async ports(@Root() {id, ports}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: ports});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (forks, {context}) => await loaderResolver(forks, 'games', context),
  )
  async forks(@Root() {id, forks}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: forks});
  }

  @Query(() => [Game], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({maxAge: 20})
  async games(@Ctx() {client}: MyContext, @Args() args: GamesArgs) {
    let pipe: any[] = [];

    if (args.where) {
      Object.keys(args.where).forEach(key => {
        if (gameFields.includes(key as GameEnum)) {
          const filterWithValue = args.where?.[key as GameEnum];
          if (filterWithValue) {
            pipe.push(wherePipe(filterWithValue, key));
          }
        }
      });
    }

    const {data} = await client
      .request('games')
      .pipe(
        fields('*'),
        ...pipe,
        // and(
        //   where('status', '=', null),
        //   or(where('id', '=', 124448), where('id', '=', 28204)),
        // ),
      )
      .execute();

    return data;
  }
}
