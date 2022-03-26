// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

export namespace proto {

    interface ICount {
        count?: (number|null);
    }

    class Count implements ICount {
        constructor(properties?: proto.ICount);
        public count: number;
    }

    interface IMultiQueryResult {
        name?: (string|null);
        results?: (Uint8Array[]|null);
        count?: (number|null);
    }

    class MultiQueryResult implements IMultiQueryResult {
        constructor(properties?: proto.IMultiQueryResult);
        public name: string;
        public results: Uint8Array[];
        public count: number;
    }

    interface IMultiQueryResultArray {
        result?: (proto.IMultiQueryResult[]|null);
    }

    class MultiQueryResultArray implements IMultiQueryResultArray {
        constructor(properties?: proto.IMultiQueryResultArray);
        public result: proto.IMultiQueryResult[];
    }

    interface IAgeRatingResult {
        ageratings?: (proto.IAgeRating[]|null);
    }

    class AgeRatingResult implements IAgeRatingResult {
        constructor(properties?: proto.IAgeRatingResult);
        public ageratings: proto.IAgeRating[];
    }

    interface IAgeRating {
        id?: (number|null);
        category?: (proto.AgeRatingCategoryEnum|null);
        content_descriptions?: (proto.IAgeRatingContentDescription[]|null);
        rating?: (proto.AgeRatingRatingEnum|null);
        rating_cover_url?: (string|null);
        synopsis?: (string|null);
        checksum?: (string|null);
    }

    class AgeRating implements IAgeRating {
        constructor(properties?: proto.IAgeRating);
        public id: number;
        public category: proto.AgeRatingCategoryEnum;
        public content_descriptions: proto.IAgeRatingContentDescription[];
        public rating: proto.AgeRatingRatingEnum;
        public rating_cover_url: string;
        public synopsis: string;
        public checksum: string;
    }

    enum AgeRatingCategoryEnum {
        AGERATING_CATEGORY_NULL = 0,
        ESRB = 1,
        PEGI = 2,
        CERO = 3,
        USK = 4,
        GRAC = 5,
        CLASS_IND = 6,
        ACB = 7
    }

    enum AgeRatingRatingEnum {
        AGERATING_RATING_NULL = 0,
        THREE = 1,
        SEVEN = 2,
        TWELVE = 3,
        SIXTEEN = 4,
        EIGHTEEN = 5,
        RP = 6,
        EC = 7,
        E = 8,
        E10 = 9,
        T = 10,
        M = 11,
        AO = 12,
        CERO_A = 13,
        CERO_B = 14,
        CERO_C = 15,
        CERO_D = 16,
        CERO_Z = 17,
        USK_0 = 18,
        USK_6 = 19,
        USK_12 = 20,
        USK_18 = 21,
        GRAC_ALL = 22,
        GRAC_TWELVE = 23,
        GRAC_FIFTEEN = 24,
        GRAC_EIGHTEEN = 25,
        GRAC_TESTING = 26,
        CLASS_IND_L = 27,
        CLASS_IND_TEN = 28,
        CLASS_IND_TWELVE = 29,
        CLASS_IND_FOURTEEN = 30,
        CLASS_IND_SIXTEEN = 31,
        CLASS_IND_EIGHTEEN = 32,
        ACB_G = 33,
        ACB_PG = 34,
        ACB_M = 35,
        ACB_MA15 = 36,
        ACB_R18 = 37,
        ACB_RC = 38
    }

    interface IAgeRatingContentDescriptionResult {
        ageratingcontentdescriptions?: (proto.IAgeRatingContentDescription[]|null);
    }

    class AgeRatingContentDescriptionResult implements IAgeRatingContentDescriptionResult {
        constructor(properties?: proto.IAgeRatingContentDescriptionResult);
        public ageratingcontentdescriptions: proto.IAgeRatingContentDescription[];
    }

    interface IAgeRatingContentDescription {
        id?: (number|null);
        category?: (proto.AgeRatingRatingEnum|null);
        description?: (string|null);
        checksum?: (string|null);
    }

    class AgeRatingContentDescription implements IAgeRatingContentDescription {
        constructor(properties?: proto.IAgeRatingContentDescription);
        public id: number;
        public category: proto.AgeRatingRatingEnum;
        public description: string;
        public checksum: string;
    }

    interface IAlternativeNameResult {
        alternativenames?: (proto.IAlternativeName[]|null);
    }

    class AlternativeNameResult implements IAlternativeNameResult {
        constructor(properties?: proto.IAlternativeNameResult);
        public alternativenames: proto.IAlternativeName[];
    }

    interface IAlternativeName {
        id?: (number|null);
        comment?: (string|null);
        game?: (proto.IGame|null);
        name?: (string|null);
        checksum?: (string|null);
    }

    class AlternativeName implements IAlternativeName {
        constructor(properties?: proto.IAlternativeName);
        public id: number;
        public comment: string;
        public game?: (proto.IGame|null);
        public name: string;
        public checksum: string;
    }

    interface IArtworkResult {
        artworks?: (proto.IArtwork[]|null);
    }

    class ArtworkResult implements IArtworkResult {
        constructor(properties?: proto.IArtworkResult);
        public artworks: proto.IArtwork[];
    }

    interface IArtwork {
        id?: (number|null);
        alpha_channel?: (boolean|null);
        animated?: (boolean|null);
        game?: (proto.IGame|null);
        height?: (number|null);
        image_id?: (string|null);
        url?: (string|null);
        width?: (number|null);
        checksum?: (string|null);
    }

    class Artwork implements IArtwork {
        constructor(properties?: proto.IArtwork);
        public id: number;
        public alpha_channel: boolean;
        public animated: boolean;
        public game?: (proto.IGame|null);
        public height: number;
        public image_id: string;
        public url: string;
        public width: number;
        public checksum: string;
    }

    interface ICharacterResult {
        characters?: (proto.ICharacter[]|null);
    }

