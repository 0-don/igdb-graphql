import {registerEnumType} from 'type-graphql';

export enum AgeRatingCategoryEnum {
  AGERATING_CATEGORY_NULL = 0,
  ESRB = 1,
  PEGI = 2,
  CERO = 3,
  USK = 4,
  GRAC = 5,
  CLASS_IND = 6,
  ACB = 7,
  NULL8 = 8,
  NULL9 = 9,
  NULL10 = 10,
  NULL11 = 11,
  NULL12 = 12,
  NULL13 = 13,
  NULL14 = 14,
  NULL15 = 15,
  NULL16 = 16,
  NULL17 = 17,
  NULL18 = 18,
  NULL19 = 19,
  NULL20 = 20,
  NULL21 = 21,
  NULL22 = 22,
  NULL23 = 23,
  NULL24 = 24,
  NULL25 = 25,
  NULL26 = 26,
  NULL27 = 27,
  NULL28 = 28,
  NULL29 = 29,
  NULL30 = 30,
}

export enum AgeRatingRatingEnum {
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
  ACB_RC = 38,

  NULL39 = 39,
  NULL40 = 40,
  NULL41 = 41,
  NULL42 = 42,
  NULL43 = 43,
  NULL44 = 44,
  NULL45 = 45,
  NULL46 = 46,
  NULL47 = 47,
  NULL48 = 48,
  NULL49 = 49,
  NULL50 = 50,
  NULL51 = 51,
  NULL52 = 52,
  NULL53 = 53,
  NULL54 = 54,
  NULL55 = 55,
  NULL56 = 56,
  NULL57 = 57,
  NULL58 = 58,
  NULL59 = 59,
  NULL60 = 60,
  NULL61 = 61,
  NULL62 = 62,
  NULL63 = 63,
  NULL64 = 64,
  NULL65 = 65,
  NULL66 = 66,
  NULL67 = 67,
  NULL68 = 68,
  NULL69 = 69,
  NULL70 = 70,
  NULL71 = 71,
  NULL72 = 72,
  NULL73 = 73,
  NULL74 = 74,
  NULL75 = 75,
  NULL76 = 76,
  NULL77 = 77,
  NULL78 = 78,
  NULL79 = 79,
  NULL80 = 80,
  NULL81 = 81,
  NULL82 = 82,
  NULL83 = 83,
  NULL84 = 84,
  NULL85 = 85,
  NULL86 = 86,
  NULL87 = 87,
  NULL88 = 88,
  NULL89 = 89,
  NULL90 = 90,
  NULL91 = 91,
  NULL92 = 92,
  NULL93 = 93,
  NULL94 = 94,
  NULL95 = 95,
  NULL96 = 96,
  NULL97 = 97,
  NULL98 = 98,
  NULL99 = 99,
  NULL100 = 100,
}

export enum GenderGenderEnum {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2,
}

export enum CharacterSpeciesEnum {
  CHARACTER_SPECIES_NULL = 0,
  HUMAN = 1,
  ALIEN = 2,
  ANIMAL = 3,
  ANDROID = 4,
  UNKNOWN = 5,
}

export enum DateFormatChangeDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

export enum WebsiteCategoryEnum {
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
  WEBSITE_DISCORD = 18,
}

export enum GameCategoryEnum {
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
  FORK = 12,
}

export enum GameStatusEnum {
  RELEASED = 0,
  ALPHA = 2,
  BETA = 3,
  EARLY_ACCESS = 4,
  OFFLINE = 5,
  CANCELLED = 6,
  RUMORED = 7,
  DELISTED = 8,
}

export enum GameVersionFeatureCategoryEnum {
  BOOLEAN = 0,
  DESCRIPTION = 1,
}

export enum GameVersionFeatureValueIncludedFeatureEnum {
  NOT_INCLUDED = 0,
  INCLUDED = 1,
  PRE_ORDER_ONLY = 2,
}

export enum PlatformCategoryEnum {
  PLATFORM_CATEGORY_NULL = 0,
  CONSOLE = 1,
  ARCADE = 2,
  PLATFORM = 3,
  OPERATING_SYSTEM = 4,
  PORTABLE_CONSOLE = 5,
  COMPUTER = 6,
}

export enum RegionRegionEnum {
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
  BRAZIL = 10,
}

export enum TestDummyEnumTestEnum {
  TESTDUMMY_ENUM_TEST_NULL = 0,
  ENUM1 = 1,
  ENUM2 = 2,
}

