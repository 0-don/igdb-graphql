import DataLoader from 'dataloader';
import {fields, where} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
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
import {CacheControl} from '../../utils/cache-control';
import {CheckToken} from '../../utils/tokenMiddleware';
import {MyContext, RLoader} from '../../@types/types';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => Game)
export class GameResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async age_ratings => await loaderResolver(age_ratings, 'age_ratings'),
  )
  async age_ratings(@Root() {id, age_ratings}: Game) {
    return (dataloader: DataLoader<RLoader, AgeRating[]>) =>
      dataloader.load({id, ids: age_ratings});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async alternative_names =>
      await loaderResolver(alternative_names, 'alternative_names'),
  )
  async alternative_names(@Root() {id, alternative_names}: Game) {
    return (dataloader: DataLoader<RLoader, AlternativeName[]>) =>
      dataloader.load({id, ids: alternative_names});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async artworks => await loaderResolver(artworks, 'artworks'),
  )
  async artworks(@Root() {id, artworks}: Game) {
    return (dataloader: DataLoader<RLoader, Artwork[]>) =>
      dataloader.load({id, ids: artworks});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async bundles => await loaderResolver(bundles, 'games'),
  )
  async bundles(@Root() {id, bundles}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: bundles});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async collection => await loaderResolver(collection, 'collections'),
  )
  async collection(@Root() {id, collection}: Game) {
    return (dataloader: DataLoader<RLoader, Collection[]>) =>
      dataloader.load({id, ids: collection});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async cover => await loaderResolver(cover, 'covers'),
  )
  async cover(@Root() {id, cover}: Game) {
    return (dataloader: DataLoader<RLoader, Cover[]>) =>
      dataloader.load({id, ids: cover});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async dlcs => await loaderResolver(dlcs, 'games'),
  )
  async dlcs(@Root() {id, dlcs}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: dlcs});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async expansions => await loaderResolver(expansions, 'games'),
  )
  async expansions(@Root() {id, expansions}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: expansions});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async external_games =>
      await loaderResolver(external_games, 'external_games'),
  )
  async external_games(@Root() {id, external_games}: Game) {
    return (dataloader: DataLoader<RLoader, ExternalGame[]>) =>
      dataloader.load({id, ids: external_games});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async franchise => await loaderResolver(franchise, 'franchises'),
  )
  async franchise(@Root() {id, franchise}: Game) {
    return (dataloader: DataLoader<RLoader, Franchise[]>) =>
      dataloader.load({id, ids: franchise});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async franchises => await loaderResolver(franchises, 'franchises'),
  )
  async franchises(@Root() {id, franchises}: Game) {
    return (dataloader: DataLoader<RLoader, Franchise[]>) =>
      dataloader.load({id, ids: franchises});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async gameEnginesIds =>
      await loaderResolver(gameEnginesIds, 'game_engines'),
  )
  async game_engines(@Root() {id, game_engines}: Game) {
    return (dataloader: DataLoader<RLoader, GameEngine[]>) =>
      dataloader.load({id, ids: game_engines});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async game_modes => await loaderResolver(game_modes, 'game_modes'),
  )
  async game_modes(@Root() {id, game_modes}: Game) {
    return (dataloader: DataLoader<RLoader, GameMode[]>) =>
      dataloader.load({id, ids: game_modes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async genres => await loaderResolver(genres, 'genres'),
  )
  async genres(@Root() {id, genres}: Game) {
    return (dataloader: DataLoader<RLoader, Genre[]>) =>
      dataloader.load({id, ids: genres});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async involved_companies =>
      await loaderResolver(involved_companies, 'involved_companies'),
  )
  async involved_companies(@Root() {id, involved_companies}: Game) {
    return (dataloader: DataLoader<RLoader, InvolvedCompany[]>) =>
      dataloader.load({id, ids: involved_companies});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async keywords => await loaderResolver(keywords, 'keywords'),
  )
  async keywords(@Root() {id, keywords}: Game) {
    return (dataloader: DataLoader<RLoader, Keyword[]>) =>
      dataloader.load({id, ids: keywords});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async multiplayer_modes =>
      await loaderResolver(multiplayer_modes, 'multiplayer_modes'),
  )
  async multiplayer_modes(@Root() {id, multiplayer_modes}: Game) {
    return (dataloader: DataLoader<RLoader, MultiplayerMode[]>) =>
      dataloader.load({id, ids: multiplayer_modes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async parent_game => await loaderResolver(parent_game, 'games'),
  )
  async parent_game(@Root() {id, parent_game}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: parent_game});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async platforms => await loaderResolver(platforms, 'platforms'),
  )
  async platforms(@Root() {id, platforms}: Game) {
    return (dataloader: DataLoader<RLoader, Platform[]>) =>
      dataloader.load({id, ids: platforms});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async player_perspectives =>
      await loaderResolver(player_perspectives, 'player_perspectives'),
  )
  async player_perspectives(@Root() {id, player_perspectives}: Game) {
    return (dataloader: DataLoader<RLoader, PlayerPerspective[]>) =>
      dataloader.load({id, ids: player_perspectives});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async release_dates => await loaderResolver(release_dates, 'release_dates'),
  )
  async release_dates(@Root() {id, release_dates}: Game) {
    return (dataloader: DataLoader<RLoader, ReleaseDate[]>) =>
      dataloader.load({id, ids: release_dates});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async screenshots => await loaderResolver(screenshots, 'screenshots'),
  )
  async screenshots(@Root() {id, screenshots}: Game) {
    return (dataloader: DataLoader<RLoader, Screenshot[]>) =>
      dataloader.load({id, ids: screenshots});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async similar_games => await loaderResolver(similar_games, 'games'),
  )
  async similar_games(@Root() {id, similar_games}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: similar_games});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async standalone_expansions =>
      await loaderResolver(standalone_expansions, 'games'),
  )
  async standalone_expansions(@Root() {id, standalone_expansions}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: standalone_expansions});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async themes => await loaderResolver(themes, 'themes'),
  )
  async themes(@Root() {id, themes}: Game) {
    return (dataloader: DataLoader<RLoader, Theme[]>) =>
      dataloader.load({id, ids: themes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async version_parent => await loaderResolver(version_parent, 'games'),
  )
  async version_parent(@Root() {id, version_parent}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: version_parent});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async videos => await loaderResolver(videos, 'game_videos'),
  )
  async videos(@Root() {id, videos}: Game) {
    return (dataloader: DataLoader<RLoader, GameVideo[]>) =>
      dataloader.load({id, ids: videos});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async websites => await loaderResolver(websites, 'websites'),
  )
  async websites(@Root() {id, websites}: Game) {
    return (dataloader: DataLoader<RLoader, Website[]>) =>
      dataloader.load({id, ids: websites});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async remakes => await loaderResolver(remakes, 'games'),
  )
  async remakes(@Root() {id, remakes}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: remakes});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async remasters => await loaderResolver(remasters, 'games'),
  )
  async remasters(@Root() {id, remasters}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: remasters});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async expanded_games => await loaderResolver(expanded_games, 'games'),
  )
  async expanded_games(@Root() {id, expanded_games}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: expanded_games});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async ports => await loaderResolver(ports, 'games'),
  )
  async ports(@Root() {id, ports}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: ports});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async forks => await loaderResolver(forks, 'games'),
  )
  async forks(@Root() {id, forks}: Game) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: forks});
  }

  @Query(() => [Game], {nullable: true})
  @UseMiddleware(CheckToken)
  @CacheControl({maxAge: 20})
  async games(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('games')
      .pipe(fields(['*']), where('hypes', '>', 100))
      .execute();

    return data;
  }
}