    class CharacterResult implements ICharacterResult {
        constructor(properties?: proto.ICharacterResult);
        public characters: proto.ICharacter[];
    }

    interface ICharacter {
        id?: (number|null);
        akas?: (string[]|null);
        country_name?: (string|null);
        created_at?: (number|null);
        description?: (string|null);
        games?: (proto.IGame[]|null);
        gender?: (proto.GenderGenderEnum|null);
        mug_shot?: (proto.ICharacterMugShot|null);
        name?: (string|null);
        slug?: (string|null);
        species?: (proto.CharacterSpeciesEnum|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class Character implements ICharacter {
        constructor(properties?: proto.ICharacter);
        public id: number;
        public akas: string[];
        public country_name: string;
        public created_at?: (number|null);
        public description: string;
        public games: proto.IGame[];
        public gender: proto.GenderGenderEnum;
        public mug_shot?: (proto.ICharacterMugShot|null);
        public name: string;
        public slug: string;
        public species: proto.CharacterSpeciesEnum;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    enum GenderGenderEnum {
        MALE = 0,
        FEMALE = 1,
        OTHER = 2
    }

    enum CharacterSpeciesEnum {
        CHARACTER_SPECIES_NULL = 0,
        HUMAN = 1,
        ALIEN = 2,
        ANIMAL = 3,
        ANDROID = 4,
        UNKNOWN = 5
    }

    interface ICharacterMugShotResult {
        charactermugshots?: (proto.ICharacterMugShot[]|null);
    }

    class CharacterMugShotResult implements ICharacterMugShotResult {
        constructor(properties?: proto.ICharacterMugShotResult);
        public charactermugshots: proto.ICharacterMugShot[];
    }

    interface ICharacterMugShot {
        id?: (number|null);
        alpha_channel?: (boolean|null);
        animated?: (boolean|null);
        height?: (number|null);
        image_id?: (string|null);
        url?: (string|null);
        width?: (number|null);
        checksum?: (string|null);
    }

    class CharacterMugShot implements ICharacterMugShot {
        constructor(properties?: proto.ICharacterMugShot);
        public id: number;
        public alpha_channel: boolean;
        public animated: boolean;
        public height: number;
        public image_id: string;
        public url: string;
        public width: number;
        public checksum: string;
    }

    interface ICollectionResult {
        collections?: (proto.ICollection[]|null);
    }

    class CollectionResult implements ICollectionResult {
        constructor(properties?: proto.ICollectionResult);
        public collections: proto.ICollection[];
    }

    interface ICollection {
        id?: (number|null);
        created_at?: (number|null);
        games?: (proto.IGame[]|null);
        name?: (string|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class Collection implements ICollection {
        constructor(properties?: proto.ICollection);
        public id: number;
        public created_at?: (number|null);
        public games: proto.IGame[];
        public name: string;
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface ICompanyResult {
        companies?: (proto.ICompany[]|null);
    }

    class CompanyResult implements ICompanyResult {
        constructor(properties?: proto.ICompanyResult);
        public companies: proto.ICompany[];
    }

    interface ICompany {
        id?: (number|null);
        change_date?: (number|null);
        change_date_category?: (proto.DateFormatChangeDateCategoryEnum|null);
        changed_company_id?: (proto.ICompany|null);
        country?: (number|null);
        created_at?: (number|null);
        description?: (string|null);
        developed?: (proto.IGame[]|null);
        logo?: (proto.ICompanyLogo|null);
        name?: (string|null);
        parent?: (proto.ICompany|null);
        published?: (proto.IGame[]|null);
        slug?: (string|null);
        start_date?: (number|null);
        start_date_category?: (proto.DateFormatChangeDateCategoryEnum|null);
        updated_at?: (number|null);
        url?: (string|null);
        websites?: (proto.ICompanyWebsite[]|null);
        checksum?: (string|null);
    }

    class Company implements ICompany {
        constructor(properties?: proto.ICompany);
        public id: number;
        public change_date?: (number|null);
        public change_date_category: proto.DateFormatChangeDateCategoryEnum;
        public changed_company_id?: (proto.ICompany|null);
        public country: number;
        public created_at?: (number|null);
        public description: string;
        public developed: proto.IGame[];
        public logo?: (proto.ICompanyLogo|null);
        public name: string;
        public parent?: (proto.ICompany|null);
        public published: proto.IGame[];
        public slug: string;
        public start_date?: (number|null);
        public start_date_category: proto.DateFormatChangeDateCategoryEnum;
        public updated_at?: (number|null);
        public url: string;
        public websites: proto.ICompanyWebsite[];
        public checksum: string;
    }

    enum DateFormatChangeDateCategoryEnum {
        YYYYMMMMDD = 0,
        YYYYMMMM = 1,
        YYYY = 2,
        YYYYQ1 = 3,
        YYYYQ2 = 4,
        YYYYQ3 = 5,
        YYYYQ4 = 6,
        TBD = 7
    }

    interface ICompanyLogoResult {
        companylogos?: (proto.ICompanyLogo[]|null);
    }

    class CompanyLogoResult implements ICompanyLogoResult {
        constructor(properties?: proto.ICompanyLogoResult);
        public companylogos: proto.ICompanyLogo[];
    }

    interface ICompanyLogo {
        id?: (number|null);
        alpha_channel?: (boolean|null);
        animated?: (boolean|null);
        height?: (number|null);
        image_id?: (string|null);
        url?: (string|null);
        width?: (number|null);
        checksum?: (string|null);
    }

    class CompanyLogo implements ICompanyLogo {
        constructor(properties?: proto.ICompanyLogo);
        public id: number;
        public alpha_channel: boolean;
        public animated: boolean;
        public height: number;
        public image_id: string;
        public url: string;
        public width: number;
        public checksum: string;
    }

    interface ICompanyWebsiteResult {
        companywebsites?: (proto.ICompanyWebsite[]|null);
    }

    class CompanyWebsiteResult implements ICompanyWebsiteResult {
        constructor(properties?: proto.ICompanyWebsiteResult);
        public companywebsites: proto.ICompanyWebsite[];
    }

    interface ICompanyWebsite {
        id?: (number|null);
        category?: (proto.WebsiteCategoryEnum|null);
        trusted?: (boolean|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class CompanyWebsite implements ICompanyWebsite {
        constructor(properties?: proto.ICompanyWebsite);
        public id: number;
        public category: proto.WebsiteCategoryEnum;
        public trusted: boolean;
        public url: string;
        public checksum: string;
    }

    enum WebsiteCategoryEnum {
        WEBSITE_CATEGORY_NULL = 0,
        WEBSITE_OFFICIAL = 1,
        WEBSITE_WIKIA = 2,
        WEBSITE_WIKIPEDIA = 3,
        WEBSITE_FACEBOOK = 4,
        WEBSITE_TWITTER = 5,
        WEBSITE_TWITCH = 6,
        WEBSITE_INSTAGRAM = 8,
        WEBSITE_YOUTUBE = 9,
        WEBSITE_IPHONE = 10,
        WEBSITE_IPAD = 11,
        WEBSITE_ANDROID = 12,
        WEBSITE_STEAM = 13,
        WEBSITE_REDDIT = 14,
        WEBSITE_ITCH = 15,
        WEBSITE_EPICGAMES = 16,
        WEBSITE_GOG = 17,
        WEBSITE_DISCORD = 18
    }

    interface ICoverResult {
        covers?: (proto.ICover[]|null);
    }

    class CoverResult implements ICoverResult {
        constructor(properties?: proto.ICoverResult);
        public covers: proto.ICover[];
    }

    interface ICover {
        id?: (number|null);
        alpha_channel?: (boolean|null);
        animated?: (boolean|null);
        game?: (proto.IGame|null);
        height?: (number|null);
        image_id?: (string|null);
        url?: (string|null);
        width?: (number|null);
        checksum?: (string|null);
    }

    class Cover implements ICover {
        constructor(properties?: proto.ICover);
        public id: number;
        public alpha_channel: boolean;
        public animated: boolean;
        public game?: (proto.IGame|null);
        public height: number;
        public image_id: string;
        public url: string;
        public width: number;
        public checksum: string;
    }

    interface IExternalGameResult {
        externalgames?: (proto.IExternalGame[]|null);
    }

    class ExternalGameResult implements IExternalGameResult {
        constructor(properties?: proto.IExternalGameResult);
        public externalgames: proto.IExternalGame[];
    }

    interface IExternalGame {
        id?: (number|null);
        category?: (proto.ExternalGameCategoryEnum|null);
        created_at?: (number|null);
        game?: (proto.IGame|null);
        name?: (string|null);
        uid?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        year?: (number|null);
        media?: (proto.ExternalGameMediaEnum|null);
        platform?: (proto.IPlatform|null);
        countries?: (number[]|null);
        checksum?: (string|null);
    }

    class ExternalGame implements IExternalGame {
        constructor(properties?: proto.IExternalGame);
        public id: number;
        public category: proto.ExternalGameCategoryEnum;
        public created_at?: (number|null);
        public game?: (proto.IGame|null);
        public name: string;
        public uid: string;
        public updated_at?: (number|null);
        public url: string;
        public year: number;
        public media: proto.ExternalGameMediaEnum;
        public platform?: (proto.IPlatform|null);
        public countries: number[];
        public checksum: string;
    }

    enum ExternalGameCategoryEnum {
        EXTERNALGAME_CATEGORY_NULL = 0,
        EXTERNALGAME_STEAM = 1,
        EXTERNALGAME_GOG = 5,
        EXTERNALGAME_YOUTUBE = 10,
        EXTERNALGAME_MICROSOFT = 11,
        EXTERNALGAME_APPLE = 13,
        EXTERNALGAME_TWITCH = 14,
        EXTERNALGAME_ANDROID = 15,
        EXTERNALGAME_AMAZON_ASIN = 20,
        EXTERNALGAME_AMAZON_LUNA = 22,
        EXTERNALGAME_AMAZON_ADG = 23,
        EXTERNALGAME_EPIC_GAME_STORE = 26,
        EXTERNALGAME_OCULUS = 28
    }

    enum ExternalGameMediaEnum {
        EXTERNALGAME_MEDIA_NULL = 0,
        EXTERNALGAME_DIGITAL = 1,
        EXTERNALGAME_PHYSICAL = 2
    }

    interface IFranchiseResult {
        franchises?: (proto.IFranchise[]|null);
    }

    class FranchiseResult implements IFranchiseResult {
        constructor(properties?: proto.IFranchiseResult);
        public franchises: proto.IFranchise[];
    }

    interface IFranchise {
        id?: (number|null);
        created_at?: (number|null);
        games?: (proto.IGame[]|null);
        name?: (string|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class Franchise implements IFranchise {
        constructor(properties?: proto.IFranchise);
        public id: number;
        public created_at?: (number|null);
        public games: proto.IGame[];
        public name: string;
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IGameResult {
        games?: (proto.IGame[]|null);
    }

    class GameResult implements IGameResult {
        constructor(properties?: proto.IGameResult);
        public games: proto.IGame[];
    }

    interface IGame {
        id?: (number|null);
        age_ratings?: (proto.IAgeRating[]|null);
        aggregated_rating?: (number|null);
        aggregated_rating_count?: (number|null);
        alternative_names?: (proto.IAlternativeName[]|null);
        artworks?: (proto.IArtwork[]|null);
        bundles?: (proto.IGame[]|null);
        category?: (proto.GameCategoryEnum|null);
        collection?: (proto.ICollection|null);
        cover?: (proto.ICover|null);
        created_at?: (number|null);
        dlcs?: (proto.IGame[]|null);
        expansions?: (proto.IGame[]|null);
        external_games?: (proto.IExternalGame[]|null);
        first_release_date?: (number|null);
        follows?: (number|null);
        franchise?: (proto.IFranchise|null);
        franchises?: (proto.IFranchise[]|null);
        game_engines?: (proto.IGameEngine[]|null);
        game_modes?: (proto.IGameMode[]|null);
        genres?: (proto.IGenre[]|null);
        hypes?: (number|null);
        involved_companies?: (proto.IInvolvedCompany[]|null);
        keywords?: (proto.IKeyword[]|null);
        multiplayer_modes?: (proto.IMultiplayerMode[]|null);
        name?: (string|null);
        parent_game?: (proto.IGame|null);
        platforms?: (proto.IPlatform[]|null);
        player_perspectives?: (proto.IPlayerPerspective[]|null);
        rating?: (number|null);
        rating_count?: (number|null);
        release_dates?: (proto.IReleaseDate[]|null);
        screenshots?: (proto.IScreenshot[]|null);
        similar_games?: (proto.IGame[]|null);
        slug?: (string|null);
        standalone_expansions?: (proto.IGame[]|null);
        status?: (proto.GameStatusEnum|null);
        storyline?: (string|null);
        summary?: (string|null);
        tags?: (number[]|null);
        themes?: (proto.ITheme[]|null);
        total_rating?: (number|null);
        total_rating_count?: (number|null);
        updated_at?: (number|null);
        url?: (string|null);
        version_parent?: (proto.IGame|null);
        version_title?: (string|null);
        videos?: (proto.IGameVideo[]|null);
        websites?: (proto.IWebsite[]|null);
        checksum?: (string|null);
        remakes?: (proto.IGame[]|null);
        remasters?: (proto.IGame[]|null);
        expanded_games?: (proto.IGame[]|null);
        ports?: (proto.IGame[]|null);
        forks?: (proto.IGame[]|null);
    }

    class Game implements IGame {
        constructor(properties?: proto.IGame);
        public id: number;
        public age_ratings: proto.IAgeRating[];
        public aggregated_rating: number;
        public aggregated_rating_count: number;
        public alternative_names: proto.IAlternativeName[];
        public artworks: proto.IArtwork[];
        public bundles: proto.IGame[];
        public category: proto.GameCategoryEnum;
        public collection?: (proto.ICollection|null);
        public cover?: (proto.ICover|null);
        public created_at?: (number|null);
        public dlcs: proto.IGame[];
        public expansions: proto.IGame[];
        public external_games: proto.IExternalGame[];
        public first_release_date?: (number|null);
        public follows: number;
        public franchise?: (proto.IFranchise|null);
        public franchises: proto.IFranchise[];
        public game_engines: proto.IGameEngine[];
        public game_modes: proto.IGameMode[];
        public genres: proto.IGenre[];
        public hypes: number;
        public involved_companies: proto.IInvolvedCompany[];
        public keywords: proto.IKeyword[];
        public multiplayer_modes: proto.IMultiplayerMode[];
        public name: string;
        public parent_game?: (proto.IGame|null);
        public platforms: proto.IPlatform[];
        public player_perspectives: proto.IPlayerPerspective[];
        public rating: number;
        public rating_count: number;
        public release_dates: proto.IReleaseDate[];
        public screenshots: proto.IScreenshot[];
        public similar_games: proto.IGame[];
        public slug: string;
        public standalone_expansions: proto.IGame[];
        public status: proto.GameStatusEnum;
        public storyline: string;
        public summary: string;
        public tags: number[];
        public themes: proto.ITheme[];
        public total_rating: number;
        public total_rating_count: number;
        public updated_at?: (number|null);
        public url: string;
        public version_parent?: (proto.IGame|null);
        public version_title: string;
        public videos: proto.IGameVideo[];
        public websites: proto.IWebsite[];
        public checksum: string;
        public remakes: proto.IGame[];
        public remasters: proto.IGame[];
        public expanded_games: proto.IGame[];
        public ports: proto.IGame[];
        public forks: proto.IGame[];
    }

    enum GameCategoryEnum {
        MAIN_GAME = 0,
        DLC_ADDON = 1,
        EXPANSION = 2,
        BUNDLE = 3,
        STANDALONE_EXPANSION = 4,
        MOD = 5,
        EPISODE = 6,
        SEASON = 7,
        REMAKE = 8,
        REMASTER = 9,
        EXPANDED_GAME = 10,
        PORT = 11,
        FORK = 12
    }

    enum GameStatusEnum {
        RELEASED = 0,
        ALPHA = 2,
        BETA = 3,
        EARLY_ACCESS = 4,
        OFFLINE = 5,
        CANCELLED = 6,
        RUMORED = 7,
        DELISTED = 8
    }

    interface IGameEngineResult {
        gameengines?: (proto.IGameEngine[]|null);
    }

    class GameEngineResult implements IGameEngineResult {
        constructor(properties?: proto.IGameEngineResult);
        public gameengines: proto.IGameEngine[];
    }

    interface IGameEngine {
        id?: (number|null);
        companies?: (proto.ICompany[]|null);
        created_at?: (number|null);
        description?: (string|null);
        logo?: (proto.IGameEngineLogo|null);
        name?: (string|null);
        platforms?: (proto.IPlatform[]|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class GameEngine implements IGameEngine {
        constructor(properties?: proto.IGameEngine);
        public id: number;
        public companies: proto.ICompany[];
        public created_at?: (number|null);
        public description: string;
        public logo?: (proto.IGameEngineLogo|null);
        public name: string;
        public platforms: proto.IPlatform[];
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IGameEngineLogoResult {
        gameenginelogos?: (proto.IGameEngineLogo[]|null);
    }

    class GameEngineLogoResult implements IGameEngineLogoResult {
        constructor(properties?: proto.IGameEngineLogoResult);
        public gameenginelogos: proto.IGameEngineLogo[];
    }

    interface IGameEngineLogo {
        id?: (number|null);
        alpha_channel?: (boolean|null);
        animated?: (boolean|null);
        height?: (number|null);
        image_id?: (string|null);
        url?: (string|null);
        width?: (number|null);
        checksum?: (string|null);
    }

    class GameEngineLogo implements IGameEngineLogo {
        constructor(properties?: proto.IGameEngineLogo);
        public id: number;
        public alpha_channel: boolean;
        public animated: boolean;
        public height: number;
        public image_id: string;
        public url: string;
        public width: number;
        public checksum: string;
    }

    interface IGameModeResult {
        gamemodes?: (proto.IGameMode[]|null);
    }

    class GameModeResult implements IGameModeResult {
        constructor(properties?: proto.IGameModeResult);
        public gamemodes: proto.IGameMode[];
    }

    interface IGameMode {
        id?: (number|null);
        created_at?: (number|null);
        name?: (string|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class GameMode implements IGameMode {
        constructor(properties?: proto.IGameMode);
        public id: number;
        public created_at?: (number|null);
        public name: string;
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IGameVersionResult {
        gameversions?: (proto.IGameVersion[]|null);
    }

    class GameVersionResult implements IGameVersionResult {
        constructor(properties?: proto.IGameVersionResult);
        public gameversions: proto.IGameVersion[];
    }

    interface IGameVersion {
        id?: (number|null);
        created_at?: (number|null);
        features?: (proto.IGameVersionFeature[]|null);
        game?: (proto.IGame|null);
        games?: (proto.IGame[]|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class GameVersion implements IGameVersion {
        constructor(properties?: proto.IGameVersion);
        public id: number;
        public created_at?: (number|null);
        public features: proto.IGameVersionFeature[];
        public game?: (proto.IGame|null);
        public games: proto.IGame[];
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IGameVersionFeatureResult {
        gameversionfeatures?: (proto.IGameVersionFeature[]|null);
    }

    class GameVersionFeatureResult implements IGameVersionFeatureResult {
        constructor(properties?: proto.IGameVersionFeatureResult);
        public gameversionfeatures: proto.IGameVersionFeature[];
    }

    interface IGameVersionFeature {
        id?: (number|null);
        category?: (proto.GameVersionFeatureCategoryEnum|null);
        description?: (string|null);
        position?: (number|null);
        title?: (string|null);
        values?: (proto.IGameVersionFeatureValue[]|null);
        checksum?: (string|null);
    }

    class GameVersionFeature implements IGameVersionFeature {
        constructor(properties?: proto.IGameVersionFeature);
        public id: number;
        public category: proto.GameVersionFeatureCategoryEnum;
        public description: string;
        public position: number;
        public title: string;
        public values: proto.IGameVersionFeatureValue[];
        public checksum: string;
    }

    enum GameVersionFeatureCategoryEnum {
        BOOLEAN = 0,
        DESCRIPTION = 1
    }

    interface IGameVersionFeatureValueResult {
        gameversionfeaturevalues?: (proto.IGameVersionFeatureValue[]|null);
    }

    class GameVersionFeatureValueResult implements IGameVersionFeatureValueResult {
        constructor(properties?: proto.IGameVersionFeatureValueResult);
        public gameversionfeaturevalues: proto.IGameVersionFeatureValue[];
    }

    interface IGameVersionFeatureValue {
        id?: (number|null);
        game?: (proto.IGame|null);
        game_feature?: (proto.IGameVersionFeature|null);
        included_feature?: (proto.GameVersionFeatureValueIncludedFeatureEnum|null);
        note?: (string|null);
        checksum?: (string|null);
    }

    class GameVersionFeatureValue implements IGameVersionFeatureValue {
        constructor(properties?: proto.IGameVersionFeatureValue);
        public id: number;
        public game?: (proto.IGame|null);
        public game_feature?: (proto.IGameVersionFeature|null);
        public included_feature: proto.GameVersionFeatureValueIncludedFeatureEnum;
        public note: string;
        public checksum: string;
    }

    enum GameVersionFeatureValueIncludedFeatureEnum {
        NOT_INCLUDED = 0,
        INCLUDED = 1,
        PRE_ORDER_ONLY = 2
    }

    interface IGameVideoResult {
        gamevideos?: (proto.IGameVideo[]|null);
    }

    class GameVideoResult implements IGameVideoResult {
        constructor(properties?: proto.IGameVideoResult);
        public gamevideos: proto.IGameVideo[];
    }

    interface IGameVideo {
        id?: (number|null);
        game?: (proto.IGame|null);
        name?: (string|null);
        video_id?: (string|null);
        checksum?: (string|null);
    }

    class GameVideo implements IGameVideo {
        constructor(properties?: proto.IGameVideo);
        public id: number;
        public game?: (proto.IGame|null);
        public name: string;
        public video_id: string;
        public checksum: string;
    }

    interface IGenreResult {
        genres?: (proto.IGenre[]|null);
    }

    class GenreResult implements IGenreResult {
        constructor(properties?: proto.IGenreResult);
        public genres: proto.IGenre[];
    }

    interface IGenre {
        id?: (number|null);
        created_at?: (number|null);
        name?: (string|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class Genre implements IGenre {
        constructor(properties?: proto.IGenre);
        public id: number;
        public created_at?: (number|null);
        public name: string;
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IInvolvedCompanyResult {
        involvedcompanies?: (proto.IInvolvedCompany[]|null);
    }

    class InvolvedCompanyResult implements IInvolvedCompanyResult {
        constructor(properties?: proto.IInvolvedCompanyResult);
        public involvedcompanies: proto.IInvolvedCompany[];
    }

    interface IInvolvedCompany {
        id?: (number|null);
        company?: (proto.ICompany|null);
        created_at?: (number|null);
        developer?: (boolean|null);
        game?: (proto.IGame|null);
        porting?: (boolean|null);
        publisher?: (boolean|null);
        supporting?: (boolean|null);
        updated_at?: (number|null);
        checksum?: (string|null);
    }

    class InvolvedCompany implements IInvolvedCompany {
        constructor(properties?: proto.IInvolvedCompany);
        public id: number;
        public company?: (proto.ICompany|null);
        public created_at?: (number|null);
        public developer: boolean;
        public game?: (proto.IGame|null);
        public porting: boolean;
        public publisher: boolean;
        public supporting: boolean;
        public updated_at?: (number|null);
        public checksum: string;
    }

    interface IKeywordResult {
        keywords?: (proto.IKeyword[]|null);
    }

    class KeywordResult implements IKeywordResult {
        constructor(properties?: proto.IKeywordResult);
        public keywords: proto.IKeyword[];
    }

    interface IKeyword {
        id?: (number|null);
        created_at?: (number|null);
        name?: (string|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class Keyword implements IKeyword {
        constructor(properties?: proto.IKeyword);
        public id: number;
        public created_at?: (number|null);
        public name: string;
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IMultiplayerModeResult {
        multiplayermodes?: (proto.IMultiplayerMode[]|null);
    }

    class MultiplayerModeResult implements IMultiplayerModeResult {
        constructor(properties?: proto.IMultiplayerModeResult);
        public multiplayermodes: proto.IMultiplayerMode[];
    }

    interface IMultiplayerMode {
        id?: (number|null);
        campaigncoop?: (boolean|null);
        dropin?: (boolean|null);
        game?: (proto.IGame|null);
        lancoop?: (boolean|null);
        offlinecoop?: (boolean|null);
        offlinecoopmax?: (number|null);
        offlinemax?: (number|null);
        onlinecoop?: (boolean|null);
        onlinecoopmax?: (number|null);
        onlinemax?: (number|null);
        platform?: (proto.IPlatform|null);
        splitscreen?: (boolean|null);
        splitscreenonline?: (boolean|null);
        checksum?: (string|null);
    }

    class MultiplayerMode implements IMultiplayerMode {
        constructor(properties?: proto.IMultiplayerMode);
        public id: number;
        public campaigncoop: boolean;
        public dropin: boolean;
        public game?: (proto.IGame|null);
        public lancoop: boolean;
        public offlinecoop: boolean;
        public offlinecoopmax: number;
        public offlinemax: number;
        public onlinecoop: boolean;
        public onlinecoopmax: number;
        public onlinemax: number;
        public platform?: (proto.IPlatform|null);
        public splitscreen: boolean;
        public splitscreenonline: boolean;
        public checksum: string;
    }

    interface IPlatformResult {
        platforms?: (proto.IPlatform[]|null);
    }

    class PlatformResult implements IPlatformResult {
        constructor(properties?: proto.IPlatformResult);
        public platforms: proto.IPlatform[];
    }

    interface IPlatform {
        id?: (number|null);
        abbreviation?: (string|null);
        alternative_name?: (string|null);
        category?: (proto.PlatformCategoryEnum|null);
        created_at?: (number|null);
        generation?: (number|null);
        name?: (string|null);
        platform_logo?: (proto.IPlatformLogo|null);
        platform_family?: (proto.IPlatformFamily|null);
        slug?: (string|null);
        summary?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        versions?: (proto.IPlatformVersion[]|null);
        websites?: (proto.IPlatformWebsite[]|null);
        checksum?: (string|null);
    }

    class Platform implements IPlatform {
        constructor(properties?: proto.IPlatform);
        public id: number;
        public abbreviation: string;
        public alternative_name: string;
        public category: proto.PlatformCategoryEnum;
        public created_at?: (number|null);
        public generation: number;
        public name: string;
        public platform_logo?: (proto.IPlatformLogo|null);
        public platform_family?: (proto.IPlatformFamily|null);
        public slug: string;
        public summary: string;
        public updated_at?: (number|null);
        public url: string;
        public versions: proto.IPlatformVersion[];
        public websites: proto.IPlatformWebsite[];
        public checksum: string;
    }

    enum PlatformCategoryEnum {
        PLATFORM_CATEGORY_NULL = 0,
        CONSOLE = 1,
        ARCADE = 2,
        PLATFORM = 3,
        OPERATING_SYSTEM = 4,
        PORTABLE_CONSOLE = 5,
        COMPUTER = 6
    }

    interface IPlatformFamilyResult {
        platformfamilies?: (proto.IPlatformFamily[]|null);
    }

    class PlatformFamilyResult implements IPlatformFamilyResult {
        constructor(properties?: proto.IPlatformFamilyResult);
        public platformfamilies: proto.IPlatformFamily[];
    }

    interface IPlatformFamily {
        id?: (number|null);
        name?: (string|null);
        slug?: (string|null);
        checksum?: (string|null);
    }

    class PlatformFamily implements IPlatformFamily {
        constructor(properties?: proto.IPlatformFamily);
        public id: number;
        public name: string;
        public slug: string;
        public checksum: string;
    }

    interface IPlatformLogoResult {
        platformlogos?: (proto.IPlatformLogo[]|null);
    }

    class PlatformLogoResult implements IPlatformLogoResult {
        constructor(properties?: proto.IPlatformLogoResult);
        public platformlogos: proto.IPlatformLogo[];
    }

    interface IPlatformLogo {
        id?: (number|null);
        alpha_channel?: (boolean|null);
        animated?: (boolean|null);
        height?: (number|null);
        image_id?: (string|null);
        url?: (string|null);
        width?: (number|null);
        checksum?: (string|null);
    }

    class PlatformLogo implements IPlatformLogo {
        constructor(properties?: proto.IPlatformLogo);
        public id: number;
        public alpha_channel: boolean;
        public animated: boolean;
        public height: number;
        public image_id: string;
        public url: string;
        public width: number;
        public checksum: string;
    }

    interface IPlatformVersionResult {
        platformversions?: (proto.IPlatformVersion[]|null);
    }

    class PlatformVersionResult implements IPlatformVersionResult {
        constructor(properties?: proto.IPlatformVersionResult);
        public platformversions: proto.IPlatformVersion[];
    }

    interface IPlatformVersion {
        id?: (number|null);
        companies?: (proto.IPlatformVersionCompany[]|null);
        connectivity?: (string|null);
        cpu?: (string|null);
        graphics?: (string|null);
        main_manufacturer?: (proto.IPlatformVersionCompany|null);
        media?: (string|null);
        memory?: (string|null);
        name?: (string|null);
        online?: (string|null);
        os?: (string|null);
        output?: (string|null);
        platform_logo?: (proto.IPlatformLogo|null);
        platform_version_release_dates?: (proto.IPlatformVersionReleaseDate[]|null);
        resolutions?: (string|null);
        slug?: (string|null);
        sound?: (string|null);
        storage?: (string|null);
        summary?: (string|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class PlatformVersion implements IPlatformVersion {
        constructor(properties?: proto.IPlatformVersion);
        public id: number;
        public companies: proto.IPlatformVersionCompany[];
        public connectivity: string;
        public cpu: string;
        public graphics: string;
        public main_manufacturer?: (proto.IPlatformVersionCompany|null);
        public media: string;
        public memory: string;
        public name: string;
        public online: string;
        public os: string;
        public output: string;
        public platform_logo?: (proto.IPlatformLogo|null);
        public platform_version_release_dates: proto.IPlatformVersionReleaseDate[];
        public resolutions: string;
        public slug: string;
        public sound: string;
        public storage: string;
        public summary: string;
        public url: string;
        public checksum: string;
    }

    interface IPlatformVersionCompanyResult {
        platformversioncompanies?: (proto.IPlatformVersionCompany[]|null);
    }

    class PlatformVersionCompanyResult implements IPlatformVersionCompanyResult {
        constructor(properties?: proto.IPlatformVersionCompanyResult);
        public platformversioncompanies: proto.IPlatformVersionCompany[];
    }

    interface IPlatformVersionCompany {
        id?: (number|null);
        comment?: (string|null);
        company?: (proto.ICompany|null);
        developer?: (boolean|null);
        manufacturer?: (boolean|null);
        checksum?: (string|null);
    }

    class PlatformVersionCompany implements IPlatformVersionCompany {
        constructor(properties?: proto.IPlatformVersionCompany);
        public id: number;
        public comment: string;
        public company?: (proto.ICompany|null);
        public developer: boolean;
        public manufacturer: boolean;
        public checksum: string;
    }

    interface IPlatformVersionReleaseDateResult {
        platformversionreleasedates?: (proto.IPlatformVersionReleaseDate[]|null);
    }

    class PlatformVersionReleaseDateResult implements IPlatformVersionReleaseDateResult {
        constructor(properties?: proto.IPlatformVersionReleaseDateResult);
        public platformversionreleasedates: proto.IPlatformVersionReleaseDate[];
    }

    interface IPlatformVersionReleaseDate {
        id?: (number|null);
        category?: (proto.DateFormatChangeDateCategoryEnum|null);
        created_at?: (number|null);
        date?: (number|null);
        human?: (string|null);
        m?: (number|null);
        platform_version?: (proto.IPlatformVersion|null);
        region?: (proto.RegionRegionEnum|null);
        updated_at?: (number|null);
        y?: (number|null);
        checksum?: (string|null);
    }

    class PlatformVersionReleaseDate implements IPlatformVersionReleaseDate {
        constructor(properties?: proto.IPlatformVersionReleaseDate);
        public id: number;
        public category: proto.DateFormatChangeDateCategoryEnum;
        public created_at?: (number|null);
        public date?: (number|null);
        public human: string;
        public m: number;
        public platform_version?: (proto.IPlatformVersion|null);
        public region: proto.RegionRegionEnum;
        public updated_at?: (number|null);
        public y: number;
        public checksum: string;
    }

    enum RegionRegionEnum {
        REGION_REGION_NULL = 0,
        EUROPE = 1,
        NORTH_AMERICA = 2,
        AUSTRALIA = 3,
        NEW_ZEALAND = 4,
        JAPAN = 5,
        CHINA = 6,
        ASIA = 7,
        WORLDWIDE = 8,
        KOREA = 9,
        BRAZIL = 10
    }

    interface IPlatformWebsiteResult {
        platformwebsites?: (proto.IPlatformWebsite[]|null);
    }

    class PlatformWebsiteResult implements IPlatformWebsiteResult {
        constructor(properties?: proto.IPlatformWebsiteResult);
        public platformwebsites: proto.IPlatformWebsite[];
    }

    interface IPlatformWebsite {
        id?: (number|null);
        category?: (proto.WebsiteCategoryEnum|null);
        trusted?: (boolean|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class PlatformWebsite implements IPlatformWebsite {
        constructor(properties?: proto.IPlatformWebsite);
        public id: number;
        public category: proto.WebsiteCategoryEnum;
        public trusted: boolean;
        public url: string;
        public checksum: string;
    }

    interface IPlayerPerspectiveResult {
        playerperspectives?: (proto.IPlayerPerspective[]|null);
    }

    class PlayerPerspectiveResult implements IPlayerPerspectiveResult {
        constructor(properties?: proto.IPlayerPerspectiveResult);
        public playerperspectives: proto.IPlayerPerspective[];
    }

    interface IPlayerPerspective {
        id?: (number|null);
        created_at?: (number|null);
        name?: (string|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class PlayerPerspective implements IPlayerPerspective {
        constructor(properties?: proto.IPlayerPerspective);
        public id: number;
        public created_at?: (number|null);
        public name: string;
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IReleaseDateResult {
        releasedates?: (proto.IReleaseDate[]|null);
    }

    class ReleaseDateResult implements IReleaseDateResult {
        constructor(properties?: proto.IReleaseDateResult);
        public releasedates: proto.IReleaseDate[];
    }

    interface IReleaseDate {
        id?: (number|null);
        category?: (proto.DateFormatChangeDateCategoryEnum|null);
        created_at?: (number|null);
        date?: (number|null);
        game?: (proto.IGame|null);
        human?: (string|null);
        m?: (number|null);
        platform?: (proto.IPlatform|null);
        region?: (proto.RegionRegionEnum|null);
        updated_at?: (number|null);
        y?: (number|null);
        checksum?: (string|null);
    }

    class ReleaseDate implements IReleaseDate {
        constructor(properties?: proto.IReleaseDate);
        public id: number;
        public category: proto.DateFormatChangeDateCategoryEnum;
        public created_at?: (number|null);
        public date?: (number|null);
        public game?: (proto.IGame|null);
        public human: string;
        public m: number;
        public platform?: (proto.IPlatform|null);
        public region: proto.RegionRegionEnum;
        public updated_at?: (number|null);
        public y: number;
        public checksum: string;
    }

    interface IScreenshotResult {
        screenshots?: (proto.IScreenshot[]|null);
    }

    class ScreenshotResult implements IScreenshotResult {
        constructor(properties?: proto.IScreenshotResult);
        public screenshots: proto.IScreenshot[];
    }

    interface IScreenshot {
        id?: (number|null);
        alpha_channel?: (boolean|null);
        animated?: (boolean|null);
        game?: (proto.IGame|null);
        height?: (number|null);
        image_id?: (string|null);
        url?: (string|null);
        width?: (number|null);
        checksum?: (string|null);
    }

    class Screenshot implements IScreenshot {
        constructor(properties?: proto.IScreenshot);
        public id: number;
        public alpha_channel: boolean;
        public animated: boolean;
        public game?: (proto.IGame|null);
        public height: number;
        public image_id: string;
        public url: string;
        public width: number;
        public checksum: string;
    }

    interface ISearchResult {
        searches?: (proto.ISearch[]|null);
    }

    class SearchResult implements ISearchResult {
        constructor(properties?: proto.ISearchResult);
        public searches: proto.ISearch[];
    }

    interface ISearch {
        id?: (number|null);
        alternative_name?: (string|null);
        character?: (proto.ICharacter|null);
        collection?: (proto.ICollection|null);
        company?: (proto.ICompany|null);
        description?: (string|null);
        game?: (proto.IGame|null);
        name?: (string|null);
        platform?: (proto.IPlatform|null);
        published_at?: (number|null);
        test_dummy?: (proto.ITestDummy|null);
        theme?: (proto.ITheme|null);
        checksum?: (string|null);
    }

    class Search implements ISearch {
        constructor(properties?: proto.ISearch);
        public id: number;
        public alternative_name: string;
        public character?: (proto.ICharacter|null);
        public collection?: (proto.ICollection|null);
        public company?: (proto.ICompany|null);
        public description: string;
        public game?: (proto.IGame|null);
        public name: string;
        public platform?: (proto.IPlatform|null);
        public published_at?: (number|null);
        public test_dummy?: (proto.ITestDummy|null);
        public theme?: (proto.ITheme|null);
        public checksum: string;
    }

    interface ITestDummyResult {
        testdummies?: (proto.ITestDummy[]|null);
    }

    class TestDummyResult implements ITestDummyResult {
        constructor(properties?: proto.ITestDummyResult);
        public testdummies: proto.ITestDummy[];
    }

    interface ITestDummy {
        id?: (number|null);
        bool_value?: (boolean|null);
        created_at?: (number|null);
        enum_test?: (proto.TestDummyEnumTestEnum|null);
        float_value?: (number|null);
        game?: (proto.IGame|null);
        integer_array?: (number[]|null);
        integer_value?: (number|null);
        name?: (string|null);
        new_integer_value?: (number|null);
        "private"?: (boolean|null);
        slug?: (string|null);
        string_array?: (string[]|null);
        test_dummies?: (proto.ITestDummy[]|null);
        test_dummy?: (proto.ITestDummy|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class TestDummy implements ITestDummy {
        constructor(properties?: proto.ITestDummy);
        public id: number;
        public bool_value: boolean;
        public created_at?: (number|null);
        public enum_test: proto.TestDummyEnumTestEnum;
        public float_value: number;
        public game?: (proto.IGame|null);
        public integer_array: number[];
        public integer_value: number;
        public name: string;
        public new_integer_value: number;
        public private: boolean;
        public slug: string;
        public string_array: string[];
        public test_dummies: proto.ITestDummy[];
        public test_dummy?: (proto.ITestDummy|null);
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    enum TestDummyEnumTestEnum {
        TESTDUMMY_ENUM_TEST_NULL = 0,
        ENUM1 = 1,
        ENUM2 = 2
    }

    interface IThemeResult {
        themes?: (proto.ITheme[]|null);
    }

    class ThemeResult implements IThemeResult {
        constructor(properties?: proto.IThemeResult);
        public themes: proto.ITheme[];
    }

    interface ITheme {
        id?: (number|null);
        created_at?: (number|null);
        name?: (string|null);
        slug?: (string|null);
        updated_at?: (number|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class Theme implements ITheme {
        constructor(properties?: proto.ITheme);
        public id: number;
        public created_at?: (number|null);
        public name: string;
        public slug: string;
        public updated_at?: (number|null);
        public url: string;
        public checksum: string;
    }

    interface IWebsiteResult {
        websites?: (proto.IWebsite[]|null);
    }

    class WebsiteResult implements IWebsiteResult {
        constructor(properties?: proto.IWebsiteResult);
        public websites: proto.IWebsite[];
    }

    interface IWebsite {
        id?: (number|null);
        category?: (proto.WebsiteCategoryEnum|null);
        game?: (proto.IGame|null);
        trusted?: (boolean|null);
        url?: (string|null);
        checksum?: (string|null);
    }

    class Website implements IWebsite {
        constructor(properties?: proto.IWebsite);
        public id: number;
        public category: proto.WebsiteCategoryEnum;
        public game?: (proto.IGame|null);
        public trusted: boolean;
        public url: string;
        public checksum: string;
    }
}

export namespace google {

    namespace protobuf {

        interface ITimestamp {
            seconds?: (number|null);
            nanos?: (number|null);
        }

        class Timestamp implements ITimestamp {
            constructor(properties?: number);
            public seconds: number;
            public nanos: number;
        }
    }
}
