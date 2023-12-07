export const ErrorCode = {
  UnknownError: 1,
  NetworkError: 2,
  PsqlTimeout: 3,
  RoundNotFound: 403,
  DemoNotFound: 404,
  MatchNotFound: 405,
  PlayerNotFound: 406,
  CounterStrikeExecutableNotFound: 407,
  NoKillsFound: 408,
  NoDeathsFound: 409,
  FileNotFound: 410,
  DownloadFolderNotExists: 411,
  DownloadFolderNotDefined: 412,
  DecodeShareCodeError: 413,
  MatchAlreadyInDownloadQueue: 414,
  MatchAlreadyDownloaded: 415,
  DemoLinkExpired: 416,
  WriteDemoInfoFileError: 417,
  InvalidDemoHeader: 418,
  StartCounterStrikeError: 419,
  UnsupportedGame: 420,
  GameError: 421,
  NoRoundsFound: 422,
  InvalidDemoPath: 505,
  ChecksumsMismatch: 506,
  MapAlreadyExists: 600,
  PsqlNotFound: 700,
  BoilerInvalidArgs: 800,
  BoilerCommunicationFailure: 801,
  BoilerAlreadyConnected: 802,
  BoilerSteamRestartRequired: 803,
  BoilerSteamNotRunningOrLoggedIn: 804,
  BoilerUserNotConnected: 805,
  BoilerNoMatchesFound: 806,
  BoilerWriteFileFailure: 807,
  BoilerMatchesFileNotFound: 808,
  BoilerUnknownError: 809,
  CsgoVoiceExtractorInvalidArgs: 820,
  CsgoVoiceExtractorLoadCsgoLibError: 821,
  CsgoVoiceExtractorParsingError: 822,
  CsgoVoiceExtractorUnsupportedAudioCodec: 823,
  CsgoVoiceExtractorNoVoiceDataFound: 824,
  CsgoVoiceExtractorDecodingError: 825,
  CsgoVoiceExtractorCreateAudioFileError: 826,
  BadCpuType: 830,
  InvalidShareCode: 850,
  HlaeNotInstalled: 900,
  NoSequencesFound: 901,
  FfmpegNotInstalled: 902,
  FfmpegError: 903,
  VirtualDubNotInstalled: 904,
  VirtualDubError: 905,
  WavFileNotFound: 906,
  RawFilesNotFound: 907,
  HlaeError: 908,
  InvalidFfmpegExecutable: 909,
  InvalidHlaeExecutable: 910,
  SequencesAreOverlapping: 911,

  SteamApiForbidden: 1000,
  SteamApiError: 1001,
  SteamApiTooManyRequests: 1002,

  FaceItApiForbidden: 1100,
  FaceItApiError: 1101,
  FaceItApiResourceNotFound: 1102,
  FaceItApiUnauthorized: 1103,
  FaceItApiInvalidRequest: 1104,

  SteamAccountAlreadyIgnored: 2000,
  SteamAccountNotFound: 2001,
  InvalidSteamCommunityUrl: 2002,

  TagNameAlreadyToken: 3000,
  TagNameTooShort: 3001,
  TagNameTooLong: 3002,
  InvalidTagColor: 3003,

  InvalidDemoName: 3100,
  AnalyzeCorruptedDemo: 3200,

  SteamNotRunning: 4000,
} as const;

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