export enum ExternalGameCategoryEnum {
  EXTERNALGAME_CATEGORY_NULL = 0,
  EXTERNALGAME_STEAM = 1,
  EXTERNALGAME_CATEGORY_UNDEFINED2 = 2,
  EXTERNALGAME_CATEGORY_UNDEFINED3 = 3,
  EXTERNALGAME_CATEGORY_UNDEFINED4 = 4,
  EXTERNALGAME_GOG = 5,
  EXTERNALGAME_CATEGORY_UNDEFINED6 = 6,
  EXTERNALGAME_CATEGORY_UNDEFINED7 = 7,
  EXTERNALGAME_CATEGORY_UNDEFINED8 = 8,
  EXTERNALGAME_CATEGORY_UNDEFINED9 = 9,
  EXTERNALGAME_YOUTUBE = 10,
  EXTERNALGAME_MICROSOFT = 11,
  EXTERNALGAME_CATEGORY_UNDEFINED12 = 12,
  EXTERNALGAME_APPLE = 13,
  EXTERNALGAME_TWITCH = 14,
  EXTERNALGAME_ANDROID = 15,
  EXTERNALGAME_CATEGORY_UNDEFINED16 = 16,
  EXTERNALGAME_CATEGORY_UNDEFINED17 = 17,
  EXTERNALGAME_CATEGORY_UNDEFINED18 = 18,
  EXTERNALGAME_CATEGORY_UNDEFINED19 = 19,
  EXTERNALGAME_AMAZON_ASIN = 20,
  EXTERNALGAME_CATEGORY_UNDEFINED21 = 21,
  EXTERNALGAME_AMAZON_LUNA = 22,
  EXTERNALGAME_AMAZON_ADG = 23,
  EXTERNALGAME_CATEGORY_UNDEFINED24 = 24,
  EXTERNALGAME_CATEGORY_UNDEFINED25 = 25,
  EXTERNALGAME_EPIC_GAME_STORE = 26,
  EXTERNALGAME_CATEGORY_UNDEFINED27 = 27,
  EXTERNALGAME_OCULUS = 28,
  EXTERNALGAME_CATEGORY_UNDEFINED29 = 29,
  EXTERNALGAME_CATEGORY_UNDEFINED30 = 30,
}

export enum ExternalGameMediaEnum {
  EXTERNALGAME_MEDIA_NULL = 0,
  EXTERNALGAME_DIGITAL = 1,
  EXTERNALGAME_PHYSICAL = 2,
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export const gameFields = [
  'id',
  'aggregated_rating',
  'aggregated_rating_count',
  'category',
  'created_at',
  'first_release_date',
  'follows',
  'hypes',
  'name',
  'rating',
  'rating_count',
  'slug',
  'status',
  'storyline',
  'summary',
  'total_rating',
  'total_rating_count',
  'updated_at',
  'url',
  'version_title',
  'checksum',
] as const;

export type GameFieldsEnum = typeof gameFields[number];

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: undefined,
});

export enum ImageTypeEnum {
  'cover_small' = 'cover_small',
  'screenshot_med' = 'screenshot_med',
  'cover_big' = 'cover_big',
  'logo_med' = 'logo_med',
  'screenshot_big' = 'screenshot_big',
  'screenshot_huge' = 'screenshot_huge',
  'thumb' = 'thumb',
  'micro' = 'micro',
  'HD' = '720p',
  'FullHD' = '1080p',
}

registerEnumType(ImageTypeEnum, {
  name: 'ImageTypeEnum', // this one is mandatory
  description: 'Image Type', // this one is optional
});

registerEnumType(ExternalGameCategoryEnum, {
  name: 'ExternalGameCategory', // this one is mandatory
  description: 'External Game Category', // this one is optional
});

registerEnumType(ExternalGameMediaEnum, {
  name: 'ExternalGameMedia', // this one is mandatory
  description: 'External Game Media', // this one is optional
});

registerEnumType(GameCategoryEnum, {
  name: 'GameCategory', // this one is mandatory
  description: 'Game Category', // this one is optional
});

registerEnumType(GameStatusEnum, {
  name: 'GameStatus', // this one is mandatory
  description: 'Game Status', // this one is optional
});

registerEnumType(PlatformCategoryEnum, {
  name: 'PlatformCategory', // this one is mandatory
  description: 'Platform Category', // this one is optional
});

registerEnumType(WebsiteCategoryEnum, {
  name: 'WebsiteCategory', // this one is mandatory
  description: 'Website Category', // this one is optional
});

registerEnumType(AgeRatingCategoryEnum, {
  name: 'AgeRatingCategory', // this one is mandatory
  description: 'Age Rating Category', // this one is optional
});

registerEnumType(AgeRatingRatingEnum, {
  name: 'AgeRatingRating', // this one is mandatory
  description: 'Age Rating Rating', // this one is optional
});

registerEnumType(DateFormatChangeDateCategoryEnum, {
  name: 'DateFormatChangeDateCategory', // this one is mandatory
  description: 'Date Format Change Date Category', // this one is optional
});

registerEnumType(RegionRegionEnum, {
  name: 'RegionRegion', // this one is mandatory
  description: 'Region Region', // this one is optional
});
