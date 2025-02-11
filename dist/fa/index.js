"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.building = exports.bug = exports.btc = exports.briefcase = exports.braille = exports.bookmarkO = exports.bookmark = exports.book = exports.bomb = exports.bolt = exports.bold = exports.bluetoothB = exports.bluetooth = exports.blind = exports.blackTie = exports.bitcoin = exports.bitbucketSquare = exports.bitbucket = exports.birthdayCake = exports.binoculars = exports.bicycle = exports.bellSlashO = exports.bellSlash = exports.bellO = exports.bell = exports.behanceSquare = exports.behance = exports.beer = exports.bed = exports.batteryThreeQuarters = exports.batteryQuarter = exports.batteryHalf = exports.batteryFull = exports.batteryEmpty = exports.battery4 = exports.battery3 = exports.battery2 = exports.battery1 = exports.battery0 = exports.battery = exports.bathtub = exports.bath = exports.bars = exports.barcode = exports.barChartO = exports.barChart = exports.bank = exports.bandcamp = exports.ban = exports.balanceScale = exports.backward = exports.automobile = exports.audioDescription = exports.at = exports.asterisk = exports.assistiveListeningSystems = exports.aslInterpreting = exports.arrowsV = exports.arrowsH = exports.arrowsAlt = exports.arrows = exports.arrowUp = exports.arrowRight = exports.arrowLeft = exports.arrowDown = exports.arrowCircleUp = exports.arrowCircleRight = exports.arrowCircleOUp = exports.arrowCircleORight = exports.arrowCircleOLeft = exports.arrowCircleODown = exports.arrowCircleLeft = exports.arrowCircleDown = exports.areaChart = exports.archive = exports.apple = exports.angleUp = exports.angleRight = exports.angleLeft = exports.angleDown = exports.angleDoubleUp = exports.angleDoubleRight = exports.angleDoubleLeft = exports.angleDoubleDown = exports.angellist = exports.android = exports.anchor = exports.americanSignLanguageInterpreting = exports.ambulance = exports.amazon = exports.alignRight = exports.alignLeft = exports.alignJustify = exports.alignCenter = exports.adn = exports.adjust = exports.addressCardO = exports.addressCard = exports.addressBookO = exports.addressBook = void 0;
exports.deafness = exports.deaf = exports.database = exports.dashcube = exports.dashboard = exports.cutlery = exports.cut = exports.cubes = exports.cube = exports.css3 = exports.crosshairs = exports.crop = exports.creditCardAlt = exports.creditCard = exports.creativeCommons = exports.copyright = exports.copy = exports.contao = exports.connectdevelop = exports.compress = exports.compass = exports.commentsO = exports.comments = exports.commentingO = exports.commenting = exports.commentO = exports.comment = exports.columns = exports.cogs = exports.cog = exports.coffee = exports.codiepie = exports.codepen = exports.codeFork = exports.code = exports.cny = exports.cloudUpload = exports.cloudDownload = exports.cloud = exports.close = exports.clone = exports.clockO = exports.clipboard = exports.circleThin = exports.circleONotch = exports.circleO = exports.circle = exports.chrome = exports.child = exports.chevronUp = exports.chevronRight = exports.chevronLeft = exports.chevronDown = exports.chevronCircleUp = exports.chevronCircleRight = exports.chevronCircleLeft = exports.chevronCircleDown = exports.checkSquareO = exports.checkSquare = exports.checkCircleO = exports.checkCircle = exports.check = exports.chainBroken = exports.chain = exports.certificate = exports.ccVisa = exports.ccStripe = exports.ccPaypal = exports.ccMastercard = exports.ccJcb = exports.ccDiscover = exports.ccDinersClub = exports.ccAmex = exports.cc = exports.cartPlus = exports.cartArrowDown = exports.caretUp = exports.caretSquareOUp = exports.caretSquareORight = exports.caretSquareOLeft = exports.caretSquareODown = exports.caretRight = exports.caretLeft = exports.caretDown = exports.car = exports.cameraRetro = exports.camera = exports.calendarTimesO = exports.calendarPlusO = exports.calendarO = exports.calendarMinusO = exports.calendarCheckO = exports.calendar = exports.calculator = exports.cab = exports.buysellads = exports.bus = exports.bullseye = exports.bullhorn = exports.buildingO = void 0;
exports.futbolO = exports.frownO = exports.freeCodeCamp = exports.foursquare = exports.forward = exports.forumbee = exports.fortAwesome = exports.fonticons = exports.fontAwesome = exports.font = exports.folderOpenO = exports.folderOpen = exports.folderO = exports.folder = exports.floppyO = exports.flickr = exports.flask = exports.flash = exports.flagO = exports.flagCheckered = exports.flag = exports.fiveHundredPX = exports.firstOrder = exports.firefox = exports.fireExtinguisher = exports.fire = exports.filter = exports.film = exports.filesO = exports.fileZipO = exports.fileWordO = exports.fileVideoO = exports.fileTextO = exports.fileText = exports.fileSoundO = exports.filePowerpointO = exports.filePictureO = exports.filePhotoO = exports.filePdfO = exports.fileO = exports.fileMovieO = exports.fileImageO = exports.fileExcelO = exports.fileCodeO = exports.fileAudioO = exports.fileArchiveO = exports.file = exports.fighterJet = exports.female = exports.feed = exports.fax = exports.fastForward = exports.fastBackward = exports.facebookSquare = exports.facebookOfficial = exports.facebookF = exports.facebook = exports.fa = exports.eyedropper = exports.eyeSlash = exports.eye = exports.externalLinkSquare = exports.externalLink = exports.expeditedssl = exports.expand = exports.exclamationTriangle = exports.exclamationCircle = exports.exclamation = exports.exchange = exports.euro = exports.eur = exports.etsy = exports.eraser = exports.envira = exports.envelopeSquare = exports.envelopeOpenO = exports.envelopeOpen = exports.envelopeO = exports.envelope = exports.empire = exports.ellipsisV = exports.ellipsisH = exports.eject = exports.eercast = exports.edit = exports.edge = exports.drupal = exports.dropbox = exports.driversLicenseO = exports.driversLicense = exports.dribbble = exports.download = exports.dotCircleO = exports.dollar = exports.digg = exports.diamond = exports.deviantart = exports.desktop = exports.delicious = exports.dedent = void 0;
exports.leaf = exports.lastfmSquare = exports.lastfm = exports.laptop = exports.language = exports.krw = exports.keyboardO = exports.key = exports.jsfiddle = exports.jpy = exports.joomla = exports.italic = exports.ioxhost = exports.intersex = exports.internetExplorer = exports.institution = exports.instagram = exports.inr = exports.infoCircle = exports.info = exports.industry = exports.indent = exports.inbox = exports.imdb = exports.image = exports.ils = exports.idCardO = exports.idCard = exports.idBadge = exports.iCursor = exports.html5 = exports.houzz = exports.hourglassStart = exports.hourglassO = exports.hourglassHalf = exports.hourglassEnd = exports.hourglass3 = exports.hourglass2 = exports.hourglass1 = exports.hourglass = exports.hotel = exports.hospitalO = exports.home = exports.history = exports.heartbeat = exports.heartO = exports.heart = exports.headphones = exports.header = exports.hddO = exports.hashtag = exports.hardOfHearing = exports.handshakeO = exports.handStopO = exports.handSpockO = exports.handScissorsO = exports.handRockO = exports.handPointerO = exports.handPeaceO = exports.handPaperO = exports.handOUp = exports.handORight = exports.handOLeft = exports.handODown = exports.handLizardO = exports.handGrabO = exports.hackerNews = exports.hSquare = exports.group = exports.grav = exports.gratipay = exports.graduationCap = exports.googleWallet = exports.googlePlusSquare = exports.googlePlusOfficial = exports.googlePlusCircle = exports.googlePlus = exports.google = exports.globe = exports.glideG = exports.glide = exports.glass = exports.gittip = exports.gitlab = exports.githubSquare = exports.githubAlt = exports.github = exports.gitSquare = exports.git = exports.gift = exports.ggCircle = exports.gg = exports.getPocket = exports.genderless = exports.gears = exports.gear = exports.ge = exports.gbp = exports.gavel = exports.gamepad = void 0;
exports.pieChart = exports.pictureO = exports.photo = exports.phoneSquare = exports.phone = exports.percent = exports.pencilSquareO = exports.pencilSquare = exports.pencil = exports.paypal = exports.paw = exports.pauseCircleO = exports.pauseCircle = exports.pause = exports.paste = exports.paragraph = exports.paperclip = exports.paperPlaneO = exports.paperPlane = exports.paintBrush = exports.pagelines = exports.outdent = exports.optinMonster = exports.opera = exports.openid = exports.opencart = exports.odnoklassnikiSquare = exports.odnoklassniki = exports.objectUngroup = exports.objectGroup = exports.newspaperO = exports.neuter = exports.navicon = exports.music = exports.mousePointer = exports.motorcycle = exports.mortarBoard = exports.moonO = exports.money = exports.modx = exports.mobilePhone = exports.mobile = exports.mixcloud = exports.minusSquareO = exports.minusSquare = exports.minusCircle = exports.minus = exports.microphoneSlash = exports.microphone = exports.microchip = exports.mercury = exports.mehO = exports.meetup = exports.medkit = exports.medium = exports.meanpath = exports.maxcdn = exports.marsStrokeV = exports.marsStrokeH = exports.marsStroke = exports.marsDouble = exports.mars = exports.mapSigns = exports.mapPin = exports.mapO = exports.mapMarker = exports.map = exports.male = exports.mailReplyAll = exports.mailReply = exports.mailForward = exports.magnet = exports.magic = exports.lowVision = exports.longArrowUp = exports.longArrowRight = exports.longArrowLeft = exports.longArrowDown = exports.lock = exports.locationArrow = exports.listUl = exports.listOl = exports.listAlt = exports.list = exports.linux = exports.linode = exports.linkedinSquare = exports.linkedin = exports.link = exports.lineChart = exports.lightbulbO = exports.lifeSaver = exports.lifeRing = exports.lifeBuoy = exports.lifeBouy = exports.levelUp = exports.levelDown = exports.lemonO = exports.legal = exports.leanpub = void 0;
exports.snowflakeO = exports.snapchatSquare = exports.snapchatGhost = exports.snapchat = exports.smileO = exports.slideshare = exports.sliders = exports.slack = exports.skype = exports.skyatlas = exports.sitemap = exports.simplybuilt = exports.signing = exports.signal = exports.signOut = exports.signLanguage = exports.signIn = exports.shower = exports.shoppingCart = exports.shoppingBasket = exports.shoppingBag = exports.shirtsinbulk = exports.ship = exports.shield = exports.sheqel = exports.shekel = exports.shareSquareO = exports.shareSquare = exports.shareAltSquare = exports.shareAlt = exports.share = exports.server = exports.sendO = exports.send = exports.sellsy = exports.searchPlus = exports.searchMinus = exports.search = exports.scribd = exports.scissors = exports.save = exports.safari = exports.s15 = exports.rupee = exports.ruble = exports.rub = exports.rssSquare = exports.rss = exports.rouble = exports.rotateRight = exports.rotateLeft = exports.rocket = exports.road = exports.rmb = exports.retweet = exports.resistance = exports.replyAll = exports.reply = exports.repeat = exports.reorder = exports.renren = exports.remove = exports.registered = exports.refresh = exports.redditSquare = exports.redditAlien = exports.reddit = exports.recycle = exports.rebel = exports.ravelry = exports.random = exports.ra = exports.quoteRight = exports.quoteLeft = exports.quora = exports.questionCircleO = exports.questionCircle = exports.question = exports.qrcode = exports.qq = exports.puzzlePiece = exports.productHunt = exports.print = exports.powerOff = exports.podcast = exports.plusSquareO = exports.plusSquare = exports.plusCircle = exports.plus = exports.plug = exports.playCircleO = exports.playCircle = exports.play = exports.plane = exports.pinterestSquare = exports.pinterestP = exports.pinterest = exports.piedPiperPp = exports.piedPiperAlt = exports.piedPiper = void 0;
exports.trashO = exports.trash = exports.transgenderAlt = exports.transgender = exports.train = exports.trademark = exports.toggleUp = exports.toggleRight = exports.toggleOn = exports.toggleOff = exports.toggleLeft = exports.toggleDown = exports.tint = exports.timesRectangleO = exports.timesRectangle = exports.timesCircleO = exports.timesCircle = exports.times = exports.ticket = exports.thumbsUp = exports.thumbsOUp = exports.thumbsODown = exports.thumbsDown = exports.thumbTack = exports.thermometerThreeQuarters = exports.thermometerQuarter = exports.thermometerHalf = exports.thermometerFull = exports.thermometerEmpty = exports.thermometer4 = exports.thermometer3 = exports.thermometer2 = exports.thermometer1 = exports.thermometer0 = exports.thermometer = exports.themeisle = exports.thList = exports.thLarge = exports.th = exports.textWidth = exports.textHeight = exports.terminal = exports.tencentWeibo = exports.television = exports.telegram = exports.taxi = exports.tasks = exports.tags = exports.tag = exports.tachometer = exports.tablet = exports.table = exports.support = exports.superscript = exports.superpowers = exports.sunO = exports.suitcase = exports.subway = exports.subscript = exports.stumbleuponCircle = exports.stumbleupon = exports.strikethrough = exports.streetView = exports.stopCircleO = exports.stopCircle = exports.stop = exports.stickyNoteO = exports.stickyNote = exports.stethoscope = exports.stepForward = exports.stepBackward = exports.steamSquare = exports.steam = exports.starO = exports.starHalfO = exports.starHalfFull = exports.starHalfEmpty = exports.starHalf = exports.star = exports.stackOverflow = exports.stackExchange = exports.squareO = exports.square = exports.spotify = exports.spoon = exports.spinner = exports.spaceShuttle = exports.soundcloud = exports.sortUp = exports.sortNumericDesc = exports.sortNumericAsc = exports.sortDown = exports.sortDesc = exports.sortAsc = exports.sortAmountDesc = exports.sortAmountAsc = exports.sortAlphaDesc = exports.sortAlphaAsc = exports.sort = exports.soccerBallO = void 0;
exports.youtubeSquare = exports.youtubePlay = exports.youtube = exports.yoast = exports.yen = exports.yelp = exports.ycSquare = exports.yc = exports.yahoo = exports.yCombinatorSquare = exports.yCombinator = exports.xingSquare = exports.xing = exports.wrench = exports.wpforms = exports.wpexplorer = exports.wpbeginner = exports.wordpress = exports.won = exports.windows = exports.windowRestore = exports.windowMinimize = exports.windowMaximize = exports.windowCloseO = exports.windowClose = exports.wikipediaW = exports.wifi = exports.wheelchairAlt = exports.wheelchair = exports.whatsapp = exports.weixin = exports.weibo = exports.wechat = exports.warning = exports.volumeUp = exports.volumeOff = exports.volumeDown = exports.volumeControlPhone = exports.vk = exports.vine = exports.vimeoSquare = exports.vimeo = exports.videoCamera = exports.viadeoSquare = exports.viadeo = exports.viacoin = exports.venusMars = exports.venusDouble = exports.venus = exports.vcardO = exports.vcard = exports.users = exports.userTimes = exports.userSecret = exports.userPlus = exports.userO = exports.userMd = exports.userCircleO = exports.userCircle = exports.user = exports.usd = exports.usb = exports.upload = exports.unsorted = exports.unlockAlt = exports.unlock = exports.unlink = exports.university = exports.universalAccess = exports.undo = exports.underline = exports.umbrella = exports.twitterSquare = exports.twitter = exports.twitch = exports.tv = exports.turkishLira = exports.tumblrSquare = exports.tumblr = exports.tty = exports.tryIcon = exports.truck = exports.trophy = exports.tripadvisor = exports.trello = exports.tree = void 0;
var glass = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1699 186q0 35-43 78l-632 632v768h320q26 0 45 19t19 45-19 45-45 19h-896q-26 0-45-19t-19-45 19-45 45-19h320v-768l-632-632q-43-43-43-78 0-23 18-36.5t38-17.5 43-4h1408q23 0 43 4t38 17.5 18 36.5z"
    }
  }]
};
exports.glass = glass;
var music = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 224v1120q0 50-34 89t-86 60.5-103.5 32-96.5 10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32 96.5-10.5q105 0 192 39v-537l-768 237v709q0 50-34 89t-86 60.5-103.5 32-96.5 10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32 96.5-10.5q105 0 192 39v-967q0-31 19-56.5t49-35.5l832-256q12-4 28-4 40 0 68 28t28 68z"
    }
  }]
};
exports.music = music;
var search = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"
    }
  }]
};
exports.search = search;
var envelopeO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-1-1q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zM1664 453v-11-13.5t-0.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h1 1q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zM1792 416v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.envelopeO = envelopeO;
var heart = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
    }
  }]
};
exports.heart = heart;
var star = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
    }
  }]
};
exports.star = star;
var starO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1137 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zM1664 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
    }
  }]
};
exports.starO = starO;
var user = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zM1024 512q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"
    }
  }]
};
exports.user = user;
var film = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1600v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM384 1216v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM384 832v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1408 1600v-512q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v512q0 26 19 45t45 19h768q26 0 45-19t19-45zM384 448v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 1600v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1408 832v-512q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v512q0 26 19 45t45 19h768q26 0 45-19t19-45zM1792 1216v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 832v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 448v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1920 288v1344q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1344q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }
  }]
};
exports.film = film;
var thLarge = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 1024v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zM768 256v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zM1664 1024v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zM1664 256v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90z"
    }
  }]
};
exports.thLarge = thLarge;
var th = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"
    }
  }]
};
exports.th = th;
var thList = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 1248v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zM512 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 736v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zM1792 224v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"
    }
  }]
};
exports.thList = thList;
var check = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
    }
  }]
};
exports.check = check;
var close = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
    }
  }]
};
exports.close = close;
var remove = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
    }
  }]
};
exports.remove = remove;
var times = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
    }
  }]
};
exports.times = times;
var searchPlus = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 800v64q0 13-9.5 22.5t-22.5 9.5h-224v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-224h-224q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h224v-224q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v224h224q13 0 22.5 9.5t9.5 22.5zM1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 53-37.5 90.5t-90.5 37.5q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"
    }
  }]
};
exports.searchPlus = searchPlus;
var searchMinus = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 800v64q0 13-9.5 22.5t-22.5 9.5h-576q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h576q13 0 22.5 9.5t9.5 22.5zM1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 53-37.5 90.5t-90.5 37.5q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"
    }
  }]
};
exports.searchMinus = searchMinus;
var powerOff = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 896q0 156-61 298t-164 245-245 164-298 61-298-61-245-164-164-245-61-298q0-182 80.5-343t226.5-270q43-32 95.5-25t83.5 50q32 42 24.5 94.5t-49.5 84.5q-98 74-151.5 181t-53.5 228q0 104 40.5 198.5t109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5q0-121-53.5-228t-151.5-181q-42-32-49.5-84.5t24.5-94.5q31-43 84-50t95 25q146 109 226.5 270t80.5 343zM896 128v640q0 52-38 90t-90 38-90-38-38-90v-640q0-52 38-90t90-38 90 38 38 90z"
    }
  }]
};
exports.powerOff = powerOff;
var signal = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1440v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM640 1312v320q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-320q0-14 9-23t23-9h192q14 0 23 9t9 23zM1024 1056v576q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23zM1408 672v960q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 160v1472q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-1472q0-14 9-23t23-9h192q14 0 23 9t9 23z"
    }
  }]
};
exports.signal = signal;
var cog = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1536 787v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"
    }
  }]
};
exports.cog = cog;
var gear = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1536 787v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"
    }
  }]
};
exports.gear = gear;
var trashO = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM768 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM1024 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM1152 1460v-948h-896v948q0 22 7 40.5t14.5 27 10.5 8.5h832q3 0 10.5-8.5t14.5-27 7-40.5zM480 384h448l-48-117q-7-9-17-11h-317q-10 2-17 11zM1408 416v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
    }
  }]
};
exports.trashO = trashO;
var home = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 0.5-3t0.5-3l575-474 575 474q1 2 1 6zM1631 923l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
    }
  }]
};
exports.home = home;
var fileO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280z"
    }
  }]
};
exports.fileO = fileO;
var clockO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.clockO = clockO;
var road = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1111 996v-4l-24-320q-1-13-11-22.5t-23-9.5h-186q-13 0-23 9.5t-11 22.5l-24 320v4q-1 12 8 20t21 8h244q12 0 21-8t8-20zM1870 1463q0 73-46 73h-704q13 0 22-9.5t8-22.5l-20-256q-1-13-11-22.5t-23-9.5h-272q-13 0-23 9.5t-11 22.5l-20 256q-1 13 8 22.5t22 9.5h-704q-46 0-46-73 0-54 26-116l417-1044q8-19 26-33t38-14h339q-13 0-23 9.5t-11 22.5l-15 192q-1 14 8 23t22 9h166q13 0 22-9t8-23l-15-192q-1-13-11-22.5t-23-9.5h339q20 0 38 14t26 33l417 1044q26 62 26 116z"
    }
  }]
};
exports.road = road;
var download = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1536 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 1120v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zM1339 551q17 41-14 70l-448 448q-18 19-45 19t-45-19l-448-448q-31-29-14-70 17-39 59-39h256v-448q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z"
    }
  }]
};
exports.download = download;
var arrowCircleODown = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1120 928q0 12-10 24l-319 319q-11 9-23 9t-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-352q0-14 9-23t23-9h192q14 0 23 9t9 23v352h192q14 0 23 9t9 23zM768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleODown = arrowCircleODown;
var arrowCircleOUp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1118 876q-8 20-30 20h-192v352q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-352h-192q-14 0-23-9t-9-23q0-12 10-24l319-319q11-9 23-9t23 9l320 320q15 16 7 35zM768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleOUp = arrowCircleOUp;
var inbox = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1023 960h316q-1-3-2.5-8.5t-2.5-7.5l-212-496h-708l-212 496q-1 3-2.5 8.5t-2.5 7.5h316l95 192h320zM1536 990v482q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-482q0-62 25-123l238-552q10-25 36.5-42t52.5-17h832q26 0 52.5 17t36.5 42l238 552q25 61 25 123z"
    }
  }]
};
exports.inbox = inbox;
var playCircleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1184 896q0 37-32 55l-544 320q-15 9-32 9-16 0-32-8-32-19-32-56v-640q0-37 32-56 33-18 64 1l544 320q32 18 32 55zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.playCircleO = playCircleO;
var repeat = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 15 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"
    }
  }]
};
exports.repeat = repeat;
var rotateRight = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 15 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"
    }
  }]
};
exports.rotateRight = rotateRight;
var refresh = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1511 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zM1536 256v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"
    }
  }]
};
exports.refresh = refresh;
var listAlt = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1184v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 928v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 672v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1536 1184v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zM1536 928v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zM1536 672v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zM1664 1376v-832q0-13-9.5-22.5t-22.5-9.5h-1472q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zM1792 288v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.listAlt = listAlt;
var lock = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M320 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zM1152 864v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"
    }
  }]
};
exports.lock = lock;
var flag = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M320 256q0 72-64 110v1266q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-1266q-64-38-64-110 0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1792 320v763q0 25-12.5 38.5t-39.5 27.5q-215 116-369 116-61 0-123.5-22t-108.5-48-115.5-48-142.5-22q-192 0-464 146-17 9-33 9-26 0-45-19t-19-45v-742q0-32 31-55 21-14 79-43 236-120 421-120 107 0 200 29t219 88q38 19 88 19 54 0 117.5-21t110-47 88-47 54.5-21q26 0 45 19t19 45z"
    }
  }]
};
exports.flag = flag;
var headphones = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 886q0 166-60 314l-20 49-185 33q-22 83-90.5 136.5t-156.5 53.5v32q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23v32q71 0 130 35.5t93 95.5l68-12q29-95 29-193 0-148-88-279t-236.5-209-315.5-78-315.5 78-236.5 209-88 279q0 98 29 193l68 12q34-60 93-95.5t130-35.5v-32q0-14 9-23t23-9h64q14 0 23 9t9 23v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-32q-88 0-156.5-53.5t-90.5-136.5l-185-33-20-49q-60-148-60-314 0-151 67-291t179-242.5 266-163.5 320-61 320 61 266 163.5 179 242.5 67 291z"
    }
  }]
};
exports.headphones = headphones;
var volumeOff = {
  "viewBox": "0 0 768 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z"
    }
  }]
};
exports.volumeOff = volumeOff;
var volumeDown = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zM1152 896q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-36 12-56.5-12-56.5-29-36-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z"
    }
  }]
};
exports.volumeDown = volumeDown;
var volumeUp = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zM1152 896q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-36 12-56.5-12-56.5-29-36-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zM1408 896q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zM1664 896q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z"
    }
  }]
};
exports.volumeUp = volumeUp;
var qrcode = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1152v128h-128v-128h128zM384 384v128h-128v-128h128zM1152 384v128h-128v-128h128zM128 1407h384v-383h-384v383zM128 640h384v-384h-384v384zM896 640h384v-384h-384v384zM640 896v640h-640v-640h640zM1152 1408v128h-128v-128h128zM1408 1408v128h-128v-128h128zM1408 896v384h-384v-128h-128v384h-128v-640h384v128h128v-128h128zM640 128v640h-640v-640h640zM1408 128v640h-640v-640h640z"
    }
  }]
};
exports.qrcode = qrcode;
var barcode = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M63 1536h-63v-1408h63v1408zM126 1535h-32v-1407h32v1407zM220 1535h-31v-1407h31v1407zM377 1535h-31v-1407h31v1407zM534 1535h-62v-1407h62v1407zM660 1535h-31v-1407h31v1407zM723 1535h-31v-1407h31v1407zM786 1535h-31v-1407h31v1407zM943 1535h-63v-1407h63v1407zM1100 1535h-63v-1407h63v1407zM1226 1535h-63v-1407h63v1407zM1352 1535h-63v-1407h63v1407zM1446 1535h-63v-1407h63v1407zM1635 1535h-94v-1407h94v1407zM1698 1535h-32v-1407h32v1407zM1792 1536h-63v-1408h63v1408z"
    }
  }]
};
exports.barcode = barcode;
var tag = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M448 448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1515 1024q0 53-37 90l-491 492q-39 37-91 37-53 0-90-37l-715-716q-38-37-64.5-101t-26.5-117v-416q0-52 38-90t90-38h416q53 0 117 26.5t102 64.5l715 714q37 39 37 91z"
    }
  }]
};
exports.tag = tag;
var tags = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M448 448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1515 1024q0 53-37 90l-491 492q-39 37-91 37-53 0-90-37l-715-716q-38-37-64.5-101t-26.5-117v-416q0-52 38-90t90-38h416q53 0 117 26.5t102 64.5l715 714q37 39 37 91zM1899 1024q0 53-37 90l-491 492q-39 37-91 37-36 0-59-14t-53-45l470-470q37-37 37-90 0-52-37-91l-715-714q-38-38-102-64.5t-117-26.5h224q53 0 117 26.5t102 64.5l715 714q37 39 37 91z"
    }
  }]
};
exports.tags = tags;
var book = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1639 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 0.5-30t-0.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t0.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zM575 480q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5zM492 736q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z"
    }
  }]
};
exports.book = book;
var bookmark = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1164 128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z"
    }
  }]
};
exports.bookmark = bookmark;
var print = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1536h896v-256h-896v256zM384 896h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zM1536 960q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 960v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"
    }
  }]
};
exports.print = print;
var camera = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M960 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zM1664 256q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zM960 1408q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.camera = camera;
var font = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M725 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zM0 1664l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h75 53q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 5-0.5 13.5t-0.5 12.5q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"
    }
  }]
};
exports.font = font;
var bold = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M555 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-0.5 159t-0.5 158q0 8-1 67.5t-0.5 96.5 4.5 83.5 12 66.5zM541 775q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-0.5 80t-0.5 79q0 46 1 69zM0 1664l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5 0.5-34v-35.5-30q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68 0.5t68 0.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"
    }
  }]
};
exports.bold = bold;
var italic = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 1662l17-85q22-7 61.5-16.5t72-19 59.5-23.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"
    }
  }]
};
exports.italic = italic;
var textHeight = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zM81 129l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5 0.5t107.5 0.5h293q6 0 21 0.5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 0.5t14 0.5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-0.5-16.5 0.5q-17 0-66.5-0.5t-74.5-0.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 0.5-15.5t0.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"
    }
  }]
};
exports.textHeight = textHeight;
var textWidth = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M81 129l54 27q12 5 211 5 44 0 132-2t132-2q70 0 246.5-1t304.5-0.5 247 4.5q33 1 56-31l42-1q4 0 14 0.5t14 0.5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-47.5t-15-73.5-7-36q-10-13-27-19-5-2-66-2-30 0-93-1t-103-1-94 2-96 7q-9 81-8 136l1 152v-52q0 55 1 154t1.5 180 0.5 153q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q7-16 11.5-74t6-145.5 1.5-155-0.5-153.5-0.5-89q0-7-2.5-21.5t-2.5-22.5q0-7 0.5-44t1-73 0-76.5-3-67.5-6.5-32q-11-12-162-12-41 0-163 13.5t-138 24.5q-19 12-34 71.5t-31.5 111.5-42.5 54q-42-26-56-44v-383zM1310 1411q12 0 42 19.5t57.5 41.5 59.5 49 36 30q26 21 26 49t-26 49q-4 3-36 30t-59.5 49-57.5 41.5-42 19.5q-13 0-20.5-10.5t-10-28.5-2.5-33.5 1.5-33 1.5-19.5h-1024q0 2 1.5 19.5t1.5 33-2.5 33.5-10 28.5-20.5 10.5q-12 0-42-19.5t-57.5-41.5-59.5-49-36-30q-26-21-26-49t26-49q4-3 36-30t59.5-49 57.5-41.5 42-19.5q13 0 20.5 10.5t10 28.5 2.5 33.5-1.5 33-1.5 19.5h1024q0-2-1.5-19.5t-1.5-33 2.5-33.5 10-28.5 20.5-10.5z"
    }
  }]
};
exports.textWidth = textWidth;
var alignLeft = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1408 960v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zM1664 576v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 192v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"
    }
  }]
};
exports.alignLeft = alignLeft;
var alignCenter = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1408 960v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zM1664 576v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1280 192v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"
    }
  }]
};
exports.alignCenter = alignCenter;
var alignRight = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 960v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zM1792 576v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1792 192v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"
    }
  }]
};
exports.alignRight = alignRight;
var alignJustify = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 960v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 576v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 192v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"
    }
  }]
};
exports.alignJustify = alignJustify;
var list = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 928v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 544v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM256 160v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"
    }
  }]
};
exports.list = list;
var dedent = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"
    }
  }]
};
exports.dedent = dedent;
var outdent = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"
    }
  }]
};
exports.outdent = outdent;
var indent = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"
    }
  }]
};
exports.indent = indent;
var videoCamera = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"
    }
  }]
};
exports.videoCamera = videoCamera;
var image = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760 256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }
  }]
};
exports.image = image;
var photo = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760 256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }
  }]
};
exports.photo = photo;
var pictureO = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760 256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }
  }]
};
exports.pictureO = pictureO;
var pencil = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M363 1536l91-91-235-235-91 91v107h128v128h107zM886 608q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zM832 416l416 416-832 832h-416v-416zM1515 512q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
    }
  }]
};
exports.pencil = pencil;
var mapMarker = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1024 640q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"
    }
  }]
};
exports.mapMarker = mapMarker;
var adjust = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 1440v-1088q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.adjust = adjust;
var tint = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1024 1024q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"
    }
  }]
};
exports.tint = tint;
var edit = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"
    }
  }]
};
exports.edit = edit;
var pencilSquareO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"
    }
  }]
};
exports.pencilSquareO = pencilSquareO;
var shareSquareO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 989v259q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h255v0q13 0 22.5 9.5t9.5 22.5q0 27-26 32-77 26-133 60-10 4-16 4h-112q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29 28-13 54-37 16-16 35-8 21 9 21 29zM1645 493l-384 384q-18 19-45 19-12 0-25-5-39-17-39-59v-192h-160q-323 0-438 131-119 137-74 473 3 23-20 34-8 2-12 2-16 0-26-13-10-14-21-31t-39.5-68.5-49.5-99.5-38.5-114-17.5-122q0-49 3.5-91t14-90 28-88 47-81.5 68.5-74 94.5-61.5 124.5-48.5 159.5-30.5 196.5-11h160v-192q0-42 39-59 13-5 25-5 26 0 45 19l384 384q19 19 19 45t-19 45z"
    }
  }]
};
exports.shareSquareO = shareSquareO;
var checkSquareO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zM1639 441l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"
    }
  }]
};
exports.checkSquareO = checkSquareO;
var arrows = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"
    }
  }]
};
exports.arrows = arrows;
var stepBackward = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M979 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v678q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h128q26 0 45 19t19 45v678q4-10 13-19z"
    }
  }]
};
exports.stepBackward = stepBackward;
var fastBackward = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1747 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v710q0 26-13 32t-32-13l-710-710q-9-9-13-19v678q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h128q26 0 45 19t19 45v678q4-10 13-19l710-710q19-19 32-13t13 32v710q4-10 13-19z"
    }
  }]
};
exports.fastBackward = fastBackward;
var backward = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1619 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v710q0 26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19 32-13t13 32v710q4-10 13-19z"
    }
  }]
};
exports.backward = backward;
var play = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1384 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"
    }
  }]
};
exports.play = play;
var pause = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zM640 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z"
    }
  }]
};
exports.pause = pause;
var stop = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 192v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
    }
  }]
};
exports.stop = stop;
var forward = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M45 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q9 9 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19 45l-710 710q-19 19-32 13t-13-32v-710q-4 10-13 19z"
    }
  }]
};
exports.forward = forward;
var fastForward = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M45 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q9 9 13 19v-710q0-26 13-32t32 13l710 710q9 9 13 19v-678q0-26 19-45t45-19h128q26 0 45 19t19 45v1408q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-678q-4 10-13 19l-710 710q-19 19-32 13t-13-32v-710q-4 10-13 19z"
    }
  }]
};
exports.fastForward = fastForward;
var stepForward = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M45 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q9 9 13 19v-678q0-26 19-45t45-19h128q26 0 45 19t19 45v1408q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-678q-4 10-13 19z"
    }
  }]
};
exports.stepForward = stepForward;
var eject = {
  "viewBox": "0 0 1538 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M14 979l710-710q19-19 45-19t45 19l710 710q19 19 13 32t-32 13h-1472q-26 0-32-13t13-32zM1473 1536h-1408q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1408q26 0 45 19t19 45v256q0 26-19 45t-45 19z"
    }
  }]
};
exports.eject = eject;
var chevronLeft = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1171 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
    }
  }]
};
exports.chevronLeft = chevronLeft;
var chevronRight = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1107 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
    }
  }]
};
exports.chevronRight = chevronRight;
var plusCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1216 960v-128q0-26-19-45t-45-19h-256v-256q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v256h-256q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45v-256h256q26 0 45-19t19-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.plusCircle = plusCircle;
var minusCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1216 960v-128q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v128q0 26 19 45t45 19h768q26 0 45-19t19-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.minusCircle = minusCircle;
var timesCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1149 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.timesCircle = timesCircle;
var checkCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1284 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.checkCircle = checkCircle;
var questionCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1376v-192q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23-9t9-23zM1152 704q0-88-55.5-163t-138.5-116-170-41q-243 0-371 213-15 24 8 42l132 100q7 6 19 6 16 0 25-12 53-68 86-92 34-24 86-24 48 0 85.5 26t37.5 59q0 38-20 61t-68 45q-63 28-115.5 86.5t-52.5 125.5v36q0 14 9 23t23 9h192q14 0 23-9t9-23q0-19 21.5-49.5t54.5-49.5q32-18 49-28.5t46-35 44.5-48 28-60.5 12.5-81zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.questionCircle = questionCircle;
var infoCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zM896 480v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.infoCircle = infoCircle;
var crosshairs = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1197 1024h-109q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h109q-32-108-112.5-188.5t-188.5-112.5v109q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-109q-108 32-188.5 112.5t-112.5 188.5h109q26 0 45 19t19 45v128q0 26-19 45t-45 19h-109q32 108 112.5 188.5t188.5 112.5v-109q0-26 19-45t45-19h128q26 0 45 19t19 45v109q108-32 188.5-112.5t112.5-188.5zM1536 832v128q0 26-19 45t-45 19h-143q-37 161-154.5 278.5t-278.5 154.5v143q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-143q-161-37-278.5-154.5t-154.5-278.5h-143q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h143q37-161 154.5-278.5t278.5-154.5v-143q0-26 19-45t45-19h128q26 0 45 19t19 45v143q161 37 278.5 154.5t154.5 278.5h143q26 0 45 19t19 45z"
    }
  }]
};
exports.crosshairs = crosshairs;
var timesCircleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1097 1079l-146 146q-10 10-23 10t-23-10l-137-137-137 137q-10 10-23 10t-23-10l-146-146q-10-10-10-23t10-23l137-137-137-137q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l137 137 137-137q10-10 23-10t23 10l146 146q10 10 10 23t-10 23l-137 137 137 137q10 10 10 23t-10 23zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.timesCircleO = timesCircleO;
var checkCircleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1171 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.checkCircleO = checkCircleO;
var ban = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1312 893q0-161-87-295l-754 753q137 89 297 89 111 0 211.5-43.5t173.5-116.5 116-174.5 43-212.5zM313 1192l755-754q-135-91-300-91-148 0-273 73t-198 199-73 274q0 162 89 299zM1536 893q0 157-61 300t-163.5 246-245 164-298.5 61-298.5-61-245-164-163.5-246-61-300 61-299.5 163.5-245.5 245-164 298.5-61 298.5 61 245 164 163.5 245.5 61 299.5z"
    }
  }]
};
exports.ban = ban;
var arrowLeft = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z"
    }
  }]
};
exports.arrowLeft = arrowLeft;
var arrowRight = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1472 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"
    }
  }]
};
exports.arrowRight = arrowRight;
var arrowUp = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1611 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"
    }
  }]
};
exports.arrowUp = arrowUp;
var arrowDown = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1611 832q0 53-37 90l-651 652q-39 37-91 37-53 0-90-37l-651-652q-38-36-38-90 0-53 38-91l74-75q39-37 91-37 53 0 90 37l294 294v-704q0-52 38-90t90-38h128q52 0 90 38t38 90v704l294-294q37-37 90-37 52 0 91 37l75 75q37 39 37 91z"
    }
  }]
};
exports.arrowDown = arrowDown;
var mailForward = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z"
    }
  }]
};
exports.mailForward = mailForward;
var share = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z"
    }
  }]
};
exports.share = share;
var expand = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M755 1056q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23zM1536 192v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45z"
    }
  }]
};
exports.expand = expand;
var compress = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zM1523 288q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"
    }
  }]
};
exports.compress = compress;
var plus = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
    }
  }]
};
exports.plus = plus;
var minus = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"
    }
  }]
};
exports.minus = minus;
var asterisk = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1482 1050q46 26 59.5 77.5t-12.5 97.5l-64 110q-26 46-77.5 59.5t-97.5-12.5l-266-153v307q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-307l-266 153q-46 26-97.5 12.5t-77.5-59.5l-64-110q-26-46-12.5-97.5t59.5-77.5l266-154-266-154q-46-26-59.5-77.5t12.5-97.5l64-110q26-46 77.5-59.5t97.5 12.5l266 153v-307q0-52 38-90t90-38h128q52 0 90 38t38 90v307l266-153q46-26 97.5-12.5t77.5 59.5l64 110q26 46 12.5 97.5t-59.5 77.5l-266 154z"
    }
  }]
};
exports.asterisk = asterisk;
var exclamationCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM896 1375v-190q0-14-9-23.5t-22-9.5h-192q-13 0-23 10t-10 23v190q0 13 10 23t23 10h192q13 0 22-9.5t9-23.5zM894 1031l18-621q0-12-10-18-10-8-24-8h-220q-14 0-24 8-10 6-10 18l17 621q0 10 10 17.5t24 7.5h185q14 0 23.5-7.5t10.5-17.5z"
    }
  }]
};
exports.exclamationCircle = exclamationCircle;
var gift = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M928 1356v-56-468-192h-320v192 468 56q0 25 18 38.5t46 13.5h192q28 0 46-13.5t18-38.5zM472 512h195l-126-161q-26-31-69-31-40 0-68 28t-28 68 28 68 68 28zM1160 416q0-40-28-68t-68-28q-43 0-69 31l-125 161h194q40 0 68-28t28-68zM1536 672v320q0 14-9 23t-23 9h-96v416q0 40-28 68t-68 28h-1088q-40 0-68-28t-28-68v-416h-96q-14 0-23-9t-9-23v-320q0-14 9-23t23-9h440q-93 0-158.5-65.5t-65.5-158.5 65.5-158.5 158.5-65.5q107 0 168 77l128 165 128-165q61-77 168-77 93 0 158.5 65.5t65.5 158.5-65.5 158.5-158.5 65.5h440q14 0 23 9t9 23z"
    }
  }]
};
exports.gift = gift;
var leaf = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 704q0-26-19-45t-45-19q-172 0-318 49.5t-259.5 134-235.5 219.5q-19 21-19 45 0 26 19 45t45 19q24 0 45-19 27-24 74-71t67-66q137-124 268.5-176t313.5-52q26 0 45-19t19-45zM1792 506q0 95-20 193-46 224-184.5 383t-357.5 268q-214 108-438 108-148 0-286-47-15-5-88-42t-96-37q-16 0-39.5 32t-45 70-52.5 70-60 32q-43 0-63.5-17.5t-45.5-59.5q-2-4-6-11t-5.5-10-3-9.5-1.5-13.5q0-35 31-73.5t68-65.5 68-56 31-48q0-4-14-38t-16-44q-9-51-9-104 0-115 43.5-220t119-184.5 170.5-139 204-95.5q55-18 145-25.5t179.5-9 178.5-6 163.5-24 113.5-56.5l29.5-29.5t29.5-28 27-20 36.5-16 43.5-4.5q39 0 70.5 46t47.5 112 24 124 8 96z"
    }
  }]
};
exports.leaf = leaf;
var fire = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 1696v64q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1152 640q0 78-24.5 144t-64 112.5-87.5 88-96 77.5-87.5 72-64 81.5-24.5 96.5q0 96 67 224l-4-1 1 1q-90-41-160-83t-138.5-100-113.5-122.5-72.5-150.5-27.5-184q0-78 24.5-144t64-112.5 87.5-88 96-77.5 87.5-72 64-81.5 24.5-96.5q0-94-66-224l3 1-1-1q90 41 160 83t138.5 100 113.5 122.5 72.5 150.5 27.5 184z"
    }
  }]
};
exports.fire = fire;
var eye = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zM944 576q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zM1792 960q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"
    }
  }]
};
exports.eye = eye;
var eyeSlash = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M555 1335l78-141q-87-63-136-159t-49-203q0-121 61-225-229 117-381 353 167 258 427 375zM944 576q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zM1307 385q0 7-1 9-106 189-316 567t-315 566l-49 89q-10 16-28 16-12 0-134-70-16-10-16-28 0-12 44-87-143-65-263.5-173t-208.5-245q-20-31-20-69t20-69q153-235 380-371t496-136q89 0 180 17l54-97q10-16 28-16 5 0 18 6t31 15.5 33 18.5 31.5 18.5 19.5 11.5q16 10 16 27zM1344 832q0 139-79 253.5t-209 164.5l280-502q8 45 8 84zM1792 960q0 35-20 69-39 64-109 145-150 172-347.5 267t-419.5 95l74-132q212-18 392.5-137t301.5-307q-115-179-282-294l63-112q95 64 182.5 153t144.5 184q20 34 20 69z"
    }
  }]
};
exports.eyeSlash = eyeSlash;
var exclamationTriangle = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zM1022 1001l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zM1008 67l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"
    }
  }]
};
exports.exclamationTriangle = exclamationTriangle;
var warning = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zM1022 1001l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zM1008 67l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"
    }
  }]
};
exports.warning = warning;
var plane = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1376 160q44 52 12 148t-108 172l-161 161 160 696q5 19-12 33l-128 96q-7 6-19 6-4 0-7-1-15-3-21-16l-279-508-259 259 53 194q5 17-8 31l-96 96q-9 9-23 9h-2q-15-2-24-13l-189-252-252-189q-11-7-13-23-1-13 9-25l96-97q9-9 23-9 6 0 8 1l194 53 259-259-508-279q-14-8-17-24-2-16 9-27l128-128q14-13 30-8l665 159 160-160q76-76 172-108t148 12z"
    }
  }]
};
exports.plane = plane;
var calendar = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M128 1664h288v-288h-288v288zM480 1664h320v-288h-320v288zM128 1312h288v-320h-288v320zM480 1312h320v-320h-320v320zM128 928h288v-288h-288v288zM864 1664h320v-288h-320v288zM480 928h320v-288h-320v288zM1248 1664h288v-288h-288v288zM864 1312h320v-320h-320v320zM512 448v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1248 1312h288v-320h-288v320zM864 928h320v-288h-320v288zM1248 928h288v-288h-288v288zM1280 448v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
    }
  }]
};
exports.calendar = calendar;
var random = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M666 481q-60 92-137 273-22-45-37-72.5t-40.5-63.5-51-56.5-63-35-81.5-14.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q250 0 410 225zM1792 1280q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192q-32 0-85 0.5t-81 1-73-1-71-5-64-10.5-63-18.5-58-28.5-59-40-55-53.5-56-69.5q59-93 136-273 22 45 37 72.5t40.5 63.5 51 56.5 63 35 81.5 14.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zM1792 384q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-256q-48 0-87 15t-69 45-51 61.5-45 77.5q-32 62-78 171-29 66-49.5 111t-54 105-64 100-74 83-90 68.5-106.5 42-128 16.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q48 0 87-15t69-45 51-61.5 45-77.5q32-62 78-171 29-66 49.5-111t54-105 64-100 74-83 90-68.5 106.5-42 128-16.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z"
    }
  }]
};
exports.random = random;
var comment = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 896q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22-17 2-30.5-9t-17.5-29v-1q-3-4-0.5-12t2-10 4.5-9.5l6-9t7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5q244 0 450 85.5t326 233 120 321.5z"
    }
  }]
};
exports.comment = comment;
var magnet = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 832v128q0 201-98.5 362t-274 251.5-395.5 90.5-395.5-90.5-274-251.5-98.5-362v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v128q0 52 23.5 90t53.5 57 71 30 64 13 44 2 44-2 64-13 71-30 53.5-57 23.5-90v-128q0-26 19-45t45-19h384q26 0 45 19t19 45zM512 192v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45zM1536 192v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45z"
    }
  }]
};
exports.magnet = magnet;
var chevronUp = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"
    }
  }]
};
exports.chevronUp = chevronUp;
var chevronDown = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"
    }
  }]
};
exports.chevronDown = chevronDown;
var retweet = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1504q0 13-9.5 22.5t-22.5 9.5h-960q-8 0-13.5-2t-9-7-5.5-8-3-11.5-1-11.5v-13-11-160-416h-192q-26 0-45-19t-19-45q0-24 15-41l320-384q19-22 49-22t49 22l320 384q15 17 15 41 0 26-19 45t-45 19h-192v384h576q16 0 25 11l160 192q7 10 7 21zM1920 1088q0 24-15 41l-320 384q-20 23-49 23t-49-23l-320-384q-15-17-15-41 0-26 19-45t45-19h192v-384h-576q-16 0-25-12l-160-192q-7-9-7-20 0-13 9.5-22.5t22.5-9.5h960q8 0 13.5 2t9 7 5.5 8 3 11.5 1 11.5v13 11 160 416h192q26 0 45 19t19 45z"
    }
  }]
};
exports.retweet = retweet;
var shoppingCart = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1536 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1664 448v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"
    }
  }]
};
exports.shoppingCart = shoppingCart;
var folder = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"
    }
  }]
};
exports.folder = folder;
var folderOpen = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1879 952q0 31-31 66l-336 396q-43 51-120.5 86.5t-143.5 35.5h-1088q-34 0-60.5-13t-26.5-43q0-31 31-66l336-396q43-51 120.5-86.5t143.5-35.5h1088q34 0 60.5 13t26.5 43zM1536 608v160h-832q-94 0-197 47.5t-164 119.5l-337 396-5 6q0-4-0.5-12.5t-0.5-12.5v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158z"
    }
  }]
};
exports.folderOpen = folderOpen;
var arrowsV = {
  "viewBox": "0 0 768 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"
    }
  }]
};
exports.arrowsV = arrowsV;
var arrowsH = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"
    }
  }]
};
exports.arrowsH = arrowsH;
var barChart = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 896v512h-256v-512h256zM1024 384v1024h-256v-1024h256zM2048 1536v128h-2048v-1536h128v1408h1920zM1408 640v768h-256v-768h256zM1792 256v1152h-256v-1152h256z"
    }
  }]
};
exports.barChart = barChart;
var barChartO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 896v512h-256v-512h256zM1024 384v1024h-256v-1024h256zM2048 1536v128h-2048v-1536h128v1408h1920zM1408 640v768h-256v-768h256zM1792 256v1152h-256v-1152h256z"
    }
  }]
};
exports.barChartO = barChartO;
var twitterSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 610q-56 25-121 34 68-40 93-117-65 38-134 51-61-66-153-66-87 0-148.5 61.5t-61.5 148.5q0 29 5 48-129-7-242-65t-192-155q-29 50-29 106 0 114 91 175-47-1-100-26v2q0 75 50 133.5t123 72.5q-29 8-51 8-13 0-39-4 21 63 74.5 104t121.5 42q-116 90-261 90-26 0-50-3 148 94 322 94 112 0 210-35.5t168-95 120.5-137 75-162 24.5-168.5q0-18-1-27 63-45 105-109zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.twitterSquare = twitterSquare;
var facebookSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"
    }
  }]
};
exports.facebookSquare = facebookSquare;
var cameraRetro = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M928 832q0-14-9-23t-23-9q-66 0-113 47t-47 113q0 14 9 23t23 9 23-9 9-23q0-40 28-68t68-28q14 0 23-9t9-23zM1152 962q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM128 1536h1536v-128h-1536v128zM1280 962q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zM256 320h384v-128h-384v128zM128 512h1536v-118-138h-828l-64 128h-644v128zM1792 256v1280q0 53-37.5 90.5t-90.5 37.5h-1536q-53 0-90.5-37.5t-37.5-90.5v-1280q0-53 37.5-90.5t90.5-37.5h1536q53 0 90.5 37.5t37.5 90.5z"
    }
  }]
};
exports.cameraRetro = cameraRetro;
var key = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M832 512q0-80-56-136t-136-56-136 56-56 136q0 42 19 83-41-19-83-19-80 0-136 56t-56 136 56 136 136 56 136-56 56-136q0-42-19-83 41 19 83 19 80 0 136-56t56-136zM1683 1216q0 17-49 66t-66 49q-9 0-28.5-16t-36.5-33-38.5-40-24.5-26l-96 96 220 220q28 28 28 68 0 42-39 81t-81 39q-40 0-68-28l-671-671q-176 131-365 131-163 0-265.5-102.5t-102.5-265.5q0-160 95-313t248-248 313-95q163 0 265.5 102.5t102.5 265.5q0 189-131 365l355 355 96-96q-3-3-26-24.5t-40-38.5-33-36.5-16-28.5q0-17 49-66t66-49q13 0 23 10 6 6 46 44.5t82 79.5 86.5 86 73 78 28.5 41z"
    }
  }]
};
exports.key = key;
var cogs = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1664 1408q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1664 384q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1280 805v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zM1920 1338v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zM1920 314v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z"
    }
  }]
};
exports.cogs = cogs;
var gears = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1664 1408q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1664 384q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1280 805v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zM1920 1338v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zM1920 314v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z"
    }
  }]
};
exports.gears = gears;
var comments = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 768q0 139-94 257t-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t0.5-6.5 2-6l2.5-5t3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5 353.5 68.5 256.5 186.5 94 257zM1792 1024q0 120-71 224.5t-195 176.5q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5t2 6 0.5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230z"
    }
  }]
};
exports.comments = comments;
var thumbsOUp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 768q0-51-39-89.5t-89-38.5h-352q0-58 48-159.5t48-160.5q0-98-32-145t-128-47q-26 26-38 85t-30.5 125.5-59.5 109.5q-22 23-77 91-4 5-23 30t-31.5 41-34.5 42.5-40 44-38.5 35.5-40 27-35.5 9h-32v640h32q13 0 31.5 3t33 6.5 38 11 35 11.5 35.5 12.5 29 10.5q211 73 342 73h121q192 0 192-167 0-26-5-56 30-16 47.5-52.5t17.5-73.5-18-69q53-50 53-119 0-25-10-55.5t-25-47.5q32-1 53.5-47t21.5-81zM1536 767q0 89-49 163 9 33 9 69 0 77-38 144 3 21 3 43 0 101-60 178 1 139-85 219.5t-227 80.5h-36-93q-96 0-189.5-22.5t-216.5-65.5q-116-40-138-40h-288q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h274q36-24 137-155 58-75 107-128 24-25 35.5-85.5t30.5-126.5 62-108q39-37 90-37 84 0 151 32.5t102 101.5 35 186q0 93-48 192h176q104 0 180 76t76 179z"
    }
  }]
};
exports.thumbsOUp = thumbsOUp;
var thumbsODown = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 448q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 1024q0-35-21.5-81t-53.5-47q15-17 25-47.5t10-55.5q0-69-53-119 18-31 18-69 0-37-17.5-73.5t-47.5-52.5q5-30 5-56 0-85-49-126t-136-41h-128q-131 0-342 73-5 2-29 10.5t-35.5 12.5-35 11.5-38 11-33 6.5-31.5 3h-32v640h32q16 0 35.5 9t40 27 38.5 35.5 40 44 34.5 42.5 31.5 41 23 30q55 68 77 91 41 43 59.5 109.5t30.5 125.5 38 85q96 0 128-47t32-145q0-59-48-160.5t-48-159.5h352q50 0 89-38.5t39-89.5zM1536 1025q0 103-76 179t-180 76h-176q48 99 48 192 0 118-35 186-35 69-102 101.5t-151 32.5q-51 0-90-37-34-33-54-82t-25.5-90.5-17.5-84.5-31-64q-48-50-107-127-101-131-137-155h-274q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h288q22 0 138-40 128-44 223-66t200-22h112q140 0 226.5 79t85.5 216v5q60 77 60 178 0 22-3 43 38 67 38 144 0 36-9 69 49 73 49 163z"
    }
  }]
};
exports.thumbsODown = thumbsODown;
var starHalf = {
  "viewBox": "0 0 896 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M832 32v1339l-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41z"
    }
  }]
};
exports.starHalf = starHalf;
var heartO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zM1792 596q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"
    }
  }]
};
exports.heartO = heartO;
var signOut = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1440q0 4 1 20t0.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h320q13 0 22.5 9.5t9.5 22.5q0 4 1 20t0.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-66 0-113 47t-47 113v704q0 66 47 113t113 47h288 11 13t11.5 1 11.5 3 8 5.5 7 9 2 13.5zM1568 896q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45z"
    }
  }]
};
exports.signOut = signOut;
var linkedinSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M237 1414h231v-694h-231v694zM483 506q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zM1068 1414h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.linkedinSquare = linkedinSquare;
var thumbTack = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M480 864v-448q0-14-9-23t-23-9-23 9-9 23v448q0 14 9 23t23 9 23-9 9-23zM1152 1216q0 26-19 45t-45 19h-429l-51 483q-2 12-10.5 20.5t-20.5 8.5h-1q-27 0-32-27l-76-485h-404q-26 0-45-19t-19-45q0-123 78.5-221.5t177.5-98.5v-512q-52 0-90-38t-38-90 38-90 90-38h640q52 0 90 38t38 90-38 90-90 38v512q99 0 177.5 98.5t78.5 221.5z"
    }
  }]
};
exports.thumbTack = thumbTack;
var externalLink = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zM1792 64v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"
    }
  }]
};
exports.externalLink = externalLink;
var signIn = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1184 896q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45zM1536 544v704q0 119-84.5 203.5t-203.5 84.5h-320q-13 0-22.5-9.5t-9.5-22.5q0-4-1-20t-0.5-26.5 3-23.5 10-19.5 20.5-6.5h320q66 0 113-47t47-113v-704q0-66-47-113t-113-47h-288-11-13t-11.5-1-11.5-3-8-5.5-7-9-2-13.5q0-4-1-20t-0.5-26.5 3-23.5 10-19.5 20.5-6.5h320q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.signIn = signIn;
var trophy = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M458 883q-74-162-74-371h-256v96q0 78 94.5 162t235.5 113zM1536 608v-96h-256q0 209-74 371 141-29 235.5-113t94.5-162zM1664 480v128q0 71-41.5 143t-112 130-173 97.5-215.5 44.5q-42 54-95 95-38 34-52.5 72.5t-14.5 89.5q0 54 30.5 91t97.5 37q75 0 133.5 45.5t58.5 114.5v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-69 58.5-114.5t133.5-45.5q67 0 97.5-37t30.5-91q0-51-14.5-89.5t-52.5-72.5q-53-41-95-95-113-5-215.5-44.5t-173-97.5-112-130-41.5-143v-128q0-40 28-68t68-28h288v-96q0-66 47-113t113-47h576q66 0 113 47t47 113v96h288q40 0 68 28t28 68z"
    }
  }]
};
exports.trophy = trophy;
var githubSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M519 1200q4-6-3-13-9-7-14-2-4 6 3 13 9 7 14 2zM491 1159q-5-7-12-4-6 4 0 12 7 8 12 5 6-4 0-13zM450 1119q2-4-5-8-7-2-8 2-3 5 4 8 8 2 9-2zM471 1142q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2zM557 1217q2-7-9-11-9-3-13 4-2 7 9 11 9 3 13-4zM599 1220q0-8-12-8-10 0-10 8t11 8 11-8zM638 1213q-2-7-13-5t-9 9q2 8 12 6t10-10zM1280 896q0-212-150-362t-362-150-362 150-150 362q0 167 98 300.5t252 185.5q18 3 26.5-5t8.5-20q0-52-1-95-6 1-15.5 2.5t-35.5 2-48-4-43.5-20-29.5-41.5q-23-59-57-74-2-1-4.5-3.5l-8-8t-7-9.5 4-7.5 19.5-3.5q6 0 15 2t30 15.5 33 35.5q16 28 37.5 42t43.5 14 38-3.5 30-9.5q7-47 33-69-49-6-86-18.5t-73-39-55.5-76-19.5-119.5q0-79 53-137-24-62 5-136 19-6 54.5 7.5t60.5 29.5l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26 57-9q29 74 5 136 53 58 53 137 0 57-14 100.5t-35.5 70-53.5 44.5-62.5 26-68.5 12q35 31 35 95 0 40-0.5 89t-0.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.githubSquare = githubSquare;
var upload = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1536 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 1248v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zM1339 600q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"
    }
  }]
};
exports.upload = upload;
var lemonO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1407 826q0-44-7-113.5t-18-96.5q-12-30-17-44t-9-36.5-4-48.5q0-23 5-68.5t5-67.5q0-37-10-55-4-1-13-1-19 0-58 4.5t-59 4.5q-60 0-176-24t-175-24q-43 0-94.5 11.5t-85 23.5-89.5 34q-137 54-202 103-96 73-159.5 189.5t-88 236-24.5 248.5q0 40 12.5 120t12.5 121q0 23-11 66.5t-11 65.5 12 36.5 34 14.5q24 0 72.5-11t73.5-11q57 0 169.5 15.5t169.5 15.5q181 0 284-36 129-45 235.5-152.5t166-245.5 59.5-275zM1535 824q0 165-70 327.5t-196 288-281 180.5q-124 44-326 44-57 0-170-14.5t-169-14.5q-24 0-72.5 14.5t-73.5 14.5q-73 0-123.5-55.5t-50.5-128.5q0-24 11-68t11-67q0-40-12.5-120.5t-12.5-121.5q0-111 18-217.5t54.5-209.5 100.5-194 150-156q78-59 232-120 194-78 316-78 60 0 175.5 24t173.5 24q19 0 57-5t58-5q81 0 118 50.5t37 134.5q0 23-5 68t-5 68q0 13 2 25t3.5 16.5 7.5 20.5 8 20q16 40 25 118.5t9 136.5z"
    }
  }]
};
exports.lemonO = lemonO;
var phone = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
    }
  }]
};
exports.phone = phone;
var squareO = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1120 256h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-832q0-66-47-113t-113-47zM1408 416v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.squareO = squareO;
var bookmarkO = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 256h-1024v1242l423-406 89-85 89 85 423 406v-1242zM1164 128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z"
    }
  }]
};
exports.bookmarkO = bookmarkO;
var phoneSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1193q0-11-2-16t-18-16.5-40.5-25-47.5-26.5-45.5-25-28.5-15q-5-3-19-13t-25-15-21-5q-15 0-36.5 20.5t-39.5 45-38.5 45-33.5 20.5q-7 0-16.5-3.5t-15.5-6.5-17-9.5-14-8.5q-99-55-170-126.5t-127-170.5q-2-3-8.5-14t-9.5-17-6.5-15.5-3.5-16.5q0-13 20.5-33.5t45-38.5 45-39.5 20.5-36.5q0-10-5-21t-15-25-13-19q-3-6-15-28.5t-25-45.5-26.5-47.5-25-40.5-16.5-18-16-2q-48 0-101 22-46 21-80 94.5t-34 130.5q0 16 2.5 34t5 30.5 9 33 10 29.5 12.5 33 11 30q60 164 216.5 320.5t320.5 216.5q6 2 30 11t33 12.5 29.5 10 33 9 30.5 5 34 2.5q57 0 130.5-34t94.5-80q22-53 22-101zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.phoneSquare = phoneSquare;
var twitter = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1620 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
    }
  }]
};
exports.twitter = twitter;
var facebook = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M959 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
    }
  }]
};
exports.facebook = facebook;
var facebookF = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M959 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
    }
  }]
};
exports.facebookF = facebookF;
var github = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 0.5-76.5t0.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 88.5t0.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zM291 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zM322 1265q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zM352 1310q9-7 0-19-8-13-17-6-9 5 0 18t17 7zM394 1352q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zM451 1377q3-11-13-16-15-4-19 7t13 15q15 6 19-6zM514 1382q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zM572 1372q-2-11-18-9-16 3-14 15t18 8 14-14z"
    }
  }]
};
exports.github = github;
var unlock = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"
    }
  }]
};
exports.unlock = unlock;
var creditCard = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1760 128q66 0 113 47t47 113v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600zM160 256q-13 0-22.5 9.5t-9.5 22.5v224h1664v-224q0-13-9.5-22.5t-22.5-9.5h-1600zM1760 1536q13 0 22.5-9.5t9.5-22.5v-608h-1664v608q0 13 9.5 22.5t22.5 9.5h1600zM256 1408v-128h256v128h-256zM640 1408v-128h384v128h-384z"
    }
  }]
};
exports.creditCard = creditCard;
var feed = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 1467q2 28-17 48-18 21-47 21h-135q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5t-391.5-184.5q-25-2-41.5-20t-16.5-43v-135q0-29 21-47 17-17 43-17h5q160 13 306 80.5t259 181.5q114 113 181.5 259t80.5 306zM1408 1469q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5t-19.5-42.5q-12-215-101-408.5t-231.5-336-336-231.5-408.5-102q-25-1-42.5-19.5t-17.5-43.5v-143q0-28 20-46 18-18 44-18h3q262 13 501.5 120t425.5 294q187 186 294 425.5t120 501.5z"
    }
  }]
};
exports.feed = feed;
var rss = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 1467q2 28-17 48-18 21-47 21h-135q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5t-391.5-184.5q-25-2-41.5-20t-16.5-43v-135q0-29 21-47 17-17 43-17h5q160 13 306 80.5t259 181.5q114 113 181.5 259t80.5 306zM1408 1469q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5t-19.5-42.5q-12-215-101-408.5t-231.5-336-336-231.5-408.5-102q-25-1-42.5-19.5t-17.5-43.5v-143q0-28 20-46 18-18 44-18h3q262 13 501.5 120t425.5 294q187 186 294 425.5t120 501.5z"
    }
  }]
};
exports.rss = rss;
var hddO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1040 1216q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zM1296 1216q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zM1408 1376v-320q0-13-9.5-22.5t-22.5-9.5h-1216q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5-9.5t9.5-22.5zM178 896h1180l-157-482q-4-13-16-21.5t-26-8.5h-782q-14 0-26 8.5t-16 21.5zM1536 1056v320q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-320q0-25 16-75l197-606q17-53 63-86t101-33h782q55 0 101 33t63 86l197 606q16 50 16 75z"
    }
  }]
};
exports.hddO = hddO;
var bullhorn = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 640q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5v384q0 52-38 90t-90 38q-417-347-812-380-58 19-91 66t-31 100.5 40 92.5q-20 33-23 65.5t6 58 33.5 55 48 50 61.5 50.5q-29 58-111.5 83t-168.5 11.5-132-55.5q-7-23-29.5-87.5t-32-94.5-23-89-15-101 3.5-98.5 22-110.5h-122q-66 0-113-47t-47-113v-192q0-66 47-113t113-47h480q435 0 896-384 52 0 90 38t38 90v384zM1536 1244v-954q-394 302-768 343v270q377 42 768 341z"
    }
  }]
};
exports.bullhorn = bullhorn;
var bellO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zM246 1408h1300q-266-300-266-832 0-51-24-105t-69-103-121.5-80.5-169.5-31.5-169.5 31.5-121.5 80.5-69 103-24 105q0 532-266 832zM1728 1408q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"
    }
  }]
};
exports.bellO = bellO;
var certificate = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1376 896l138 135q30 28 20 70-12 41-52 51l-188 48 53 186q12 41-19 70-29 31-70 19l-186-53-48 188q-10 40-51 52-12 2-19 2-31 0-51-22l-135-138-135 138q-28 30-70 20-41-11-51-52l-48-188-186 53q-41 12-70-19-31-29-19-70l53-186-188-48q-40-10-52-51-10-42 20-70l138-135-138-135q-30-28-20-70 12-41 52-51l188-48-53-186q-12-41 19-70 29-31 70-19l186 53 48-188q10-41 51-51 41-12 70 19l135 139 135-139q29-30 70-19 41 10 51 51l48 188 186-53q41-12 70 19 31 29 19 70l-53 186 188 48q40 10 52 51 10 42-20 70z"
    }
  }]
};
exports.certificate = certificate;
var handORight = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 768q0-51-39-89.5t-89-38.5h-576q0-20 15-48.5t33-55 33-68 15-84.5q0-67-44.5-97.5t-115.5-30.5q-24 0-90 139-24 44-37 65-40 64-112 145-71 81-101 106-69 57-140 57h-32v640h32q72 0 167 32t193.5 64 179.5 32q189 0 189-167 0-26-5-56 30-16 47.5-52.5t17.5-73.5-18-69q53-50 53-119 0-25-10-55.5t-25-47.5h331q52 0 90-38t38-90zM1792 767q0 105-75.5 181t-180.5 76h-169q-4 62-37 119 3 21 3 43 0 101-60 178 1 139-85 219.5t-227 80.5q-133 0-322-69-164-59-223-59h-288q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h288q10 0 21.5-4.5t23.5-14 22.5-18 24-22.5 20.5-21.5 19-21.5 14-17q65-74 100-129 13-21 33-62t37-72 40.5-63 55-49.5 69.5-17.5q125 0 206.5 67t81.5 189q0 68-22 128h374q104 0 180 76t76 179z"
    }
  }]
};
exports.handORight = handORight;
var handOLeft = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1376 1408h32v-640h-32q-35 0-67.5-12t-62.5-37-50-46-49-54q-8-9-12-14-72-81-112-145-14-22-38-68-1-3-10.5-22.5t-18.5-36-20-35.5-21.5-30.5-18.5-11.5q-71 0-115.5 30.5t-44.5 97.5q0 43 15 84.5t33 68 33 55 15 48.5h-576q-50 0-89 38.5t-39 89.5q0 52 38 90t90 38h331q-15 17-25 47.5t-10 55.5q0 69 53 119-18 32-18 69t17.5 73.5 47.5 52.5q-4 24-4 56 0 85 48.5 126t135.5 41q84 0 183-32t194-64 167-32zM1664 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1792 768v640q0 53-37.5 90.5t-90.5 37.5h-288q-59 0-223 59-190 69-317 69-142 0-230-77.5t-87-217.5l1-5q-61-76-61-178 0-22 3-43-33-57-37-119h-169q-105 0-180.5-76t-75.5-181q0-103 76-179t180-76h374q-22-60-22-128 0-122 81.5-189t206.5-67q38 0 69.5 17.5t55 49.5 40.5 63 37 72 33 62q35 55 100 129 2 3 14 17t19 21.5 20.5 21.5 24 22.5 22.5 18 23.5 14 21.5 4.5h288q53 0 90.5 37.5t37.5 90.5z"
    }
  }]
};
exports.handOLeft = handOLeft;
var handOUp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1600q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 836q0-189-167-189-26 0-56 5-16-30-52.5-47.5t-73.5-17.5-69 18q-50-53-119-53-25 0-55.5 10t-47.5 25v-331q0-52-38-90t-90-38q-51 0-89.5 39t-38.5 89v576q-20 0-48.5-15t-55-33-68-33-84.5-15q-67 0-97.5 44.5t-30.5 115.5q0 24 139 90 44 24 65 37 64 40 145 112 81 71 106 101 57 69 57 140v32h640v-32q0-72 32-167t64-193.5 32-179.5zM1536 831q0 133-69 322-59 164-59 223v288q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5v-288q0-10-4.5-21.5t-14-23.5-18-22.5-22.5-24-21.5-20.5-21.5-19-17-14q-74-65-129-100-21-13-62-33t-72-37-63-40.5-49.5-55-17.5-69.5q0-125 67-206.5t189-81.5q68 0 128 22v-374q0-104 76-180t179-76q105 0 181 75.5t76 180.5v169q62 4 119 37 21-3 43-3 101 0 178 60 139-1 219.5 85t80.5 227z"
    }
  }]
};
exports.handOUp = handOUp;
var handODown = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 960q0-84-32-183t-64-194-32-167v-32h-640v32q0 35-12 67.5t-37 62.5-46 50-54 49q-9 8-14 12-81 72-145 112-22 14-68 38-3 1-22.5 10.5t-36 18.5-35.5 20-30.5 21.5-11.5 18.5q0 71 30.5 115.5t97.5 44.5q43 0 84.5-15t68-33 55-33 48.5-15v576q0 50 38.5 89t89.5 39q52 0 90-38t38-90v-331q46 35 103 35 69 0 119-53 32 18 69 18t73.5-17.5 52.5-47.5q24 4 56 4 85 0 126-48.5t41-135.5zM1280 192q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1536 956q0 142-77.5 230t-217.5 87l-5-1q-76 61-178 61-22 0-43-3-54 30-119 37v169q0 105-76 180.5t-181 75.5q-103 0-179-76t-76-180v-374q-54 22-128 22-121 0-188.5-81.5t-67.5-206.5q0-38 17.5-69.5t49.5-55 63-40.5 72-37 62-33q55-35 129-100 3-2 17-14t21.5-19 21.5-20.5 22.5-24 18-22.5 14-23.5 4.5-21.5v-288q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v288q0 59 59 223 69 190 69 317z"
    }
  }]
};
exports.handODown = handODown;
var arrowCircleLeft = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 960v-128q0-26-19-45t-45-19h-502l189-189q19-19 19-45t-19-45l-91-91q-18-18-45-18t-45 18l-362 362-91 91q-18 18-18 45t18 45l91 91 362 362q18 18 45 18t45-18l91-91q18-18 18-45t-18-45l-189-189h502q26 0 45-19t19-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleLeft = arrowCircleLeft;
var arrowCircleRight = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1285 896q0-27-18-45l-91-91-362-362q-18-18-45-18t-45 18l-91 91q-18 18-18 45t18 45l189 189h-502q-26 0-45 19t-19 45v128q0 26 19 45t45 19h502l-189 189q-19 19-19 45t19 45l91 91q18 18 45 18t45-18l362-362 91-91q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleRight = arrowCircleRight;
var arrowCircleUp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1284 895q0-27-18-45l-362-362-91-91q-18-18-45-18t-45 18l-91 91-362 362q-18 18-18 45t18 45l91 91q18 18 45 18t45-18l189-189v502q0 26 19 45t45 19h128q26 0 45-19t19-45v-502l189 189q19 19 45 19t45-19l91-91q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleUp = arrowCircleUp;
var arrowCircleDown = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1284 897q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleDown = arrowCircleDown;
var globe = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM1042 649q-2 1-9.5 9.5t-13.5 9.5q2 0 4.5-5t5-11 3.5-7q6-7 22-15 14-6 52-12 34-8 51 11-2-2 9.5-13t14.5-12q3-2 15-4.5t15-7.5l2-22q-12 1-17.5-7t-6.5-21q0 2-6 8 0-7-4.5-8t-11.5 1-9 1q-10-3-15-7.5t-8-16.5-4-15q-2-5-9.5-11t-9.5-10q-1-2-2.5-5.5t-3-6.5-4-5.5-5.5-2.5-7 5-7.5 10-4.5 5q-3-2-6-1.5t-4.5 1-4.5 3-5 3.5q-3 2-8.5 3t-8.5 2q15-5-1-11-10-4-16-3 9-4 7.5-12t-8.5-14h5q-1-4-8.5-8.5t-17.5-8.5-13-6q-8-5-34-9.5t-33-0.5q-5 6-4.5 10.5t4 14 3.5 12.5q1 6-5.5 13t-6.5 12q0 7 14 15.5t10 21.5q-3 8-16 16t-16 12q-5 8-1.5 18.5t10.5 16.5q2 2 1.5 4t-3.5 4.5-5.5 4-6.5 3.5l-3 2q-11 5-20.5-6t-13.5-26q-7-25-16-30-23-8-29 1-5-13-41-26-25-9-58-4 6-1 0-15-7-15-19-12 3-6 4-17.5t1-13.5q3-13 12-23 1-1 7-8.5t9.5-13.5 0.5-6q35 4 50-11 5-5 11.5-17t10.5-17q9-6 14-5.5t14.5 5.5 14.5 5q14 1 15.5-11t-7.5-20q12 1 3-17-4-7-8-9-12-4-27 5-8 4 2 8-1-1-9.5 10.5t-16.5 17.5-16-5q-1-1-5.5-13.5t-9.5-13.5q-8 0-16 15 3-8-11-15t-24-8q19-12-8-27-7-4-20.5-5t-19.5 4q-5 7-5.5 11.5t5 8 10.5 5.5 11.5 4 8.5 3q14 10 8 14-2 1-8.5 3.5t-11.5 4.5-6 4q-3 4 0 14t-2 14q-5-5-9-17.5t-7-16.5q7 9-25 6l-10-1q-4 0-16 2t-20.5 1-13.5-8q-4-8 0-20 1-4 4-2-4-3-11-9.5t-10-8.5q-46 15-94 41 6 1 12-1 5-2 13-6.5t10-5.5q34-14 42-7l5-5q14 16 20 25-7-4-30-1-20 6-22 12 7 12 5 18-4-3-11.5-10t-14.5-11-15-5q-16 0-22 1-146 80-235 222 7 7 12 8 4 1 5 9t2.5 11 11.5-3q9 8 3 19 1-1 44 27 19 17 21 21 3 11-10 18-1-2-9-9t-9-4q-3 5 0.5 18.5t10.5 12.5q-7 0-9.5 16t-2.5 35.5-1 23.5l2 1q-3 12 5.5 34.5t21.5 19.5q-13 3 20 43 6 8 8 9 3 2 12 7.5t15 10 10 10.5q4 5 10 22.5t14 23.5q-2 6 9.5 20t10.5 23q-1 0-2.5 1t-2.5 1q3 7 15.5 14t15.5 13q1 3 2 10t3 11 8 2q2-20-24-62-15-25-17-29-3-5-5.5-15.5t-4.5-14.5q2 0 6 1.5t8.5 3.5 7.5 4 2 3q-3 7 2 17.5t12 18.5 17 19 12 13q6 6 14 19.5t0 13.5q9 0 20 10.5t17 19.5q5 8 8 26t5 24q2 7 8.5 13.5t12.5 9.5l16 8t13 7q5 2 18.5 10.5t21.5 11.5q10 4 16 4t14.5-2.5 13.5-3.5q15-2 29 15t21 21q36 19 55 11-2 1 0.5 7.5t8 15.5 9 14.5 5.5 8.5q5 6 18 15t18 15q6-4 7-9-3 8 7 20t18 10q14-3 14-32-31 15-49-18 0-1-2.5-5.5t-4-8.5-2.5-8.5 0-7.5 5-3q9 0 10-3.5t-2-12.5-4-13q-1-8-11-20t-12-15q-5 9-16 8t-16-9q0 1-1.5 5.5t-1.5 6.5q-13 0-15-1 1-3 2.5-17.5t3.5-22.5q1-4 5.5-12t7.5-14.5 4-12.5-4.5-9.5-17.5-2.5q-19 1-26 20-1 3-3 10.5t-5 11.5-9 7q-7 3-24 2t-24-5q-13-8-22.5-29t-9.5-37q0-10 2.5-26.5t3-25-5.5-24.5q3-2 9-9.5t10-10.5q2-1 4.5-1.5t4.5 0 4-1.5 3-6q-1-1-4-3-3-3-4-3 7 3 28.5-1.5t27.5 1.5q15 11 22-2 0-1-2.5-9.5t-0.5-13.5q5 27 29 9 3 3 15.5 5t17.5 5q3 2 7 5.5t5.5 4.5 5-0.5 8.5-6.5q10 14 12 24 11 40 19 44 7 3 11 2t4.5-9.5 0-14-1.5-12.5l-1-8v-18l-1-8q-15-3-18.5-12t1.5-18.5 15-18.5q1-1 8-3.5t15.5-6.5 12.5-8q21-19 15-35 7 0 11-9-1 0-5-3t-7.5-5-4.5-2q9-5 2-16 5-3 7.5-11t7.5-10q9 12 21 2 8-8 1-16 5-7 20.5-10.5t18.5-9.5q7 2 8-2t1-12 3-12q4-5 15-9t13-5l17-11q3-4 0-4 18 2 31-11 10-11-6-20 3-6-3-9.5t-15-5.5q3-1 11.5-0.5t10.5-1.5q15-10-7-16-17-5-43 12zM879 1526q206-36 351-189-3-3-12.5-4.5t-12.5-3.5q-18-7-24-8 1-7-2.5-13t-8-9-12.5-8-11-7q-2-2-7-6t-7-5.5-7.5-4.5-8.5-2-10 1l-3 1q-3 1-5.5 2.5t-5.5 3-4 3 0 2.5q-21-17-36-22-5-1-11-5.5t-10.5-7-10-1.5-11.5 7q-5 5-6 15t-2 13q-7-5 0-17.5t2-18.5q-3-6-10.5-4.5t-12 4.5-11.5 8.5-9 6.5-8.5 5.5-8.5 7.5q-3 4-6 12t-5 11q-2-4-11.5-6.5t-9.5-5.5q2 10 4 35t5 38q7 31-12 48-27 25-29 40-4 22 12 26 0 7-8 20.5t-7 21.5q0 6 2 16z"
    }
  }]
};
exports.globe = globe;
var wrench = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1028 1052l-682 682q-37 37-90 37-52 0-91-37l-106-108q-38-36-38-90 0-53 38-91l681-681q39 98 114.5 173.5t173.5 114.5zM1662 617q0 39-23 106-47 134-164.5 217.5t-258.5 83.5q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q58 0 121.5 16.5t107.5 46.5q16 11 16 28t-16 28l-293 169v224l193 107q5-3 79-48.5t135.5-81 70.5-35.5q15 0 23.5 10t8.5 25z"
    }
  }]
};
exports.wrench = wrench;
var tasks = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1408h640v-128h-640v128zM640 896h1024v-128h-1024v128zM1280 384h384v-128h-384v128zM1792 1216v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 704v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 192v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45z"
    }
  }]
};
exports.tasks = tasks;
var filter = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1403 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z"
    }
  }]
};
exports.filter = filter;
var briefcase = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 256h512v-128h-512v128zM1792 896v480q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-480h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45v-160h672zM1024 896v128h-256v-128h256zM1792 416v384h-1792v-384q0-66 47-113t113-47h352v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113z"
    }
  }]
};
exports.briefcase = briefcase;
var arrowsAlt = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1283 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"
    }
  }]
};
exports.arrowsAlt = arrowsAlt;
var group = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M593 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zM1664 1533q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM1344 640q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zM1920 865q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zM1792 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"
    }
  }]
};
exports.group = group;
var users = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M593 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zM1664 1533q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM1344 640q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zM1920 865q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zM1792 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"
    }
  }]
};
exports.users = users;
var chain = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1456 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zM753 511q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"
    }
  }]
};
exports.chain = chain;
var link = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1456 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zM753 511q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"
    }
  }]
};
exports.link = link;
var cloud = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1920 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-132 71-241.5t187-163.5q-2-28-2-43 0-212 150-362t362-150q158 0 286.5 88t187.5 230q70-62 166-62 106 0 181 75t75 181q0 75-41 138 129 30 213 134.5t84 239.5z"
    }
  }]
};
exports.cloud = cloud;
var flask = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1527 1448q56 89 21.5 152.5t-140.5 63.5h-1152q-106 0-140.5-63.5t21.5-152.5l503-793v-399h-64q-26 0-45-19t-19-45 19-45 45-19h512q26 0 45 19t19 45-19 45-45 19h-64v399zM748 723l-272 429h712l-272-429-20-31v-37-399h-128v399 37z"
    }
  }]
};
exports.flask = flask;
var cut = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1260 960l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zM579 700q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zM494 1445q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zM672 832l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zM896 1056l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zM1600 1472l128-64-520-408-177 138q-2 3-13 7z"
    }
  }]
};
exports.cut = cut;
var scissors = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1260 960l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zM579 700q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zM494 1445q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zM672 832l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zM896 1056l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zM1600 1472l128-64-520-408-177 138q-2 3-13 7z"
    }
  }]
};
exports.scissors = scissors;
var copy = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zM1152 597l-299 299h299v-299zM512 213l-299 299h299v-299zM708 860l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zM1664 1664v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"
    }
  }]
};
exports.copy = copy;
var filesO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zM1152 597l-299 299h299v-299zM512 213l-299 299h299v-299zM708 860l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zM1664 1664v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"
    }
  }]
};
exports.filesO = filesO;
var paperclip = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1404 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"
    }
  }]
};
exports.paperclip = paperclip;
var floppyO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1536h768v-384h-768v384zM1280 1536h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zM896 608v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zM1536 640v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"
    }
  }]
};
exports.floppyO = floppyO;
var save = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1536h768v-384h-768v384zM1280 1536h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zM896 608v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zM1536 640v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"
    }
  }]
};
exports.save = save;
var square = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.square = square;
var bars = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 832v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 320v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
    }
  }]
};
exports.bars = bars;
var navicon = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 832v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 320v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
    }
  }]
};
exports.navicon = navicon;
var reorder = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 832v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 320v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
    }
  }]
};
exports.reorder = reorder;
var listUl = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM384 896q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zM384 384q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1792 800v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zM1792 288v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"
    }
  }]
};
exports.listUl = listUl;
var listOl = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zM383 993v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zM384 413v99h-335v-99h107q0-41 0.5-121.5t0.5-121.5v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zM1792 800v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zM1792 288v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"
    }
  }]
};
exports.listOl = listOl;
var strikethrough = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zM483 832q-28-35-51-80-48-98-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zM990 1088h411q7 39 7 92 0 111-41 212-23 56-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"
    }
  }]
};
exports.strikethrough = strikethrough;
var underline = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M48 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 0.5 32.5t0.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zM1536 1632v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"
    }
  }]
};
exports.underline = underline;
var table = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM512 992v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1024 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM512 608v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1024 992v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1536 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1024 608v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1536 992v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1536 608v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1664 288v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"
    }
  }]
};
exports.table = table;
var magic = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1190 581l293-293-107-107-293 293zM1637 288q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zM286 98l98 30-98 30-30 98-30-98-98-30 98-30 30-98zM636 260l196 60-196 60-60 196-60-196-196-60 196-60 60-196zM1566 738l98 30-98 30-30 98-30-98-98-30 98-30 30-98zM926 98l98 30-98 30-30 98-30-98-98-30 98-30 30-98z"
    }
  }]
};
exports.magic = magic;
var truck = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM256 896h384v-256h-158q-13 0-22 9l-195 195q-9 9-9 22v30zM1536 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM1792 320v1024q0 15-4 26.5t-13.5 18.5-16.5 11.5-23.5 6-22.5 2-25.5 0-22.5-0.5q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-64q-3 0-22.5 0.5t-25.5 0-22.5-2-23.5-6-16.5-11.5-13.5-18.5-4-26.5q0-26 19-45t45-19v-320q0-8-0.5-35t0-38 2.5-34.5 6.5-37 14-30.5 22.5-30l198-198q19-19 50.5-32t58.5-13h160v-192q0-26 19-45t45-19h1024q26 0 45 19t19 45z"
    }
  }]
};
exports.truck = truck;
var pinterest = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 896q0 209-103 385.5t-279.5 279.5-385.5 103q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214t-172.5-163-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5-21.5 134q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5t273.5-108.5q151 0 235.5 82t84.5 213q0 170-68.5 289t-175.5 119q-61 0-98-43.5t-23-104.5q8-35 26.5-93.5t30-103 11.5-75.5q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281t-127-423q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.pinterest = pinterest;
var pinterestSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-725q85-122 108-210 9-34 53-209 21 39 73.5 67t112.5 28q181 0 295.5-147.5t114.5-373.5q0-84-35-162.5t-96.5-139-152.5-97-197-36.5q-104 0-194.5 28.5t-153 76.5-107.5 109.5-66.5 128-21.5 132.5q0 102 39.5 180t116.5 110q13 5 23.5 0t14.5-19q10-44 15-61 6-23-11-42-50-62-50-150 0-150 103.5-256.5t270.5-106.5q149 0 232.5 81t83.5 210q0 168-67.5 286t-173.5 118q-60 0-97-43.5t-23-103.5q8-34 26.5-92.5t29.5-102 11-74.5q0-49-26.5-81.5t-75.5-32.5q-61 0-103.5 56.5t-42.5 139.5q0 72 24 121l-98 414q-24 100-7 254h-183q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"
    }
  }]
};
exports.pinterestSquare = pinterestSquare;
var googlePlusSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M917 905q0-26-6-64h-362v132h217q-3 24-16.5 50t-37.5 53-66.5 44.5-96.5 17.5q-99 0-169-71t-70-171 70-171 169-71q92 0 153 59l104-101q-108-100-257-100-160 0-272 112.5t-112 271.5 112 271.5 272 112.5q165 0 266.5-105t101.5-270zM1262 951h109v-110h-109v-110h-110v110h-110v110h110v110h110v-110zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.googlePlusSquare = googlePlusSquare;
var googlePlus = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1437 913q0 208-87 370.5t-248 254-369 91.5q-149 0-285-58t-234-156-156-234-58-285 58-285 156-234 234-156 285-58q286 0 491 192l-199 191q-117-113-292-113-123 0-227.5 62t-165.5 168.5-61 232.5 61 232.5 165.5 168.5 227.5 62q83 0 152.5-23t114.5-57.5 78.5-78.5 49-83 21.5-74h-416v-252h692q12 63 12 122zM2304 791v210h-209v209h-210v-209h-209v-210h209v-209h210v209h209z"
    }
  }]
};
exports.googlePlus = googlePlus;
var money = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 1152h384v-96h-128v-448h-114l-148 137 77 80q42-37 55-57h2v288h-128v96zM1280 896q0 70-21 142t-59.5 134-101.5 101-138 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134 101.5-101 138-39 138 39 101.5 101 59.5 134 21 142zM1792 1152v-512q-106 0-181-75t-75-181h-1152q0 106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zM1920 320v1152q0 26-19 45t-45 19h-1792q-26 0-45-19t-19-45v-1152q0-26 19-45t45-19h1792q26 0 45 19t19 45z"
    }
  }]
};
exports.money = money;
var caretDown = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
    }
  }]
};
exports.caretDown = caretDown;
var caretUp = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
    }
  }]
};
exports.caretUp = caretUp;
var caretLeft = {
  "viewBox": "0 0 640 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 448v896q0 26-19 45t-45 19-45-19l-448-448q-19-19-19-45t19-45l448-448q19-19 45-19t45 19 19 45z"
    }
  }]
};
exports.caretLeft = caretLeft;
var caretRight = {
  "viewBox": "0 0 640 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M576 896q0 26-19 45l-448 448q-19 19-45 19t-45-19-19-45v-896q0-26 19-45t45-19 45 19l448 448q19 19 19 45z"
    }
  }]
};
exports.caretRight = caretRight;
var columns = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M160 1536h608v-1152h-640v1120q0 13 9.5 22.5t22.5 9.5zM1536 1504v-1120h-640v1152h608q13 0 22.5-9.5t9.5-22.5zM1664 288v1216q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1344q66 0 113 47t47 113z"
    }
  }]
};
exports.columns = columns;
var sort = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45zM1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
    }
  }]
};
exports.sort = sort;
var unsorted = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45zM1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
    }
  }]
};
exports.unsorted = unsorted;
var sortDesc = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
    }
  }]
};
exports.sortDesc = sortDesc;
var sortDown = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
    }
  }]
};
exports.sortDown = sortDown;
var sortAsc = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
    }
  }]
};
exports.sortAsc = sortAsc;
var sortUp = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
    }
  }]
};
exports.sortUp = sortUp;
var envelope = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h1 1q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zM1792 416q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-1-1q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
    }
  }]
};
exports.envelope = envelope;
var linkedin = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M349 625v991h-330v-991h330zM370 319q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zM1536 1048v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"
    }
  }]
};
exports.linkedin = linkedin;
var rotateLeft = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"
    }
  }]
};
exports.rotateLeft = rotateLeft;
var undo = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"
    }
  }]
};
exports.undo = undo;
var gavel = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z"
    }
  }]
};
exports.gavel = gavel;
var legal = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z"
    }
  }]
};
exports.legal = legal;
var dashboard = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM576 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1004 1185l101-382q6-26-7.5-48.5t-38.5-29.5-48 6.5-30 39.5l-101 382q-60 5-107 43.5t-63 98.5q-20 77 20 146t117 89 146-20 89-117q16-60-6-117t-72-91zM1664 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1024 512q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1472 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1792 1152q0 261-141 483-19 29-54 29h-1402q-35 0-54-29-141-221-141-483 0-182 71-348t191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.dashboard = dashboard;
var tachometer = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM576 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1004 1185l101-382q6-26-7.5-48.5t-38.5-29.5-48 6.5-30 39.5l-101 382q-60 5-107 43.5t-63 98.5q-20 77 20 146t117 89 146-20 89-117q16-60-6-117t-72-91zM1664 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1024 512q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1472 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1792 1152q0 261-141 483-19 29-54 29h-1402q-35 0-54-29-141-221-141-483 0-182 71-348t191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.tachometer = tachometer;
var commentO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 384q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zM1792 896q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-0.5-12t2-10 4.5-9.5l6-9t7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-174 120-321.5t326-233 450-85.5 450 85.5 326 233 120 321.5z"
    }
  }]
};
exports.commentO = commentO;
var commentsO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 384q-153 0-286 52t-211.5 141-78.5 191q0 82 53 158t149 132l97 56-35 84q34-20 62-39l44-31 53 10q78 14 153 14 153 0 286-52t211.5-141 78.5-191-78.5-191-211.5-141-286-52zM704 256q191 0 353.5 68.5t256.5 186.5 94 257-94 257-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t0.5-6.5 2-6l2.5-5t3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5zM1526 1425q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5t2 6 0.5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230q0 120-71 224.5t-195 176.5z"
    }
  }]
};
exports.commentsO = commentsO;
var bolt = {
  "viewBox": "0 0 896 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M885 566q18 20 7 44l-540 1157q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18l-171 463 396-98q8-2 12-2 19 0 34 15z"
    }
  }]
};
exports.bolt = bolt;
var flash = {
  "viewBox": "0 0 896 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M885 566q18 20 7 44l-540 1157q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18l-171 463 396-98q8-2 12-2 19 0 34 15z"
    }
  }]
};
exports.flash = flash;
var sitemap = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1248v320q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96v-192h-512v192h96q40 0 68 28t28 68v320q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96v-192h-512v192h96q40 0 68 28t28 68v320q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96v-192q0-52 38-90t90-38h512v-192h-96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h320q40 0 68 28t28 68v320q0 40-28 68t-68 28h-96v192h512q52 0 90 38t38 90v192h96q40 0 68 28t28 68z"
    }
  }]
};
exports.sitemap = sitemap;
var umbrella = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 828v580q0 104-76 180t-180 76-180-76-76-180q0-26 19-45t45-19 45 19 19 45q0 50 39 89t89 39 89-39 39-89v-580q33-11 64-11t64 11zM1664 855q0 13-9.5 22.5t-22.5 9.5q-11 0-23-10-49-46-93-69t-102-23q-68 0-128 37t-103 97q-7 10-17.5 28t-14.5 24q-11 17-28 17-18 0-29-17-4-6-14.5-24t-17.5-28q-43-60-102.5-97t-127.5-37-127.5 37-102.5 97q-7 10-17.5 28t-14.5 24q-11 17-29 17-17 0-28-17-4-6-14.5-24t-17.5-28q-43-60-103-97t-128-37q-58 0-102 23t-93 69q-12 10-23 10-13 0-22.5-9.5t-9.5-22.5q0-5 1-7 45-183 172.5-319.5t298-204.5 360.5-68q140 0 274.5 40t246.5 113.5 194.5 187 115.5 251.5q1 2 1 7zM896 128v98q-42-2-64-2t-64 2v-98q0-26 19-45t45-19 45 19 19 45z"
    }
  }]
};
exports.umbrella = umbrella;
var clipboard = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"
    }
  }]
};
exports.clipboard = clipboard;
var paste = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"
    }
  }]
};
exports.paste = paste;
var lightbulbO = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M736 576q0 13-9.5 22.5t-22.5 9.5-22.5-9.5-9.5-22.5q0-46-54-71t-106-25q-13 0-22.5-9.5t-9.5-22.5 9.5-22.5 22.5-9.5q50 0 99.5 16t87 54 37.5 90zM896 576q0-72-34.5-134t-90-101.5-123-62-136.5-22.5-136.5 22.5-123 62-90 101.5-34.5 134q0 101 68 180 10 11 30.5 33t30.5 33q128 153 141 298h228q13-145 141-298 10-11 30.5-33t30.5-33q68-79 68-180zM1024 576q0 155-103 268-45 49-74.5 87t-59.5 95.5-34 107.5q47 28 47 82 0 37-25 64 25 27 25 64 0 52-45 81 13 23 13 47 0 46-31.5 71t-77.5 25q-20 44-60 70t-87 26-87-26-60-70q-46 0-77.5-25t-31.5-71q0-24 13-47-45-29-45-81 0-37 25-64-25-27-25-64 0-54 47-82-4-50-34-107.5t-59.5-95.5-74.5-87q-103-113-103-268 0-99 44.5-184.5t117-142 164-89 186.5-32.5 186.5 32.5 164 89 117 142 44.5 184.5z"
    }
  }]
};
exports.lightbulbO = lightbulbO;
var exchange = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1184v192q0 13-9.5 22.5t-22.5 9.5h-1376v192q0 13-9.5 22.5t-22.5 9.5q-12 0-24-10l-319-320q-9-9-9-22 0-14 9-23l320-320q9-9 23-9 13 0 22.5 9.5t9.5 22.5v192h1376q13 0 22.5 9.5t9.5 22.5zM1792 640q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-1376q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1376v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z"
    }
  }]
};
exports.exchange = exchange;
var cloudDownload = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 928q0-14-9-23t-23-9h-224v-352q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v352h-224q-13 0-22.5 9.5t-9.5 22.5q0 14 9 23l352 352q9 9 23 9t23-9l351-351q10-12 10-24zM1920 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240t188-165q-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5t83.5 238.5z"
    }
  }]
};
exports.cloudDownload = cloudDownload;
var cloudUpload = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 864q0-14-9-23l-352-352q-9-9-23-9t-23 9l-351 351q-10 12-10 24 0 14 9 23t23 9h224v352q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5v-352h224q13 0 22.5-9.5t9.5-22.5zM1920 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240t188-165q-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5t83.5 238.5z"
    }
  }]
};
exports.cloudUpload = cloudUpload;
var userMd = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1344q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zM1408 1405q0 121-73 190t-194 69h-874q-121 0-194-69t-73-190q0-68 5.5-131t24-138 47.5-132.5 81-103 120-60.5q-22 52-22 120v203q-58 20-93 70t-35 111q0 80 56 136t136 56 136-56 56-136q0-61-35.5-111t-92.5-70v-203q0-62 25-93 132 104 295 104t295-104q25 31 25 93v64q-106 0-181 75t-75 181v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-52 38-90t90-38 90 38 38 90v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-68-34.5-127.5t-93.5-93.5q0-10 0.5-42.5t0-48-2.5-41.5-7-47-13-40q68 15 120 60.5t81 103 47.5 132.5 24 138 5.5 131zM1088 512q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"
    }
  }]
};
exports.userMd = userMd;
var stethoscope = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 704q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 704q0 62-35.5 111t-92.5 70v395q0 159-131.5 271.5t-316.5 112.5-316.5-112.5-131.5-271.5v-132q-164-20-274-128t-110-252v-512q0-26 19-45t45-19q6 0 16 2 17-30 47-48t65-18q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5q-33 0-64-18v402q0 106 94 181t226 75 226-75 94-181v-402q-31 18-64 18-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5q35 0 65 18t47 48q10-2 16-2 26 0 45 19t19 45v512q0 144-110 252t-274 128v132q0 106 94 181t226 75 226-75 94-181v-395q-57-21-92.5-70t-35.5-111q0-80 56-136t136-56 136 56 56 136z"
    }
  }]
};
exports.stethoscope = stethoscope;
var suitcase = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 384h512v-128h-512v128zM288 384v1280h-64q-92 0-158-66t-66-158v-832q0-92 66-158t158-66h64zM1408 384v1280h-1024v-1280h128v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h128zM1792 608v832q0 92-66 158t-158 66h-64v-1280h64q92 0 158 66t66 158z"
    }
  }]
};
exports.suitcase = suitcase;
var bell = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zM1728 1408q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"
    }
  }]
};
exports.bell = bell;
var coffee = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 640q0-80-56-136t-136-56h-64v384h64q80 0 136-56t56-136zM0 1408h1792q0 106-75 181t-181 75h-1280q-106 0-181-75t-75-181zM1856 640q0 159-112.5 271.5t-271.5 112.5h-64v32q0 92-66 158t-158 66h-704q-92 0-158-66t-66-158v-736q0-26 19-45t45-19h1152q159 0 271.5 112.5t112.5 271.5z"
    }
  }]
};
exports.coffee = coffee;
var cutlery = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 64v640q0 61-35.5 111t-92.5 70v779q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-779q-57-20-92.5-70t-35.5-111v-640q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45zM1408 64v1600q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-512h-224q-13 0-22.5-9.5t-9.5-22.5v-800q0-132 94-226t226-94h256q26 0 45 19t19 45z"
    }
  }]
};
exports.cutlery = cutlery;
var fileTextO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM384 800q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64zM1120 1024q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zM1120 1280q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"
    }
  }]
};
exports.fileTextO = fileTextO;
var buildingO = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1664h384v-1536h-1152v1536h384v-224q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v224zM1408 64v1664q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h1280q26 0 45 19t19 45z"
    }
  }]
};
exports.buildingO = buildingO;
var hospitalO = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1664h384v-1152h-256v32q0 40-28 68t-68 28h-448q-40 0-68-28t-28-68v-32h-256v1152h384v-224q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v224zM896 480v-320q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v96h-128v-96q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-96h128v96q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1408 448v1280q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1280q0-26 19-45t45-19h320v-288q0-40 28-68t68-28h448q40 0 68 28t28 68v288h320q26 0 45 19t19 45z"
    }
  }]
};
exports.hospitalO = hospitalO;
var ambulance = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1408q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM256 896h384v-256h-158q-14 2-22 9l-195 195q-7 12-9 22v30zM1536 1408q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1664 736v-192q0-14-9-23t-23-9h-224v-224q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v224h-224q-14 0-23 9t-9 23v192q0 14 9 23t23 9h224v224q0 14 9 23t23 9h192q14 0 23-9t9-23v-224h224q14 0 23-9t9-23zM1920 192v1152q0 26-19 45t-45 19h-192q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-128q-26 0-45-19t-19-45 19-45 45-19v-416q0-26 13-58t32-51l198-198q19-19 51-32t58-13h160v-320q0-26 19-45t45-19h1152q26 0 45 19t19 45z"
    }
  }]
};
exports.ambulance = ambulance;
var medkit = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1120v-192q0-14-9-23t-23-9h-224v-224q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v224h-224q-14 0-23 9t-9 23v192q0 14 9 23t23 9h224v224q0 14 9 23t23 9h192q14 0 23-9t9-23v-224h224q14 0 23-9t9-23zM640 384h512v-128h-512v128zM256 384v1280h-32q-92 0-158-66t-66-158v-832q0-92 66-158t158-66h32zM1440 384v1280h-1088v-1280h160v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h160zM1792 608v832q0 92-66 158t-158 66h-32v-1280h32q92 0 158 66t66 158z"
    }
  }]
};
exports.medkit = medkit;
var fighterJet = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1920 960q-1 32-288 96l-352 32-224 64h-64l-293 352h69q26 0 45 4.5t19 11.5-19 11.5-45 4.5h-96-160-64v-32h64v-416h-160l-192 224h-96l-32-32v-192h32v-32h128v-8l-192-24v-128l192-24v-8h-128v-32h-32v-192l32-32h96l192 224h160v-416h-64v-32h64 160 96q26 0 45 4.5t19 11.5-19 11.5-45 4.5h-69l293 352h64l224 64 352 32q128 28 200 52t80 34z"
    }
  }]
};
exports.fighterJet = fighterJet;
var beer = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 896v-384h-256v256q0 53 37.5 90.5t90.5 37.5h128zM1664 1344v192h-1152v-192l128-192h-128q-159 0-271.5-112.5t-112.5-271.5v-320l-64-64 32-128h480l32-128h960l32 192-64 32v800z"
    }
  }]
};
exports.beer = beer;
var hSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1344v-896q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-512v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v896q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h512v320q0 26 19 45t45 19h128q26 0 45-19t19-45zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.hSquare = hSquare;
var plusSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.plusSquare = plusSquare;
var angleDoubleLeft = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M627 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zM1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"
    }
  }]
};
exports.angleDoubleLeft = angleDoubleLeft;
var angleDoubleRight = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zM979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"
    }
  }]
};
exports.angleDoubleRight = angleDoubleRight;
var angleDoubleUp = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1075 1312q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23zM1075 928q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
    }
  }]
};
exports.angleDoubleUp = angleDoubleUp;
var angleDoubleDown = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1075 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zM1075 480q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
    }
  }]
};
exports.angleDoubleDown = angleDoubleDown;
var angleLeft = {
  "viewBox": "0 0 640 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M627 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"
    }
  }]
};
exports.angleLeft = angleLeft;
var angleRight = {
  "viewBox": "0 0 640 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"
    }
  }]
};
exports.angleRight = angleRight;
var angleUp = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1075 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
    }
  }]
};
exports.angleUp = angleUp;
var angleDown = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
    }
  }]
};
exports.angleDown = angleDown;
var desktop = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 992v-832q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zM1920 160v1088q0 66-47 113t-113 47h-544q0 37 16 77.5t32 71 16 43.5q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45q0-14 16-44t32-70 16-78h-544q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }
  }]
};
exports.desktop = desktop;
var laptop = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M416 1280q-66 0-113-47t-47-113v-704q0-66 47-113t113-47h1088q66 0 113 47t47 113v704q0 66-47 113t-113 47h-1088zM384 416v704q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5v-704q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5zM1760 1344h160v96q0 40-47 68t-113 28h-1600q-66 0-113-28t-47-68v-96h160 1600zM1040 1440q16 0 16-16t-16-16h-160q-16 0-16 16t16 16h160z"
    }
  }]
};
exports.laptop = laptop;
var tablet = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1408q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1024 1248v-960q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zM1152 288v1088q0 66-47 113t-113 47h-832q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h832q66 0 113 47t47 113z"
    }
  }]
};
exports.tablet = tablet;
var mobile = {
  "viewBox": "0 0 768 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M464 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zM672 1248v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zM480 400q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zM768 384v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z"
    }
  }]
};
exports.mobile = mobile;
var mobilePhone = {
  "viewBox": "0 0 768 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M464 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zM672 1248v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zM480 400q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zM768 384v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z"
    }
  }]
};
exports.mobilePhone = mobilePhone;
var circleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.circleO = circleO;
var quoteLeft = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zM1664 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"
    }
  }]
};
exports.quoteLeft = quoteLeft;
var quoteRight = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zM1664 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z"
    }
  }]
};
exports.quoteRight = quoteRight;
var spinner = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1024 1600q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM320 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1522 1394q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM558 398q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zM1728 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1088 192q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1618 398q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
    }
  }]
};
exports.spinner = spinner;
var circle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.circle = circle;
var mailReply = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1120q0 166-127 451-3 7-10.5 24t-13.5 30-13 22q-12 17-28 17-15 0-23.5-10t-8.5-25q0-9 2.5-26.5t2.5-23.5q5-68 5-123 0-101-17.5-181t-48.5-138.5-80-101-105.5-69.5-133-42.5-154-21.5-175.5-6h-224v256q0 26-19 45t-45 19-45-19l-512-512q-19-19-19-45t19-45l512-512q19-19 45-19t45 19 19 45v256h224q713 0 875 403 53 134 53 333z"
    }
  }]
};
exports.mailReply = mailReply;
var reply = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1120q0 166-127 451-3 7-10.5 24t-13.5 30-13 22q-12 17-28 17-15 0-23.5-10t-8.5-25q0-9 2.5-26.5t2.5-23.5q5-68 5-123 0-101-17.5-181t-48.5-138.5-80-101-105.5-69.5-133-42.5-154-21.5-175.5-6h-224v256q0 26-19 45t-45 19-45-19l-512-512q-19-19-19-45t19-45l512-512q19-19 45-19t45 19 19 45v256h224q713 0 875 403 53 134 53 333z"
    }
  }]
};
exports.reply = reply;
var githubAlt = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zM1280 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zM1440 1216q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zM1664 1040q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z"
    }
  }]
};
exports.githubAlt = githubAlt;
var folderO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 1312v-704q0-40-28-68t-68-28h-704q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v960q0 40 28 68t68 28h1216q40 0 68-28t28-68zM1664 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"
    }
  }]
};
exports.folderO = folderO;
var folderOpenO = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1781 931q0-35-53-35h-1088q-40 0-85.5 21.5t-71.5 52.5l-294 363q-18 24-18 40 0 35 53 35h1088q40 0 86-22t71-53l294-363q18-22 18-39zM640 768h768v-160q0-40-28-68t-68-28h-576q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v853l256-315q44-53 116-87.5t140-34.5zM1909 931q0 62-46 120l-295 363q-43 53-116 87.5t-140 34.5h-1088q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158v160h192q54 0 99 24.5t67 70.5q15 32 15 68z"
    }
  }]
};
exports.folderOpenO = folderOpenO;
var smileO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1134 1075q-37 121-138 195t-228 74-228-74-138-195q-8-25 4-48.5t38-31.5q25-8 48.5 4t31.5 38q25 80 92.5 129.5t151.5 49.5 151.5-49.5 92.5-129.5q8-26 32-38t49-4 37 31.5 4 48.5zM640 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1152 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.smileO = smileO;
var frownO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1134 1229q8 25-4 48.5t-37 31.5-49-4-32-38q-25-80-92.5-129.5t-151.5-49.5-151.5 49.5-92.5 129.5q-8 26-31.5 38t-48.5 4q-26-8-38-31.5t-4-48.5q37-121 138-195t228-74 228 74 138 195zM640 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1152 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.frownO = frownO;
var mehO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 1088q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h640q26 0 45 19t19 45zM640 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1152 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.mehO = mehO;
var gamepad = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M832 1088v-128q0-14-9-23t-23-9h-192v-192q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v192h-192q-14 0-23 9t-9 23v128q0 14 9 23t23 9h192v192q0 14 9 23t23 9h128q14 0 23-9t9-23v-192h192q14 0 23-9t9-23zM1408 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1664 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1920 1024q0 212-150 362t-362 150q-192 0-338-128h-220q-146 128-338 128-212 0-362-150t-150-362 150-362 362-150h896q212 0 362 150t150 362z"
    }
  }]
};
exports.gamepad = gamepad;
var keyboardO = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1168v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM512 912v96q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h224q16 0 16 16zM384 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1408 1168v96q0 16-16 16h-864q-16 0-16-16v-96q0-16 16-16h864q16 0 16 16zM768 912v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM640 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1024 912v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM896 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1280 912v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1664 1168v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1152 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1408 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1664 656v352q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h112v-240q0-16 16-16h96q16 0 16 16zM1792 1408v-896h-1664v896h1664zM1920 512v896q0 53-37.5 90.5t-90.5 37.5h-1664q-53 0-90.5-37.5t-37.5-90.5v-896q0-53 37.5-90.5t90.5-37.5h1664q53 0 90.5 37.5t37.5 90.5z"
    }
  }]
};
exports.keyboardO = keyboardO;
var flagO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 1045v-616q-169 91-306 91-82 0-145-32-100-49-184-76.5t-178-27.5q-173 0-403 127v599q245-113 433-113 55 0 103.5 7.5t98 26 77 31 82.5 39.5l28 14q44 22 101 22 120 0 293-92zM320 256q0 35-17.5 64t-46.5 46v1266q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-1266q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1792 320v763q0 39-35 57-10 5-17 9-218 116-369 116-88 0-158-35l-28-14q-64-33-99-48t-91-29-114-14q-102 0-235.5 44t-228.5 102q-15 9-33 9-16 0-32-8-32-19-32-56v-742q0-35 31-55 35-21 78.5-42.5t114-52 152.5-49.5 155-19q112 0 209 31t209 86q38 19 89 19 122 0 310-112 22-12 31-17 31-16 62 2 31 20 31 55z"
    }
  }]
};
exports.flagO = flagO;
var flagCheckered = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M832 1000v-192q-181 16-384 117v185q205-96 384-110zM832 582v-197q-172 8-384 126v189q215-111 384-118zM1664 1045v-184q-235 116-384 71v-224q-20-6-39-15-5-3-33-17t-34.5-17-31.5-15-34.5-15.5-32.5-13-36-12.5-35-8.5-39.5-7.5-39.5-4-44-2q-23 0-49 3v222h19q102 0 192.5 29t197.5 82q19 9 39 15v188q42 17 91 17 120 0 293-92zM1664 618v-189q-169 91-306 91-45 0-78-8v196q148 42 384-90zM320 256q0 35-17.5 64t-46.5 46v1266q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-1266q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1792 320v763q0 39-35 57-10 5-17 9-218 116-369 116-88 0-158-35l-28-14q-64-33-99-48t-91-29-114-14q-102 0-235.5 44t-228.5 102q-15 9-33 9-16 0-32-8-32-19-32-56v-742q0-35 31-55 35-21 78.5-42.5t114-52 152.5-49.5 155-19q112 0 209 31t209 86q38 19 89 19 122 0 310-112 22-12 31-17 31-16 62 2 31 20 31 55z"
    }
  }]
};
exports.flagCheckered = flagCheckered;
var terminal = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M585 983l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23zM1664 1440v64q0 14-9 23t-23 9h-960q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h960q14 0 23 9t9 23z"
    }
  }]
};
exports.terminal = terminal;
var code = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M617 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zM1208 332l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zM1865 983l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"
    }
  }]
};
exports.code = code;
var mailReplyAll = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1082v70q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v69l-397 398q-19 19-19 45t19 45zM1792 1120q0 58-17 133.5t-38.5 138-48 125-40.5 90.5l-20 40q-8 17-28 17-6 0-9-1-25-8-23-34 43-400-106-565-64-71-170.5-110.5t-267.5-52.5v251q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v262q411 28 599 221 169 173 169 509z"
    }
  }]
};
exports.mailReplyAll = mailReplyAll;
var replyAll = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1082v70q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v69l-397 398q-19 19-19 45t19 45zM1792 1120q0 58-17 133.5t-38.5 138-48 125-40.5 90.5l-20 40q-8 17-28 17-6 0-9-1-25-8-23-34 43-400-106-565-64-71-170.5-110.5t-267.5-52.5v251q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v262q411 28 599 221 169 173 169 509z"
    }
  }]
};
exports.replyAll = replyAll;
var starHalfEmpty = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1186 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zM1638 695l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"
    }
  }]
};
exports.starHalfEmpty = starHalfEmpty;
var starHalfFull = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1186 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zM1638 695l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"
    }
  }]
};
exports.starHalfFull = starHalfFull;
var starHalfO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1186 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zM1638 695l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"
    }
  }]
};
exports.starHalfO = starHalfO;
var locationArrow = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1401 349l-640 1280q-17 35-57 35-5 0-15-2-22-5-35.5-22.5t-13.5-39.5v-576h-576q-22 0-39.5-13.5t-22.5-35.5 4-42 29-30l1280-640q13-7 29-7 27 0 45 19 15 14 18.5 34.5t-6.5 39.5z"
    }
  }]
};
exports.locationArrow = locationArrow;
var crop = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M557 1280h595v-595zM512 1235l595-595h-595v595zM1664 1312v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"
    }
  }]
};
exports.crop = crop;
var codeFork = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M288 1472q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM288 320q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM928 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1024 448q0 52-26 96.5t-70 69.5q-2 287-226 414-67 38-203 81-128 40-169.5 71t-41.5 100v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56-136-56-56-136q0-52 26-96.5t70-69.5v-820q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136q0 52-26 96.5t-70 69.5v497q54-26 154-57 55-17 87.5-29.5t70.5-31 59-39.5 40.5-51 28-69.5 8.5-91.5q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136z"
    }
  }]
};
exports.codeFork = codeFork;
var chainBroken = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M439 1271l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zM608 1312v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM384 1088q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zM1031 492l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zM1664 576q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1120 32v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM1527 183l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"
    }
  }]
};
exports.chainBroken = chainBroken;
var unlink = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M439 1271l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zM608 1312v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM384 1088q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zM1031 492l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zM1664 576q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1120 32v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM1527 183l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"
    }
  }]
};
exports.unlink = unlink;
var question = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zM1020 656q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"
    }
  }]
};
exports.question = question;
var info = {
  "viewBox": "0 0 640 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zM512 192v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z"
    }
  }]
};
exports.info = info;
var exclamation = {
  "viewBox": "0 0 640 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1248v224q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-224q0-26 19-45t45-19h256q26 0 45 19t19 45zM542 192l-28 768q-1 26-20.5 45t-45.5 19h-256q-26 0-45.5-19t-20.5-45l-28-768q-1-26 17.5-45t44.5-19h320q26 0 44.5 19t17.5 45z"
    }
  }]
};
exports.exclamation = exclamation;
var superscript = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M897 1369v167h-248l-159-252-24-42q-8-9-11-21h-3q-1 3-2.5 6.5t-3.5 8-3 6.5q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zM1534 690v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"
    }
  }]
};
exports.superscript = superscript;
var subscript = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M897 1369v167h-248l-159-252-24-42q-8-9-11-21h-3q-1 3-2.5 6.5t-3.5 8-3 6.5q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zM1536 1586v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"
    }
  }]
};
exports.subscript = subscript;
var eraser = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1408l336-384h-768l-336 384h768zM1909 331q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"
    }
  }]
};
exports.eraser = eraser;
var puzzlePiece = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 1098q0 81-44.5 135t-123.5 54q-41 0-77.5-17.5t-59-38-56.5-38-71-17.5q-110 0-110 124 0 39 16 115t15 115v5q-22 0-33 1-34 3-97.5 11.5t-115.5 13.5-98 5q-61 0-103-26.5t-42-83.5q0-37 17.5-71t38-56.5 38-59 17.5-77.5q0-79-54-123.5t-135-44.5q-84 0-143 45.5t-59 127.5q0 43 15 83t33.5 64.5 33.5 53 15 50.5q0 45-46 89-37 35-117 35-95 0-245-24-9-2-27.5-4t-27.5-4l-13-2q-1 0-3-1-2 0-2-1v-1024q2 1 17.5 3.5t34 5 21.5 3.5q150 24 245 24 80 0 117-35 46-44 46-89 0-22-15-50.5t-33.5-53-33.5-64.5-15-83q0-82 59-127.5t144-45.5q80 0 134 44.5t54 123.5q0 41-17.5 77.5t-38 59-38 56.5-17.5 71q0 57 42 83.5t103 26.5q64 0 180-15t163-17v2q-1 2-3.5 17.5t-5 34-3.5 21.5q-24 150-24 245 0 80 35 117 44 46 89 46 22 0 50.5-15t53-33.5 64.5-33.5 83-15q82 0 127.5 59t45.5 143z"
    }
  }]
};
exports.puzzlePiece = puzzlePiece;
var microphone = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 704v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-217-24-364.5-187.5t-147.5-384.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 185 131.5 316.5t316.5 131.5 316.5-131.5 131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45zM896 320v512q0 132-94 226t-226 94-226-94-94-226v-512q0-132 94-226t226-94 226 94 94 226z"
    }
  }]
};
exports.microphone = microphone;
var microphoneSlash = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M271 945l-101 101q-42-103-42-214v-128q0-26 19-45t45-19 45 19 19 45v128q0 53 15 113zM1385 343l-361 361v128q0 132-94 226t-226 94q-55 0-109-19l-96 96q97 51 205 51 185 0 316.5-131.5t131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-125-13-235-81l-254 254q-10 10-23 10t-23-10l-82-82q-10-10-10-23t10-23l1234-1234q10-10 23-10t23 10l82 82q10 10 10 23t-10 23zM1005 211l-621 621v-512q0-132 94-226t226-94q102 0 184.5 59t116.5 152z"
    }
  }]
};
exports.microphoneSlash = microphoneSlash;
var shield = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1088 960v-640h-448v1137q119-63 213-137 235-184 235-360zM1280 192v768q0 86-33.5 170.5t-83 150-118 127.5-126.5 103-121 77.5-89.5 49.5-42.5 20q-12 6-26 6t-26-6q-16-7-42.5-20t-89.5-49.5-121-77.5-126.5-103-118-127.5-83-150-33.5-170.5v-768q0-26 19-45t45-19h1152q26 0 45 19t19 45z"
    }
  }]
};
exports.shield = shield;
var calendarO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
    }
  }]
};
exports.calendarO = calendarO;
var fireExtinguisher = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 192q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 160v320q0 16-12 25-8 7-20 7-4 0-7-1l-448-96q-11-2-18-11t-7-20h-256v102q111 23 183.5 111t72.5 203v800q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-800q0-106 62.5-190.5t161.5-114.5v-111h-32q-59 0-115 23.5t-91.5 53-66 66.5-40.5 53.5-14 24.5q-17 35-57 35-16 0-29-7-23-12-31.5-37t3.5-49q5-10 14.5-26t37.5-53.5 60.5-70 85-67 108.5-52.5q-25-42-25-86 0-66 47-113t113-47 113 47 47 113q0 33-14 64h302q0-11 7-20t18-11l448-96q3-1 7-1 12 0 20 7 12 9 12 25z"
    }
  }]
};
exports.fireExtinguisher = fireExtinguisher;
var rocket = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1440 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1664 160q0 249-75.5 430.5t-253.5 360.5q-81 80-195 176l-20 379q-2 16-16 26l-384 224q-7 4-16 4-12 0-23-9l-64-64q-13-14-8-32l85-276-281-281-276 85q-3 1-9 1-14 0-23-9l-64-64q-17-19-5-39l224-384q10-14 26-16l379-20q96-114 176-195 188-187 358-258t431-71q14 0 24 9.5t10 22.5z"
    }
  }]
};
exports.rocket = rocket;
var maxcdn = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1745 773l-164 763h-334l178-832q13-56-15-88-27-33-83-33h-169l-204 953h-334l204-953h-286l-204 953h-334l204-953-153-327h1276q101 0 189.5 40.5t147.5 113.5q60 73 81 168.5t0 194.5z"
    }
  }]
};
exports.maxcdn = maxcdn;
var chevronCircleLeft = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M909 1395l102-102q19-19 19-45t-19-45l-307-307 307-307q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.chevronCircleLeft = chevronCircleLeft;
var chevronCircleRight = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M717 1395l454-454q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l307 307-307 307q-19 19-19 45t19 45l102 102q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.chevronCircleRight = chevronCircleRight;
var chevronCircleUp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1165 1139l102-102q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l307-307 307 307q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.chevronCircleUp = chevronCircleUp;
var chevronCircleDown = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M813 1299l454-454q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-307 307-307-307q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.chevronCircleDown = chevronCircleDown;
var html5 = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1130 597l16-175h-884l47 534h612l-22 228-197 53-196-53-13-140h-175l22 278 362 100h4v-1l359-99 50-544h-644l-15-181h674zM0 128h1408l-128 1438-578 162-574-162z"
    }
  }]
};
exports.html5 = html5;
var css3 = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M275 128h1505l-266 1333-804 267-698-267 71-356h297l-29 147 422 161 486-161 68-339h-1208l58-297h1209l38-191h-1208z"
    }
  }]
};
exports.css3 = css3;
var anchor = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1792 1184v352q0 22-20 30-8 2-12 2-12 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z"
    }
  }]
};
exports.anchor = anchor;
var unlockAlt = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1056 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"
    }
  }]
};
exports.unlockAlt = unlockAlt;
var bullseye = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM1152 896q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zM1280 896q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.bullseye = bullseye;
var ellipsisH = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM896 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM1408 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"
    }
  }]
};
exports.ellipsisH = ellipsisH;
var ellipsisV = {
  "viewBox": "0 0 384 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM384 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM384 224v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"
    }
  }]
};
exports.ellipsisV = ellipsisV;
var rssSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1280q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM863 1374q-13-233-176.5-396.5t-396.5-176.5q-14-1-24 9t-10 23v128q0 13 8.5 22t21.5 10q154 11 264 121t121 264q1 13 10 21.5t22 8.5h128q13 0 23-10t9-24zM1247 1375q-5-154-56-297.5t-139.5-260-205-205-260-139.5-297.5-56q-14-1-23 9-10 10-10 23v128q0 13 9 22t22 10q204 7 378 111.5t278.5 278.5 111.5 378q1 13 10 22t22 9h128q13 0 23-10 11-9 9-23zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.rssSquare = rssSquare;
var playCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM1152 951q32-18 32-55t-32-55l-544-320q-31-19-64-1-32 19-32 56v640q0 37 32 56 16 8 32 8 17 0 32-9z"
    }
  }]
};
exports.playCircle = playCircle;
var ticket = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 452l316 316-572 572-316-316zM813 1431l618-618q19-19 19-45t-19-45l-362-362q-18-18-45-18t-45 18l-618 618q-19 19-19 45t19 45l362 362q18 18 45 18t45-18zM1702 794l-907 908q-37 37-90.5 37t-90.5-37l-126-126q56-56 56-136t-56-136-136-56-136 56l-125-126q-37-37-37-90.5t37-90.5l907-906q37-37 90.5-37t90.5 37l125 125q-56 56-56 136t56 136 136 56 136-56l126 125q37 37 37 90.5t-37 90.5z"
    }
  }]
};
exports.ticket = ticket;
var minusSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 960v-128q0-26-19-45t-45-19h-896q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.minusSquare = minusSquare;
var minusSquareO = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zM1280 1248v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zM1408 416v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.minusSquareO = minusSquareO;
var levelUp = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1018 603q-18 37-58 37h-192v864q0 14-9 23t-23 9h-704q-21 0-29-18-8-20 4-35l160-192q9-11 25-11h320v-640h-192q-40 0-58-37-17-37 9-68l320-384q18-22 49-22t49 22l320 384q27 32 9 68z"
    }
  }]
};
exports.levelUp = levelUp;
var levelDown = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M32 256h704q13 0 22.5 9.5t9.5 23.5v863h192q40 0 58 37t-9 69l-320 384q-18 22-49 22t-49-22l-320-384q-26-31-9-69 18-37 58-37h192v-640h-320q-14 0-25-11l-160-192q-13-14-4-34 9-19 29-19z"
    }
  }]
};
exports.levelDown = levelDown;
var checkSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M685 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.checkSquare = checkSquare;
var pencilSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M404 1108l152 152-52 52h-56v-96h-96v-56zM818 718q14 13-3 30l-291 291q-17 17-30 3-14-13 3-30l291-291q17-17 30-3zM544 1408l544-544-288-288-544 544v288h288zM1152 800l92-92q28-28 28-68t-28-68l-152-152q-28-28-68-28t-68 28l-92 92zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.pencilSquare = pencilSquare;
var externalLinkSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 928v-480q0-26-19-45t-45-19h-480q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.externalLinkSquare = externalLinkSquare;
var shareSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1005 1101l352-352q19-19 19-45t-19-45l-352-352q-30-31-69-14-40 17-40 59v160q-119 0-216 19.5t-162.5 51-114 79-76.5 95.5-44.5 109-21.5 111.5-5 110.5q0 181 167 404 11 12 25 12 7 0 13-3 22-9 19-33-44-354 62-473 46-52 130-75.5t224-23.5v160q0 42 40 59 12 5 24 5 26 0 45-19zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.shareSquare = shareSquare;
var compass = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1088l256-128-256-128v256zM1024 497v542l-512 256v-542zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.compass = compass;
var caretSquareODown = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1145 675q18 35-5 66l-320 448q-19 27-52 27t-52-27l-320-448q-23-31-5-66 17-35 57-35h640q40 0 57 35zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.caretSquareODown = caretSquareODown;
var toggleDown = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1145 675q18 35-5 66l-320 448q-19 27-52 27t-52-27l-320-448q-23-31-5-66 17-35 57-35h640q40 0 57 35zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.toggleDown = toggleDown;
var caretSquareOUp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1145 1117q-17 35-57 35h-640q-40 0-57-35-18-35 5-66l320-448q19-27 52-27t52 27l320 448q23 31 5 66zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.caretSquareOUp = caretSquareOUp;
var toggleUp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1145 1117q-17 35-57 35h-640q-40 0-57-35-18-35 5-66l320-448q19-27 52-27t52 27l320 448q23 31 5 66zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.toggleUp = toggleUp;
var caretSquareORight = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1088 896q0 33-27 52l-448 320q-31 23-66 5-35-17-35-57v-640q0-40 35-57 35-18 66 5l448 320q27 19 27 52zM1280 1376v-960q0-14-9-23t-23-9h-960q-14 0-23 9t-9 23v960q0 14 9 23t23 9h960q14 0 23-9t9-23zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.caretSquareORight = caretSquareORight;
var toggleRight = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1088 896q0 33-27 52l-448 320q-31 23-66 5-35-17-35-57v-640q0-40 35-57 35-18 66 5l448 320q27 19 27 52zM1280 1376v-960q0-14-9-23t-23-9h-960q-14 0-23 9t-9 23v960q0 14 9 23t23 9h960q14 0 23-9t9-23zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.toggleRight = toggleRight;
var eur = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M976 1307l35 159q3 12-3 22.5t-17 14.5l-5 1q-4 2-10.5 3.5t-16 4.5-21.5 5.5-25.5 5-30 5-33.5 4.5-36.5 3-38.5 1q-234 0-409-130.5t-238-351.5h-95q-13 0-22.5-9.5t-9.5-22.5v-113q0-13 9.5-22.5t22.5-9.5h66q-2-57 1-105h-67q-14 0-23-9t-9-23v-114q0-14 9-23t23-9h98q67-210 243.5-338t400.5-128q102 0 194 23 11 3 20 15 6 11 3 24l-43 159q-3 13-14 19.5t-24 2.5l-4-1q-4-1-11.5-2.5l-17.5-3.5t-22.5-3.5-26-3-29-2.5-29.5-1q-126 0-226 64t-150 176h468q16 0 25 12 10 12 7 26l-24 114q-5 26-32 26h-488q-3 37 0 105h459q15 0 25 12 9 12 6 27l-24 112q-2 11-11 18.5t-20 7.5h-387q48 117 149.5 185.5t228.5 68.5q18 0 36-1.5t33.5-3.5 29.5-4.5 24.5-5 18.5-4.5l12-3 5-2q13-5 26 2 12 7 15 21z"
    }
  }]
};
exports.eur = eur;
var euro = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M976 1307l35 159q3 12-3 22.5t-17 14.5l-5 1q-4 2-10.5 3.5t-16 4.5-21.5 5.5-25.5 5-30 5-33.5 4.5-36.5 3-38.5 1q-234 0-409-130.5t-238-351.5h-95q-13 0-22.5-9.5t-9.5-22.5v-113q0-13 9.5-22.5t22.5-9.5h66q-2-57 1-105h-67q-14 0-23-9t-9-23v-114q0-14 9-23t23-9h98q67-210 243.5-338t400.5-128q102 0 194 23 11 3 20 15 6 11 3 24l-43 159q-3 13-14 19.5t-24 2.5l-4-1q-4-1-11.5-2.5l-17.5-3.5t-22.5-3.5-26-3-29-2.5-29.5-1q-126 0-226 64t-150 176h468q16 0 25 12 10 12 7 26l-24 114q-5 26-32 26h-488q-3 37 0 105h459q15 0 25 12 9 12 6 27l-24 112q-2 11-11 18.5t-20 7.5h-387q48 117 149.5 185.5t228.5 68.5q18 0 36-1.5t33.5-3.5 29.5-4.5 24.5-5 18.5-4.5l12-3 5-2q13-5 26 2 12 7 15 21z"
    }
  }]
};
exports.euro = euro;
var gbp = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1020 1137v367q0 14-9 23t-23 9h-956q-14 0-23-9t-9-23v-150q0-13 9.5-22.5t22.5-9.5h97v-383h-95q-14 0-23-9.5t-9-22.5v-131q0-14 9-23t23-9h95v-223q0-171 123.5-282t314.5-111q185 0 335 125 9 8 10 20.5t-7 22.5l-103 127q-9 11-22 12-13 2-23-7-5-5-26-19t-69-32-93-18q-85 0-137 47t-52 123v215h305q13 0 22.5 9t9.5 23v131q0 13-9.5 22.5t-22.5 9.5h-305v379h414v-181q0-13 9-22.5t23-9.5h162q14 0 23 9.5t9 22.5z"
    }
  }]
};
exports.gbp = gbp;
var dollar = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M978 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"
    }
  }]
};
exports.dollar = dollar;
var usd = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M978 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"
    }
  }]
};
exports.usd = usd;
var inr = {
  "viewBox": "0 0 898 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M898 470v102q0 14-9 23t-23 9h-168q-23 144-129 234t-276 110q167 178 459 536 14 16 4 34-8 18-29 18h-195q-16 0-25-12-306-367-498-571-9-9-9-22v-127q0-13 9.5-22.5t22.5-9.5h112q132 0 212.5-43t102.5-125h-427q-14 0-23-9t-9-23v-102q0-14 9-23t23-9h413q-57-113-268-113h-145q-13 0-22.5-9.5t-9.5-22.5v-133q0-14 9-23t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9h-233q47 61 64 144h171q14 0 23 9t9 23z"
    }
  }]
};
exports.inr = inr;
var rupee = {
  "viewBox": "0 0 898 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M898 470v102q0 14-9 23t-23 9h-168q-23 144-129 234t-276 110q167 178 459 536 14 16 4 34-8 18-29 18h-195q-16 0-25-12-306-367-498-571-9-9-9-22v-127q0-13 9.5-22.5t22.5-9.5h112q132 0 212.5-43t102.5-125h-427q-14 0-23-9t-9-23v-102q0-14 9-23t23-9h413q-57-113-268-113h-145q-13 0-22.5-9.5t-9.5-22.5v-133q0-14 9-23t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9h-233q47 61 64 144h171q14 0 23 9t9 23z"
    }
  }]
};
exports.rupee = rupee;
var cny = {
  "viewBox": "0 0 1027 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z"
    }
  }]
};
exports.cny = cny;
var jpy = {
  "viewBox": "0 0 1027 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z"
    }
  }]
};
exports.jpy = jpy;
var rmb = {
  "viewBox": "0 0 1027 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z"
    }
  }]
};
exports.rmb = rmb;
var yen = {
  "viewBox": "0 0 1027 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z"
    }
  }]
};
exports.yen = yen;
var rouble = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1043 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zM1280 565q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z"
    }
  }]
};
exports.rouble = rouble;
var rub = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1043 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zM1280 565q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z"
    }
  }]
};
exports.rub = rub;
var ruble = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1043 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zM1280 565q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z"
    }
  }]
};
exports.ruble = ruble;
var krw = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M514 1195l81-299h-159l75 300q1 1 1 3t1 3q0-1 0.5-3.5t0.5-3.5zM630 768l35-128h-292l32 128h225zM822 768h139l-35-128h-70zM1271 1196l78-300h-162l81 299q0 1 0.5 3.5t1.5 3.5q0-1 0.5-3t0.5-3zM1382 768l33-128h-297l34 128h230zM1792 800v64q0 14-9 23t-23 9h-213l-164 616q-7 24-31 24h-159q-24 0-31-24l-166-616h-209l-167 616q-7 24-31 24h-159q-11 0-19.5-7t-10.5-17l-160-616h-208q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h175l-33-128h-142q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h109l-89-344q-5-15 5-28 10-12 26-12h137q26 0 31 24l90 360h359l97-360q7-24 31-24h126q24 0 31 24l98 360h365l93-360q5-24 31-24h137q16 0 26 12 10 13 5 28l-91 344h111q14 0 23 9t9 23v64q0 14-9 23t-23 9h-145l-34 128h179q14 0 23 9t9 23z"
    }
  }]
};
exports.krw = krw;
var won = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M514 1195l81-299h-159l75 300q1 1 1 3t1 3q0-1 0.5-3.5t0.5-3.5zM630 768l35-128h-292l32 128h225zM822 768h139l-35-128h-70zM1271 1196l78-300h-162l81 299q0 1 0.5 3.5t1.5 3.5q0-1 0.5-3t0.5-3zM1382 768l33-128h-297l34 128h230zM1792 800v64q0 14-9 23t-23 9h-213l-164 616q-7 24-31 24h-159q-24 0-31-24l-166-616h-209l-167 616q-7 24-31 24h-159q-11 0-19.5-7t-10.5-17l-160-616h-208q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h175l-33-128h-142q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h109l-89-344q-5-15 5-28 10-12 26-12h137q26 0 31 24l90 360h359l97-360q7-24 31-24h126q24 0 31 24l98 360h365l93-360q5-24 31-24h137q16 0 26 12 10 13 5 28l-91 344h111q14 0 23 9t9 23v64q0 14-9 23t-23 9h-145l-34 128h179q14 0 23 9t9 23z"
    }
  }]
};
exports.won = won;
var bitcoin = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1167 640q18 182-131 258 117 28 175 103t45 214q-7 71-32.5 125t-64.5 89-97 58.5-121.5 34.5-145.5 15v255h-154v-251q-80 0-122-1v252h-154v-255q-18 0-54-0.5t-55-0.5h-200l31-183h111q50 0 58-51v-402h16q-6-1-16-1v-287q-13-68-89-68h-111v-164l212 1q64 0 97-1v-252h154v247q82-2 122-2v-245h154v252q79 7 140 22.5t113 45 82.5 78 36.5 114.5zM952 1185q0-36-15-64t-37-46-57.5-30.5-65.5-18.5-74-9-69-3-64.5 1-47.5 1v338q8 0 37 0.5t48 0.5 53-1.5 58.5-4 57-8.5 55.5-14 47.5-21 39.5-30 24.5-40 9.5-51zM881 709q0-33-12.5-58.5t-30.5-42-48-28-55-16.5-61.5-8-58-2.5-54 1-39.5 0.5v307q5 0 34.5 0.5t46.5 0 50-2 55-5.5 51.5-11 48.5-18.5 37-27 27-38.5 9-51z"
    }
  }]
};
exports.bitcoin = bitcoin;
var btc = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1167 640q18 182-131 258 117 28 175 103t45 214q-7 71-32.5 125t-64.5 89-97 58.5-121.5 34.5-145.5 15v255h-154v-251q-80 0-122-1v252h-154v-255q-18 0-54-0.5t-55-0.5h-200l31-183h111q50 0 58-51v-402h16q-6-1-16-1v-287q-13-68-89-68h-111v-164l212 1q64 0 97-1v-252h154v247q82-2 122-2v-245h154v252q79 7 140 22.5t113 45 82.5 78 36.5 114.5zM952 1185q0-36-15-64t-37-46-57.5-30.5-65.5-18.5-74-9-69-3-64.5 1-47.5 1v338q8 0 37 0.5t48 0.5 53-1.5 58.5-4 57-8.5 55.5-14 47.5-21 39.5-30 24.5-40 9.5-51zM881 709q0-33-12.5-58.5t-30.5-42-48-28-55-16.5-61.5-8-58-2.5-54 1-39.5 0.5v307q5 0 34.5 0.5t46.5 0 50-2 55-5.5 51.5-11 48.5-18.5 37-27 27-38.5 9-51z"
    }
  }]
};
exports.btc = btc;
var file = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 512v-472q22 14 36 28l408 408q14 14 28 36h-472zM896 544q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"
    }
  }]
};
exports.file = file;
var fileText = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 476q14 14 28 36h-472v-472q22 14 36 28zM992 640h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544q0 40 28 68t68 28zM1152 1376v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM1152 1120v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM1152 864v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23z"
    }
  }]
};
exports.fileText = fileText;
var sortAlphaAsc = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1191 408h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1572 1559v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5 0.5t-7.5 0.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 11v2l14-2q9-2 30-2h248v-119h121zM1661 662v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70z"
    }
  }]
};
exports.sortAlphaAsc = sortAlphaAsc;
var sortAlphaDesc = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1191 1432h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1661 1686v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70zM1572 535v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5 0.5t-7.5 0.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 10v3l14-3q9-1 30-1h248v-119h121z"
    }
  }]
};
exports.sortAlphaDesc = sortAlphaDesc;
var sortAmountAsc = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1792 1568v192q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23zM1600 1056v192q0 14-9 23t-23 9h-640q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23zM1408 544v192q0 14-9 23t-23 9h-448q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h448q14 0 23 9t9 23zM1216 32v192q0 14-9 23t-23 9h-256q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h256q14 0 23 9t9 23z"
    }
  }]
};
exports.sortAmountAsc = sortAmountAsc;
var sortAmountDesc = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1216 1568v192q0 14-9 23t-23 9h-256q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h256q14 0 23 9t9 23zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1408 1056v192q0 14-9 23t-23 9h-448q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h448q14 0 23 9t9 23zM1600 544v192q0 14-9 23t-23 9h-640q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23zM1792 32v192q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23z"
    }
  }]
};
exports.sortAmountDesc = sortAmountDesc;
var sortNumericAsc = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1346 1313q0-63-44-116t-103-53q-52 0-83 37t-31 94 36.5 95 104.5 38q50 0 85-27t35-68zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1486 1371q0 62-13 121.5t-41 114-68 95.5-98.5 65.5-127.5 24.5q-62 0-108-16-24-8-42-15l39-113q15 7 31 11 37 13 75 13 84 0 134.5-58.5t66.5-145.5h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5t-67-172.5q0-105 72-178t181-73q123 0 205 94.5t82 252.5zM1456 654v114h-469v-114h167v-432q0-7 0.5-19t0.5-17v-16h-2l-7 12q-8 13-26 31l-62 58-82-86 192-185h123v654h165z"
    }
  }]
};
exports.sortNumericAsc = sortNumericAsc;
var sortNumericDesc = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1346 289q0-63-44-116t-103-53q-52 0-83 37t-31 94 36.5 95 104.5 38q50 0 85-27t35-68zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1456 1678v114h-469v-114h167v-432q0-7 0.5-19t0.5-17v-16h-2l-7 12q-8 13-26 31l-62 58-82-86 192-185h123v654h165zM1486 347q0 62-13 121.5t-41 114-68 95.5-98.5 65.5-127.5 24.5q-62 0-108-16-24-8-42-15l39-113q15 7 31 11 37 13 75 13 84 0 134.5-58.5t66.5-145.5h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5t-67-172.5q0-105 72-178t181-73q123 0 205 94.5t82 252.5z"
    }
  }]
};
exports.sortNumericDesc = sortNumericDesc;
var thumbsUp = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1344q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45-18.5t19-45.5zM416 832v640q0 26-19 45t-45 19h-288q-26 0-45-19t-19-45v-640q0-26 19-45t45-19h288q26 0 45 19t19 45zM1600 832q0 86-55 149 15 44 15 76 3 76-43 137 17 56 0 117-15 57-54 94 9 112-49 181-64 76-197 78h-36-76-17q-66 0-144-15.5t-121.5-29-120.5-39.5q-123-43-158-44-26-1-45-19.5t-19-44.5v-641q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120 18-18 31-48t17.5-48.5 13.5-60.5q7-39 12.5-61t19.5-52 34-50q19-19 45-19 46 0 82.5 10.5t60 26 40 40.5 24 45 12 50 5 45 0.5 39q0 38-9.5 76t-19 60-27.5 56q-3 6-10 18t-11 22-8 24h277q78 0 135 57t57 135z"
    }
  }]
};
exports.thumbsUp = thumbsUp;
var thumbsDown = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 576q0 26-19 45t-45 19q-27 0-45.5-19t-18.5-45q0-27 18.5-45.5t45.5-18.5q26 0 45 18.5t19 45.5zM416 1088v-640q0-26-19-45t-45-19h-288q-26 0-45 19t-19 45v640q0 26 19 45t45 19h288q26 0 45-19t19-45zM1545 939q55 61 55 149-1 78-57.5 135t-134.5 57h-277q4 14 8 24t11 22 10 18q18 37 27 57t19 58.5 10 76.5q0 24-0.5 39t-5 45-12 50-24 45-40 40.5-60 26-82.5 10.5q-26 0-45-19-20-20-34-50t-19.5-52-12.5-61q-9-42-13.5-60.5t-17.5-48.5-31-48q-33-33-101-120-49-64-101-121t-76-59q-25-2-43-20.5t-18-43.5v-641q0-26 19-44.5t45-19.5q35-1 158-44 77-26 120.5-39.5t121.5-29 144-15.5h17 76 36q133 2 197 78 58 69 49 181 39 37 54 94 17 61 0 117 46 61 43 137 0 32-15 76z"
    }
  }]
};
exports.thumbsDown = thumbsDown;
var youtubeSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M919 1303v-157q0-50-29-50-17 0-33 16v224q16 16 33 16 29 0 29-49zM1103 1181h66v-34q0-51-33-51t-33 51v34zM532 915v70h-80v423h-74v-423h-78v-70h232zM733 1041v367h-67v-40q-39 45-76 45-33 0-42-28-6-17-6-54v-290h66v270q0 24 1 26 1 15 15 15 20 0 42-31v-280h67zM985 1152v146q0 52-7 73-12 42-53 42-35 0-68-41v36h-67v-493h67v161q32-40 68-40 41 0 53 42 7 21 7 74zM1236 1281v9q0 29-2 43-3 22-15 40-27 40-80 40-52 0-81-38-21-27-21-86v-129q0-59 20-86 29-38 80-38t78 38q21 29 21 86v76h-133v65q0 51 34 51 24 0 30-26 0-1 0.5-7t0.5-16.5v-21.5h68zM785 457v156q0 51-32 51t-32-51v-156q0-52 32-52t32 52zM1318 1170q0-177-19-260-10-44-43-73.5t-76-34.5q-136-15-412-15-275 0-411 15-44 5-76.5 34.5t-42.5 73.5q-20 87-20 260 0 176 20 260 10 43 42.5 73t75.5 35q137 15 412 15t412-15q43-5 75.5-35t42.5-73q20-84 20-260zM563 519l90-296h-75l-51 195-53-195h-78q7 23 23 69l24 69q35 103 46 158v201h74v-201zM852 600v-130q0-58-21-87-29-38-78-38-51 0-78 38-21 29-21 87v130q0 58 21 87 27 38 78 38 49 0 78-38 21-27 21-87zM1033 720h67v-370h-67v283q-22 31-42 31-15 0-16-16-1-2-1-26v-272h-67v293q0 37 6 55 11 27 43 27 36 0 77-45v40zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.youtubeSquare = youtubeSquare;
var youtube = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M971 1244v211q0 67-39 67-23 0-45-22v-301q22-22 45-22 39 0 39 67zM1309 1245v46h-90v-46q0-68 45-68t45 68zM343 1027h107v-94h-312v94h105v569h100v-569zM631 1596h89v-494h-89v378q-30 42-57 42-18 0-21-21-1-3-1-35v-364h-89v391q0 49 8 73 12 37 58 37 48 0 102-61v54zM1060 1448v-197q0-73-9-99-17-56-71-56-50 0-93 54v-217h-89v663h89v-48q45 55 93 55 54 0 71-55 9-27 9-100zM1398 1438v-13h-91q0 51-2 61-7 36-40 36-46 0-46-69v-87h179v-103q0-79-27-116-39-51-106-51-68 0-107 51-28 37-28 116v173q0 79 29 116 39 51 108 51 72 0 108-53 18-27 21-54 2-9 2-58zM790 525v-210q0-69-43-69t-43 69v210q0 70 43 70t43-70zM1509 1276q0 234-26 350-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46t-57.5-99q-26-112-26-350 0-234 26-350 14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350zM511 0h102l-121 399v271h-100v-271q-14-74-61-212-37-103-65-187h106l71 263zM881 333v175q0 81-28 118-38 51-106 51-67 0-105-51-28-38-28-118v-175q0-80 28-117 38-51 105-51 68 0 106 51 28 37 28 117zM1216 171v499h-91v-55q-53 62-103 62-46 0-59-37-8-24-8-75v-394h91v367q0 33 1 35 3 22 21 22 27 0 57-43v-381h91z"
    }
  }]
};
exports.youtube = youtube;
var xing = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M597 667q-10 18-257 456-27 46-65 46h-239q-21 0-31-17t0-36l253-448q1 0 0-1l-161-279q-12-22-1-37 9-15 32-15h239q40 0 66 45zM1403 25q11 16 0 37l-528 934v1l336 615q11 20 1 37-10 15-32 15h-239q-42 0-66-45l-339-622q18-32 531-942 25-45 64-45h241q22 0 31 15z"
    }
  }]
};
exports.xing = xing;
var xingSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M685 765q0-1-126-222-21-34-52-34h-184q-18 0-26 11-7 12 1 29l125 216v1l-196 346q-9 14 0 28 8 13 24 13h185q31 0 50-36zM1309 268q-7-12-24-12h-187q-30 0-49 35l-411 729q1 2 262 481 20 35 52 35h184q18 0 25-12 8-13-1-28l-260-476v-1l409-723q8-16 0-28zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.xingSquare = xingSquare;
var youtubePlay = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M711 1128l484-250-484-253v503zM896 266q168 0 324.5 4.5t229.5 9.5l73 4q1 0 17 1.5t23 3 23.5 4.5 28.5 8 28 13 31 19.5 29 26.5q6 6 15.5 18.5t29 58.5 26.5 101q8 64 12.5 136.5t5.5 113.5v40 136q1 145-18 290-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19-28 12.5-28.5 8-24 4.5-23 3-16.5 1.5q-251 19-627 19-207-2-359.5-6.5t-200.5-7.5l-49-4-36-4q-36-5-54.5-10t-51-21-56.5-41q-6-6-15.5-18.5t-29-58.5-26.5-101q-8-64-12.5-136.5t-5.5-113.5v-40-136q-1-145 18-290 7-55 25-99.5t32-61.5l14-17q14-15 29-26.5t31-19.5 28-13 28.5-8 23.5-4.5 23-3 17-1.5q251-18 627-18z"
    }
  }]
};
exports.youtubePlay = youtubePlay;
var dropbox = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M402 707l494 305-342 285-490-319zM1388 1262v108l-490 293v1l-1-1-1 1v-1l-489-293v-108l147 96 342-284v-2l1 1 1-1v2l343 284zM554 118l342 285-494 304-338-270zM1390 707l338 271-489 319-343-285zM1239 118l489 319-338 270-494-304z"
    }
  }]
};
exports.dropbox = dropbox;
var stackOverflow = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1289 1632h-1118v-480h-160v640h1438v-640h-160v480zM347 1108l33-157 783 165-33 156zM450 734l67-146 725 339-67 145zM651 378l102-123 614 513-102 123zM1048 0l477 641-128 96-477-641zM330 1471v-159h800v159h-800z"
    }
  }]
};
exports.stackOverflow = stackOverflow;
var instagram = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1162 896q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zM1270 486q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM768 266q-7 0-76.5-0.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5 0.5 76.5-0.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-0.5 76.5 0.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-0.5-76.5 0.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5 0.5zM1536 896q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"
    }
  }]
};
exports.instagram = instagram;
var flickr = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zM698 896q0-88-62-150t-150-62-150 62-62 150 62 150 150 62 150-62 62-150zM1262 896q0-88-62-150t-150-62-150 62-62 150 62 150 150 62 150-62 62-150z"
    }
  }]
};
exports.flickr = flickr;
var adn = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 622l201 306h-402zM1133 1152h94l-459-691-459 691h94l104-160h522zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.adn = adn;
var bitbucket = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M815 859q8 63-50.5 101t-111.5 6q-39-17-53.5-58t-0.5-82 52-58q36-18 72.5-12t64 35.5 27.5 67.5zM926 838q-14-107-113-164t-197-13q-63 28-100.5 88.5t-34.5 129.5q4 91 77.5 155t165.5 56q91-8 152-84t50-168zM1165 296q-20-27-56-44.5t-58-22-71-12.5q-291-47-566 2-43 7-66 12t-55 22-50 43q30 28 76 45.5t73.5 22 87.5 11.5q228 29 448 1 63-8 89.5-12t72.5-21.5 75-46.5zM1222 1331q-8 26-15.5 76.5t-14 84-28.5 70-58 56.5q-86 48-189.5 71.5t-202 22-201.5-18.5q-46-8-81.5-18t-76.5-27-73-43.5-52-61.5q-25-96-57-292l6-16 18-9q223 148 506.5 148t507.5-148q21 6 24 23t-5 45-8 37zM1403 370q-26 167-111 655-5 30-27 56t-43.5 40-54.5 31q-252 126-610 88-248-27-394-139-15-12-25.5-26.5t-17-35-9-34-6-39.5-5.5-35q-9-50-26.5-150t-28-161.5-23.5-147.5-22-158q3-26 17.5-48.5t31.5-37.5 45-30 46-22.5 48-18.5q125-46 313-64 379-37 676 50 155 46 215 122 16 20 16.5 51t-5.5 54z"
    }
  }]
};
exports.bitbucket = bitbucket;
var bitbucketSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M848 870q0-43-41-66t-77-1q-43 20-42.5 72.5t43.5 70.5q39 23 81-4t36-72zM928 854q8 66-36 121t-110 61-119-40-56-113q-2-49 25.5-93t72.5-64q70-31 141.5 10t81.5 118zM1100 463q-20 21-53.5 34t-53 16-63.5 8q-155 20-324 0-44-6-63-9.5t-52.5-16-54.5-32.5q13-19 36-31t40-15.5 47-8.5q198-35 408-1 33 5 51 8.5t43 16 39 31.5zM1142 1209q0-7 5.5-26.5t3-32-17.5-16.5q-161 106-365 106t-366-106l-12 6-5 12q26 154 41 210 47 81 204 108 249 46 428-53 34-19 49-51.5t22.5-85.5 12.5-71zM1272 516q9-53-8-75-43-55-155-88-216-63-487-36-132 12-226 46-38 15-59.5 25t-47 34-29.5 54q8 68 19 138t29 171 24 137q1 5 5 31t7 36 12 27 22 28q105 80 284 100 259 28 440-63 24-13 39.5-23t31-29 19.5-40q48-267 80-473zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.bitbucketSquare = bitbucketSquare;
var tumblr = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M944 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26t-142.5-74-95-106-55.5-120-16.5-118v-544h-168v-215q72-26 129-69.5t91-90 58-102 34-99 15-88.5q1-5 4.5-8.5t7.5-3.5h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z"
    }
  }]
};
exports.tumblr = tumblr;
var tumblrSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1136 1461l-62-183q-44 22-103 22-36 1-62-10.5t-38.5-31.5-17.5-40.5-5-43.5v-398h257v-194h-256v-326h-188q-8 0-9 10-5 44-17.5 87t-39 95-77 95-118.5 68v165h130v418q0 57 21.5 115t65 111 121 85.5 176.5 30.5q69-1 136.5-25t85.5-50zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.tumblrSquare = tumblrSquare;
var longArrowDown = {
  "viewBox": "0 0 768 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M765 1299q8 19-5 35l-350 384q-10 10-23 10-14 0-24-10l-355-384q-13-16-5-35 9-19 29-19h224v-1248q0-14 9-23t23-9h192q14 0 23 9t9 23v1248h224q21 0 29 19z"
    }
  }]
};
exports.longArrowDown = longArrowDown;
var longArrowUp = {
  "viewBox": "0 0 768 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M765 493q-9 19-29 19h-224v1248q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-1248h-224q-21 0-29-19t5-35l350-384q10-10 23-10 14 0 24 10l355 384q13 16 5 35z"
    }
  }]
};
exports.longArrowUp = longArrowUp;
var longArrowLeft = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 800v192q0 14-9 23t-23 9h-1248v224q0 21-19 29t-35-5l-384-350q-10-10-10-23 0-14 10-24l384-354q16-14 35-6 19 9 19 29v224h1248q14 0 23 9t9 23z"
    }
  }]
};
exports.longArrowLeft = longArrowLeft;
var longArrowRight = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z"
    }
  }]
};
exports.longArrowRight = longArrowRight;
var apple = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1393 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 113-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zM1017 42q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 0.5 10t0.5 10z"
    }
  }]
};
exports.apple = apple;
var windows = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M682 1006v651l-682-94v-557h682zM682 263v659h-682v-565zM1664 1006v786l-907-125v-661h907zM1664 128v794h-907v-669z"
    }
  }]
};
exports.windows = windows;
var android = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M493 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zM915 483q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zM103 667q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zM1163 686v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zM931 281q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zM1408 769v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
    }
  }]
};
exports.android = android;
var linux = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M663 411q-11 1-15.5 10.5t-8.5 9.5q-5 1-5-5 0-12 19-15h10zM750 425q-4 1-11.5-6.5t-17.5-4.5q24-11 32 2 3 6-3 9zM399 852q-4-1-6 3t-4.5 12.5-5.5 13.5-10 13q-10 11-1 12 4 1 12.5-7t12.5-18q1-3 2-7t2-6 1.5-4.5 0.5-4v-3t-1-2.5-3-2zM1254 1211q0-18-55-42 4-15 7.5-27.5t5-26 3-21.5 0.5-22.5-1-19.5-3.5-22-4-20.5-5-25-5.5-26.5q-10-48-47-103t-72-75q24 20 57 83 87 162 54 278-11 40-50 42-31 4-38.5-18.5t-8-83.5-11.5-107q-9-39-19.5-69t-19.5-45.5-15.5-24.5-13-15-7.5-7q-14-62-31-103t-29.5-56-23.5-33-15-40q-4-21 6-53.5t4.5-49.5-44.5-25q-15-3-44.5-18t-35.5-16q-8-1-11-26t8-51 36-27q37-3 51 30t4 58q-11 19-2 26.5t30 0.5q13-4 13-36v-37q-5-30-13.5-50t-21-30.5-23.5-15-27-7.5q-107 8-89 134 0 15-1 15-9-9-29.5-10.5t-33 0.5-15.5-5q1-57-16-90t-45-34q-27-1-41.5 27.5t-16.5 59.5q-1 15 3.5 37t13 37.5 15.5 13.5q10-3 16-14 4-9-7-8-7 0-15.5-14.5t-9.5-33.5q-1-22 9-37t34-14q17 0 27 21t9.5 39-1.5 22q-22 15-31 29-8 12-27.5 23.5t-20.5 12.5q-13 14-15.5 27t7.5 18q14 8 25 19.5t16 19 18.5 13 35.5 6.5q47 2 102-15 2-1 23-7t34.5-10.5 29.5-13 21-17.5q9-14 20-8 5 3 6.5 8.5t-3 12-16.5 9.5q-20 6-56.5 21.5t-45.5 19.5q-44 19-70 23-25 5-79-2-10-2-9 2t17 19q25 23 67 22 17-1 36-7t36-14 33.5-17.5 30-17 24.5-12 17.5-2.5 8.5 11q0 2-1 4.5t-4 5-6 4.5-8.5 5-9 4.5-10 5-9.5 4.5q-28 14-67.5 44t-66.5 43-49 1q-21-11-63-73-22-31-25-22-1 3-1 10 0 25-15 56.5t-29.5 55.5-21 58 11.5 63q-23 6-62.5 90t-47.5 141q-2 18-1.5 69t-5.5 59q-8 24-29 3-32-31-36-94-2-28 4-56 4-19-1-18-2 1-4 5-36 65 10 166 5 12 25 28t24 20q20 23 104 90.5t93 76.5q16 15 17.5 38t-14 43-45.5 23q8 15 29 44.5t28 54 7 70.5q46-24 7-92-4-8-10.5-16t-9.5-12-2-6q3-5 13-9.5t20 2.5q46 52 166 36 133-15 177-87 23-38 34-30 12 6 10 52-1 25-23 92-9 23-6 37.5t24 15.5q3-19 14.5-77t13.5-90q2-21-6.5-73.5t-7.5-97 23-70.5q15-18 51-18 1-37 34.5-53t72.5-10.5 60 22.5zM626 384q3-17-2.5-30t-11.5-15q-9-2-9 7 2 5 5 6 10 0 7 15-3 20 8 20 3 0 3-3zM1045 581q-2-8-6.5-11.5t-13-5-14.5-5.5q-5-3-9.5-8t-7-8-5.5-6.5-4-4-4 1.5q-14 16 7 43.5t39 31.5q9 1 14.5-8t3.5-20zM867 368q0-11-5-19.5t-11-12.5-9-3q-6 0-8 2t0 4 5 3q14 4 18 31 0 3 8-2 2-2 2-3zM921 135q0-2-2.5-5t-9-7-9.5-6q-15-15-24-15-9 1-11.5 7.5t-1 13-0.5 12.5q-1 4-6 10.5t-6 9 3 8.5q4 3 8 0t11-9 15-9q1-1 9-1t15-2 9-7zM1486 1476q20 12 31 24.5t12 24-2.5 22.5-15.5 22-23.5 19.5-30 18.5-31.5 16.5-32 15.5-27 13q-38 19-85.5 56t-75.5 64q-17 16-68 19.5t-89-14.5q-18-9-29.5-23.5t-16.5-25.5-22-19.5-47-9.5q-44-1-130-1-19 0-57 1.5t-58 2.5q-44 1-79.5 15t-53.5 30-43.5 28.5-53.5 11.5q-29-1-111-31t-146-43q-19-4-51-9.5t-50-9-39.5-9.5-33.5-14.5-17-19.5q-10-23 7-66.5t18-54.5q1-16-4-40t-10-42.5-4.5-36.5 10.5-27q14-12 57-14t60-12q30-18 42-35t12-51q21 73-32 106-32 20-83 15-34-3-43 10-13 15 5 57 2 6 8 18t8.5 18 4.5 17 1 22q0 15-17 49t-14 48q3 17 37 26 20 6 84.5 18.5t99.5 20.5q24 6 74 22t82.5 23 55.5 4q43-6 64.5-28t23-48-7.5-58.5-19-52-20-36.5q-121-190-169-242-68-74-113-40-11 9-15-15-3-16-2-38 1-29 10-52t24-47 22-42q8-21 26.5-72t29.5-78 30-61 39-54q110-143 124-195-12-112-16-310-2-90 24-151.5t106-104.5q39-21 104-21 53-1 106 13.5t89 41.5q57 42 91.5 121.5t29.5 147.5q-5 95 30 214 34 113 133 218 55 59 99.5 163t59.5 191q8 49 5 84.5t-12 55.5-20 22q-10 2-23.5 19t-27 35.5-40.5 33.5-61 14q-18-1-31.5-5t-22.5-13.5-13.5-15.5-11.5-20.5-9-19.5q-22-37-41-30t-28 49 7 97q20 70 1 195-10 65 18 100.5t73 33 85-35.5q59-49 89.5-66.5t103.5-42.5q53-18 77-36.5t18.5-34.5-25-28.5-51.5-23.5q-33-11-49.5-48t-15-72.5 15.5-47.5q1 31 8 56.5t14.5 40.5 20.5 28.5 21 19 21.5 13 16.5 9.5z"
    }
  }]
};
exports.linux = linux;
var dribbble = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82-131 114.5-103 148l-15-11q184 150 418 150 132 0 256-52zM839 893q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5t124 201.5q50-89 123.5-166.5t142.5-124.5 130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zM732 681q-120-213-244-378-138 65-234 186t-128 272q302 0 606-80zM1416 1000q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zM611 259q-1 0-2 1 1-1 2-1zM1201 404q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zM1424 889q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65-131.5 64.5q25 53 44 95 2 5 6.5 17t7.5 17q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.dribbble = dribbble;
var skype = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1173 1063q0-50-19.5-91.5t-48.5-68.5-73-49-82.5-34-87.5-23l-104-24q-30-7-44-10.5t-35-11.5-30-16-16.5-21-7.5-30q0-77 144-77 43 0 77 12t54 28.5 38 33.5 40 29 48 12q47 0 75.5-32t28.5-77q0-55-56-99.5t-142-67.5-182-23q-68 0-132 15.5t-119.5 47-89 87-33.5 128.5q0 61 19 106.5t56 75.5 80 48.5 103 32.5l146 36q90 22 112 36 32 20 32 60 0 39-40 64.5t-105 25.5q-51 0-91.5-16t-65-38.5-45.5-45-46-38.5-54-16q-50 0-75.5 30t-25.5 75q0 92 122 157.5t291 65.5q73 0 140-18.5t122.5-53.5 88.5-93.5 33-131.5zM1536 1280q0 159-112.5 271.5t-271.5 112.5q-130 0-234-80-77 16-150 16-143 0-273.5-55.5t-225-150-150-225-55.5-273.5q0-73 16-150-80-104-80-234 0-159 112.5-271.5t271.5-112.5q130 0 234 80 77-16 150-16 143 0 273.5 55.5t225 150 150 225 55.5 273.5q0 73-16 150 80 104 80 234z"
    }
  }]
};
exports.skype = skype;
var foursquare = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1000 434l37-194q5-23-9-40t-35-17h-712q-23 0-38.5 17t-15.5 37v1101q0 7 6 1l291-352q23-26 38-33.5t48-7.5h239q22 0 37-14.5t18-29.5q24-130 37-191 4-21-11.5-40t-36.5-19h-294q-29 0-48-19t-19-48v-42q0-29 19-47.5t48-18.5h346q18 0 35-13.5t20-29.5zM1227 212q-15 73-53.5 266.5t-69.5 350-35 173.5q-6 22-9 32.5t-14 32.5-24.5 33-38.5 21-58 10h-271q-13 0-22 10-8 9-426 494-22 25-58.5 28.5t-48.5-5.5q-55-22-55-98v-1410q0-55 38-102.5t120-47.5h888q95 0 127 53t10 159zM1227 212l-158 790q4-17 35-173.5t69.5-350 53.5-266.5z"
    }
  }]
};
exports.foursquare = foursquare;
var trello = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 1344v-1024q0-14-9-23t-23-9h-480q-14 0-23 9t-9 23v1024q0 14 9 23t23 9h480q14 0 23-9t9-23zM1376 960v-640q0-14-9-23t-23-9h-480q-14 0-23 9t-9 23v640q0 14 9 23t23 9h480q14 0 23-9t9-23zM1536 192v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
    }
  }]
};
exports.trello = trello;
var female = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1056q0 40-28 68t-68 28q-51 0-80-43l-227-341h-45v132l247 411q9 15 9 33 0 26-19 45t-45 19h-192v272q0 46-33 79t-79 33h-160q-46 0-79-33t-33-79v-272h-192q-26 0-45-19t-19-45q0-18 9-33l247-411v-132h-45l-227 341q-29 43-80 43-40 0-68-28t-28-68q0-29 16-53l256-384q73-107 176-107h384q103 0 176 107l256 384q16 24 16 53zM864 256q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z"
    }
  }]
};
exports.female = female;
var male = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 704v416q0 40-28 68t-68 28-68-28-28-68v-352h-64v912q0 46-33 79t-79 33-79-33-33-79v-464h-64v464q0 46-33 79t-79 33-79-33-33-79v-912h-64v352q0 40-28 68t-68 28-68-28-28-68v-416q0-80 56-136t136-56h640q80 0 136 56t56 136zM736 256q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z"
    }
  }]
};
exports.male = male;
var gittip = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M773 1302l350-473q16-22 24.5-59t-6-85-61.5-79q-40-26-83-25.5t-73.5 17.5-54.5 45q-36 40-96 40-59 0-95-40-24-28-54.5-45t-73.5-17.5-84 25.5q-46 31-60.5 79t-6 85 24.5 59zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.gittip = gittip;
var gratipay = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M773 1302l350-473q16-22 24.5-59t-6-85-61.5-79q-40-26-83-25.5t-73.5 17.5-54.5 45q-36 40-96 40-59 0-95-40-24-28-54.5-45t-73.5-17.5-84 25.5q-46 31-60.5 79t-6 85 24.5 59zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.gratipay = gratipay;
var sunO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1472 896q0-117-45.5-223.5t-123-184-184-123-223.5-45.5-223.5 45.5-184 123-123 184-45.5 223.5 45.5 223.5 123 184 184 123 223.5 45.5 223.5-45.5 184-123 123-184 45.5-223.5zM1748 1173q-4 15-20 20l-292 96v306q0 16-13 26-15 10-29 4l-292-94-180 248q-10 13-26 13t-26-13l-180-248-292 94q-14 6-29-4-13-10-13-26v-306l-292-96q-16-5-20-20-5-17 4-29l180-248-180-248q-9-13-4-29 4-15 20-20l292-96v-306q0-16 13-26 15-10 29-4l292 94 180-248q9-12 26-12t26 12l180 248 292-94q14-6 29 4 13 10 13 26v306l292 96q16 5 20 20 5 16-4 29l-180 248 180 248q9 12 4 29z"
    }
  }]
};
exports.sunO = sunO;
var moonO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1262 1303q-54 9-110 9-182 0-337-90t-245-245-90-337q0-192 104-357-201 60-328.5 229t-127.5 384q0 130 51 248.5t136.5 204 204 136.5 248.5 51q144 0 273.5-61.5t220.5-171.5zM1465 1218q-94 203-283.5 324.5t-413.5 121.5q-156 0-298-61t-245-164-164-245-61-298q0-153 57.5-292.5t156-241.5 235.5-164.5 290-68.5q44-2 61 39 18 41-15 72-86 78-131.5 181.5t-45.5 218.5q0 148 73 273t198 198 273 73q118 0 228-51 41-18 72 13 14 14 17.5 34t-4.5 38z"
    }
  }]
};
exports.moonO = moonO;
var archive = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1088 832q0-26-19-45t-45-19h-256q-26 0-45 19t-19 45 19 45 45 19h256q26 0 45-19t19-45zM1664 640v960q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-960q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1728 192v256q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1536q26 0 45 19t19 45z"
    }
  }]
};
exports.archive = archive;
var bug = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1632 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13v-896h-128v896q-51 0-101.5-13.5t-87-33-66-39-43.5-32.5l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5t15.5-46.5l202-227q-58-114-58-274h-224q-26 0-45-19t-19-45 19-45 45-19h224v-294l-173-173q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zM1152 384h-640q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5z"
    }
  }]
};
exports.bug = bug;
var vk = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1917 520q23 64-150 294-24 32-65 85-40 51-55 72t-30.5 49.5-12 42 13 34.5 32.5 43 57 53q4 2 5 4 141 131 191 221 3 5 6.5 12.5t7 26.5-0.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66-70.5-57.5l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211-130.5-272q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5 41.5 38.5 34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 16-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-0.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5t13-3 20-0.5l288-2q39-5 64 2.5t31 16.5z"
    }
  }]
};
exports.vk = vk;
var weibo = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M675 1284q21-34 11-69t-45-50q-34-14-73-1t-60 46q-22 34-13 68.5t43 50.5 74.5 2.5 62.5-47.5zM769 1163q8-13 3.5-26.5t-17.5-18.5q-14-5-28.5 0.5t-21.5 18.5q-17 31 13 45 14 5 29-0.5t22-18.5zM943 1270q-45 102-158 150t-224 12q-107-34-147.5-126.5t6.5-187.5q47-93 151.5-139t210.5-19q111 29 158.5 119.5t2.5 190.5zM1255 1110q-9-96-89-170t-208.5-109-274.5-21q-223 23-369.5 141.5t-132.5 264.5q9 96 89 170t208.5 109 274.5 21q223-23 369.5-141.5t132.5-264.5zM1563 1114q0 68-37 139.5t-109 137-168.5 117.5-226 83-270.5 31-275-33.5-240.5-93-171.5-151-65-199.5q0-115 69.5-245t197.5-258q169-169 341.5-236t246.5 7q65 64 20 209-4 14-1 20t10 7 14.5-0.5 13.5-3.5l6-2q139-59 246-59t153 61q45 63 0 178-2 13-4.5 20t4.5 12.5 12 7.5 17 6q57 18 103 47t80 81.5 34 116.5zM1489 490q42 47 54.5 108.5t-6.5 117.5q-8 23-29.5 34t-44.5 4q-23-8-34-29.5t-4-44.5q20-63-24-111t-107-35q-24 5-45-8t-25-37q-5-24 8-44.5t37-25.5q60-13 119 5.5t101 65.5zM1670 327q87 96 112.5 222.5t-13.5 241.5q-9 27-34 40t-52 4-40-34-5-52q28-82 10-172t-80-158q-62-69-148-95.5t-173-8.5q-28 6-52-9.5t-30-43.5 9.5-51.5 43.5-29.5q123-26 244 11.5t208 134.5z"
    }
  }]
};
exports.weibo = weibo;
var renren = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1133 1570q-171 94-368 94-196 0-367-94 138-87 235.5-211t131.5-268q35 144 132.5 268t235.5 211zM638 142v485q0 252-126.5 459.5t-330.5 306.5q-181-215-181-495 0-187 83.5-349.5t229.5-269.5 325-137zM1536 898q0 280-181 495-204-99-330.5-306.5t-126.5-459.5v-485q179 30 325 137t229.5 269.5 83.5 349.5z"
    }
  }]
};
exports.renren = renren;
var pagelines = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1402 1103q-32 80-76 138t-91 88.5-99 46.5-101.5 14.5-96.5-8.5-86.5-22-69.5-27.5-46-22.5l-17-10q-113 228-289.5 359.5t-384.5 132.5q-19 0-32-13t-13-32 13-31.5 32-12.5q173-1 322.5-107.5t251.5-294.5q-36 14-72 23t-83 13-91-2.5-93-28.5-92-59-84.5-100-74.5-146q114-47 214-57t167.5 7.5 124.5 56.5 88.5 77 56.5 82q53-131 79-291-7 1-18 2.5t-46.5 2.5-69.5-0.5-81.5-10-88.5-23-84-42.5-75-65-54.5-94.5-28.5-127.5q70-28 133.5-36.5t112.5 1 92 30 73.5 50 56 61 42 63 27.5 56 16 39.5l4 16q12-122 12-195-8-6-21.5-16t-49-44.5-63.5-71.5-54-93-33-112.5 12-127 70-138.5q73 25 127.5 61.5t84.5 76.5 48 85 20.5 89-0.5 85.5-13 76.5-19 62-17 42l-7 15q1 4 1 50t-1 72q3-7 10-18.5t30.5-43 50.5-58 71-55.5 91.5-44.5 112-14.5 132.5 24q-2 78-21.5 141.5t-50 104.5-69.5 71.5-81.5 45.5-84.5 24-80 9.5-67.5-1-46.5-4.5l-17-3q-23 147-73 283 6-7 18-18.5t49.5-41 77.5-52.5 99.5-42 117.5-20 129 23.5 137 77.5z"
    }
  }]
};
exports.pagelines = pagelines;
var stackExchange = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1259 1253v66q0 85-57.5 144.5t-138.5 59.5h-57l-260 269v-269h-529q-81 0-138.5-59.5t-57.5-144.5v-66h1238zM1259 927v255h-1238v-255h1238zM1259 599v255h-1238v-255h1238zM1259 459v67h-1238v-67q0-84 57.5-143.5t138.5-59.5h846q81 0 138.5 59.5t57.5 143.5z"
    }
  }]
};
exports.stackExchange = stackExchange;
var arrowCircleORight = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleORight = arrowCircleORight;
var arrowCircleOLeft = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 800v192q0 13-9.5 22.5t-22.5 9.5h-352v192q0 14-9 23t-23 9q-12 0-24-10l-319-319q-9-9-9-23t9-23l320-320q9-9 23-9 13 0 22.5 9.5t9.5 22.5v192h352q13 0 22.5 9.5t9.5 22.5zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.arrowCircleOLeft = arrowCircleOLeft;
var caretSquareOLeft = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 576v640q0 26-19 45t-45 19q-20 0-37-12l-448-320q-27-19-27-52t27-52l448-320q17-12 37-12 26 0 45 19t19 45zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.caretSquareOLeft = caretSquareOLeft;
var toggleLeft = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 576v640q0 26-19 45t-45 19q-20 0-37-12l-448-320q-27-19-27-52t27-52l448-320q17-12 37-12 26 0 45 19t19 45zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.toggleLeft = toggleLeft;
var dotCircleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.dotCircleO = dotCircleO;
var wheelchair = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1023 1187l102 204q-58 179-210 290t-339 111q-156 0-288.5-77.5t-210-210-77.5-288.5q0-181 104.5-330t274.5-211l17 131q-122 54-195 165.5t-73 244.5q0 185 131.5 316.5t316.5 131.5q126 0 232.5-65t165-175.5 49.5-236.5zM1571 1287l58 114-256 128q-13 7-29 7-40 0-57-35l-239-477h-472q-24 0-42.5-16.5t-21.5-40.5l-96-779q-2-17 6-42 14-51 57-82.5t97-31.5q66 0 113 47t47 113q0 69-52 117.5t-120 41.5l37 289h423v128h-407l16 128h455q40 0 57 35l228 455z"
    }
  }]
};
exports.wheelchair = wheelchair;
var vimeoSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1292 638q10-216-161-222-231-8-312 261 44-19 82-19 85 0 74 96-4 57-74 167t-105 110q-43 0-82-169-13-54-45-255-30-189-160-177-59 7-164 100l-81 72-81 72 52 67q76-52 87-52 57 0 107 179 15 55 45 164.5t45 164.5q68 179 164 179 157 0 383-294 220-283 226-444zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.vimeoSquare = vimeoSquare;
var tryIcon = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 832q0 191-94.5 353t-256.5 256.5-353 94.5h-160q-14 0-23-9t-9-23v-611l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-93l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-250q0-14 9-23t23-9h160q14 0 23 9t9 23v181l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v93l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v487q188-13 318-151t130-328q0-14 9-23t23-9h160q14 0 23 9t9 23z"
    }
  }]
};
exports.tryIcon = tryIcon;
var turkishLira = {
  "viewBox": "0 0 1152 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 832q0 191-94.5 353t-256.5 256.5-353 94.5h-160q-14 0-23-9t-9-23v-611l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-93l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-250q0-14 9-23t23-9h160q14 0 23 9t9 23v181l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v93l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v487q188-13 318-151t130-328q0-14 9-23t23-9h160q14 0 23 9t9 23z"
    }
  }]
};
exports.turkishLira = turkishLira;
var plusSquareO = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zM1280 1248v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zM1408 416v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.plusSquareO = plusSquareO;
var spaceShuttle = {
  "viewBox": "0 0 2176 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M620 1120q-110 64-268 64h-128v-64h-64q-13 0-22.5-23.5t-9.5-56.5q0-24 7-49-58-2-96.5-10.5t-38.5-20.5 38.5-20.5 96.5-10.5q-7-25-7-49 0-33 9.5-56.5t22.5-23.5h64v-64h128q158 0 268 64h1113q42 7 106.5 18t80.5 14q89 15 150 40.5t83.5 47.5 22.5 40-22.5 40-83.5 47.5-150 40.5q-16 3-80.5 14t-106.5 18h-1113zM1739 868q53 36 53 92t-53 92l81 30q68-48 68-122t-68-122zM625 1136h1015q-217 38-456 80-57 0-113 24t-83 48l-28 24-288 288q-26 26-70.5 45t-89.5 19h-96l-93-464h29q157 0 273-64zM352 720h-29l93-464h96q46 0 90 19t70 45l288 288q4 4 11 10.5t30.5 23 48.5 29 61.5 23 72.5 10.5l456 80h-1015q-116-64-273-64z"
    }
  }]
};
exports.spaceShuttle = spaceShuttle;
var slack = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1519 776q62 0 103.5 40.5t41.5 101.5q0 97-93 130l-172 59 56 167q7 21 7 47 0 59-42 102t-101 43q-47 0-85.5-27t-53.5-72l-55-165-310 106 55 164q8 24 8 47 0 59-42 102t-102 43q-47 0-85-27t-53-72l-55-163-153 53q-29 9-50 9-61 0-101.5-40t-40.5-101q0-47 27.5-85t71.5-53l156-53-105-313-156 54q-26 8-48 8-60 0-101-40.5t-41-100.5q0-47 27.5-85t71.5-53l157-53-53-159q-8-24-8-47 0-60 42-102.5t102-42.5q47 0 85 27t53 72l54 160 310-105-54-160q-8-24-8-47 0-59 42.5-102t101.5-43q47 0 85.5 27.5t53.5 71.5l53 161 162-55q21-6 43-6 60 0 102.5 39.5t42.5 98.5q0 45-30 81.5t-74 51.5l-157 54 105 316 164-56q24-8 46-8zM725 1038l310-105-105-315-310 107z"
    }
  }]
};
exports.slack = slack;
var envelopeSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zM1280 1184v-436q-31 35-64 55-34 22-132.5 85t-151.5 99q-98 69-164 69v0 0q-66 0-164-69-47-32-142-92.5t-142-92.5q-12-8-33-27t-31-27v436q0 40 28 68t68 28h832q40 0 68-28t28-68zM1280 611q0-41-27.5-70t-68.5-29h-832q-40 0-68 28t-28 68q0 37 30.5 76.5t67.5 64.5q47 32 137.5 89t129.5 83q3 2 17 11.5t21 14 21 13 23.5 13 21.5 9.5 22.5 7.5 20.5 2.5 20.5-2.5 22.5-7.5 21.5-9.5 23.5-13 21-13 21-14 17-11.5l267-174q35-23 66.5-62.5t31.5-73.5z"
    }
  }]
};
exports.envelopeSquare = envelopeSquare;
var wordpress = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M127 896q0-163 67-313l367 1005q-196-95-315-281t-119-411zM1415 857q0 19-2.5 38.5t-10 49.5-11.5 44-17.5 59-17.5 58l-76 256-278-826q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-75-1-202-10-12-1-20.5 5t-11.5 15-1.5 18.5 9 16.5 19.5 8l80 8 120 328-168 504-280-832q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-7 0-23-0.5t-26-0.5q105-160 274.5-253.5t367.5-93.5q147 0 280.5 53t238.5 149h-10q-55 0-92 40.5t-37 95.5q0 12 2 24t4 21.5 8 23 9 21 12 22.5 12.5 21 14.5 24 14 23q63 107 63 212zM909 963l237 647q1 6 5 11-126 44-255 44-112 0-217-32zM1570 527q95 174 95 369 0 209-104 385.5t-279 278.5l235-678q59-169 59-276 0-42-6-79zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 1751q173 0 331.5-68t273-182.5 182.5-273 68-331.5-68-331.5-182.5-273-273-182.5-331.5-68-331.5 68-273 182.5-182.5 273-68 331.5 68 331.5 182.5 273 273 182.5 331.5 68z"
    }
  }]
};
exports.wordpress = wordpress;
var openid = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1086 0v1536l-272 128q-228-20-414-102t-293-208.5-107-272.5q0-140 100.5-263.5t275-205.5 391.5-108v172q-217 38-356.5 150t-139.5 255q0 152 154.5 267t388.5 145v-1360zM1755 582l37 390-525-114 147-83q-119-70-280-99v-172q277 33 481 157z"
    }
  }]
};
exports.openid = openid;
var bank = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zM256 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zM1851 1600q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
    }
  }]
};
exports.bank = bank;
var institution = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zM256 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zM1851 1600q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
    }
  }]
};
exports.institution = institution;
var university = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zM256 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zM1851 1600q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
    }
  }]
};
exports.university = university;
var graduationCap = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1774 836l18 316q4 69-82 128t-235 93.5-323 34.5-323-34.5-235-93.5-82-128l18-316 574 181q22 7 48 7t48-7zM2304 512q0 23-22 31l-1120 352q-4 1-10 1t-10-1l-652-206q-43 34-71 111.5t-34 178.5q63 36 63 109 0 69-58 107l58 433q2 14-8 25-9 11-24 11h-192q-15 0-24-11-10-11-8-25l58-433q-58-38-58-107 0-73 65-111 11-207 98-330l-333-104q-22-8-22-31t22-31l1120-352q4-1 10-1t10 1l1120 352q22 8 22 31z"
    }
  }]
};
exports.graduationCap = graduationCap;
var mortarBoard = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1774 836l18 316q4 69-82 128t-235 93.5-323 34.5-323-34.5-235-93.5-82-128l18-316 574 181q22 7 48 7t48-7zM2304 512q0 23-22 31l-1120 352q-4 1-10 1t-10-1l-652-206q-43 34-71 111.5t-34 178.5q63 36 63 109 0 69-58 107l58 433q2 14-8 25-9 11-24 11h-192q-15 0-24-11-10-11-8-25l58-433q-58-38-58-107 0-73 65-111 11-207 98-330l-333-104q-22-8-22-31t22-31l1120-352q4-1 10-1t10 1l1120 352q22 8 22 31z"
    }
  }]
};
exports.mortarBoard = mortarBoard;
var yahoo = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M859 957l13 707q-62-11-105-11-41 0-105 11l13-707q-40-69-168.5-295.5t-216.5-374.5-181-287q58 15 108 15 44 0 111-15 63 111 133.5 229.5t167 276.5 138.5 227q37-61 109.5-177.5t117.5-190 105-176 107-189.5q54 14 107 14 56 0 114-14v0q-28 39-60 88.5t-49.5 78.5-56.5 96-49 84q-146 248-353 610z"
    }
  }]
};
exports.yahoo = yahoo;
var google = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"
    }
  }]
};
exports.google = google;
var reddit = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zM788 986q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zM1183 986q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zM1434 866q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.reddit = reddit;
var redditSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M939 1129q13 13 0 26-53 53-171 53t-171-53q-13-13 0-26 5-6 13-6t13 6q42 42 145 42t145-42q5-6 13-6t13 6zM676 973q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zM1014 973q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zM1229 870q0-42-30-72t-73-30q-42 0-73 31-113-78-267-82l54-243 171 39q1 32 23.5 54t53.5 22q32 0 54.5-22.5t22.5-54.5-22.5-54.5-54.5-22.5q-48 0-69 43l-189-42q-17-5-21 13l-60 268q-154 6-265 83-30-32-74-32-43 0-73 30t-30 72q0 30 16 55t42 38q-5 25-5 48 0 122 120 208.5t289 86.5q170 0 290-86.5t120-208.5q0-25-6-49 25-13 40.5-37.5t15.5-54.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.redditSquare = redditSquare;
var stumbleuponCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M866 839l90-27v-62q0-79-58-135t-138-56-138 55.5-58 134.5v283q0 20-14 33.5t-33 13.5-32.5-13.5-13.5-33.5v-120h-151v122q0 82 57.5 139t139.5 57q81 0 138.5-56.5t57.5-136.5v-280q0-19 13.5-33t33.5-14q19 0 32.5 14t13.5 33v54zM1199 1034v-122h-150v126q0 20-13.5 33.5t-33.5 13.5q-19 0-32.5-14t-13.5-33v-123l-90 26-60-28v123q0 80 58 137t139 57 138.5-57 57.5-139zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.stumbleuponCircle = stumbleuponCircle;
var stumbleupon = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1062 712v-118q0-42-30-72t-72-30-72 30-30 72v612q0 175-126 299t-303 124q-178 0-303.5-125.5t-125.5-303.5v-266h328v262q0 43 30 72.5t72 29.5 72-29.5 30-72.5v-620q0-171 126.5-292t301.5-121q176 0 302 122t126 294v136l-195 58zM1592 934h328v266q0 178-125.5 303.5t-303.5 125.5q-177 0-303-124.5t-126-300.5v-268l131 61 195-58v270q0 42 30 71.5t72 29.5 72-29.5 30-71.5v-275z"
    }
  }]
};
exports.stumbleupon = stumbleupon;
var delicious = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1472 1376v-480h-704v-704h-480q-93 0-158.5 65.5t-65.5 158.5v480h704v704h480q93 0 158.5-65.5t65.5-158.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.delicious = delicious;
var digg = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M328 282h204v983h-532v-697h328v-286zM328 1101v-369h-123v369h123zM614 568v697h205v-697h-205zM614 282v204h205v-204h-205zM901 568h533v942h-533v-163h328v-82h-328v-697zM1229 1101v-369h-123v369h123zM1516 568h532v942h-532v-163h327v-82h-327v-697zM1843 1101v-369h-123v369h123z"
    }
  }]
};
exports.digg = digg;
var piedPiperPp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1046 1020q0 64-38 109t-91 45q-43 0-70-15v-277q28-17 70-17 53 0 91 45.5t38 109.5zM703 592q0 64-38 109.5t-91 45.5q-43 0-70-15v-277q28-17 70-17 53 0 91 45t38 109zM1265 1023q0-134-88-229t-213-95q-20 0-39 3-23 78-78 136-87 95-211 101v636l211-41v-206q51 19 117 19 125 0 213-95t88-229zM922 596q0-134-88.5-229t-213.5-95q-74 0-141 36h-186v840l211-41v-206q55 19 116 19 125 0 213.5-95t88.5-229zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.piedPiperPp = piedPiperPp;
var piedPiperAlt = {
  "viewBox": "0 0 2038 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1222 929q75-3 143.5 20.5t118 58.5 101 94.5 84 108 75.5 120.5q33 56 78.5 109t75.5 80.5 99 88.5q-48 30-108.5 57.5t-138.5 59-114 47.5q-44-37-74-115t-43.5-164.5-33-180.5-42.5-168.5-72.5-123-122.5-48.5l-10 2-6 4q4 5 13 14 6 5 28 23.5t25.5 22 19 18 18 20.5 11.5 21 10.5 27.5 4.5 31 4 40.5l1 33q1 26-2.5 57.5t-7.5 52-12.5 58.5-11.5 53q-35-1-101 9.5t-98 10.5q-39 0-72-10-2-16-2-47 0-74 3-96 2-13 31.5-41.5t57-59 26.5-51.5q-24-2-43 24-36 53-111.5 99.5t-136.5 46.5q-25 0-75.5-63t-106.5-139.5-84-96.5q-6-4-27-30-482 112-513 112-16 0-28-11t-12-27q0-15 8.5-26.5t22.5-14.5l486-106q-8-14-8-25t5.5-17.5 16-11.5 20-7 23-4.5 18.5-4.5q4-1 15.5-7.5t17.5-6.5q15 0 28 16t20 33q163-37 172-37 17 0 29.5 11t12.5 28q0 15-8.5 26t-23.5 14l-182 40-1 16q-1 26 81.5 117.5t104.5 91.5q47 0 119-80t72-129q0-36-23.5-53t-51-18.5-51-11.5-23.5-34q0-16 10-34l-68-19q43-44 43-117 0-26-5-58 82-16 144-16 44 0 71.5 1.5t48.5 8.5 31 13.5 20.5 24.5 15.5 33.5 17 47.5 24 60l50-25q-3 40-23 60t-42.5 21-40 6.5-16.5 20.5zM1282 694q-5-5-13.5-15.5t-12-14.5-10.5-11.5-10-10.5l-8-8t-8.5-7.5-8-5-8.5-4.5q-7-3-14.5-5t-20.5-2.5-22-0.5h-32.5-37.5q-126 0-217 43 16-30 36-46.5t54-29.5 65.5-36 46-36.5 50-55 43.5-50.5q12 9 28 31.5t32 36.5 38 13l12-1v76l22 1q247-95 371-190 28-21 50-39t42.5-37.5 33-31 29.5-34 24-31 24.5-37 23-38 27-47.5 29.5-53l7-9q-2 53-43 139-79 165-205 264t-306 142q-14 3-42 7.5t-50 9.5-39 14q3 19 24.5 46t21.5 34q0 11-26 30zM1061 1615q39-26 131.5-47.5t146.5-21.5q9 0 22.5 15.5t28 42.5 26 50 24 51 14.5 33q-121 45-244 45-61 0-125-11zM822 968l48-12 109 177-73 48zM1323 1485q3 15 3 16 0 7-17.5 14.5t-46 13-54 9.5-53.5 7.5-32 4.5l-7-43q21-2 60.5-8.5t72-10 60.5-3.5h14zM866 857l-96 20-6-17q10-1 32.5-7t34.5-6q19 0 35 10zM1061 1491h31l10 83-41 12v-95zM1950 1v-1 1zM1950 1l-1 5-2 2 1-3zM1950 1l1-1z"
    }
  }]
};
exports.piedPiperAlt = piedPiperAlt;
var drupal = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1167 1586q-5-19-24-5-30 22-87 39t-131 17q-129 0-193-49-5-4-13-4-11 0-26 12-7 6-7.5 16t7.5 20q34 32 87.5 46t102.5 12.5 99-4.5q41-4 84.5-20.5t65-30 28.5-20.5q12-12 7-29zM1128 1471q-19-47-39-61-23-15-76-15-47 0-71 10-29 12-78 56-26 24-12 44 9 8 17.5 4.5t31.5-23.5q3-2 10.5-8.5t10.5-8.5 10-7 11.5-7 12.5-5 15-4.5 16.5-2.5 20.5-1q27 0 44.5 7.5t23 14.5 13.5 22q10 17 12.5 20t12.5-1q23-12 14-34zM1483 1190q0-22-5-44.5t-16.5-45-34-36.5-52.5-14q-33 0-97 41.5t-129 83.5-101 42q-27 1-63.5-19t-76-49-83.5-58-100-49-111-19q-115 1-197 78.5t-84 178.5q-2 112 74 164 29 20 62.5 28.5t103.5 8.5q57 0 132-32.5t134-71 120-70.5 93-31q26 1 65 31.5t71.5 67 68 67.5 55.5 32q35 3 58.5-14t55.5-63q28-41 42.5-101t14.5-106zM1536 1030q0 164-62 304.5t-166 236-242.5 149.5-290.5 54-293-57.5-247.5-157-170.5-241.5-64-302q0-89 19.5-172.5t49-145.5 70.5-118.5 78.5-94 78.5-69.5 64.5-46.5 42.5-24.5q14-8 51-26.5t54.5-28.5 48-30 60.5-44q36-28 58-72.5t30-125.5q129 155 186 193 44 29 130 68t129 66q21 13 39 25t60.5 46.5 76 70.5 75 95 69 122 47 148.5 19.5 177.5z"
    }
  }]
};
exports.drupal = drupal;
var joomla = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1070 1073l-160 160-151 152-30 30q-65 64-151.5 87t-171.5 2q-16 70-72 115t-129 45q-85 0-145-60.5t-60-145.5q0-72 44.5-128t113.5-72q-22-86 1-173t88-152l12-12 151 152-11 11q-37 37-37 89t37 90q37 37 89 37t89-37l30-30 151-152 161-160zM729 391l12 12-152 152-12-12q-37-37-89-37t-89 37-37 89.5 37 89.5l29 29 152 152 160 160-151 152-161-160-151-152-30-30q-68-67-90-159.5t5-179.5q-70-15-115-71t-45-129q0-85 60-145.5t145-60.5q76 0 133.5 49t69.5 123q84-20 169.5 3.5t149.5 87.5zM1536 1458q0 85-60 145.5t-145 60.5q-74 0-131-47t-71-118q-86 28-179.5 6t-161.5-90l-11-12 151-152 12 12q37 37 89 37t89-37 37-89-37-89l-30-30-152-152-160-160 152-152 160 160 152 152 29 30q64 64 87.5 150.5t2.5 171.5q76 11 126.5 68.5t50.5 134.5zM1534 334q0 77-51 135t-127 69q26 85 3 176.5t-90 158.5l-12 12-151-152 12-12q37-37 37-89t-37-89-89-37-89 37l-30 30-152 152-160 160-152-152 161-160 152-152 29-30q67-67 159-89.5t178 3.5q11-75 68.5-126t135.5-51q85 0 145 60.5t60 145.5z"
    }
  }]
};
exports.joomla = joomla;
var language = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M654 1078q-1 3-12.5-0.5t-31.5-11.5l-20-9q-44-20-87-49-7-5-41-31.5t-38-28.5q-67 103-134 181-81 95-105 110-4 2-19.5 4t-18.5 0q6-4 82-92 21-24 85.5-115t78.5-118q17-30 51-98.5t36-77.5q-8-1-110 33-8 2-27.5 7.5t-34.5 9.5-17 5q-2 2-2 10.5t-1 9.5q-5 10-31 15-23 7-47 0-18-4-28-21-4-6-5-23 6-2 24.5-5t29.5-6q58-16 105-32 100-35 102-35 10-2 43-19.5t44-21.5q9-3 21.5-8t14.5-5.5 6 0.5q2 12-1 33 0 2-12.5 27t-26.5 53.5-17 33.5q-25 50-77 131l64 28q12 6 74.5 32t67.5 28q4 1 10.5 25.5t4.5 30.5zM449 592q3 15-4 28-12 23-50 38-30 12-60 12-26-3-49-26-14-15-18-41l1-3q3 3 19.5 5t26.5 0 58-16q36-12 55-14 17 0 21 17zM1147 721l63 227-139-42zM39 1521l694-232v-1032l-694 233v1031zM1280 1204l102 31-181-657-100-31-216 536 102 31 45-110 211 65zM777 242l573 184v-380zM1088 1565l158 13-54 160-40-66q-130 83-276 108-58 12-91 12h-84q-79 0-199.5-39t-183.5-85q-8-7-8-16 0-8 5-13.5t13-5.5q4 0 18 7.5t30.5 16.5 20.5 11q73 37 159.5 61.5t157.5 24.5q95 0 167-14.5t157-50.5q15-7 30.5-15.5t34-19 28.5-16.5zM1536 486v1079l-774-246q-14 6-375 127.5t-368 121.5q-13 0-18-13 0-1-1-3v-1078q3-9 4-10 5-6 20-11 107-36 149-50v-384l558 198q2 0 160.5-55t316-108.5 161.5-53.5q20 0 20 21v418z"
    }
  }]
};
exports.language = language;
var fax = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M288 384q66 0 113 47t47 113v1088q0 66-47 113t-113 47h-128q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h128zM1664 547q58 34 93 93t35 128v768q0 106-75 181t-181 75h-864q-66 0-113-47t-47-113v-1536q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v163zM928 1536v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM928 1280v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM928 1024v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1184 1536v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1184 1280v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1184 1024v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1440 1536v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1440 1280v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1440 1024v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1536 640v-256h-160q-40 0-68-28t-28-68v-160h-640v512h896z"
    }
  }]
};
exports.fax = fax;
var building = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1344 0q26 0 45 19t19 45v1664q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h1280zM512 288v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM512 544v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM512 800v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM512 1056v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM384 1376v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 1120v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 864v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 608v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 352v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 1632v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM896 1120v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 864v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 608v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 352v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 1376v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 1120v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 864v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 608v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 352v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23z"
    }
  }]
};
exports.building = building;
var child = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1188 548l-292 292v824q0 46-33 79t-79 33-79-33-33-79v-384h-64v384q0 46-33 79t-79 33-79-33-33-79v-824l-292-292q-28-28-28-68t28-68q29-28 68.5-28t67.5 28l228 228h368l228-228q28-28 68-28t68 28q28 29 28 68.5t-28 67.5zM864 384q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z"
    }
  }]
};
exports.child = child;
var paw = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M780 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zM438 955q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zM832 928q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zM1071 717q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zM1503 613q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"
    }
  }]
};
exports.paw = paw;
var spoon = {
  "viewBox": "0 0 768 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 528q0 145-57 243.5t-152 135.5l45 821q2 26-16 45t-44 19h-192q-26 0-44-19t-16-45l45-821q-95-37-152-135.5t-57-243.5q0-128 42.5-249.5t117.5-200 160-78.5 160 78.5 117.5 200 42.5 249.5z"
    }
  }]
};
exports.spoon = spoon;
var cube = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1629l640-349v-636l-640 233v752zM832 764l698-254-698-254-698 254zM1664 512v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16l-704-384q-31-17-49-47t-18-65v-768q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z"
    }
  }]
};
exports.cube = cube;
var cubes = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1632l384-192v-314l-384 164v342zM576 1178l404-173-404-173-404 173zM1664 1632l384-192v-314l-384 164v342zM1600 1178l404-173-404-173-404 173zM1152 885l384-165v-266l-384 164v267zM1088 506l441-189-441-189-441 189zM2176 1024v416q0 36-19 67t-52 47l-448 224q-25 14-57 14t-57-14l-448-224q-4-2-7-4-2 2-7 4l-448 224q-25 14-57 14t-57-14l-448-224q-33-16-52-47t-19-67v-416q0-38 21.5-70t56.5-48l434-186v-400q0-38 21.5-70t56.5-48l448-192q23-10 50-10t50 10l448 192q35 16 56.5 48t21.5 70v400l434 186q36 16 57 48t21 70z"
    }
  }]
};
exports.cubes = cubes;
var behance = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1848 339h-511v124h511v-124zM1596 765q-90 0-146 52.5t-62 142.5h408q-18-195-200-195zM1612 1350q63 0 122-32t76-87h221q-100 307-427 307-214 0-340.5-132t-126.5-347q0-208 130.5-345.5t336.5-137.5q138 0 240.5 68t153 179 50.5 248q0 17-2 47h-658q0 111 57.5 171.5t166.5 60.5zM277 1300h296q205 0 205-167 0-180-199-180h-302v347zM277 763h281q78 0 123.5-36.5t45.5-113.5q0-144-190-144h-260v294zM0 254h594q87 0 155 14t126.5 47.5 90 96.5 31.5 154q0 181-172 263 114 32 172 115t58 204q0 75-24.5 136.5t-66 103.5-98.5 71-121 42-134 13h-611v-1260z"
    }
  }]
};
exports.behance = behance;
var behanceSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zM499 495h-371v787h382q117 0 197-57.5t80-170.5q0-158-143-200 107-52 107-164 0-57-19.5-96.5t-56.5-60.5-79-29.5-97-8.5zM477 813h-176v-184h163q119 0 119 90 0 94-106 94zM486 1148h-185v-217h189q124 0 124 113 0 104-128 104zM1136 1180q-68 0-104-38t-36-107h411q1-10 1-30 0-132-74.5-220.5t-203.5-88.5q-128 0-210 86t-82 216q0 135 79 217t213 82q205 0 267-191h-138q-11 34-47.5 54t-75.5 20zM1126 814q113 0 124 122h-254q4-56 39-89t91-33zM964 548h319v77h-319v-77z"
    }
  }]
};
exports.behanceSquare = behanceSquare;
var steam = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1582 582q0 101-71.5 172.5t-172.5 71.5-172.5-71.5-71.5-172.5 71.5-172.5 172.5-71.5 172.5 71.5 71.5 172.5zM812 1324q0-104-73-177t-177-73q-27 0-54 6l104 42q77 31 109.5 106.5t1.5 151.5q-31 77-107 109t-152 1q-21-8-62-24.5t-61-24.5q32 60 91 96.5t130 36.5q104 0 177-73t73-177zM1642 583q0-126-89.5-215.5t-215.5-89.5q-127 0-216.5 89.5t-89.5 215.5q0 127 89.5 216t216.5 89q126 0 215.5-89t89.5-216zM1792 583q0 189-133.5 322t-321.5 133l-437 319q-12 129-109 218t-229 89q-121 0-214-76t-118-192l-230-92v-429l389 157q79-48 173-48 13 0 35 2l284-407q2-187 135.5-319t320.5-132q188 0 321.5 133.5t133.5 321.5z"
    }
  }]
};
exports.steam = steam;
var steamSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1242 647q0-80-57-136.5t-137-56.5-136.5 57-56.5 136q0 80 56.5 136.5t136.5 56.5 137-56.5 57-136.5zM632 1235q0 83-58 140.5t-140 57.5q-56 0-103-29t-72-77q52 20 98 40 60 24 120-1.5t85-86.5q24-60-1.5-120t-86.5-84l-82-33q22-5 42-5 82 0 140 57.5t58 140.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-153l172 69q20 92 93.5 152t168.5 60q104 0 181-70t87-173l345-252q150 0 255.5-105.5t105.5-254.5q0-150-105.5-255.5t-255.5-105.5q-148 0-253 104.5t-107 252.5l-225 322q-9-1-28-1-75 0-137 37l-297-119v-468q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5zM1289 649q0 100-71 170.5t-171 70.5-170.5-70.5-70.5-170.5 70.5-171 170.5-71q101 0 171.5 70.5t70.5 171.5z"
    }
  }]
};
exports.steamSquare = steamSquare;
var recycle = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M836 1169l-15 368-2 22-420-29q-36-3-67-31.5t-47-65.5q-11-27-14.5-55t4-65 12-55 21.5-64 19-53q78 12 509 28zM449 583l180 379-147-92q-63 72-111.5 144.5t-72.5 125-39.5 94.5-18.5 63l-4 21-190-357q-17-26-18-56t6-47l8-18q35-63 114-188l-140-86zM1680 1100l-188 359q-12 29-36.5 46.5t-43.5 20.5l-18 4q-71 7-219 12l8 164-230-367 211-362 7 173q170 16 283 5t170-33zM895 176q-47 63-265 435l-317-187-19-12 225-356q20-31 60-45t80-10q24 2 48.5 12t42 21 41.5 33 36 34.5 36 39.5 32 35zM1550 483l212 363q18 37 12.5 76t-27.5 74q-13 20-33 37t-38 28-48.5 22-47 16-51.5 14-46 12q-34-72-265-436l313-195zM1407 257l142-83-220 373-419-20 151-86q-34-89-75-166t-75.5-123.5-64.5-80-47-46.5l-17-13 405 1q31-3 58 10.5t39 28.5l11 15q39 61 112 190z"
    }
  }]
};
exports.recycle = recycle;
var automobile = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M480 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM516 768h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1888 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM2048 992v384q0 14-9 23t-23 9h-96v128q0 80-56 136t-136 56-136-56-56-136v-128h-1024v128q0 80-56 136t-136 56-136-56-56-136v-128h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h768q98 0 179 63.5t104 157.5l105 419h28q93 0 158.5 65.5t65.5 158.5z"
    }
  }]
};
exports.automobile = automobile;
var car = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M480 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM516 768h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1888 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM2048 992v384q0 14-9 23t-23 9h-96v128q0 80-56 136t-136 56-136-56-56-136v-128h-1024v128q0 80-56 136t-136 56-136-56-56-136v-128h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h768q98 0 179 63.5t104 157.5l105 419h28q93 0 158.5 65.5t65.5 158.5z"
    }
  }]
};
exports.car = car;
var cab = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1824 896q93 0 158.5 65.5t65.5 158.5v384q0 14-9 23t-23 9h-96v64q0 80-56 136t-136 56-136-56-56-136v-64h-1024v64q0 80-56 136t-136 56-136-56-56-136v-64h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h128v-224q0-14 9-23t23-9h448q14 0 23 9t9 23v224h128q98 0 179 63.5t104 157.5l105 419h28zM320 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM516 896h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1728 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47z"
    }
  }]
};
exports.cab = cab;
var taxi = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1824 896q93 0 158.5 65.5t65.5 158.5v384q0 14-9 23t-23 9h-96v64q0 80-56 136t-136 56-136-56-56-136v-64h-1024v64q0 80-56 136t-136 56-136-56-56-136v-64h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h128v-224q0-14 9-23t23-9h448q14 0 23 9t9 23v224h128q98 0 179 63.5t104 157.5l105 419h28zM320 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM516 896h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1728 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47z"
    }
  }]
};
exports.taxi = taxi;
var tree = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1504 1472q0 26-19 45t-45 19h-462q1 17 6 87.5t5 108.5q0 25-18 42.5t-43 17.5h-320q-25 0-43-17.5t-18-42.5q0-38 5-108.5t6-87.5h-462q-26 0-45-19t-19-45 19-45l402-403h-229q-26 0-45-19t-19-45 19-45l402-403h-197q-26 0-45-19t-19-45 19-45l384-384q19-19 45-19t45 19l384 384q19 19 19 45t-19 45-45 19h-197l402 403q19 19 19 45t-19 45-45 19h-229l402 403q19 19 19 45z"
    }
  }]
};
exports.tree = tree;
var spotify = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1127 1210q0-32-30-51-193-115-447-115-133 0-287 34-42 9-42 52 0 20 13.5 34.5t35.5 14.5q5 0 37-8 132-27 243-27 226 0 397 103 19 11 33 11 19 0 33-13.5t14-34.5zM1223 995q0-40-35-61-237-141-548-141-153 0-303 42-48 13-48 64 0 25 17.5 42.5t42.5 17.5q7 0 37-8 122-33 251-33 279 0 488 124 24 13 38 13 25 0 42.5-17.5t17.5-42.5zM1331 747q0-47-40-70-126-73-293-110.5t-343-37.5q-204 0-364 47-23 7-38.5 25.5t-15.5 48.5q0 31 20.5 52t51.5 21q11 0 40-8 133-37 307-37 159 0 309.5 34t253.5 95q21 12 40 12 29 0 50.5-20.5t21.5-51.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.spotify = spotify;
var deviantart = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 303l-303 582 24 31h279v415h-507l-44 30-142 273-30 30h-301v-303l303-583-24-30h-279v-415h507l44-30 142-273 30-30h301v303z"
    }
  }]
};
exports.deviantart = deviantart;
var soundcloud = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M784 1372l16-241-16-523q-1-10-7.5-17t-16.5-7q-9 0-16 7t-7 17l-14 523 14 241q1 10 7.5 16.5t15.5 6.5q22 0 24-23zM1080 1343l11-211-12-586q0-16-13-24-8-5-16-5t-16 5q-13 8-13 24l-1 6-10 579q0 1 11 236v1q0 10 6 17 9 11 23 11 11 0 20-9 9-7 9-20zM35 1003l20 128-20 126q-2 9-9 9t-9-9l-17-126 17-128q2-9 9-9t9 9zM121 924l26 207-26 203q-2 9-10 9-9 0-9-10l-23-202 23-207q0-9 9-9 8 0 10 9zM401 1377zM213 886l25 245-25 237q0 11-11 11-10 0-12-11l-21-237 21-245q2-12 12-12 11 0 11 12zM307 879l23 252-23 244q-2 13-14 13-13 0-13-13l-21-244 21-252q0-13 13-13 12 0 14 13zM401 897l21 234-21 246q-2 16-16 16-6 0-10.5-4.5t-4.5-11.5l-20-246 20-234q0-6 4.5-10.5t10.5-4.5q14 0 16 15zM784 1372zM495 751l21 380-21 246q0 7-5 12.5t-12 5.5q-16 0-18-18l-18-246 18-380q2-18 18-18 7 0 12 5.5t5 12.5zM589 665l19 468-19 244q0 8-5.5 13.5t-13.5 5.5q-18 0-20-19l-16-244 16-468q2-19 20-19 8 0 13.5 5.5t5.5 13.5zM687 625l18 506-18 242q-2 21-22 21-19 0-21-21l-16-242 16-506q0-9 6.5-15.5t14.5-6.5q9 0 15 6.5t7 15.5zM1079 1367v0 0 0zM881 621l15 510-15 239q0 10-7.5 17.5t-17.5 7.5-17-7-8-18l-14-239 14-510q0-11 7.5-18t17.5-7 17.5 7 7.5 18zM980 640l14 492-14 236q0 11-8 19t-19 8-19-8-9-19l-12-236 12-492q1-12 9-20t19-8 18.5 8 8.5 20zM1192 1132l-14 231v0q0 13-9 22t-22 9-22-9-10-22l-6-114-6-117 12-636v-3q2-15 12-24 9-7 20-7 8 0 15 5 14 8 16 26zM2304 1113q0 117-83 199.5t-200 82.5h-786q-13-2-22-11t-9-22v-899q0-23 28-33 85-34 181-34 195 0 338 131.5t160 323.5q53-22 110-22 117 0 200 83t83 201z"
    }
  }]
};
exports.soundcloud = soundcloud;
var database = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zM768 1536q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zM768 1152q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zM768 0q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-128q0-69 103-128t280-93.5 385-34.5z"
    }
  }]
};
exports.database = database;
var filePdfO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM894 1071q33 26 84 56 59-7 117-7 147 0 177 49 16 22 2 52 0 1-1 2l-2 2v1q-6 38-71 38-48 0-115-20t-130-53q-221 24-392 83-153 262-242 262-15 0-28-7l-24-12q-1-1-6-5-10-10-6-36 9-40 56-91.5t132-96.5q14-9 23 6 2 2 2 4 52-85 107-197 68-136 104-262-24-82-30.5-159.5t6.5-127.5q11-40 42-40h21 1q23 0 35 15 18 21 9 68-2 6-4 8 1 3 1 8v30q-2 123-14 192 55 164 146 238zM318 1482q52-24 137-158-51 40-87.5 84t-49.5 74zM716 562q-15 42-2 132 1-7 7-44 0-3 7-43 1-4 4-8-1-1-1-2-1-2-1-3-1-22-13-36 0 1-1 2v2zM592 1223q135-54 284-81-2-1-13-9.5t-16-13.5q-76-67-127-176-27 86-83 197-30 56-45 83zM1238 1207q-24-24-140-24 76 28 124 28 14 0 18-1 0-1-2-3z"
    }
  }]
};
exports.filePdfO = filePdfO;
var fileWordO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM233 768v107h70l164 661h159l128-485q7-20 10-46 2-16 2-24h4l3 24q1 3 3.5 20t5.5 26l128 485h159l164-661h70v-107h-300v107h90l-99 438q-5 20-7 46l-2 21h-4q0-3-0.5-6.5t-1.5-8-1-6.5q-1-5-4-21t-5-25l-144-545h-114l-144 545q-2 9-4.5 24.5t-3.5 21.5l-4 21h-4l-2-21q-2-26-7-46l-99-438h90v-107h-300z"
    }
  }]
};
exports.fileWordO = fileWordO;
var fileExcelO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM429 1430v106h281v-106h-75l103-161q5-7 10-16.5t7.5-13.5 3.5-4h2q1 4 5 10 2 4 4.5 7.5t6 8 6.5 8.5l107 161h-76v106h291v-106h-68l-192-273 195-282h67v-107h-279v107h74l-103 159q-4 7-10 16.5t-9 13.5l-2 3h-2q-1-4-5-10-6-11-17-23l-106-159h76v-107h-290v107h68l189 272-194 283h-68z"
    }
  }]
};
exports.fileExcelO = fileExcelO;
var filePowerpointO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM416 1430v106h327v-106h-93v-167h137q76 0 118-15 67-23 106.5-87t39.5-146q0-81-37-141t-100-87q-48-19-130-19h-368v107h92v555h-92zM769 1150h-119v-268h120q52 0 83 18 56 33 56 115 0 89-62 120-31 15-78 15z"
    }
  }]
};
exports.filePowerpointO = filePowerpointO;
var fileImageO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM1280 1216v320h-1024v-192l192-192 128 128 384-384zM448 1024q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"
    }
  }]
};
exports.fileImageO = fileImageO;
var filePhotoO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM1280 1216v320h-1024v-192l192-192 128 128 384-384zM448 1024q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"
    }
  }]
};
exports.filePhotoO = filePhotoO;
var filePictureO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM1280 1216v320h-1024v-192l192-192 128 128 384-384zM448 1024q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"
    }
  }]
};
exports.filePictureO = filePictureO;
var fileArchiveO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 384v-128h-128v128h128zM768 512v-128h-128v128h128zM640 640v-128h-128v128h128zM768 768v-128h-128v128h128zM1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-128v128h-128v-128h-512v1536h1280zM781 943l107 349q8 27 8 52 0 83-72.5 137.5t-183.5 54.5-183.5-54.5-72.5-137.5q0-25 8-52 21-63 120-396v-128h128v128h79q22 0 39 13t23 34zM640 1408q53 0 90.5-19t37.5-45-37.5-45-90.5-19-90.5 19-37.5 45 37.5 45 90.5 19z"
    }
  }]
};
exports.fileArchiveO = fileArchiveO;
var fileZipO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 384v-128h-128v128h128zM768 512v-128h-128v128h128zM640 640v-128h-128v128h128zM768 768v-128h-128v128h128zM1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-128v128h-128v-128h-512v1536h1280zM781 943l107 349q8 27 8 52 0 83-72.5 137.5t-183.5 54.5-183.5-54.5-72.5-137.5q0-25 8-52 21-63 120-396v-128h128v128h79q22 0 39 13t23 34zM640 1408q53 0 90.5-19t37.5-45-37.5-45-90.5-19-90.5 19-37.5 45 37.5 45 90.5 19z"
    }
  }]
};
exports.fileZipO = fileZipO;
var fileAudioO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM620 850q20 8 20 30v544q0 22-20 30-8 2-12 2-12 0-23-9l-166-167h-131q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h131l166-167q16-15 35-7zM1037 1539q31 0 50-24 129-159 129-363t-129-363q-16-21-43-24t-47 14q-21 17-23.5 43.5t14.5 47.5q100 123 100 282t-100 282q-17 21-14.5 47.5t23.5 42.5q18 15 40 15zM826 1391q27 0 47-20 87-93 87-219t-87-219q-18-19-45-20t-46 17-20 44.5 18 46.5q52 57 52 131t-52 131q-19 20-18 46.5t20 44.5q20 17 44 17z"
    }
  }]
};
exports.fileAudioO = fileAudioO;
var fileSoundO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM620 850q20 8 20 30v544q0 22-20 30-8 2-12 2-12 0-23-9l-166-167h-131q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h131l166-167q16-15 35-7zM1037 1539q31 0 50-24 129-159 129-363t-129-363q-16-21-43-24t-47 14q-21 17-23.5 43.5t14.5 47.5q100 123 100 282t-100 282q-17 21-14.5 47.5t23.5 42.5q18 15 40 15zM826 1391q27 0 47-20 87-93 87-219t-87-219q-18-19-45-20t-46 17-20 44.5 18 46.5q52 57 52 131t-52 131q-19 20-18 46.5t20 44.5q20 17 44 17z"
    }
  }]
};
exports.fileSoundO = fileSoundO;
var fileMovieO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM768 768q52 0 90 38t38 90v384q0 52-38 90t-90 38h-384q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h384zM1260 770q20 8 20 30v576q0 22-20 30-8 2-12 2-14 0-23-9l-265-266v-90l265-266q9-9 23-9 4 0 12 2z"
    }
  }]
};
exports.fileMovieO = fileMovieO;
var fileVideoO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM768 768q52 0 90 38t38 90v384q0 52-38 90t-90 38h-384q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h384zM1260 770q20 8 20 30v576q0 22-20 30-8 2-12 2-14 0-23-9l-265-266v-90l265-266q9-9 23-9 4 0 12 2z"
    }
  }]
};
exports.fileVideoO = fileVideoO;
var fileCodeO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM480 768q8-11 21-12.5t24 6.5l51 38q11 8 12.5 21t-6.5 24l-182 243 182 243q8 11 6.5 24t-12.5 21l-51 38q-11 8-24 6.5t-21-12.5l-226-301q-14-19 0-38zM1282 1069q14 19 0 38l-226 301q-8 11-21 12.5t-24-6.5l-51-38q-11-8-12.5-21t6.5-24l182-243-182-243q-8-11-6.5-24t12.5-21l51-38q11-8 24-6.5t21 12.5zM662 1530q-13-2-20.5-13t-5.5-24l138-831q2-13 13-20.5t24-5.5l63 10q13 2 20.5 13t5.5 24l-138 831q-2 13-13 20.5t-24 5.5z"
    }
  }]
};
exports.fileCodeO = fileCodeO;
var vine = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1497 827v198q-101 23-198 23-65 136-165.5 271t-181.5 215.5-128 106.5q-80 45-162-3-28-17-60.5-43.5t-85-83.5-102.5-128.5-107.5-184-105.5-244-91.5-314.5-70.5-390h283q26 218 70 398.5t104.5 317 121.5 235.5 140 195q169-169 287-406-142-72-223-220t-81-333q0-192 104-314.5t284-122.5q178 0 273 105.5t95 297.5q0 159-58 286-7 1-19.5 3t-46 2-63-6-62-25.5-50.5-51.5q31-103 31-184 0-87-29-132t-79-45q-53 0-85 49.5t-32 140.5q0 186 105 293.5t267 107.5q62 0 121-14z"
    }
  }]
};
exports.vine = vine;
var codepen = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M216 1169l603 402v-359l-334-223zM154 1025l193-129-193-129v258zM973 1571l603-402-269-180-334 223v359zM896 1078l272-182-272-182-272 182zM485 803l334-223v-359l-603 402zM1445 896l193 129v-258zM1307 803l269-180-603-402v359zM1792 623v546q0 41-34 64l-819 546q-21 13-43 13t-43-13l-819-546q-34-23-34-64v-546q0-41 34-64l819-546q21-13 43-13t43 13l819 546q34 23 34 64z"
    }
  }]
};
exports.codepen = codepen;
var jsfiddle = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1800 772q111 46 179.5 145.5t68.5 221.5q0 164-118 280.5t-285 116.5q-4 0-11.5-0.5t-10.5-0.5h-1209-1-2-5q-170-10-288-125.5t-118-280.5q0-110 55-203t147-147q-12-39-12-82 0-115 82-196t199-81q95 0 172 58 75-154 222.5-248t326.5-94q166 0 306 80.5t221.5 218.5 81.5 301q0 6-0.5 18t-0.5 18zM468 1038q0 122 84 193t208 71q137 0 240-99-16-20-47.5-56.5t-43.5-50.5q-67 65-144 65-55 0-93.5-33.5t-38.5-87.5q0-53 38.5-87t91.5-34q44 0 84.5 21t73 55 65 75 69 82 77 75 97 55 121.5 21q121 0 204.5-71.5t83.5-190.5q0-121-84-192t-207-71q-143 0-241 97l93 108q66-64 142-64 52 0 92 33t40 84q0 57-37 91.5t-94 34.5q-43 0-82.5-21t-72-55-65.5-75-69.5-82-77.5-75-96.5-55-118.5-21q-122 0-207 70.5t-85 189.5z"
    }
  }]
};
exports.jsfiddle = jsfiddle;
var lifeBouy = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z"
    }
  }]
};
exports.lifeBouy = lifeBouy;
var lifeBuoy = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z"
    }
  }]
};
exports.lifeBuoy = lifeBuoy;
var lifeRing = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z"
    }
  }]
};
exports.lifeRing = lifeRing;
var lifeSaver = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z"
    }
  }]
};
exports.lifeSaver = lifeSaver;
var support = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z"
    }
  }]
};
exports.support = support;
var circleONotch = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z"
    }
  }]
};
exports.circleONotch = circleONotch;
var ra = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M19 874q8-217 116-406t305-318h5q0 1-1 3-8 8-28 33.5t-52 76.5-60 110.5-44.5 135.5-14 150.5 39 157.5 108.5 154q50 50 102 69.5t90.5 11.5 69.5-23.5 47-32.5l16-16q39-51 53-116.5t6.5-122.5-21-107-26.5-80l-14-29q-10-25-30.5-49.5t-43-41-43.5-29.5-35-19l-13-6 104-115q39 17 78 52t59 61l19 27q1-48-18.5-103.5t-40.5-87.5l-20-31 161-183 160 181q-33 46-52.5 102.5t-22.5 90.5l-4 33q22-37 61.5-72.5t67.5-52.5l28-17 103 115q-44 14-85 50t-60 65l-19 29q-31 56-48 133.5t-7 170 57 156.5q33 45 77.5 60.5t85 5.5 76-26.5 57.5-33.5l21-16q60-53 96.5-115t48.5-121.5 10-121.5-18-118-37-107.5-45.5-93-45-72-34.5-47.5l-13-17q-14-13-7-13l10 3q40 29 62.5 46t62 50 64 58 58.5 65 55.5 77 45.5 88 38 103 23.5 117 10.5 136q3 259-108 465t-312 321-456 115q-185 0-351-74t-283.5-198-184-293-60.5-353z"
    }
  }]
};
exports.ra = ra;
var rebel = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M19 874q8-217 116-406t305-318h5q0 1-1 3-8 8-28 33.5t-52 76.5-60 110.5-44.5 135.5-14 150.5 39 157.5 108.5 154q50 50 102 69.5t90.5 11.5 69.5-23.5 47-32.5l16-16q39-51 53-116.5t6.5-122.5-21-107-26.5-80l-14-29q-10-25-30.5-49.5t-43-41-43.5-29.5-35-19l-13-6 104-115q39 17 78 52t59 61l19 27q1-48-18.5-103.5t-40.5-87.5l-20-31 161-183 160 181q-33 46-52.5 102.5t-22.5 90.5l-4 33q22-37 61.5-72.5t67.5-52.5l28-17 103 115q-44 14-85 50t-60 65l-19 29q-31 56-48 133.5t-7 170 57 156.5q33 45 77.5 60.5t85 5.5 76-26.5 57.5-33.5l21-16q60-53 96.5-115t48.5-121.5 10-121.5-18-118-37-107.5-45.5-93-45-72-34.5-47.5l-13-17q-14-13-7-13l10 3q40 29 62.5 46t62 50 64 58 58.5 65 55.5 77 45.5 88 38 103 23.5 117 10.5 136q3 259-108 465t-312 321-456 115q-185 0-351-74t-283.5-198-184-293-60.5-353z"
    }
  }]
};
exports.rebel = rebel;
var resistance = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M19 874q8-217 116-406t305-318h5q0 1-1 3-8 8-28 33.5t-52 76.5-60 110.5-44.5 135.5-14 150.5 39 157.5 108.5 154q50 50 102 69.5t90.5 11.5 69.5-23.5 47-32.5l16-16q39-51 53-116.5t6.5-122.5-21-107-26.5-80l-14-29q-10-25-30.5-49.5t-43-41-43.5-29.5-35-19l-13-6 104-115q39 17 78 52t59 61l19 27q1-48-18.5-103.5t-40.5-87.5l-20-31 161-183 160 181q-33 46-52.5 102.5t-22.5 90.5l-4 33q22-37 61.5-72.5t67.5-52.5l28-17 103 115q-44 14-85 50t-60 65l-19 29q-31 56-48 133.5t-7 170 57 156.5q33 45 77.5 60.5t85 5.5 76-26.5 57.5-33.5l21-16q60-53 96.5-115t48.5-121.5 10-121.5-18-118-37-107.5-45.5-93-45-72-34.5-47.5l-13-17q-14-13-7-13l10 3q40 29 62.5 46t62 50 64 58 58.5 65 55.5 77 45.5 88 38 103 23.5 117 10.5 136q3 259-108 465t-312 321-456 115q-185 0-351-74t-283.5-198-184-293-60.5-353z"
    }
  }]
};
exports.resistance = resistance;
var empire = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M874 1638v66q-208-6-385-109.5t-283-275.5l58-34q29 49 73 99l65-57q148 168 368 212l-17 86q65 12 121 13zM276 1108l-83 28q22 60 49 112l-57 33q-98-180-98-385t98-385l57 33q-30 56-49 112l82 28q-35 100-35 212 0 109 36 212zM1528 1285l58 34q-106 172-283 275.5t-385 109.5v-66q56-1 121-13l-17-86q220-44 368-212l65 57q44-50 73-99zM1377 731l-233 80q14 42 14 85t-14 85l232 80q-31 92-98 169l-185-162q-57 67-147 85l48 241q-52 10-98 10t-98-10l48-241q-90-18-147-85l-185 162q-67-77-98-169l232-80q-14-42-14-85t14-85l-233-80q33-93 99-169l185 162q59-68 147-86l-48-240q44-10 98-10t98 10l-48 240q88 18 147 86l185-162q66 76 99 169zM874 88v66q-65 2-121 13l17 86q-220 42-368 211l-65-56q-38 42-73 98l-57-33q106-172 282-275.5t385-109.5zM1705 896q0 205-98 385l-57-33q27-52 49-112l-83-28q36-103 36-212 0-112-35-212l82-28q-19-56-49-112l57-33q98 180 98 385zM1585 473l-57 33q-35-56-73-98l-65 56q-148-169-368-211l17-86q-56-11-121-13v-66q209 6 385 109.5t282 275.5zM1748 896q0-173-67.5-331t-181.5-272-272-181.5-331-67.5-331 67.5-272 181.5-181.5 272-67.5 331 67.5 331 181.5 272 272 181.5 331 67.5 331-67.5 272-181.5 181.5-272 67.5-331zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.empire = empire;
var ge = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M874 1638v66q-208-6-385-109.5t-283-275.5l58-34q29 49 73 99l65-57q148 168 368 212l-17 86q65 12 121 13zM276 1108l-83 28q22 60 49 112l-57 33q-98-180-98-385t98-385l57 33q-30 56-49 112l82 28q-35 100-35 212 0 109 36 212zM1528 1285l58 34q-106 172-283 275.5t-385 109.5v-66q56-1 121-13l-17-86q220-44 368-212l65 57q44-50 73-99zM1377 731l-233 80q14 42 14 85t-14 85l232 80q-31 92-98 169l-185-162q-57 67-147 85l48 241q-52 10-98 10t-98-10l48-241q-90-18-147-85l-185 162q-67-77-98-169l232-80q-14-42-14-85t14-85l-233-80q33-93 99-169l185 162q59-68 147-86l-48-240q44-10 98-10t98 10l-48 240q88 18 147 86l185-162q66 76 99 169zM874 88v66q-65 2-121 13l17 86q-220 42-368 211l-65-56q-38 42-73 98l-57-33q106-172 282-275.5t385-109.5zM1705 896q0 205-98 385l-57-33q27-52 49-112l-83-28q36-103 36-212 0-112-35-212l82-28q-19-56-49-112l57-33q98 180 98 385zM1585 473l-57 33q-35-56-73-98l-65 56q-148-169-368-211l17-86q-56-11-121-13v-66q209 6 385 109.5t282 275.5zM1748 896q0-173-67.5-331t-181.5-272-272-181.5-331-67.5-331 67.5-272 181.5-181.5 272-67.5 331 67.5 331 181.5 272 272 181.5 331 67.5 331-67.5 272-181.5 181.5-272 67.5-331zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.ge = ge;
var gitSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M582 1308q0 66-93 66-107 0-107-63 0-64 98-64 102 0 102 61zM546 842q0 85-74 85-77 0-77-84 0-90 77-90 36 0 55 25.5t19 63.5zM712 767v-125q-78 29-135 29-50-29-110-29-86 0-145 57t-59 143q0 50 29.5 102t73.5 67v3q-38 17-38 85 0 53 41 77v3q-113 37-113 139 0 45 20 78.5t54 51 72 25.5 81 8q224 0 224-188 0-67-48-99t-126-46q-27-5-51.5-20.5t-24.5-39.5q0-44 49-52 77-15 122-70t45-134q0-24-10-52 37-9 49-13zM771 1186h137q-2-27-2-82v-387q0-46 2-69h-137q3 23 3 71v392q0 50-3 75zM1280 1170v-121q-30 21-68 21-53 0-53-82v-225h52q9 0 26.5 1t26.5 1v-117h-105q0-82 3-102h-140q4 24 4 55v47h-60v117q36-3 37-3 3 0 11 0.5t12 0.5v2h-2v217q0 37 2.5 64t11.5 56.5 24.5 48.5 43.5 31 66 12q64 0 108-24zM924 464q0-36-24-63.5t-60-27.5-60.5 27-24.5 64q0 36 25 62.5t60 26.5 59.5-27 24.5-62zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.gitSquare = gitSquare;
var git = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M595 1514q0-100-165-100-158 0-158 104 0 101 172 101 151 0 151-105zM536 759q0-61-30-102t-89-41q-124 0-124 145 0 135 124 135 119 0 119-137zM805 435v202q-36 12-79 22 16 43 16 84 0 127-73 216.5t-197 112.5q-40 8-59.5 27t-19.5 58q0 31 22.5 51.5t58 32 78.5 22 86 25.5 78.5 37.5 58 64 22.5 98.5q0 304-363 304-69 0-130-12.5t-116-41-87.5-82-32.5-127.5q0-165 182-225v-4q-67-41-67-126 0-109 63-137v-4q-72-24-119.5-108.5t-47.5-165.5q0-139 95-231.5t235-92.5q96 0 178 47 98 0 218-47zM1123 1316h-222q4-45 4-134v-609q0-94-4-128h222q-4 33-4 124v613q0 89 4 134zM1724 1094v196q-71 39-174 39-62 0-107-20t-70-50-39.5-78-18.5-92-4-103v-351h2v-4q-7 0-19-1t-18-1q-21 0-59 6v-190h96v-76q0-54-6-89h227q-6 41-6 165h171v190q-15 0-43.5-2t-42.5-2h-85v365q0 131 87 131 61 0 109-33zM1148 147q0 58-39 101.5t-96 43.5q-58 0-98-43.5t-40-101.5q0-59 39.5-103t98.5-44q58 0 96.5 44.5t38.5 102.5z"
    }
  }]
};
exports.git = git;
var hackerNews = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.hackerNews = hackerNews;
var yCombinatorSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.yCombinatorSquare = yCombinatorSquare;
var ycSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.ycSquare = ycSquare;
var tencentWeibo = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M842 572q0 80-57 136.5t-136 56.5q-60 0-111-35-62 67-115 146-247 371-202 859 1 22-12.5 38.5t-34.5 18.5h-5q-20 0-35-13.5t-17-33.5q-14-126-3.5-247.5t29.5-217 54-186 69-155.5 74-125q61-90 132-165-16-35-16-77 0-80 56.5-136.5t136.5-56.5 136.5 56.5 56.5 136.5zM1223 583q0 158-78 292t-212.5 212-292.5 78q-64 0-131-14-21-5-32.5-23.5t-6.5-39.5q5-20 23-31.5t39-7.5q51 13 108 13 97 0 186-38t153-102 102-153 38-186-38-186-102-153-153-102-186-38-186 38-153 102-102 153-38 186q0 114 52 218 10 20 3.5 40t-25.5 30-39.5 3-30.5-26q-64-123-64-265 0-119 46.5-227t124.5-186 186-124 226-46q158 0 292.5 78t212.5 212.5 78 292.5z"
    }
  }]
};
exports.tencentWeibo = tencentWeibo;
var qq = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M270 806q-8-19-8-52 0-20 11-49t24-45q-1-22 7.5-53t22.5-43q0-139 92.5-288.5t217.5-209.5q139-66 324-66 133 0 266 55 49 21 90 48t71 56 55 68 42 74 32.5 84.5 25.5 89.5 22 98l1 5q55 83 55 150 0 14-9 40t-9 38q0 1 1.5 3.5t3.5 5 2 3.5q77 114 120.5 214.5t43.5 208.5q0 43-19.5 100t-55.5 57q-9 0-19.5-7.5t-19-17.5-19-26-16-26.5-13.5-26-9-17.5q-1-1-3-1l-5 4q-59 154-132 223 20 20 61.5 38.5t69 41.5 35.5 65q-2 4-4 16t-7 18q-64 97-302 97-53 0-110.5-9t-98-20-104.5-30q-15-5-23-7-14-4-46-4.5t-40-1.5q-41 45-127.5 65t-168.5 20q-35 0-69-1.5t-93-9-101-20.5-74.5-40-32.5-64q0-40 10-59.5t41-48.5q11-2 40.5-13t49.5-12q4 0 14-2 2-2 2-4l-2-3q-48-11-108-105.5t-73-156.5l-5-3q-4 0-12 20-18 41-54.5 74.5t-77.5 37.5h-1q-4 0-6-4.5t-5-5.5q-23-54-23-100 0-275 252-466z"
    }
  }]
};
exports.qq = qq;
var wechat = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zM1323 968q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zM1087 461q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zM1722 968q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zM1456 571q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zM2048 1132q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z"
    }
  }]
};
exports.wechat = wechat;
var weixin = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zM1323 968q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zM1087 461q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zM1722 968q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zM1456 571q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zM2048 1132q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z"
    }
  }]
};
exports.weixin = weixin;
var paperPlane = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"
    }
  }]
};
exports.paperPlane = paperPlane;
var send = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"
    }
  }]
};
exports.send = send;
var paperPlaneO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-527-215-298 327q-18 21-47 21-14 0-23-4-19-7-30-23.5t-11-36.5v-452l-472-193q-37-14-40-55-3-39 32-59l1664-960q35-21 68 2zM1422 1510l221-1323-1434 827 336 137 863-639-478 797z"
    }
  }]
};
exports.paperPlaneO = paperPlaneO;
var sendO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-527-215-298 327q-18 21-47 21-14 0-23-4-19-7-30-23.5t-11-36.5v-452l-472-193q-37-14-40-55-3-39 32-59l1664-960q35-21 68 2zM1422 1510l221-1323-1434 827 336 137 863-639-478 797z"
    }
  }]
};
exports.sendO = sendO;
var history = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298zM896 608v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23z"
    }
  }]
};
exports.history = history;
var circleThin = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.circleThin = circleThin;
var header = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1682 1664q-44 0-132.5-3.5t-133.5-3.5q-44 0-132 3.5t-132 3.5q-24 0-37-20.5t-13-45.5q0-31 17-46t39-17 51-7 45-15q33-21 33-140l-1-391q0-21-1-31-13-4-50-4h-675q-38 0-51 4-1 10-1 31l-1 371q0 142 37 164 16 10 48 13t57 3.5 45 15 20 45.5q0 26-12.5 48t-36.5 22q-47 0-139.5-3.5t-138.5-3.5q-43 0-128 3.5t-127 3.5q-23 0-35.5-21t-12.5-45q0-30 15.5-45t36-17.5 47.5-7.5 42-15q33-23 33-143l-1-57v-813q0-3 0.5-26t0-36.5-1.5-38.5-3.5-42-6.5-36.5-11-31.5-16-18q-15-10-45-12t-53-2-41-14-18-45q0-26 12-48t36-22q46 0 138.5 3.5t138.5 3.5q42 0 126.5-3.5t126.5-3.5q25 0 37.5 22t12.5 48q0 30-17 43.5t-38.5 14.5-49.5 4-43 13q-35 21-35 160l1 320q0 21 1 32 13 3 39 3h699q25 0 38-3 1-11 1-32l1-320q0-139-35-160-18-11-58.5-12.5t-66-13-25.5-49.5q0-26 12.5-48t37.5-22q44 0 132 3.5t132 3.5q43 0 129-3.5t129-3.5q25 0 37.5 22t12.5 48q0 30-17.5 44t-40 14.5-51.5 3-44 12.5q-35 23-35 161l1 943q0 119 34 140 16 10 46 13.5t53.5 4.5 41.5 15.5 18 44.5q0 26-12 48t-36 22z"
    }
  }]
};
exports.header = header;
var paragraph = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1278 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"
    }
  }]
};
exports.paragraph = paragraph;
var sliders = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M352 1408v128h-352v-128h352zM704 1280q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zM864 896v128h-864v-128h864zM224 384v128h-224v-128h224zM1536 1408v128h-736v-128h736zM576 256q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zM1216 768q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zM1536 896v128h-224v-128h224zM1536 384v128h-864v-128h864z"
    }
  }]
};
exports.sliders = sliders;
var shareAlt = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1216 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z"
    }
  }]
};
exports.shareAlt = shareAlt;
var shareAltSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1195q0-88-62.5-151t-150.5-63q-84 0-145 58l-241-120q2-16 2-23t-2-23l241-120q61 58 145 58 88 0 150.5-63t62.5-151-62.5-150.5-150.5-62.5-151 62.5-63 150.5q0 7 2 23l-241 120q-62-57-145-57-88 0-150.5 62.5t-62.5 150.5 62.5 150.5 150.5 62.5q83 0 145-57l241 120q-2 16-2 23 0 88 63 150.5t151 62.5 150.5-62.5 62.5-150.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.shareAltSquare = shareAltSquare;
var bomb = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M571 589q-10-25-34-35t-49 0q-108 44-191 127t-127 191q-10 25 0 49t35 34q13 5 24 5 42 0 60-40 34-84 98.5-148.5t148.5-98.5q25-11 35-35t0-49zM1513 233l46 46-244 243 68 68q19 19 19 45.5t-19 45.5l-64 64q89 161 89 343 0 143-55.5 273.5t-150 225-225 150-273.5 55.5-273.5-55.5-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5q182 0 343 89l64-64q19-19 45.5-19t45.5 19l68 68zM1521 177q-10 10-22 10-13 0-23-10l-91-90q-9-10-9-23t9-23q10-9 23-9t23 9l90 91q10 9 10 22.5t-10 22.5zM1751 407q-11 9-23 9t-23-9l-90-91q-10-9-10-22.5t10-22.5q9-10 22.5-10t22.5 10l91 90q9 10 9 23t-9 23zM1792 224q0 14-9 23t-23 9h-96q-14 0-23-9t-9-23 9-23 23-9h96q14 0 23 9t9 23zM1600 32v96q0 14-9 23t-23 9-23-9-9-23v-96q0-14 9-23t23-9 23 9 9 23zM1751 87l-91 90q-10 10-22 10-13 0-23-10-10-9-10-22.5t10-22.5l90-91q10-9 23-9t23 9q9 10 9 23t-9 23z"
    }
  }]
};
exports.bomb = bomb;
var futbolO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M609 816l287-208 287 208-109 336h-355zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM1515 1350q149-203 149-454v-3l-102 89-240-224 63-323 134 12q-150-206-389-282l53 124-287 159-287-159 53-124q-239 76-389 282l135-12 62 323-240 224-102-89v3q0 251 149 454l30-132 326 40 139 298-116 69q117 39 240 39t240-39l-116-69 139-298 326-40z"
    }
  }]
};
exports.futbolO = futbolO;
var soccerBallO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M609 816l287-208 287 208-109 336h-355zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM1515 1350q149-203 149-454v-3l-102 89-240-224 63-323 134 12q-150-206-389-282l53 124-287 159-287-159 53-124q-239 76-389 282l135-12 62 323-240 224-102-89v3q0 251 149 454l30-132 326 40 139 298-116 69q117 39 240 39t240-39l-116-69 139-298 326-40z"
    }
  }]
};
exports.soccerBallO = soccerBallO;
var tty = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M448 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM256 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM832 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM640 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM66 768q-28 0-47-19t-19-46v-129h514v129q0 27-19 46t-46 19h-383zM1216 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1024 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1600 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1408 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 520v13h-514v-10q0-104-382-102-382 1-382 102v10h-514v-13q0-17 8.5-43t34-64 65.5-75.5 110.5-76 160-67.5 224-47.5 293.5-18.5 293 18.5 224 47.5 160.5 67.5 110.5 76 65.5 75.5 34 64 8.5 43zM1792 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 574v129q0 27-19 46t-46 19h-384q-27 0-46-19t-19-46v-129h514z"
    }
  }]
};
exports.tty = tty;
var binoculars = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 320v768q0 26-19 45t-45 19v576q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-512l249-873q7-23 31-23h424zM1024 320v704h-256v-704h256zM1792 1216v512q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-576q-26 0-45-19t-19-45v-768h424q24 0 31 23zM736 32v224h-352v-224q0-14 9-23t23-9h288q14 0 23 9t9 23zM1408 32v224h-352v-224q0-14 9-23t23-9h288q14 0 23 9t9 23z"
    }
  }]
};
exports.binoculars = binoculars;
var plug = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1755 453q37 38 37 90.5t-37 90.5l-401 400 150 150-160 160q-163 163-389.5 186.5t-411.5-100.5l-362 362h-181v-181l362-362q-124-185-100.5-411.5t186.5-389.5l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5l-400 401 234 234 401-400q38-37 91-37t90 37z"
    }
  }]
};
exports.plug = plug;
var slideshare = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M873 740q0 83-63.5 142.5t-152.5 59.5-152.5-59.5-63.5-142.5q0-84 63.5-143t152.5-59 152.5 59 63.5 143zM1375 740q0 83-63 142.5t-153 59.5q-89 0-152.5-59.5t-63.5-142.5q0-84 63.5-143t152.5-59q90 0 153 59t63 143zM1600 920v-667q0-87-32-123.5t-111-36.5h-1112q-83 0-112.5 34t-29.5 126v673q43 23 88.5 40t81 28 81 18.5 71 11 70 4 58.5 0.5 56.5-2 44.5-2q68-1 95 27 6 6 10 9 26 25 61 51 7-91 118-87 5 0 36.5 1.5t43 2 45.5 1 53-1 54.5-4.5 61-8.5 62-13.5 67-19.5 67.5-27 72-34.5zM1763 915q-121 149-372 252 84 285-23 465-66 113-183 148-104 32-182-15-86-51-82-164l-1-326v-1q-8-2-24.5-6t-23.5-5l-1 338q4 114-83 164-79 47-183 15-117-36-182-150-105-180-22-463-251-103-372-252-25-37-4-63t60 1q4 2 11.5 7t10.5 8v-694q0-72 47-123t114-51h1257q67 0 114 51t47 123v694l21-15q39-27 60-1t-4 63z"
    }
  }]
};
exports.slideshare = slideshare;
var twitch = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 434v434h-145v-434h145zM1294 434v434h-145v-434h145zM1294 1194l253-254v-795h-1194v1049h326v217l217-217h398zM1692 0v1013l-434 434h-326l-217 217h-217v-217h-398v-1158l109-289h1483z"
    }
  }]
};
exports.twitch = twitch;
var yelp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M773 1319v127q-1 292-6 305-12 32-51 40-54 9-181.5-38t-162.5-89q-13-15-17-36-1-12 4-26 4-10 34-47t181-216q1 0 60-70 15-19 39.5-24.5t49.5 3.5q24 10 37.5 29t12.5 42zM624 1068q-3 55-52 70l-120 39q-275 88-292 88-35-2-54-36-12-25-17-75-8-76 1-166.5t30-124.5 56-32q13 0 202 77 71 29 115 47l84 34q23 9 35.5 30.5t11.5 48.5zM1450 1365q-7 54-91.5 161t-135.5 127q-37 14-63-7-14-10-184-287l-47-77q-14-21-11.5-46t19.5-46q35-43 83-26 1 1 119 40 203 66 242 79.5t47 20.5q28 22 22 61zM778 733q5 102-54 122-58 17-114-71l-378-598q-8-35 19-62 41-43 207.5-89.5t224.5-31.5q40 10 49 45 3 18 22 305.5t24 379.5zM1440 841q3 39-26 59-15 10-329 86-67 15-91 23l1-2q-23 6-46-4t-37-32q-30-47 0-87 1-1 75-102 125-171 150-204t34-39q28-19 65-2 48 23 123 133.5t81 167.5v3z"
    }
  }]
};
exports.yelp = yelp;
var newspaperO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 512h-384v384h384v-384zM1152 1152v128h-640v-128h640zM1152 384v640h-640v-640h640zM1792 1152v128h-512v-128h512zM1792 896v128h-512v-128h512zM1792 640v128h-512v-128h512zM1792 384v128h-512v-128h512zM256 1344v-960h-128v960q0 26 19 45t45 19 45-19 19-45zM1920 1344v-1088h-1536v1088q0 33-11 64h1483q26 0 45-19t19-45zM2048 128v1216q0 80-56 136t-136 56h-1664q-80 0-136-56t-56-136v-1088h256v-128h1792z"
    }
  }]
};
exports.newspaperO = newspaperO;
var wifi = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1523q-20 0-93-73.5t-73-93.5q0-32 62.5-54t103.5-22 103.5 22 62.5 54q0 20-73 93.5t-93 73.5zM1294 1252q-2 0-40-25t-101.5-50-128.5-25-128.5 25-101 50-40.5 25q-18 0-93.5-75t-75.5-93q0-13 10-23 78-77 196-121t233-44 233 44 196 121q10 10 10 23 0 18-75.5 93t-93.5 75zM1567 980q-11 0-23-8-136-105-252-154.5t-268-49.5q-85 0-170.5 22t-149 53-113.5 62-79 53-31 22q-17 0-92-75t-75-93q0-12 10-22 132-132 320-205t380-73 380 73 320 205q10 10 10 22 0 18-75 93t-92 75zM1838 709q-11 0-22-9-179-157-371.5-236.5t-420.5-79.5-420.5 79.5-371.5 236.5q-11 9-22 9-17 0-92.5-75t-75.5-93q0-13 10-23 187-186 445-288t527-102 527 102 445 288q10 10 10 23 0 18-75.5 93t-92.5 75z"
    }
  }]
};
exports.wifi = wifi;
var calculator = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1536q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM768 1536q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM384 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1152 1536q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM768 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM384 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1152 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM768 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1536 1536v-384q0-52-38-90t-90-38-90 38-38 90v384q0 52 38 90t90 38 90-38 38-90zM1152 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1536 448v-256q0-26-19-45t-45-19h-1280q-26 0-45 19t-19 45v256q0 26 19 45t45 19h1280q26 0 45-19t19-45zM1536 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1664 128v1536q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1536q0-52 38-90t90-38h1408q52 0 90 38t38 90z"
    }
  }]
};
exports.calculator = calculator;
var paypal = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1519 646q18 84-4 204-87 444-565 444h-44q-25 0-44 16.5t-24 42.5l-4 19-55 346-2 15q-5 26-24.5 42.5t-44.5 16.5h-251q-21 0-33-15t-9-36q9-56 26.5-168t26.5-168 27-167.5 27-167.5q5-37 43-37h131q133 2 236-21 175-39 287-144 102-95 155-246 24-70 35-133 1-6 2.5-7.5t3.5-1 6 3.5q79 59 98 162zM1347 364q0 107-46 236-80 233-302 315-113 40-252 42 0 1-90 1l-90-1q-100 0-118 96-2 8-85 530-1 10-12 10h-295q-22 0-36.5-16.5t-11.5-38.5l232-1471q5-29 27.5-48t51.5-19h598q34 0 97.5 13t111.5 32q107 41 163.5 123t56.5 196z"
    }
  }]
};
exports.paypal = paypal;
var googleWallet = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M441 672q33 0 52 26 266 364 362 774h-446q-127-441-367-749-12-16-3-33.5t29-17.5h373zM1000 1029q-49 199-125 393-79-310-256-594 40-221 44-449 211 340 337 650zM1099 320q235 324 384.5 698.5t184.5 773.5h-451q-41-665-553-1472h435zM1792 896q0 424-101 812-67-560-359-1083-25-301-106-584-4-16 5.5-28.5t25.5-12.5h359q21 0 38.5 13t22.5 33q115 409 115 850z"
    }
  }]
};
exports.googleWallet = googleWallet;
var ccVisa = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1975 990h-138q14-37 66-179l3-9q4-10 10-26t9-26l12 55zM531 925l-58-295q-11-54-75-54h-268l-2 13q311 79 403 336zM710 576l-162 438-17-89q-26-70-85-129.5t-131-88.5l135 510h175l261-641h-176zM849 1218h166l104-642h-166zM1617 592q-69-27-149-27-123 0-201 59t-79 153q-1 102 145 174 48 23 67 41t19 39q0 30-30 46t-69 16q-86 0-156-33l-22-11-23 144q74 34 185 34 130 1 208.5-59t80.5-160q0-106-140-174-49-25-71-42t-22-38q0-22 24.5-38.5t70.5-16.5q70-1 124 24l15 8zM2042 576h-128q-65 0-87 54l-246 588h174l35-96h212q5 22 20 96h154zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
    }
  }]
};
exports.ccVisa = ccVisa;
var ccMastercard = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1119 341q-128-85-281-85-103 0-197.5 40.5t-162.5 108.5-108.5 162-40.5 197q0 104 40.5 198t108.5 162 162 108.5 198 40.5q153 0 281-85-131-107-178-265.5t0.5-316.5 177.5-265zM1152 365q-126 99-172 249.5t-0.5 300.5 172.5 249q127-99 172.5-249t-0.5-300.5-172-249.5zM1185 341q130 107 177.5 265.5t0.5 317-178 264.5q128 85 281 85 104 0 198-40.5t162-108.5 108.5-162 40.5-198q0-103-40.5-197t-108.5-162-162.5-108.5-197.5-40.5q-153 0-281 85zM1926 1063h7v-3h-17v3h7v17h3v-17zM1955 1080h4v-20h-5l-6 13-6-13h-5v20h3v-15l6 13h4l5-13v15zM1947 1520v2h-2-3v-3h3 2v1zM1947 1529h3l-4-5h2l1-1q1-1 1-3t-1-3l-1-1h-3-6v13h3v-5h1zM685 1461q0-19 11-31t30-12q18 0 29 12.5t11 30.5q0 19-11 31t-29 12q-19 0-30-12t-11-31zM1158 1417q30 0 35 32h-70q5-32 35-32zM1514 1461q0-19 11-31t29-12 29.5 12.5 11.5 30.5q0 19-11 31t-30 12q-18 0-29-12t-11-31zM1786 1461q0-18 11.5-30.5t29.5-12.5 29.5 12.5 11.5 30.5q0 19-11.5 31t-29.5 12-29.5-12.5-11.5-30.5zM1944 1533q-2 0-4-1-1 0-3-2t-2-3q-1-2-1-4 0-3 1-4 0-2 2-4l1-1q2 0 2-1 2-1 4-1 3 0 4 1l4 2 2 4v1q1 2 1 3l-1 1v3t-1 1l-1 2q-2 2-4 2-1 1-4 1zM599 1529h30v-85q0-24-14.5-38.5t-39.5-15.5q-32 0-47 24-14-24-45-24-24 0-39 20v-16h-30v135h30v-75q0-36 33-36 30 0 30 36v75h29v-75q0-36 33-36 30 0 30 36v75zM765 1529h29v-68-67h-29v16q-17-20-43-20-29 0-48 20t-19 51 19 51 48 20q28 0 43-20v17zM943 1488q0-34-47-40l-14-2q-23-4-23-14 0-15 25-15 23 0 43 11l12-24q-22-14-55-14-26 0-41 12t-15 32q0 33 47 39l13 2q24 4 24 14 0 17-31 17-25 0-45-14l-13 23q25 17 58 17 29 0 45.5-12t16.5-32zM1073 1522l-8-25q-13 7-26 7-19 0-19-22v-61h48v-27h-48v-41h-30v41h-28v27h28v61q0 50 47 50 21 0 36-10zM1159 1390q-29 0-48 20t-19 51q0 32 19.5 51.5t49.5 19.5q33 0 55-19l-14-22q-18 15-39 15-34 0-41-33h101v-12q0-32-18-51.5t-46-19.5zM1318 1390q-23 0-35 20v-16h-30v135h30v-76q0-35 29-35 10 0 18 4l9-28q-9-4-21-4zM1348 1461q0 31 19.5 51t52.5 20q29 0 48-16l-14-24q-18 13-35 12-18 0-29.5-12t-11.5-31 11.5-31 29.5-12q19 0 35 12l14-24q-20-16-48-16-33 0-52.5 20t-19.5 51zM1593 1529h30v-68-67h-30v16q-15-20-42-20-29 0-48.5 20t-19.5 51 19.5 51 48.5 20q28 0 42-20v17zM1726 1390q-23 0-35 20v-16h-29v135h29v-76q0-35 29-35 10 0 18 4l9-28q-8-4-21-4zM1866 1529h29v-68-122h-29v71q-15-20-43-20t-47.5 20.5-19.5 50.5 19.5 50.5 47.5 20.5q29 0 43-20v17zM1944 1509l-2 1h-3q-2 1-4 3-3 1-3 4-1 2-1 6 0 3 1 5 0 2 3 4 2 2 4 3t5 1q4 0 6-1 0-1 2-2l2-1q1-1 3-4 1-2 1-5 0-4-1-6-1-1-3-4 0-1-2-2l-2-1q-1 0-3-0.5t-3-0.5zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
    }
  }]
};
exports.ccMastercard = ccMastercard;
var ccDiscover = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M313 777q0 51-36 84-29 26-89 26h-17v-220h17q61 0 89 27 36 31 36 83zM2089 712q0 52-64 52h-19v-101h20q63 0 63 49zM380 777q0-74-50-120.5t-129-46.5h-95v333h95q74 0 119-38 60-51 60-128zM410 943h65v-333h-65v333zM730 842q0-40-20.5-62t-75.5-42q-29-10-39.5-19t-10.5-23q0-16 13.5-26.5t34.5-10.5q29 0 53 27l34-44q-41-37-98-37-44 0-74 27.5t-30 67.5q0 35 18 55.5t64 36.5q37 13 45 19 19 12 19 34 0 20-14 33.5t-36 13.5q-48 0-71-44l-42 40q44 64 115 64 51 0 83-30.5t32-79.5zM1008 932v-77q-37 37-78 37-49 0-80.5-32.5t-31.5-82.5q0-48 31.5-81.5t77.5-33.5q43 0 81 38v-77q-40-20-80-20-74 0-125.5 50.5t-51.5 123.5 51 123.5 125 50.5q42 0 81-19zM2240 1536v-527q-65 40-144.5 84t-237.5 117-329.5 137.5-417.5 134.5-504 118h1569q26 0 45-19t19-45zM1389 779q0-75-53-128t-128-53-128 53-53 128 53 128 128 53 128-53 53-128zM1541 952l144-342h-71l-90 224-89-224h-71l142 342h35zM1714 943h184v-56h-119v-90h115v-56h-115v-74h119v-57h-184v333zM2105 943h80l-105-140q76-16 76-94 0-47-31-73t-87-26h-97v333h65v-133h9zM2304 262v1268q0 56-38.5 95t-93.5 39h-2040q-55 0-93.5-39t-38.5-95v-1268q0-56 38.5-95t93.5-39h2040q55 0 93.5 39t38.5 95z"
    }
  }]
};
exports.ccDiscover = ccDiscover;
var ccAmex = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M119 682h89l-45-108zM740 1208l74-79-70-79h-163v49h142v55h-142v54h159zM898 1130l99 110v-217zM1186 1083q0-33-40-33h-84v69h83q41 0 41-36zM1475 1079q0-29-42-29h-82v61h81q43 0 43-32zM1197 613q0-29-42-29h-82v60h81q43 0 43-31zM1656 682h89l-44-108zM699 527v271h-66v-212l-94 212h-57l-94-212v212h-132l-25-60h-135l-25 60h-70l116-271h96l110 257v-257h106l85 184 77-184h108zM1255 1083q0 20-5.5 35t-14 25-22.5 16.5-26 10-31.5 4.5-31.5 1-32.5-0.5-29.5-0.5v91h-126l-80-90-83 90h-256v-271h260l80 89 82-89h207q109 0 109 89zM964 742v56h-217v-271h217v57h-152v49h148v55h-148v54h152zM2304 1301v229q0 55-38.5 94.5t-93.5 39.5h-2040q-55 0-93.5-39.5t-38.5-94.5v-678h111l25-61h55l25 61h218v-46l19 46h113l20-47v47h541v-99l10-1q10 0 10 14v86h279v-23q23 12 55 18t52.5 6.5 63-0.5 51.5-1l25-61h56l25 61h227v-58l34 58h182v-378h-180v44l-25-44h-185v44l-23-44h-249q-69 0-109 22v-22h-172v22q-24-22-73-22h-628l-43 97-43-97h-198v44l-22-44h-169l-78 179v-391q0-55 38.5-94.5t93.5-39.5h2040q55 0 93.5 39.5t38.5 94.5v678h-120q-51 0-81 22v-22h-177q-55 0-78 22v-22h-316v22q-31-22-87-22h-209v22q-23-22-91-22h-234l-54 58-50-58h-349v378h343l55-59 52 59h211v-89h21q59 0 90-13v102h174v-99h8q8 0 10 2t2 10v87h529q57 0 88-24v24h168q60 0 95-17zM1546 1067q0 23-12 43t-34 29q25 9 34 26t9 46v54h-65v-45q0-33-12-43.5t-46-10.5h-69v99h-65v-271h154q48 0 77 15t29 58zM1269 600q0 24-12.5 44t-33.5 29q26 9 34.5 25.5t8.5 46.5v53h-65q0-9 0.5-26.5t0-25-3-18.5-8.5-16-17.5-8.5-29.5-3.5h-70v98h-64v-271l153 1q49 0 78 14.5t29 57.5zM1798 1209v56h-216v-271h216v56h-151v49h148v55h-148v54zM1372 527v271h-66v-271h66zM2065 1179q0 86-102 86h-126v-58h126q34 0 34-25 0-16-17-21t-41.5-5-49.5-3.5-42-22.5-17-55q0-39 26-60t66-21h130v57h-119q-36 0-36 25 0 16 17.5 20.5t42 4 49 2.5 42 21.5 17.5 54.5zM2304 1129v101q-24 35-88 35h-125v-58h125q33 0 33-25 0-13-12.5-19t-31-5.5-40-2-40-8-31-24-12.5-48.5q0-39 26.5-60t66.5-21h129v57h-118q-36 0-36 25 0 20 29 22t68.5 5 56.5 26zM2139 528v270h-92l-122-203v203h-132l-26-60h-134l-25 60h-75q-129 0-129-133 0-138 133-138h63v59q-7 0-28-1t-28.5-0.5-23 2-21.5 6.5-14.5 13.5-11.5 23-3 33.5q0 38 13.5 58t49.5 20h29l92-213h97l109 256v-256h99l114 188v-188h66z"
    }
  }]
};
exports.ccAmex = ccAmex;
var ccPaypal = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M745 906q0 37-25.5 61.5t-62.5 24.5q-29 0-46.5-16t-17.5-44q0-37 25-62.5t62-25.5q28 0 46.5 16.5t18.5 45.5zM1530 757q0 42-22 57t-66 15l-32 1 17-107q2-11 13-11h18q22 0 35 2t25 12.5 12 30.5zM1881 906q0 36-25.5 61t-61.5 25q-29 0-47-16t-18-44q0-37 25-62.5t62-25.5q28 0 46.5 16.5t18.5 45.5zM513 735q0-59-38.5-85.5t-100.5-26.5h-160q-19 0-21 19l-65 408q-1 6 3 11t10 5h76q20 0 22-19l18-110q1-8 7-13t15-6.5 17-1.5 19 1 14 1q86 0 135-48.5t49-134.5zM822 1047l41-261q1-6-3-11t-10-5h-76q-14 0-17 33-27-40-95-40-72 0-122.5 54t-50.5 127q0 59 34.5 94t92.5 35q28 0 58-12t48-32q-4 12-4 21 0 16 13 16h69q19 0 22-19zM1269 784q0-5-4-9.5t-9-4.5h-77q-11 0-18 10l-106 156-44-150q-5-16-22-16h-75q-5 0-9 4.5t-4 9.5q0 2 19.5 59t42 123 23.5 70q-82 112-82 120 0 13 13 13h77q11 0 18-10l255-368q2-2 2-7zM1649 735q0-59-38.5-85.5t-100.5-26.5h-159q-20 0-22 19l-65 408q-1 6 3 11t10 5h82q12 0 16-13l18-116q1-8 7-13t15-6.5 17-1.5 19 1 14 1q86 0 135-48.5t49-134.5zM1958 1047l41-261q1-6-3-11t-10-5h-76q-14 0-17 33-26-40-95-40-72 0-122.5 54t-50.5 127q0 59 34.5 94t92.5 35q29 0 59-12t47-32q0 1-2 9t-2 12q0 16 13 16h69q19 0 22-19zM2176 638v-1q0-14-13-14h-74q-11 0-13 11l-65 416-1 2q0 5 4 9.5t10 4.5h66q19 0 21-19zM392 772q-5 35-26 46t-60 11l-33 1 17-107q2-11 13-11h19q40 0 58 11.5t12 48.5zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
    }
  }]
};
exports.ccPaypal = ccPaypal;
var ccStripe = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1597 903q0 69-21 106-19 35-52 35-23 0-41-9v-224q29-30 57-30 57 0 57 122zM2035 867h-110q6-98 56-98 51 0 54 98zM476 1002q0-59-33-91.5t-101-57.5q-36-13-52-24t-16-25q0-26 38-26 58 0 124 33l18-112q-67-32-149-32-77 0-123 38-48 39-48 109 0 58 32.5 90.5t99.5 56.5q39 14 54.5 25.5t15.5 27.5q0 31-48 31-29 0-70-12.5t-72-30.5l-18 113q72 41 168 41 81 0 129-37 51-41 51-117zM771 787l19-111h-96v-135l-129 21-18 114-46 8-17 103h62v219q0 84 44 120 38 30 111 30 32 0 79-11v-118q-32 7-44 7-42 0-42-50v-197h77zM1087 812v-139q-15-3-28-3-32 0-55.5 16t-33.5 46l-10-56h-131v471h150v-306q26-31 82-31 16 0 26 2zM1124 1147h150v-471h-150v471zM1746 898q0-122-45-179-40-52-111-52-64 0-117 56l-8-47h-132v645l150-25v-151q36 11 68 11 83 0 134-56 61-65 61-202zM1278 550q0-33-23-56t-56-23-56 23-23 56 23 56.5 56 23.5 56-23.5 23-56.5zM2176 907q0-113-48-176-50-64-144-64-96 0-151.5 66t-55.5 180q0 128 63 188 55 55 161 55 101 0 160-40l-16-103q-57 31-128 31-43 0-63-19-23-19-28-66h248q2-14 2-52zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
    }
  }]
};
exports.ccStripe = ccStripe;
var bellSlash = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1558 852q61 356 298 556 0 52-38 90t-90 38h-448q0 106-75 181t-181 75-180.5-74.5-75.5-180.5zM1024 1712q16 0 16-16t-16-16q-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5zM2026 112q8 10 7.5 23.5t-10.5 22.5l-1872 1622q-10 8-23.5 7t-21.5-11l-84-96q-8-10-7.5-23.5t10.5-21.5l186-161q-19-32-19-66 50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 124 18 219 82.5t148 157.5l418-363q10-8 23.5-7t21.5 11z"
    }
  }]
};
exports.bellSlash = bellSlash;
var bellSlashO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1040 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zM503 1221l877-760q-42-88-132.5-146.5t-223.5-58.5q-93 0-169.5 31.5t-121.5 80.5-69 103-24 105q0 384-137 645zM1856 1408q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-180.5-74.5-75.5-180.5l149-129h757q-166-187-227-459l111-97q61 356 298 556zM1942 16l84 96q8 10 7.5 23.5t-10.5 22.5l-1872 1622q-10 8-23.5 7t-21.5-11l-84-96q-8-10-7.5-23.5t10.5-21.5l186-161q-19-32-19-66 50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 124 18 219 82.5t148 157.5l418-363q10-8 23.5-7t21.5 11z"
    }
  }]
};
exports.bellSlashO = bellSlashO;
var trash = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM768 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM1024 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM480 384h448l-48-117q-7-9-17-11h-317q-10 2-17 11zM1408 416v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
    }
  }]
};
exports.trash = trash;
var copyright = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1150 1074v109q0 50-36.5 89t-94 60.5-118 32.5-117.5 11q-205 0-342.5-139t-137.5-346q0-203 136-339t339-136q34 0 75.5 4.5t93 18 92.5 34 69 56.5 28 81v109q0 16-16 16h-118q-16 0-16-16v-70q0-43-65.5-67.5t-137.5-24.5q-140 0-228.5 91.5t-88.5 237.5q0 151 91.5 249.5t233.5 98.5q68 0 138-24t70-66v-70q0-7 4.5-11.5t10.5-4.5h119q6 0 11 4.5t5 11.5zM768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.copyright = copyright;
var at = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M972 775q0-108-53.5-169t-147.5-61q-63 0-124 30.5t-110 84.5-79.5 137-30.5 180q0 112 53.5 173t150.5 61q96 0 176-66.5t122.5-166 42.5-203.5zM1536 896q0 111-37 197t-98.5 135-131.5 74.5-145 27.5q-6 0-15.5 0.5t-16.5 0.5q-95 0-142-53-28-33-33-83-52 66-131.5 110t-173.5 44q-161 0-249.5-95.5t-88.5-269.5q0-157 66-290t179-210.5 246-77.5q87 0 155 35.5t106 99.5l2-19 11-56q1-6 5.5-12t9.5-6h118q5 0 13 11 5 5 3 16l-120 614q-5 24-5 48 0 39 12.5 52t44.5 13q28-1 57-5.5t73-24 77-50 57-89.5 24-137q0-292-174-466t-466-174q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51q228 0 405-144 11-9 24-8t21 12l41 49q8 12 7 24-2 13-12 22-102 83-227.5 128t-258.5 45q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q344 0 556 212t212 556z"
    }
  }]
};
exports.at = at;
var eyedropper = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1698 94q94 94 94 226.5t-94 225.5l-225 223 104 104q10 10 10 23t-10 23l-210 210q-10 10-23 10t-23-10l-105-105-603 603q-37 37-90 37h-203l-256 128-64-64 128-256v-203q0-53 37-90l603-603-105-105q-10-10-10-23t10-23l210-210q10-10 23-10t23 10l104 104 223-225q93-94 225.5-94t226.5 94zM512 1472l576-576-192-192-576 576v192h192z"
    }
  }]
};
exports.eyedropper = eyedropper;
var paintBrush = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1615 0q70 0 122.5 46.5t52.5 116.5q0 63-45 151-332 629-465 752-97 91-218 91-126 0-216.5-92.5t-90.5-219.5q0-128 92-212l638-579q59-54 130-54zM706 1034q39 76 106.5 130t150.5 76l1 71q4 213-129.5 347t-348.5 134q-123 0-218-46.5t-152.5-127.5-86.5-183-29-220q7 5 41 30t62 44.5 59 36.5 46 17q41 0 55-37 25-66 57.5-112.5t69.5-76 88-47.5 103-25.5 125-10.5z"
    }
  }]
};
exports.paintBrush = paintBrush;
var birthdayCake = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1408v384h-1792v-384q45 0 85-14t59-27.5 47-37.5q30-27 51.5-38t56.5-11q24 0 44 7t31 15 33 27q29 25 47 38t58 27 86 14q45 0 85-14.5t58-27 48-37.5q21-19 32.5-27t31-15 43.5-7q35 0 56.5 11t51.5 38q28 24 47 37.5t59 27.5 85 14 85-14 59-27.5 47-37.5q30-27 51.5-38t56.5-11q34 0 55.5 11t51.5 38q28 24 47 37.5t59 27.5 85 14zM1792 1088v192q-24 0-44-7t-31-15-33-27q-29-25-47-38t-58-27-85-14q-46 0-86 14t-58 27-47 38q-22 19-33 27t-31 15-44 7q-35 0-56.5-11t-51.5-38q-29-25-47-38t-58-27-86-14q-45 0-85 14.5t-58 27-48 37.5q-21 19-32.5 27t-31 15-43.5 7q-35 0-56.5-11t-51.5-38q-28-24-47-37.5t-59-27.5-85-14q-46 0-86 14t-58 27-47 38q-30 27-51.5 38t-56.5 11v-192q0-80 56-136t136-56h64v-448h256v448h256v-448h256v448h256v-448h256v448h64q80 0 136 56t56 136zM512 224q0 77-36 118.5t-92 41.5q-53 0-90.5-37.5t-37.5-90.5q0-29 9.5-51t23.5-34 31-28 31-31.5 23.5-44.5 9.5-67q38 0 83 74t45 150zM1024 224q0 77-36 118.5t-92 41.5q-53 0-90.5-37.5t-37.5-90.5q0-29 9.5-51t23.5-34 31-28 31-31.5 23.5-44.5 9.5-67q38 0 83 74t45 150zM1536 224q0 77-36 118.5t-92 41.5q-53 0-90.5-37.5t-37.5-90.5q0-29 9.5-51t23.5-34 31-28 31-31.5 23.5-44.5 9.5-67q38 0 83 74t45 150z"
    }
  }]
};
exports.birthdayCake = birthdayCake;
var areaChart = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2048 1536v128h-2048v-1536h128v1408h1920zM1664 512l256 896h-1664v-576l448-576 576 576z"
    }
  }]
};
exports.areaChart = areaChart;
var pieChart = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 890l546 546q-106 108-247.5 168t-298.5 60q-209 0-385.5-103t-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103v762zM955 896h773q0 157-60 298.5t-168 247.5zM1664 768h-768v-768q209 0 385.5 103t279.5 279.5 103 385.5z"
    }
  }]
};
exports.pieChart = pieChart;
var lineChart = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2048 1536v128h-2048v-1536h128v1408h1920zM1920 288v435q0 21-19.5 29.5t-35.5-7.5l-121-121-633 633q-10 10-23 10t-23-10l-233-233-416 416-192-192 585-585q10-10 23-10t23 10l233 233 464-464-121-121q-16-16-7.5-35.5t29.5-19.5h435q14 0 23 9t9 23z"
    }
  }]
};
exports.lineChart = lineChart;
var lastfm = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1292 704q0 6 10 41 10 29 25 49.5t41 34 44 20 55 16.5q325 91 325 332 0 146-105.5 242.5t-254.5 96.5q-59 0-111.5-18.5t-91.5-45.5-77-74.5-63-87.5-53.5-103.5-43.5-103-39.5-106.5-35.5-95q-32-81-61.5-133.5t-73.5-96.5-104-64-142-20q-96 0-183 55.5t-138 144.5-51 185q0 160 106.5 279.5t263.5 119.5q177 0 258-95 56-63 83-116l84 152q-15 34-44 70l1 1q-131 152-388 152-147 0-269.5-79t-190.5-207.5-68-274.5q0-105 43.5-206t116-176.5 172-121.5 204.5-46q87 0 159 19t123.5 50 95 80 72.5 99 58.5 117 50.5 124.5 50 130.5 55 127q96 200 233 200 81 0 138.5-48.5t57.5-128.5q0-42-19-72t-50.5-46-72.5-31.5-84.5-27-87.5-34-81-52-65-82-39-122.5q-3-16-3-33 0-110 87.5-192t198.5-78q78 3 120.5 14.5t90.5 53.5h-1q12 11 23 24.5t26 36 19 27.5l-129 99q-26-49-54-70v-1q-23-21-97-21-49 0-84 33t-35 83z"
    }
  }]
};
exports.lastfm = lastfm;
var lastfmSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1432 1052q0-173-234-239-35-10-53-16.5t-38-25-29-46.5q0-2-2-8.5t-3-12-1-7.5q0-36 24.5-59.5t60.5-23.5q54 0 71 15h-1q20 15 39 51l93-71q-39-54-49-64-33-29-67.5-39t-85.5-10q-80 0-142 57.5t-62 137.5q0 7 2 23 16 96 64.5 140t148.5 73q29 8 49 15.5t45 21.5 38.5 34.5 13.5 46.5v5q1 58-40.5 93t-100.5 35q-97 0-167-144-23-47-51.5-121.5t-48-125.5-54-110.5-74-95.5-103.5-60.5-147-24.5q-101 0-192 56t-144 148-50 192v1q4 108 50.5 199t133.5 147.5 196 56.5q186 0 279-110 20-27 31-51l-60-109q-42 80-99 116t-146 36q-115 0-191-87t-76-204q0-105 82-189t186-84q112 0 170 53.5t104 172.5q8 21 25.5 68.5t28.5 76.5 31.5 74.5 38.5 74 45.5 62.5 55.5 53.5 66 33 80 13.5q107 0 183-69.5t76-174.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.lastfmSquare = lastfmSquare;
var toggleOff = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5zM1920 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5h-386q119 90 188.5 224t69.5 288-69.5 288-188.5 224h386q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5zM2048 896q0 130-51 248.5t-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5 51-248.5 136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5z"
    }
  }]
};
exports.toggleOff = toggleOff;
var toggleOn = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 896q0-130 51-248.5t136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5-51 248.5-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5zM1408 1408q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5z"
    }
  }]
};
exports.toggleOn = toggleOn;
var bicycle = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M762 1152h-314q-40 0-57.5-35t6.5-67l188-251q-65-31-137-31-132 0-226 94t-94 226 94 226 226 94q115 0 203-72.5t111-183.5zM576 1024h186q-18-85-75-148zM1056 1024l288-384h-480l-99 132q105 103 126 252h165zM2176 1088q0-132-94-226t-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94 226-94 94-226zM2304 1088q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-97 39.5-183.5t109.5-149.5l-65-98-353 469q-18 26-51 26h-197q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q114 0 215 55l137-183h-224q-26 0-45-19t-19-45 19-45 45-19h384v128h435l-85-128h-222q-26 0-45-19t-19-45 19-45 45-19h256q33 0 53 28l267 400q91-44 192-44 185 0 316.5 131.5t131.5 316.5z"
    }
  }]
};
exports.bicycle = bicycle;
var bus = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 1216q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1408 1216q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1362 820l-72-384q-5-23-22.5-37.5t-40.5-14.5h-918q-23 0-40.5 14.5t-22.5 37.5l-72 384q-5 30 14 53t49 23h1062q30 0 49-23t14-53zM1136 208q0-20-14-34t-34-14h-640q-20 0-34 14t-14 34 14 34 34 14h640q20 0 34-14t14-34zM1536 933v603h-128v128q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-128h-768v128q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-128h-128v-603q0-112 25-223l103-454q9-78 97.5-137t230-89 312.5-30 312.5 30 230 89 97.5 137l105 454q23 102 23 223z"
    }
  }]
};
exports.bus = bus;
var ioxhost = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1463 832q0 35-25 60.5t-61 25.5h-702q-36 0-61-25.5t-25-60.5 25-60.5 61-25.5h702q36 0 61 25.5t25 60.5zM1677 832q0-86-23-170h-982q-36 0-61-25t-25-60q0-36 25-61t61-25h908q-88-143-235-227t-320-84q-177 0-327.5 87.5t-238 237.5-87.5 327q0 86 23 170h982q36 0 61 25t25 60q0 36-25 61t-61 25h-908q88 143 235.5 227t320.5 84q132 0 253-51.5t208-139 139-208 52-253.5zM2048 577q0 35-25 60t-61 25h-131q17 85 17 170 0 167-65.5 319.5t-175.5 263-262.5 176-319.5 65.5q-246 0-448.5-133t-301.5-350h-189q-36 0-61-25t-25-61q0-35 25-60t61-25h132q-17-85-17-170 0-167 65.5-319.5t175.5-263 262.5-176 320.5-65.5q245 0 447.5 133t301.5 350h188q36 0 61 25t25 61z"
    }
  }]
};
exports.ioxhost = ioxhost;
var angellist = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M953 378l-114 328 117 21q165-451 165-518 0-56-38-56-57 0-130 225zM654 1065l33 88q37-42 71-67l-33-5.5t-38.5-7-32.5-8.5zM362 169q0 98 159 521 17-10 49-10 15 0 75 5l-121-351q-75-220-123-220-19 0-29 17.5t-10 37.5zM283 928q0 36 51.5 119t117.5 153 100 70q14 0 25.5-13t11.5-27q0-24-32-102-13-32-32-72t-47.5-89-61.5-81-62-32q-20 0-45.5 27t-25.5 47zM125 1263q0 41 25 104 59 145 183.5 227t281.5 82q227 0 382-170 152-169 152-427 0-43-1-67t-11.5-62-30.5-56q-56-49-211.5-75.5t-270.5-26.5q-37 0-49 11-12 5-12 35 0 34 21.5 60t55.5 40 77.5 23.5 87.5 11.5 85 4 70 0h23q24 0 40 19 15 19 19 55-28 28-96 54-61 22-93 46-64 46-108.5 114t-44.5 137q0 31 18.5 88.5t18.5 87.5l-3 12q-4 12-4 14-137-10-146-216-8 2-41 2 2 7 2 21 0 53-40.5 89.5t-94.5 36.5q-82 0-166.5-78t-84.5-159q0-34 33-67 52 64 60 76 77 104 133 104 12 0 26.5-8.5t14.5-20.5q0-34-87.5-145t-116.5-111q-43 0-70 44.5t-27 90.5zM11 1272q0-101 42.5-163t136.5-88q-28-74-28-104 0-62 61-123t122-61q29 0 70 15-163-462-163-567 0-80 41-130.5t119-50.5q131 0 325 581 6 17 8 23 6-16 29-79.5t43.5-118.5 54-127.5 64.5-123 70.5-86.5 76.5-36q71 0 112 49t41 122q0 108-159 550 61 15 100.5 46t58.5 78 26 93.5 7 110.5q0 150-47 280t-132 225-211 150-278 55q-111 0-223-42-149-57-258-191.5t-109-286.5z"
    }
  }]
};
exports.angellist = angellist;
var cc = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M785 1008h207q-14 158-98.5 248.5t-214.5 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-203q-5-64-35.5-99t-81.5-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 40 51.5 66 18q95 0 109-139zM1497 1008h206q-14 158-98 248.5t-214 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-204q-4-64-35-99t-81-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 39.5 51.5 65.5 18q49 0 76.5-38t33.5-101zM1856 889q0-207-15.5-307t-60.5-161q-6-8-13.5-14t-21.5-15-16-11q-86-63-697-63-625 0-710 63-5 4-17.5 11.5t-21 14-14.5 14.5q-45 60-60 159.5t-15 308.5q0 208 15 307.5t60 160.5q6 8 15 15t20.5 14 17.5 12q44 33 239.5 49t470.5 16q610 0 697-65 5-4 17-11t20.5-14 13.5-16q46-60 61-159t15-309zM2048 128v1536h-2048v-1536h2048z"
    }
  }]
};
exports.cc = cc;
var ils = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M992 624v496q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-496q0-112-80-192t-192-80h-272v1152q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-1344q0-14 9-23t23-9h464q135 0 249 66.5t180.5 180.5 66.5 249zM1376 160v880q0 135-66.5 249t-180.5 180.5-249 66.5h-464q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192v-880q0-14 9-23t23-9h160q14 0 23 9t9 23z"
    }
  }]
};
exports.ils = ils;
var shekel = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M992 624v496q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-496q0-112-80-192t-192-80h-272v1152q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-1344q0-14 9-23t23-9h464q135 0 249 66.5t180.5 180.5 66.5 249zM1376 160v880q0 135-66.5 249t-180.5 180.5-249 66.5h-464q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192v-880q0-14 9-23t23-9h160q14 0 23 9t9 23z"
    }
  }]
};
exports.shekel = shekel;
var sheqel = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M992 624v496q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-496q0-112-80-192t-192-80h-272v1152q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-1344q0-14 9-23t23-9h464q135 0 249 66.5t180.5 180.5 66.5 249zM1376 160v880q0 135-66.5 249t-180.5 180.5-249 66.5h-464q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192v-880q0-14 9-23t23-9h160q14 0 23 9t9 23z"
    }
  }]
};
exports.sheqel = sheqel;
var meanpath = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1311 842v114q0 24-13.5 38t-37.5 14h-202q-24 0-38-14t-14-38v-114q0-24 14-38t38-14h202q24 0 37.5 14t13.5 38zM821 1072v-250q0-53-32.5-85.5t-85.5-32.5h-133q-68 0-96 52-28-52-96-52h-130q-53 0-85.5 32.5t-32.5 85.5v250q0 22 21 22h55q22 0 22-22v-230q0-24 13.5-38t38.5-14h94q24 0 38 14t14 38v230q0 22 21 22h54q22 0 22-22v-230q0-24 14-38t38-14h97q24 0 37.5 14t13.5 38v230q0 22 22 22h55q21 0 21-22zM1410 976v-154q0-53-33-85.5t-86-32.5h-264q-53 0-86 32.5t-33 85.5v410q0 21 22 21h55q21 0 21-21v-180q31 42 94 42h191q53 0 86-32.5t33-85.5zM1536 360v1072q0 96-68 164t-164 68h-1072q-96 0-164-68t-68-164v-1072q0-96 68-164t164-68h1072q96 0 164 68t68 164z"
    }
  }]
};
exports.meanpath = meanpath;
var buysellads = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M915 1086h-294l147-551zM1001 1408h311l-324-1024h-440l-324 1024h311l383-314zM1536 416v960q0 118-85 203t-203 85h-960q-118 0-203-85t-85-203v-960q0-118 85-203t203-85h960q118 0 203 85t85 203z"
    }
  }]
};
exports.buysellads = buysellads;
var connectdevelop = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2048 895q0 21-13 36.5t-33 19.5l-205 356q3 9 3 18 0 20-12.5 35.5t-32.5 19.5l-193 337q3 8 3 16 0 23-16.5 40t-40.5 17q-25 0-41-18h-400q-17 20-43 20t-43-20h-399q-17 20-43 20-23 0-40-16.5t-17-40.5q0-8 4-20l-193-335q-20-4-32.5-19.5t-12.5-35.5q0-9 3-18l-206-356q-20-5-32.5-20.5t-12.5-35.5q0-21 13.5-36.5t33.5-19.5l199-344q0-1-0.5-3t-0.5-3q0-36 34-51l209-363q-4-10-4-18 0-24 17-40.5t40-16.5q26 0 44 21h396q16-21 43-21t43 21h398q18-21 44-21 23 0 40 16.5t17 40.5q0 6-4 18l207 358q23 1 39 17.5t16 38.5q0 13-7 27l187 324q19 4 31.5 19.5t12.5 35.5zM1063 1694h389l-342-354h-143l-342 354h360q18-16 39-16t39 16zM112 882q1 4 1 13 0 10-2 15l208 360 15 6 188-199v-347l-187-194q-13 8-29 10zM986 98h-388l190 200 554-200h-280q-16 16-38 16t-38-16zM1689 1310q1-6 5-11l-64-68-17 79h76zM1583 1310l22-105-252-266-296 307 63 64h463zM1495 1678l16-28 65-310h-427l333 343q8-4 13-5zM578 1694h5l342-354h-373v335l4 6q14 5 22 13zM552 1310h402l64-66-309-321-157 166v221zM359 1310h163v-189l-168 177q4 8 5 12zM358 485q0 1 0.5 2t0.5 2q0 16-8 29l171 177v-269zM552 415v311l153 157 297-314-223-236zM556 111l-4 8v264l205-74-191-201q-6 2-10 3zM1447 98h-16l-621 224 213 225zM1023 590l-297 315 311 319 296-307zM688 902l-136-141v284zM1038 1266l-42 44h85zM1374 918l238 251 132-624-3-5-1-1zM1718 518q-8-13-8-29v-2l-216-376q-5-1-13-5l-437 463 310 327zM522 394v-223l-163 282zM522 1340h-163l163 283v-283zM1607 1340l-48 227 130-227h-82zM1729 1270l207-361q-2-10-2-14 0-1 3-16l-171-296-129 612 77 82q5-3 15-7z"
    }
  }]
};
exports.connectdevelop = connectdevelop;
var dashcube = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 680q0-131 91.5-226.5t222.5-95.5h742l352-358v1470q0 132-91.5 227t-222.5 95h-780q-131 0-222.5-95t-91.5-227v-790zM1232 1434l-176-180v-425q0-46-32-79t-78-33h-484q-46 0-78 33t-32 79v492q0 46 32.5 79.5t77.5 33.5h770z"
    }
  }]
};
exports.dashcube = dashcube;
var forumbee = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M934 150q-317 121-556 362.5t-358 560.5q-20-89-20-176 0-208 102.5-384.5t278.5-279 384-102.5q82 0 169 19zM1203 269q93 65 164 155-389 113-674.5 400.5t-396.5 676.5q-93-72-155-162 112-386 395-671t667-399zM470 1603q115-356 379.5-622t619.5-384q40 92 54 195-292 120-516 345t-343 518q-103-14-194-52zM1536 1661q-193-50-367-115-135 84-290 107 109-205 274-370.5t369-275.5q-21 152-101 284 65 175 115 370z"
    }
  }]
};
exports.forumbee = forumbee;
var leanpub = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1893 392l155 1272q-131 0-257-57-200-91-393-91-226 0-374 148-148-148-374-148-193 0-393 91-128 57-252 57h-5l155-1272q224-127 482-127 233 0 387 106 154-106 387-106 258 0 482 127zM1398 1379q129 0 232 28.5t260 93.5l-124-1021q-171-78-368-78-224 0-374 141-150-141-374-141-197 0-368 78l-124 1021q105-43 165.5-65t148.5-39.5 178-17.5q202 0 374 108 172-108 374-108zM1438 1345l-55-907q-211 4-359 155-152-155-374-155-176 0-336 66l-114 941q124-51 228.5-76t221.5-25q209 0 374 102 172-107 374-102z"
    }
  }]
};
exports.leanpub = leanpub;
var sellsy = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1500 1371v-733q0-21-15-36t-35-15h-93q-20 0-35 15t-15 36v733q0 20 15 35t35 15h93q20 0 35-15t15-35zM1216 1371v-531q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v531q0 20 15 35t35 15h101q20 0 35-15t15-35zM924 1371v-429q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v429q0 20 15 35t35 15h101q20 0 35-15t15-35zM632 1371v-362q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v362q0 20 15 35t35 15h101q20 0 35-15t15-35zM2048 1225q0 166-118 284t-284 118h-1244q-166 0-284-118t-118-284q0-116 63-214.5t168-148.5q-10-34-10-73 0-113 80.5-193.5t193.5-80.5q102 0 180 67 45-183 194-300t338-117q149 0 275 73.5t199.5 199.5 73.5 275q0 66-14 122 135 33 221 142.5t86 247.5z"
    }
  }]
};
exports.sellsy = sellsy;
var shirtsinbulk = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 0h1536v1392l-776 338-760-338v-1392zM1436 1327v-926h-1336v926l661 294zM1436 301v-201h-1336v201h1336zM181 599v115h-37v-115h37zM181 747v115h-37v-115h37zM181 895v115h-37v-115h37zM181 1043v115h-37v-115h37zM181 1191v115h-37v-115h37zM207 1334l15-34 105 47-15 33zM343 1394l15-34 105 46-15 34zM478 1454l15-34 105 46-15 34zM614 1513l15-33 104 46-15 34zM797 1526l105-46 15 33-105 47zM932 1466l105-46 15 34-105 46zM1068 1406l105-46 15 34-105 46zM1203 1347l105-47 15 34-105 46zM259 147v36h-114v-36h114zM421 147v36h-115v-36h115zM583 147v36h-115v-36h115zM744 147v36h-114v-36h114zM906 147v36h-114v-36h114zM1068 147v36h-115v-36h115zM1230 147v36h-115v-36h115zM1391 147v36h-114v-36h114zM181 487v79h-37v-115h115v36h-78zM421 451v36h-115v-36h115zM583 451v36h-115v-36h115zM744 451v36h-114v-36h114zM906 451v36h-114v-36h114zM1068 451v36h-115v-36h115zM1230 451v36h-115v-36h115zM1355 566v-79h-78v-36h115v115h-37zM1355 714v-115h37v115h-37zM1355 862v-115h37v115h-37zM1355 1010v-115h37v115h-37zM1355 1158v-115h37v115h-37zM1355 1306v-115h37v115h-37zM760 1271q-129 0-221-91.5t-92-221.5q0-129 92-221t221-92q130 0 221.5 92t91.5 221q0 130-91.5 221.5t-221.5 91.5zM595 890q0 36 19.5 56.5t49.5 25 64 7 64 2 49.5 9 19.5 30.5q0 49-112 49-97 0-123-51h-3l-31 63q67 42 162 42 29 0 56.5-5t55.5-16 45.5-33 17.5-53q0-46-27.5-69.5t-67.5-27-79.5-3-67-5-27.5-25.5q0-21 20.5-33t40.5-15 41-3q34 0 70.5 11t51.5 34h3l30-58q-3-1-21-8.5t-22.5-9-19.5-7-22-7-20-4.5-24-4-23-1q-29 0-56.5 5t-54 16.5-43 34-16.5 53.5z"
    }
  }]
};
exports.shirtsinbulk = shirtsinbulk;
var simplybuilt = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M863 1032q0-112-79.5-191.5t-191.5-79.5-191 79.5-79 191.5 79 191 191 79 191.5-79 79.5-191zM1726 1031q0-112-79-191t-191-79-191.5 79-79.5 191q0 113 79.5 192t191.5 79 191-79.5 79-191.5zM2048 222v1348q0 44-31.5 75.5t-76.5 31.5h-1832q-45 0-76.5-31.5t-31.5-75.5v-1348q0-44 31.5-75.5t76.5-31.5h431q44 0 76 31.5t32 75.5v161h754v-161q0-44 32-75.5t76-31.5h431q45 0 76.5 31.5t31.5 75.5z"
    }
  }]
};
exports.simplybuilt = simplybuilt;
var skyatlas = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1430 583zM1690 787q148 0 253 98.5t105 244.5q0 157-109 261.5t-267 104.5q-85 0-162-27.5t-138-73.5-118-106-109-126-103.5-132.5-108.5-126.5-117-106-136-73.5-159-27.5q-154 0-251.5 91.5t-97.5 244.5q0 157 104 250t263 93q100 0 208-37.5t193-98.5q5-4 21-18.5t30-24 22-9.5q14 0 24.5 10.5t10.5 24.5q0 24-60 77-101 88-234.5 142t-260.5 54q-133 0-245.5-58t-180-165-67.5-241q0-205 141.5-341t347.5-136q120 0 226.5 43.5t185.5 113 151.5 153 139 167.5 133.5 153.5 149.5 113 172.5 43.5q102 0 168.5-61.5t66.5-162.5q0-95-64.5-159t-159.5-64q-30 0-81.5 18.5t-68.5 18.5q-20 0-35.5-15t-15.5-35q0-18 8.5-57t8.5-59q0-159-107.5-263t-266.5-104q-58 0-111.5 18.5t-84 40.5-55.5 40.5-33 18.5q-15 0-25.5-10.5t-10.5-25.5q0-19 25-46 59-67 147-103.5t182-36.5q191 0 318 125.5t127 315.5q0 37-4 66 57-15 115-15z"
    }
  }]
};
exports.skyatlas = skyatlas;
var cartPlus = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1216 704q0-26-19-45t-45-19h-128v-128q0-26-19-45t-45-19-45 19-19 45v128h-128q-26 0-45 19t-19 45 19 45 45 19h128v128q0 26 19 45t45 19 45-19 19-45v-128h128q26 0 45-19t19-45zM640 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1536 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1664 448v512q0 24-16 42.5t-41 21.5l-1044 122q1 7 4.5 21.5t6 26.5 2.5 22q0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5 20.5-38l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t20 15.5 13 24.5 7.5 26.5 5.5 29.5 4.5 25.5h1201q26 0 45 19t19 45z"
    }
  }]
};
exports.cartPlus = cartPlus;
var cartArrowDown = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 704q0-26-19-45t-45-19-45 19l-147 146v-293q0-26-19-45t-45-19-45 19-19 45v293l-147-146q-19-19-45-19t-45 19-19 45 19 45l256 256q19 19 45 19t45-19l256-256q19-19 19-45zM640 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1536 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1664 448v512q0 24-16 42.5t-41 21.5l-1044 122q1 7 4.5 21.5t6 26.5 2.5 22q0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5 20.5-38l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t20 15.5 13 24.5 7.5 26.5 5.5 29.5 4.5 25.5h1201q26 0 45 19t19 45z"
    }
  }]
};
exports.cartArrowDown = cartArrowDown;
var diamond = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M212 768l623 665-300-665h-323zM1024 1540l349-772h-698zM538 640l204-384h-262l-288 384h346zM1213 1433l623-665h-323zM683 640h682l-204-384h-274zM1510 640h346l-288-384h-262zM1651 154l384 512q14 18 13 41.5t-17 40.5l-960 1024q-18 20-47 20t-47-20l-960-1024q-16-17-17-40.5t13-41.5l384-512q18-26 51-26h1152q33 0 51 26z"
    }
  }]
};
exports.diamond = diamond;
var ship = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1811 1555q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-128-128 90-90 83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83zM237 1517q-19 19-45 19t-45-19l-128-128 90-90 83 82 83-82q19-19 45-19t45 19l83 82 64-64v-293l-210-314q-17-26-7-56.5t40-40.5l177-58v-299h128v-128h256v-128h256v128h256v128h128v299l177 58q30 10 40 40.5t-7 56.5l-210 314v293l19-18q19-19 45-19t45 19l83 82 83-82q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83zM640 384v128l384-128 384 128v-128h-128v-128h-512v128h-128z"
    }
  }]
};
exports.ship = ship;
var userSecret = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M576 1536l96-448-96-128-128-64zM832 1536l128-640-128 64-96 128zM992 526q-2-4-4-6-10-8-96-8-70 0-167 19-7 2-21 2t-21-2q-97-19-167-19-86 0-96 8-2 2-4 6 2 18 4 27 2 3 7.5 6.5t7.5 10.5q2 4 7.5 20.5t7 20.5 7.5 17 8.5 17 9 14 12 13.5 14 9.5 17.5 8 20.5 4 24.5 2q36 0 59-12.5t32.5-30 14.5-34.5 11.5-29.5 17.5-12.5h12q11 0 17.5 12.5t11.5 29.5 14.5 34.5 32.5 30 59 12.5q13 0 24.5-2t20.5-4 17.5-8 14-9.5 12-13.5 9-14 8.5-17 7.5-17 7-20.5 7.5-20.5q2-7 7.5-10.5t7.5-6.5q2-9 4-27zM1408 1405q0 121-73 190t-194 69h-874q-121 0-194-69t-73-190q0-61 4.5-118t19-125.5 37.5-123.5 63.5-103.5 93.5-74.5l-90-220h214q-22-64-22-128 0-12 2-32-194-40-194-96 0-57 210-99 17-62 51.5-134t70.5-114q32-37 76-37 30 0 84 31t84 31 84-31 84-31q44 0 76 37 36 42 70.5 114t51.5 134q210 42 210 99 0 56-194 96 7 81-20 160h214l-82 225q63 33 107.5 96.5t65.5 143.5 29 151.5 8 148.5z"
    }
  }]
};
exports.userSecret = userSecret;
var motorcycle = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2301 1036q12 103-22 198.5t-99 163.5-158.5 106-196.5 31q-161-11-279.5-125t-134.5-274q-12-111 27.5-210.5t118.5-170.5l-71-107q-96 80-151 194t-55 244q0 27-18.5 46.5t-45.5 19.5h-256-69q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q76 0 152 27l24-45q-123-110-304-110h-64q-26 0-45-19t-19-45 19-45 45-19h128q78 0 145 13.5t116.5 38.5 71.5 39.5 51 36.5h512 115l-85-128h-222q-30 0-49-22.5t-14-52.5q4-23 23-38t43-15h253q33 0 53 28l70 105 114-114q19-19 46-19h101q26 0 45 19t19 45v128q0 26-19 45t-45 19h-179l115 172q131-63 275-36 143 26 244 134.5t118 253.5zM448 1408q115 0 203-72.5t111-183.5h-314q-35 0-55-31-18-32-1-63l147-277q-47-13-91-13-132 0-226 94t-94 226 94 226 226 94zM1856 1408q132 0 226-94t94-226-94-226-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94z"
    }
  }]
};
exports.motorcycle = motorcycle;
var streetView = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 1536q0 63-61.5 113.5t-164 81-225 46-253.5 15.5-253.5-15.5-225-46-164-81-61.5-113.5q0-49 33-88.5t91-66.5 118-44.5 131-29.5q26-5 48 10.5t26 41.5q5 26-10.5 48t-41.5 26q-58 10-106 23.5t-76.5 25.5-48.5 23.5-27.5 19.5-8.5 12q3 11 27 26.5t73 33 114 32.5 160.5 25 201.5 10 201.5-10 160.5-25 114-33 73-33.5 27-27.5q-1-4-8.5-11t-27.5-19-48.5-23.5-76.5-25-106-23.5q-26-4-41.5-26t-10.5-48q4-26 26-41.5t48-10.5q71 12 131 29.5t118 44.5 91 66.5 33 88.5zM1024 640v384q0 26-19 45t-45 19h-64v384q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-384h-64q-26 0-45-19t-19-45v-384q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5zM928 256q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z"
    }
  }]
};
exports.streetView = streetView;
var heartbeat = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1024h305q-5 6-10 10.5t-9 7.5l-3 4-623 600q-18 18-44 18t-44-18l-624-602q-5-2-21-20h369q22 0 39.5-13.5t22.5-34.5l70-281 190 667q6 20 23 33t39 13q21 0 38-13t23-33l146-485 56 112q18 35 57 35zM1792 596q0 145-103 300h-369l-111-221q-8-17-25.5-27t-36.5-8q-45 5-56 46l-129 430-196-686q-6-20-23.5-33t-39.5-13-39 13.5-22 34.5l-116 464h-423q-103-155-103-300 0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"
    }
  }]
};
exports.heartbeat = heartbeat;
var venus = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 576q0 221-147.5 384.5t-364.5 187.5v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224-52.5-292q11-134 80.5-249t182-188 245.5-88q170-19 319 54t236 212 87 306zM128 576q0 185 131.5 316.5t316.5 131.5 316.5-131.5 131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5z"
    }
  }]
};
exports.venus = venus;
var mars = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1472 128q26 0 45 19t19 45v416q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-262l-382 383q126 156 126 359 0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5q203 0 359 126l382-382h-261q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h416zM576 1536q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.mars = mars;
var mercury = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M830 316q145 72 233.5 210.5t88.5 305.5q0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-217-24-364.5-187.5t-147.5-384.5q0-167 88.5-305.5t233.5-210.5q-165-96-228-273-6-16 3.5-29.5t26.5-13.5h69q21 0 29 20 44 106 140 171t214 65 214-65 140-171q8-20 37-20h61q17 0 26.5 13.5t3.5 29.5q-63 177-228 273zM576 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.mercury = mercury;
var intersex = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q126 158 126 359 0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-149-16-270.5-103t-186.5-223.5-53-291.5q16-204 160-353.5t347-172.5q118-14 228 19t198 103l255-254h-134q-14 0-23-9t-9-23v-64zM576 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.intersex = intersex;
var transgender = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q126 158 126 359 0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-149-16-270.5-103t-186.5-223.5-53-291.5q16-204 160-353.5t347-172.5q118-14 228 19t198 103l255-254h-134q-14 0-23-9t-9-23v-64zM576 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.transgender = transgender;
var transgenderAlt = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q126 158 126 359 0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-217-24-364.5-187.5t-147.5-384.5q0-201 126-359l-52-53-101 111q-9 10-22 10.5t-23-7.5l-48-44q-10-8-10.5-21.5t8.5-23.5l105-115-111-112v134q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-288q0-26 19-45t45-19h288q14 0 23 9t9 23v64q0 14-9 23t-23 9h-133l106 107 86-94q9-10 22-10.5t23 7.5l48 44q10 8 10.5 21.5t-8.5 23.5l-90 99 57 56q158-126 359-126t359 126l255-254h-134q-14 0-23-9t-9-23v-64zM832 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.transgenderAlt = transgenderAlt;
var venusDouble = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1790 529q12 155-52.5 292t-186 224-271.5 103v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-512v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224-52.5-292q17-206 164.5-356.5t352.5-169.5q206-21 377 94 171-115 377-94 205 19 352.5 169.5t164.5 356.5zM896 889q128-131 128-313t-128-313q-128 131-128 313t128 313zM576 1024q115 0 218-57-154-165-154-391 0-224 154-391-103-57-218-57-185 0-316.5 131.5t-131.5 316.5 131.5 316.5 316.5 131.5zM1152 1408v-260q-137-15-256-94-119 79-256 94v260h512zM1216 1024q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-115 0-218 57 154 167 154 391 0 226-154 391 103 57 218 57z"
    }
  }]
};
exports.venusDouble = venusDouble;
var marsDouble = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 416q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-31 182-166 312t-318 156q-210 29-384.5-80t-241.5-300q-117-6-221-57.5t-177.5-133-113.5-192.5-32-230q9-135 78-252t182-191.5 248-89.5q118-14 227.5 19t198.5 103l255-254h-134q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q59 74 93 169 182 9 328 124l255-254h-134q-14 0-23-9t-9-23v-64zM1024 832q0-20-4-58-162 25-271 150t-109 292q0 20 4 58 162-25 271-150t109-292zM128 832q0 168 111 294t276 149q-3-29-3-59 0-210 135-369.5t338-196.5q-53-120-163.5-193t-245.5-73q-185 0-316.5 131.5t-131.5 316.5zM1088 1664q185 0 316.5-131.5t131.5-316.5q0-168-111-294t-276-149q3 28 3 59 0 210-135 369.5t-338 196.5q53 120 163.5 193t245.5 73z"
    }
  }]
};
exports.marsDouble = marsDouble;
var venusMars = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-32 180-164.5 310t-313.5 157q-223 34-409-90-117 78-256 93v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-155-17-279.5-109.5t-187-237.5-39.5-307q25-187 159.5-322.5t320.5-164.5q224-34 410 90 146-97 320-97 201 0 359 126l255-254h-134q-14 0-23-9t-9-23v-64zM896 1145q128-131 128-313t-128-313q-128 131-128 313t128 313zM128 832q0 185 131.5 316.5t316.5 131.5q117 0 218-57-154-167-154-391t154-391q-101-57-218-57-185 0-316.5 131.5t-131.5 316.5zM1216 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-117 0-218 57 154 167 154 391t-154 391q101 57 218 57z"
    }
  }]
};
exports.venusMars = venusMars;
var marsStroke = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1472 128q26 0 45 19t19 45v416q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-262l-213 214 140 140q9 10 9 23t-9 22l-46 46q-9 9-22 9t-23-9l-140-141-78 79q126 156 126 359 0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5q203 0 359 126l78-78-172-172q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l172 172 213-213h-261q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h416zM576 1536q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.marsStroke = marsStroke;
var marsStrokeV = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 644q217 24 364.5 187.5t147.5 384.5q0 167-87 306t-236 212-319 54q-133-15-245.5-88t-182-188-80.5-249q-12-155 52.5-292t186-224 271.5-103v-132h-160q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h160v-165l-92 92q-10 9-23 9t-22-9l-46-46q-9-9-9-22t9-23l202-201q19-19 45-19t45 19l202 201q9 10 9 23t-9 22l-46 46q-9 9-22 9t-23-9l-92-92v165h160q14 0 23 9t9 23v64q0 14-9 23t-23 9h-160v132zM576 1664q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.marsStrokeV = marsStrokeV;
var marsStrokeH = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1901 915q19 19 19 45t-19 45l-294 294q-9 10-22.5 10t-22.5-10l-45-45q-10-9-10-22.5t10-22.5l185-185h-294v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-132q-24 217-187.5 364.5t-384.5 147.5q-167 0-306-87t-212-236-54-319q15-133 88-245.5t188-182 249-80.5q155-12 292 52.5t224 186 103 271.5h132v-224q0-14 9-23t23-9h64q14 0 23 9t9 23v224h294l-185-185q-10-9-10-22.5t10-22.5l45-45q9-10 22.5-10t22.5 10zM576 1408q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.marsStrokeH = marsStrokeH;
var neuter = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 576q0 221-147.5 384.5t-364.5 187.5v612q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-612q-217-24-364.5-187.5t-147.5-384.5q0-117 45.5-223.5t123-184 184-123 223.5-45.5 223.5 45.5 184 123 123 184 45.5 223.5zM576 1024q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
    }
  }]
};
exports.neuter = neuter;
var genderless = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 960q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1152 960q0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5 223.5 45.5 184 123 123 184 45.5 223.5z"
    }
  }]
};
exports.genderless = genderless;
var facebookOfficial = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1451 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-735q-35 0-60-25t-25-60v-1366q0-35 25-60t60-25h1366z"
    }
  }]
};
exports.facebookOfficial = facebookOfficial;
var pinterestP = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 597q0-108 37.5-203.5t103.5-166.5 152-123 185-78 202-26q158 0 294 66.5t221 193.5 85 287q0 96-19 188t-60 177-100 149.5-145 103-189 38.5q-68 0-135-32t-96-88q-10 39-28 112.5t-23.5 95-20.5 71-26 71-32 62.5-46 77.5-62 86.5l-14 5-9-10q-15-157-15-188 0-92 21.5-206.5t66.5-287.5 52-203q-32-65-32-169 0-83 52-156t132-73q61 0 95 40.5t34 102.5q0 66-44 191t-44 187q0 63 45 104.5t109 41.5q55 0 102-25t78.5-68 56-95 38-110.5 20-111 6.5-99.5q0-173-109.5-269.5t-285.5-96.5q-200 0-334 129.5t-134 328.5q0 44 12.5 85t27 65 27 45.5 12.5 30.5q0 28-15 73t-37 45q-2 0-17-3-51-15-90.5-56t-61-94.5-32.5-108-11-106.5z"
    }
  }]
};
exports.pinterestP = pinterestP;
var whatsapp = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M985 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zM782 1504q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zM782 122q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z"
    }
  }]
};
exports.whatsapp = whatsapp;
var server = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M128 1408h1024v-128h-1024v128zM128 896h1024v-128h-1024v128zM1696 1344q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM128 384h1024v-128h-1024v128zM1696 832q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1696 320q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1792 1152v384h-1792v-384h1792zM1792 640v384h-1792v-384h1792zM1792 128v384h-1792v-384h1792z"
    }
  }]
};
exports.server = server;
var userPlus = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 896q-159 0-271.5-112.5t-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5-112.5 271.5-271.5 112.5zM1664 1024h352q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-352v352q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-352h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-352q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v352zM928 1248q0 52 38 90t90 38h256v238q-68 50-171 50h-874q-121 0-194-69t-73-190q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q19 0 39 17 79 61 154.5 91.5t164.5 30.5 164.5-30.5 154.5-91.5q20-17 39-17 132 0 217 96h-223q-52 0-90 38t-38 90v192z"
    }
  }]
};
exports.userPlus = userPlus;
var userTimes = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 896q-159 0-271.5-112.5t-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5-112.5 271.5-271.5 112.5zM1781 1216l249 249q9 9 9 23 0 13-9 22l-136 136q-9 9-22 9-14 0-23-9l-249-249-249 249q-9 9-23 9-13 0-22-9l-136-136q-9-9-9-22 0-14 9-23l249-249-249-249q-9-9-9-23 0-13 9-22l136-136q9-9 22-9 14 0 23 9l249 249 249-249q9-9 23-9 13 0 22 9l136 136q9 9 9 22 0 14-9 23zM1283 1216l-181 181q-37 37-37 91 0 53 37 90l83 83q-21 3-44 3h-874q-121 0-194-69t-73-190q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q19 0 39 17 154 122 319 122t319-122q20-17 39-17 28 0 57 6-28 27-41 50t-13 56q0 54 37 91z"
    }
  }]
};
exports.userTimes = userTimes;
var bed = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1024h1728q26 0 45 19t19 45v448h-256v-256h-1536v256h-256v-1216q0-26 19-45t45-19h128q26 0 45 19t19 45v704zM832 704q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM2048 960v-64q0-159-112.5-271.5t-271.5-112.5h-704q-26 0-45 19t-19 45v384h1152z"
    }
  }]
};
exports.bed = bed;
var hotel = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1024h1728q26 0 45 19t19 45v448h-256v-256h-1536v256h-256v-1216q0-26 19-45t45-19h128q26 0 45 19t19 45v704zM832 704q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM2048 960v-64q0-159-112.5-271.5t-271.5-112.5h-704q-26 0-45 19t-19 45v384h1152z"
    }
  }]
};
exports.hotel = hotel;
var viacoin = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 0l-192 448h192v192h-274l-55 128h329v192h-411l-357 832-357-832h-411v-192h329l-55-128h-274v-192h192l-192-448h256l323 768h378l323-768h256zM768 1216l108-256h-216z"
    }
  }]
};
exports.viacoin = viacoin;
var train = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1088 0q185 0 316.5 93.5t131.5 226.5v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20h-1056q-22 0-30-20t8-35l213-202q-180-5-305.5-97t-125.5-222v-896q0-133 131.5-226.5t316.5-93.5h640zM768 1344q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM1344 768v-512h-1152v512h1152z"
    }
  }]
};
exports.train = train;
var subway = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1088 0q185 0 316.5 93.5t131.5 226.5v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20h-1056q-22 0-30-20t8-35l213-202q-180-5-305.5-97t-125.5-222v-896q0-133 131.5-226.5t316.5-93.5h640zM288 1312q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM704 768v-512h-544v512h544zM1248 1312q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM1408 768v-512h-576v512h576z"
    }
  }]
};
exports.subway = subway;
var medium = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zM661 522l534 866-534-266v-600zM1792 540v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zM1789 420q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z"
    }
  }]
};
exports.medium = medium;
var yCombinator = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 128v1536h-1536v-1536h1536z"
    }
  }]
};
exports.yCombinator = yCombinator;
var yc = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 128v1536h-1536v-1536h1536z"
    }
  }]
};
exports.yc = yc;
var optinMonster = {
  "viewBox": "0 0 2296 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M478 1675q-8 16-27 34.5t-37 25.5q-25 9-51.5-3.5t-28.5-31.5q-1-22 40-55t68-38q23-4 34 21.5t2 46.5zM1819 1675q7 16 26 34.5t38 25.5q25 9 51.5-3.5t27.5-31.5q2-22-39.5-55t-68.5-38q-22-4-33 21.5t-2 46.5zM1867 1566q13 27 56.5 59.5t77.5 41.5q45 13 82-4.5t37-50.5q0-46-67.5-100.5t-115.5-59.5q-40-5-63.5 37.5t-6.5 76.5zM428 1566q-13 27-56 59.5t-77 41.5q-45 13-82-4.5t-37-50.5q0-46 67.5-100.5t115.5-59.5q40-5 63 37.5t6 76.5zM1158 442h1q-41 0-76 15 27 8 44 30.5t17 49.5q0 35-27 60t-65 25q-52 0-80-43-5 23-5 42 0 74 56 126.5t135 52.5q80 0 136-52.5t56-126.5-56-126.5-136-52.5zM1462 224q-99-109-220.5-131.5t-245.5 44.5q27-60 82.5-96.5t118-39.5 121.5 17 99.5 74.5 44.5 131.5zM2212 1463q8 11-11 42 7 23 7 40 1 56-44.5 112.5t-109.5 91.5-118 37q-48 2-92-21.5t-66-65.5q-687 25-1259 0-23 41-66.5 65t-92.5 22q-86-3-179.5-80.5t-92.5-160.5q2-22 7-40-19-31-11-42 6-10 31-1 14-22 41-51-7-29 2-38 11-10 39 4 29-20 59-34 0-29 13-37 23-12 51 16 35-5 61 2 18 4 38 19v-73q-11 0-18-2-53-10-97-44.5t-55-87.5q-9-38 0-81 15-62 93-95 2-17 19-35.5t36-23.5 33 7.5 19 30.5h13q46 5 60 23 3 3 5 7 10-1 30.5-3.5t30.5-3.5q-15-11-30-17-23-40-91-43 0-6 1-10-62-2-118.5-18.5t-84.5-47.5q-32-36-42.5-92t-2.5-112q16-126 90-179 23-16 52-4.5t32 40.5q0 1 1.5 14t2.5 21 3 20 5.5 19 8.5 10q27 14 76 12 48-46 98-74-40-4-162 14l47-46q61-58 163-111 145-73 282-86-20-8-41-15.5t-47-14-42.5-10.5-47.5-11-43-10q595-126 904 139 98 84 158 222 85 10 121-9h1q5-3 8.5-10t5.5-19 3-19.5 3-21.5l1-14q3-28 32-40t52 5q73 52 91 178 7 57-3.5 113t-42.5 91q-28 32-83.5 48.5t-115.5 18.5v10q-71 2-95 43-14 5-31 17 11 1 32 3.5t30 3.5q1-5 5-8 16-18 60-23h13q5-18 19-30t33-8 36 23 19 36q79 32 93 95 9 40 1 81-12 53-56 88t-97 44q-10 2-17 2 0 49-1 73 20-15 38-19 26-7 61-2 28-28 51-16 14 9 14 37 33 16 59 34 27-13 38-4 10 10 2 38 28 30 41 51 23-8 31 1zM1937 511q0 29-9 54 82 32 112 132 4-37-9.5-98.5t-41.5-90.5q-20-19-36-17t-16 20zM1859 611q35 42 47.5 108.5t-0.5 124.5q67-13 97-45 13-14 18-28-3-64-31-114.5t-79-66.5q-15 15-52 21zM1822 615q-30 0-44-1 42 115 53 239 21 0 43-3 16-68 1-135t-53-100zM258 697q30-100 112-132-9-25-9-54 0-18-16.5-20t-35.5 17q-28 29-41.5 90.5t-9.5 98.5zM294 799q29 31 97 45-13-58-0.5-124.5t47.5-108.5v0q-37-6-52-21-51 16-78.5 66t-31.5 115q9 17 18 28zM471 853q14-124 73-235-19 4-55 18l-45 19v-1q-46 89-20 196 25 3 47 3zM1434 892q8 38 16.5 108.5t11.5 89.5q3 18 9.5 21.5t23.5-4.5q40-20 62-85.5t23-125.5q-24-2-146-4zM1152 251q-116 0-199 82.5t-83 198.5q0 117 83 199.5t199 82.5 199-82.5 83-199.5q0-116-83-198.5t-199-82.5zM1380 890q-105-2-211 0v-1q-1 27 2.5 86t13.5 66q29 14 93.5 14.5t95.5-10.5q9-3 11-39t-0.5-69.5-4.5-46.5zM1112 1089q8-4 9.5-48t-0.5-88-4-63v-1q-212 3-214 3-4 20-7 62t0 83 14 46q34 15 101 16t101-10zM718 900q-16 59 4.5 118.5t77.5 84.5q15 8 24 5t12-21q3-16 8-90t10-103q-69 2-136 6zM591 1026q3 23-34 36 132 141 271.5 240t305.5 154q172-49 310.5-146t293.5-250q-33-13-30-34 0-2 0.5-3.5t1.5-3 1-2.5v-1 1q-17-2-50-5.5t-48-4.5q-26 90-82 132-51 38-82-1-5-6-9-14-7-13-17-62-2 5-5 9t-7.5 7-8 5.5-9.5 4l-10 2.5t-12 2l-12 1.5t-13.5 1-13.5 0.5q-106 9-163-11-4 17-10 26.5t-21 15-23 7-36 3.5q-6 1-9 1-179 17-203-40-2 63-56 54-47-8-91-54-12-13-20-26-17-29-26-65-58 6-87 10 1 2 4 10zM507 1654q3-14 3-30-17-71-51-130t-73-70q-41-12-101.5 14.5t-104.5 80-39 107.5q35 53 100 93t119 42q51 2 94-28t53-79zM510 1483q23 63 27 119 195-113 392-174-98-52-180.5-120t-179.5-165q-6 4-29 13 0 1-1 4t-1 5q31 18 22 37-12 23-56 34-10 13-29 24h-1q-2 83 1 150 19 34 35 73zM579 1649q532 21 1145 0-254-147-428-196-76 35-156 57-8 3-16 0-65-21-129-49-208 60-416 188h-1v1q1 0 1-1zM1763 1603q4-54 28-120 14-38 33-71l-1 1q3-77 3-153-15-8-30-25-42-9-56-33-9-20 22-38-2-4-2-9-16-4-28-12-204 190-383 284 198 59 414 176zM2155 1626q5-54-39-107.5t-104-80-102-14.5q-38 11-72.5 70.5t-51.5 129.5q0 16 3 30 10 49 53 79t94 28q54-2 119-42t100-93z"
    }
  }]
};
exports.optinMonster = optinMonster;
var opencart = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1524 1561q0 68-48 116t-116 48-116.5-48-48.5-116 48.5-116.5 116.5-48.5 116 48.5 48 116.5zM775 1561q0 68-48.5 116t-116.5 48-116-48-48-116 48-116.5 116-48.5 116.5 48.5 48.5 116.5zM0 67q57 60 110.5 104.5t121 82 136 63 166 45.5 200 31.5 250 18.5 304 9.5 372.5 2.5q139 0 244.5 5t181 16.5 124 27.5 71 39.5 24 51.5-19.5 64-56.5 76.5-89.5 91-116 104.5-139 119q-185 157-286 247 29-51 76.5-109t94-105.5 94.5-98.5 83-91.5 54-80.5 13-70-45.5-55.5-116.5-41-204-23.5-304-5q-168 2-314-6t-256-23-204.5-41-159.5-51.5-122.5-62.5-91.5-66.5-68-71.5-50.5-69.5-40-68-36.5-59.5z"
    }
  }]
};
exports.opencart = opencart;
var expeditedssl = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 64q-169 0-323 66t-265.5 177.5-177.5 265.5-66 323 66 323 177.5 265.5 265.5 177.5 323 66 323-66 265.5-177.5 177.5-265.5 66-323-66-323-177.5-265.5-265.5-177.5-323-66zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM496 832q16 0 16 16v480q0 16-16 16h-32q-16 0-16-16v-480q0-16 16-16h32zM896 896q53 0 90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46v114q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-114q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5zM896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM544 608v96q0 14 9 23t23 9h64q14 0 23-9t9-23v-96q0-93 65.5-158.5t158.5-65.5 158.5 65.5 65.5 158.5v96q0 14 9 23t23 9h64q14 0 23-9t9-23v-96q0-146-103-249t-249-103-249 103-103 249zM1408 1344v-512q0-26-19-45t-45-19h-896q-26 0-45 19t-19 45v512q0 26 19 45t45 19h896q26 0 45-19t19-45z"
    }
  }]
};
exports.expeditedssl = expeditedssl;
var battery = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1920 512v768h-1664v-768h1664zM2048 1088h128v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288zM2304 704v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160q53 0 90.5 37.5t37.5 90.5z"
    }
  }]
};
exports.battery = battery;
var battery4 = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1920 512v768h-1664v-768h1664zM2048 1088h128v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288zM2304 704v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160q53 0 90.5 37.5t37.5 90.5z"
    }
  }]
};
exports.battery4 = battery4;
var batteryFull = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1920 512v768h-1664v-768h1664zM2048 1088h128v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288zM2304 704v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160q53 0 90.5 37.5t37.5 90.5z"
    }
  }]
};
exports.batteryFull = batteryFull;
var battery3 = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1280v-768h1280v768h-1280zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.battery3 = battery3;
var batteryThreeQuarters = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1280v-768h1280v768h-1280zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.batteryThreeQuarters = batteryThreeQuarters;
var battery2 = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1280v-768h896v768h-896zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.battery2 = battery2;
var batteryHalf = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1280v-768h896v768h-896zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.batteryHalf = batteryHalf;
var battery1 = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1280v-768h512v768h-512zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.battery1 = battery1;
var batteryQuarter = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1280v-768h512v768h-512zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.batteryQuarter = batteryQuarter;
var battery0 = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.battery0 = battery0;
var batteryEmpty = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"
    }
  }]
};
exports.batteryEmpty = batteryEmpty;
var mousePointer = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1133 1043q31 30 14 69-17 40-59 40h-382l201 476q10 25 0 49t-34 35l-177 75q-25 10-49 0t-35-34l-191-452-312 312q-19 19-45 19-12 0-24-5-40-17-40-59v-1504q0-42 40-59 12-5 24-5 27 0 45 19z"
    }
  }]
};
exports.mousePointer = mousePointer;
var iCursor = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M832 128q-320 0-320 224v416h128v128h-128v544q0 224 320 224h64v128h-64q-272 0-384-146-112 146-384 146h-64v-128h64q320 0 320-224v-544h-128v-128h128v-416q0-224-320-224h-64v-128h64q272 0 384 146 112-146 384-146h64v128h-64z"
    }
  }]
};
exports.iCursor = iCursor;
var objectGroup = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2048 384h-128v1024h128v384h-384v-128h-1280v128h-384v-384h128v-1024h-128v-384h384v128h1280v-128h384v384zM1792 128v128h128v-128h-128zM128 128v128h128v-128h-128zM256 1664v-128h-128v128h128zM1664 1536v-128h128v-1024h-128v-128h-1280v128h-128v1024h128v128h1280zM1920 1664v-128h-128v128h128zM1280 640h384v768h-896v-256h-384v-768h896v256zM512 1024h640v-512h-640v512zM1536 1280v-512h-256v384h-384v128h640z"
    }
  }]
};
exports.objectGroup = objectGroup;
var objectUngroup = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2304 768h-128v640h128v384h-384v-128h-896v128h-384v-384h128v-128h-384v128h-384v-384h128v-640h-128v-384h384v128h896v-128h384v384h-128v128h384v-128h384v384zM2048 512v128h128v-128h-128zM1408 128v128h128v-128h-128zM128 128v128h128v-128h-128zM256 1280v-128h-128v128h128zM1536 1152h-128v128h128v-128zM384 1152h896v-128h128v-640h-128v-128h-896v128h-128v640h128v128zM896 1664v-128h-128v128h128zM2176 1664v-128h-128v128h128zM2048 1408v-640h-128v-128h-384v384h128v384h-384v-128h-384v128h128v128h896v-128h128z"
    }
  }]
};
exports.objectUngroup = objectUngroup;
var stickyNote = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1248v416h-928q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1344q40 0 68 28t28 68v928h-416q-40 0-68 28t-28 68zM1152 1280h381q-15 82-65 132l-184 184q-50 50-132 65v-381z"
    }
  }]
};
exports.stickyNote = stickyNote;
var stickyNoteO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1400 1280h-248v248q29-10 41-22l185-185q12-12 22-41zM1120 1152h288v-896h-1280v1280h896v-288q0-40 28-68t68-28zM1536 224v1024q0 40-20 88t-48 76l-184 184q-28 28-76 48t-88 20h-1024q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1344q40 0 68 28t28 68z"
    }
  }]
};
exports.stickyNoteO = stickyNoteO;
var ccJcb = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1951 998q0 26-15.5 44.5t-38.5 23.5q-8 2-18 2h-153v-140h153q10 0 18 2 23 5 38.5 23.5t15.5 44.5zM1933 785q0 25-15 42t-38 21q-3 1-15 1h-139v-129h139q3 0 8.5 0.5t6.5 0.5q23 4 38 21.5t15 42.5zM728 949v-308h-228v308q0 58-38 94.5t-105 36.5q-108 0-229-59v112q53 15 121 23t109 9l42 1q328 0 328-217zM1442 1133v-113q-99 52-200 59-108 8-169-41t-61-142 61-142 169-41q101 7 200 58v-112q-48-12-100-19.5t-80-9.5l-28-2q-127-6-218.5 14t-140.5 60-71 88-22 106 22 106 71 88 140.5 60 218.5 14q101-4 208-31zM2176 1018q0-54-43-88.5t-109-39.5v-3q57-8 89-41.5t32-79.5q0-55-41-88t-107-36q-3 0-12-0.5t-14-0.5h-455v510h491q74 0 121.5-36.5t47.5-96.5zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
    }
  }]
};
exports.ccJcb = ccJcb;
var ccDinersClub = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M858 1241v-693q-106 41-172 135.5t-66 211.5 66 211.5 172 134.5zM1362 895q0-117-66-211.5t-172-135.5v694q106-41 172-135.5t66-211.5zM1577 895q0 159-78.5 294t-213.5 213.5-294 78.5q-119 0-227.5-46.5t-187-125-125-187-46.5-227.5q0-159 78.5-294t213.5-213.5 294-78.5 294 78.5 213.5 213.5 78.5 294zM1960 902q0-139-55.5-261.5t-147.5-205.5-213.5-131-252.5-48h-301q-176 0-323.5 81t-235 230-87.5 335q0 171 87 317.5t236 231.5 323 85h301q129 0 251.5-50.5t214.5-135 147.5-202.5 55.5-246zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
    }
  }]
};
exports.ccDinersClub = ccDinersClub;
var clone = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 1632v-1088q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5v1088q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5zM1792 544v1088q0 66-47 113t-113 47h-1088q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1088q66 0 113 47t47 113zM1408 160v160h-128v-160q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5v1088q0 13 9.5 22.5t22.5 9.5h160v128h-160q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1088q66 0 113 47t47 113z"
    }
  }]
};
exports.clone = clone;
var balanceScale = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1728 448l-384 704h768zM448 448l-384 704h768zM1269 256q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zM1088 272q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zM2176 1152q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zM896 1152q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z"
    }
  }]
};
exports.balanceScale = balanceScale;
var hourglassO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM874 836q77-29 149-92.5t129.5-152.5 92.5-210 35-253h-1024q0 132 35 253t92.5 210 129.5 152.5 149 92.5q19 7 30.5 23.5t11.5 36.5-11.5 36.5-30.5 23.5q-77 29-149 92.5t-129.5 152.5-92.5 210-35 253h1024q0-132-35-253t-92.5-210-129.5-152.5-149-92.5q-19-7-30.5-23.5t-11.5-36.5 11.5-36.5 30.5-23.5z"
    }
  }]
};
exports.hourglassO = hourglassO;
var hourglass1 = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 66 9 128h1006q9-61 9-128zM1280 1664q0-130-34-249.5t-90.5-208-126.5-152-146-94.5h-230q-76 31-146 94.5t-126.5 152-90.5 208-34 249.5h1024z"
    }
  }]
};
exports.hourglass1 = hourglass1;
var hourglassStart = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 66 9 128h1006q9-61 9-128zM1280 1664q0-130-34-249.5t-90.5-208-126.5-152-146-94.5h-230q-76 31-146 94.5t-126.5 152-90.5 208-34 249.5h1024z"
    }
  }]
};
exports.hourglassStart = hourglassStart;
var hourglass2 = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 206 85 384h854q85-178 85-384zM1223 1344q-54-141-145.5-241.5t-194.5-142.5h-230q-103 42-194.5 142.5t-145.5 241.5h910z"
    }
  }]
};
exports.hourglass2 = hourglass2;
var hourglassHalf = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 206 85 384h854q85-178 85-384zM1223 1344q-54-141-145.5-241.5t-194.5-142.5h-230q-103 42-194.5 142.5t-145.5 241.5h910z"
    }
  }]
};
exports.hourglassHalf = hourglassHalf;
var hourglass3 = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM874 836q77-29 149-92.5t129.5-152.5 92.5-210 35-253h-1024q0 132 35 253t92.5 210 129.5 152.5 149 92.5q19 7 30.5 23.5t11.5 36.5-11.5 36.5-30.5 23.5q-137 51-244 196h700q-107-145-244-196-19-7-30.5-23.5t-11.5-36.5 11.5-36.5 30.5-23.5z"
    }
  }]
};
exports.hourglass3 = hourglass3;
var hourglassEnd = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM874 836q77-29 149-92.5t129.5-152.5 92.5-210 35-253h-1024q0 132 35 253t92.5 210 129.5 152.5 149 92.5q19 7 30.5 23.5t11.5 36.5-11.5 36.5-30.5 23.5q-137 51-244 196h700q-107-145-244-196-19-7-30.5-23.5t-11.5-36.5 11.5-36.5 30.5-23.5z"
    }
  }]
};
exports.hourglassEnd = hourglassEnd;
var hourglass = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1504 1600q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472zM130 1536q3-55 16-107t30-95 46-87 53.5-76 64.5-69.5 66-60 70.5-55 66.5-47.5 65-43q-43-28-65-43t-66.5-47.5-70.5-55-66-60-64.5-69.5-53.5-76-46-87-30-95-16-107h1276q-3 55-16 107t-30 95-46 87-53.5 76-64.5 69.5-66 60-70.5 55-66.5 47.5-65 43q43 28 65 43t66.5 47.5 70.5 55 66 60 64.5 69.5 53.5 76 46 87 30 95 16 107h-1276zM1504 0q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472z"
    }
  }]
};
exports.hourglass = hourglass;
var handGrabO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 384q-53 0-90.5 37.5t-37.5 90.5v128h-32v-93q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v429l-32-30v-172q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v224q0 47 35 82l310 296q39 39 39 102 0 26 19 45t45 19h640q26 0 45-19t19-45v-25q0-41 10-77l108-436q10-36 10-77v-246q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v32h-32v-125q0-40-25-72.5t-64-40.5q-14-2-23-2-46 0-79 33t-33 79v128h-32v-122q0-51-32.5-89.5t-82.5-43.5q-5-1-13-1zM768 256q84 0 149 50 57-34 123-34 59 0 111 27t86 76q27-7 59-7 100 0 170 71.5t70 171.5v246q0 51-13 108l-109 436q-6 24-6 71 0 80-56 136t-136 56h-640q-84 0-138-58.5t-54-142.5l-308-296q-76-73-76-175v-224q0-99 70.5-169.5t169.5-70.5q11 0 16 1 6-95 75.5-160t164.5-65q52 0 98 21 72-69 174-69z"
    }
  }]
};
exports.handGrabO = handGrabO;
var handRockO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 384q-53 0-90.5 37.5t-37.5 90.5v128h-32v-93q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v429l-32-30v-172q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v224q0 47 35 82l310 296q39 39 39 102 0 26 19 45t45 19h640q26 0 45-19t19-45v-25q0-41 10-77l108-436q10-36 10-77v-246q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v32h-32v-125q0-40-25-72.5t-64-40.5q-14-2-23-2-46 0-79 33t-33 79v128h-32v-122q0-51-32.5-89.5t-82.5-43.5q-5-1-13-1zM768 256q84 0 149 50 57-34 123-34 59 0 111 27t86 76q27-7 59-7 100 0 170 71.5t70 171.5v246q0 51-13 108l-109 436q-6 24-6 71 0 80-56 136t-136 56h-640q-84 0-138-58.5t-54-142.5l-308-296q-76-73-76-175v-224q0-99 70.5-169.5t169.5-70.5q11 0 16 1 6-95 75.5-160t164.5-65q52 0 98 21 72-69 174-69z"
    }
  }]
};
exports.handRockO = handRockO;
var handPaperO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M880 128q-46 0-79 33t-33 79v656h-32v-528q0-46-33-79t-79-33-79 33-33 79v528 256l-154-205q-38-51-102-51-53 0-90.5 37.5t-37.5 90.5q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59v-498q0-46-33-79t-79-33-79 33-33 79v272h-32v-528q0-46-33-79t-79-33-79 33-33 79v528h-32v-656q0-46-33-79t-79-33zM880 0q68 0 125.5 35.5t88.5 96.5q19-4 42-4 99 0 169.5 70.5t70.5 169.5v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52h-688q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-106 75-181t181-75q78 0 128 34v-434q0-99 70.5-169.5t169.5-70.5q23 0 42 4 31-61 88.5-96.5t125.5-35.5z"
    }
  }]
};
exports.handPaperO = handPaperO;
var handStopO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M880 128q-46 0-79 33t-33 79v656h-32v-528q0-46-33-79t-79-33-79 33-33 79v528 256l-154-205q-38-51-102-51-53 0-90.5 37.5t-37.5 90.5q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59v-498q0-46-33-79t-79-33-79 33-33 79v272h-32v-528q0-46-33-79t-79-33-79 33-33 79v528h-32v-656q0-46-33-79t-79-33zM880 0q68 0 125.5 35.5t88.5 96.5q19-4 42-4 99 0 169.5 70.5t70.5 169.5v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52h-688q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-106 75-181t181-75q78 0 128 34v-434q0-99 70.5-169.5t169.5-70.5q23 0 42 4 31-61 88.5-96.5t125.5-35.5z"
    }
  }]
};
exports.handStopO = handStopO;
var handScissorsO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1073 1664h-177q-163 0-226-141-23-49-23-102v-5q-62-30-98.5-88.5t-36.5-127.5q0-38 5-48h-261q-106 0-181-75t-75-181 75-181 181-75h113l-44-17q-74-28-119.5-93.5t-45.5-145.5q0-106 75-181t181-75q46 0 91 17l628 239h401q106 0 181 75t75 181v668q0 88-54 157.5t-140 90.5l-339 85q-92 23-186 23zM1024 953l-155 71-163 74q-30 14-48 41.5t-18 60.5q0 46 33 79t79 33q26 0 46-10l338-154q-49-10-80.5-50t-31.5-90v-55zM1344 1264q0-46-33-79t-79-33q-26 0-46 10l-290 132q-28 13-37 17t-30.5 17-29.5 23.5-16 29-8 40.5q0 50 31.5 82t81.5 32q20 0 38-9l352-160q30-14 48-41.5t18-60.5zM1112 512l-650-248q-24-8-46-8-53 0-90.5 37.5t-37.5 90.5q0 40 22.5 73t59.5 47l526 200v64h-640q-53 0-90.5 37.5t-37.5 90.5 37.5 90.5 90.5 37.5h535l233-106v-198q0-63 46-106l111-102h-69zM1073 1536q82 0 155-19l339-85q43-11 70-45.5t27-78.5v-668q0-53-37.5-90.5t-90.5-37.5h-308l-136 126q-36 33-36 82v296q0 46 33 77t79 31 79-35 33-81v-208h32v208q0 70-57 114 52 8 86.5 48.5t34.5 93.5q0 42-23 78t-61 53l-310 141h91z"
    }
  }]
};
exports.handScissorsO = handScissorsO;
var handLizardO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1151 0q61 0 116 28t91 77l572 781q118 159 118 359v355q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-177l-286-143h-546q-80 0-136-56t-56-136v-32q0-119 84.5-203.5t203.5-84.5h420l42-128h-686q-100 0-173.5-67.5t-81.5-166.5q-65-79-65-182v-32q0-80 56-136t136-56h959zM1920 1600v-355q0-157-93-284l-573-781q-39-52-103-52h-959q-26 0-45 19t-19 45q0 32 1.5 49.5t9.5 40.5 25 43q10-31 35.5-50t56.5-19h832v32h-832q-26 0-45 19t-19 45q0 44 3 58 8 44 44 73t81 29h640 91q40 0 68 28t28 68q0 15-5 30l-64 192q-10 29-35 47.5t-56 18.5h-443q-66 0-113 47t-47 113v32q0 26 19 45t45 19h561q16 0 29 7l317 158q24 13 38.5 36t14.5 50v197q0 26 19 45t45 19h384q26 0 45-19t19-45z"
    }
  }]
};
exports.handLizardO = handLizardO;
var handSpockO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M459 1792q-77 0-137.5-47.5t-79.5-122.5l-101-401q-13-57-13-108 0-45-5-67l-116-477q-7-27-7-57 0-93 62-161t155-78q17-85 82.5-139t152.5-54q83 0 148 51.5t85 132.5l83 348 103-428q20-81 85-132.5t148-51.5q89 0 155.5 57.5t80.5 144.5q92 10 152 79t60 162q0 24-7 59l-123 512q10-7 37.5-28.5t38.5-29.5 35-23 41-20.5 41.5-11 49.5-5.5q105 0 180 74t75 179q0 62-28.5 118t-78.5 94l-507 380q-68 51-153 51h-694zM1104 128q-38 0-68.5 24t-39.5 62l-164 682h-127l-145-602q-9-38-39.5-62t-68.5-24q-48 0-80 33t-32 80q0 15 3 28l132 547h-26l-99-408q-9-37-40-62.5t-69-25.5q-47 0-80 33t-33 79q0 14 3 26l116 478q7 28 9 86t10 88l100 401q8 32 34 52.5t59 20.5h694q42 0 76-26l507-379q56-43 56-110 0-52-37.5-88.5t-89.5-36.5q-43 0-77 26l-307 230v-227q0-4 32-138t68-282 39-161q4-18 4-29 0-47-32-81t-79-34q-39 0-69.5 24t-39.5 62l-116 482h-26l150-624q3-14 3-28 0-48-31.5-82t-79.5-34z"
    }
  }]
};
exports.handSpockO = handSpockO;
var handPointerO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 128q-53 0-90.5 37.5t-37.5 90.5v512 384l-151-202q-41-54-107-54-52 0-89 38t-37 90q0 43 26 77l384 512q38 51 102 51h718q22 0 39.5-13.5t22.5-34.5l92-368q24-96 24-194v-217q0-41-28-71t-68-30-68 28-28 68h-32v-61q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v64h-32v-90q0-55-37-94.5t-91-39.5q-53 0-90.5 37.5t-37.5 90.5v96h-32v-570q0-55-37-94.5t-91-39.5zM640 0q107 0 181.5 77.5t74.5 184.5v220q22-2 32-2 99 0 173 69 47-21 99-21 113 0 184 87 27-7 56-7 94 0 159 67.5t65 161.5v217q0 116-28 225l-92 368q-16 64-68 104.5t-118 40.5h-718q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-105 74.5-180.5t179.5-75.5q71 0 130 35v-547q0-106 75-181t181-75zM768 1408v-384h-32v384h32zM1024 1408v-384h-32v384h32zM1280 1408v-384h-32v384h32z"
    }
  }]
};
exports.handPointerO = handPointerO;
var handPeaceO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1288 647q60 0 107 23 141 63 141 226v177q0 94-23 186l-85 339q-21 86-90.5 140t-157.5 54h-668q-106 0-181-75t-75-181v-401l-239-628q-17-45-17-91 0-106 75-181t181-75q80 0 145.5 45.5t93.5 119.5l17 44v-113q0-106 75-181t181-75 181 75 75 181v261q27-5 48-5 69 0 127.5 36.5t88.5 98.5zM1072 640q-33 0-60.5 18t-41.5 48l-74 163-71 155h55q50 0 90 31.5t50 80.5l154-338q10-20 10-46 0-46-33-79t-79-33zM1293 775q-22 0-40.5 8t-29 16-23.5 29.5-17 30.5-17 37l-132 290q-10 20-10 46 0 46 33 79t79 33q33 0 60.5-18t41.5-48l160-352q9-18 9-38 0-50-32-81.5t-82-31.5zM128 416q0 22 8 46l248 650v69l102-111q43-46 106-46h198l106-233v-535q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5v640h-64l-200-526q-14-37-47-59.5t-73-22.5q-53 0-90.5 37.5t-37.5 90.5zM1180 1664q44 0 78.5-27t45.5-70l85-339q19-73 19-155v-91l-141 310q-17 38-53 61t-78 23q-53 0-93.5-34.5t-48.5-86.5q-44 57-114 57h-208v-32h208q46 0 81-33t35-79-31-79-77-33h-296q-49 0-82 36l-126 136v308q0 53 37.5 90.5t90.5 37.5h668z"
    }
  }]
};
exports.handPeaceO = handPeaceO;
var trademark = {
  "viewBox": "0 0 1973 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M857 544v117q0 13-9.5 22t-22.5 9h-298v812q0 13-9 22.5t-22 9.5h-135q-13 0-22.5-9t-9.5-23v-812h-297q-13 0-22.5-9t-9.5-22v-117q0-14 9-23t23-9h793q13 0 22.5 9.5t9.5 22.5zM1895 541l77 961q1 13-8 24-10 10-23 10h-134q-12 0-21-8.5t-10-20.5l-46-588-189 425q-8 19-29 19h-120q-20 0-29-19l-188-427-45 590q-1 12-10 20.5t-21 8.5h-135q-13 0-23-10-9-10-9-24l78-961q1-12 10-20.5t21-8.5h142q20 0 29 19l220 520q10 24 20 51 3-7 9.5-24.5t10.5-26.5l221-520q9-19 29-19h141q13 0 22 8.5t10 20.5z"
    }
  }]
};
exports.trademark = trademark;
var registered = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1042 703q0-88-60-121-33-18-117-18h-123v281h162q66 0 102-37t36-105zM1094 988l205 373q8 17-1 31-8 16-27 16h-152q-20 0-28-17l-194-365h-155v350q0 14-9 23t-23 9h-134q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h294q128 0 190 24 85 31 134 109t49 180q0 92-42.5 165.5t-115.5 109.5q6 10 9 16zM896 160q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.registered = registered;
var creativeCommons = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M605 1233q153 0 257-104 14-18 3-36l-45-82q-6-13-24-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13.5-23.5 14.5-28.5 13-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-148 0-246 96.5t-98 240.5q0 146 97 241.5t247 95.5zM1235 1233q153 0 257-104 14-18 4-36l-45-82q-8-14-25-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13.5-23.5 14.5-28.5 13-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-147 0-245.5 96.5t-98.5 240.5q0 146 97 241.5t247 95.5zM896 160q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71z"
    }
  }]
};
exports.creativeCommons = creativeCommons;
var gg = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M736 800l384 384-384 384-672-672 672-672 168 168-96 96-72-72-480 480 480 480 193-193-289-287zM1312 224l672 672-672 672-168-168 96-96 72 72 480-480-480-480-193 193 289 287-96 96-384-384z"
    }
  }]
};
exports.gg = gg;
var ggCircle = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M717 1354l271-271-279-279-88 88 192 191-96 96-279-279 279-279 40 40 87-87-127-128-454 454zM1075 1346l454-454-454-454-271 271 279 279 88-88-192-191 96-96 279 279-279 279-40-40-87 88zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.ggCircle = ggCircle;
var tripadvisor = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M651 997q0 39-27.5 66.5t-65.5 27.5q-39 0-66.5-27.5t-27.5-66.5q0-38 27.5-65.5t66.5-27.5q38 0 65.5 27.5t27.5 65.5zM1805 996q0 39-27.5 66.5t-66.5 27.5-66.5-27.5-27.5-66.5 27.5-66 66.5-27 66.5 27 27.5 66zM765 997q0-79-56.5-136t-136.5-57-136.5 56.5-56.5 136.5 56.5 136.5 136.5 56.5 136.5-56.5 56.5-136.5zM1918 996q0-80-56.5-136.5t-136.5-56.5q-79 0-136 56.5t-57 136.5 56.5 136.5 136.5 56.5 136.5-56.5 56.5-136.5zM850 997q0 116-81.5 197.5t-196.5 81.5q-116 0-197.5-82t-81.5-197 82-196.5 197-81.5 196.5 81.5 81.5 196.5zM2004 996q0 115-81.5 196.5t-197.5 81.5q-115 0-196.5-81.5t-81.5-196.5 81.5-196.5 196.5-81.5q116 0 197.5 81.5t81.5 196.5zM1040 999q0-191-135.5-326.5t-326.5-135.5q-125 0-231 62t-168 168.5-62 231.5 62 231.5 168 168.5 231 62q191 0 326.5-135.5t135.5-326.5zM1708 426q-254-111-556-111-319 0-573 110 117 0 223 45.5t182.5 122.5 122 183 45.5 223q0-115 43.5-219.5t118-180.5 177.5-123 217-50zM2187 999q0-191-135-326.5t-326-135.5-326.5 135.5-135.5 326.5 135.5 326.5 326.5 135.5 326-135.5 135-326.5zM1921 433h383q-44 51-75 114.5t-40 114.5q110 151 110 337 0 156-77 288t-209 208.5-287 76.5q-133 0-249-56t-196-155q-47 56-129 179-11-22-53.5-82.5t-74.5-97.5q-80 99-196.5 155.5t-249.5 56.5q-155 0-287-76.5t-209-208.5-77-288q0-186 110-337-9-51-40-114.5t-75-114.5h365q149-100 355-156.5t432-56.5q224 0 421 56t348 157z"
    }
  }]
};
exports.tripadvisor = tripadvisor;
var odnoklassniki = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 907q-188 0-321-133t-133-320q0-188 133-321t321-133 321 133 133 321q0 187-133 320t-321 133zM640 230q-92 0-157.5 65.5t-65.5 158.5q0 92 65.5 157.5t157.5 65.5 157.5-65.5 65.5-157.5q0-93-65.5-158.5t-157.5-65.5zM1163 962q13 27 15 49.5t-4.5 40.5-26.5 38.5-42.5 37-61.5 41.5q-115 73-315 94l73 72 267 267q30 31 30 74t-30 73l-12 13q-31 30-74 30t-74-30q-67-68-267-268l-267 268q-31 30-74 30t-73-30l-12-13q-31-30-31-73t31-74l267-267 72-72q-203-21-317-94-39-25-61.5-41.5t-42.5-37-26.5-38.5-4.5-40.5 15-49.5q10-20 28-35t42-22 56 2 65 35q5 4 15 11t43 24.5 69 30.5 92 24 113 11q91 0 174-25.5t120-50.5l38-25q33-26 65-35t56-2 42 22 28 35z"
    }
  }]
};
exports.odnoklassniki = odnoklassniki;
var odnoklassnikiSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M927 580q0 66-46.5 112.5t-112.5 46.5-112.5-46.5-46.5-112.5 46.5-112.5 112.5-46.5 112.5 46.5 46.5 112.5zM1141 943q-10-20-28-32t-47.5-9.5-60.5 27.5q-10 8-29 20t-81 32-127 20-124-18-86-36l-27-18q-31-25-60.5-27.5t-47.5 9.5-28 32q-22 45-2 74.5t87 73.5q83 53 226 67l-51 52q-142 142-191 190-22 22-22 52.5t22 52.5l9 9q22 22 52.5 22t52.5-22l191-191q114 115 191 191 22 22 52.5 22t52.5-22l9-9q22-22 22-52.5t-22-52.5l-191-190-52-52q141-14 225-67 67-44 87-73.5t-2-74.5zM1092 580q0-134-95-229t-229-95-229 95-95 229 95 229 229 95 229-95 95-229zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.odnoklassnikiSquare = odnoklassnikiSquare;
var getPocket = {
  "viewBox": "0 0 1720 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1565 128q65 0 110 45.5t45 110.5v519q0 176-68 336t-182.5 275-274 182.5-334.5 67.5q-176 0-335.5-67.5t-274.5-182.5-183-275-68-336v-519q0-64 46-110t110-46h1409zM861 1192q47 0 82-33l404-388q37-35 37-85 0-49-34.5-83.5t-83.5-34.5q-47 0-82 33l-323 310-323-310q-35-33-81-33-49 0-83.5 34.5t-34.5 83.5q0 51 36 85l405 388q33 33 81 33z"
    }
  }]
};
exports.getPocket = getPocket;
var wikipediaW = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1494 1639l-295-695q-25 49-158.5 305.5t-198.5 389.5q-1 1-27.5 0.5t-26.5-1.5q-82-193-255.5-587t-259.5-596q-21-50-66.5-107.5t-103.5-100.5-102-43q0-5-0.5-24t-0.5-27h583v50q-39 2-79.5 16t-66.5 43-10 64q26 59 216.5 499t235.5 540q31-61 140-266.5t131-247.5q-19-39-126-281t-136-295q-38-69-201-71v-50l513 1v47q-60 2-93.5 25t-12.5 69q33 70 87 189.5t86 187.5q110-214 173-363 24-55-10-79.5t-129-26.5q1-7 1-25v-24q64 0 170.5-0.5t180-1 92.5-0.5v49q-62 2-119 33t-90 81l-213 442q13 33 127.5 290t121.5 274l441-1017q-14-38-49.5-62.5t-65-31.5-55.5-8v-50l460 4 1 2-1 44q-139 4-201 145-526 1216-559 1291h-49z"
    }
  }]
};
exports.wikipediaW = wikipediaW;
var safari = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M949 893q0 26-16.5 45t-41.5 19q-26 0-45-16.5t-19-41.5q0-26 17-45t42-19 44 16.5 19 41.5zM964 951l350-581q-9 8-67.5 62.5t-125.5 116.5-136.5 127-117 110.5-50.5 51.5l-349 580q7-7 67-62t126-116.5 136-127 117-111 50-50.5zM1611 896q0 201-104 371-3-2-17-11t-26.5-16.5-16.5-7.5q-13 0-13 13 0 10 59 44-74 112-184.5 190.5t-241.5 110.5l-16-67q-1-10-15-10-5 0-8 5.5t-2 9.5l16 68q-72 15-146 15-199 0-372-105 1-2 13-20.5t21.5-33.5 9.5-19q0-13-13-13-6 0-17 14.5t-22.5 34.5-13.5 23q-113-75-192-187.5t-110-244.5l69-15q10-3 10-15 0-5-5.5-8t-10.5-2l-68 15q-14-72-14-139 0-206 109-379 2 1 18.5 12t30 19 17.5 8q13 0 13-12 0-6-12.5-15.5t-32.5-21.5l-20-12q77-112 189-189t244-107l15 67q2 10 15 10 5 0 8-5.5t2-10.5l-15-66q71-13 134-13 204 0 379 109-39 56-39 65 0 13 12 13 11 0 48-64 111 75 187.5 186t107.5 241l-56 12q-10 2-10 16 0 5 5.5 8t9.5 2l57-13q14 72 14 140zM1696 896q0-163-63.5-311t-170.5-255-255-170.5-311-63.5-311 63.5-255 170.5-170.5 255-63.5 311 63.5 311 170.5 255 255 170.5 311 63.5 311-63.5 255-170.5 170.5-255 63.5-311zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.safari = safari;
var chrome = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M893 0q240-2 451 120 232 134 352 372l-742-39q-160-9-294 74.5t-185 229.5l-276-424q128-159 311-245.5t383-87.5zM146 405l337 663q72 143 211 217t293 45l-230 451q-212-33-385-157.5t-272.5-316-99.5-411.5q0-267 146-491zM1732 574q58 150 59.5 310.5t-48.5 306-153 272-246 209.5q-230 133-498 119l405-623q88-131 82.5-290.5t-106.5-277.5zM896 594q125 0 213.5 88.5t88.5 213.5-88.5 213.5-213.5 88.5-213.5-88.5-88.5-213.5 88.5-213.5 213.5-88.5z"
    }
  }]
};
exports.chrome = chrome;
var firefox = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M903 1792q-283 0-504.5-150.5t-329.5-398.5q-58-131-67-301t26-332.5 111-312 179-242.5l-11 281q11-14 68-15.5t70 15.5q42-81 160.5-138t234.5-59q-54 45-119.5 148.5t-58.5 163.5q25 8 62.5 13.5t63 7.5 68 4 50.5 3q15 5 9.5 45.5t-30.5 75.5q-5 7-16.5 18.5t-56.5 35.5-101 34l15 189-139-67q-18 43-7.5 81.5t36 66.5 65.5 41.5 81 6.5q51-9 98-34.5t83.5-45 73.5-17.5q61 4 89.5 33t19.5 65q-1 2-2.5 5.5t-8.5 12.5-18 15.5-31.5 10.5-46.5 1q-60 95-144.5 135.5t-209.5 29.5q74 61 162.5 82.5t168.5 6 154.5-52 128-87.5 80.5-104q43-91 39-192.5t-37.5-188.5-78.5-125q87 38 137 79.5t77 112.5q15-170-57.5-343t-209.5-284q265 77 412 279.5t151 517.5q2 127-40.5 255t-123.5 238-189 196-247.5 135.5-288.5 49.5z"
    }
  }]
};
exports.firefox = firefox;
var opera = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1493 228q-165-110-359-110-155 0-293 73t-240 200q-75 93-119.5 218t-48.5 266v42q4 141 48.5 266t119.5 218q102 127 240 200t293 73q194 0 359-110-121 108-274.5 168t-322.5 60q-29 0-43-1-175-8-333-82t-272-193-181-281-67-339q0-182 71-348t191-286 286-191 348-71h3q168 1 320.5 60.5t273.5 167.5zM1792 896q0 192-77 362.5t-213 296.5q-104 63-222 63-137 0-255-84 154-56 253.5-233t99.5-405q0-227-99-404t-253-234q119-83 254-83 119 0 226 65 135 125 210.5 295t75.5 361z"
    }
  }]
};
exports.opera = opera;
var internetExplorer = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 937q0 56-7 104h-1151q0 146 109.5 244.5t257.5 98.5q99 0 185.5-46.5t136.5-130.5h423q-56 159-170.5 281t-267.5 188.5-321 66.5q-187 0-356-83-228 116-394 116-237 0-237-263 0-115 45-275 17-60 109-229 199-360 475-606-184 79-427 354 63-274 283.5-449.5t501.5-175.5q30 0 45 1 255-117 433-117 64 0 116 13t94.5 40.5 66.5 76.5 24 115q0 116-75 286 101 182 101 390zM1722 297q0-83-53-132t-137-49q-108 0-254 70 121 47 222.5 131.5t170.5 195.5q51-135 51-216zM128 1534q0 86 48.5 132.5t134.5 46.5q115 0 266-83-122-72-213.5-183t-137.5-245q-98 205-98 332zM632 821h728q-5-142-113-237t-251-95q-144 0-251.5 95t-112.5 237z"
    }
  }]
};
exports.internetExplorer = internetExplorer;
var television = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1248v-960q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zM1920 288v960q0 66-47 113t-113 47h-736v128h352q14 0 23 9t9 23v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-128h-736q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }
  }]
};
exports.television = television;
var tv = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1248v-960q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zM1920 288v960q0 66-47 113t-113 47h-736v128h352q14 0 23 9t9 23v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-128h-736q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }
  }]
};
exports.tv = tv;
var contao = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M138 128h197q-70 64-126 149-36 56-59 115t-30 125.5-8.5 120 10.5 132 21 126 28 136.5q4 19 6 28 51 238 81 329 57 171 152 275h-272q-48 0-82-34t-34-82v-1304q0-48 34-82t82-34zM1346 128h308q48 0 82 34t34 82v1304q0 48-34 82t-82 34h-178q212-210 196-565l-469 101q-2 45-12 82t-31 72-59.5 59.5-93.5 36.5q-123 26-199-40-32-27-53-61t-51.5-129-64.5-258q-35-163-45.5-263t-5.5-139 23-77q20-41 62.5-73t102.5-45q45-12 83.5-6.5t67 17 54 35 43 48 34.5 56.5l468-100q-68-175-180-287z"
    }
  }]
};
exports.contao = contao;
var fiveHundredPX = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1401 1547l-6 6q-113 113-259 175-154 64-317 64-165 0-317-64-148-63-259-175-113-112-175-258-42-103-54-189-4-28 48-36 51-8 56 20 1 1 1 4 18 90 46 159 50 124 152 226 98 98 226 152 132 56 276 56 143 0 276-56 128-55 225-152l6-6q10-10 25-6 12 3 33 22 36 37 17 58zM929 932l-66 66 63 63q21 21-7 49-17 17-32 17-10 0-19-10l-62-61-66 66q-5 5-15 5-15 0-31-16l-2-2q-18-15-18-29 0-7 8-17l66-65-66-66q-16-16 14-45 18-18 31-18 6 0 13 5l65 66 65-65q18-17 48 13 27 27 11 44zM1400 989q0 118-46 228-45 105-126 186-80 80-187 126t-228 46-228-46-187-126q-82-82-125-186-15-33-15-40h-1q-9-27 43-44 50-16 60 12 37 99 97 167h1v-339-2q3-136 102-232 105-103 253-103 147 0 251 103t104 249q0 147-104.5 251t-250.5 104q-58 0-112-16-28-11-13-61 16-51 44-43l14 3q14 3 33 6t30 3q104 0 176-71.5t72-174.5q0-101-72-171-71-71-175-71-107 0-178 80-64 72-64 160v413q110 67 242 67 96 0 185-36.5t156-103.5 103.5-155 36.5-183q0-198-141-339-140-140-339-140-200 0-340 140-53 53-77 87l-2 2q-8 11-13 15.5t-21.5 9.5-38.5-3q-21-5-36.5-16.5t-15.5-26.5v-680q0-15 10.5-26.5t27.5-11.5h877q30 0 30 55t-30 55h-811v483h1q40-42 102-84t108-61q109-46 231-46 121 0 228 46t187 126q81 81 126 186 46 112 46 229zM1369 408q9 8 9 18t-5.5 18-16.5 21q-26 26-39 26-9 0-16-7-106-91-207-133-128-56-276-56-133 0-262 49-27 10-45-37-9-25-8-38 3-16 16-20 130-57 299-57 164 0 316 64 137 58 235 152z"
    }
  }]
};
exports.fiveHundredPX = fiveHundredPX;
var amazon = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zM1758 1361q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 0.5h-5.5-4.5t-3-0.5-2-1.5l-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zM1364 918q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zM692 939q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"
    }
  }]
};
exports.amazon = amazon;
var calendarPlusO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 256q52 0 90 38t38 90v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128zM1152 160v288q0 14 9 23t23 9h64q14 0 23-9t9-23v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM384 160v288q0 14 9 23t23 9h64q14 0 23-9t9-23v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM1536 1664v-1024h-1408v1024h1408zM896 1088h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h64q14 0 23 9t9 23v224z"
    }
  }]
};
exports.calendarPlusO = calendarPlusO;
var calendarMinusO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1152 1120v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zM128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
    }
  }]
};
exports.calendarMinusO = calendarMinusO;
var calendarTimesO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1111 1385l-46 46q-9 9-22 9t-23-9l-188-189-188 189q-10 9-23 9t-22-9l-46-46q-9-9-9-22t9-23l189-188-189-188q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l188 188 188-188q10-9 23-9t22 9l46 46q9 9 9 22t-9 23l-188 188 188 188q9 10 9 23t-9 22zM128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
    }
  }]
};
exports.calendarTimesO = calendarTimesO;
var calendarCheckO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1303 964l-512 512q-10 9-23 9t-23-9l-288-288q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l220 220 444-444q10-9 23-9t22 9l46 46q9 9 9 22t-9 23zM128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
    }
  }]
};
exports.calendarCheckO = calendarCheckO;
var industry = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M448 0q26 0 45 19t19 45v891l536-429q17-14 40-14 26 0 45 19t19 45v379l536-429q17-14 40-14 26 0 45 19t19 45v1152q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h384z"
    }
  }]
};
exports.industry = industry;
var mapPin = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1088q66 0 128-15v655q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-655q62 15 128 15zM512 0q212 0 362 150t150 362-150 362-362 150-362-150-150-362 150-362 362-150zM512 224q14 0 23-9t9-23-9-23-23-9q-146 0-249 103t-103 249q0 14 9 23t23 9 23-9 9-23q0-119 84.5-203.5t203.5-84.5z"
    }
  }]
};
exports.mapPin = mapPin;
var mapSigns = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1745 297q10 10 10 23t-10 23l-141 141q-28 28-68 28h-1344q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h576v-64q0-26 19-45t45-19h128q26 0 45 19t19 45v64h512q40 0 68 28zM768 1216h256v512q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-512zM1600 768q26 0 45 19t19 45v256q0 26-19 45t-45 19h-1344q-40 0-68-28l-141-141q-10-10-10-23t10-23l141-141q28-28 68-28h512v-192h256v192h576z"
    }
  }]
};
exports.mapSigns = mapSigns;
var mapO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2020 11q28 20 28 53v1408q0 20-11 36t-29 23l-640 256q-24 11-48 0l-616-246-616 246q-10 5-24 5-19 0-36-11-28-20-28-53v-1408q0-20 11-36t29-23l640-256q24-11 48 0l616 246 616-246q32-13 60 6zM736 146v1270l576 230v-1270zM128 363v1270l544-217v-1270zM1920 1429v-1270l-544 217v1270z"
    }
  }]
};
exports.mapO = mapO;
var map = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM1760 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM640 0q8 0 14 3l512 256q18 10 18 29v1472q0 13-9.5 22.5t-22.5 9.5q-8 0-14-3l-512-256q-18-10-18-29v-1472q0-13 9.5-22.5t22.5-9.5z"
    }
  }]
};
exports.map = map;
var commenting = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1024 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1408 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1792 896q0 174-120 321.5t-326 233-450 85.5q-110 0-211-18-173 173-435 229-52 10-86 13-12 1-22-6t-13-18q-4-15 20-37 5-5 23.5-21.5t25.5-23.5 23.5-25.5 24-31.5 20.5-37 20-48 14.5-57.5 12.5-72.5q-146-90-229.5-216.5t-83.5-269.5q0-174 120-321.5t326-233 450-85.5 450 85.5 326 233 120 321.5z"
    }
  }]
};
exports.commenting = commenting;
var commentingO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1024 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM896 384q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zM1792 896q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-0.5-12t2-10 4.5-9.5l6-9t7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5 348 50.5 286 136.5 191 204.5 71 248.5z"
    }
  }]
};
exports.commentingO = commentingO;
var houzz = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M512 1191l512-295v591l-512 296v-592zM0 896v591l512-296zM512 9v591l-512 296v-591zM512 600l512-295v591z"
    }
  }]
};
exports.houzz = houzz;
var vimeo = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1709 518q-10 236-332 651-333 431-562 431-142 0-240-263-44-160-132-482-72-262-157-262-18 0-127 76l-77-98q24-21 108-96.5t130-115.5q156-138 241-146 95-9 153 55.5t81 203.5q44 287 66 373 55 249 120 249 51 0 154-161 101-161 109-246 13-139-109-139-57 0-121 26 120-393 459-382 251 8 236 326z"
    }
  }]
};
exports.vimeo = vimeo;
var blackTie = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 128h1536v1536h-1536v-1536zM1085 1243l-221-631 221-297h-634l221 297-221 631 317 304z"
    }
  }]
};
exports.blackTie = blackTie;
var fonticons = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 128h1536v1536h-1536v-1536zM908 448l-12 33 75 83-31 114 25 25 107-57 107 57 25-25-31-114 75-83-12-33h-95l-53-96h-32l-53 96h-95zM641 611q32 0 44.5 16t11.5 63l174-21q0-55-17.5-92.5t-50.5-56-69-25.5-85-7q-133 0-199 57.5t-66 182.5v72h-96v128h76q20 0 20 8v382q0 14-5 20t-18 7l-73 7v88h448v-86l-149-14q-6-1-8.5-1.5t-3.5-2.5-0.5-4 1-7 0.5-10v-387h191l38-128h-231q-6 0-2-6t4-9v-80q0-27 1.5-40.5t7.5-28 19.5-20 36.5-5.5zM1248 1440v-86l-54-9q-7-1-9.5-2.5t-2.5-3 1-7.5 1-12v-520h-275l-23 101 83 22q23 7 23 27v370q0 14-6 18.5t-20 6.5l-70 9v86h352z"
    }
  }]
};
exports.fonticons = fonticons;
var redditAlien = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 846q0 58-29.5 105.5t-79.5 72.5q12 46 12 96 0 155-106.5 287t-290.5 208.5-400 76.5-399.5-76.5-290-208.5-106.5-287q0-47 11-94-51-25-82-73.5t-31-106.5q0-82 58-140.5t141-58.5q85 0 145 63 218-152 515-162l116-521q3-13 15-21t26-5l369 81q18-37 54-59.5t79-22.5q62 0 106 43.5t44 105.5-44 106-106 44-105.5-43.5-43.5-105.5l-334-74-104 472q300 9 519 160 58-61 143-61 83 0 141 58.5t58 140.5zM418 1045q0 62 43.5 106t105.5 44 106-44 44-106-44-105.5-106-43.5q-61 0-105 44t-44 105zM1228 1400q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20-160-20-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5 91 4.5 91-4.5 122.5-29.5 118.5-68zM1225 1195q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5 44 106 106 44z"
    }
  }]
};
exports.redditAlien = redditAlien;
var edge = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M69 795h1q16-126 58.5-241.5t115-217 167.5-176 223.5-117.5 276.5-43q231 0 414 105.5t294 303.5q104 187 104 442v188h-1125q1 111 53.5 192.5t136.5 122.5 189.5 57 213 3 208-46.5 173.5-84.5v377q-92 55-229.5 92t-312.5 38-316-53q-189-73-311.5-249t-124.5-372q-3-242 111-412t325-268q-48 60-78 125.5t-46 159.5h635q8-77-8-140t-47-101.5-70.5-66.5-80.5-41-75-20.5-56-8.5l-22-1q-135 5-259.5 44.5t-223.5 104.5-176 140.5-138 163.5z"
    }
  }]
};
exports.edge = edge;
var creditCardAlt = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M0 1504v-608h2304v608q0 66-47 113t-113 47h-1984q-66 0-113-47t-47-113zM640 1280v128h384v-128h-384zM256 1280v128h256v-128h-256zM2144 128q66 0 113 47t47 113v224h-2304v-224q0-66 47-113t113-47h1984z"
    }
  }]
};
exports.creditCardAlt = creditCardAlt;
var codiepie = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1584 1290l-218-111q-74 120-196.5 189t-263.5 69q-147 0-271-72t-196-196-72-270q0-110 42.5-209.5t115-172 172-115 209.5-42.5q131 0 247.5 60.5t192.5 168.5l215-125q-110-169-286.5-265t-378.5-96q-161 0-308 63t-253 169-169 253-63 308 63 308 169 253 253 169 308 63q213 0 397.5-107t290.5-292zM1030 893l693 352q-116 253-334.5 400t-492.5 147q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71q260 0 470.5 133.5t335.5 366.5zM1543 896h-39v160h-96v-352h136q32 0 54.5 20t28.5 48 1 56-27.5 48-57.5 20z"
    }
  }]
};
exports.codiepie = codiepie;
var modx = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1427 709l-614-386 92-151h855zM405 974l-184-116v-858l1183 743zM1424 839l147 95v858l-532-335zM1387 818l-500 802h-855l356-571z"
    }
  }]
};
exports.modx = modx;
var fortAwesome = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1008v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zM1152 1008v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zM1664 1040v752h-640v-320q0-80-56-136t-136-56-136 56-56 136v320h-640v-752q0-16 16-16h96q16 0 16 16v112h128v-624q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-6 2.5-9.5t8.5-5 9.5-2 11.5 0 9 0.5v-391q-32-15-32-50 0-23 16.5-39t38.5-16 38.5 16 16.5 39q0 35-32 50v17q45-10 83-10 21 0 59.5 7.5t54.5 7.5q17 0 47-7.5t37-7.5q16 0 16 16v210q0 15-35 21.5t-62 6.5q-18 0-54.5-7.5t-55.5-7.5q-40 0-90 12v133q1 0 9-0.5t11.5 0 9.5 2 8.5 5 2.5 9.5v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v624h128v-112q0-16 16-16h96q16 0 16 16z"
    }
  }]
};
exports.fortAwesome = fortAwesome;
var usb = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2288 805q16 8 16 27t-16 27l-320 192q-8 5-16 5-9 0-16-4-16-10-16-28v-128h-858q37 58 83 165 16 37 24.5 55t24 49 27 47 27 34 31.5 26 33 8h96v-96q0-14 9-23t23-9h320q14 0 23 9t9 23v320q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-96h-96q-32 0-61-10t-51-23.5-45-40.5-37-46-33.5-57-28.5-57.5-28-60.5q-23-53-37-81.5t-36-65-44.5-53.5-46.5-17h-360q-22 84-91 138t-157 54q-106 0-181-75t-75-181 75-181 181-75q88 0 157 54t91 138h104q24 0 46.5-17t44.5-53.5 36-65 37-81.5q19-41 28-60.5t28.5-57.5 33.5-57 37-46 45-40.5 51-23.5 61-10h107q21-57 70-92.5t111-35.5q80 0 136 56t56 136-56 136-136 56q-62 0-111-35.5t-70-92.5h-107q-17 0-33 8t-31.5 26-27 34-27 47-24 49-24.5 55q-46 107-83 165h1114v-128q0-18 16-28t32 1z"
    }
  }]
};
exports.usb = usb;
var productHunt = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1150 762q0 56-39.5 95t-95.5 39h-253v-269h253q56 0 95.5 39.5t39.5 95.5zM1329 762q0-130-91.5-222t-222.5-92h-433v896h180v-269h253q130 0 222-91.5t92-221.5zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.productHunt = productHunt;
var mixcloud = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1645 1098q0-59-34-106.5t-87-68.5q-7 45-23 92-7 24-27.5 38t-44.5 14q-12 0-24-3-31-10-45-38.5t-4-58.5q23-71 23-143 0-123-61-227.5t-166-165.5-228-61q-134 0-247 73t-167 194q108 28 188 106 22 23 22 55t-22 54-54 22-55-22q-75-75-180-75-106 0-181 74.5t-75 180.5 75 180.5 181 74.5h1046q79 0 134.5-55.5t55.5-133.5zM1798 1098q0 142-100.5 242t-242.5 100h-1046q-169 0-289-119.5t-120-288.5q0-153 100-267t249-136q62-184 221-298t354-114q235 0 408.5 158.5t196.5 389.5q116 25 192.5 118.5t76.5 214.5zM2048 1098q0 175-97 319-23 33-64 33-24 0-43-13-26-17-32-48.5t12-57.5q71-104 71-233t-71-233q-18-26-12-57t32-49 57.5-11.5 49.5 32.5q97 142 97 318zM2304 1098q0 244-134 443-23 34-64 34-23 0-42-13-26-18-32.5-49t11.5-57q108-164 108-358 0-195-108-357-18-26-11.5-57.5t32.5-48.5q26-18 57-12t49 33q134 198 134 442z"
    }
  }]
};
exports.mixcloud = mixcloud;
var scribd = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1500 1549q0 89-63 152.5t-153 63.5-153.5-63.5-63.5-152.5q0-90 63.5-153.5t153.5-63.5 153 63.5 63 153.5zM1267 1268q-115 15-192.5 102.5t-77.5 205.5q0 74 33 138-146 78-379 78-109 0-201-21t-153.5-54.5-110.5-76.5-76-85-44.5-83-23.5-66.5-6-39.5q0-19 4.5-42.5t18.5-56 36.5-58 64-43.5 94.5-18 94 17.5 63 41 35.5 53 17.5 49 4 33.5q0 34-23 81 28 27 82 42t93 17l40 1q115 0 190-51t75-133q0-26-9-48.5t-31.5-44.5-49.5-41-74-44-93.5-47.5-119.5-56.5q-28-13-43-20-116-55-187-100t-122.5-102-72-125.5-20.5-162.5q0-78 20.5-150t66-137.5 112.5-114 166.5-77 221.5-28.5q120 0 220 26t164.5 67 109.5 94 64 105.5 19 103.5q0 46-15 82.5t-36.5 58-48.5 36-49 19.5-39 5h-8-32t-39-5-44-14-41-28-37-46-24-70.5-10-97.5q-15-16-59-25.5t-81-10.5l-37-1q-68 0-117.5 31t-70.5 70-21 76q0 24 5 43t24 46 53 51 97 53.5 150 58.5q76 25 138.5 53.5t109 55.5 83 59 60.5 59.5 41 62.5 26.5 62 14.5 63.5 6 62 1 62.5z"
    }
  }]
};
exports.scribd = scribd;
var pauseCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M704 1184v-576q0-14-9-23t-23-9h-256q-14 0-23 9t-9 23v576q0 14 9 23t23 9h256q14 0 23-9t9-23zM1152 1184v-576q0-14-9-23t-23-9h-256q-14 0-23 9t-9 23v576q0 14 9 23t23 9h256q14 0 23-9t9-23zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.pauseCircle = pauseCircle;
var pauseCircleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM768 1440q148 0 273-73t198-198 73-273-73-273-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73zM864 1216q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23v576q0 14-9 23t-23 9h-192zM480 1216q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23v576q0 14-9 23t-23 9h-192z"
    }
  }]
};
exports.pauseCircleO = pauseCircleO;
var stopCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1088 1184v-576q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v576q0 14 9 23t23 9h576q14 0 23-9t9-23zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.stopCircle = stopCircle;
var stopCircleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM768 1440q148 0 273-73t198-198 73-273-73-273-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73zM480 1216q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h576q14 0 23 9t9 23v576q0 14-9 23t-23 9h-576z"
    }
  }]
};
exports.stopCircleO = stopCircleO;
var shoppingBag = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1757 1408l35 313q3 28-16 50-19 21-48 21h-1664q-29 0-48-21-19-22-16-50l35-313h1722zM1664 569l86 775h-1708l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h384v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h256q25 0 43 16.5t21 40.5zM1280 384v256q0 26-19 45t-45 19-45-19-19-45v-256q0-106-75-181t-181-75-181 75-75 181v256q0 26-19 45t-45 19-45-19-19-45v-256q0-159 112.5-271.5t271.5-112.5 271.5 112.5 112.5 271.5z"
    }
  }]
};
exports.shoppingBag = shoppingBag;
var shoppingBasket = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zM485 1568q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zM896 1504v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zM1280 1504v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zM1632 1509l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zM476 292l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z"
    }
  }]
};
exports.shoppingBasket = shoppingBasket;
var hashtag = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M991 1024l64-256h-254l-64 256h254zM1759 520l-56 224q-7 24-31 24h-327l-64 256h311q15 0 25 12 10 14 6 28l-56 224q-5 24-31 24h-327l-81 328q-7 24-31 24h-224q-16 0-26-12-9-12-6-28l78-312h-254l-81 328q-7 24-31 24h-225q-15 0-25-12-9-12-6-28l78-312h-311q-15 0-25-12-9-12-6-28l56-224q7-24 31-24h327l64-256h-311q-15 0-25-12-10-14-6-28l56-224q5-24 31-24h327l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h254l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h311q15 0 25 12 9 12 6 28z"
    }
  }]
};
exports.hashtag = hashtag;
var bluetooth = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M841 1053l148 148-149 149zM840 442l149 149-148 148zM710 1666l464-464-306-306 306-306-464-464v611l-255-255-93 93 320 321-320 321 93 93 255-255v611zM1429 896q0 209-32 365.5t-87.5 257-140.5 162.5-181.5 86.5-219.5 24.5-219.5-24.5-181.5-86.5-140.5-162.5-87.5-257-32-365.5 32-365.5 87.5-257 140.5-162.5 181.5-86.5 219.5-24.5 219.5 24.5 181.5 86.5 140.5 162.5 87.5 257 32 365.5z"
    }
  }]
};
exports.bluetooth = bluetooth;
var bluetoothB = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M596 1423l173-172-173-172v344zM596 713l173-172-173-172v344zM628 896l356 356-539 540v-711l-297 296-108-108 372-373-372-373 108-108 297 296v-711l539 540z"
    }
  }]
};
exports.bluetoothB = bluetoothB;
var percent = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1280q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM512 512q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM1536 1280q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zM1440 192q0 20-13 38l-1056 1408q-19 26-51 26h-160q-26 0-45-19t-19-45q0-20 13-38l1056-1408q19-26 51-26h160q26 0 45 19t19 45zM768 512q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"
    }
  }]
};
exports.percent = percent;
var gitlab = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M104 706l792 1015-868-630q-18-13-25-34.5t0-42.5l101-308v0zM566 706h660l-330 1015v0zM368 94l198 612h-462l198-612q8-23 33-23t33 23zM1688 706l101 308q7 21 0 42.5t-25 34.5l-868 630 792-1015v0zM1688 706h-462l198-612q8-23 33-23t33 23z"
    }
  }]
};
exports.gitlab = gitlab;
var wpbeginner = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M384 832h160v-224h-160v224zM1221 1164v-92q-104 36-243 38-135 1-259.5-46.5t-220.5-122.5l1 96q88 80 212 128.5t272 47.5q129 0 238-49zM640 832h640v-224h-640v224zM1792 800q0 187-99 352 89 102 89 229 0 157-129.5 268t-313.5 111q-122 0-225-52.5t-161-140.5q-19 1-57 1t-57-1q-58 88-161 140.5t-225 52.5q-184 0-313.5-111t-129.5-268q0-127 89-229-99-165-99-352 0-209 120-385.5t326.5-279.5 449.5-103 449.5 103 326.5 279.5 120 385.5z"
    }
  }]
};
exports.wpbeginner = wpbeginner;
var wpforms = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M515 911v128h-252v-128h252zM515 656v127h-252v-127h252zM1273 1167v128h-341v-128h341zM1273 911v128h-672v-128h672zM1273 656v127h-672v-127h672zM1408 1516v-1240q0-8-6-14t-14-6h-32l-378 256-210-171-210 171-378-256h-32q-8 0-14 6t-6 14v1240q0 8 6 14t14 6h1240q8 0 14-6t6-14zM553 406l185-150h-406zM983 406l221-150h-406zM1536 276v1240q0 62-43 105t-105 43h-1240q-62 0-105-43t-43-105v-1240q0-62 43-105t105-43h1240q62 0 105 43t43 105z"
    }
  }]
};
exports.wpforms = wpforms;
var envira = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 816q-104-196-160-278-139-202-347-318-34-19-70-36-89-40-94-32t34 38l39 31q62 43 112.5 93.5t94.5 116.5 70.5 113 70.5 131q9 17 13 25 44 84 84 153t98 154 115.5 150 131 123.5 148.5 90.5q153 66 154 60 1-3-49-37-53-36-81-57-77-58-179-211t-185-310zM549 1359q-76-60-132.5-125t-98-143.5-71-154.5-58.5-186-52-209-60.5-252-76.5-289q273 0 497.5 36t379 92 271 144.5 185.5 172.5 110 198.5 56 199.5 12.5 198.5-9.5 173-20 143.5-13 107l323 327h-104l-281-285q-22 2-91.5 14t-121.5 19-138 6-160.5-17-167.5-59-179-111z"
    }
  }]
};
exports.envira = envira;
var universalAccess = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1374 657q-6-26-28.5-39.5t-48.5-7.5q-261 62-401 62t-401-62q-26-6-48.5 7.5t-28.5 39.5 7.5 48.5 39.5 28.5q194 46 303 58-2 158-15.5 269t-26.5 155.5-41 115.5l-9 21q-10 25 1 49t36 34q9 4 23 4 44 0 60-41l8-20q54-139 71-259h42q17 120 71 259l8 20q16 41 60 41 14 0 23-4 25-10 36-34t1-49l-9-21q-28-71-41-115.5t-26.5-155.5-15.5-269q109-12 303-58 26-6 39.5-28.5t7.5-48.5zM1024 512q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1600 896q0 143-55.5 273.5t-150 225-225 150-273.5 55.5-273.5-55.5-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5zM896 128q-156 0-298 61t-245 164-164 245-61 298 61 298 164 245 245 164 298 61 298-61 245-164 164-245 61-298-61-298-164-245-245-164-298-61zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.universalAccess = universalAccess;
var wheelchairAlt = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1438 813q34 35 29 82l-44 551q-4 42-34.5 70t-71.5 28q-6 0-9-1-44-3-72.5-36.5t-25.5-77.5l35-429-143 8q55 113 55 240 0 216-148 372l-137-137q91-101 91-235 0-145-102.5-248t-247.5-103q-134 0-236 92l-137-138q120-114 284-141l264-300-149-87-181 161q-33 30-77 27.5t-73-35.5-26.5-77 34.5-73l239-213q26-23 60-26.5t64 14.5l488 283q36 21 48 68 17 67-26 117l-205 232 371-20q49-3 83 32zM1240 356q-74 0-126-52t-52-126 52-126 126-52 126.5 52 52.5 126-52.5 126-126.5 52zM613 1598q106 0 196-61l139 139q-146 116-335 116-148 0-273.5-73t-198.5-198-73-273q0-188 116-336l139 139q-60 88-60 197 0 145 102.5 247.5t247.5 102.5z"
    }
  }]
};
exports.wheelchairAlt = wheelchairAlt;
var questionCircleO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M880 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zM1136 704q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zM768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.questionCircleO = questionCircleO;
var blind = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M366 311q-64 0-110-45.5t-46-110.5q0-64 46-109.5t110-45.5 109.5 45.5 45.5 109.5q0 65-45.5 110.5t-109.5 45.5zM917 953q0 50-30 67.5t-63.5 6.5-47.5-34l-367-438q-7-12-14-15.5t-11-1.5l-3 3q-7 8 4 21l122 139 1 354-161 457q-67 192-92 234-15 26-28 32-50 26-103 1-29-13-41.5-43t-9.5-57q2-17 197-618l5-416-85 164 35 222q4 24-1 42t-14 27.5-19 16-17 7.5l-7 2q-19 3-34.5-3t-24-16-14-22-7.5-19.5-2-9.5l-46-299 211-381q23-34 113-34 75 0 107 40l424 521q7 5 14 17l3 3-1 1q7 13 7 29zM514 1103q43 113 88.5 225t69.5 168l24 55q36 93 42 125 11 70-36 97-35 22-66 16t-51-22-29-35h-1q-6-16-8-25l-124-351zM1338 1695q31 49 31 57 0 5-3 7-9 5-14.5-0.5t-15.5-26-16-30.5q-114-172-423-661 3 1 7-1t7-4l3-2q11-9 11-17z"
    }
  }]
};
exports.blind = blind;
var audioDescription = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M504 994h171l-1-265zM1530 895q0-87-50.5-140t-146.5-53h-54v388h52q91 0 145-57t54-138zM956 518l1 756q0 14-9.5 24t-23.5 10h-216q-14 0-23.5-10t-9.5-24v-62h-291l-55 81q-10 15-28 15h-267q-21 0-30.5-18t3.5-35l556-757q9-14 27-14h332q14 0 24 10t10 24zM1783 895q0 193-125.5 303t-324.5 110h-270q-14 0-24-10t-10-24v-756q0-14 10-24t24-10h268q200 0 326 109t126 302zM1939 896q0 11-0.5 29t-8 71.5-21.5 102-44.5 108-73.5 102.5h-51q38-45 66.5-104.5t41.5-112 21-98 9-72.5l1-27q0-8-0.5-22.5t-7.5-60-20-91.5-41-111.5-66-124.5h43q41 47 72 107t45.5 111.5 23 96 10.5 70.5zM2123 896q0 11-0.5 29t-8 71.5-21.5 102-45 108-74 102.5h-51q38-45 66.5-104.5t41.5-112 21-98 9-72.5l1-27q0-8-0.5-22.5t-7.5-60-19.5-91.5-40.5-111.5-66-124.5h43q41 47 72 107t45.5 111.5 23 96 10.5 70.5zM2304 896q0 11-0.5 29t-8 71.5-21.5 102-44.5 108-73.5 102.5h-51q38-45 66-104.5t41-112 21-98 9-72.5l1-27q0-8-0.5-22.5t-7.5-60-19.5-91.5-40.5-111.5-66-124.5h43q41 47 72 107t45.5 111.5 23 96 9.5 70.5z"
    }
  }]
};
exports.audioDescription = audioDescription;
var volumeControlPhone = {
  "viewBox": "0 0 1408 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M617 1689q0-11-13-58t-31-107-20-69q-1-4-5-26.5t-8.5-36-13.5-21.5q-15-14-51-14-23 0-70 5.5t-71 5.5q-34 0-47-11-6-5-11-15.5t-7.5-20-6.5-24-5-18.5q-37-128-37-255t37-255q1-4 5-18.5t6.5-24 7.5-20 11-15.5q13-11 47-11 24 0 71 5.5t70 5.5q36 0 51-14 9-8 13.5-21.5t8.5-36 5-26.5q2-9 20-69t31-107 13-58q0-22-43.5-52.5t-75.5-42.5q-20-8-45-8-34 0-98 18-57 17-96.5 40.5t-71 66-46 70-45.5 94.5q-6 12-9 19-49 107-68 216t-19 244 19 244 68 216q56 122 83 161 63 91 179 127l6 2q64 18 98 18 25 0 45-8 32-12 75.5-42.5t43.5-52.5zM776 776q-26 0-45-19t-19-45.5 19-45.5q37-37 37-90 0-52-37-91-19-19-19-45t19-45 45-19 45 19q75 75 75 181t-75 181q-21 19-45 19zM957 957q-27 0-45-19-19-19-19-45t19-45q112-114 112-272t-112-272q-19-19-19-45t19-45 45-19 45 19q150 150 150 362t-150 362q-18 19-45 19zM1138 1138q-27 0-45-19-19-19-19-45t19-45q90-91 138.5-208t48.5-245-48.5-245-138.5-208q-19-19-19-45t19-45 45-19 45 19q109 109 167 249t58 294-58 294-167 249q-18 19-45 19z"
    }
  }]
};
exports.volumeControlPhone = volumeControlPhone;
var braille = {
  "viewBox": "0 0 2176 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M192 1184q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM704 1184q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM704 672q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM1472 1184q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM1984 1184q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM1472 672q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM1984 672q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM1984 160q-66 0-113 47t-47 113 47 113 113 47 113-47 47-113-47-113-113-47zM384 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM384 832q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 832q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM384 320q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 320q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM2176 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 832q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM2176 832q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 320q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM2176 320q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136z"
    }
  }]
};
exports.braille = braille;
var assistiveListeningSystems = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M128 1728q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zM320 1536q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zM365 1171l256 256-90 90-256-256zM704 1152q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zM1411 832q0 59-11.5 108.5t-37.5 93.5-44 67.5-53 64.5q-31 35-45.5 54t-33.5 50-26.5 64-7.5 74q0 159-112.5 271.5t-271.5 112.5q-26 0-45-19t-19-45 19-45 45-19q106 0 181-75t75-181q0-57 11.5-105.5t37-91 43.5-66.5 52-63q40-46 59.5-72t37.5-74.5 18-103.5q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5q0 26-19 45t-45 19-45-19-19-45q0-117 45.5-223.5t123-184 184-123 223.5-45.5 223.5 45.5 184 123 123 184 45.5 223.5zM896 960q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zM1184 832q0 26-19 45t-45 19-45-19-19-45q0-93-65.5-158.5t-158.5-65.5q-92 0-158 65.5t-66 158.5q0 26-19 45t-45 19-45-19-19-45q0-146 103-249t249-103 249 103 103 249zM1578 543q10 25-1 49t-36 34q-9 4-23 4-19 0-35.5-11t-23.5-30q-68-178-224-295-21-16-25-42t12-47q17-21 43-25t47 12q183 137 266 351zM1788 462q9 25-1.5 49t-35.5 34q-11 4-23 4-44 0-60-41-92-238-297-393-22-16-25.5-42t12.5-47q16-22 42-25.5t47 12.5q235 175 341 449z"
    }
  }]
};
exports.assistiveListeningSystems = assistiveListeningSystems;
var americanSignLanguageInterpreting = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1032 960q-59-2-84-55-17-34-48-53.5t-68-19.5q-53 0-90.5 37.5t-37.5 90.5q0 56 36 89l10 8q34 31 82 31 37 0 68-19.5t48-53.5q25-53 84-55zM1600 832q0-56-36-89l-10-8q-34-31-82-31-37 0-68 19.5t-48 53.5q-25 53-84 55 59 2 84 55 17 34 48 53.5t68 19.5q53 0 90.5-37.5t37.5-90.5zM1174 611q-17 35-55 48t-73-4q-62-31-134-31-51 0-99 17 3 0 9.5-0.5t9.5-0.5q92 0 170.5 50t118.5 133q17 36 3.5 73.5t-49.5 54.5q-18 9-39 9 21 0 39 9 36 17 49.5 54.5t-3.5 73.5q-40 83-118.5 133t-170.5 50h-6q-16-2-44-4l-290-27-239 120q-14 7-29 7-40 0-57-35l-160-320q-11-23-4-47.5t29-37.5l209-119 148-267q17-155 91.5-291.5t195.5-236.5q31-25 70.5-21.5t64.5 34.5 21.5 70-34.5 65q-70 59-117 128 123-84 267-101 40-5 71.5 19t35.5 64q5 40-19 71.5t-64 35.5q-84 10-159 55 46-10 99-10 115 0 218 50 36 18 49 55.5t-5 73.5zM2137 451l160 320q11 23 4 47.5t-29 37.5l-209 119-148 267q-17 155-91.5 291.5t-195.5 236.5q-26 22-61 22-45 0-74-35-25-31-21.5-70t34.5-65q70-59 117-128-123 84-267 101-4 1-12 1-36 0-63.5-24t-31.5-60q-5-40 19-71.5t64-35.5q84-10 159-55-46 10-99 10-115 0-218-50-36-18-49-55.5t5-73.5q17-35 55-48t73 4q62 31 134 31 51 0 99-17-3 0-9.5 0.5t-9.5 0.5q-92 0-170.5-50t-118.5-133q-17-36-3.5-73.5t49.5-54.5q18-9 39-9-21 0-39-9-36-17-49.5-54.5t3.5-73.5q40-83 118.5-133t170.5-50h6 1q14 2 42 4l291 27 239-120q14-7 29-7 40 0 57 35z"
    }
  }]
};
exports.americanSignLanguageInterpreting = americanSignLanguageInterpreting;
var aslInterpreting = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1032 960q-59-2-84-55-17-34-48-53.5t-68-19.5q-53 0-90.5 37.5t-37.5 90.5q0 56 36 89l10 8q34 31 82 31 37 0 68-19.5t48-53.5q25-53 84-55zM1600 832q0-56-36-89l-10-8q-34-31-82-31-37 0-68 19.5t-48 53.5q-25 53-84 55 59 2 84 55 17 34 48 53.5t68 19.5q53 0 90.5-37.5t37.5-90.5zM1174 611q-17 35-55 48t-73-4q-62-31-134-31-51 0-99 17 3 0 9.5-0.5t9.5-0.5q92 0 170.5 50t118.5 133q17 36 3.5 73.5t-49.5 54.5q-18 9-39 9 21 0 39 9 36 17 49.5 54.5t-3.5 73.5q-40 83-118.5 133t-170.5 50h-6q-16-2-44-4l-290-27-239 120q-14 7-29 7-40 0-57-35l-160-320q-11-23-4-47.5t29-37.5l209-119 148-267q17-155 91.5-291.5t195.5-236.5q31-25 70.5-21.5t64.5 34.5 21.5 70-34.5 65q-70 59-117 128 123-84 267-101 40-5 71.5 19t35.5 64q5 40-19 71.5t-64 35.5q-84 10-159 55 46-10 99-10 115 0 218 50 36 18 49 55.5t-5 73.5zM2137 451l160 320q11 23 4 47.5t-29 37.5l-209 119-148 267q-17 155-91.5 291.5t-195.5 236.5q-26 22-61 22-45 0-74-35-25-31-21.5-70t34.5-65q70-59 117-128-123 84-267 101-4 1-12 1-36 0-63.5-24t-31.5-60q-5-40 19-71.5t64-35.5q84-10 159-55-46 10-99 10-115 0-218-50-36-18-49-55.5t5-73.5q17-35 55-48t73 4q62 31 134 31 51 0 99-17-3 0-9.5 0.5t-9.5 0.5q-92 0-170.5-50t-118.5-133q-17-36-3.5-73.5t49.5-54.5q18-9 39-9-21 0-39-9-36-17-49.5-54.5t3.5-73.5q40-83 118.5-133t170.5-50h6 1q14 2 42 4l291 27 239-120q14-7 29-7 40 0 57 35z"
    }
  }]
};
exports.aslInterpreting = aslInterpreting;
var deaf = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1056 832q0 26 19 45t45 19 45-19 19-45q0-146-103-249t-249-103-249 103-103 249q0 26 19 45t45 19 45-19 19-45q0-93 66-158.5t158-65.5 158 65.5 66 158.5zM835 256q-117 0-223.5 45.5t-184 123-123 184-45.5 223.5q0 26 19 45t45 19 45-19 19-45q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 55-18 103.5t-37.5 74.5-59.5 72q-34 39-52 63t-43.5 66.5-37 91-11.5 105.5q0 106-75 181t-181 75q-26 0-45 19t-19 45 19 45 45 19q159 0 271.5-112.5t112.5-271.5q0-41 7.5-74t26.5-64 33.5-50 45.5-54q35-41 53-64.5t44-67.5 37.5-93.5 11.5-108.5q0-117-45.5-223.5t-123-184-184-123-223.5-45.5zM591 975l226 226-579 579q-12 12-29 12t-29-12l-168-168q-12-12-12-29t12-29zM1612 12l168 168q12 12 12 29t-12 30l-233 233-26 25-71 71q-66-153-195-258l91-91 207-207q13-12 30-12t29 12z"
    }
  }]
};
exports.deaf = deaf;
var deafness = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1056 832q0 26 19 45t45 19 45-19 19-45q0-146-103-249t-249-103-249 103-103 249q0 26 19 45t45 19 45-19 19-45q0-93 66-158.5t158-65.5 158 65.5 66 158.5zM835 256q-117 0-223.5 45.5t-184 123-123 184-45.5 223.5q0 26 19 45t45 19 45-19 19-45q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 55-18 103.5t-37.5 74.5-59.5 72q-34 39-52 63t-43.5 66.5-37 91-11.5 105.5q0 106-75 181t-181 75q-26 0-45 19t-19 45 19 45 45 19q159 0 271.5-112.5t112.5-271.5q0-41 7.5-74t26.5-64 33.5-50 45.5-54q35-41 53-64.5t44-67.5 37.5-93.5 11.5-108.5q0-117-45.5-223.5t-123-184-184-123-223.5-45.5zM591 975l226 226-579 579q-12 12-29 12t-29-12l-168-168q-12-12-12-29t12-29zM1612 12l168 168q12 12 12 29t-12 30l-233 233-26 25-71 71q-66-153-195-258l91-91 207-207q13-12 30-12t29 12z"
    }
  }]
};
exports.deafness = deafness;
var hardOfHearing = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1056 832q0 26 19 45t45 19 45-19 19-45q0-146-103-249t-249-103-249 103-103 249q0 26 19 45t45 19 45-19 19-45q0-93 66-158.5t158-65.5 158 65.5 66 158.5zM835 256q-117 0-223.5 45.5t-184 123-123 184-45.5 223.5q0 26 19 45t45 19 45-19 19-45q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 55-18 103.5t-37.5 74.5-59.5 72q-34 39-52 63t-43.5 66.5-37 91-11.5 105.5q0 106-75 181t-181 75q-26 0-45 19t-19 45 19 45 45 19q159 0 271.5-112.5t112.5-271.5q0-41 7.5-74t26.5-64 33.5-50 45.5-54q35-41 53-64.5t44-67.5 37.5-93.5 11.5-108.5q0-117-45.5-223.5t-123-184-184-123-223.5-45.5zM591 975l226 226-579 579q-12 12-29 12t-29-12l-168-168q-12-12-12-29t12-29zM1612 12l168 168q12 12 12 29t-12 30l-233 233-26 25-71 71q-66-153-195-258l91-91 207-207q13-12 30-12t29 12z"
    }
  }]
};
exports.hardOfHearing = hardOfHearing;
var glide = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M866 515q0 27-13 94-11 50-31.5 150t-30.5 150q-2 11-4.5 12.5t-13.5 2.5q-20 2-31 2-58 0-84-49.5t-26-113.5q0-88 35-174t103-124q28-14 51-14 28 0 36.5 16.5t8.5 47.5zM1352 939q0-14-39-75.5t-52-66.5q-21-8-34-8-91 0-226 77l-2-2q3-22 27.5-135t24.5-178q0-233-242-233-24 0-68 6-94 17-168.5 89.5t-111.5 166.5-37 189q0 146 80.5 225t227.5 79q25 0 25 3t-1 5q-4 34-26 117-14 52-51.5 101t-82.5 49q-42 0-42-47 0-24 10.5-47.5t25-39.5 29.5-28.5 26-20 11-8.5q0-3-7-10-24-22-58.5-36.5t-65.5-14.5q-35 0-63.5 34t-41 75-12.5 75q0 88 51.5 142t138.5 54q82 0 155-53t117.5-126 65.5-153q6-22 15.5-66.5t14.5-66.5q3-12 14-18 118-60 227-60 48 0 127 18 1 1 4 1 5 0 9.5-4.5t4.5-8.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.glide = glide;
var glideG = {
  "viewBox": "0 0 1535 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M744 305q0-24-2-38.5t-8.5-30-21-23-37.5-7.5q-39 0-78 23-105 58-159 190.5t-54 269.5q0 44 8.5 85.5t26.5 80.5 52.5 62.5 81.5 23.5q4 0 18 0.5t20 0 16-3 15-8.5 7-16q16-77 48-231.5t48-231.5q19-91 19-146zM1498 961q0 7-7.5 13.5t-15.5 6.5l-6-1q-22-3-62-11t-72-12.5-63-4.5q-167 0-351 93-15 8-21 27-10 36-24.5 105.5t-22.5 100.5q-23 91-70 179.5t-112.5 164.5-154.5 123-185 47q-135 0-214.5-83.5t-79.5-219.5q0-53 19.5-117t63-116.5 97.5-52.5q38 0 120 33.5t83 61.5q0 1-16.5 12.5t-39.5 31-46 44.5-39 61-16 74q0 33 16.5 53t48.5 20q45 0 85-31.5t66.5-78 48-105.5 32.5-107 16-90v-9q0-2-3.5-3.5t-8.5-1.5h-10t-10 0.5-6 0.5q-227 0-352-122.5t-125-348.5q0-108 34.5-221t96-210 156-167.5 204.5-89.5q52-9 106-9 374 0 374 360 0 98-38 273t-43 211l3 3q101-57 182.5-88t167.5-31q22 0 53 13 19 7 80 102.5t61 116.5z"
    }
  }]
};
exports.glideG = glideG;
var signLanguage = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M831 673q32 0 59 18l222 148q61 40 110 97l146 170q40 46 29 106l-72 413q-6 32-29.5 53.5t-55.5 25.5l-527 56-352 32h-9q-39 0-67.5-28t-28.5-68q0-37 27-64t65-32l260-32h-448q-41 0-69.5-30t-26.5-71q2-39 32-65t69-26l442-1-521-64q-41-5-66-37t-19-73q6-35 34.5-57.5t65.5-22.5h10l481 60-351-94q-38-10-62-41.5t-18-68.5q6-36 33-58.5t62-22.5q6 0 20 2l448 96 217 37q1 0 3 0.5t3 0.5q23 0 30.5-23t-12.5-36l-186-125q-35-23-42-63.5t18-73.5q27-38 76-38zM761 875l186 125-218-37-5-2-36-38-238-262q-1-1-2.5-3.5t-2.5-3.5q-24-31-18.5-70t37.5-64q31-23 68-17.5t64 33.5l142 147q-2 1-5 3.5t-4 4.5q-32 45-23 99t55 85zM1648 421l15 266q4 73-11 147l-48 219q-12 59-67 87l-106 54q2-62-39-109l-146-170q-53-61-117-103l-222-148q-34-23-76-23-51 0-88 37l-235-312q-25-33-18-73.5t41-63.5q33-22 71.5-14t62.5 40l266 352-262-455q-21-35-10.5-75t47.5-59q35-18 72.5-6t57.5 46l241 420-136-337q-15-35-4.5-74t44.5-56q37-19 76-6t56 51l193 415 101 196q8 15 23 17.5t27-7.5 11-26l-12-224q-2-41 26-71t69-31q39 0 67 28.5t30 67.5z"
    }
  }]
};
exports.signLanguage = signLanguage;
var signing = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M831 673q32 0 59 18l222 148q61 40 110 97l146 170q40 46 29 106l-72 413q-6 32-29.5 53.5t-55.5 25.5l-527 56-352 32h-9q-39 0-67.5-28t-28.5-68q0-37 27-64t65-32l260-32h-448q-41 0-69.5-30t-26.5-71q2-39 32-65t69-26l442-1-521-64q-41-5-66-37t-19-73q6-35 34.5-57.5t65.5-22.5h10l481 60-351-94q-38-10-62-41.5t-18-68.5q6-36 33-58.5t62-22.5q6 0 20 2l448 96 217 37q1 0 3 0.5t3 0.5q23 0 30.5-23t-12.5-36l-186-125q-35-23-42-63.5t18-73.5q27-38 76-38zM761 875l186 125-218-37-5-2-36-38-238-262q-1-1-2.5-3.5t-2.5-3.5q-24-31-18.5-70t37.5-64q31-23 68-17.5t64 33.5l142 147q-2 1-5 3.5t-4 4.5q-32 45-23 99t55 85zM1648 421l15 266q4 73-11 147l-48 219q-12 59-67 87l-106 54q2-62-39-109l-146-170q-53-61-117-103l-222-148q-34-23-76-23-51 0-88 37l-235-312q-25-33-18-73.5t41-63.5q33-22 71.5-14t62.5 40l266 352-262-455q-21-35-10.5-75t47.5-59q35-18 72.5-6t57.5 46l241 420-136-337q-15-35-4.5-74t44.5-56q37-19 76-6t56 51l193 415 101 196q8 15 23 17.5t27-7.5 11-26l-12-224q-2-41 26-71t69-31q39 0 67 28.5t30 67.5z"
    }
  }]
};
exports.signing = signing;
var lowVision = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M335 1356q-2 0-6-2-86-57-168.5-145t-139.5-180q-21-30-21-69 0-9 2-19t4-18 7-18 8.5-16 10.5-17 10-15 12-15.5 11-14.5q184-251 452-365-110-198-110-211 0-19 17-29 116-64 128-64 18 0 28 16l124 229q92-19 192-19 266 0 497.5 137.5t378.5 369.5q20 31 20 69t-20 69q-91 142-218.5 253.5t-278.5 175.5q110 198 110 211 0 20-17 29-116 64-127 64-19 0-29-16l-124-229-64-119-444-820 7-7q-58 24-99 47 3 5 127 234t243 449 119 223q0 7-9 9-13 3-72 3-57 0-60-7l-456-841q-39 28-82 68 24 43 214 393.5t190 354.5q0 10-11 10-14 0-82.5-22t-72.5-28l-106-197-224-413q-44 53-78 106 2 3 18 25t23 34l176 327q0 10-10 10zM1165 1254l49 91q273-111 450-385-180-277-459-389 67 64 103 148.5t36 176.5q0 106-47 200.5t-132 157.5zM848 640q0 20 14 34t34 14q86 0 147 61t61 147q0 20 14 34t34 14 34-14 14-34q0-126-89-215t-215-89q-20 0-34 14t-14 34zM1214 575l-9-4 7 7z"
    }
  }]
};
exports.lowVision = lowVision;
var viadeo = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1050 1106q0 215-147 374-148 161-378 161-232 0-378-161-147-159-147-374 0-147 68-270.5t189-196.5 268-73q96 0 182 31-32 62-39 126-66-28-143-28-167 0-280.5 123t-113.5 291q0 170 112.5 288.5t281.5 118.5 281-118.5 112-288.5q0-89-32-166 66-13 123-49 41 98 41 212zM846 917q0 192-79.5 345t-238.5 253l-14 1q-29 0-62-5 83-32 146.5-102.5t99.5-154.5 58.5-189 30-192.5 7.5-178.5q0-69-3-103 55 160 55 326zM791 589v2q-73-214-206-440 88 59 142.5 186.5t63.5 251.5zM1035 792q-83 0-160-75 218-120 290-247 19-37 21-56-42 94-139.5 166.5t-204.5 97.5q-35-54-35-113 0-37 17-79t43-68q46-44 157-74 59-16 106-58.5t74-100.5q74 105 74 253 0 109-24 170-32 77-88.5 130.5t-130.5 53.5z"
    }
  }]
};
exports.viadeo = viadeo;
var viadeoSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1050 1041q0-78-28-147-41 25-85 34 22 50 22 114 0 117-77 198.5t-193 81.5-193.5-81.5-77.5-198.5q0-115 78-199.5t193-84.5q53 0 98 19 4-43 27-87-60-21-125-21-154 0-257.5 108.5t-103.5 263.5 103.5 261 257.5 106 257.5-106.5 103.5-260.5zM872 686q2 24 2 71 0 63-5 123t-20.5 132.5-40.5 130-68.5 106-100.5 70.5q21 3 42 3h10q219-139 219-411 0-116-38-225zM872 686q-4-80-44-171.5t-98-130.5q92 156 142 302zM1207 581q0-102-51-174-41 86-124 109-69 19-109 53.5t-40 99.5q0 40 24 77 74-17 140.5-67t95.5-115q-4 52-74.5 111.5t-138.5 97.5q52 52 110 52 51 0 90-37t60-90q17-42 17-117zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.viadeoSquare = viadeoSquare;
var snapchat = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1279 1148q0-22-22-27-67-15-118-59t-80-108q-7-19-7-25 0-15 19.5-26t43-17 43-20.5 19.5-36.5q0-19-18.5-31.5t-38.5-12.5q-12 0-32 8t-31 8q-4 0-12-2 5-95 5-114 0-79-17-114-36-78-103-121.5t-152-43.5q-199 0-275 165-17 35-17 114 0 19 5 114-4 2-14 2-12 0-32-7.5t-30-7.5q-21 0-38.5 12t-17.5 32q0 21 19.5 35.5t43 20.5 43 17 19.5 26q0 6-7 25-64 138-198 167-22 5-22 27 0 46 137 68 2 5 6 26t11.5 30.5 23.5 9.5q12 0 37.5-4.5t39.5-4.5q35 0 67 15t54 32.5 57.5 32.5 76.5 15q43 0 79-15t57.5-32.5 53.5-32.5 67-15q14 0 39.5 4t38.5 4q16 0 23-10t11-30 6-25q137-22 137-68zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.snapchat = snapchat;
var snapchatGhost = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M848 128q134-1 240.5 68.5t163.5 192.5q27 58 27 179 0 47-9 191 14 7 28 7 18 0 51-13.5t51-13.5q29 0 56 18t27 46q0 32-31.5 54t-69 31.5-69 29-31.5 47.5q0 15 12 43 37 82 102.5 150t144.5 101q28 12 80 23 28 6 28 35 0 70-219 103-7 11-11 39t-14 46.5-33 18.5q-20 0-62-6.5t-64-6.5q-37 0-62 5-32 5-63 22.5t-58 38-58 40.5-76 33.5-99 13.5q-52 0-96.5-13.5t-75-33.5-57.5-40.5-58-38-62-22.5q-26-5-63-5-24 0-65.5 7.5t-58.5 7.5q-25 0-35-18.5t-14-47.5-11-40q-219-33-219-103 0-29 28-35 52-11 80-23 78-32 144.5-101t102.5-150q12-28 12-43 0-28-31.5-47.5t-69.5-29.5-69.5-31.5-31.5-52.5q0-27 26-45.5t55-18.5q15 0 48 13t53 13q18 0 32-7-9-142-9-190 0-122 27-180 64-137 172-198t264-63z"
    }
  }]
};
exports.snapchatGhost = snapchatGhost;
var snapchatSquare = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1280 1148q0-22-22-27-67-14-118-58t-80-109q-7-14-7-25 0-15 19.5-26t42.5-17 42.5-20.5 19.5-36.5q0-19-18.5-31.5t-38.5-12.5q-11 0-31 8t-32 8q-4 0-12-2 5-63 5-115 0-78-17-114-36-78-102.5-121.5t-152.5-43.5q-198 0-275 165-18 38-18 115 0 38 6 114-10 2-15 2-11 0-31.5-8t-30.5-8q-20 0-37.5 12.5t-17.5 32.5q0 21 19.5 35.5t42.5 20.5 42.5 17 19.5 26q0 11-7 25-64 138-198 167-22 5-22 27 0 47 138 69 2 5 6 26t11 30.5 23 9.5q13 0 38.5-5t38.5-5q35 0 67.5 15t54.5 32.5 57.5 32.5 76.5 15q43 0 79-15t57.5-32.5 54-32.5 67.5-15q13 0 39 4.5t39 4.5q15 0 22.5-9.5t11.5-31 5-24.5q138-22 138-69zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
    }
  }]
};
exports.snapchatSquare = snapchatSquare;
var piedPiper = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M2304 0q-69 46-125 92t-89 81-59.5 71.5-37.5 57.5-22 44.5-14 29.5q-10 18-35.5 136.5t-48.5 164.5q-15 29-50 60.5t-67.5 50.5-72.5 41-48 28q-47 31-151 231-341-14-630 158-92 53-303 179 47-16 86-31t55-22l15-7q71-27 163-64.5t133.5-53.5 108-34.5 142.5-31.5q186-31 465 7 1 0 10 3 11 6 14 17t-3 22l-194 345q-15 29-47 22-128-24-354-24-146 0-402 44.5t-392 46.5q-82 1-149-13t-107-37-61-40-33-34l-1-1v-2q0-6 6-6 138 0 371-55 192-366 374.5-524t383.5-158q5 0 14.5 0.5t38 5 55 12 61.5 24.5 63 39.5 54 59 40 82.5l102-177q2-4 21-42.5t44.5-86.5 61-109.5 84-133.5 100.5-137q66-82 128-141.5t121.5-96.5 92.5-53.5 88-39.5z"
    }
  }]
};
exports.piedPiper = piedPiper;
var firstOrder = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1322 896q0 45-5 76l-236-14 224 78q-19 73-58 141l-214-103 177 158q-44 61-107 108l-157-178 103 215q-61 37-140 59l-79-228 14 240q-38 6-76 6t-76-6l14-238-78 226q-74-19-140-59l103-215-157 178q-59-43-108-108l178-158-214 104q-39-69-58-141l224-79-237 14q-5-42-5-76 0-35 5-77l238 14-225-79q19-73 58-140l214 104-177-159q46-61 107-108l158 178-103-215q67-39 140-58l77 224-13-236q36-6 75-6 38 0 76 6l-14 237 78-225q74 19 140 59l-103 214 158-178q61 47 107 108l-177 159 213-104q37 62 58 141l-224 78 237-14q5 31 5 77zM1352 896q0-160-78.5-295.5t-213-214-292.5-78.5q-119 0-227 46.5t-186.5 125-124.5 187.5-46 229q0 119 46 228t124.5 187.5 186.5 125 227 46.5q158 0 292.5-78.5t213-214 78.5-294.5zM1425 513v766l-657 383-657-383v-766l657-383zM768 1719l708-412v-823l-708-411-708 411v823zM1536 448v896l-768 448-768-448v-896l768-448z"
    }
  }]
};
exports.firstOrder = firstOrder;
var yoast = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M339 218h691l-26 72h-665q-110 0-188.5 79t-78.5 189v771q0 95 60.5 169.5t153.5 93.5q23 5 98 5v72h-45q-140 0-239.5-100t-99.5-240v-771q0-140 99.5-240t239.5-100zM1190 0h247l-482 1294q-23 61-40.5 103.5t-45 98-54 93.5-64.5 78.5-79.5 65-95.5 41-116 18.5v-195q163-26 220-182 20-52 20-105 0-54-20-106l-285-733h228l187 585zM1664 558v1111h-795q37-55 45-73h678v-1038q0-85-49.5-155t-129.5-99l25-67q101 34 163.5 123.5t62.5 197.5z"
    }
  }]
};
exports.yoast = yoast;
var themeisle = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M852 309q0 29-17 52.5t-45 23.5-45-23.5-17-52.5 17-52.5 45-23.5 45 23.5 17 52.5zM688 1685v-114q0-30-20.5-51.5t-50.5-21.5-50 21.5-20 51.5v114q0 30 20.5 52t49.5 22q30 0 50.5-22t20.5-52zM860 1685v-114q0-30-20-51.5t-50-21.5-50.5 21.5-20.5 51.5v114q0 30 20.5 52t50.5 22q29 0 49.5-22t20.5-52zM1034 1685v-114q0-30-20.5-51.5t-50.5-21.5-50.5 21.5-20.5 51.5v114q0 30 20.5 52t50.5 22 50.5-22 20.5-52zM1208 1685v-114q0-30-20.5-51.5t-50.5-21.5-50.5 21.5-20.5 51.5v114q0 30 20.5 52t50.5 22 50.5-22 20.5-52zM1476 1001q-84 160-232 259.5t-323 99.5q-123 0-229.5-51.5t-178.5-137-113-197.5-41-232q0-88 21-174-104 175-104 390 0 162 65 312t185 251q30-57 91-57 56 0 86 50 32-50 87-50 56 0 86 50 32-50 87-50t87 50q30-50 86-50 28 0 52.5 15.5t37.5 40.5q112-94 177-231.5t73-287.5zM1326 972q0-75-72-75-17 0-47 6-95 19-149 19-226 0-226-243 0-86 30-204-83 127-83 275 0 150 89 260.5t235 110.5q111 0 210-70 13-48 13-79zM884 313q0-50-32-89.5t-81-39.5-81 39.5-32 89.5q0 51 31.5 90.5t81.5 39.5 81.5-39.5 31.5-90.5zM1513 652q0-96-37.5-179t-113-137-173.5-54q-77 0-149 35t-127 94q-48 159-48 268 0 104 45.5 157t147.5 53q53 0 142-19 36-6 53-6 51 0 77.5 28t26.5 80q0 26-4 46 75-68 117.5-165.5t42.5-200.5zM1792 869q0 111-33.5 249.5t-93.5 204.5q-58 64-195 142.5t-228 104.5l-4 1v114q0 43-29.5 75t-72.5 32q-56 0-86-50-32 50-87 50t-87-50q-30 50-86 50-55 0-87-50-30 50-86 50-47 0-75-33.5t-28-81.5q-90 68-198 68-118 0-211-80 54-1 106-20-113-31-182-127 32 7 71 7 89 0 164-46-192-192-240-306-24-56-24-160 0-57 9-125.5t31.5-146.5 55-141 86.5-105 120-42q59 0 81 52 19-29 42-54 2-3 12-13t13-16q10-15 23-38t25-42 28-39q87-111 211.5-177t260.5-66q35 0 62 4 59-64 146-64 83 0 140 57 5 5 5 12 0 5-6 13.5t-12.5 16-16 17l-10.5 10.5q17 6 36 18t19 24q0 6-16 25 157 138 197 378 25-30 60-30 45 0 100 49 90 80 90 279z"
    }
  }]
};
exports.themeisle = themeisle;
var googlePlusCircle = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M917 905q0-33-6-64h-362v132h217q-12 76-74.5 120.5t-142.5 44.5q-99 0-169-71.5t-70-170.5 70-170.5 169-71.5q93 0 153 59l104-101q-108-100-257-100-160 0-272 112.5t-112 271.5 112 271.5 272 112.5q165 0 266.5-105t101.5-270zM1262 951h109v-110h-109v-110h-110v110h-110v110h110v110h110v-110zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.googlePlusCircle = googlePlusCircle;
var googlePlusOfficial = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M917 905q0-33-6-64h-362v132h217q-12 76-74.5 120.5t-142.5 44.5q-99 0-169-71.5t-70-170.5 70-170.5 169-71.5q93 0 153 59l104-101q-108-100-257-100-160 0-272 112.5t-112 271.5 112 271.5 272 112.5q165 0 266.5-105t101.5-270zM1262 951h109v-110h-109v-110h-110v110h-110v110h110v110h110v-110zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
    }
  }]
};
exports.googlePlusOfficial = googlePlusOfficial;
var fa = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 512v839q0 48-49 62-174 52-338 52-73 0-215.5-29.5t-227.5-29.5q-164 0-370 48v338h-160v-1368q-63-25-101-81t-38-124q0-91 64-155t155-64 155 64 64 155q0 68-38 124t-101 81v68q190-44 343-44 99 0 198 15 14 2 111.5 22.5t149.5 20.5q77 0 165-18 11-2 80-21t89-19q26 0 45 19t19 45z"
    }
  }]
};
exports.fa = fa;
var fontAwesome = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1536 512v839q0 48-49 62-174 52-338 52-73 0-215.5-29.5t-227.5-29.5q-164 0-370 48v338h-160v-1368q-63-25-101-81t-38-124q0-91 64-155t155-64 155 64 64 155q0 68-38 124t-101 81v68q190-44 343-44 99 0 198 15 14 2 111.5 22.5t149.5 20.5q77 0 165-18 11-2 80-21t89-19q26 0 45 19t19 45z"
    }
  }]
};
exports.fontAwesome = fontAwesome;
var handshakeO = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M192 1152q40 0 56-32t0-64-56-32-56 32 0 64 56 32zM1665 1094q-10-13-38.5-50t-41.5-54-38-49-42.5-53-40.5-47-45-49l-125 140q-83 94-208.5 92t-205.5-98q-57-69-56.5-158t58.5-157l177-206q-22-11-51-16.5t-47.5-6-56.5 0.5-49 1q-92 0-158 66l-158 158h-155v544q5 0 21-0.5t22 0 19.5 2 20.5 4.5 17.5 8.5 18.5 13.5l297 292q115 111 227 111 78 0 125-47 57 20 112.5-8t72.5-85q74 6 127-44 20-18 36-45.5t14-50.5q10 10 43 10 43 0 77-21t49.5-53 12-71.5-30.5-73.5zM1824 1152h96v-512h-93l-157-180q-66-76-169-76h-167q-89 0-146 67l-209 243q-28 33-28 75t27 75q43 51 110 52t111-49l193-218q25-23 53.5-21.5t47 27 8.5 56.5q16 19 56 63t60 68q29 36 82.5 105.5t64.5 84.5q52 66 60 140zM2112 1152q40 0 56-32t0-64-56-32-56 32 0 64 56 32zM2304 576v640q0 26-19 45t-45 19h-434q-27 65-82 106.5t-125 51.5q-33 48-80.5 81.5t-102.5 45.5q-42 53-104.5 81.5t-128.5 24.5q-60 34-126 39.5t-127.5-14-117-53.5-103.5-81l-287-282h-358q-26 0-45-19t-19-45v-672q0-26 19-45t45-19h421q14-14 47-48t47.5-48 44-40 50.5-37.5 51-25.5 62-19.5 68-5.5h117q99 0 181 56 82-56 181-56h167q35 0 67 6t56.5 14.5 51.5 26.5 44.5 31 43 39.5 39 42 41 48 41.5 48.5h355q26 0 45 19t19 45z"
    }
  }]
};
exports.handshakeO = handshakeO;
var envelopeOpen = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 654v978q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-978q0-15 11-24 8-7 39-34.5t41.5-36 45.5-37.5 70-55.5 96-73 143.5-107 192.5-140.5q5-4 52.5-40t71.5-52.5 64-35 69-18.5 69 18.5 65 35.5 71 52 52 40q110 80 192.5 140.5t143.5 107 96 73 70 55.5 45.5 37.5 41.5 36 39 34.5q11 9 11 24zM1228 1239q263-191 345-252 11-8 12.5-20.5t-6.5-23.5l-38-52q-8-11-21-12.5t-24 6.5q-231 169-343 250-5 3-52 39t-71.5 52.5-64.5 35-69 18.5-69-18.5-64.5-35-71.5-52.5-52-39q-186-134-343-250-11-8-24-6.5t-21 12.5l-38 52q-8 11-6.5 23.5t12.5 20.5q82 61 345 252 10 8 50 38t65 47 64 39.5 77.5 33.5 75.5 11 75.5-11 79-34.5 64.5-39.5 65-47.5 48-36.5z"
    }
  }]
};
exports.envelopeOpen = envelopeOpen;
var envelopeOpenO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1474 913l39 51q8 11 6.5 23.5t-11.5 20.5q-43 34-126.5 98.5t-146.5 113-67 51.5q-39 32-60 48t-60.5 41-76.5 36.5-74 11.5h-1-1q-37 0-74-11.5t-76-36.5-61-41.5-60-47.5q-5-4-65-50.5t-143.5-111-122.5-94.5q-11-8-12.5-20.5t6.5-23.5l37-52q8-11 21.5-13t24.5 7q94 73 306 236 5 4 43.5 35t60.5 46.5 56.5 32.5 58.5 17h1 1q24 0 58.5-17t56.5-32.5 60.5-46.5 43.5-35q258-198 313-242 11-8 24-6.5t21 12.5zM1664 1632v-928q-90-83-159-139-91-74-389-304-3-2-43-35t-61-48-56-32.5-59-17.5h-1-1q-24 0-59 17.5t-56 32.5-61 48-43 35q-215 166-315.5 245.5t-129.5 104-82 74.5q-14 12-21 19v928q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zM1792 704v928q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-928q0-56 41-94 123-114 350-290.5t233-181.5q36-30 59-47.5t61.5-42 76-36.5 74.5-12h1 1q37 0 74.5 12t76 36.5 61.5 42 59 47.5q43 36 156 122t226 177 201 173q41 38 41 94z"
    }
  }]
};
exports.envelopeOpenO = envelopeOpenO;
var linode = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M330 1535l202 214-34-236-216-213zM556 1761l274-218-11-245-300 215zM245 1123l227 213-48-327-245-204zM495 1347l317-214-14-324-352 200zM843 1358l95 80-2-239-103-79q0 1 1 8.5t0 12-5 7.5l-78 52 85 70q7 6 7 88zM138 606l256 200-68-465-279-173zM1173 1269l15-234-230 164 2 240zM417 814l373-194-19-441-423 163zM1270 1179l20-233-226-142-2 105 144 95q6 4 4 9l-7 119zM1461 1040l30-222-179 128-20 228zM1273 1207l-71-49-8 117q0 5-4 8l-234 187q-7 5-14 0l-98-83 7 161q0 5-4 8l-293 234q-4 2-6 2-8-2-8-3l-228-242q-4-4-59-277-2-7 5-11l61-37q-94-86-95-92l-72-351q-2-7 6-12l94-45q-133-100-135-108l-96-466q-2-10 7-13l433-135q5 0 8 1l317 153q6 4 6 9l20 463q0 7-6 10l-118 61 126 85q5 2 5 8l5 123 121-74q5-4 11 0l84 56 3-110q0-6 5-9l206-126q6-3 11 0l245 135q4 4 5 7t-6.5 60-17.5 124.5-10 70.5q0 5-4 7l-191 153q-6 5-13 0z"
    }
  }]
};
exports.linode = linode;
var addressBook = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1201 1238q0-57-5.5-107t-21-100.5-39.5-86-64-58-91-22.5q-6 4-33.5 20.5t-42.5 24.5-40.5 20-49 17-46.5 5-46.5-5-49-17-40.5-20-42.5-24.5-33.5-20.5q-51 0-91 22.5t-64 58-39.5 86-21 100.5-5.5 107q0 73 42 121.5t103 48.5h576q61 0 103-48.5t42-121.5zM1028 644q0-108-76.5-184t-183.5-76-183.5 76-76.5 184q0 107 76.5 183t183.5 76 183.5-76 76.5-183zM1664 1184v192q0 14-9 23t-23 9h-96v224q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-1472q0-66 47-113t113-47h1216q66 0 113 47t47 113v224h96q14 0 23 9t9 23v192q0 14-9 23t-23 9h-96v128h96q14 0 23 9t9 23v192q0 14-9 23t-23 9h-96v128h96q14 0 23 9t9 23z"
    }
  }]
};
exports.addressBook = addressBook;
var addressBookO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1028 644q0 107-76.5 183t-183.5 76-183.5-76-76.5-183q0-108 76.5-184t183.5-76 183.5 76 76.5 184zM980 864q46 0 82.5 17t60 47.5 39.5 67 24 81 11.5 82.5 3.5 79q0 67-39.5 118.5t-105.5 51.5h-576q-66 0-105.5-51.5t-39.5-118.5q0-48 4.5-93.5t18.5-98.5 36.5-91.5 63-64.5 93.5-26h5q7 4 32 19.5t35.5 21 33 17 37 16 35 9 39.5 4.5 39.5-4.5 35-9 37-16 33-17 35.5-21 32-19.5zM1664 608q0 13-9.5 22.5t-22.5 9.5h-96v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-96v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-96v224q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-1472q0-66 47-113t113-47h1216q66 0 113 47t47 113v224h96q13 0 22.5 9.5t9.5 22.5v192zM1408 1632v-1472q0-13-9.5-22.5t-22.5-9.5h-1216q-13 0-22.5 9.5t-9.5 22.5v1472q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5-9.5t9.5-22.5z"
    }
  }]
};
exports.addressBookO = addressBookO;
var addressCard = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zM867 611q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zM1792 1120v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zM1792 860v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zM1792 608v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zM2048 288v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.addressCard = addressCard;
var vcard = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zM867 611q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zM1792 1120v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zM1792 860v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zM1792 608v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zM2048 288v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.vcard = vcard;
var addressCardO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1131q0 64-37 106.5t-91 42.5h-512q-54 0-91-42.5t-37-106.5 9-117.5 29.5-103 60.5-78 97-28.5q6 4 30 18t37.5 21.5 35.5 17.5 43 14.5 42 4.5 42-4.5 43-14.5 35.5-17.5 37.5-21.5 30-18q57 0 97 28.5t60.5 78 29.5 103 9 117.5zM867 611q0 94-66.5 160.5t-160.5 66.5-160.5-66.5-66.5-160.5 66.5-160.5 160.5-66.5 160.5 66.5 66.5 160.5zM1792 1056v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zM1792 804v56q0 15-10.5 25.5t-25.5 10.5h-568q-15 0-25.5-10.5t-10.5-25.5v-56q0-15 10.5-25.5t25.5-10.5h568q15 0 25.5 10.5t10.5 25.5zM1792 544v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zM1920 1504v-1216q0-13-9.5-22.5t-22.5-9.5h-1728q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h352v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h768v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h352q13 0 22.5-9.5t9.5-22.5zM2048 288v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.addressCardO = addressCardO;
var vcardO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1131q0 64-37 106.5t-91 42.5h-512q-54 0-91-42.5t-37-106.5 9-117.5 29.5-103 60.5-78 97-28.5q6 4 30 18t37.5 21.5 35.5 17.5 43 14.5 42 4.5 42-4.5 43-14.5 35.5-17.5 37.5-21.5 30-18q57 0 97 28.5t60.5 78 29.5 103 9 117.5zM867 611q0 94-66.5 160.5t-160.5 66.5-160.5-66.5-66.5-160.5 66.5-160.5 160.5-66.5 160.5 66.5 66.5 160.5zM1792 1056v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zM1792 804v56q0 15-10.5 25.5t-25.5 10.5h-568q-15 0-25.5-10.5t-10.5-25.5v-56q0-15 10.5-25.5t25.5-10.5h568q15 0 25.5 10.5t10.5 25.5zM1792 544v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zM1920 1504v-1216q0-13-9.5-22.5t-22.5-9.5h-1728q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h352v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h768v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h352q13 0 22.5-9.5t9.5-22.5zM2048 288v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.vcardO = vcardO;
var userCircle = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zM1280 640q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zM1792 896q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.userCircle = userCircle;
var userCircleO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 0q182 0 348 71t286 191 191 286 71 348q0 181-70.5 347t-190.5 286-286 191.5-349 71.5-349-71-285.5-191.5-190.5-286-71-347.5 71-348 191-286 286-191 348-71zM1515 1351q149-205 149-455 0-156-61-298t-164-245-245-164-298-61-298 61-245 164-164 245-61 298q0 250 149 455 66-327 306-327 131 128 313 128t313-128q240 0 306 327zM1280 704q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5z"
    }
  }]
};
exports.userCircleO = userCircleO;
var userO = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1201 784q47 14 89.5 38t89 73 79.5 115.5 55 172 22 236.5q0 154-100 263.5t-241 109.5h-854q-141 0-241-109.5t-100-263.5q0-131 22-236.5t55-172 79.5-115.5 89-73 89.5-38q-79-125-79-272 0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5 198.5 40.5 163.5 109.5 109.5 163.5 40.5 198.5q0 147-79 272zM768 128q-159 0-271.5 112.5t-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5-112.5-271.5-271.5-112.5zM1195 1664q88 0 150.5-71.5t62.5-173.5q0-239-78.5-377t-225.5-145q-145 127-336 127t-336-127q-147 7-225.5 145t-78.5 377q0 102 62.5 173.5t150.5 71.5h854z"
    }
  }]
};
exports.userO = userO;
var idBadge = {
  "viewBox": "0 0 1280 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1024 1258q0 64-37 107t-91 43h-512q-54 0-91-43t-37-107 9-118 29.5-104 61-78.5 96.5-28.5q80 75 188 75t188-75q56 0 96.5 28.5t61 78.5 29.5 104 9 118zM870 739q0 94-67.5 160.5t-162.5 66.5-162.5-66.5-67.5-160.5 67.5-160.5 162.5-66.5 162.5 66.5 67.5 160.5zM1152 1632v-1376h-1024v1376q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1280 160v1472q0 66-47 113t-113 47h-960q-66 0-113-47t-47-113v-1472q0-66 47-113t113-47h352v96q0 14 9 23t23 9h192q14 0 23-9t9-23v-96h352q66 0 113 47t47 113z"
    }
  }]
};
exports.idBadge = idBadge;
var driversLicense = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1212q0-54-7.5-100.5t-24.5-90-51-68.5-81-25q-64 64-156 64t-156-64q-47 0-81 25t-51 68.5-24.5 90-7.5 100.5q0 55 31.5 93.5t75.5 38.5h426q44 0 75.5-38.5t31.5-93.5zM768 768q0-80-56-136t-136-56-136 56-56 136 56 136 136 56 136-56 56-136zM1792 1248v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM1408 992v-64q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v64q0 14 9 23t23 9h320q14 0 23-9t9-23zM1792 992v-64q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v64q0 14 9 23t23 9h192q14 0 23-9t9-23zM1792 736v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM128 384h1792v-96q0-14-9-23t-23-9h-1728q-14 0-23 9t-9 23v96zM2048 288v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.driversLicense = driversLicense;
var idCard = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1212q0-54-7.5-100.5t-24.5-90-51-68.5-81-25q-64 64-156 64t-156-64q-47 0-81 25t-51 68.5-24.5 90-7.5 100.5q0 55 31.5 93.5t75.5 38.5h426q44 0 75.5-38.5t31.5-93.5zM768 768q0-80-56-136t-136-56-136 56-56 136 56 136 136 56 136-56 56-136zM1792 1248v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM1408 992v-64q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v64q0 14 9 23t23 9h320q14 0 23-9t9-23zM1792 992v-64q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v64q0 14 9 23t23 9h192q14 0 23-9t9-23zM1792 736v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM128 384h1792v-96q0-14-9-23t-23-9h-1728q-14 0-23 9t-9 23v96zM2048 288v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.idCard = idCard;
var driversLicenseO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1212q0 55-31.5 93.5t-75.5 38.5h-426q-44 0-75.5-38.5t-31.5-93.5q0-54 7.5-100.5t24.5-90 51-68.5 81-25q64 64 156 64t156-64q47 0 81 25t51 68.5 24.5 90 7.5 100.5zM768 768q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1792 1184v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23zM1408 928v64q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h320q14 0 23 9t9 23zM1792 928v64q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 672v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23zM1920 1504v-1120h-1792v1120q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5-9.5t9.5-22.5zM2048 288v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.driversLicenseO = driversLicenseO;
var idCardO = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M896 1212q0 55-31.5 93.5t-75.5 38.5h-426q-44 0-75.5-38.5t-31.5-93.5q0-54 7.5-100.5t24.5-90 51-68.5 81-25q64 64 156 64t156-64q47 0 81 25t51 68.5 24.5 90 7.5 100.5zM768 768q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1792 1184v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23zM1408 928v64q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h320q14 0 23 9t9 23zM1792 928v64q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 672v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23zM1920 1504v-1120h-1792v1120q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5-9.5t9.5-22.5zM2048 288v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
    }
  }]
};
exports.idCardO = idCardO;
var quora = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1255 787q0-318-105-474.5t-330-156.5q-222 0-326 157t-104 474q0 316 104 471.5t326 155.5q74 0 131-17-22-43-39-73t-44-65-53.5-56.5-63-36-77.5-14.5q-46 0-79 16l-49-97q105-91 276-91 132 0 215.5 54t150.5 155q67-149 67-402zM1645 1419h117q3 27-2 67t-26.5 95-58 100.5-107 78-162.5 32.5q-71 0-130.5-19t-105.5-56-79-78-66-96q-97 27-205 27-150 0-292.5-58t-253-158.5-178-249-67.5-317.5q0-170 67.5-319.5t178.5-250.5 253.5-159 291.5-58q121 0 238.5 36t217 106 176 164.5 119.5 219 43 261.5q0 190-80.5 347.5t-218.5 264.5q47 70 93.5 106.5t104.5 36.5q61 0 94-37.5t38-85.5z"
    }
  }]
};
exports.quora = quora;
var freeCodeCamp = {
  "viewBox": "0 0 2304 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M453 1637q0 21-16 37.5t-37 16.5q-1 0-13-3-63-15-162-140-225-284-225-676 0-341 213-614 39-51 95-103.5t94-52.5q19 0 35 13.5t16 32.5q0 27-63 90-98 102-147 184-119 199-119 449 0 281 123 491 50 85 136 173 2 3 14.5 16t19.5 21 17 20.5 14.5 23.5 4.5 21zM1796 1503q0 29-17.5 48.5t-46.5 19.5h-1081q-26 0-45-19t-19-45q0-29 17.5-48.5t46.5-19.5h1081q26 0 45 19t19 45zM1581 892q0 134-67 233-25 38-69.5 78.5t-83.5 60.5q-16 10-27 10-7 0-15-6t-8-12q0-9 19-30t42-46 42-67.5 19-88.5q0-76-35-130-29-42-46-42-3 0-3 5 0 12 7.5 35.5t7.5 36.5q0 22-21.5 35t-44.5 13q-66 0-66-76 0-15 1.5-44t1.5-44q0-25-10-46-13-25-42-53.5t-51-28.5q-5 0-7 0.5t-3.5 2.5-1.5 6q0 2 16 26t16 54q0 37-19 68t-46 54-53.5 46-45.5 54-19 68q0 98 42 160 29 43 79 63 16 5 17 10 1 2 1 5 0 16-18 16-6 0-33-11-119-43-195-139.5t-76-218.5q0-55 24.5-115.5t60-115 70.5-108.5 59.5-113.5 24.5-111.5q0-53-25-94-29-48-56-64-19-9-19-21 0-20 41-20 50 0 110 29 41 19 71 44.5t49.5 51 33.5 62.5 22 69 16 80q0 1 3 17.5t4.5 25 5.5 25 9 27 11 21.5 14.5 16.5 18.5 5.5q23 0 37-14t14-37q0-25-20-67t-20-52 10-10q27 0 93 70 72 76 102.5 156t30.5 186zM2304 921q0 274-138 503-19 32-48 72t-68 86.5-81 77-74 30.5q-16 0-31-15.5t-15-31.5q0-15 29-50.5t68.5-77 48.5-52.5q183-230 183-531 0-131-20.5-235t-72.5-211q-58-119-163-228-2-3-13-13.5t-16.5-16.5-15-17.5-15-20-9.5-18.5-4-19q0-19 16-35.5t35-16.5q70 0 196 169 98 131 146 273t60 314q2 42 2 64z"
    }
  }]
};
exports.freeCodeCamp = freeCodeCamp;
var telegram = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1189 1307l147-693q9-44-10.5-63t-51.5-7l-864 333q-29 11-39.5 25t-2.5 26.5 32 19.5l221 69 513-323q21-14 32-6 7 5-4 15l-415 375v0 0l-16 228q23 0 45-22l108-104 224 165q64 36 81-38zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.telegram = telegram;
var thermometer = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-907h128v907q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometer = thermometer;
var thermometer4 = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-907h128v907q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometer4 = thermometer4;
var thermometerFull = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-907h128v907q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometerFull = thermometerFull;
var thermometer3 = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-651h128v651q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometer3 = thermometer3;
var thermometerThreeQuarters = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-651h128v651q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometerThreeQuarters = thermometerThreeQuarters;
var thermometer2 = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-395h128v395q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometer2 = thermometer2;
var thermometerHalf = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-395h128v395q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometerHalf = thermometerHalf;
var thermometer1 = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-139h128v139q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometer1 = thermometer1;
var thermometerQuarter = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-139h128v139q58 21 93 71t35 110zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometerQuarter = thermometerQuarter;
var thermometer0 = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-79 56-135.5t136-56.5 136 56.5 56 135.5zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometer0 = thermometer0;
var thermometerEmpty = {
  "viewBox": "0 0 1024 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M640 1344q0 80-56 136t-136 56-136-56-56-136q0-79 56-135.5t136-56.5 136 56.5 56 135.5zM768 1344q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zM896 1344q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zM1024 768v128h-192v-128h192zM1024 512v128h-192v-128h192zM1024 256v128h-192v-128h192z"
    }
  }]
};
exports.thermometerEmpty = thermometerEmpty;
var shower = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1433 249q10 10 10 23t-10 23l-626 626q-10 10-23 10t-23-10l-82-82q-10-10-10-23t10-23l44-44q-72-91-81.5-207t46.5-215q-74-71-176-71-106 0-181 75t-75 181v1280h-256v-1280q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5q106 0 201 41t166 115q94-39 197-24.5t185 79.5l44-44q10-10 23-10t23 10zM1344 512q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1600 640q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zM1856 512q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1216 640q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1408 704q0-26 19-45t45-19 45 19 19 45-19 45-45 19-45-19-19-45zM1728 640q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1088 768q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1344 896q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zM1600 768q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1216 1024q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zM1472 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1088 1024q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1344 1024q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1216 1152q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1088 1280q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19z"
    }
  }]
};
exports.shower = shower;
var bath = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 1088v192q0 169-128 286v194q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-118q-63 22-128 22h-768q-65 0-128-22v110q0 17-9.5 28.5t-22.5 11.5h-64q-13 0-22.5-11.5t-9.5-28.5v-186q-128-117-128-286v-192h1536zM704 672q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 608q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM704 544q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 544q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 480q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM704 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1792 928v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-640q0-106 75-181t181-75q108 0 184 78 46-19 98-12t93 39l22-22q11-11 22 0l42 42q11 11 0 22l-314 314q-11 11-22 0l-42-42q-11-11 0-22l22-22q-36-46-40.5-104t23.5-108q-37-35-88-35-53 0-90.5 37.5t-37.5 90.5v640h1504q14 0 23 9t9 23zM896 480q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM960 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM896 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1024 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM960 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1088 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23z"
    }
  }]
};
exports.bath = bath;
var bathtub = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 1088v192q0 169-128 286v194q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-118q-63 22-128 22h-768q-65 0-128-22v110q0 17-9.5 28.5t-22.5 11.5h-64q-13 0-22.5-11.5t-9.5-28.5v-186q-128-117-128-286v-192h1536zM704 672q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 608q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM704 544q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 544q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 480q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM704 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1792 928v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-640q0-106 75-181t181-75q108 0 184 78 46-19 98-12t93 39l22-22q11-11 22 0l42 42q11 11 0 22l-314 314q-11 11-22 0l-42-42q-11-11 0-22l22-22q-36-46-40.5-104t23.5-108q-37-35-88-35-53 0-90.5 37.5t-37.5 90.5v640h1504q14 0 23 9t9 23zM896 480q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM960 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM896 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1024 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM960 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1088 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23z"
    }
  }]
};
exports.bathtub = bathtub;
var s15 = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1664 1088v192q0 169-128 286v194q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-118q-63 22-128 22h-768q-65 0-128-22v110q0 17-9.5 28.5t-22.5 11.5h-64q-13 0-22.5-11.5t-9.5-28.5v-186q-128-117-128-286v-192h1536zM704 672q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 608q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM704 544q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 544q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 480q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM704 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1792 928v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-640q0-106 75-181t181-75q108 0 184 78 46-19 98-12t93 39l22-22q11-11 22 0l42 42q11 11 0 22l-314 314q-11 11-22 0l-42-42q-11-11 0-22l22-22q-36-46-40.5-104t23.5-108q-37-35-88-35-53 0-90.5 37.5t-37.5 90.5v640h1504q14 0 23 9t9 23zM896 480q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM768 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM960 416q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM896 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM832 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1024 352q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM960 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zM1088 288q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23z"
    }
  }]
};
exports.s15 = s15;
var podcast = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M994 1192q0 86-17 197-31 215-55 313-22 90-152 90t-152-90q-24-98-55-313-17-110-17-197 0-168 224-168t224 168zM1536 768q0 240-134 434t-350 280q-8 3-15-3t-6-15q7-48 10-66 4-32 6-47 1-9 9-12 159-81 255.5-234t96.5-337q0-180-91-330.5t-247-234.5-337-74q-124 7-237 61t-193.5 140.5-128 202-46.5 240.5q1 184 99 336.5t257 231.5q7 3 9 12 3 21 6 45 1 9 5 32.5t6 35.5q1 9-6.5 15t-15.5 2q-148-58-261-169.5t-173.5-264-52.5-319.5q7-143 66-273.5t154.5-227 225-157.5 272.5-70q164-10 315.5 46.5t261 160.5 175 250.5 65.5 308.5zM994 736q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5zM1282 768q0 122-53.5 228.5t-146.5 177.5q-8 6-16 2t-10-14q-6-52-29-92-7-10 3-20 58-54 91-127t33-155q0-111-58.5-204t-157.5-141.5-212-36.5q-133 15-229 113t-109 231q-10 92 23.5 176t98.5 144q10 10 3 20-24 41-29 93-2 9-10 13t-16-2q-95-74-148.5-183t-51.5-234q3-131 69-244t177-181.5 241-74.5q144-7 268 60t196.5 187.5 72.5 263.5z"
    }
  }]
};
exports.podcast = podcast;
var windowMaximize = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1408h1280v-768h-1280v768zM1792 288v1216q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.windowMaximize = windowMaximize;
var windowMinimize = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1792 1312v192q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-192q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.windowMinimize = windowMinimize;
var windowRestore = {
  "viewBox": "0 0 2048 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M256 1536h768v-512h-768v512zM1280 1024h512v-768h-768v256h96q66 0 113 47t47 113v352zM2048 160v960q0 66-47 113t-113 47h-608v352q0 66-47 113t-113 47h-960q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h608v-352q0-66 47-113t113-47h960q66 0 113 47t47 113z"
    }
  }]
};
exports.windowRestore = windowRestore;
var timesRectangle = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1175 1321l146-146q10-10 10-23t-10-23l-233-233 233-233q10-10 10-23t-10-23l-146-146q-10-10-23-10t-23 10l-233 233-233-233q-10-10-23-10t-23 10l-146 146q-10 10-10 23t10 23l233 233-233 233q-10 10-10 23t10 23l146 146q10 10 23 10t23-10l233-233 233 233q10 10 23 10t23-10zM1792 288v1216q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.timesRectangle = timesRectangle;
var windowClose = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1175 1321l146-146q10-10 10-23t-10-23l-233-233 233-233q10-10 10-23t-10-23l-146-146q-10-10-23-10t-23 10l-233 233-233-233q-10-10-23-10t-23 10l-146 146q-10 10-10 23t10 23l233 233-233 233q-10 10-10 23t10 23l146 146q10 10 23 10t23-10l233-233 233 233q10 10 23 10t23-10zM1792 288v1216q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.windowClose = windowClose;
var timesRectangleO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1257 1111l-146 146q-10 10-23 10t-23-10l-169-169-169 169q-10 10-23 10t-23-10l-146-146q-10-10-10-23t10-23l169-169-169-169q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l169 169 169-169q10-10 23-10t23 10l146 146q10 10 10 23t-10 23l-169 169 169 169q10 10 10 23t-10 23zM256 1408h1280v-1024h-1280v1024zM1792 288v1216q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.timesRectangleO = timesRectangleO;
var windowCloseO = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1257 1111l-146 146q-10 10-23 10t-23-10l-169-169-169 169q-10 10-23 10t-23-10l-146-146q-10-10-10-23t10-23l169-169-169-169q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l169 169 169-169q10-10 23-10t23 10l146 146q10 10 10 23t-10 23l-169 169 169 169q10 10 10 23t-10 23zM256 1408h1280v-1024h-1280v1024zM1792 288v1216q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
    }
  }]
};
exports.windowCloseO = windowCloseO;
var bandcamp = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1070 1178l306-564h-654l-306 564h654zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.bandcamp = bandcamp;
var grav = {
  "viewBox": "0 0 1794 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1291 476q-15-17-35-8.5t-26 28.5 5 38q14 17 40 14.5t34-20.5-18-52zM895 722q-8 8-19.5 8t-18.5-8q-8-8-8-19t8-18q7-8 18.5-8t19.5 8q7 7 7 18t-7 19zM1060 796l-35 35q-12 13-29.5 13t-30.5-13l-38-38q-12-13-12-30t12-30l35-35q12-12 29.5-12t30.5 12l38 39q12 12 12 29.5t-12 29.5zM951 666q-7 8-18.5 8t-19.5-8q-7-8-7-19t7-19q8-8 19-8t19 8 8 19-8 19zM1354 568q-34 64-107.5 85.5t-127.5-16.5q-38-28-61-66.5t-21-87.5 39-92 75.5-53 70.5 5 70 51q2 2 13 12.5t14.5 13.5 13 13.5 12.5 15.5 10 15.5 8.5 18 4 18.5 1 21-5 22-9.5 24zM1555 1050q3-20-8.5-34.5t-27.5-21.5-33-17-23-20q-40-71-84-98.5t-113-11.5q19-13 40-18.5t33-4.5l12 1q2-45-34-90 6-20 6.5-40.5t-2.5-30.5l-3-10q43-24 71-65t34-91q10-84-43-150.5t-137-76.5q-60-7-114 18.5t-82 74.5q-30 51-33.5 101t14.5 87 43.5 64 56.5 42q-45-4-88-36t-57-88q-28-108 32-222-16-21-29-32-50 0-89 19 19-24 42-37t36-14l13-1q0-50-13-78-10-21-32.5-28.5t-47 3.5-37.5 40q2-4 4-7-7 28-6.5 75.5t19 117 48.5 122.5q-25 14-47 36-35 16-85.5 70.5t-84.5 101.5l-33 46q-90 34-181 125.5t-75 162.5q1 16 11 27-15 12-30 30-21 25-21 54t21.5 40 63.5-6q41-19 77-49.5t55-60.5q-2-2-6.5-5t-20.5-7.5-33-3.5q23-5 51-12.5t40-10 27.5-6 26-4 23.5-0.5q14 7 22-34 7-37 7-90 0-102-40-150 106 103 101 219-1 29-15 50t-27 27l-13 6q-4 7-19 32t-26 45.5-26.5 52-25 61-17 63-6.5 66.5 10 63q-35-54-37-80-22 24-34.5 39t-33.5 42-30.5 46-16.5 41-0.5 38 25.5 27q45 25 144-64t190.5-221.5 122.5-228.5q86-52 145-115.5t86-119.5q47 93 154 178 104 83 167 80 39-2 46-43zM1794 896q0 182-71 348t-191 286-286.5 191-348.5 71-348.5-71-286.5-191-191-286-71-348 71-348 191-286 286.5-191 348.5-71 348.5 71 286.5 191 191 286 71 348z"
    }
  }]
};
exports.grav = grav;
var etsy = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M518 183v655q103 1 191.5-1.5t125.5-5.5l37-3q68-2 90.5-24.5t39.5-94.5l33-142h103l-14 322 7 319h-103l-29-127q-15-68-45-93t-84-26q-87-8-352-8v556q0 78 43.5 115.5t133.5 37.5h357q35 0 59.5-2t55-7.5 54-18 48.5-32 46-50.5 39-73l93-216h89q-6 37-31.5 252t-30.5 276q-146-5-263.5-8t-162.5-4h-44-628l-376 12v-102l127-25q67-13 91.5-37t25.5-79l8-643q3-402-8-645-2-61-25.5-84t-91.5-36l-127-24v-102l376 12h702q139 0 374-27-6 68-14 194.5t-12 219.5l-5 92h-93l-32-124q-31-121-74-179.5t-113-58.5h-548q-28 0-35.5 8.5t-7.5 30.5z"
    }
  }]
};
exports.etsy = etsy;
var imdb = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M922 797v182q0 4 0.5 15t0 15l-1.5 12t-3.5 11.5-6.5 7.5-11 5.5-16 1.5v-309q9 0 16 1t11 5 6.5 5.5 3.5 9.5 1 10.5v13.5 14zM1238 893v121q0 1 0.5 12.5t0 15.5-2.5 11.5-7.5 10.5-13.5 3q-9 0-14-9-4-10-4-165v-7-8.5-9t1.5-8.5l3.5-7t5-5.5 8-1.5q6 0 10 1.5t6.5 4.5 4 6 2 8.5 0.5 8v9.5 9zM180 1129h122v-472h-122v472zM614 1129h106v-472h-159l-28 221q-20-148-32-221h-158v472h107v-312l45 312h76l43-319v319zM1039 824q0-67-5-90-3-16-11-28.5t-17-20.5-25-14-26.5-8.5-31-4-29-1.5h-29.5-12-91v472h56q169 1 197-24.5t25-180.5q-1-62-1-100zM1356 1021v-133q0-29-2-45t-9.5-33.5-24.5-25-46-7.5q-46 0-77 34v-154h-117v472h110l7-30q30 36 77 36 50 0 66-30.5t16-83.5zM1536 288v1216q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1216q66 0 113 47t47 113z"
    }
  }]
};
exports.imdb = imdb;
var ravelry = {
  "viewBox": "0 0 2176 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1143 1733q-6-1-11-4-13-8-36-23t-86-65-116.5-104.5-112-140-89.5-172.5q-17-3-175-37 66 213 235 362t391 184zM502 1127l168 28q-25-76-41-167.5t-19-145.5l-4-53q-84 82-121 224 5 65 17 114zM612 518q-43 64-77 148 44-46 74-68zM2049 952q0-161-62-307t-167.5-252-250.5-168.5-304-62.5q-147 0-281 52.5t-240 148.5q-30 58-45 160 60-51 143-83.5t158.5-43 143-13.5 108.5 1l40 3q33 1 53 15.5t24.5 33 6.5 37-1 28.5q-126-11-227.5-0.5t-183 43.5-142.5 71.5-131 98.5q4 36 11.5 92.5t35.5 178 62 179.5q123 6 247.5-14.5t214.5-53.5 162.5-67 109.5-59l37-24q22-16 39.5-20.5t30.5 5 17 34.5q14 97-39 121-208 97-467 134-135 20-317 16 41 96 110 176.5t137 127 130.5 79 101.5 43.5l39 12q143 23 263-15 195-99 314-289t119-418zM2123 915q-14 135-40 212-70 208-181.5 346.5t-318.5 253.5q-48 33-82 44-72 26-163 16-36 3-73 3-283 0-504.5-173t-295.5-442q-1 0-4-0.5t-5-0.5q-6 50 2.5 112.5t26 115 36 98 31.5 71.5l14 26q8 12 54 82-71-38-124.5-106.5t-78.5-140-39.5-137-17.5-107.5l-2-42q-5-2-33.5-12.5t-48.5-18-53-20.5-57.5-25-50-25.5-42.5-27-25-25.5q19 10 50.5 25.5t113 45.5 145.5 38l2-32q11-149 94-290 41-202 176-365 28-115 81-214 15-28 32-45t49-32q158-74 303.5-104t302-11 306.5 97q220 115 333 336t87 474z"
    }
  }]
};
exports.ravelry = ravelry;
var eercast = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1341 784q29-44-6.5-129.5t-121.5-142.5q-58-39-125.5-53.5t-118-4.5-68.5 37q-12 23-4.5 28t42.5 10q23 3 38.5 5t44.5 9.5 56 17.5q36 13 67.5 31.5t53 37 40 38.5 30.5 38 22 34.5 16.5 28.5 12 18.5 10.5 6 11-9.5zM1704 1358q-52 127-148.5 220t-214.5 141.5-253 60.5-266-13.5-251-91-210-161.5-141.5-235.5-46.5-303.5q1-41 8.5-84.5t12.5-64 24-80.5 23-73q-51 208 1 397t173 318 291 206 346 83 349-74.5 289-244.5q20-27 18-14 0 4-4 14zM1465 909q0 104-40.5 199t-108.5 164-162 109.5-198 40.5-198-40.5-162-109.5-108.5-164-40.5-199 40.5-199 108.5-164 162-109.5 198-40.5 198 40.5 162 109.5 108.5 164 40.5 199zM1752 621q-65-147-180.5-251t-253-153.5-292-53.5-301 36.5-275.5 129-220 211.5-131 297-10 373q-49-161-51.5-311.5t35.5-272.5 109-227 165.5-180.5 207-126 232-71 242.5-9 236 54 216 124.5 178 197q33 50 62 121t31 112zM1690 963q12-244-136.5-416t-396.5-240q-8 0-10-5t24-8q125 4 230 50t173 120 116 168.5 58.5 199-1 208-61.5 197.5-122.5 167-185 117.5-248.5 46.5q108-30 201.5-80t174-123 129.5-176.5 55-225.5z"
    }
  }]
};
exports.eercast = eercast;
var microchip = {
  "viewBox": "0 0 1536 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M192 1280v128h-112q-16 0-16-16v-16h-48q-16 0-16-16v-32q0-16 16-16h48v-16q0-16 16-16h112zM192 1024v128h-112q-16 0-16-16v-16h-48q-16 0-16-16v-32q0-16 16-16h48v-16q0-16 16-16h112zM192 768v128h-112q-16 0-16-16v-16h-48q-16 0-16-16v-32q0-16 16-16h48v-16q0-16 16-16h112zM192 512v128h-112q-16 0-16-16v-16h-48q-16 0-16-16v-32q0-16 16-16h48v-16q0-16 16-16h112zM192 256v128h-112q-16 0-16-16v-16h-48q-16 0-16-16v-32q0-16 16-16h48v-16q0-16 16-16h112zM1280 96v1472q0 40-28 68t-68 28h-832q-40 0-68-28t-28-68v-1472q0-40 28-68t68-28h832q40 0 68 28t28 68zM1536 1328v32q0 16-16 16h-48v16q0 16-16 16h-112v-128h112q16 0 16 16v16h48q16 0 16 16zM1536 1072v32q0 16-16 16h-48v16q0 16-16 16h-112v-128h112q16 0 16 16v16h48q16 0 16 16zM1536 816v32q0 16-16 16h-48v16q0 16-16 16h-112v-128h112q16 0 16 16v16h48q16 0 16 16zM1536 560v32q0 16-16 16h-48v16q0 16-16 16h-112v-128h112q16 0 16 16v16h48q16 0 16 16zM1536 304v32q0 16-16 16h-48v16q0 16-16 16h-112v-128h112q16 0 16 16v16h48q16 0 16 16z"
    }
  }]
};
exports.microchip = microchip;
var snowflakeO = {
  "viewBox": "0 0 1664 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1566 1117l-167 33 186 107q23 13 29.5 38.5t-6.5 48.5q-14 23-39 29.5t-48-6.5l-186-106 55 160q13 38-12 63.5t-60.5 20.5-48.5-42l-102-300-271-156v313l208 238q16 18 17 39t-11 36.5-28.5 25-37 5.5-36.5-22l-112-128v214q0 26-19 45t-45 19-45-19-19-45v-214l-112 128q-16 18-36.5 22t-37-5.5-28.5-25-11-36.5 17-39l208-238v-313l-271 156-102 300q-13 37-48.5 42t-60.5-20.5-12-63.5l55-160-186 106q-23 13-48 6.5t-39-29.5q-13-23-6.5-48.5t29.5-38.5l186-107-167-33q-29-6-42-29t-8.5-46.5 25.5-40 50-10.5l310 62 271-157-271-157-310 62q-4 1-13 1-27 0-44-18t-19-40 11-43 40-26l167-33-186-107q-23-13-29.5-38.5t6.5-48.5 39-30 48 7l186 106-55-160q-13-38 12-63.5t60.5-20.5 48.5 42l102 300 271 156v-313l-208-238q-16-18-17-39t11-36.5 28.5-25 37-5.5 36.5 22l112 128v-214q0-26 19-45t45-19 45 19 19 45v214l112-128q16-18 36.5-22t37 5.5 28.5 25 11 36.5-17 39l-208 238v313l271-156 102-300q13-37 48.5-42t60.5 20.5 12 63.5l-55 160 186-106q23-13 48-6.5t39 29.5q13 23 6.5 48.5t-29.5 38.5l-186 107 167 33q27 5 40 26t11 43-19 40-44 18q-9 0-13-1l-310-62-271 157 271 157 310-62q29-6 50 10.5t25.5 40-8.5 46.5-42 29z"
    }
  }]
};
exports.snowflakeO = snowflakeO;
var superpowers = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1473 929q7-118-33-226.5t-113-189-177-131-221-57.5q-116-7-225.5 32t-192 110.5-135 175-59.5 220.5q-7 118 33 226.5t113 189 177.5 131 221.5 57.5q155 9 293-59t224-195.5 94-283.5zM1792 0l-349 348q120 117 180.5 272t50.5 321q-11 183-102 339t-241 255.5-332 124.5l-999 132 347-347q-120-116-180.5-271.5t-50.5-321.5q11-184 102-340t241.5-255.5 332.5-124.5q167-22 500-66t500-66z"
    }
  }]
};
exports.superpowers = superpowers;
var wpexplorer = {
  "viewBox": "0 0 1792 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M948 1028l163 329h-51l-175-350-171 350h-49l179-374-78-33 21-49 240 102-21 50zM563 436l304 130-130 304-304-130zM907 621l240 103-103 239-239-102zM1188 771l191 81-82 190-190-81zM1680 896q0-159-62-304t-167.5-250.5-250.5-167.5-304-62-304 62-250.5 167.5-167.5 250.5-62 304 62 304 167.5 250.5 250.5 167.5 304 62 304-62 250.5-167.5 167.5-250.5 62-304zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
    }
  }]
};
exports.wpexplorer = wpexplorer;
var meetup = {
  "viewBox": "0 0 1920 1792",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M1334 1234q-4-24-27.5-34t-49.5-10.5-48.5-12.5-25.5-38q-5-47 33-139.5t75-181 32-127.5q-14-101-117-103-45-1-75 16l-3 2-5 2.5t-4.5 2-5 2-5 0.5-6-1.5-6-3.5-6.5-5q-3-2-9-8.5t-9-9-8.5-7.5-9.5-7.5-9.5-5.5-11-4.5-11.5-2.5q-30-5-48 3t-45 31q-1 1-9 8.5t-12.5 11-15 10-16.5 5.5-17-3q-54-27-84-40-41-18-94 5t-76 65q-16 28-41 98.5t-43.5 132.5-40 134-21.5 73q-22 69 18.5 119t110.5 46q30-2 50.5-15t38.5-46q7-13 79-199.5t77-194.5q6-11 21.5-18t29.5 0q27 15 21 53-2 18-51 139.5t-50 132.5q-6 38 19.5 56.5t60.5 7 55-49.5q4-8 45.5-92t81.5-163.5 46-88.5q20-29 41-28 29 0 25 38-2 16-65.5 147.5t-70.5 159.5q-12 53 13 103t74 74q17 9 51 15.5t71.5 8 62.5-14 20-48.5zM383 1450q3 15-5 27.5t-23 15.5q-14 3-26.5-5t-15.5-23q-3-14 5-27t22-16 27 5 16 23zM953 1713q12 17 8.5 37.5t-20.5 32.5-37.5 8-32.5-21q-11-17-7.5-37.5t20.5-32.5 37.5-8 31.5 21zM177 901q-18 27-49.5 33t-57.5-13q-26-18-32-50t12-58q18-27 49.5-33t57.5 12q26 19 32 50.5t-12 58.5zM1467 1578q19 28 13 61.5t-34 52.5-60.5 13-51.5-34-13-61 33-53q28-19 60.5-13t52.5 34zM1579 974q69 113 42.5 244.5t-134.5 207.5q-90 63-199 60-20 80-84.5 127t-143.5 44.5-140-57.5q-12 9-13 10-103 71-225 48.5t-193-126.5q-50-73-53-164-83-14-142.5-70.5t-80.5-128-2-152 81-138.5q-36-60-38-128t24.5-125 79.5-98.5 121-50.5q32-85 99-148t146.5-91.5 168-17 159.5 66.5q72-21 140-17.5t128.5 36 104.5 80 67.5 115 17.5 140.5q52 16 87 57t45.5 89-5.5 99.5-58 87.5zM455 314q14 20 9.5 44.5t-24.5 38.5q-19 14-43.5 9.5t-37.5-24.5q-14-20-9.5-44.5t24.5-38.5q19-14 43.5-9.5t37.5 24.5zM614 33q4 16-5 30.5t-26 18.5-31-5.5-18-26.5q-3-17 6.5-31t25.5-18q17-4 31 5.5t17 26.5zM1800 981q4 20-6.5 37t-30.5 21q-19 4-36-6.5t-21-30.5 6.5-37 30.5-22q20-4 36.5 7.5t20.5 30.5zM1136 88q16 27 8.5 58.5t-35.5 47.5q-27 16-57.5 8.5t-46.5-34.5q-16-28-8.5-59t34.5-48 58-9 47 36zM1882 744q4 15-4 27.5t-23 16.5q-15 3-27.5-5.5t-15.5-22.5q-3-15 5-28t23-16q14-3 26.5 5t15.5 23zM1691 503q15 22 10.5 49t-26.5 43q-22 15-49 10t-42-27-10-49 27-43 48.5-11 41.5 28z"
    }
  }]
};
exports.meetup = meetup;