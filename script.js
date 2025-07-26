const EMBEDDED_CSV_DATA = [
  {
    "venue": "lauter",
    "user": "Guy Elkayam",
    "time": "Sat, 26 Jul 2025 16:55:48 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Guy Elkayam",
    "time": "Sat, 26 Jul 2025 16:54:28 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Oren Sleepwalker",
    "time": "Sat, 26 Jul 2025 16:53:59 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Danny Jakobson",
    "time": "Sat, 26 Jul 2025 16:51:28 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "Adam Berelowitz",
    "time": "Sat, 26 Jul 2025 16:42:55 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Windy Hill",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "b7-beer-house",
    "user": "Yotam Bar-natan",
    "time": "Sat, 26 Jul 2025 16:37:01 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Sat, 26 Jul 2025 16:18:36 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "David Siegel",
    "time": "Sat, 26 Jul 2025 16:09:02 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Ido Szargel",
    "time": "Sat, 26 Jul 2025 16:08:59 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Stav Brener",
    "time": "Sat, 26 Jul 2025 16:07:16 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Sat, 26 Jul 2025 16:07:02 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Stav Brener",
    "time": "Sat, 26 Jul 2025 16:06:26 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 16:03:15 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 16:02:42 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Adam Berelowitz",
    "time": "Sat, 26 Jul 2025 15:58:53 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 15:46:02 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 15:40:24 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Smoothie Bowl - Peachy Dragon",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "David Siegel",
    "time": "Sat, 26 Jul 2025 15:38:40 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Smoothie Bowl - Peachy Dragon",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Adam Berelowitz",
    "time": "Sat, 26 Jul 2025 15:35:23 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "Smoothie Bowl - Peachy Dragon",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Omri Gill",
    "time": "Sat, 26 Jul 2025 15:33:39 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Mexico City Twist",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - Mexican"
  },
  {
    "venue": "lauter",
    "user": "David Siegel",
    "time": "Sat, 26 Jul 2025 15:22:08 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Adam Berelowitz",
    "time": "Sat, 26 Jul 2025 15:22:08 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Smoothie Bowl: Pistachio Fluff",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Adam Berelowitz",
    "time": "Sat, 26 Jul 2025 15:21:39 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "David Siegel",
    "time": "Sat, 26 Jul 2025 15:20:22 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Smoothie Bowl: Pistachio Fluff",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Anton B",
    "time": "Sat, 26 Jul 2025 15:17:20 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Windy Hill",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "David Siegel",
    "time": "Sat, 26 Jul 2025 15:14:43 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Atslananas (\u05e2\u05e6\u05dc\u05e0\u05e0\u05e1) Smoothie NEIPA",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 15:13:27 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 15:12:52 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "David Siegel",
    "time": "Sat, 26 Jul 2025 15:06:22 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Dogs Allowed",
    "brewery": "WarPigs Brewpub",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Ido Szargel",
    "time": "Sat, 26 Jul 2025 14:58:16 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Baize",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Shay Lapid",
    "time": "Sat, 26 Jul 2025 14:55:37 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Adam Berelowitz",
    "time": "Sat, 26 Jul 2025 14:48:07 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Dogs Allowed",
    "brewery": "WarPigs Brewpub",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Sat, 26 Jul 2025 14:41:26 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 14:36:07 +0000",
    "serving": "draft",
    "data_rating": "4.7",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Sat, 26 Jul 2025 14:18:45 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Sat, 26 Jul 2025 14:18:15 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Sat, 26 Jul 2025 14:02:59 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Sat, 26 Jul 2025 14:02:07 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 14:01:33 +0000",
    "serving": "bottle",
    "data_rating": "4.6",
    "beer_name": "Oude Gueuze Tilquin \u00e0 L'ancienne (2022-2023)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Stav Brener",
    "time": "Sat, 26 Jul 2025 13:23:21 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Stav Brener",
    "time": "Sat, 26 Jul 2025 12:58:35 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Stav Brener",
    "time": "Sat, 26 Jul 2025 12:58:06 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Nadav Kaddar",
    "time": "Sat, 26 Jul 2025 12:51:58 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Fabrizio",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "lauter",
    "user": "Stav Brener",
    "time": "Sat, 26 Jul 2025 12:39:38 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Sat, 26 Jul 2025 12:38:33 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Wavelength",
    "brewery": "Equilibrium Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "lauter",
    "user": "Ido Szargel",
    "time": "Sat, 26 Jul 2025 12:37:16 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Wavelength",
    "brewery": "Equilibrium Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "lauter",
    "user": "Stav Brener",
    "time": "Sat, 26 Jul 2025 12:26:41 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 11:24:17 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 11:18:38 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Ale De Provance",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Sat, 26 Jul 2025 10:59:25 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:56:38 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Sat, 26 Jul 2025 10:56:23 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:53:15 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:50:40 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:45:18 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:41:38 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:29:55 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:18:14 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:11:38 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 10:04:32 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Alexander S",
    "time": "Sat, 26 Jul 2025 09:56:34 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 21:06:14 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 21:05:42 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 21:04:44 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 21:02:19 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Fri, 25 Jul 2025 20:54:36 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Fri, 25 Jul 2025 20:53:17 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Fri, 25 Jul 2025 20:52:30 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Smoothie Bowl - Peachy Dragon",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Fri, 25 Jul 2025 20:50:52 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Mexico City Twist",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - Mexican"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Fri, 25 Jul 2025 20:49:04 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Smoothie Bowl: Pistachio Fluff",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Fri, 25 Jul 2025 20:47:58 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 20:46:10 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 20:45:21 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 20:44:31 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 20:43:59 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "K\u00e6rlighed Spring/Summer 2025",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 20:42:41 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 20:20:33 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 20:20:14 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 20:07:59 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 20:07:20 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Dennis Prokopiev",
    "time": "Fri, 25 Jul 2025 20:06:29 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Do Stuff Together",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 19:49:14 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 19:47:54 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 19:47:51 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 19:43:32 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 19:42:24 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 19:38:43 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Ben Gat Sherman",
    "time": "Fri, 25 Jul 2025 19:37:42 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 19:36:55 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Shon Kupstaitis",
    "time": "Fri, 25 Jul 2025 19:35:33 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 19:32:50 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 19:32:02 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 19:31:07 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "Nath (2024)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 19:29:07 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Sang Bleu",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 19:28:03 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Blanche de Bruxelles",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 19:26:57 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Blanche de Bruxelles",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 19:26:04 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "Cuv\u00e9e Saint-Gilloise (Champions)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 19:24:14 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 19:24:02 +0000",
    "serving": "draft",
    "data_rating": "4.2",
    "beer_name": "Grand Cru Bruocsella Lambic Bio",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 19:22:55 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 19:22:13 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 19:22:06 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "Gueuze 2025",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 19:21:03 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 19:20:39 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dennis Prokopiev",
    "time": "Fri, 25 Jul 2025 19:09:17 +0000",
    "serving": "can",
    "data_rating": "3.4",
    "beer_name": "Eclaron Pils",
    "brewery": "Lubrow Brewery",
    "beer_type": "Pilsner - Other"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 19:08:11 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 19:06:47 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 19:04:37 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 19:03:50 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 19:02:19 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Ros\u00e9 De Gambrinus (2025)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 18:59:36 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Vigneronne (2024)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 18:56:04 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Saint Lamvinus",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 18:53:22 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Dennis Prokopiev",
    "time": "Fri, 25 Jul 2025 18:52:56 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "lauter",
    "user": "Nir Langer",
    "time": "Fri, 25 Jul 2025 18:52:20 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Naughty and Nice - Caramel Cookie Chocolate Imperial Stout",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Imperial / Double Milk"
  },
  {
    "venue": "lauter",
    "user": "Liron Fux",
    "time": "Fri, 25 Jul 2025 18:52:10 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 18:51:23 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Naughty and Nice - Caramel Cookie Chocolate Imperial Stout",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Imperial / Double Milk"
  },
  {
    "venue": "lauter",
    "user": "Ido Cohen",
    "time": "Fri, 25 Jul 2025 18:50:05 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Fou' Foune",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 18:35:04 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 18:34:43 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 18:31:44 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Smoothie Bowl: Pistachio Fluff",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Dennis Prokopiev",
    "time": "Fri, 25 Jul 2025 18:29:25 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Nir Langer",
    "time": "Fri, 25 Jul 2025 18:29:21 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Smoothie Bowl - Peachy Dragon",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Zeev",
    "time": "Fri, 25 Jul 2025 18:27:13 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 18:23:16 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 18:22:07 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 18:21:06 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 18:20:32 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Fri, 25 Jul 2025 18:19:46 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 18:19:44 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Fri, 25 Jul 2025 18:17:52 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Fri, 25 Jul 2025 18:17:25 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Sivan Nagola",
    "time": "Fri, 25 Jul 2025 18:16:52 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Fri, 25 Jul 2025 18:16:45 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 18:16:17 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Sivan Nagola",
    "time": "Fri, 25 Jul 2025 18:15:54 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 18:15:23 +0000",
    "serving": "draft",
    "data_rating": "4.8",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Sivan Nagola",
    "time": "Fri, 25 Jul 2025 18:15:23 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Sivan Nagola",
    "time": "Fri, 25 Jul 2025 18:14:47 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Sivan Nagola",
    "time": "Fri, 25 Jul 2025 18:14:07 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 18:10:14 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 18:09:45 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 18:09:41 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 18:08:00 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 18:07:32 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 18:06:06 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 18:04:45 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 18:04:13 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Dennis Prokopiev",
    "time": "Fri, 25 Jul 2025 18:02:45 +0000",
    "serving": "can",
    "data_rating": "2.9",
    "beer_name": "Breakfast Club 3.0",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 18:00:48 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 18:00:06 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 17:59:30 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 17:59:10 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 17:57:39 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Zeev",
    "time": "Fri, 25 Jul 2025 17:56:03 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 17:55:43 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 17:51:44 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 17:50:49 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 17:50:20 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ohad Pinhas",
    "time": "Fri, 25 Jul 2025 17:50:11 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 17:49:29 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 17:46:56 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 17:46:29 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Dennis Prokopiev",
    "time": "Fri, 25 Jul 2025 17:41:37 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "DDH Hopchest DIPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 17:40:57 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Zeev",
    "time": "Fri, 25 Jul 2025 17:32:31 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 17:29:59 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 17:29:57 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 17:29:29 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 17:28:56 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 17:28:33 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 17:27:58 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 17:27:29 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Lin K.",
    "time": "Fri, 25 Jul 2025 17:26:01 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Amit Ran",
    "time": "Fri, 25 Jul 2025 17:26:00 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Instinct Basic",
    "time": "Fri, 25 Jul 2025 17:25:38 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Atslananas (\u05e2\u05e6\u05dc\u05e0\u05e0\u05e1) Smoothie NEIPA",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Omer Peleg",
    "time": "Fri, 25 Jul 2025 17:24:41 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 17:13:02 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 17:06:36 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 17:05:38 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Liron Fux",
    "time": "Fri, 25 Jul 2025 17:03:45 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Liron Fux",
    "time": "Fri, 25 Jul 2025 17:02:23 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 16:57:11 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 16:52:03 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 16:51:24 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Itai Snai",
    "time": "Fri, 25 Jul 2025 16:49:33 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 16:46:24 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 16:45:57 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 16:41:30 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 16:36:42 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Mexico City Twist",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - Mexican"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 16:33:04 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Yaron Sh",
    "time": "Fri, 25 Jul 2025 16:30:41 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 16:29:55 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 16:26:08 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Yaron Sh",
    "time": "Fri, 25 Jul 2025 16:25:13 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "SLUSHY XXXL: Ganja Gangsta",
    "brewery": "450 North Brewing Company",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Cormac Mc Donnell",
    "time": "Fri, 25 Jul 2025 16:21:49 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "lauter",
    "user": "Arthur Neaman",
    "time": "Fri, 25 Jul 2025 16:18:52 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 16:18:30 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 16:06:20 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Eli Smikin",
    "time": "Fri, 25 Jul 2025 16:03:01 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 15:59:34 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 15:58:35 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 15:55:31 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Kelly Inbar",
    "time": "Fri, 25 Jul 2025 15:55:03 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 15:50:15 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Cormac Mc Donnell",
    "time": "Fri, 25 Jul 2025 15:45:09 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Gabi David",
    "time": "Fri, 25 Jul 2025 15:40:37 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 15:25:31 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 15:18:27 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Gabi David",
    "time": "Fri, 25 Jul 2025 15:18:20 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Yahly Guttman",
    "time": "Fri, 25 Jul 2025 15:14:34 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Gabi David",
    "time": "Fri, 25 Jul 2025 15:07:40 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Photon",
    "brewery": "Equilibrium Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 14:52:12 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Cormac Mc Donnell",
    "time": "Fri, 25 Jul 2025 14:45:48 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 14:38:58 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 14:38:48 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 14:37:25 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 14:36:36 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 14:34:00 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Kimat Gornisht",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Non-Alcoholic - Lager"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 14:29:50 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 14:28:46 +0000",
    "serving": "",
    "data_rating": "4.3",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 14:24:30 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yaron Sh",
    "time": "Fri, 25 Jul 2025 14:23:32 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Maryensztadt Klasycznie IPA",
    "brewery": "Maryensztadt",
    "beer_type": "IPA - American"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 14:20:52 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 14:19:39 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 14:12:19 +0000",
    "serving": "",
    "data_rating": "4.2",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Mark Litman",
    "time": "Fri, 25 Jul 2025 14:11:44 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Breakfast Club 3.0",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "lauter",
    "user": "Tanyshka Past",
    "time": "Fri, 25 Jul 2025 14:05:38 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 14:02:10 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 13:57:30 +0000",
    "serving": "",
    "data_rating": "4.2",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "porter-and-sons",
    "user": "Shmupi Koto",
    "time": "Fri, 25 Jul 2025 13:57:21 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Aecht Schlenkerla Rauchbier \u2013 M\u00e4rzen",
    "brewery": "Schlenkerla (\"Heller-Br\u00e4u\" Trum)",
    "beer_type": "Rauchbier"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 13:55:51 +0000",
    "serving": "",
    "data_rating": "4.3",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Yaron Sh",
    "time": "Fri, 25 Jul 2025 13:49:44 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "porter-and-sons",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 13:41:08 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Fruitesse",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 13:39:41 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 13:34:21 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "TheBeerJew",
    "time": "Fri, 25 Jul 2025 13:33:50 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 13:31:24 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Kobi",
    "time": "Fri, 25 Jul 2025 13:31:03 +0000",
    "serving": "",
    "data_rating": "4.2",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 13:26:11 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 13:25:34 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 13:20:55 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 13:15:26 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 13:12:59 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 13:12:34 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 13:12:08 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 13:11:45 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 13:07:13 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 13:06:25 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 13:02:01 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 13:00:33 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 12:54:36 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 12:52:19 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 12:52:16 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 12:50:56 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 12:50:47 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 12:50:01 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 12:49:56 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 12:46:29 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Fri, 25 Jul 2025 12:45:55 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Mexico City Twist",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - Mexican"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 12:43:03 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 12:42:23 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 12:41:20 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 12:41:07 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 12:40:26 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 12:38:22 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "John Beer",
    "time": "Fri, 25 Jul 2025 12:37:18 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 12:34:24 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 12:34:01 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 12:33:14 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 12:33:09 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 12:31:24 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 12:30:46 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 12:30:26 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yoav Kowalski",
    "time": "Fri, 25 Jul 2025 12:29:22 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Dr Troubles",
    "time": "Fri, 25 Jul 2025 12:29:08 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 12:27:45 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "shimon16",
    "time": "Fri, 25 Jul 2025 12:25:54 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Fri, 25 Jul 2025 12:22:14 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Ido Meir",
    "time": "Fri, 25 Jul 2025 12:21:11 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 12:20:55 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Ido Meir",
    "time": "Fri, 25 Jul 2025 12:20:03 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 12:19:40 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Ido Meir",
    "time": "Fri, 25 Jul 2025 12:16:33 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 12:15:59 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 12:15:46 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 12:13:23 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 12:11:23 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 12:10:44 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 12:09:18 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 12:05:29 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Fri, 25 Jul 2025 12:05:23 +0000",
    "serving": "draft",
    "data_rating": "4.7",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 12:03:12 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 12:00:44 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 11:59:05 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 11:59:01 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Fri, 25 Jul 2025 11:56:25 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 11:53:35 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 11:52:23 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 11:46:28 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 11:46:23 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 11:42:23 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 11:42:20 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Max N",
    "time": "Fri, 25 Jul 2025 11:41:46 +0000",
    "serving": "can",
    "data_rating": "3.4",
    "beer_name": "Wingman Tropical Storm",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 11:40:39 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 11:39:32 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 11:34:45 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "YanivMeir1503",
    "time": "Fri, 25 Jul 2025 11:34:30 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Slow And Bitter (\u05de\u05e8\u05d9\u05e8 \u05d5\u05e2\u05e6\u05dc\u05e0\u05d9)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Bitter - Session / Ordinary"
  },
  {
    "venue": "lauter",
    "user": "YanivMeir1503",
    "time": "Fri, 25 Jul 2025 11:33:31 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 11:32:26 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 11:31:39 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 11:30:22 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 11:30:10 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 11:28:58 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 11:27:58 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 11:25:17 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Tom Lahav",
    "time": "Fri, 25 Jul 2025 11:24:39 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 11:22:31 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 11:15:52 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Staropramen Premium / Le\u017e\u00e1k 12",
    "brewery": "Pivovary Staropramen",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "porter-and-sons",
    "user": "Omri Gill",
    "time": "Fri, 25 Jul 2025 11:15:23 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 11:15:18 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 11:11:53 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Fri, 25 Jul 2025 11:10:22 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Fri, 25 Jul 2025 11:09:54 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 11:08:57 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Fri, 25 Jul 2025 11:08:42 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Fri, 25 Jul 2025 11:08:27 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 11:08:16 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 11:00:45 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Dan G",
    "time": "Fri, 25 Jul 2025 10:58:38 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 10:52:05 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Lior Degabli",
    "time": "Fri, 25 Jul 2025 10:50:23 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Max N",
    "time": "Fri, 25 Jul 2025 10:47:43 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Kimat Gornisht",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Non-Alcoholic - Lager"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Fri, 25 Jul 2025 10:45:19 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 10:41:24 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 10:38:13 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Fri, 25 Jul 2025 10:36:18 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 10:35:25 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 10:34:50 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Bilbo Sios",
    "time": "Fri, 25 Jul 2025 10:31:42 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 10:27:34 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 10:26:04 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 10:23:27 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Nahum Haver",
    "time": "Fri, 25 Jul 2025 10:20:43 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Fou' Foune 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 10:19:01 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 10:14:43 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Nahum Haver",
    "time": "Fri, 25 Jul 2025 10:13:35 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Kimat Gornisht",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Non-Alcoholic - Lager"
  },
  {
    "venue": "b7-beer-house",
    "user": "Yotam Bar-natan",
    "time": "Fri, 25 Jul 2025 10:09:25 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 10:08:59 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nahum Haver",
    "time": "Fri, 25 Jul 2025 10:08:51 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 10:06:56 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Nath 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Other"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 09:57:36 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 09:57:07 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 09:54:08 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Nahum Haver",
    "time": "Fri, 25 Jul 2025 09:49:43 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Saint Lamvinus 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 09:42:27 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 09:40:39 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Lee Ker",
    "time": "Fri, 25 Jul 2025 09:35:28 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Blanche de Bruxelles",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 09:35:11 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Lee Ker",
    "time": "Fri, 25 Jul 2025 09:35:00 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Budweiser Budvar B:DARK / Czechvar B:DARK",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Lager - Tmav\u00e9 (Czech Dark)"
  },
  {
    "venue": "lauter",
    "user": "Nahum Haver",
    "time": "Fri, 25 Jul 2025 09:34:06 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Vigneronne 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 09:28:35 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 09:28:29 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Kriek 2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "lauter",
    "user": "Ilya Zagran",
    "time": "Fri, 25 Jul 2025 09:22:23 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Smoothie Bowl: Pistachio Fluff",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "YanivMeir1503",
    "time": "Fri, 25 Jul 2025 09:19:39 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Nahum Haver",
    "time": "Fri, 25 Jul 2025 09:18:19 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Sang Bleu 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Fri, 25 Jul 2025 09:17:40 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Cuv\u00e9e Saint-Gilloise 2023 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Yaron",
    "time": "Fri, 25 Jul 2025 09:17:31 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 09:13:41 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Grand Cru Bruocsella - Draft Version (2021-2022)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Traditional"
  },
  {
    "venue": "lauter",
    "user": "Eylon",
    "time": "Fri, 25 Jul 2025 09:00:48 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Gueuze 2024 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "YanivMeir1503",
    "time": "Fri, 25 Jul 2025 08:59:44 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "lauter",
    "user": "Nahum Haver",
    "time": "Fri, 25 Jul 2025 08:57:11 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ros\u00e9 De Gambrinus  2025 - Draft Version",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 24 Jul 2025 21:29:30 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Shoreline",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 24 Jul 2025 21:01:19 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "\u00d6\u00f6",
    "brewery": "P\u00f5hjala",
    "beer_type": "Porter - Imperial / Double Baltic"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 24 Jul 2025 20:07:33 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 24 Jul 2025 20:06:50 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 24 Jul 2025 19:51:25 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Shoreline",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Mikhail Stolov",
    "time": "Thu, 24 Jul 2025 19:36:19 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "b7-beer-house",
    "user": "saar_buium",
    "time": "Thu, 24 Jul 2025 19:33:27 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Life & Death",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "b7-beer-house",
    "user": "BarBeerPorat",
    "time": "Thu, 24 Jul 2025 19:23:37 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "b7-beer-house",
    "user": "saar_buium",
    "time": "Thu, 24 Jul 2025 19:19:33 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "b7-beer-house",
    "user": "saar_buium",
    "time": "Thu, 24 Jul 2025 19:07:07 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3 \u05e8\u05d5\u05ea \u05e1\u05d5\u05e3 - THAILAND END",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "b7-beer-house",
    "user": "BarBeerPorat",
    "time": "Thu, 24 Jul 2025 19:06:06 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3 \u05e8\u05d5\u05ea \u05e1\u05d5\u05e3 - THAILAND END",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "b7-beer-house",
    "user": "saar_buium",
    "time": "Thu, 24 Jul 2025 19:05:52 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 24 Jul 2025 19:04:58 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Charlotte",
    "brewery": "Nepo Brewing",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 24 Jul 2025 19:03:27 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Smoothie Bowl - Peachy Dragon",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yana O",
    "time": "Thu, 24 Jul 2025 18:57:45 +0000",
    "serving": "",
    "data_rating": "3.8",
    "beer_name": "Agra \u05d0\u05d2\u05e8\u05d4",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yana O",
    "time": "Thu, 24 Jul 2025 18:56:38 +0000",
    "serving": "",
    "data_rating": "4.1",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Thu, 24 Jul 2025 18:54:25 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Agra \u05d0\u05d2\u05e8\u05d4",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Thu, 24 Jul 2025 18:52:39 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Nir Langer",
    "time": "Thu, 24 Jul 2025 18:48:52 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Twist & Stout",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "b7-beer-house",
    "user": "Israel Shenkman",
    "time": "Thu, 24 Jul 2025 18:12:40 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Nadav Kaddar",
    "time": "Thu, 24 Jul 2025 18:07:24 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Guy Azene",
    "time": "Thu, 24 Jul 2025 18:02:22 +0000",
    "serving": "draft",
    "data_rating": "3.7",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Vasa",
    "time": "Thu, 24 Jul 2025 17:52:20 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Mexico City Twist",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - Mexican"
  },
  {
    "venue": "b7-beer-house",
    "user": "Martin Sampson",
    "time": "Thu, 24 Jul 2025 17:51:55 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "M\u00f6bius",
    "brewery": "Equilibrium Brewery",
    "beer_type": "Porter - American"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Thu, 24 Jul 2025 17:29:25 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Thu, 24 Jul 2025 16:49:56 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Atslananas (\u05e2\u05e6\u05dc\u05e0\u05e0\u05e1) Smoothie NEIPA",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yana O",
    "time": "Thu, 24 Jul 2025 16:23:26 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Citra Achra \u05e1\u05d9\u05d8\u05e8\u05d4 \u05d0\u05d7\u05e8\u05d0",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Thu, 24 Jul 2025 16:23:11 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "What Was Was Was Was",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Thu, 24 Jul 2025 16:22:12 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Citra Achra \u05e1\u05d9\u05d8\u05e8\u05d4 \u05d0\u05d7\u05e8\u05d0",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yana O",
    "time": "Thu, 24 Jul 2025 16:22:10 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "What Was Was Was Was",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "German Syomov",
    "time": "Thu, 24 Jul 2025 16:15:42 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "ori_e",
    "time": "Thu, 24 Jul 2025 15:39:39 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Kimat Gornisht",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Non-Alcoholic - Lager"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Liad Shaked",
    "time": "Thu, 24 Jul 2025 15:34:25 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Ido Mund",
    "time": "Thu, 24 Jul 2025 15:19:51 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea\"\u05e4)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 24 Jul 2025 14:54:00 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yotam Bar-natan",
    "time": "Thu, 24 Jul 2025 14:38:05 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Fabrizio",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Ido Cohen",
    "time": "Thu, 24 Jul 2025 14:25:47 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Fabrizio",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Sindalovsky",
    "time": "Thu, 24 Jul 2025 11:58:06 +0000",
    "serving": "draft",
    "data_rating": "2.6",
    "beer_name": "Atslananas (\u05e2\u05e6\u05dc\u05e0\u05e0\u05e1) Smoothie NEIPA",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Roman Lipkin",
    "time": "Thu, 24 Jul 2025 11:42:15 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Mexico City Twist",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - Mexican"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Roman Lipkin",
    "time": "Thu, 24 Jul 2025 11:34:41 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Slow And Bitter (\u05de\u05e8\u05d9\u05e8 \u05d5\u05e2\u05e6\u05dc\u05e0\u05d9)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Bitter - Session / Ordinary"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Archie Halikov",
    "time": "Thu, 24 Jul 2025 03:45:01 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Eureka Dryhop Extract Trial (YCH701) Double Mashed NEDIPA",
    "brewery": "Moersleutel Craft Brewery",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "porter-and-sons",
    "user": "Shmupi Koto",
    "time": "Wed, 23 Jul 2025 20:55:23 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Kriek 100% Lambic Bio (2024)",
    "brewery": "Brasserie Cantillon",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "b7-beer-house",
    "user": "Alex Fux",
    "time": "Wed, 23 Jul 2025 20:19:08 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "M\u00f6bius",
    "brewery": "Equilibrium Brewery",
    "beer_type": "Porter - American"
  },
  {
    "venue": "b7-beer-house",
    "user": "Dima Shleifman",
    "time": "Wed, 23 Jul 2025 20:15:43 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "M\u00f6bius",
    "brewery": "Equilibrium Brewery",
    "beer_type": "Porter - American"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 23 Jul 2025 20:10:27 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "La Trappe Quadrupel",
    "brewery": "Bierbrouwerij De Koningshoeven",
    "beer_type": "Belgian Quadrupel"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "May Cohen",
    "time": "Wed, 23 Jul 2025 20:05:52 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Petit Jus De Mort : Cerise + Mangue + Framboise",
    "brewery": "Messorem",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 23 Jul 2025 20:05:37 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "lauter",
    "user": "Ido Szargel",
    "time": "Wed, 23 Jul 2025 19:53:18 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Breakfast Club 3.0",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "b7-beer-house",
    "user": "Alex Fux",
    "time": "Wed, 23 Jul 2025 19:40:12 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "b7-beer-house",
    "user": "Dima Shleifman",
    "time": "Wed, 23 Jul 2025 19:30:40 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Smoothie Bowl - Peachy Dragon",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "May Cohen",
    "time": "Wed, 23 Jul 2025 19:28:13 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hoppy Lager",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "May Cohen",
    "time": "Wed, 23 Jul 2025 19:27:00 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Xenosapien 3 Year Anniversary Edition",
    "brewery": "P.i.g.s. Brew Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Ido Szargel",
    "time": "Wed, 23 Jul 2025 19:20:27 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "b7-beer-house",
    "user": "Dima Shleifman",
    "time": "Wed, 23 Jul 2025 19:00:28 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Smoothie Bowl: Pistachio Fluff",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Wed, 23 Jul 2025 18:58:55 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Dogs Allowed",
    "brewery": "WarPigs Brewpub",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amit Karavani",
    "time": "Wed, 23 Jul 2025 18:56:12 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Citra Achra \u05e1\u05d9\u05d8\u05e8\u05d4 \u05d0\u05d7\u05e8\u05d0",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Wed, 23 Jul 2025 18:48:51 +0000",
    "serving": "bottle",
    "data_rating": "4.7",
    "beer_name": "Pescharina (Oogst 2023)",
    "brewery": "Boerenerf",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "lauter",
    "user": "Shmupi Koto",
    "time": "Wed, 23 Jul 2025 18:48:12 +0000",
    "serving": "bottle",
    "data_rating": "4.6",
    "beer_name": "Oude Kriek de Schaerbeek Tilquin \u00e0 l'ancienne (2023-2024)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amit Karavani",
    "time": "Wed, 23 Jul 2025 18:44:02 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Fabrizio",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "b7-beer-house",
    "user": "Dima Shleifman",
    "time": "Wed, 23 Jul 2025 18:35:14 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Pij\u017ce",
    "brewery": "Nepo Brewing",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "yairjacoby",
    "time": "Wed, 23 Jul 2025 18:31:30 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Roie Gilad",
    "time": "Wed, 23 Jul 2025 18:26:28 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "Roie Gilad",
    "time": "Wed, 23 Jul 2025 18:18:11 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Slow And Bitter (\u05de\u05e8\u05d9\u05e8 \u05d5\u05e2\u05e6\u05dc\u05e0\u05d9)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Bitter - Session / Ordinary"
  },
  {
    "venue": "lauter",
    "user": "Ido Szargel",
    "time": "Wed, 23 Jul 2025 18:17:36 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yana O",
    "time": "Wed, 23 Jul 2025 18:12:40 +0000",
    "serving": "",
    "data_rating": "4.2",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "b7-beer-house",
    "user": "Dima Shleifman",
    "time": "Wed, 23 Jul 2025 17:59:03 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Bison",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amir Shalev",
    "time": "Wed, 23 Jul 2025 17:47:26 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Peachy Sour",
    "brewery": "Shapiro (\u05e9\u05e4\u05d9\u05e8\u05d0)",
    "beer_type": "Wild Ale - Other"
  },
  {
    "venue": "b7-beer-house",
    "user": "Dima Shleifman",
    "time": "Wed, 23 Jul 2025 17:44:15 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Shoreline",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "lauter",
    "user": "Gadi Hirsch",
    "time": "Wed, 23 Jul 2025 17:43:50 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Ale De Provance",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "Roie Gilad",
    "time": "Wed, 23 Jul 2025 17:40:32 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Hoppy Lager",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amit Karavani",
    "time": "Wed, 23 Jul 2025 17:39:18 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Tennent's Stout",
    "brewery": "Tennent's Caledonian Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amir Shalev",
    "time": "Wed, 23 Jul 2025 17:36:43 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Oude Gueuze Tilquin \u00e0 l'Ancienne",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "Roie Gilad",
    "time": "Wed, 23 Jul 2025 17:33:54 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Roie Gilad",
    "time": "Wed, 23 Jul 2025 17:33:14 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Frenemy",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amir Shalev",
    "time": "Wed, 23 Jul 2025 17:22:29 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "Sloth & Lion",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amir Shalev",
    "time": "Wed, 23 Jul 2025 17:08:31 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "A Sour Love Story",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "lauter",
    "user": "Amit Karavani",
    "time": "Wed, 23 Jul 2025 17:08:04 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Frenemy",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Wed, 23 Jul 2025 17:02:46 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Wingman Touchdown",
    "brewery": "BrewDog",
    "beer_type": "Lager - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amit Karavani",
    "time": "Wed, 23 Jul 2025 16:57:31 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Agra \u05d0\u05d2\u05e8\u05d4",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amir Shalev",
    "time": "Wed, 23 Jul 2025 16:57:14 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Strong Sour (2025)",
    "brewery": "Shapiro (\u05e9\u05e4\u05d9\u05e8\u05d0)",
    "beer_type": "Sour - Other"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Wed, 23 Jul 2025 16:29:40 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Wingman Touchdown",
    "brewery": "BrewDog",
    "beer_type": "Lager - Other"
  },
  {
    "venue": "lauter",
    "user": "mich_8994",
    "time": "Wed, 23 Jul 2025 16:26:12 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Wed, 23 Jul 2025 16:08:43 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Pinball",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "mich_8994",
    "time": "Wed, 23 Jul 2025 16:07:58 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hoppy Lager",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "lauter",
    "user": "mich_8994",
    "time": "Wed, 23 Jul 2025 16:06:31 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Amit Karavani",
    "time": "Wed, 23 Jul 2025 16:06:19 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "New School",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "lauter",
    "user": "igal_mazor",
    "time": "Wed, 23 Jul 2025 16:06:07 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "igal_mazor",
    "time": "Wed, 23 Jul 2025 16:03:53 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Pale Ale (\u05e4\u05d9\u05d9\u05dc \u05d0\u05d9\u05d9\u05dc)",
    "brewery": "Shapiro (\u05e9\u05e4\u05d9\u05e8\u05d0)",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "lauter",
    "user": "mich_8994",
    "time": "Wed, 23 Jul 2025 16:03:37 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Pale Ale (\u05e4\u05d9\u05d9\u05dc \u05d0\u05d9\u05d9\u05dc)",
    "brewery": "Shapiro (\u05e9\u05e4\u05d9\u05e8\u05d0)",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "lauter",
    "user": "igal_mazor",
    "time": "Wed, 23 Jul 2025 16:03:10 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Hoppy Lager",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "lauter",
    "user": "igal_mazor",
    "time": "Wed, 23 Jul 2025 16:01:17 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Day Maker",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "lauter",
    "user": "mich_8994",
    "time": "Wed, 23 Jul 2025 15:37:44 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Frenemy",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Wed, 23 Jul 2025 15:37:31 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Pinball",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "NeriyaBeerlowitz",
    "time": "Wed, 23 Jul 2025 15:37:08 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "mich_8994",
    "time": "Wed, 23 Jul 2025 15:35:17 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Ale De Provance",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "igal_mazor",
    "time": "Wed, 23 Jul 2025 15:34:46 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Frenemy",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "lauter",
    "user": "igal_mazor",
    "time": "Wed, 23 Jul 2025 15:33:59 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Ale De Provance",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "lauter",
    "user": "NeriyaBeerlowitz",
    "time": "Wed, 23 Jul 2025 15:27:00 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "New York Mocaccino",
    "brewery": "Mad Scientist",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "lauter",
    "user": "EliJo101",
    "time": "Wed, 23 Jul 2025 15:26:49 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "New York Mocaccino",
    "brewery": "Mad Scientist",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "lauter",
    "user": "NeriyaBeerlowitz",
    "time": "Wed, 23 Jul 2025 15:24:45 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Day Maker",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Karpatych\u042a Tych",
    "time": "Wed, 23 Jul 2025 13:45:04 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Lazy Bee Classic",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Mead - Session / Short"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Karpatych\u042a Tych",
    "time": "Wed, 23 Jul 2025 13:37:51 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "New School",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "lauter",
    "user": "Dor Lerner",
    "time": "Wed, 23 Jul 2025 13:15:35 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Day Maker",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "lauter",
    "user": "Oly Shamrik",
    "time": "Wed, 23 Jul 2025 13:08:28 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Karpatych\u042a Tych",
    "time": "Wed, 23 Jul 2025 12:57:52 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Dor Lerner",
    "time": "Wed, 23 Jul 2025 12:35:58 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Dor Lerner",
    "time": "Wed, 23 Jul 2025 12:10:43 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Fabrizio",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Leon",
    "time": "Wed, 23 Jul 2025 11:19:44 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Boris",
    "time": "Wed, 23 Jul 2025 11:16:29 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "lauter",
    "user": "Ron Zilberberg",
    "time": "Tue, 22 Jul 2025 21:44:40 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Barb\u00e3r",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Honey Beer"
  },
  {
    "venue": "beerz",
    "user": "Ta\u00efr Avni",
    "time": "Tue, 22 Jul 2025 20:25:01 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "b7-beer-house",
    "user": "Oren Hazan",
    "time": "Tue, 22 Jul 2025 18:24:07 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pink Grapefruit Halcyon",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "janel_lalaine",
    "time": "Tue, 22 Jul 2025 17:31:22 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ale De Provance",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerz",
    "user": "Ta\u00efr Avni",
    "time": "Tue, 22 Jul 2025 17:11:50 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "May Cohen",
    "time": "Tue, 22 Jul 2025 15:04:42 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Ilya Yeruhimovich",
    "time": "Tue, 22 Jul 2025 10:09:53 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "PaF PaF",
    "time": "Mon, 21 Jul 2025 21:21:50 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Citra Achra \u05e1\u05d9\u05d8\u05e8\u05d4 \u05d0\u05d7\u05e8\u05d0",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 18:41:09 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 18:40:24 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "porter-and-sons",
    "user": "Ido Sela",
    "time": "Mon, 21 Jul 2025 18:16:31 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Jaipur",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 18:09:26 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Premium Cider",
    "brewery": "Westons Cider",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "lauter",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 18:04:37 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Hoppy Lager",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 17:39:14 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Buster's Cranberry Lemonade",
    "brewery": "Oak & Ash",
    "beer_type": "Malt Liquor"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 17:38:21 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Fabrizio",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 17:37:27 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "oren avrashi",
    "time": "Mon, 21 Jul 2025 17:36:30 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Shtouff",
    "time": "Mon, 21 Jul 2025 14:39:22 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Nadav Kaddar",
    "time": "Mon, 21 Jul 2025 14:13:40 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "New York Mocaccino",
    "brewery": "Mad Scientist",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Nadav Kaddar",
    "time": "Mon, 21 Jul 2025 13:50:42 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Shtouff",
    "time": "Mon, 21 Jul 2025 11:50:11 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Shtouff",
    "time": "Mon, 21 Jul 2025 11:49:29 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Shtouff",
    "time": "Mon, 21 Jul 2025 11:47:22 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Fabrizio",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Fux",
    "time": "Mon, 21 Jul 2025 11:41:43 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Fux",
    "time": "Mon, 21 Jul 2025 11:39:47 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Agra \u05d0\u05d2\u05e8\u05d4",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Fux",
    "time": "Mon, 21 Jul 2025 11:26:41 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Accept All Cookies",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Alex Fux",
    "time": "Mon, 21 Jul 2025 11:25:31 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Slow And Bitter (\u05de\u05e8\u05d9\u05e8 \u05d5\u05e2\u05e6\u05dc\u05e0\u05d9)",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Bitter - Session / Ordinary"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yana O",
    "time": "Mon, 21 Jul 2025 11:17:17 +0000",
    "serving": "",
    "data_rating": "4.1",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Yana O",
    "time": "Mon, 21 Jul 2025 10:49:11 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Shut Up And Drink Me! (\u05e9\u05ea",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Historical Beer - Lichtenhainer"
  },
  {
    "venue": "lauter",
    "user": "uri822",
    "time": "Mon, 21 Jul 2025 08:00:34 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Malka Tropical",
    "brewery": "Malka (\u05de\u05dc\u05db\u05d4)",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Shmuel Sinai",
    "time": "Mon, 21 Jul 2025 07:40:41 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "\u05e0\u05e7\u05d8\u05e8\u05d5\u05df \u05d4\u05d0\u05dc\u05d9\u05dd",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 20:48:22 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Coconut Cacao",
    "brewery": "Vault City Brewing",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 20:39:45 +0000",
    "serving": "bottle",
    "data_rating": "4.2",
    "beer_name": "Barrel Aged Eton Mess Brush",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 20:33:21 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Oude Gueuze Tilquin \u00e0 l'Ancienne",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 20:25:57 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Barrel Aged Eton Mess Brush",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 20:25:36 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hoppy Lager",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 20:20:25 +0000",
    "serving": "bottle",
    "data_rating": "4.75",
    "beer_name": "Barrel Aged Eton Mess Brush",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 20:15:18 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Coconut Cacao",
    "brewery": "Vault City Brewing",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 20:11:47 +0000",
    "serving": "bottle",
    "data_rating": "4.9",
    "beer_name": "Anniversary XXVIII (28) Ale (2024)",
    "brewery": "Firestone Walker Brewing Company",
    "beer_type": "Strong Ale - American"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 20:08:07 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Coconut Cacao",
    "brewery": "Vault City Brewing",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 20:06:05 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Coconut Cacao",
    "brewery": "Vault City Brewing",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 19:54:12 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Birodalmi Bagoly - Kentucky Straight Bourbon Whisky BA",
    "brewery": "Balkezes",
    "beer_type": "Porter - Imperial / Double Baltic"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:49:00 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "Anniversary XXVIII (28) Ale (2024)",
    "brewery": "Firestone Walker Brewing Company",
    "beer_type": "Strong Ale - American"
  },
  {
    "venue": "lauter",
    "user": "nika",
    "time": "Sun, 20 Jul 2025 19:48:54 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "Anniversary XXVIII (28) Ale (2024)",
    "brewery": "Firestone Walker Brewing Company",
    "beer_type": "Strong Ale - American"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 19:48:13 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "Anniversary XXVIII (28) Ale (2024)",
    "brewery": "Firestone Walker Brewing Company",
    "beer_type": "Strong Ale - American"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 19:46:33 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "Anniversary XXVIII (28) Ale (2024)",
    "brewery": "Firestone Walker Brewing Company",
    "beer_type": "Strong Ale - American"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 19:46:20 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Black Metal",
    "brewery": "Jester King Brewery",
    "beer_type": "Stout - Russian Imperial"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 19:44:28 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Birodalmi Bagoly - Kentucky Straight Bourbon Whisky BA",
    "brewery": "Balkezes",
    "beer_type": "Porter - Imperial / Double Baltic"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 19:34:30 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Birodalmi Bagoly - Kentucky Straight Bourbon Whisky BA",
    "brewery": "Balkezes",
    "beer_type": "Porter - Imperial / Double Baltic"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:34:11 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Birodalmi Bagoly - Kentucky Straight Bourbon Whisky BA",
    "brewery": "Balkezes",
    "beer_type": "Porter - Imperial / Double Baltic"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 19:33:58 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Gelato: Bianco",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 19:27:36 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Black Metal",
    "brewery": "Jester King Brewery",
    "beer_type": "Stout - Russian Imperial"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:25:16 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Black Metal",
    "brewery": "Jester King Brewery",
    "beer_type": "Stout - Russian Imperial"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 19:24:40 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Black Metal",
    "brewery": "Jester King Brewery",
    "beer_type": "Stout - Russian Imperial"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 19:23:33 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Gelato: Bianco",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:15:37 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pale Ale (\u05e4\u05d9\u05d9\u05dc \u05d0\u05d9\u05d9\u05dc)",
    "brewery": "Shapiro (\u05e9\u05e4\u05d9\u05e8\u05d0)",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:14:50 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Gelato: Bianco",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 19:14:06 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Gelato: Bianco",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 19:13:31 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Terapie Chmelem",
    "brewery": "O:VAR",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:11:22 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hoppy Lager",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 19:08:55 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Terapie Chmelem",
    "brewery": "O:VAR",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Lee Ker",
    "time": "Sun, 20 Jul 2025 19:08:15 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Belgian Tripel",
    "brewery": "Sheeta Brewery (\u05d1\u05d9\u05e8\u05d4 \u05e9\u05d9\u05d8\u05d4)",
    "beer_type": "Belgian Tripel"
  },
  {
    "venue": "lauter",
    "user": "David Siegel",
    "time": "Sun, 20 Jul 2025 19:07:22 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Terapie Chmelem",
    "brewery": "O:VAR",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:06:36 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Terapie Chmelem",
    "brewery": "O:VAR",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 19:05:26 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 19:04:43 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 18:58:40 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 18:57:29 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Eclaron Pils | German Hops",
    "brewery": "Lubrow Brewery",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 18:56:57 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 18:55:00 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Silent Night",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 18:51:25 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Forest Grinch",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 18:51:14 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Forest Grinch",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 18:50:29 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Forest Grinch",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 18:48:26 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Frenemy",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 18:47:18 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Forest Grinch",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 18:46:26 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Creepy Hops",
    "brewery": "Browar Birbant",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 18:45:23 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Creepy Hops",
    "brewery": "Browar Birbant",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 18:43:51 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Creepy Hops",
    "brewery": "Browar Birbant",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Dr Solo",
    "time": "Sun, 20 Jul 2025 18:41:38 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Bouboune",
    "brewery": "Brasserie des Beaux Jours",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "schnitt-brewing-company",
    "user": "Nir Langer",
    "time": "Sun, 20 Jul 2025 18:40:30 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Creepy Hops",
    "brewery": "Browar Birbant",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "Or Cohen",
    "time": "Sun, 20 Jul 2025 18:38:09 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Creepy Hops",
    "brewery": "Browar Birbant",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 18:35:49 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Session Intergalactica",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "barak luzon",
    "time": "Sun, 20 Jul 2025 18:34:52 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Bouboune",
    "brewery": "Brasserie des Beaux Jours",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 18:31:29 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "10th Anniversary Smoothie Bowl",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "lauter",
    "user": "Nirit Agiv",
    "time": "Sun, 20 Jul 2025 18:30:48 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Bouboune",
    "brewery": "Brasserie des Beaux Jours",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Sun, 20 Jul 2025 18:27:12 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Sun, 20 Jul 2025 17:37:55 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "\u05e2\u05e9\u05df \u05d4\u05d6\u05de\u05df",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Lager - Smoked"
  },
  {
    "venue": "beerline",
    "user": "Sharon Semenovsky",
    "time": "Sat, 19 Jul 2025 17:30:05 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Must Kuld",
    "brewery": "P\u00f5hjala",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerline",
    "user": "rotem valdman",
    "time": "Sat, 19 Jul 2025 12:35:56 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Argentum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "IPA - Belgian"
  },
  {
    "venue": "beerz",
    "user": "Dmitrii Berman",
    "time": "Thu, 17 Jul 2025 19:02:35 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 17 Jul 2025 16:51:56 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 17 Jul 2025 16:17:44 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "ofek_barzilay",
    "time": "Sat, 12 Jul 2025 20:58:14 +0000",
    "serving": "draft",
    "data_rating": "1.75",
    "beer_name": "Budweiser Budvar B:DARK / Czechvar B:DARK",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Lager - Tmav\u00e9 (Czech Dark)"
  },
  {
    "venue": "beerz",
    "user": "ofek_barzilay",
    "time": "Sat, 12 Jul 2025 20:33:42 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Barb\u00e3r Bok",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Bock - Single / Traditional"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Sat, 12 Jul 2025 20:05:27 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Sat, 12 Jul 2025 19:17:14 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 12 Jul 2025 18:41:58 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "ursa",
    "user": "Mishel iavorsci",
    "time": "Fri, 11 Jul 2025 20:19:51 +0000",
    "serving": "can",
    "data_rating": "4.75",
    "beer_name": "Hazy Jane Guava",
    "brewery": "BrewDog",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "Ohad Tzairi",
    "time": "Fri, 11 Jul 2025 19:55:42 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Bison",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Ellay Sokol",
    "time": "Fri, 11 Jul 2025 19:53:19 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Hacksaw",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Ohad Tzairi",
    "time": "Fri, 11 Jul 2025 19:52:50 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Hacksaw",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Ellay Sokol",
    "time": "Fri, 11 Jul 2025 19:50:26 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Bison",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 10 Jul 2025 19:41:06 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Thu, 10 Jul 2025 18:27:24 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 10 Jul 2025 16:25:02 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Wed, 09 Jul 2025 19:42:42 +0000",
    "serving": "bottle",
    "data_rating": "4.7",
    "beer_name": "Moctezuma Bourbon Barrel Aged Imperial Stout (Heaven Hill Barrels)2020 vintage",
    "brewery": "Seven Island Brewery",
    "beer_type": "Stout - Russian Imperial"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Wed, 09 Jul 2025 19:39:59 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Moctezuma Bourbon Barrel Aged Imperial Stout (Heaven Hill Barrels)2020 vintage",
    "brewery": "Seven Island Brewery",
    "beer_type": "Stout - Russian Imperial"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Wed, 09 Jul 2025 19:36:19 +0000",
    "serving": "can",
    "data_rating": "3.2",
    "beer_name": "Day Maker",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Wed, 09 Jul 2025 19:07:12 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Ane\u017eka Ch.",
    "brewery": "Chroust",
    "beer_type": "IPA - Triple New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "kobi_shamash_6446",
    "time": "Wed, 09 Jul 2025 18:57:13 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Tucher Helles Hefe Weizen",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Wed, 09 Jul 2025 18:54:56 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "10th Anniversary Crazy Lines",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Triple New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Wed, 09 Jul 2025 18:53:44 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "10th Anniversary Crazy Lines",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Triple New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "kobi_shamash_6446",
    "time": "Wed, 09 Jul 2025 18:48:10 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Wed, 09 Jul 2025 18:28:33 +0000",
    "serving": "can",
    "data_rating": "4.75",
    "beer_name": "Nectar of Happiness 17",
    "brewery": "Rodinn\u00fd pivovar Zichovec",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Wed, 09 Jul 2025 18:14:42 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Nebulous Trail",
    "brewery": "Sibeeria Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Wed, 09 Jul 2025 18:12:41 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Nebulous Trail",
    "brewery": "Sibeeria Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Wed, 09 Jul 2025 18:01:00 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Xenosapien 3 Year Anniversary Edition",
    "brewery": "P.i.g.s. Brew Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Wed, 09 Jul 2025 17:44:57 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Post Punk",
    "brewery": "BrewDog",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Alex Fux",
    "time": "Mon, 07 Jul 2025 20:22:48 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Tennent's Stout",
    "brewery": "Tennent's Caledonian Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Sat, 05 Jul 2025 19:48:32 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Don't Lose Hop",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Ziv Ichilov",
    "time": "Fri, 04 Jul 2025 20:09:38 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Ziv Ichilov",
    "time": "Fri, 04 Jul 2025 19:27:56 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Fri, 04 Jul 2025 10:09:29 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 03 Jul 2025 20:44:13 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 03 Jul 2025 16:10:49 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 03 Jul 2025 16:04:34 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 02 Jul 2025 17:05:41 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "La Trappe Quadrupel",
    "brewery": "Bierbrouwerij De Koningshoeven",
    "beer_type": "Belgian Quadrupel"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 02 Jul 2025 11:51:00 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "La Trappe Quadrupel",
    "brewery": "Bierbrouwerij De Koningshoeven",
    "beer_type": "Belgian Quadrupel"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ya Nadi",
    "time": "Tue, 01 Jul 2025 18:18:20 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Fat Cat Pale Ale (\u05d7\u05ea\u05d5\u05dc \u05e9\u05de\u05df)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Tue, 01 Jul 2025 17:01:04 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Tucher Pils",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Tue, 01 Jul 2025 16:59:17 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "ursa",
    "user": "Hdr Kdm",
    "time": "Tue, 01 Jul 2025 16:52:35 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Tue, 01 Jul 2025 16:37:20 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Hdr Kdm",
    "time": "Tue, 01 Jul 2025 16:27:33 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Tue, 01 Jul 2025 13:12:45 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Bitburger Premium Pils",
    "brewery": "Bitburger Brauerei",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "ursa",
    "user": "Alex Fux",
    "time": "Sun, 29 Jun 2025 16:35:04 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Oatmeal IPA 2025",
    "brewery": "Malka (\u05de\u05dc\u05db\u05d4)",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Sat, 28 Jun 2025 16:59:31 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Japanese Rice Lager",
    "brewery": "Mikkeller",
    "beer_type": "Lager - Japanese Rice"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Sat, 28 Jun 2025 16:54:15 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerz",
    "user": "Johnny",
    "time": "Fri, 27 Jun 2025 19:33:19 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Strawberry Sundae",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Vera Markovsky",
    "time": "Fri, 27 Jun 2025 18:16:53 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Raspberry Dark Chocolate Coconut Clusters",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Vladimir Kanevsky",
    "time": "Fri, 27 Jun 2025 17:19:24 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerz",
    "user": "Elieilat7",
    "time": "Thu, 26 Jun 2025 20:45:29 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerz",
    "user": "Elieilat7",
    "time": "Thu, 26 Jun 2025 20:25:41 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 26 Jun 2025 16:05:45 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Petrus Red",
    "brewery": "Brouwerij De Brabandere",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 26 Jun 2025 15:59:16 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 26 Jun 2025 15:54:22 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Yonatan Bashi",
    "time": "Wed, 25 Jun 2025 19:50:10 +0000",
    "serving": "bottle",
    "data_rating": "",
    "beer_name": "Disko (Cellar Series)",
    "brewery": "P\u00f5hjala",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "Yonatan Bashi",
    "time": "Wed, 25 Jun 2025 18:52:30 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Budvar Reserve",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Wed, 25 Jun 2025 18:12:27 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Missy (\u05de\u05d9\u05e1\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerz",
    "user": "Yonatan Bashi",
    "time": "Wed, 25 Jun 2025 18:05:59 +0000",
    "serving": "bottle",
    "data_rating": "",
    "beer_name": "1838",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - English"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 21 Jun 2025 15:59:26 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Luigi",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 21 Jun 2025 15:59:24 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Luigi",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pilsner - Italian"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Thu, 19 Jun 2025 18:09:58 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hofbr\u00e4u Original",
    "brewery": "Staatliches Hofbr\u00e4uhaus M\u00fcnchen",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Thu, 19 Jun 2025 18:09:20 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Simka",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Wed, 18 Jun 2025 15:01:25 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Tea Party: Lemon Verbena",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Wed, 18 Jun 2025 15:01:00 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Tea Party: Lemon Verbena",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Gleb Gusev",
    "time": "Sat, 14 Jun 2025 18:26:05 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Goldstar (\u05d2\u05d5\u05dc\u05d3\u05e1\u05d8\u05d0\u05e8)",
    "brewery": "Tempo Beer Industries Ltd (\u05d8\u05de\u05e4\u05d5)",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Eran Keller",
    "time": "Thu, 12 Jun 2025 20:23:53 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "\u05ea\u05d5\u05e6\u05e8\u05ea \u05d4\u05d0\u05e8\u05e5 7/10",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Ben Gat Sherman",
    "time": "Thu, 12 Jun 2025 20:21:33 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "\u05ea\u05d5\u05e6\u05e8\u05ea \u05d4\u05d0\u05e8\u05e5 7/10",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 20:21:16 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "\u05ea\u05d5\u05e6\u05e8\u05ea \u05d4\u05d0\u05e8\u05e5 7/10",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Ben Gat Sherman",
    "time": "Thu, 12 Jun 2025 20:21:00 +0000",
    "serving": "draft",
    "data_rating": "2.0",
    "beer_name": "Alma Ipa",
    "brewery": "Font Salem Portugal",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Thu, 12 Jun 2025 20:20:50 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "\u05ea\u05d5\u05e6\u05e8\u05ea \u05d4\u05d0\u05e8\u05e5 7/10",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Eran Keller",
    "time": "Thu, 12 Jun 2025 20:20:45 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Alma Ipa",
    "brewery": "Font Salem Portugal",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Guy Azene",
    "time": "Thu, 12 Jun 2025 20:20:41 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "\u05ea\u05d5\u05e6\u05e8\u05ea \u05d4\u05d0\u05e8\u05e5 7/10",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Guy Azene",
    "time": "Thu, 12 Jun 2025 20:19:46 +0000",
    "serving": "draft",
    "data_rating": "0.4",
    "beer_name": "Alma Ipa",
    "brewery": "Font Salem Portugal",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 20:18:55 +0000",
    "serving": "draft",
    "data_rating": "1.25",
    "beer_name": "Alma Ipa",
    "brewery": "Font Salem Portugal",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Thu, 12 Jun 2025 20:18:12 +0000",
    "serving": "draft",
    "data_rating": "0.9",
    "beer_name": "Alma Ipa",
    "brewery": "Font Salem Portugal",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Thu, 12 Jun 2025 20:12:11 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Alma (\u05e2\u05dc\u05de\u05d4)",
    "brewery": "Font Salem Portugal",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 20:11:41 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Alma (\u05e2\u05dc\u05de\u05d4)",
    "brewery": "Font Salem Portugal",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Ben Gat Sherman",
    "time": "Thu, 12 Jun 2025 20:07:32 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Alma (\u05e2\u05dc\u05de\u05d4)",
    "brewery": "Font Salem Portugal",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Eran Keller",
    "time": "Thu, 12 Jun 2025 20:03:31 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Alma (\u05e2\u05dc\u05de\u05d4)",
    "brewery": "Font Salem Portugal",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Guy Azene",
    "time": "Thu, 12 Jun 2025 20:03:11 +0000",
    "serving": "draft",
    "data_rating": "1.5",
    "beer_name": "Alma (\u05e2\u05dc\u05de\u05d4)",
    "brewery": "Font Salem Portugal",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 19:56:49 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "\u05de\u05db\u05d5\u05e0\u05ea \u05d4\u05d6\u05de\u05df",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Eran Keller",
    "time": "Thu, 12 Jun 2025 19:54:29 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "\u05de\u05db\u05d5\u05e0\u05ea \u05d4\u05d6\u05de\u05df",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Thu, 12 Jun 2025 19:54:28 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "\u05de\u05db\u05d5\u05e0\u05ea \u05d4\u05d6\u05de\u05df",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Ben Gat Sherman",
    "time": "Thu, 12 Jun 2025 19:54:05 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "BLOOD ORANGE LIME MAGIC - \u05d1\u05dc\u05d0\u05d3 \u05d0\u05d5\u05e8\u05e0\u05d2' \u05dc\u05d9\u05d9\u05dd \u05de\u05d2'\u05d9\u05e7",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Eran Keller",
    "time": "Thu, 12 Jun 2025 19:45:14 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "BLOOD ORANGE LIME MAGIC - \u05d1\u05dc\u05d0\u05d3 \u05d0\u05d5\u05e8\u05e0\u05d2' \u05dc\u05d9\u05d9\u05dd \u05de\u05d2'\u05d9\u05e7",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Thu, 12 Jun 2025 19:44:34 +0000",
    "serving": "bottle",
    "data_rating": "3.6",
    "beer_name": "Thorns Project",
    "brewery": "Suitcase Beer Co - \u05d1\u05d9\u05e8\u05d5\u05ea \u05de\u05d6\u05d5\u05d5\u05d3\u05d4",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 19:43:52 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Thorns Project",
    "brewery": "Suitcase Beer Co - \u05d1\u05d9\u05e8\u05d5\u05ea \u05de\u05d6\u05d5\u05d5\u05d3\u05d4",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 19:43:15 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Hitachino Nest Espresso Stout",
    "brewery": "Kiuchi Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "bartov-holon",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Thu, 12 Jun 2025 19:42:56 +0000",
    "serving": "bottle",
    "data_rating": "3.8",
    "beer_name": "BLOOD ORANGE LIME MAGIC - \u05d1\u05dc\u05d0\u05d3 \u05d0\u05d5\u05e8\u05e0\u05d2' \u05dc\u05d9\u05d9\u05dd \u05de\u05d2'\u05d9\u05e7",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Guy Azene",
    "time": "Thu, 12 Jun 2025 19:42:43 +0000",
    "serving": "bottle",
    "data_rating": "3.6",
    "beer_name": "Thorns Project",
    "brewery": "Suitcase Beer Co - \u05d1\u05d9\u05e8\u05d5\u05ea \u05de\u05d6\u05d5\u05d5\u05d3\u05d4",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 19:41:47 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "What The Fudge?",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Ben Gat Sherman",
    "time": "Thu, 12 Jun 2025 19:41:40 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Hitachino Nest Espresso Stout",
    "brewery": "Kiuchi Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "bartov-holon",
    "user": "Eran Keller",
    "time": "Thu, 12 Jun 2025 19:41:25 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "What The Fudge?",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Liad Shaked",
    "time": "Thu, 12 Jun 2025 19:41:12 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "BLOOD ORANGE LIME MAGIC - \u05d1\u05dc\u05d0\u05d3 \u05d0\u05d5\u05e8\u05e0\u05d2' \u05dc\u05d9\u05d9\u05dd \u05de\u05d2'\u05d9\u05e7",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Thu, 12 Jun 2025 19:40:51 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "What The Fudge?",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Guy Azene",
    "time": "Thu, 12 Jun 2025 19:40:44 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "BLOOD ORANGE LIME MAGIC - \u05d1\u05dc\u05d0\u05d3 \u05d0\u05d5\u05e8\u05e0\u05d2' \u05dc\u05d9\u05d9\u05dd \u05de\u05d2'\u05d9\u05e7",
    "brewery": "New Pioneer Brewing Co - \u05d7\u05dc\u05d5\u05e5 \u05d7\u05d3\u05e9",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Eran Keller",
    "time": "Thu, 12 Jun 2025 19:38:46 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Thorns Project",
    "brewery": "Suitcase Beer Co - \u05d1\u05d9\u05e8\u05d5\u05ea \u05de\u05d6\u05d5\u05d5\u05d3\u05d4",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "bartov-holon",
    "user": "Guy Azene",
    "time": "Thu, 12 Jun 2025 19:37:46 +0000",
    "serving": "",
    "data_rating": "3.6",
    "beer_name": "Hitachino Nest Espresso Stout",
    "brewery": "Kiuchi Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 12 Jun 2025 17:02:14 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 12 Jun 2025 17:00:32 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 12 Jun 2025 16:43:35 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Petrus Red",
    "brewery": "Brouwerij De Brabandere",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "Tamir Mitnitski",
    "time": "Wed, 11 Jun 2025 17:26:55 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 11 Jun 2025 13:57:58 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Tue, 10 Jun 2025 13:43:32 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Must Kuld",
    "brewery": "P\u00f5hjala",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Tue, 10 Jun 2025 13:42:52 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Tue, 10 Jun 2025 13:39:39 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Th. K\u00f6nig Zwickl",
    "brewery": "K\u00f6nig Brauerei",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 07 Jun 2025 17:11:35 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Sour Series - Exotic Tales",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 07 Jun 2025 16:54:02 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Sour Series - Exotic Tales",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 07 Jun 2025 13:57:22 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Liquid Cocaine",
    "brewery": "Mad Scientist",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 07 Jun 2025 13:54:46 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 07 Jun 2025 06:33:43 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pime \u00d6\u00f6",
    "brewery": "P\u00f5hjala",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Kfeer Blau",
    "time": "Fri, 06 Jun 2025 18:36:26 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 05 Jun 2025 18:50:38 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 05 Jun 2025 18:41:11 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Raspberry Dark Chocolate Coconut Clusters",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Thu, 05 Jun 2025 18:12:39 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Raspberry Sour",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Vera Markovsky",
    "time": "Thu, 05 Jun 2025 17:29:20 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Danish Berry Pudding - R\u00f8dgr\u00f8d Med Fl\u00f8de",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 05 Jun 2025 16:53:29 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Danish Berry Pudding - R\u00f8dgr\u00f8d Med Fl\u00f8de",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Mon, 02 Jun 2025 20:35:25 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "\u05d3\u05d5\u05db\u05d9\u05e4\u05d0\u05d9",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Evgeny Kats",
    "time": "Sun, 01 Jun 2025 13:54:59 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Liquid Cocaine",
    "brewery": "Mad Scientist",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerline",
    "user": "Evgeny Kats",
    "time": "Sun, 01 Jun 2025 13:38:59 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerline",
    "user": "Evgeny Kats",
    "time": "Sun, 01 Jun 2025 13:16:38 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Evgeny Kats",
    "time": "Sun, 01 Jun 2025 12:48:15 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Green Mountain",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Mark Litman",
    "time": "Fri, 30 May 2025 10:24:02 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "\u05d7\u05ea\u05d5\u05dc \u05e2\u05dd \u05ea\u05e2\u05dc\u05d5\u05dc",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 29 May 2025 15:59:18 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Archie Halikov",
    "time": "Thu, 29 May 2025 13:34:17 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Katzra Black (\u05e7\u05e6\u05e8\u05d4 \u05db\u05d4\u05d4)",
    "brewery": "Arava Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d1\u05d9\u05e8\u05d4 \u05e2\u05e8\u05d1\u05d4)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 29 May 2025 13:31:42 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Apricot X Passionfruit X Mango X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 29 May 2025 13:28:11 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Lviv Stout",
    "brewery": "Pravda Brewery",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 29 May 2025 13:21:42 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "HOPul\u00eancia 24.04 IPA Com L\u00fapulos Nacionais 2024 L\u00fapulo Do Maria",
    "brewery": "Cerveja Vadia",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Archie Halikov",
    "time": "Thu, 29 May 2025 13:10:54 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 29 May 2025 13:06:57 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "\u05e2\u05e9\u05df \u05d4\u05d6\u05de\u05df",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Lager - Smoked"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Archie Halikov",
    "time": "Thu, 29 May 2025 13:04:35 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "001 [\u05e9\u05dd \u05d6\u05de\u05e0\u05d9]",
    "brewery": "Arava Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d1\u05d9\u05e8\u05d4 \u05e2\u05e8\u05d1\u05d4)",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 19:47:05 +0000",
    "serving": "bottle",
    "data_rating": "4.3",
    "beer_name": "Mr. & Mrs. Smith",
    "brewery": "Fat Cat Brewery",
    "beer_type": "Homebrew, Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 18:48:34 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Juice Shack Session NEIPA",
    "brewery": "BrewDog",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 18:31:41 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "J\u00e4\u00e4 | Ice Cuv\u00e9e",
    "brewery": "Tori J\u00f5esuu Siidri- Ja Veinitalu",
    "beer_type": "Cider - Ice"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 18:26:12 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Mr. & Mrs. Smith",
    "brewery": "Fat Cat Brewery",
    "beer_type": "Homebrew, Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 18:23:02 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Quince Naturel",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 18:15:57 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "J\u00e4\u00e4 | Ice Cuv\u00e9e",
    "brewery": "Tori J\u00f5esuu Siidri- Ja Veinitalu",
    "beer_type": "Cider - Ice"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 18:09:54 +0000",
    "serving": "can",
    "data_rating": "3.2",
    "beer_name": "Quince Naturel",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 18:06:17 +0000",
    "serving": "bottle",
    "data_rating": "4.7",
    "beer_name": "Pearadise",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 18:04:28 +0000",
    "serving": "bottle",
    "data_rating": "3.9",
    "beer_name": "Winter M\u00e9thode Traditionnelle",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 18:02:25 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Dry Hopped Cider",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:59:39 +0000",
    "serving": "bottle",
    "data_rating": "4.2",
    "beer_name": "Winter M\u00e9thode Traditionnelle",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 17:59:15 +0000",
    "serving": "",
    "data_rating": "3.3",
    "beer_name": "Perry 2022",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Perry / Poir\u00e9"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:52:06 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Dry Hopped Cider",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:48:44 +0000",
    "serving": "bottle",
    "data_rating": "3.8",
    "beer_name": "Perry 2022",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Perry / Poir\u00e9"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 17:38:15 +0000",
    "serving": "can",
    "data_rating": "3.3",
    "beer_name": "Rheum Naturel",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:35:07 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Perry (2024; 5.9%)",
    "brewery": "Tori J\u00f5esuu Siidri- Ja Veinitalu",
    "beer_type": "Cider - Perry / Poir\u00e9"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:31:14 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Rheum Naturel",
    "brewery": "Jaanihanso",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 17:29:30 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Ziema Karstsidrs",
    "brewery": "Abuls Sidra Dar\u012btava",
    "beer_type": "Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Max N",
    "time": "Tue, 27 May 2025 17:26:48 +0000",
    "serving": "bottle",
    "data_rating": "3.9",
    "beer_name": "Ziema Karstsidrs",
    "brewery": "Abuls Sidra Dar\u012btava",
    "beer_type": "Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:25:38 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Ziema Karstsidrs",
    "brewery": "Abuls Sidra Dar\u012btava",
    "beer_type": "Cider - Herbed / Spiced / Hopped"
  },
  {
    "venue": "berlin-florentin",
    "user": "Max N",
    "time": "Tue, 27 May 2025 17:22:56 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "Mr. Pl\u016bme Pussausais",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:22:08 +0000",
    "serving": "bottle",
    "data_rating": "3.9",
    "beer_name": "Mr. Pl\u016bme Pussausais",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 17:18:49 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Vintage 2021",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Max N",
    "time": "Tue, 27 May 2025 17:13:52 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "Vintage 2021",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:12:14 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "Vintage 2021",
    "brewery": "Mr. Pl\u016bme",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 17:12:01 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Poolkuiv \u00d5unasiider Demi Sec",
    "brewery": "Tori J\u00f5esuu Siidri- Ja Veinitalu",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 17:08:23 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "Poolkuiv \u00d5unasiider Demi Sec",
    "brewery": "Tori J\u00f5esuu Siidri- Ja Veinitalu",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "berlin-florentin",
    "user": "Max N",
    "time": "Tue, 27 May 2025 17:06:57 +0000",
    "serving": "bottle",
    "data_rating": "3.6",
    "beer_name": "Poolkuiv \u00d5unasiider Demi Sec",
    "brewery": "Tori J\u00f5esuu Siidri- Ja Veinitalu",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yotam Bar-natan",
    "time": "Tue, 27 May 2025 16:44:02 +0000",
    "serving": "bottle",
    "data_rating": "3.6",
    "beer_name": "Somersby Mango & Lime",
    "brewery": "Carlsberg Group",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eli Smikin",
    "time": "Tue, 27 May 2025 15:43:00 +0000",
    "serving": "",
    "data_rating": "3.7",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "berlin-florentin",
    "user": "uri822",
    "time": "Sun, 25 May 2025 19:56:26 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "berlin-florentin",
    "user": "uri822",
    "time": "Sun, 25 May 2025 19:55:06 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "uri822",
    "time": "Sun, 25 May 2025 17:22:24 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Alon Szczupak",
    "time": "Sat, 24 May 2025 16:15:54 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Alon Szczupak",
    "time": "Sat, 24 May 2025 16:10:01 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Mon, 19 May 2025 20:43:03 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Lemon X Coconut X Pineapple X Cherry Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Mon, 19 May 2025 20:42:36 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Apricot X Passionfruit X Mango X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Mon, 19 May 2025 19:59:22 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Fruitheart Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Zoe Bystrik",
    "time": "Mon, 19 May 2025 17:37:14 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Fruitheart Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Zoe Bystrik",
    "time": "Mon, 19 May 2025 16:47:06 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Apricot X Passionfruit X Mango X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yana O",
    "time": "Mon, 19 May 2025 16:42:36 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Barb\u00e3r Bok",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Bock - Single / Traditional"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 19 May 2025 16:40:27 +0000",
    "serving": "can",
    "data_rating": "2.8",
    "beer_name": "California Sun",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerz",
    "user": "Zoe Bystrik",
    "time": "Mon, 19 May 2025 16:26:28 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Zoe Bystrik",
    "time": "Mon, 19 May 2025 16:20:24 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Zoe Bystrik",
    "time": "Mon, 19 May 2025 16:13:26 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerz",
    "user": "Yana O",
    "time": "Mon, 19 May 2025 16:09:29 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 19 May 2025 16:09:16 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 19 May 2025 16:08:27 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 19 May 2025 16:06:40 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "ursa",
    "user": "lilRaziP",
    "time": "Sun, 18 May 2025 21:52:34 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Erdinger Wei\u00dfbier / Hefe-Weizen",
    "brewery": "Erdinger Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "uri822",
    "time": "Sun, 18 May 2025 09:12:25 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "berlin-florentin",
    "user": "uri822",
    "time": "Sun, 18 May 2025 09:03:12 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerz",
    "user": "narkis",
    "time": "Fri, 16 May 2025 19:19:29 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Morning Joe",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bilbo Sios",
    "time": "Fri, 16 May 2025 17:57:22 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Juice Shack Milkshake",
    "brewery": "BrewDog",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bilbo Sios",
    "time": "Fri, 16 May 2025 17:20:02 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Broken Dream",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bilbo Sios",
    "time": "Fri, 16 May 2025 16:36:01 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "DDH Jaipur",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 15 May 2025 22:16:08 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Weihenstephaner Hefeweissbier Dunkel",
    "brewery": "Bayerische Staatsbrauerei Weihenstephan",
    "beer_type": "Wheat Beer - Dunkelweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Thu, 15 May 2025 18:42:14 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Thu, 15 May 2025 17:54:55 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "\u05d7\u05ea\u05d5\u05dc \u05e2\u05dd \u05ea\u05e2\u05dc\u05d5\u05dc",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 15 May 2025 16:00:06 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 15 May 2025 15:30:37 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Barb\u00e3r Bok",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Bock - Single / Traditional"
  },
  {
    "venue": "berlin-florentin",
    "user": "uri822",
    "time": "Wed, 14 May 2025 17:27:12 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "L\u00f6wenbr\u00e4u Original",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerz",
    "user": "Beny K",
    "time": "Mon, 12 May 2025 18:18:57 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Fruitheart Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Eden Dupont",
    "time": "Sun, 11 May 2025 20:29:21 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sono Burger",
    "time": "Thu, 08 May 2025 21:42:42 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Kasteel Rubus Framboise",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Thu, 08 May 2025 20:28:37 +0000",
    "serving": "can",
    "data_rating": "3.4",
    "beer_name": "Oatmeal IPA 2025",
    "brewery": "Malka (\u05de\u05dc\u05db\u05d4)",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sono Burger",
    "time": "Thu, 08 May 2025 17:39:43 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 08 May 2025 16:49:15 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 08 May 2025 16:05:27 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Bacchus Frambozenbier",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "berlin-florentin",
    "user": "uri822",
    "time": "Wed, 07 May 2025 18:10:10 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tiernan O'Rourke",
    "time": "Wed, 07 May 2025 16:26:51 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Franziskaner Premium Weissbier Naturtr\u00fcb",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tiernan O'Rourke",
    "time": "Wed, 07 May 2025 16:09:23 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Shikma IPA",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tiernan O'Rourke",
    "time": "Wed, 07 May 2025 15:28:41 +0000",
    "serving": "",
    "data_rating": "2.25",
    "beer_name": "Goldstar (\u05d2\u05d5\u05dc\u05d3\u05e1\u05d8\u05d0\u05e8)",
    "brewery": "Tempo Beer Industries Ltd (\u05d8\u05de\u05e4\u05d5)",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 07 May 2025 14:11:03 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "M\u00fcnchner Weisse",
    "brewery": "Staatliches Hofbr\u00e4uhaus M\u00fcnchen",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nir Langer",
    "time": "Mon, 05 May 2025 20:51:54 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "FEAT. Nepo - Stardust",
    "brewery": "Funky Fluid",
    "beer_type": "IPA - Triple New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Mon, 05 May 2025 19:47:22 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "FEAT. Nepo - Stardust",
    "brewery": "Funky Fluid",
    "beer_type": "IPA - Triple New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nir Langer",
    "time": "Mon, 05 May 2025 19:43:25 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Tutto Fatto",
    "brewery": "Birrificio WAR",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Mon, 05 May 2025 19:41:58 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Tutto Fatto",
    "brewery": "Birrificio WAR",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Kobi",
    "time": "Mon, 05 May 2025 19:41:00 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Tutto Fatto",
    "brewery": "Birrificio WAR",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nir Langer",
    "time": "Mon, 05 May 2025 19:33:44 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Juice Bomb",
    "brewery": "Sloop Brewing Co.",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Mon, 05 May 2025 19:33:13 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Hydra | Passion Fruit + Mango + Pink Guava",
    "brewery": "Mortalis Brewing Company",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Kobi",
    "time": "Mon, 05 May 2025 19:32:05 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Hydra | Passion Fruit + Mango + Pink Guava",
    "brewery": "Mortalis Brewing Company",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Roni Waldman",
    "time": "Mon, 05 May 2025 19:27:41 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Juice Bomb",
    "brewery": "Sloop Brewing Co.",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Kobi",
    "time": "Mon, 05 May 2025 19:27:34 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Juice Bomb",
    "brewery": "Sloop Brewing Co.",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Mon, 05 May 2025 19:24:27 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Juice Bomb",
    "brewery": "Sloop Brewing Co.",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nir Langer",
    "time": "Mon, 05 May 2025 19:20:28 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "SchnittBazaar (\u05e9\u05e0\u05d9\u05d8\u05d1\u05d0\u05d6\u05e8)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Farmhouse Ale - Saison"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nir Langer",
    "time": "Mon, 05 May 2025 19:19:55 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "\u05d7\u05ea\u05d5\u05dc \u05e2\u05dd \u05ea\u05e2\u05dc\u05d5\u05dc",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Kobi",
    "time": "Mon, 05 May 2025 18:43:05 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "\u05d7\u05ea\u05d5\u05dc \u05e2\u05dd \u05ea\u05e2\u05dc\u05d5\u05dc",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Mon, 05 May 2025 18:39:41 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "SchnittBazaar (\u05e9\u05e0\u05d9\u05d8\u05d1\u05d0\u05d6\u05e8)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Farmhouse Ale - Saison"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Kobi",
    "time": "Mon, 05 May 2025 18:20:09 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "SchnittBazaar (\u05e9\u05e0\u05d9\u05d8\u05d1\u05d0\u05d6\u05e8)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Farmhouse Ale - Saison"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Mon, 05 May 2025 18:13:24 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "\u05d7\u05ea\u05d5\u05dc \u05e2\u05dd \u05ea\u05e2\u05dc\u05d5\u05dc",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Sat, 03 May 2025 15:35:21 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Lumina",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Sat, 03 May 2025 14:42:52 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Shesh Ahuz Kapara (\u05e9\u05e9 \u05d0\u05d7\u05d5\u05d6 \u05db\u05e4\u05e8\u05d4)",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Mild - Other"
  },
  {
    "venue": "ursa",
    "user": "Miki Zaidel",
    "time": "Fri, 02 May 2025 20:02:19 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Hard Apple Cider - Dry (\u05e1\u05d9\u05d9\u05d3\u05e8 \u05ea\u05e4\u05d5\u05d7\u05d9\u05dd \u05d0\u05dc\u05db\u05d5\u05d4\u05d5\u05dc\u05d9 \u05d9\u05d1\u05e9)",
    "brewery": "Hamatsesa (\u05d4\u05de\u05ea\u05e1\u05e1\u05d4)",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "ursa",
    "user": "Miki Zaidel",
    "time": "Fri, 02 May 2025 20:00:56 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Foggyn\u2019 Delicious",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Tomer Stein",
    "time": "Sun, 27 Apr 2025 16:11:00 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Yotam-Gilad Hefer",
    "time": "Sat, 26 Apr 2025 21:44:52 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Missy (\u05de\u05d9\u05e1\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Yotam-Gilad Hefer",
    "time": "Sat, 26 Apr 2025 20:49:39 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "OMG (2023 - \u05ea\u05e9\u05e4\u05f4\u05d2)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "bartov-holon",
    "user": "maxim__petrov",
    "time": "Sat, 26 Apr 2025 19:48:30 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Monkey Business",
    "brewery": "Oak & Ash",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "narkis",
    "time": "Fri, 25 Apr 2025 19:53:52 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Budweiser Budvar B:DARK / Czechvar B:DARK",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Lager - Tmav\u00e9 (Czech Dark)"
  },
  {
    "venue": "beerline",
    "user": "Eran Iakobi",
    "time": "Fri, 25 Apr 2025 11:50:16 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 24 Apr 2025 16:47:21 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 24 Apr 2025 16:34:58 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Dark Fruit",
    "brewery": "Magners Irish Cider",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:29:04 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Missy (\u05de\u05d9\u05e1\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:27:44 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "\u05d7\u05ea\u05d5\u05dc \u05e2\u05dd \u05ea\u05e2\u05dc\u05d5\u05dc",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:26:31 +0000",
    "serving": "draft",
    "data_rating": "2.25",
    "beer_name": "Pink Lemonade Cider (\u05e2\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc \u05d7\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:25:09 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Gallagher PILS (\u05d2\u05d0\u05dc\u05d0\u05d2\u05e8)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:24:07 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Wheatney (\u05d5\u05d5\u05d9\u05d8\u05e0\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:22:58 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:22:09 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u05d2\u05dc \u05e1\u05d9\u05dc\u05d1\u05e8\u05de\u05df",
    "time": "Wed, 23 Apr 2025 14:21:17 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Fat Cat Pale Ale (\u05d7\u05ea\u05d5\u05dc \u05e9\u05de\u05df)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerline",
    "user": "Anton Shlafman",
    "time": "Mon, 21 Apr 2025 17:17:08 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Rinktinis",
    "brewery": "Volfas Engelman",
    "beer_type": "Lager - Pale"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Mon, 21 Apr 2025 16:35:34 +0000",
    "serving": "can",
    "data_rating": "2.5",
    "beer_name": "Lucky Break",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 18 Apr 2025 15:31:30 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 17 Apr 2025 17:13:54 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Barb\u00e3r",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Honey Beer"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 17 Apr 2025 15:55:34 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Roy Navott",
    "time": "Tue, 15 Apr 2025 20:03:28 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Miki Zaidel",
    "time": "Mon, 14 Apr 2025 15:33:25 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "ursa",
    "user": "Miki Zaidel",
    "time": "Mon, 14 Apr 2025 15:32:43 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Batsheva Yanir",
    "time": "Mon, 14 Apr 2025 11:35:31 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Fat Cat Pale Ale (\u05d7\u05ea\u05d5\u05dc \u05e9\u05de\u05df)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 10 Apr 2025 18:07:13 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 10 Apr 2025 17:09:49 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Wed, 09 Apr 2025 19:08:07 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Wed, 09 Apr 2025 19:06:17 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "jonas_weber_96",
    "time": "Sun, 06 Apr 2025 09:51:31 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Gallagher PILS (\u05d2\u05d0\u05dc\u05d0\u05d2\u05e8)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sat, 05 Apr 2025 16:01:18 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Lucky Break",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Roman",
    "time": "Fri, 04 Apr 2025 22:53:46 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Morning Joe",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerz",
    "user": "Tamir Mitnitski",
    "time": "Fri, 04 Apr 2025 19:49:58 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Bacchus Frambozenbier",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 03 Apr 2025 17:01:07 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Into the Timberstorm",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Gluten-Free"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 03 Apr 2025 16:21:40 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Evgeniy Rovner",
    "time": "Thu, 03 Apr 2025 11:08:15 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Katzra Black (\u05e7\u05e6\u05e8\u05d4 \u05db\u05d4\u05d4)",
    "brewery": "Arava Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d1\u05d9\u05e8\u05d4 \u05e2\u05e8\u05d1\u05d4)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Evgeniy Rovner",
    "time": "Thu, 03 Apr 2025 11:01:34 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "001 [\u05e9\u05dd \u05d6\u05de\u05e0\u05d9]",
    "brewery": "Arava Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d1\u05d9\u05e8\u05d4 \u05e2\u05e8\u05d1\u05d4)",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Wed, 02 Apr 2025 16:21:43 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Weihenstephaner Hefeweissbier Dunkel",
    "brewery": "Bayerische Staatsbrauerei Weihenstephan",
    "beer_type": "Wheat Beer - Dunkelweizen"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Wed, 02 Apr 2025 16:13:46 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Weihenstephaner Hefeweissbier Dunkel",
    "brewery": "Bayerische Staatsbrauerei Weihenstephan",
    "beer_type": "Wheat Beer - Dunkelweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 18:28:28 +0000",
    "serving": "can",
    "data_rating": "4.75",
    "beer_name": "Almond X Vanilla Imperial Stout",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 18:19:44 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Barrel Aged Sour Cherry Imperial Stout",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 18:13:48 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Frosted Banana Cupcake",
    "brewery": "Nurme",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 18:13:12 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Ummja V\u0101rava",
    "brewery": "Labietis. Pagan Brews",
    "beer_type": "Porter - Baltic"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:48:42 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Strawberry X Cherry X Banana X Almond Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:45:16 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Invitation To Vacation",
    "brewery": "Nurme",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:39:32 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Spiced Plum Pudding",
    "brewery": "Nurme",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:34:31 +0000",
    "serving": "can",
    "data_rating": "2.5",
    "beer_name": "Sea Goes Radical",
    "brewery": "Nurme",
    "beer_type": "Sour - Traditional Gose"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:29:26 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Pineapple x Apricot x Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:23:58 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Haze In A Maze Galaxy, LUPOMAX Amarillo, Mosaic, BRU-1",
    "brewery": "ODU Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:20:28 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "FAIRY DUST: Super Sauvin, Riwaka 2024 & Rakau Hop Kief",
    "brewery": "Nurme",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:17:55 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "COCO JUMBO / HAZY IPA",
    "brewery": "Hopalaa",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "May Cohen",
    "time": "Tue, 01 Apr 2025 17:08:53 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "\u0100rpus X Cloudwater TDH Double 5 DIPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Dror B",
    "time": "Sun, 30 Mar 2025 20:43:53 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Budvar Reserve",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Itay Sharmigin",
    "time": "Sun, 30 Mar 2025 14:19:34 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Andrey Granovsky",
    "time": "Sat, 29 Mar 2025 14:31:22 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Kind_ Drummer",
    "time": "Fri, 28 Mar 2025 17:42:42 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Kind_ Drummer",
    "time": "Fri, 28 Mar 2025 17:21:57 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Mongozo Coconut",
    "brewery": "Mongozo",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Germano Corr\u00eaa",
    "time": "Thu, 27 Mar 2025 18:48:34 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Wed, 26 Mar 2025 19:59:46 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Night Shift 2024 - Imperial Milk Porter Aged In Pedro Xim\u00e9nez Sherry & Rum Barrels W. Sour Cherry & Poppy Seed",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Porter - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Wed, 26 Mar 2025 19:07:01 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "3 Fonteinen Oude Geuze (season 22|23) Blend No. 7",
    "brewery": "Brouwerij 3 Fonteinen",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Wed, 26 Mar 2025 17:17:15 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Necessary Evil Single Malt English Whisky",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Mon, 24 Mar 2025 21:36:22 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Rebel Berry",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Mon, 24 Mar 2025 21:00:37 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Forest",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Amily Aizner",
    "time": "Mon, 24 Mar 2025 20:34:02 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Gentle Bastard",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 20 Mar 2025 20:44:19 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "Prophecy - \u05e4\u05e8\u05d5\u05e4\u05e1\u05d9",
    "brewery": "Suitcase Beer Co - \u05d1\u05d9\u05e8\u05d5\u05ea \u05de\u05d6\u05d5\u05d5\u05d3\u05d4",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 20 Mar 2025 20:12:21 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "More Than Amber (Cellar Series)",
    "brewery": "P\u00f5hjala",
    "beer_type": "Porter - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 20 Mar 2025 19:44:25 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Zen Hoppy Lager",
    "brewery": "Av\u00f3s Cerveja Artesanal",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerz",
    "user": "Vera Markovsky",
    "time": "Thu, 20 Mar 2025 19:26:32 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Fika",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerz",
    "user": "Vera Markovsky",
    "time": "Thu, 20 Mar 2025 19:26:13 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "SZOSA",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 20 Mar 2025 19:16:19 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "SZOSA",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 20 Mar 2025 18:55:50 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Fika",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 20 Mar 2025 18:26:59 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Choc Chip Cookie Dough Lucaria",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 20 Mar 2025 18:16:32 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "SZOSA",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 20 Mar 2025 15:16:20 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Persian Haze",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Omer Shahar",
    "time": "Tue, 18 Mar 2025 20:33:04 +0000",
    "serving": "bottle",
    "data_rating": "4.75",
    "beer_name": "Cocob\u00e4nger",
    "brewery": "P\u00f5hjala",
    "beer_type": "Stout - Imperial / Double Coffee"
  },
  {
    "venue": "beerz",
    "user": "Omer Shahar",
    "time": "Tue, 18 Mar 2025 19:13:32 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "SZOSA",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dar Hourvitz",
    "time": "Tue, 18 Mar 2025 09:32:01 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Mordechai (\u05de\u05d5\u05e8\u05d3\u05db\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "barak luzon",
    "time": "Sat, 15 Mar 2025 16:54:01 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Electric Currant",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "barak luzon",
    "time": "Sat, 15 Mar 2025 16:53:40 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Jaipur",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "zloto",
    "time": "Sat, 15 Mar 2025 16:45:55 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Hoppy Xmas",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Fri, 14 Mar 2025 20:25:27 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Tennent's Stout",
    "brewery": "Tennent's Caledonian Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Tue, 11 Mar 2025 18:04:02 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Choc Chip Cookie Dough Lucaria",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerz",
    "user": "Johnny",
    "time": "Mon, 10 Mar 2025 20:38:46 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Mon, 10 Mar 2025 19:19:50 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Lazy Bee Classic",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Mead - Session / Short"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Mon, 10 Mar 2025 18:42:39 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Porter & Sons -Coconut",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Porter - American"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Sun, 09 Mar 2025 19:59:02 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Budvar Reserve",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Sat, 08 Mar 2025 12:14:12 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Ester \u05d0\u05e1\u05ea\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Ohad Tzairi",
    "time": "Thu, 06 Mar 2025 20:59:02 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Selfish Games - Aurora Haze",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Ohad Tzairi",
    "time": "Thu, 06 Mar 2025 20:40:13 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Sour Series - Exotic Tales",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 06 Mar 2025 17:15:28 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 06 Mar 2025 16:51:50 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Smoothie Bowl - Soft & Fruity",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Assaf Murkes",
    "time": "Tue, 04 Mar 2025 05:41:18 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Persian Haze",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Assaf Murkes",
    "time": "Tue, 04 Mar 2025 05:36:48 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Mordechai (\u05de\u05d5\u05e8\u05d3\u05db\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Assaf Murkes",
    "time": "Tue, 04 Mar 2025 05:34:03 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Ester \u05d0\u05e1\u05ea\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Roni Waldman",
    "time": "Sun, 02 Mar 2025 20:33:38 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Ester \u05d0\u05e1\u05ea\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Sun, 02 Mar 2025 19:33:40 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Ester \u05d0\u05e1\u05ea\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Darja Balasheva",
    "time": "Sun, 02 Mar 2025 17:16:06 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Darja Balasheva",
    "time": "Sun, 02 Mar 2025 16:55:36 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "\u05ea\u05de\u05ea\u05d9",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "ursa",
    "user": "Ori Huri",
    "time": "Sat, 01 Mar 2025 16:08:40 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 01 Mar 2025 16:08:33 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Ori Huri",
    "time": "Sat, 01 Mar 2025 16:02:31 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Porter & Sons Salted Caramel 2024",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 01 Mar 2025 15:46:24 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "bartov-holon",
    "user": "THELIDORS",
    "time": "Fri, 28 Feb 2025 22:21:12 +0000",
    "serving": "",
    "data_rating": "2.0",
    "beer_name": "Kru\u0161ovice \u010cern\u00e9",
    "brewery": "Heineken \u010cesk\u00e1 Republika",
    "beer_type": "Lager - Tmav\u00e9 (Czech Dark)"
  },
  {
    "venue": "bartov-holon",
    "user": "THELIDORS",
    "time": "Fri, 28 Feb 2025 22:20:40 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Edelweiss Weizenbier",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Thu, 27 Feb 2025 20:19:01 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "SZOSA",
    "brewery": "Nepo Brewing",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 27 Feb 2025 18:09:57 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 27 Feb 2025 17:42:15 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Smoothie Bowl: Forest Fruits",
    "brewery": "Nepo Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yael Vago",
    "time": "Thu, 27 Feb 2025 16:41:35 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Sweet Temptation",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Sat, 22 Feb 2025 20:16:46 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Sat, 22 Feb 2025 19:24:21 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Sat, 22 Feb 2025 18:33:47 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Gabriel Gugel",
    "time": "Sat, 22 Feb 2025 17:38:39 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Benediktiner Hell",
    "brewery": "Benediktiner Weissbr\u00e4u",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerz",
    "user": "narkis",
    "time": "Fri, 21 Feb 2025 20:11:45 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Hazelnut Brown Ale",
    "brewery": "Rogue Ales",
    "beer_type": "Brown Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Fri, 21 Feb 2025 19:15:12 +0000",
    "serving": "can",
    "data_rating": "4.6",
    "beer_name": "Plum X Mango X Pineapple X Coconut Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Alon Goldenberg",
    "time": "Thu, 20 Feb 2025 21:29:51 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Electric Currant",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "ursa",
    "user": "Alon Goldenberg",
    "time": "Thu, 20 Feb 2025 21:29:08 +0000",
    "serving": "",
    "data_rating": "2.25",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "berlin-florentin",
    "user": "Alon Goldenberg",
    "time": "Thu, 20 Feb 2025 21:27:36 +0000",
    "serving": "bottle",
    "data_rating": "2.25",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "beerline",
    "user": "stas_shapiro_8354",
    "time": "Thu, 20 Feb 2025 20:30:41 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Jaipur Noir",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Black / Cascadian Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "stas_shapiro_8354",
    "time": "Thu, 20 Feb 2025 20:30:07 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Delirium Black Barrel Aged",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "stas_shapiro_8354",
    "time": "Thu, 20 Feb 2025 20:29:41 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "stas_shapiro_8354",
    "time": "Thu, 20 Feb 2025 20:29:07 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Barbe 10 / Barbe X",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beerline",
    "user": "stas_shapiro_8354",
    "time": "Thu, 20 Feb 2025 20:27:16 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Tremens",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 20 Feb 2025 17:57:53 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Archie Halikov",
    "time": "Thu, 20 Feb 2025 17:46:14 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Porter Alon (\u05e4\u05d5\u05e8\u05d8\u05e8 \u05d0\u05dc\u05d5\u05df)",
    "brewery": "Negev Brewery (\u05e0\u05d2\u05d1)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Archie Halikov",
    "time": "Thu, 20 Feb 2025 17:44:52 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Christmas Ale",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 20 Feb 2025 17:41:40 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Selfish Games - Aurora Haze",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Archie Halikov",
    "time": "Thu, 20 Feb 2025 17:41:15 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "berlin-florentin",
    "user": "Archie Halikov",
    "time": "Thu, 20 Feb 2025 17:36:17 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Kasteel Rubus Framboise",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Thu, 20 Feb 2025 17:10:00 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Selfish Games - Pink Magic",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Thu, 20 Feb 2025 16:30:30 +0000",
    "serving": "can",
    "data_rating": "2.75",
    "beer_name": "Nouveau",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "Chen Ozer",
    "time": "Sun, 16 Feb 2025 18:52:34 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerz",
    "user": "Darja Balasheva",
    "time": "Sat, 15 Feb 2025 20:54:15 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerz",
    "user": "Darja Balasheva",
    "time": "Sat, 15 Feb 2025 19:07:56 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "K\u00f5u",
    "brewery": "P\u00f5hjala",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Sat, 15 Feb 2025 19:07:24 +0000",
    "serving": "can",
    "data_rating": "4.6",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Sat, 15 Feb 2025 17:39:15 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Karpologi",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ben Rouda",
    "time": "Sat, 15 Feb 2025 17:35:58 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Shesh Ahuz Kapara (\u05e9\u05e9 \u05d0\u05d7\u05d5\u05d6 \u05db\u05e4\u05e8\u05d4)",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "Mild - Other"
  },
  {
    "venue": "beerz",
    "user": "Jonathan Adi",
    "time": "Fri, 14 Feb 2025 21:20:52 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "K\u00f5u",
    "brewery": "P\u00f5hjala",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 14 Feb 2025 21:04:59 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Batsquatch",
    "brewery": "Rogue Ales",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 14 Feb 2025 21:02:39 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Johnny",
    "time": "Fri, 14 Feb 2025 21:00:15 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Simka",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Jonathan Adi",
    "time": "Fri, 14 Feb 2025 20:33:13 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Selfish Games - Aurora Haze",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Johnny",
    "time": "Fri, 14 Feb 2025 20:31:24 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Johnny",
    "time": "Fri, 14 Feb 2025 20:13:40 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Sour Series - Exotic Tales",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Yoel Gil",
    "time": "Fri, 14 Feb 2025 18:00:43 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Hobgoblin Legendary Ruby Beer",
    "brewery": "Marston's Brewery",
    "beer_type": "Brown Ale - English"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Fri, 14 Feb 2025 06:56:54 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Dead Guy Imperial IPA",
    "brewery": "Rogue Ales",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 13 Feb 2025 21:14:36 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Tucher Pils",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 13 Feb 2025 20:45:58 +0000",
    "serving": "can",
    "data_rating": "2.0",
    "beer_name": "Winter Royalty",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - Red"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 13 Feb 2025 19:35:41 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "7 Year Anniversary Coconut IPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 13 Feb 2025 19:19:49 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Batsquatch",
    "brewery": "Rogue Ales",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 13 Feb 2025 18:39:46 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 13 Feb 2025 17:55:23 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Selfish Games - Double Hazy Queen 2024 - Nectaron Edition",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 13 Feb 2025 17:43:01 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Pleroma Karpologi Pineapple Peach Marshmallow Cr\u00e9me Brul\u00e9e Sour",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Itay Sharmigin",
    "time": "Wed, 12 Feb 2025 20:17:36 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "DDH Hopchest DIPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Itay Sharmigin",
    "time": "Wed, 12 Feb 2025 20:16:12 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Electric Currant",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ben Rouda",
    "time": "Tue, 11 Feb 2025 19:06:18 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Japanese Rice Lager",
    "brewery": "Mikkeller",
    "beer_type": "Lager - Japanese Rice"
  },
  {
    "venue": "ursa",
    "user": "Asi",
    "time": "Sat, 08 Feb 2025 18:32:04 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 08 Feb 2025 18:01:03 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Electric Currant",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 08 Feb 2025 17:59:20 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Electric Currant",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerz",
    "user": "Beny K",
    "time": "Fri, 07 Feb 2025 21:07:52 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Selfish Games - Black Magic",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 07 Feb 2025 21:06:59 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Dead Guy IPA",
    "brewery": "Rogue Ales",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 07 Feb 2025 21:06:18 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Dead Guy Ale",
    "brewery": "Rogue Ales",
    "beer_type": "Bock - Hell / Maibock / Lentebock"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Fri, 07 Feb 2025 20:57:53 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Simka",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Johnny",
    "time": "Fri, 07 Feb 2025 20:49:59 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Peach Cooler Shaker",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "Johnny",
    "time": "Fri, 07 Feb 2025 20:32:37 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "K\u00f5u",
    "brewery": "P\u00f5hjala",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 07 Feb 2025 20:19:12 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "Oude Airelle Sauvage Tilquin \u00e0 l'Ancienne (2021-2022)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "beerline",
    "user": "Ilya Markovsky",
    "time": "Fri, 07 Feb 2025 09:25:58 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Simka",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "ursa",
    "user": "mosi6",
    "time": "Thu, 06 Feb 2025 22:45:33 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Thu, 06 Feb 2025 20:06:02 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Pineapple X Coconut X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Reut Damari",
    "time": "Thu, 06 Feb 2025 19:43:56 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "7 Year Anniversary Coconut IPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Thu, 06 Feb 2025 19:42:02 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "7 Year Anniversary Coconut IPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 06 Feb 2025 17:07:41 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Pear X Mango X Pineapple Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 06 Feb 2025 16:53:01 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Tue, 04 Feb 2025 18:48:43 +0000",
    "serving": "can",
    "data_rating": "3.2",
    "beer_name": "Dead Guy Ale",
    "brewery": "Rogue Ales",
    "beer_type": "Bock - Hell / Maibock / Lentebock"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Tue, 04 Feb 2025 16:38:57 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "K\u00f5u",
    "brewery": "P\u00f5hjala",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Mon, 03 Feb 2025 12:38:53 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Mon, 03 Feb 2025 12:37:51 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Mon, 03 Feb 2025 12:34:50 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "\u05ea\u05de\u05ea\u05d9",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Yuval Erets Kdosha",
    "time": "Mon, 03 Feb 2025 10:40:45 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Yuval Erets Kdosha",
    "time": "Mon, 03 Feb 2025 10:39:42 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 22:50:07 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hard Apple Cider (\u05e9\u05d9\u05db\u05e8 \u05e1\u05d9\u05d9\u05d3\u05e8 \u05ea\u05e4\u05d5\u05d7)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Sweet"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Vov Laz",
    "time": "Sun, 02 Feb 2025 20:38:24 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Vov Laz",
    "time": "Sun, 02 Feb 2025 20:31:19 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Mark Markish",
    "time": "Sun, 02 Feb 2025 19:29:10 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "\u05ea\u05de\u05ea\u05d9",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Sun, 02 Feb 2025 19:28:34 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Assaf Murkes",
    "time": "Sun, 02 Feb 2025 19:13:58 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Sun, 02 Feb 2025 19:12:25 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 19:09:05 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Roni Waldman",
    "time": "Sun, 02 Feb 2025 19:08:56 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Roni Waldman",
    "time": "Sun, 02 Feb 2025 19:05:55 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 19:05:49 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Asaf Levi",
    "time": "Sun, 02 Feb 2025 19:03:45 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "OMG V.07/2024 Bourbon Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Asaf Levi",
    "time": "Sun, 02 Feb 2025 19:03:30 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "OMG V.07/2024 Sherry Barrel Aged",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Sun, 02 Feb 2025 18:54:14 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "\u05ea\u05de\u05ea\u05d9",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 18:51:49 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Pink Lemonade Cider (\u05e2\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc \u05d7\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 18:50:24 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Hard Apple Cider (\u05e9\u05d9\u05db\u05e8 \u05e1\u05d9\u05d9\u05d3\u05e8 \u05ea\u05e4\u05d5\u05d7)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Sweet"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Vov Laz",
    "time": "Sun, 02 Feb 2025 18:36:25 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 18:01:45 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Mark Markish",
    "time": "Sun, 02 Feb 2025 18:01:32 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 17:52:01 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "\u05e9\u05d8\u05d5\u05e6\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Festbier"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alexander S",
    "time": "Sun, 02 Feb 2025 17:46:56 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "\u05ea\u05de\u05ea\u05d9",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Asaf Levi",
    "time": "Sun, 02 Feb 2025 17:18:39 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "\u05ea\u05de\u05ea\u05d9",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerz",
    "user": "Simcha Rosko",
    "time": "Sat, 01 Feb 2025 19:45:27 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Dead Guy Imperial IPA",
    "brewery": "Rogue Ales",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "john archer",
    "time": "Sat, 01 Feb 2025 18:17:14 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Silkie Stout",
    "brewery": "Loch Lomond Brewery",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "john archer",
    "time": "Sat, 01 Feb 2025 18:15:36 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Barb\u00e3r Rouge",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Honey Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Peleg Magen",
    "time": "Sat, 01 Feb 2025 14:14:28 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Baby Wombat From Hell",
    "brewery": "Amager Bryghus",
    "beer_type": "Porter - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Peleg Magen",
    "time": "Sat, 01 Feb 2025 14:05:43 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "COLLAB \u2764 WHITE FRONTIER - Don't be weird",
    "brewery": "BlackPig.Brew.Co",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Peleg Magen",
    "time": "Sat, 01 Feb 2025 13:44:34 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Polychrome",
    "brewery": "FUERST WIACEK Berlin",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Peleg Magen",
    "time": "Sat, 01 Feb 2025 13:36:14 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Nectaron Overdrive",
    "brewery": "Cellarmaker Brewing Company",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Peleg Magen",
    "time": "Sat, 01 Feb 2025 12:53:37 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Hazy State",
    "brewery": "Collective Arts Brewing",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Huzpan87",
    "time": "Fri, 31 Jan 2025 23:11:36 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Duchesse de Bourgogne",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Sour - Flanders Red Ale"
  },
  {
    "venue": "beerline",
    "user": "Huzpan87",
    "time": "Fri, 31 Jan 2025 23:10:33 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Green Mountain",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Huzpan87",
    "time": "Fri, 31 Jan 2025 23:08:02 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Liquid Cocaine",
    "brewery": "Mad Scientist",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 31 Jan 2025 21:12:41 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Pear X Mango X Pineapple Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Reut Damari",
    "time": "Fri, 31 Jan 2025 20:28:11 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Dead Guy IPA",
    "brewery": "Rogue Ales",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 31 Jan 2025 20:25:34 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Blackberry X Peach X Cherry X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 31 Jan 2025 17:04:57 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerz",
    "user": "Michael Lurie",
    "time": "Thu, 30 Jan 2025 20:17:03 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Blackberry X Peach X Cherry X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Michael Lurie",
    "time": "Thu, 30 Jan 2025 19:58:44 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Pear X Mango X Pineapple Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 30 Jan 2025 17:56:00 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 30 Jan 2025 17:24:08 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Pineapple X Coconut X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yinon",
    "time": "Wed, 29 Jan 2025 19:20:36 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Pear X Mango X Pineapple Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yinon",
    "time": "Wed, 29 Jan 2025 19:15:45 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Pineapple X Coconut X Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Tue, 28 Jan 2025 20:59:36 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "West Side Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:41:23 +0000",
    "serving": "bottle",
    "data_rating": "3.2",
    "beer_name": "La Cristal IPA",
    "brewery": "Brasserie du Mont Blanc",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:39:00 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Bianca Miami Madness Blueberry Lassi Gose",
    "brewery": "Omnipollo",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:34:51 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Noah - Poet of Pale Ale",
    "brewery": "Bere Noah",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:30:46 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "I'm Waiting Here 17",
    "brewery": "Rodinn\u00fd pivovar Zichovec",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:21:21 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Knockout",
    "brewery": "Basqueland Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:18:38 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "HOPE",
    "brewery": "Dogma Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:10:25 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "IMAGINARY",
    "brewery": "COVEN BREWERY",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 19:03:32 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "TDH Peacharine x Riwaka IPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Tue, 28 Jan 2025 19:00:23 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Oude Abricot Tilquin \u00e0 l'Ancienne (2023-2024)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 18:51:32 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Seasons",
    "brewery": "Bad Manners Gypsy Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 18:49:12 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "AMOUR Sweetheart",
    "brewery": "Nurme",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 28 Jan 2025 18:45:24 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Hazy Discovery Rivington",
    "brewery": "PINTA",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Sat, 25 Jan 2025 20:18:23 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Simka",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Thu, 23 Jan 2025 17:53:33 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Peach Cooler Shaker",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 23 Jan 2025 16:55:59 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Selfish Games - Pink Magic",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 23 Jan 2025 16:49:01 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Thu, 23 Jan 2025 15:55:34 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Blanche de Bruxelles",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Wed, 22 Jan 2025 20:18:02 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Kru\u0161ovice Royal Premium Imperial 5.0%",
    "brewery": "Heineken \u010cesk\u00e1 Republika",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Wed, 22 Jan 2025 18:19:20 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Crux",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Wed, 22 Jan 2025 18:17:46 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "K\u00f6stritzer Schwarzbier",
    "brewery": "K\u00f6stritzer Schwarzbierbrauerei",
    "beer_type": "Schwarzbier"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Tue, 21 Jan 2025 21:53:40 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Tue, 21 Jan 2025 21:49:02 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Fedya Mangal Club",
    "brewery": "Paradox",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 21:32:21 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Goudenband (2021)",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Tue, 21 Jan 2025 21:21:24 +0000",
    "serving": "bottle",
    "data_rating": "4.6",
    "beer_name": "Beer Geek Fudgesicle BA Rye Whiskey",
    "brewery": "Mikkeller",
    "beer_type": "Stout - Imperial / Double Oatmeal"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 21:04:00 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Bee Cherryfic!",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 20:23:52 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Love Bees...",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 20:20:59 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Gelato: Szarlotka",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 20:18:40 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Gl\u00fchkriek",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 20:15:57 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Gelato Sourpuss: Monday Motivation",
    "brewery": "Hop Hooligans",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 20:13:16 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Aggouraphobia",
    "brewery": "Hop Hooligans",
    "beer_type": "Sour - Tomato / Vegetable Gose"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 20:08:52 +0000",
    "serving": "can",
    "data_rating": "3.4",
    "beer_name": "Juice Shack Milkshake",
    "brewery": "BrewDog",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:52:33 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Mango x Raspberry x Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:49:55 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Braaaaaaaains - Blue Razz",
    "brewery": "Drekker Brewing Company",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:49:05 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Agent Orange",
    "brewery": "Metalhead",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:48:13 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Mango x Raspberry x Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:47:15 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "\u0428\u0442\u043e\u043b\u043b\u0435\u043d",
    "brewery": "\u041a\u0423\u041b\u0418NAR",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:46:08 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Braaaaaaaains - Blue Razz",
    "brewery": "Drekker Brewing Company",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:45:37 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Gelato XTREME: Yellow Fluff",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:44:50 +0000",
    "serving": "can",
    "data_rating": "4.6",
    "beer_name": "Braaaaaaaains - Blue Razz",
    "brewery": "Drekker Brewing Company",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:44:07 +0000",
    "serving": "can",
    "data_rating": "4.4",
    "beer_name": "Braaaaaaaains - Blue Razz",
    "brewery": "Drekker Brewing Company",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Michael Lurie",
    "time": "Tue, 21 Jan 2025 19:42:53 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Bistro Peach & Apricot Crumble",
    "brewery": "Energy City Brewing",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:42:26 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Agent Orange",
    "brewery": "Metalhead",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Beny K",
    "time": "Tue, 21 Jan 2025 19:42:25 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Agent Orange",
    "brewery": "Metalhead",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:41:30 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Agent Orange",
    "brewery": "Metalhead",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Vera Markovsky",
    "time": "Tue, 21 Jan 2025 19:40:16 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Bistro Peach & Apricot Crumble",
    "brewery": "Energy City Brewing",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerz",
    "user": "Beny K",
    "time": "Tue, 21 Jan 2025 19:40:08 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "\u0428\u0442\u043e\u043b\u043b\u0435\u043d",
    "brewery": "\u041a\u0423\u041b\u0418NAR",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:39:47 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Agent Orange",
    "brewery": "Metalhead",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:37:21 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Mango x Raspberry x Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:37:00 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "Mango x Raspberry x Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:33:25 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "\u0428\u0442\u043e\u043b\u043b\u0435\u043d",
    "brewery": "\u041a\u0423\u041b\u0418NAR",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:30:32 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "\u0428\u0442\u043e\u043b\u043b\u0435\u043d",
    "brewery": "\u041a\u0423\u041b\u0418NAR",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:29:13 +0000",
    "serving": "can",
    "data_rating": "4.75",
    "beer_name": "Gelato: Szarlotka",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:27:24 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Gelato: Szarlotka",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:24:22 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "Gelato XTREME: Yellow Fluff",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:24:16 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Gelato XTREME: Yellow Fluff",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:20:30 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Gelato Sourpuss: Monday Motivation",
    "brewery": "Hop Hooligans",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:20:15 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Fedya Mangal Club",
    "brewery": "Paradox",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:19:58 +0000",
    "serving": "can",
    "data_rating": "4.4",
    "beer_name": "Gelato Sourpuss: Monday Motivation",
    "brewery": "Hop Hooligans",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:16:15 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Aggouraphobia",
    "brewery": "Hop Hooligans",
    "beer_type": "Sour - Tomato / Vegetable Gose"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:15:45 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Fedya Mangal Club",
    "brewery": "Paradox",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:15:32 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Aggouraphobia",
    "brewery": "Hop Hooligans",
    "beer_type": "Sour - Tomato / Vegetable Gose"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:15:30 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Aggouraphobia",
    "brewery": "Hop Hooligans",
    "beer_type": "Sour - Tomato / Vegetable Gose"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:15:08 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Beach Please - Mango Ananas",
    "brewery": "Fat Cat Brewery",
    "beer_type": "Homebrew, Sour - Fruited Gose"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:13:34 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Fedya Mangal Club",
    "brewery": "Paradox",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:13:16 +0000",
    "serving": "can",
    "data_rating": "4.4",
    "beer_name": "Fedya Mangal Club",
    "brewery": "Paradox",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:13:12 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Bee Cherryfic!",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:12:58 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Goudenband (2021)",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:11:24 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:10:41 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Love Bees...",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 19:09:24 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:08:15 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:05:54 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Bees In Black",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:05:37 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Love Bees...",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 19:04:31 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Beach Please - Ananas Mango",
    "brewery": "Fat Cat Brewery",
    "beer_type": "Homebrew, Sour - Fruited Gose"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 19:04:07 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Bee Cherryfic!",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:04:05 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Love Bees...",
    "brewery": "ZHAR-PTITSA Meadery",
    "beer_type": "Mead - Melomel"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 19:00:49 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "Beach Please - Mango Ananas",
    "brewery": "Fat Cat Brewery",
    "beer_type": "Homebrew, Sour - Fruited Gose"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 18:58:22 +0000",
    "serving": "bottle",
    "data_rating": "4.3",
    "beer_name": "Goudenband (2021)",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 18:56:04 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Piece of Cake",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Tue, 21 Jan 2025 18:52:29 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Piece of Cake",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yaron Sh",
    "time": "Tue, 21 Jan 2025 18:49:58 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Piece of Cake",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 18:48:26 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Piece of Cake",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerz",
    "user": "Sagi Amit",
    "time": "Tue, 21 Jan 2025 18:39:48 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Kru\u0161ovice Royal Premium Imperial 5.0%",
    "brewery": "Heineken \u010cesk\u00e1 Republika",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerz",
    "user": "Max N",
    "time": "Tue, 21 Jan 2025 18:35:35 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Nouveau",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerz",
    "user": "Ori Winstein",
    "time": "Sun, 19 Jan 2025 19:47:41 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "7 Year Anniversary Coconut IPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Ori Winstein",
    "time": "Sun, 19 Jan 2025 19:45:57 +0000",
    "serving": "bottle",
    "data_rating": "4.75",
    "beer_name": "\u00d6\u00f6",
    "brewery": "P\u00f5hjala",
    "beer_type": "Porter - Imperial / Double Baltic"
  },
  {
    "venue": "bartov-holon",
    "user": "mattchokes",
    "time": "Sun, 19 Jan 2025 16:06:45 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Chiron",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerz",
    "user": "cheredman",
    "time": "Sat, 18 Jan 2025 21:25:26 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Magners Selections with Berry Blend and a Taste of Peach",
    "brewery": "Magners Irish Cider",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Thu, 16 Jan 2025 19:53:29 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Taranaki",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "bartov-holon",
    "user": "Alex Lvovsky",
    "time": "Thu, 16 Jan 2025 18:58:47 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "GoGo Apricot",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 16 Jan 2025 17:02:09 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 16 Jan 2025 16:47:23 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Double Hazy",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Wed, 15 Jan 2025 20:36:16 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Selfish Games - My Crazy Cucumber",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Lager - Other"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Wed, 15 Jan 2025 19:51:59 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Sun City",
    "brewery": "P\u00f5hjala",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Nir Levy",
    "time": "Wed, 15 Jan 2025 18:13:32 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Christmas Ale",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:49:40 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "Immensity",
    "brewery": "PINTA Barrel Brewing",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:43:59 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Christmas Hot Coco",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:40:25 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "El Se\u00f1or De La Noche",
    "brewery": "Sudaka (Bulgaria)",
    "beer_type": "Stout - Imperial / Double Coffee"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:36:44 +0000",
    "serving": "can",
    "data_rating": "2.7",
    "beer_name": "Go Art Yourself: Nora Ampova",
    "brewery": "Cohones Brewery",
    "beer_type": "Stout - Imperial / Double Oatmeal"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:30:51 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Chongus",
    "brewery": "Whiplash",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:24:21 +0000",
    "serving": "can",
    "data_rating": "4.1",
    "beer_name": "Cocochocolaka",
    "brewery": "Alchemik",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:20:01 +0000",
    "serving": "can",
    "data_rating": "4.4",
    "beer_name": "This Murder Takes Two",
    "brewery": "Metalhead",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:17:31 +0000",
    "serving": "can",
    "data_rating": "4.4",
    "beer_name": "Dusk And Her Embrace",
    "brewery": "Metalhead",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:12:31 +0000",
    "serving": "can",
    "data_rating": "4.6",
    "beer_name": "Decontrol: BA 2024",
    "brewery": "Zagovor Brewery",
    "beer_type": "Porter - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 19:02:32 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Six Months Behind Schedule (2024)",
    "brewery": "Sofia Electric Brewing",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "Yana O",
    "time": "Tue, 14 Jan 2025 18:54:56 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Fractal Coconut",
    "brewery": "Plague Brew",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 18:54:38 +0000",
    "serving": "can",
    "data_rating": "4.2",
    "beer_name": "Fractal Coconut",
    "brewery": "Plague Brew",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 18:47:13 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Harmony",
    "brewery": "PINTA Barrel Brewing",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "Yana O",
    "time": "Tue, 14 Jan 2025 18:34:03 +0000",
    "serving": "draft",
    "data_rating": "2.7",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerz",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Tue, 14 Jan 2025 18:33:21 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Sat, 11 Jan 2025 20:25:39 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Arcade Made",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 11 Jan 2025 18:08:45 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Delirium Black Barrel Aged",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 10 Jan 2025 13:55:29 +0000",
    "serving": "",
    "data_rating": "3.2",
    "beer_name": "Kru\u0161ovice Royal Premium Imperial 5.0%",
    "brewery": "Heineken \u010cesk\u00e1 Republika",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Fri, 10 Jan 2025 10:34:52 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Dark Matter",
    "brewery": "Mivshelet HaShakhen (\u05d4\u05e9\u05db\u05df)",
    "beer_type": "IPA - Black / Cascadian Dark Ale"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 09 Jan 2025 20:29:05 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Pastel De Nata",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 09 Jan 2025 20:00:51 +0000",
    "serving": "",
    "data_rating": "4.8",
    "beer_name": "Cocob\u00e4nger",
    "brewery": "P\u00f5hjala",
    "beer_type": "Stout - Imperial / Double Coffee"
  },
  {
    "venue": "beerz",
    "user": "Vera Markovsky",
    "time": "Thu, 09 Jan 2025 19:30:30 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Disko (Cellar Series)",
    "brewery": "P\u00f5hjala",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "Vera Markovsky",
    "time": "Thu, 09 Jan 2025 19:30:07 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Sun City",
    "brewery": "P\u00f5hjala",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 09 Jan 2025 19:28:38 +0000",
    "serving": "bottle",
    "data_rating": "4.4",
    "beer_name": "Disko (Cellar Series)",
    "brewery": "P\u00f5hjala",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 09 Jan 2025 19:19:33 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Sun City",
    "brewery": "P\u00f5hjala",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Tue, 07 Jan 2025 21:13:30 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Duchesse de Bourgogne",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Sour - Flanders Red Ale"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Tue, 07 Jan 2025 20:19:32 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "Oude M\u00fbre Tilquin \u00e0 l'Ancienne",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Tue, 07 Jan 2025 20:18:54 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Salted Dark Chocolate Imperial Stout",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sun, 05 Jan 2025 15:34:22 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Delirium Black Barrel Aged",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "ursa",
    "user": "Hdr Kdm",
    "time": "Sat, 04 Jan 2025 17:17:10 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Hdr Kdm",
    "time": "Sat, 04 Jan 2025 16:19:06 +0000",
    "serving": "",
    "data_rating": "2.0",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 03 Jan 2025 14:00:42 +0000",
    "serving": "draft",
    "data_rating": "3.1",
    "beer_name": "Crux",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Roni Waldman",
    "time": "Fri, 03 Jan 2025 11:20:19 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "\u05e7\u05e8\u05e0\u05e3",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alex Fux",
    "time": "Fri, 03 Jan 2025 10:49:53 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "\u05e7\u05e8\u05e0\u05e3",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alex Fux",
    "time": "Fri, 03 Jan 2025 10:24:01 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "\u05e9\u05d8\u05d5\u05e6\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Festbier"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alex Fux",
    "time": "Fri, 03 Jan 2025 10:05:04 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "\u05d3\u05d5\u05db\u05d9\u05e4\u05ea",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 02 Jan 2025 17:53:51 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 02 Jan 2025 16:35:09 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Yonatan Bashi",
    "time": "Sun, 29 Dec 2024 21:06:00 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Naughty & Nice - Double Coconut Macaroon",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "beerz",
    "user": "Yonatan Bashi",
    "time": "Sun, 29 Dec 2024 21:02:44 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Death By Orange Creamsicle",
    "brewery": "Vocation Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Yonatan Bashi",
    "time": "Sun, 29 Dec 2024 19:47:50 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Peach Cooler Shaker",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Fri, 27 Dec 2024 20:30:18 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Peach Cooler Shaker",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Fri, 27 Dec 2024 20:29:26 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Death By Orange Creamsicle",
    "brewery": "Vocation Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Fri, 27 Dec 2024 19:31:30 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Jaipur Noir",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Black / Cascadian Dark Ale"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Fri, 27 Dec 2024 19:30:44 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Pastel De Nata",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "beerz",
    "user": "Ilya Markovsky",
    "time": "Thu, 26 Dec 2024 20:31:33 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Death By Orange Creamsicle",
    "brewery": "Vocation Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Thu, 26 Dec 2024 20:18:33 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Peach Cooler Shaker",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Thu, 26 Dec 2024 20:05:56 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Pastel De Nata",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 26 Dec 2024 17:57:28 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 26 Dec 2024 16:39:17 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Kobi",
    "time": "Tue, 24 Dec 2024 11:22:24 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "\u05d4\u05e8\u05de\u05d5\u05e0\u05d9\u05d4",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 19:21:52 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Chimay Grande R\u00e9serve Ferment\u00e9e En Barriques - Ch\u00eane Fran\u00e7ais, Ch\u00eane Am\u00e9ricain, Calvados (05/2023)",
    "brewery": "Bi\u00e8res de Chimay",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 19:19:25 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "Chimay Grande R\u00e9serve Ferment\u00e9e En Barriques - Ch\u00eane Fran\u00e7ais, Ch\u00eane Am\u00e9ricain, Calvados (05/2023)",
    "brewery": "Bi\u00e8res de Chimay",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 19:08:29 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Gl\u00fchkriek",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 19:08:04 +0000",
    "serving": "bottle",
    "data_rating": "4.2",
    "beer_name": "Gl\u00fchkriek",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 19:05:32 +0000",
    "serving": "bottle",
    "data_rating": "3.8",
    "beer_name": "Gl\u00fchkriek",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 19:04:39 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Fruitesse",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 19:02:57 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Fruitesse",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 19:02:27 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Fruitesse",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 18:55:47 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Duvel Distilled",
    "brewery": "Duvel Moortgat",
    "beer_type": "Malt Liquor"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 18:54:43 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "Duvel Distilled",
    "brewery": "Duvel Moortgat",
    "beer_type": "Malt Liquor"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 18:45:24 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Framboise",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 18:44:17 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Framboise",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 18:44:11 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Framboise",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Framboise"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 18:38:17 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Christmas Ale (2023)",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 18:37:49 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Christmas Ale",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 18:37:49 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "Christmas Ale (2023)",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 18:32:18 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Faro",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Faro"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 18:30:45 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Faro",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Faro"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 18:30:43 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "Faro",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Faro"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 18:27:03 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Duvel 6,66%",
    "brewery": "Duvel Moortgat",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 18:25:59 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "N'Ice Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 18:25:58 +0000",
    "serving": "bottle",
    "data_rating": "3.8",
    "beer_name": "N'Ice Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 18:23:24 +0000",
    "serving": "bottle",
    "data_rating": "3.8",
    "beer_name": "N'Ice Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 18:07:15 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Duvel 6,66%",
    "brewery": "Duvel Moortgat",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 18:07:03 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Duvel 6,66%",
    "brewery": "Duvel Moortgat",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sharon Confino",
    "time": "Mon, 23 Dec 2024 18:02:16 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Vedett Extra Pilsner (Extra Blond)",
    "brewery": "Duvel Moortgat",
    "beer_type": "Pilsner - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 18:01:07 +0000",
    "serving": "bottle",
    "data_rating": "3.3",
    "beer_name": "Vedett Extra Pilsner (Extra Blond)",
    "brewery": "Duvel Moortgat",
    "beer_type": "Pilsner - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 18:00:37 +0000",
    "serving": "bottle",
    "data_rating": "2.5",
    "beer_name": "Vedett Extra Pilsner (Extra Blond)",
    "brewery": "Duvel Moortgat",
    "beer_type": "Pilsner - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sergei Shudler",
    "time": "Mon, 23 Dec 2024 17:20:12 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Mon, 23 Dec 2024 17:18:41 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "\u24c2\ufe0faxx Dee",
    "time": "Mon, 23 Dec 2024 17:06:41 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "paul_vicoleanu",
    "time": "Fri, 20 Dec 2024 21:09:23 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "berlin-florentin",
    "user": "paul_vicoleanu",
    "time": "Fri, 20 Dec 2024 19:54:00 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Cherry Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yonatan Golan",
    "time": "Thu, 19 Dec 2024 19:50:00 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Porter Alon (\u05e4\u05d5\u05e8\u05d8\u05e8 \u05d0\u05dc\u05d5\u05df)",
    "brewery": "Negev Brewery (\u05e0\u05d2\u05d1)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerz",
    "user": "Yuv Gold",
    "time": "Thu, 19 Dec 2024 18:51:47 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Love & Hate",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 19 Dec 2024 17:44:48 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 19 Dec 2024 17:10:25 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Peach Cooler Shaker",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Thu, 19 Dec 2024 17:01:32 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "DDH Hopchest DIPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Matan Drori",
    "time": "Thu, 19 Dec 2024 16:42:00 +0000",
    "serving": "can",
    "data_rating": "2.0",
    "beer_name": "Pastel De Nata",
    "brewery": "Vocation Brewery",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Tue, 17 Dec 2024 19:56:08 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Baltic Porter",
    "brewery": "Volfas Engelman",
    "beer_type": "Porter - Baltic"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Tue, 17 Dec 2024 19:45:36 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Morning Joe",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Tue, 17 Dec 2024 19:42:00 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "West Side Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Roy Navott",
    "time": "Mon, 16 Dec 2024 20:18:15 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "DDH Hopchest DIPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sahar Shtarker",
    "time": "Mon, 16 Dec 2024 20:02:07 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yonatan Golan",
    "time": "Sun, 15 Dec 2024 18:07:54 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Tripel",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Tripel"
  },
  {
    "venue": "berlin-florentin",
    "user": "yonathan_volkow",
    "time": "Sun, 15 Dec 2024 17:19:28 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerz",
    "user": "Tomer Davidov",
    "time": "Sat, 14 Dec 2024 20:25:58 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Kru\u0161ovice Royal Premium Imperial 5.0%",
    "brewery": "Heineken \u010cesk\u00e1 Republika",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerz",
    "user": "Tomer Davidov",
    "time": "Sat, 14 Dec 2024 20:22:37 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerz",
    "user": "Tomer Davidov",
    "time": "Sat, 14 Dec 2024 19:13:33 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Space Race",
    "brewery": "Mikkeller",
    "beer_type": "Gluten-Free"
  },
  {
    "venue": "beerz",
    "user": "Tomer Davidov",
    "time": "Sat, 14 Dec 2024 19:11:58 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "AM:PM",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Gluten-Free"
  },
  {
    "venue": "beerz",
    "user": "liza_chep_2000",
    "time": "Sat, 14 Dec 2024 19:10:51 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Space Race",
    "brewery": "Mikkeller",
    "beer_type": "Gluten-Free"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 14 Dec 2024 18:30:16 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Juice Shack Session NEIPA",
    "brewery": "BrewDog",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 13 Dec 2024 21:58:54 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Lucky Break",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 13 Dec 2024 20:21:31 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Juice Shack Session NEIPA",
    "brewery": "BrewDog",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 13 Dec 2024 19:49:07 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "West Side Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "Lior Aufgang",
    "time": "Fri, 13 Dec 2024 18:57:14 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "Oude Abricot Tilquin \u00e0 l'Ancienne (2023-2024)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 13 Dec 2024 18:27:11 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Fri, 13 Dec 2024 13:44:09 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Wingman Tropical Storm",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Fri, 13 Dec 2024 13:43:43 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Hoppy Xmas",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Thu, 12 Dec 2024 17:25:50 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Hoppy Xmas",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 12 Dec 2024 17:24:23 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Thu, 12 Dec 2024 16:51:56 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Wingman Tropical Storm",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerz",
    "user": "NightFish",
    "time": "Thu, 12 Dec 2024 16:51:01 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Jaipur Noir",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Black / Cascadian Dark Ale"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Thu, 12 Dec 2024 10:50:37 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "DDH Hopchest DIPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 12 Dec 2024 10:23:54 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "\u05d4\u05e8\u05de\u05d5\u05e0\u05d9\u05d4",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Wed, 11 Dec 2024 21:55:08 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Quiet Storm - Sabro",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerz",
    "user": "daniel tkach",
    "time": "Wed, 11 Dec 2024 21:53:55 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Quiet Storm - Sabro",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Mark Markish",
    "time": "Tue, 10 Dec 2024 18:00:47 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "\u05d4\u05e8\u05de\u05d5\u05e0\u05d9\u05d4",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Roni Waldman",
    "time": "Tue, 10 Dec 2024 18:00:26 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "\u05d4\u05e8\u05de\u05d5\u05e0\u05d9\u05d4",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Tue, 10 Dec 2024 18:00:25 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "\u05d4\u05e8\u05de\u05d5\u05e0\u05d9\u05d4",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Tue, 10 Dec 2024 17:46:46 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "DDH Hopchest DIPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Mark Markish",
    "time": "Tue, 10 Dec 2024 17:38:20 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pressure Drop",
    "brewery": "Mivshelet HaShakhen (\u05d4\u05e9\u05db\u05df)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Roni Waldman",
    "time": "Tue, 10 Dec 2024 17:09:23 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "\u05d3\u05d5\u05db\u05d9\u05e4\u05ea",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Mon, 09 Dec 2024 17:40:26 +0000",
    "serving": "can",
    "data_rating": "4.6",
    "beer_name": "Gose Nose Passion Fruit",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sun, 08 Dec 2024 17:58:04 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Rocky Road",
    "brewery": "BrewDog",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sun, 08 Dec 2024 17:50:16 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Rocky Road",
    "brewery": "BrewDog",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ron Zilberberg",
    "time": "Sun, 08 Dec 2024 17:43:12 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "bartov-holon",
    "user": "Kobi",
    "time": "Sat, 07 Dec 2024 19:25:05 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "TDH Rakau x Motueka x Riwaka x Galaxy IPA",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Shai Avital",
    "time": "Sat, 07 Dec 2024 17:43:39 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Morning Joe",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "ursa",
    "user": "Shai Avital",
    "time": "Sat, 07 Dec 2024 17:31:30 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Hoppy Xmas",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Shai Avital",
    "time": "Sat, 07 Dec 2024 17:08:16 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Tokyo",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "ursa",
    "user": "Shai Avital",
    "time": "Sat, 07 Dec 2024 16:57:39 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Elvis Juice",
    "brewery": "BrewDog",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Fri, 06 Dec 2024 20:57:42 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Nosferatu",
    "brewery": "La Calavera",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 06 Dec 2024 16:00:48 +0000",
    "serving": "draft",
    "data_rating": "3.2",
    "beer_name": "Kru\u0161ovice Royal Premium Imperial 5.0%",
    "brewery": "Heineken \u010cesk\u00e1 Republika",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 06 Dec 2024 15:57:21 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Hop Guru",
    "brewery": "Shevet (\u05e9\u05d1\u05d8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 06 Dec 2024 15:07:06 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Petrus Red",
    "brewery": "Brouwerij De Brabandere",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sapir Hayati",
    "time": "Thu, 05 Dec 2024 20:53:34 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Kasteel Rubus Framboise",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Alon Goldenberg",
    "time": "Thu, 05 Dec 2024 20:45:23 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Lucky Break",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Thu, 05 Dec 2024 18:14:28 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Juice Shack Session NEIPA",
    "brewery": "BrewDog",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Wed, 04 Dec 2024 21:34:46 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Wed, 04 Dec 2024 20:39:20 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Wed, 04 Dec 2024 19:55:55 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bilbo Sios",
    "time": "Fri, 29 Nov 2024 18:42:41 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Nir Levy",
    "time": "Tue, 26 Nov 2024 18:45:20 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Sat, 23 Nov 2024 18:25:05 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "NEIPA",
    "brewery": "Volfas Engelman",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 23 Nov 2024 18:10:13 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "NEIPA",
    "brewery": "Volfas Engelman",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Sat, 23 Nov 2024 17:11:39 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "APA",
    "brewery": "Volfas Engelman",
    "beer_type": "Pale Ale - Australian"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Fri, 22 Nov 2024 11:01:02 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pressure Drop",
    "brewery": "Mivshelet HaShakhen (\u05d4\u05e9\u05db\u05df)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Fri, 22 Nov 2024 10:58:52 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "David Siegel",
    "time": "Wed, 20 Nov 2024 19:02:36 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "L\u00f6wenbr\u00e4u M\u00e4rzen",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "M\u00e4rzen"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 16 Nov 2024 18:37:09 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Lucky Break",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 16 Nov 2024 18:36:33 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Lucky Break",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 16 Nov 2024 18:10:26 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Hazy Jane Pineapple",
    "brewery": "BrewDog USA",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 16 Nov 2024 18:09:01 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Hazy Jane Pineapple",
    "brewery": "BrewDog USA",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 15 Nov 2024 15:04:54 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Green Mountain",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "Alexander S",
    "time": "Tue, 12 Nov 2024 22:15:43 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Cherry Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Alexander S",
    "time": "Tue, 12 Nov 2024 21:45:33 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "\u05d4\u05d9\u05d9\u05d6\u05d9 \u05e9\u05de\u05d9\u05d9\u05d6\u05d9",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yanai Ben- Alon",
    "time": "Tue, 12 Nov 2024 19:53:45 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Sun, 10 Nov 2024 13:46:24 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Anything Gose",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Sun, 10 Nov 2024 11:15:35 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "\u05e9\u05d8\u05d5\u05e6\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Festbier"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Fri, 08 Nov 2024 19:52:24 +0000",
    "serving": "draft",
    "data_rating": "4.1",
    "beer_name": "Barbe 10 / Barbe X",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Fri, 08 Nov 2024 18:34:17 +0000",
    "serving": "draft",
    "data_rating": "4.8",
    "beer_name": "Barbe Ruby",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 07 Nov 2024 20:46:05 +0000",
    "serving": "draft",
    "data_rating": "2.7",
    "beer_name": "Barbe Ruby",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 07 Nov 2024 18:38:54 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Barbe 10 / Barbe X",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 07 Nov 2024 17:48:31 +0000",
    "serving": "draft",
    "data_rating": "3.2",
    "beer_name": "Duchesse de Bourgogne",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Sour - Flanders Red Ale"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 07 Nov 2024 16:51:55 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Barbe 10 / Barbe X",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 07 Nov 2024 15:52:01 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Duchesse de Bourgogne",
    "brewery": "Brouwerij Verhaeghe",
    "beer_type": "Sour - Flanders Red Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "yonathan_volkow",
    "time": "Sun, 03 Nov 2024 15:14:09 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Sat, 02 Nov 2024 19:13:18 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "\u05e7\u05e8\u05e0\u05e3",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 01 Nov 2024 21:44:24 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Tripel",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Tripel"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 01 Nov 2024 19:16:05 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 01 Nov 2024 15:10:51 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Hop Guru",
    "brewery": "Shevet (\u05e9\u05d1\u05d8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Omri Gill",
    "time": "Thu, 31 Oct 2024 22:58:51 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "ursa",
    "user": "Sahar Shtarker",
    "time": "Thu, 31 Oct 2024 22:52:47 +0000",
    "serving": "",
    "data_rating": "3.8",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 31 Oct 2024 21:14:21 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Double Trouble",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Peleg Magen",
    "time": "Thu, 31 Oct 2024 21:12:15 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Cherry Shower Sour",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Dor_eilon",
    "time": "Tue, 29 Oct 2024 20:21:41 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Hop'uccino",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 26 Oct 2024 15:30:59 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Franziskaner Premium Weissbier Dunkel",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Wheat Beer - Dunkelweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tal",
    "time": "Fri, 25 Oct 2024 22:18:23 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Quiet Storm - Sabro",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 25 Oct 2024 17:35:39 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Marik Sh",
    "time": "Thu, 24 Oct 2024 14:21:11 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Avi Levy",
    "time": "Thu, 24 Oct 2024 10:18:53 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "\u05e9\u05d8\u05d5\u05e6\u05e8",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Festbier"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Wed, 23 Oct 2024 17:15:19 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Wed, 23 Oct 2024 15:24:49 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Tue, 22 Oct 2024 13:58:24 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Sat, 19 Oct 2024 16:22:34 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Michael Zilberstein",
    "time": "Sat, 19 Oct 2024 13:20:07 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Fat Cat Pale Ale (\u05d7\u05ea\u05d5\u05dc \u05e9\u05de\u05df)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Korvin Kori",
    "time": "Fri, 18 Oct 2024 21:55:43 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 17 Oct 2024 14:40:51 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ariel Manzon",
    "time": "Tue, 15 Oct 2024 20:06:37 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ariel Manzon",
    "time": "Tue, 15 Oct 2024 20:04:21 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 12 Oct 2024 20:11:45 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "K\u00e6rlighed Spring/Summer 2024",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 12 Oct 2024 20:10:23 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "California Sun",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 12 Oct 2024 20:09:35 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Under the Trees",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 12 Oct 2024 18:41:32 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Under the Trees",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "mich_8994",
    "time": "Thu, 10 Oct 2024 19:02:28 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Esser (\u05d1\u05d9\u05e8\u05d4 \u05e2\u05e9\u05e8)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Belgian Tripel"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Thu, 10 Oct 2024 17:46:40 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Under the Trees",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "mich_8994",
    "time": "Thu, 10 Oct 2024 16:38:09 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Dodash (\u05d3\u05d5\u05d3\u05d4\u05f3\u05e9\u05da) Amber Ale",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "mich_8994",
    "time": "Thu, 10 Oct 2024 16:30:47 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Mad Dogs And Englishmen",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - English"
  },
  {
    "venue": "bartov-holon",
    "user": "Ben Angel",
    "time": "Thu, 10 Oct 2024 16:28:42 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Nosferatu",
    "brewery": "La Calavera",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Wed, 09 Oct 2024 22:26:32 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "What The Fudge?",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Wed, 09 Oct 2024 15:41:53 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Fri, 04 Oct 2024 16:16:04 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Golden Iris",
    "brewery": "Mikkeller",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Thu, 03 Oct 2024 17:49:16 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Zirndorfer Landbier",
    "brewery": "Brauerei Zirndorf",
    "beer_type": "Lager - Amber / Red"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 03 Oct 2024 14:04:18 +0000",
    "serving": "draft",
    "data_rating": "2.9",
    "beer_name": "Zirndorfer Landbier",
    "brewery": "Brauerei Zirndorf",
    "beer_type": "Lager - Amber / Red"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Fri, 27 Sep 2024 17:43:11 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Huntington",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Fri, 27 Sep 2024 16:54:12 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Fri, 27 Sep 2024 15:31:04 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Quiet Storm - Sabro",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Fri, 27 Sep 2024 14:09:38 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Hop'uccino",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Noy Marina",
    "time": "Wed, 25 Sep 2024 18:30:26 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Windy Hill",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bryan L",
    "time": "Wed, 25 Sep 2024 18:22:20 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "L\u00f6wenbr\u00e4u Original",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Tue, 24 Sep 2024 16:56:16 +0000",
    "serving": "draft",
    "data_rating": "3.1",
    "beer_name": "Tucher Pils",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Tue, 24 Sep 2024 15:48:12 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "King Crush",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Tue, 24 Sep 2024 15:46:03 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "King Crush",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Tue, 24 Sep 2024 15:24:42 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Golden Iris",
    "brewery": "Mikkeller",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Tue, 24 Sep 2024 15:23:30 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Golden Iris",
    "brewery": "Mikkeller",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "ursa",
    "user": "Shachar Granot-Mayer",
    "time": "Sat, 21 Sep 2024 19:20:57 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Shachar Granot-Mayer",
    "time": "Sat, 21 Sep 2024 19:19:36 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Original N\u00fcrnberger Rotbier",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Lager - Rotbier"
  },
  {
    "venue": "ursa",
    "user": "Shachar Granot-Mayer",
    "time": "Sat, 21 Sep 2024 19:18:15 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Sat, 21 Sep 2024 07:58:14 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Non C'e Problema",
    "brewery": "Parvati",
    "beer_type": "Homebrew, Pilsner - Italian"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Sat, 21 Sep 2024 07:56:36 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Pina Colada",
    "brewery": "Parvati",
    "beer_type": "Homebrew, IPA - Cold"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 20 Sep 2024 13:02:33 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Artium21",
    "time": "Tue, 17 Sep 2024 15:04:12 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Artium21",
    "time": "Tue, 17 Sep 2024 14:42:34 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Dark Fruit",
    "brewery": "Magners Irish Cider",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Sapir Hayati",
    "time": "Tue, 17 Sep 2024 08:56:42 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Pressure Drop",
    "brewery": "Mivshelet HaShakhen (\u05d4\u05e9\u05db\u05df)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "zloto",
    "time": "Sat, 14 Sep 2024 20:04:20 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sat, 14 Sep 2024 17:09:26 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Post Punk",
    "brewery": "BrewDog",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sat, 14 Sep 2024 16:18:42 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "King Crush",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double Milkshake"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:50:54 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Mad Dogs And Englishmen",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:50:27 +0000",
    "serving": "",
    "data_rating": "3.6",
    "beer_name": "Pink Lemonade Cider (\u05e2\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc \u05d7\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:49:46 +0000",
    "serving": "bottle",
    "data_rating": "3.6",
    "beer_name": "Rauchbeer",
    "brewery": "Hanaknik",
    "beer_type": "Homebrew, Rauchbier"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:48:48 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Tzaddik's Elixir",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:48:22 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Double Mitzvah",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:47:51 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Sticky Fimgers",
    "brewery": "Vladislavus",
    "beer_type": "Homebrew, Sour - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:47:23 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Glorious Blonde",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Wheat Beer - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:46:30 +0000",
    "serving": "draft",
    "data_rating": "4.8",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:44:56 +0000",
    "serving": "",
    "data_rating": "3.6",
    "beer_name": "Summer",
    "brewery": "Gramma Miriam's Brewery",
    "beer_type": "Homebrew, Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:44:29 +0000",
    "serving": "",
    "data_rating": "3.6",
    "beer_name": "Guava IPA",
    "brewery": "BeerHarush",
    "beer_type": "Homebrew, IPA - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:43:57 +0000",
    "serving": "",
    "data_rating": "3.6",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:43:23 +0000",
    "serving": "",
    "data_rating": "3.8",
    "beer_name": "CapySour",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Sour - Other Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:42:52 +0000",
    "serving": "bottle",
    "data_rating": "4.4",
    "beer_name": "Shum Davar",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, Farmhouse Ale - Saison"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Ilya Markovsky",
    "time": "Sat, 14 Sep 2024 10:42:17 +0000",
    "serving": "bottle",
    "data_rating": "4.6",
    "beer_name": "Make Shum Not War",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:39:34 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:37:42 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "CapySour",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Sour - Other Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:34:54 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Yorkshire Hen",
    "brewery": "Tony's Brewery",
    "beer_type": "Homebrew, Bitter - Session / Ordinary"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:33:41 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Its 5 O'clock Somewhere",
    "brewery": "Tony's Brewery",
    "beer_type": "Homebrew, Red Ale - American Amber / Red"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:32:31 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Funkey Monkey",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:31:26 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Super Dank",
    "brewery": "Parvati",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:30:35 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Termofuse",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:27:59 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Non C'e Problema",
    "brewery": "Parvati",
    "beer_type": "Homebrew, Pilsner - Italian"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:26:39 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Hogs & Pines",
    "brewery": "Vladislavus",
    "beer_type": "Homebrew, Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:25:23 +0000",
    "serving": "bottle",
    "data_rating": "2.5",
    "beer_name": "New England IPA",
    "brewery": "Abu Bira",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:24:09 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Make Shum Not War",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:22:40 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Shum Davar (Loral)",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:21:51 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Shum Davar (Northern Brewer)",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:21:06 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Pina Colada",
    "brewery": "Parvati",
    "beer_type": "Homebrew, IPA - Cold"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:20:11 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Tropical Stout",
    "brewery": "Parvati",
    "beer_type": "Homebrew, Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Sat, 14 Sep 2024 09:19:15 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Bi\u00e8re De Garde",
    "brewery": "Parvati",
    "beer_type": "Homebrew, Farmhouse Ale - Bi\u00e8re de Garde"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 07:20:36 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Super Dank",
    "brewery": "Parvati",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 07:17:59 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Bi\u00e8re De Garde",
    "brewery": "Parvati",
    "beer_type": "Homebrew, Farmhouse Ale - Bi\u00e8re de Garde"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 07:15:45 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Tropical Stout",
    "brewery": "Parvati",
    "beer_type": "Homebrew, Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 07:10:50 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pina Colada",
    "brewery": "Parvati",
    "beer_type": "Homebrew, IPA - Cold"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 07:07:46 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Shum Davar (Northern Brewer)",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 05:28:46 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Shum Davar (Loral)",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 05:18:26 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Make Shum Not War",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 05:11:32 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "New England IPA",
    "brewery": "Abu Bira",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 05:06:12 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Non C'e Problema",
    "brewery": "Parvati",
    "beer_type": "Homebrew, Pilsner - Italian"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 04:56:10 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Hogs & Pines",
    "brewery": "Vladislavus",
    "beer_type": "Homebrew, Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 04:33:16 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Termofuse",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 04:32:32 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Funkey Monkey",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 04:30:06 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Its 5 O'clock Somewhere",
    "brewery": "Tony's Brewery",
    "beer_type": "Homebrew, Red Ale - American Amber / Red"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 04:23:02 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Yorkshire Hen",
    "brewery": "Tony's Brewery",
    "beer_type": "Homebrew, Bitter - Session / Ordinary"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 04:19:09 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "CapySour",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Sour - Other Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Sat, 14 Sep 2024 04:11:55 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 17:02:26 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Guava IPA",
    "brewery": "BeerHarush",
    "beer_type": "Homebrew, IPA - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 16:31:20 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Summer",
    "brewery": "Gramma Miriam's Brewery",
    "beer_type": "Homebrew, Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 16:28:18 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 15:28:42 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Belle's Sunny Sip",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, Wheat Beer - American Pale Wheat"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 15:27:19 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Ellie's Prank",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 15:23:47 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Glorious Blonde",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Wheat Beer - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 15:21:39 +0000",
    "serving": "bottle",
    "data_rating": "2.0",
    "beer_name": "Sticky Fimgers",
    "brewery": "Vladislavus",
    "beer_type": "Homebrew, Sour - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 15:18:35 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Double Mitzvah",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 15:17:43 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Tzaddik's Elixir",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Fri, 13 Sep 2024 15:15:33 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Rauchbeer",
    "brewery": "Hanaknik",
    "beer_type": "Homebrew, Rauchbier"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dennis Prokopiev",
    "time": "Fri, 13 Sep 2024 13:47:25 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 13 Sep 2024 13:41:22 +0000",
    "serving": "",
    "data_rating": "3.1",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dennis Prokopiev",
    "time": "Fri, 13 Sep 2024 08:40:48 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "Belle's Sunny Sip",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, Wheat Beer - American Pale Wheat"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Eitan Zilberstein",
    "time": "Thu, 12 Sep 2024 20:06:39 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Termofuse",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Eitan Zilberstein",
    "time": "Thu, 12 Sep 2024 20:05:40 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Funkey Monkey",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:50:21 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "CapySour",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Sour - Other Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:49:41 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:48:33 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Belle's Sunny Sip",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, Wheat Beer - American Pale Wheat"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:46:40 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Sticky Fingers",
    "brewery": "Vladislavus",
    "beer_type": "Homebrew, Sour - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Eitan Zilberstein",
    "time": "Thu, 12 Sep 2024 19:45:35 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:43:37 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Guava IPA",
    "brewery": "BeerHarush",
    "beer_type": "Homebrew, IPA - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:42:27 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Yorkshire Hen",
    "brewery": "Tony's Brewery",
    "beer_type": "Homebrew, Bitter - Session / Ordinary"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:41:42 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Summer",
    "brewery": "Gramma Miriam's Brewery",
    "beer_type": "Homebrew, Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Eitan Zilberstein",
    "time": "Thu, 12 Sep 2024 19:40:55 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Double Mitzvah",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:40:36 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Ellie's Prank",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Eitan Zilberstein",
    "time": "Thu, 12 Sep 2024 19:39:59 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Tzaddik's Elixir",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:39:28 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Double Mitzvah",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 19:38:42 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Tzaddik's Elixir",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Eitan Zilberstein",
    "time": "Thu, 12 Sep 2024 18:45:45 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Session Pressure Drop",
    "brewery": "Mivshelet HaShakhen (\u05d4\u05e9\u05db\u05df)",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "dandan_ransenberg",
    "time": "Thu, 12 Sep 2024 18:40:24 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 18:28:49 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 18:24:09 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Funkey Monkey",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 18:18:08 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Termofuse",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 18:17:23 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Rauchbeer",
    "brewery": "Hanaknik",
    "beer_type": "Homebrew, Rauchbier"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 18:10:32 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Termofuse",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 17:59:25 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Funkey Monkey",
    "brewery": "Gaisinsky Brewery",
    "beer_type": "Homebrew, Stout - Irish Dry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 17:54:38 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "OMG (2021 - \u05ea\u05e9\u05e4\u201d\u05d0)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Scotch Ale / Wee Heavy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 17:48:34 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "OMG (2022 - \u05ea\u05e9\u05e4\u201d\u05d1)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Porter - Baltic"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 17:34:53 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Rauchbeer",
    "brewery": "Hanaknik",
    "beer_type": "Homebrew, Rauchbier"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 17:26:52 +0000",
    "serving": "bottle",
    "data_rating": "3.3",
    "beer_name": "Rauchbeer",
    "brewery": "Hanaknik",
    "beer_type": "Homebrew, Rauchbier"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 17:07:40 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Tzaddik's Elixir",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 17:07:38 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Double Mitzvah",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 17:07:06 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Tzaddik's Elixir",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 17:05:57 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Tzaddik's Elixir",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Thu, 12 Sep 2024 17:02:55 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Liquid Genie",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u041c\u0430\u0440\u043a \u041c\u0430\u0440\u043a\u043e\u0432",
    "time": "Thu, 12 Sep 2024 16:57:55 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Liquid Genie",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 16:45:04 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Double Mitzvah",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 16:37:34 +0000",
    "serving": "draft",
    "data_rating": "4.2",
    "beer_name": "Double Mitzvah",
    "brewery": "Laughing Tzaddik Brewing Co.",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 16:30:23 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Make Shum Not War",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 16:21:50 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Sticky Fimgers",
    "brewery": "Vladislavus",
    "beer_type": "Homebrew, Sour - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 16:19:33 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Ellie's Prank",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Amit 1",
    "time": "Thu, 12 Sep 2024 16:19:26 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Sticky Fingers",
    "brewery": "Vladislavus",
    "beer_type": "Homebrew, Sour - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 16:18:54 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Glorious Blonde",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Wheat Beer - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 16:17:40 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 16:17:34 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Glorious Blonde",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Wheat Beer - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 16:06:24 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Ellie's Prank",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 16:06:18 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Summer",
    "brewery": "Gramma Miriam's Brewery",
    "beer_type": "Homebrew, Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sleepwalker",
    "time": "Thu, 12 Sep 2024 16:03:19 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 16:01:54 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "\u05d4\u05d9\u05d0 \u05dc\u05d0 \u05d1\u05d0\u05e0\u05d8\u05e4\u05d3",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 15:59:33 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Sour Than RHUBARB",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, Sour - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 15:57:33 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:57:12 +0000",
    "serving": "draft",
    "data_rating": "4.2",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Amit 1",
    "time": "Thu, 12 Sep 2024 15:54:44 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Yorkshire Hen",
    "brewery": "Tony's Brewery",
    "beer_type": "Homebrew, Bitter - Session / Ordinary"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 15:54:43 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Belle's Sunny Sip",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, Wheat Beer - American Pale Wheat"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:52:26 +0000",
    "serving": "bottle",
    "data_rating": "3.4",
    "beer_name": "Belle's Sunny Sip",
    "brewery": "He.Brew Ashdod brewery",
    "beer_type": "Homebrew, Wheat Beer - American Pale Wheat"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 15:52:22 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Guava IPA",
    "brewery": "BeerHarush",
    "beer_type": "Homebrew, IPA - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:48:07 +0000",
    "serving": "bottle",
    "data_rating": "3.3",
    "beer_name": "Summer",
    "brewery": "Gramma Miriam's Brewery",
    "beer_type": "Homebrew, Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Thu, 12 Sep 2024 15:46:56 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Hop'uccino",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 15:42:10 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Guava IPA",
    "brewery": "BeerHarush",
    "beer_type": "Homebrew, IPA - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "\u041c\u0430\u0440\u043a \u041c\u0430\u0440\u043a\u043e\u0432",
    "time": "Thu, 12 Sep 2024 15:41:54 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "New Zealand Dreams",
    "brewery": "Heisenberg",
    "beer_type": "Homebrew, IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:40:40 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Guava IPA",
    "brewery": "BeerHarush",
    "beer_type": "Homebrew, IPA - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 15:38:25 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nirit Agiv",
    "time": "Thu, 12 Sep 2024 15:37:53 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "CapySour",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Sour - Other Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:37:16 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "CapiBier",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:36:15 +0000",
    "serving": "bottle",
    "data_rating": "3.7",
    "beer_name": "CapySour",
    "brewery": "CAPY-HB By ABD",
    "beer_type": "Homebrew, Sour - Other Gose"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Alon P",
    "time": "Thu, 12 Sep 2024 15:35:20 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Liquid Genie",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 15:33:58 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Shum Davar",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, Farmhouse Ale - Saison"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:32:56 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Shum Davar",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, Farmhouse Ale - Saison"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shmupi Koto",
    "time": "Thu, 12 Sep 2024 15:31:17 +0000",
    "serving": "bottle",
    "data_rating": "3.9",
    "beer_name": "Make Shum Not War",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 14:46:54 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Glorious Blonde",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Wheat Beer - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 14:45:22 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Liquid Genie",
    "brewery": "Attali's Family Brewery",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Thu, 12 Sep 2024 14:31:09 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Session Pressure Drop",
    "brewery": "Mivshelet HaShakhen (\u05d4\u05e9\u05db\u05df)",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Thu, 12 Sep 2024 14:16:40 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "R.I.S + M",
    "brewery": "NoStopBrew",
    "beer_type": "Homebrew, Stout - Imperial / Double Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Thu, 12 Sep 2024 14:15:45 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "R.I.S + M",
    "brewery": "NoStopBrew",
    "beer_type": "Homebrew, Stout - Imperial / Double Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Boris",
    "time": "Thu, 12 Sep 2024 14:02:08 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Super Schnapi - \u05e1\u05d5\u05e4\u05e8 \u05e9\u05e0\u05d0\u05e4\u05d9",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "IPA - Triple New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Leon",
    "time": "Thu, 12 Sep 2024 14:00:23 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Super Schnapi - \u05e1\u05d5\u05e4\u05e8 \u05e9\u05e0\u05d0\u05e4\u05d9",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "IPA - Triple New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 12 Sep 2024 11:15:52 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Make Shum Not War",
    "brewery": "Dunch Brewery",
    "beer_type": "Homebrew, IPA - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sun, 08 Sep 2024 17:55:34 +0000",
    "serving": "",
    "data_rating": "2.0",
    "beer_name": "Cherry x Raspberry x Apricot Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sun, 08 Sep 2024 17:53:19 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Hop'uccino",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "ursa",
    "user": "Miki Zaidel",
    "time": "Sun, 08 Sep 2024 14:57:37 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Artium21",
    "time": "Fri, 06 Sep 2024 16:25:47 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Ich Bin Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "shachar perkal",
    "time": "Thu, 05 Sep 2024 18:49:08 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Mad Dogs And Englishmen",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 05 Sep 2024 17:57:10 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Session Pressure Drop",
    "brewery": "Mivshelet HaShakhen (\u05d4\u05e9\u05db\u05df)",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 05 Sep 2024 17:11:01 +0000",
    "serving": "draft",
    "data_rating": "3.4",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 05 Sep 2024 17:04:36 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hop Hop Back",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Dan G",
    "time": "Thu, 05 Sep 2024 15:57:41 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Mad Dogs And Englishmen",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ido Meir",
    "time": "Sat, 31 Aug 2024 20:07:28 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "King Crush",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double Milkshake"
  },
  {
    "venue": "berlin-florentin",
    "user": "David Siegel",
    "time": "Fri, 30 Aug 2024 18:58:46 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 30 Aug 2024 14:58:48 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Ich Bin Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 30 Aug 2024 13:01:07 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "O'Hara's Leann Foll\u00e1in",
    "brewery": "O'Hara's Brewery",
    "beer_type": "Stout - Foreign / Export"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shakuf",
    "time": "Fri, 30 Aug 2024 10:53:14 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Pink Lemonade Cider (\u05e2\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc \u05d7\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Avi Levy",
    "time": "Fri, 30 Aug 2024 10:51:48 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Pink Lemonade Cider (\u05e2\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc \u05d7\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shakuf",
    "time": "Fri, 30 Aug 2024 10:34:48 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Mad Dogs And Englishmen",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Shakuf",
    "time": "Fri, 30 Aug 2024 10:32:31 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Avi Levy",
    "time": "Fri, 30 Aug 2024 10:30:12 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Mad Dogs And Englishmen",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Avi Levy",
    "time": "Fri, 30 Aug 2024 10:28:09 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "ursa",
    "user": "Dor_eilon",
    "time": "Thu, 29 Aug 2024 20:47:57 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Hop Opera",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "bartov-holon",
    "user": "Bathen Sugbeker",
    "time": "Thu, 29 Aug 2024 20:41:26 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "\u05e9\u05e0\u05d0\u05e4\u05d9",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Thu, 29 Aug 2024 20:06:46 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Malabiscus sour",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "Sour - Other"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Thu, 29 Aug 2024 14:58:47 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "King Crush",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double Milkshake"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ilya Markovsky",
    "time": "Tue, 27 Aug 2024 18:07:04 +0000",
    "serving": "bottle",
    "data_rating": "4.3",
    "beer_name": "Sureau Rullquin (2021-2022)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Wild Ale - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Bathen Sugbeker",
    "time": "Tue, 27 Aug 2024 17:30:53 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "No Man\u2019s Land - Passionfruit, Pineapple And Chili",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Mead - Braggot"
  },
  {
    "venue": "bartov-holon",
    "user": "Bathen Sugbeker",
    "time": "Tue, 27 Aug 2024 17:28:28 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Kru\u0161ovice \u010cern\u00e9",
    "brewery": "Heineken \u010cesk\u00e1 Republika",
    "beer_type": "Lager - Tmav\u00e9 (Czech Dark)"
  },
  {
    "venue": "ursa",
    "user": "Gabi David",
    "time": "Tue, 27 Aug 2024 17:01:45 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Party In the Dark",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "berlin-florentin",
    "user": "Gabi David",
    "time": "Tue, 27 Aug 2024 16:11:42 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Iskold Classic",
    "brewery": "Mikkeller",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Bathen Sugbeker",
    "time": "Tue, 27 Aug 2024 15:52:06 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Doppelg\u00e4nger",
    "brewery": "Vocation Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Gabi David",
    "time": "Tue, 27 Aug 2024 15:24:04 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "DDH Jaipur",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Mon, 26 Aug 2024 20:23:46 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Sun, 25 Aug 2024 19:16:17 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Sun, 25 Aug 2024 14:58:22 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Steve Kingfisher",
    "time": "Sat, 24 Aug 2024 15:53:05 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "IPA Craft Beer",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bilbo Sios",
    "time": "Fri, 23 Aug 2024 21:05:29 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Huntington",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Alexandr Zaputryaev",
    "time": "Fri, 23 Aug 2024 19:57:30 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "berlin-florentin",
    "user": "Stas Pruchansky",
    "time": "Fri, 23 Aug 2024 19:05:43 +0000",
    "serving": "bottle",
    "data_rating": "4.2",
    "beer_name": "Sureau Rullquin (2021-2022)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Wild Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Fri, 23 Aug 2024 19:03:08 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Jaipur",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Max N",
    "time": "Fri, 23 Aug 2024 18:34:38 +0000",
    "serving": "bottle",
    "data_rating": "4.4",
    "beer_name": "Sureau Rullquin (2021-2022)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Wild Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bilbo Sios",
    "time": "Fri, 23 Aug 2024 18:34:00 +0000",
    "serving": "bottle",
    "data_rating": "4.75",
    "beer_name": "Sureau Rullquin (2021-2022)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Wild Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Fri, 23 Aug 2024 18:33:56 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "Sureau Rullquin (2021-2022)",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Wild Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Bilbo Sios",
    "time": "Fri, 23 Aug 2024 18:17:11 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "L\u00f6wenbr\u00e4u M\u00e4rzen",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "M\u00e4rzen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Fri, 23 Aug 2024 18:16:50 +0000",
    "serving": "draft",
    "data_rating": "2.3",
    "beer_name": "L\u00f6wenbr\u00e4u M\u00e4rzen",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "M\u00e4rzen"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Fri, 23 Aug 2024 17:16:08 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "King Crush",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double Milkshake"
  },
  {
    "venue": "bartov-holon",
    "user": "Roy Falach",
    "time": "Wed, 21 Aug 2024 18:05:15 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Edelweiss Hefetr\u00fcb Original",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Tue, 20 Aug 2024 15:58:43 +0000",
    "serving": "bottle",
    "data_rating": "4.1",
    "beer_name": "In Plenty",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sahar Shtarker",
    "time": "Sun, 18 Aug 2024 22:50:52 +0000",
    "serving": "",
    "data_rating": "3.7",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Sahar Shtarker",
    "time": "Sun, 18 Aug 2024 20:05:27 +0000",
    "serving": "",
    "data_rating": "3.7",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Dezzley",
    "time": "Sun, 18 Aug 2024 18:56:36 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Sahar Shtarker",
    "time": "Sun, 18 Aug 2024 18:45:16 +0000",
    "serving": "",
    "data_rating": "3.7",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Sahar Shtarker",
    "time": "Sun, 18 Aug 2024 16:50:18 +0000",
    "serving": "",
    "data_rating": "3.7",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Sahar Shtarker",
    "time": "Sun, 18 Aug 2024 16:49:29 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Weihenstephaner Hefeweissbier Dunkel",
    "brewery": "Bayerische Staatsbrauerei Weihenstephan",
    "beer_type": "Wheat Beer - Dunkelweizen"
  },
  {
    "venue": "ursa",
    "user": "Ofir Israeli",
    "time": "Sat, 17 Aug 2024 15:11:26 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Broken Dream (Nitro)",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "ursa",
    "user": "Omri Wolf",
    "time": "Sat, 17 Aug 2024 15:10:23 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Broken Dream (Nitro)",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Michael Zilberstein",
    "time": "Sat, 17 Aug 2024 14:37:56 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hop Hop \u05d8\u05e8\u05dc\u05dc\u05d4",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 16 Aug 2024 13:40:36 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Delirium Tremens",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 16 Aug 2024 12:45:05 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "K\u00f6stritzer Schwarzbier",
    "brewery": "K\u00f6stritzer Schwarzbierbrauerei",
    "beer_type": "Schwarzbier"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Thu, 15 Aug 2024 21:07:23 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Quiet Storm - Sabro",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Thu, 15 Aug 2024 19:50:24 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Party In the Dark",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 15 Aug 2024 16:15:29 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 15 Aug 2024 15:54:08 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Apricot x Mango x Passionfruit x Vanilla Smoothie Sour Ale",
    "brewery": "\u0100rpus Brewing Co.",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 15 Aug 2024 15:52:56 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Blasphemy",
    "brewery": "La Calavera",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 15 Aug 2024 15:40:35 +0000",
    "serving": "can",
    "data_rating": "4.3",
    "beer_name": "Eden",
    "brewery": "TamTam Brewing Co.",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 15 Aug 2024 15:39:06 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 15 Aug 2024 15:14:43 +0000",
    "serving": "can",
    "data_rating": "4.7",
    "beer_name": "Juniper & Basil Tonic Mead",
    "brewery": "Steppe & Wind Meadery (\u0421\u0442\u0435\u043f\u044c \u0438 \u0412\u0435\u0442\u0435\u0440)",
    "beer_type": "Mead - Other"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 15 Aug 2024 15:14:12 +0000",
    "serving": "can",
    "data_rating": "4.6",
    "beer_name": "Kuts (Sea Salt Batch)",
    "brewery": "Red Button Brewery",
    "beer_type": "Sour - Traditional Gose"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Thu, 15 Aug 2024 12:14:16 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Shoobi Dubi - \u05e9\u05d5\u05d1\u05d9 \u05d3\u05d5\u05d1\u05d9",
    "brewery": "Suitcase Beer Co - \u05d1\u05d9\u05e8\u05d5\u05ea \u05de\u05d6\u05d5\u05d5\u05d3\u05d4",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Wed, 14 Aug 2024 18:16:00 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hop Hop Back",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Itay Sharmigin",
    "time": "Sun, 11 Aug 2024 15:45:39 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 09 Aug 2024 13:28:27 +0000",
    "serving": "",
    "data_rating": "3.1",
    "beer_name": "Fischmarkt Zwickel",
    "brewery": "K\u00f6nig Ludwig Schlossbrauerei Kaltenberg",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 09 Aug 2024 13:27:51 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Fri, 09 Aug 2024 10:30:24 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Hop Hop Back",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Fri, 09 Aug 2024 10:27:52 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Wheatney (\u05d5\u05d5\u05d9\u05d8\u05e0\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 08 Aug 2024 17:23:22 +0000",
    "serving": "",
    "data_rating": "3.8",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 08 Aug 2024 17:00:22 +0000",
    "serving": "draft",
    "data_rating": "3.1",
    "beer_name": "Fischmarkt Zwickel",
    "brewery": "K\u00f6nig Ludwig Schlossbrauerei Kaltenberg",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "bartov-holon",
    "user": "eitanr20",
    "time": "Wed, 07 Aug 2024 21:44:31 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Misty Eye",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "bartov-holon",
    "user": "eitanr20",
    "time": "Tue, 06 Aug 2024 21:30:25 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Double Pie - 2X\u03c0 - Apricots And Pears \u05d3\u05d0\u05d1\u05dc \u05e4\u05d0\u05d9",
    "brewery": "Goren's Brewery",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerline",
    "user": "Alex Sindalovsky",
    "time": "Mon, 05 Aug 2024 16:35:49 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Strawberry Sundae",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Mon, 05 Aug 2024 15:14:32 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "bartov-holon",
    "user": "Alex Sindalovsky",
    "time": "Mon, 05 Aug 2024 13:21:11 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "\u05e2\u05e6\u05dc\u05e0\u05d9\u05e7\u05d4 2024",
    "brewery": "Schnitt Brewing Company\ufeff",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "katz daniel",
    "time": "Sun, 04 Aug 2024 18:02:01 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "L\u00f6wenbr\u00e4u M\u00e4rzen",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "M\u00e4rzen"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Sun, 04 Aug 2024 15:29:02 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 20:05:39 +0000",
    "serving": "",
    "data_rating": "1.25",
    "beer_name": "Palomascope",
    "brewery": "Anderson's Brewery",
    "beer_type": "Lager - Mexican"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:40:42 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:38:59 +0000",
    "serving": "",
    "data_rating": "2.0",
    "beer_name": "Neon Dream",
    "brewery": "BrewDog",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:34:48 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:30:37 +0000",
    "serving": "",
    "data_rating": "4.75",
    "beer_name": "Fruitesse",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:28:02 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Goudenband",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:26:15 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Kriek Brut",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:23:40 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "P\u00eacheresse",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:22:24 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Apple / Pomme",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Fruit"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:16:28 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Gl\u00fchkriek",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:13:09 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "\u05d4\u05e4\u05d5\u05da \u05d2\u05d5\u05d8\u05d4",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Stout - White / Golden"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:11:23 +0000",
    "serving": "",
    "data_rating": "1.0",
    "beer_name": "\u05e1\u05dc\u05d8\u05d4 \u05de\u05e9\u05d5\u05d5\u05d9\u05d4",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:08:07 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Lucky Shot",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:06:56 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Balance",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:06:30 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Massala",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:05:16 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "\u05e9\u05e0\u05d0\u05e4\u05d9",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:04:51 +0000",
    "serving": "",
    "data_rating": "2.25",
    "beer_name": "Bitter is your Friend ~ \u05d0\u05d9. \u05e4\u05d9\u05d9. \u05d0\u05d9\u05d9",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 19:02:31 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Stuck In the Snow",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:55:23 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Guava Mandarin Mango",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:50:49 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Peach & Passion Fruit Bellini",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:49:17 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Strawberry Sundae",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:47:58 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Raspberry Strawberry Coconut Ripple",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:46:49 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Triple Fruited Mango (6.2%)",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:42:57 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Ich Bin Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:21:29 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Double Pie - 2X\u03c0 - Apricots And Pears \u05d3\u05d0\u05d1\u05dc \u05e4\u05d0\u05d9",
    "brewery": "Goren's Brewery",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 18:08:29 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Florida Weisse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 17:50:22 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Sour Series - Papaya, Mango & Guava Smoothie Sour Ale",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "ursa",
    "user": "Asaf Levitzky",
    "time": "Sat, 03 Aug 2024 16:42:36 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Neon Dream",
    "brewery": "BrewDog",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Shai Avital",
    "time": "Sat, 03 Aug 2024 16:40:50 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Neon Dream",
    "brewery": "BrewDog",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Asaf Levitzky",
    "time": "Sat, 03 Aug 2024 16:35:02 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Florida Weisse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "ursa",
    "user": "Shai Avital",
    "time": "Sat, 03 Aug 2024 16:31:15 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Florida Weisse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "ursa",
    "user": "Shai Avital",
    "time": "Sat, 03 Aug 2024 16:10:01 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Yoni Gershoig",
    "time": "Sat, 03 Aug 2024 14:26:55 +0000",
    "serving": "",
    "data_rating": "4.75",
    "beer_name": "Gelato: Passion Fruit, Mango & Peach",
    "brewery": "Funky Fluid",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 02 Aug 2024 13:44:05 +0000",
    "serving": "draft",
    "data_rating": "3.7",
    "beer_name": "Original N\u00fcrnberger Rotbier",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Lager - Rotbier"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 01 Aug 2024 18:28:26 +0000",
    "serving": "",
    "data_rating": "2.0",
    "beer_name": "Walking Coeliacs",
    "brewery": "La Calavera",
    "beer_type": "Gluten-Free"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 01 Aug 2024 18:19:45 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 01 Aug 2024 16:19:11 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Thu, 01 Aug 2024 15:10:55 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Quiet Storm - Sabro",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Skinny Penis",
    "time": "Wed, 31 Jul 2024 19:58:07 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Erdinger Wei\u00dfbier / Hefe-Weizen",
    "brewery": "Erdinger Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Martha Greenfield",
    "time": "Wed, 31 Jul 2024 16:45:31 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "berlin-florentin",
    "user": "Martha Greenfield",
    "time": "Wed, 31 Jul 2024 16:44:07 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "L\u00f6wenbr\u00e4u Original",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Oren Sela",
    "time": "Wed, 31 Jul 2024 16:21:55 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hop Hop Back",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "bartov-holon",
    "user": "Yana O",
    "time": "Mon, 29 Jul 2024 19:45:09 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Alma (\u05e2\u05dc\u05de\u05d4)",
    "brewery": "Font Salem Portugal",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "bartov-holon",
    "user": "Yana O",
    "time": "Mon, 29 Jul 2024 19:24:08 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "bartov-holon",
    "user": "Yana O",
    "time": "Mon, 29 Jul 2024 19:21:04 +0000",
    "serving": "bottle",
    "data_rating": "",
    "beer_name": "Kriek Brut (2023) (2 Years Aged)",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "beerline",
    "user": "Omri Gill",
    "time": "Mon, 29 Jul 2024 11:50:09 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Omri Gill",
    "time": "Mon, 29 Jul 2024 11:09:53 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Spaten M\u00fcnchen / M\u00fcnchner Hell / Premium Lager",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Miki Zaidel",
    "time": "Sat, 27 Jul 2024 12:40:02 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Miki Zaidel",
    "time": "Sat, 27 Jul 2024 06:13:01 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Bhindi IPA",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Miki Zaidel",
    "time": "Sat, 27 Jul 2024 06:11:49 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Fat Cat Pale Ale (\u05d7\u05ea\u05d5\u05dc \u05e9\u05de\u05df)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Miki Zaidel",
    "time": "Sat, 27 Jul 2024 06:10:58 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Dodash (\u05d3\u05d5\u05d3\u05d4\u05f3\u05e9\u05da) Amber Ale",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "ursa",
    "user": "Korvin Kori",
    "time": "Thu, 25 Jul 2024 23:44:46 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Staccato",
    "brewery": "Siren Craft Brew",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "berlin-florentin",
    "user": "Korvin Kori",
    "time": "Thu, 25 Jul 2024 21:39:16 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Thu, 25 Jul 2024 21:38:10 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Eyal K",
    "time": "Thu, 25 Jul 2024 21:19:28 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Cocoa Wonderland",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Thu, 25 Jul 2024 20:45:00 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Thu, 25 Jul 2024 17:56:24 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Party In the Dark",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Milk / Sweet"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 25 Jul 2024 15:24:06 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Sat, 20 Jul 2024 20:38:40 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Pink Lemonade Cider (\u05e2\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc \u05d7\u05d9)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Sat, 20 Jul 2024 20:33:35 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Guy Elkayam",
    "time": "Sat, 20 Jul 2024 20:28:27 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Hop Hop \u05d8\u05e8\u05dc\u05dc\u05d4",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Yanai Ben- Alon",
    "time": "Sat, 20 Jul 2024 18:03:11 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Silkie Stout",
    "brewery": "Loch Lomond Brewery",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Eylon Hadar",
    "time": "Sat, 20 Jul 2024 17:45:29 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Silkie Stout",
    "brewery": "Loch Lomond Brewery",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 19 Jul 2024 13:35:01 +0000",
    "serving": "draft",
    "data_rating": "3.8",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 19 Jul 2024 13:17:07 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Lumina",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 18 Jul 2024 16:08:45 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Lumina",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 18 Jul 2024 15:40:46 +0000",
    "serving": "",
    "data_rating": "3.9",
    "beer_name": "A Sour Love Story",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nadav Goldstein",
    "time": "Wed, 17 Jul 2024 17:36:43 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Black Jack",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "beerbazaar-brewery",
    "user": "Nadav Goldstein",
    "time": "Wed, 17 Jul 2024 17:35:56 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Esser (\u05d1\u05d9\u05e8\u05d4 \u05e2\u05e9\u05e8)",
    "brewery": "BeerBazaar / Mivshelet Ha\u2019Aretz",
    "beer_type": "Belgian Tripel"
  },
  {
    "venue": "berlin-florentin",
    "user": "Miki Zaidel",
    "time": "Sun, 14 Jul 2024 14:14:19 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "ursa",
    "user": "Itay Sharmigin",
    "time": "Tue, 09 Jul 2024 17:43:30 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Miki Zaidel",
    "time": "Sun, 07 Jul 2024 19:47:54 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Spaten M\u00fcnchen / M\u00fcnchner Hell / Premium Lager",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "berlin-florentin",
    "user": "Miki Zaidel",
    "time": "Sun, 07 Jul 2024 19:46:59 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Franziskaner Premium Weissbier Naturtr\u00fcb",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "bartov-holon",
    "user": "Dor_eilon",
    "time": "Sat, 06 Jul 2024 18:42:02 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Guava Mandarin Mango",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "bartov-holon",
    "user": "Itsik Marco",
    "time": "Fri, 05 Jul 2024 22:37:35 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "bartov-holon",
    "user": "Itsik Marco",
    "time": "Fri, 05 Jul 2024 22:19:13 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Guava Mandarin Mango",
    "brewery": "Vault City Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Jacob Collier",
    "time": "Wed, 03 Jul 2024 17:39:31 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Dor Shaim",
    "time": "Mon, 01 Jul 2024 16:42:24 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Original N\u00fcrnberger Rotbier",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Lager - Rotbier"
  },
  {
    "venue": "ursa",
    "user": "Steve Shafran",
    "time": "Fri, 28 Jun 2024 21:48:01 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Cherry Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Steve Shafran",
    "time": "Fri, 28 Jun 2024 20:57:22 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Daniel_the-beer-man",
    "time": "Fri, 28 Jun 2024 20:35:17 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Wed, 26 Jun 2024 14:43:42 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Morten Sommer Larsen",
    "time": "Tue, 25 Jun 2024 13:46:21 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Weihenstephaner Hefeweissbier",
    "brewery": "Bayerische Staatsbrauerei Weihenstephan",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Michael Bunin",
    "time": "Sun, 23 Jun 2024 16:28:50 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 21 Jun 2024 20:14:35 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Staccato",
    "brewery": "Siren Craft Brew",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "ursa",
    "user": "Ben Rouda",
    "time": "Fri, 21 Jun 2024 20:13:42 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerline",
    "user": "Anton Shlafman",
    "time": "Fri, 21 Jun 2024 13:18:40 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Spaten M\u00fcnchen / M\u00fcnchner Hell / Premium Lager",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerline",
    "user": "Anton Shlafman",
    "time": "Fri, 21 Jun 2024 13:17:37 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "K\u00f6stritzer Schwarzbier",
    "brewery": "K\u00f6stritzer Schwarzbierbrauerei",
    "beer_type": "Schwarzbier"
  },
  {
    "venue": "beerline",
    "user": "Anton Shlafman",
    "time": "Fri, 21 Jun 2024 12:51:04 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Anton Shlafman",
    "time": "Fri, 21 Jun 2024 12:49:16 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "mosi6",
    "time": "Mon, 17 Jun 2024 19:18:18 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "bartov-holon",
    "user": "Flo R",
    "time": "Mon, 17 Jun 2024 09:57:11 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shiran Kushnir",
    "time": "Wed, 12 Jun 2024 18:48:59 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "eitanr20",
    "time": "Tue, 11 Jun 2024 07:53:27 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Nosferatu",
    "brewery": "La Calavera",
    "beer_type": "Stout - Pastry"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 06 Jun 2024 15:39:42 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Salted Caramel Lucaria",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Nathan Blinder",
    "time": "Tue, 04 Jun 2024 17:42:07 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Spontanblueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Mon, 03 Jun 2024 17:41:40 +0000",
    "serving": "draft",
    "data_rating": "4.6",
    "beer_name": "Hallo Ich Bin Berliner Weisse Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Ido Kessler",
    "time": "Wed, 29 May 2024 14:43:04 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Liquid Cocaine",
    "brewery": "Mad Scientist",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beerline",
    "user": "Ido Kessler",
    "time": "Wed, 29 May 2024 13:19:23 +0000",
    "serving": "draft",
    "data_rating": "4.1",
    "beer_name": "Florida Weisse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Ido Kessler",
    "time": "Wed, 29 May 2024 13:18:09 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerline",
    "user": "Ido Kessler",
    "time": "Wed, 29 May 2024 13:16:58 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Black Barrel Aged",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "Ido Kessler",
    "time": "Wed, 29 May 2024 13:15:56 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Dry Hop'd Zwickl",
    "brewery": "Bitburger Brauerei",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beerline",
    "user": "Ido Kessler",
    "time": "Wed, 29 May 2024 13:14:12 +0000",
    "serving": "",
    "data_rating": "3.2",
    "beer_name": "Th. K\u00f6nig Zwickl",
    "brewery": "K\u00f6nig Brauerei",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beerline",
    "user": "Ido Kessler",
    "time": "Wed, 29 May 2024 13:10:30 +0000",
    "serving": "draft",
    "data_rating": "4.4",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Tue, 28 May 2024 19:05:58 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sono Burger",
    "time": "Mon, 27 May 2024 17:49:19 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Hallo Ich Bin Berliner Weisse Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Sono Burger",
    "time": "Mon, 27 May 2024 16:39:54 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Hallo Ich Bin Berliner Weisse Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "bartov-holon",
    "user": "eitanr20",
    "time": "Mon, 27 May 2024 11:57:48 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 25 May 2024 18:30:49 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Selfish Games - West Coast Tripping",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 25 May 2024 18:29:25 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Selfish Games - West Coast Tripping",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Fri, 24 May 2024 16:08:39 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Thu, 23 May 2024 18:46:17 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Carlsberg Luma",
    "brewery": "Israel Beer Breweries Ltd. (IBBL)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Thu, 23 May 2024 18:30:35 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "ursa",
    "user": "Omri Gill",
    "time": "Thu, 23 May 2024 17:47:43 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Green Mountain",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 23 May 2024 17:10:26 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Thu, 23 May 2024 15:35:23 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "ursa",
    "user": "Omry Shapira",
    "time": "Wed, 22 May 2024 19:45:25 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Hop Opera",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Omry Shapira",
    "time": "Wed, 22 May 2024 18:41:07 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Scene Stealer",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Or Cohen",
    "time": "Wed, 22 May 2024 18:30:51 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Scene Stealer",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Omri Wolf",
    "time": "Wed, 22 May 2024 08:18:14 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Hop Opera",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "bartov-holon",
    "user": "Ido Kessler",
    "time": "Tue, 21 May 2024 20:33:13 +0000",
    "serving": "bottle",
    "data_rating": "2.75",
    "beer_name": "THAIPA",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "bartov-holon",
    "user": "Ido Kessler",
    "time": "Tue, 21 May 2024 20:29:45 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Florida Weisse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "bartov-holon",
    "user": "Ido Kessler",
    "time": "Tue, 21 May 2024 19:51:51 +0000",
    "serving": "bottle",
    "data_rating": "2.5",
    "beer_name": "Vaadat Kishut (\u05d5\u05e2\u05d3\u05ea \u05db\u05d9\u05e9\u05d5\u05ea) (2023)",
    "brewery": "Herzl (\u05d4\u05e8\u05e6\u05dc)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Ido Kessler",
    "time": "Tue, 21 May 2024 19:50:17 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Massala",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Ido Kessler",
    "time": "Tue, 21 May 2024 19:38:20 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "\u05e9\u05e0\u05d0\u05e4\u05d9",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Ofir Israeli",
    "time": "Tue, 21 May 2024 19:32:13 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Hop Opera",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Omri Wolf",
    "time": "Tue, 21 May 2024 19:01:02 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Ofir Israeli",
    "time": "Tue, 21 May 2024 18:40:12 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Nahum Haver",
    "time": "Sun, 19 May 2024 20:02:49 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Trickster",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Nahum Haver",
    "time": "Sun, 19 May 2024 19:39:05 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Resting Brew Face",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Alon Szczupak",
    "time": "Sat, 18 May 2024 15:43:11 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Neck Oil",
    "brewery": "Beavertown",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 17 May 2024 13:47:43 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Argentum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "IPA - Belgian"
  },
  {
    "venue": "ursa",
    "user": "arny_autocue",
    "time": "Thu, 16 May 2024 19:01:20 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yana O",
    "time": "Fri, 10 May 2024 15:57:04 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Avichai Elgrabli",
    "time": "Fri, 10 May 2024 14:34:08 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Florida Weisse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Avichai Elgrabli",
    "time": "Fri, 10 May 2024 14:33:42 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Stiegl-Radler Grapefruit",
    "brewery": "Stieglbrauerei zu Salzburg",
    "beer_type": "Shandy / Radler"
  },
  {
    "venue": "beerline",
    "user": "Avichai Elgrabli",
    "time": "Fri, 10 May 2024 14:33:10 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Bryan L",
    "time": "Thu, 09 May 2024 19:00:21 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Zirndorfer Landbier",
    "brewery": "Brauerei Zirndorf",
    "beer_type": "Lager - Amber / Red"
  },
  {
    "venue": "ursa",
    "user": "Bryan L",
    "time": "Thu, 09 May 2024 18:47:37 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Carlsberg Luma",
    "brewery": "Israel Beer Breweries Ltd. (IBBL)",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerline",
    "user": "Yosef Dahan",
    "time": "Wed, 08 May 2024 20:27:21 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Yosef Dahan",
    "time": "Wed, 08 May 2024 20:26:38 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Florida Weisse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Yosef Dahan",
    "time": "Wed, 08 May 2024 20:25:43 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Yosef Dahan",
    "time": "Wed, 08 May 2024 20:24:40 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Stiegl-Radler Grapefruit",
    "brewery": "Stieglbrauerei zu Salzburg",
    "beer_type": "Shandy / Radler"
  },
  {
    "venue": "beerline",
    "user": "Yosef Dahan",
    "time": "Wed, 08 May 2024 16:18:55 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Black Barrel Aged",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Merav Tink",
    "time": "Tue, 07 May 2024 17:25:25 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "vazy1",
    "time": "Mon, 06 May 2024 21:17:15 +0000",
    "serving": "draft",
    "data_rating": "2.0",
    "beer_name": "Ronen The Ugly Beer (\u05d4\u05d1\u05d9\u05e8\u05d4 \u05d4\u05de\u05db\u05d5\u05e2\u05e8\u05ea)",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "rom_gvili_1241",
    "time": "Fri, 03 May 2024 21:20:34 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Budweiser Budvar / Czechvar Original",
    "brewery": "Bud\u011bjovick\u00fd Budvar",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beerline",
    "user": "Yosef Dahan",
    "time": "Fri, 03 May 2024 19:16:48 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Yosef Dahan",
    "time": "Fri, 03 May 2024 18:29:44 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "K\u00f6stritzer Schwarzbier",
    "brewery": "K\u00f6stritzer Schwarzbierbrauerei",
    "beer_type": "Schwarzbier"
  },
  {
    "venue": "bartov-holon",
    "user": "Nikolay",
    "time": "Fri, 03 May 2024 16:20:54 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Balance",
    "brewery": "Hatch (\u05d4\u05d0\u05d8\u05e6\u05f3)",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "bartov-holon",
    "user": "Nikolay",
    "time": "Fri, 03 May 2024 15:30:55 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Thu, 02 May 2024 16:48:42 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 29 Apr 2024 18:11:21 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Sun, 28 Apr 2024 22:22:50 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "K\u00f6ln Tourist",
    "brewery": "Volfas Engelman",
    "beer_type": "K\u00f6lsch"
  },
  {
    "venue": "bartov-holon",
    "user": "eitanr20",
    "time": "Thu, 25 Apr 2024 20:46:13 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Sheeta IPA",
    "brewery": "Sheeta Brewery (\u05d1\u05d9\u05e8\u05d4 \u05e9\u05d9\u05d8\u05d4)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "AngryBeerGuy",
    "time": "Wed, 24 Apr 2024 18:04:48 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Riesling People",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "May Cohen",
    "time": "Wed, 24 Apr 2024 18:04:12 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Riesling People",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "paul_vicoleanu",
    "time": "Wed, 24 Apr 2024 17:32:36 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "paul_vicoleanu",
    "time": "Wed, 24 Apr 2024 17:08:51 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "L\u00f6wenbr\u00e4u Original",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "berlin-florentin",
    "user": "paul_vicoleanu",
    "time": "Wed, 24 Apr 2024 16:38:43 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daniel_Wagner_1124",
    "time": "Wed, 24 Apr 2024 16:38:12 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "rom_gvili_1241",
    "time": "Tue, 23 Apr 2024 20:11:18 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "berlin-florentin",
    "user": "leonid ulitsky",
    "time": "Sat, 20 Apr 2024 17:02:25 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Amber Ale (\u05ea\u05e7\u05d5\u05de\u05d4)",
    "brewery": "\u05d1\u05d9\u05e8\u05d4 \u05e9\u05e7\u05de\u05d4 Shikma Beer",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "bartov-holon",
    "user": "Roi Tal",
    "time": "Thu, 18 Apr 2024 20:51:23 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Cocoa Wonderland",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Roi Tal",
    "time": "Thu, 18 Apr 2024 20:31:26 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "St-Louis Gueuze Fond Tradition",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 17 Apr 2024 15:39:18 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Barb\u00e3r Bok",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Bock - Single / Traditional"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 17 Apr 2024 15:37:58 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Dark Fruit",
    "brewery": "Magners Irish Cider",
    "beer_type": "Cider - Other Fruit"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Tue, 16 Apr 2024 19:44:16 +0000",
    "serving": "",
    "data_rating": "4.1",
    "beer_name": "Monkey Temple",
    "brewery": "Mad Scientist",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Stanislav Rizberg",
    "time": "Mon, 15 Apr 2024 17:50:50 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Fri, 12 Apr 2024 20:25:51 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Hazy Jane Guava",
    "brewery": "BrewDog",
    "beer_type": "IPA - Milkshake"
  },
  {
    "venue": "beerline",
    "user": "\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0421\u0435\u043c\u0435\u043d\u043a\u0438\u043d",
    "time": "Thu, 11 Apr 2024 17:21:26 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Delirium Black Barrel Aged (2023)",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0421\u0435\u043c\u0435\u043d\u043a\u0438\u043d",
    "time": "Thu, 11 Apr 2024 16:33:19 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Wed, 10 Apr 2024 18:34:40 +0000",
    "serving": "can",
    "data_rating": "4.6",
    "beer_name": "Liquid Cocaine",
    "brewery": "Mad Scientist",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Pan Eyal",
    "time": "Fri, 05 Apr 2024 14:19:09 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Thu, 04 Apr 2024 18:04:05 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Broken Dream (Nitro)",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Thu, 04 Apr 2024 17:34:35 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Resting Brew Face",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Thu, 04 Apr 2024 17:34:00 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Japanese Rice Lager",
    "brewery": "Mikkeller",
    "beer_type": "Lager - Japanese Rice"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sun, 31 Mar 2024 11:19:21 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Alon Szczupak",
    "time": "Sat, 30 Mar 2024 20:54:34 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sat, 30 Mar 2024 16:12:31 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Stuck In the Snow",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "omer_shahar_8969",
    "time": "Sat, 30 Mar 2024 15:47:12 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Fri, 29 Mar 2024 20:31:52 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Mongozo Banana",
    "brewery": "Mongozo",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 28 Mar 2024 17:58:42 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 28 Mar 2024 17:56:18 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Tokyo",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "berlin-florentin",
    "user": "Michael Drogochinsky",
    "time": "Thu, 28 Mar 2024 09:27:50 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Michael Drogochinsky",
    "time": "Thu, 28 Mar 2024 09:26:51 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 27 Mar 2024 16:27:16 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Wed, 27 Mar 2024 13:18:43 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Delirium Black Barrel Aged (2023)",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Wed, 27 Mar 2024 12:43:15 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Mon, 25 Mar 2024 17:36:26 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Punk IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Mon, 25 Mar 2024 16:00:39 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Beck's",
    "brewery": "Brauerei Beck",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sun, 24 Mar 2024 19:50:44 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Sat, 23 Mar 2024 19:58:35 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Sat, 23 Mar 2024 19:49:45 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Hop Frenzy",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Sat, 23 Mar 2024 00:25:49 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Fri, 22 Mar 2024 23:38:32 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Fri, 22 Mar 2024 22:40:20 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Thu, 21 Mar 2024 22:42:51 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Tue, 19 Mar 2024 18:06:37 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Delirium Black Barrel Aged",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Mon, 18 Mar 2024 19:14:28 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Blanc",
    "brewery": "Volfas Engelman",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Mon, 18 Mar 2024 09:02:21 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Mongozo Banana",
    "brewery": "Mongozo",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sun, 17 Mar 2024 21:33:58 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hallo Ich Bin Berliner Weisse Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sun, 17 Mar 2024 20:36:26 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sun, 17 Mar 2024 20:34:50 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Quiet Storm - African Queen",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Sun, 17 Mar 2024 18:26:19 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Sun, 17 Mar 2024 18:25:09 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Fri, 15 Mar 2024 18:24:05 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Hazy Queen",
    "brewery": "HORIZONT Brewing",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 15 Mar 2024 14:00:52 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Thu, 14 Mar 2024 18:59:43 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Kuba",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Dmitri",
    "time": "Thu, 14 Mar 2024 18:47:09 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Hop Opera",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Tue, 12 Mar 2024 14:07:45 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 08 Mar 2024 19:57:13 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Hop Frenzy",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 07 Mar 2024 20:45:11 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Th. K\u00f6nig Zwickl",
    "brewery": "K\u00f6nig Brauerei",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 07 Mar 2024 17:29:38 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 07 Mar 2024 17:18:54 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 07 Mar 2024 17:01:02 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Wed, 06 Mar 2024 18:13:11 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 06 Mar 2024 15:20:58 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Drunken Sailor",
    "brewery": "CREW Republic",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 06 Mar 2024 11:29:16 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 06 Mar 2024 11:26:24 +0000",
    "serving": "can",
    "data_rating": "2.75",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Mon, 04 Mar 2024 17:39:46 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Leffe Blonde / Blond",
    "brewery": "Abbaye de Leffe",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Mon, 04 Mar 2024 17:39:33 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Krombacher Weizen",
    "brewery": "Krombacher Gruppe",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "ursa",
    "user": "katz daniel",
    "time": "Sun, 03 Mar 2024 18:05:34 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Neck Oil",
    "brewery": "Beavertown",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "omer_shahar_8969",
    "time": "Sat, 02 Mar 2024 16:13:41 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Neck Oil",
    "brewery": "Beavertown",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ohad Iris",
    "time": "Sat, 02 Mar 2024 00:14:26 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Oude Gueuze Tilquin \u00e0 l'Ancienne",
    "brewery": "Gueuzerie Tilquin",
    "beer_type": "Lambic - Gueuze"
  },
  {
    "venue": "bartov-holon",
    "user": "Roy Falach",
    "time": "Fri, 01 Mar 2024 21:54:15 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Alma (\u05e2\u05dc\u05de\u05d4)",
    "brewery": "Font Salem Portugal",
    "beer_type": "Lager - Vienna"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 01 Mar 2024 20:05:04 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Mandatory Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "berlin-florentin",
    "user": "Michael Bunin",
    "time": "Wed, 28 Feb 2024 17:57:33 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omer Peleg",
    "time": "Tue, 27 Feb 2024 20:58:51 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Erdinger Wei\u00dfbier / Hefe-Weizen",
    "brewery": "Erdinger Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Michael Bunin",
    "time": "Tue, 27 Feb 2024 17:18:40 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Ich Bin Blueberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sat, 24 Feb 2024 17:05:09 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Hop Frenzy",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sat, 24 Feb 2024 17:00:48 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Lunar Haze",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Elias Saadeh",
    "time": "Sat, 24 Feb 2024 15:10:52 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Mongozo Banana",
    "brewery": "Mongozo",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 23 Feb 2024 20:41:51 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 23 Feb 2024 15:44:38 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Floris Cactus",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Wheat Beer - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 22 Feb 2024 17:06:19 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "berlin-florentin",
    "user": "Merav Tink",
    "time": "Thu, 22 Feb 2024 16:07:06 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Tue, 20 Feb 2024 12:10:52 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "O'Hara's Irish Red",
    "brewery": "O'Hara's Brewery",
    "beer_type": "Red Ale - Irish"
  },
  {
    "venue": "beerline",
    "user": "gecec",
    "time": "Sat, 17 Feb 2024 12:27:09 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Argentum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "IPA - Belgian"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 17 Feb 2024 12:20:59 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 16 Feb 2024 21:47:20 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Mongozo Banana",
    "brewery": "Mongozo",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 16 Feb 2024 21:36:41 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 16 Feb 2024 18:49:41 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 16 Feb 2024 15:57:34 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 16 Feb 2024 15:34:42 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 16 Feb 2024 14:43:31 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "K\u00f6stritzer Schwarzbier",
    "brewery": "K\u00f6stritzer Schwarzbierbrauerei",
    "beer_type": "Schwarzbier"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 16 Feb 2024 14:33:50 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Quiet Storm - Eclipse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Thu, 15 Feb 2024 20:30:00 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Riesling People",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Thu, 15 Feb 2024 20:28:52 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Grind",
    "brewery": "BrewDog",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 15 Feb 2024 16:29:43 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Tue, 13 Feb 2024 19:33:52 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Tue, 13 Feb 2024 19:26:29 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "SpontanAcai",
    "brewery": "Mikkeller",
    "beer_type": "Wild Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Tue, 13 Feb 2024 19:05:44 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Quiet Storm - Eclipse",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Mon, 12 Feb 2024 14:06:36 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Cocoa Wonderland",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 09 Feb 2024 14:25:03 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "NEIPA",
    "brewery": "Volfas Engelman",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 08 Feb 2024 18:42:45 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 08 Feb 2024 18:09:59 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Delirium Tremens",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 08 Feb 2024 15:20:36 +0000",
    "serving": "can",
    "data_rating": "3.4",
    "beer_name": "Hobgoblin Gold",
    "brewery": "Marston's Brewery",
    "beer_type": "Blonde / Golden Ale - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ilya Markovsky",
    "time": "Thu, 08 Feb 2024 14:52:24 +0000",
    "serving": "",
    "data_rating": "4.8",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 08 Feb 2024 14:36:04 +0000",
    "serving": "",
    "data_rating": "3.6",
    "beer_name": "Stuck In the Snow",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Tue, 06 Feb 2024 17:58:32 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Stuck In the Snow",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Tue, 06 Feb 2024 17:57:58 +0000",
    "serving": "can",
    "data_rating": "2.0",
    "beer_name": "Resting Brew Face",
    "brewery": "Mikkeller",
    "beer_type": "IPA - Imperial / Double New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Tue, 06 Feb 2024 17:43:19 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sun, 04 Feb 2024 20:22:31 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Dry Hop'd Zwickl",
    "brewery": "Bitburger Brauerei",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Sun, 04 Feb 2024 14:12:50 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Fri, 02 Feb 2024 14:19:12 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Argentum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "IPA - Belgian"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 01 Feb 2024 17:37:55 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Lumina",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "bartov-holon",
    "user": "Nate Gans",
    "time": "Sat, 27 Jan 2024 22:29:54 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "Anagram Blueberry Cheesecake Stout",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 26 Jan 2024 15:27:56 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Delirium Tremens",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 07:24:08 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Abbaye de Saint Bon-Chien",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Sour - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 07:18:37 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Zidania",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Bi\u00e8re de Champagne / Bi\u00e8re Brut"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 07:10:06 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "La Meule",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 07:07:46 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Beste Freunde",
    "brewery": "Schneeeule",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 07:00:29 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Minverva",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 06:58:33 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Formations",
    "brewery": "Alefarm Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 06:54:23 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Maya",
    "brewery": "Alefarm Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 06:52:09 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "200 Units",
    "brewery": "Brewski",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 06:45:16 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "\u00a1Buena Para El Papa! \u00bfSi, No?",
    "brewery": "Brewski",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 06:43:12 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Strawberry Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 06:41:08 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Pineapple Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Ronin",
    "time": "Tue, 23 Jan 2024 06:38:31 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Fixelli IPA",
    "brewery": "OneTwo",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 20:54:53 +0000",
    "serving": "draft",
    "data_rating": "3.3",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 20:29:54 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "Abbaye de Saint Bon-Chien",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Sour - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 20:22:36 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Abbaye de Saint Bon-Chien",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Sour - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 20:21:17 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Zidania",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Bi\u00e8re de Champagne / Bi\u00e8re Brut"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 20:21:06 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Abbaye de Saint Bon-Chien (2018)",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Sour - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 20:13:32 +0000",
    "serving": "bottle",
    "data_rating": "3.5",
    "beer_name": "La Meule",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 20:13:07 +0000",
    "serving": "bottle",
    "data_rating": "4.4",
    "beer_name": "Zidania",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Bi\u00e8re de Champagne / Bi\u00e8re Brut"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 20:12:38 +0000",
    "serving": "bottle",
    "data_rating": "4.75",
    "beer_name": "Zidania",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Bi\u00e8re de Champagne / Bi\u00e8re Brut"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 20:07:36 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Zidania",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Bi\u00e8re de Champagne / Bi\u00e8re Brut"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tom Oppenheim",
    "time": "Mon, 22 Jan 2024 20:04:20 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "La Meule",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 20:04:15 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "La Meule",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 20:03:18 +0000",
    "serving": "bottle",
    "data_rating": "3.6",
    "beer_name": "La Meule",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 20:00:57 +0000",
    "serving": "bottle",
    "data_rating": "4.75",
    "beer_name": "La Meule",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 19:59:42 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Pineapple Pie (3.5%)",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 19:58:52 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "La Meule",
    "brewery": "Brasserie des Franches-Montagnes (BFM)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:57:58 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Fixelli IPA",
    "brewery": "OneTwo",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:56:26 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Pineapple Pie (3.5%)",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 19:56:10 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Beste Freunde",
    "brewery": "Schneeeule",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 19:55:24 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "Mariana",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:55:11 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Strawberry Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 19:54:57 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "Minverva",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:54:10 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "200 Units",
    "brewery": "Brewski",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:53:14 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "\u00a1Buena Para El Papa! \u00bfSi, No?",
    "brewery": "Brewski",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:51:43 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Maya",
    "brewery": "Alefarm Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:50:44 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Formations",
    "brewery": "Alefarm Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:48:41 +0000",
    "serving": "bottle",
    "data_rating": "4.5",
    "beer_name": "Minverva",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 19:47:11 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Mariana",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 19:46:38 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Beste Freunde",
    "brewery": "Schneeeule",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:46:22 +0000",
    "serving": "bottle",
    "data_rating": "4.75",
    "beer_name": "Mariana",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Daria Shamai",
    "time": "Mon, 22 Jan 2024 19:45:14 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Beste Freunde",
    "brewery": "Schneeeule",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 19:44:43 +0000",
    "serving": "bottle",
    "data_rating": "3.8",
    "beer_name": "Beste Freunde",
    "brewery": "Schneeeule",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 19:44:17 +0000",
    "serving": "bottle",
    "data_rating": "4.2",
    "beer_name": "Mariana",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tom Oppenheim",
    "time": "Mon, 22 Jan 2024 19:44:14 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Beste Freunde",
    "brewery": "Schneeeule",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 19:42:21 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Beste Freunde",
    "brewery": "Schneeeule",
    "beer_type": "Stout - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 19:40:54 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Minverva",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tom Oppenheim",
    "time": "Mon, 22 Jan 2024 19:40:17 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Mariana",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 19:39:47 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Formations",
    "brewery": "Alefarm Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 19:35:03 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Mariana",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 19:32:37 +0000",
    "serving": "bottle",
    "data_rating": "4.2",
    "beer_name": "Minverva",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tom Oppenheim",
    "time": "Mon, 22 Jan 2024 19:29:49 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Minverva",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 19:24:35 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Minverva",
    "brewery": "Schneeeule",
    "beer_type": "Sour - Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 19:20:40 +0000",
    "serving": "can",
    "data_rating": "3.9",
    "beer_name": "Formations",
    "brewery": "Alefarm Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 19:05:58 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Formations",
    "brewery": "Alefarm Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 19:04:49 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Formations",
    "brewery": "Alefarm Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tom Oppenheim",
    "time": "Mon, 22 Jan 2024 19:04:04 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Formations",
    "brewery": "Alefarm Brewing",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 18:59:19 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Maya",
    "brewery": "Alefarm Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 18:58:46 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Maya",
    "brewery": "Alefarm Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tom Oppenheim",
    "time": "Mon, 22 Jan 2024 18:57:32 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Maya",
    "brewery": "Alefarm Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 18:57:30 +0000",
    "serving": "can",
    "data_rating": "3.3",
    "beer_name": "Maya",
    "brewery": "Alefarm Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 18:55:59 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Maya",
    "brewery": "Alefarm Brewing",
    "beer_type": "Sour - Fruited"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 18:51:23 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "\u00a1Buena Para El Papa! \u00bfSi, No?",
    "brewery": "Brewski",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 18:49:44 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "\u00a1Buena Para El Papa! \u00bfSi, No?",
    "brewery": "Brewski",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 18:49:41 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "\u00a1Buena Para El Papa! \u00bfSi, No?",
    "brewery": "Brewski",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 18:49:04 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "200 Units",
    "brewery": "Brewski",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Tom Oppenheim",
    "time": "Mon, 22 Jan 2024 18:48:49 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "\u00a1Buena Para El Papa! \u00bfSi, No?",
    "brewery": "Brewski",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 18:42:20 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "200 Units",
    "brewery": "Brewski",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 18:42:20 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "200 Units",
    "brewery": "Brewski",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 18:41:52 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Strawberry Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Itai Snai",
    "time": "Mon, 22 Jan 2024 18:40:50 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "200 Units",
    "brewery": "Brewski",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 18:38:56 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "200 Units",
    "brewery": "Brewski",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 18:34:57 +0000",
    "serving": "can",
    "data_rating": "3.8",
    "beer_name": "Strawberry Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Itai Snai",
    "time": "Mon, 22 Jan 2024 18:34:30 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Strawberry Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 18:34:29 +0000",
    "serving": "can",
    "data_rating": "3.7",
    "beer_name": "Pineapple Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 18:34:03 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Strawberry Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 18:33:30 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Strawberry Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 18:30:50 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Pineapple Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 18:30:22 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Pineapple Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Itai Snai",
    "time": "Mon, 22 Jan 2024 18:29:21 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Pineapple Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 18:29:00 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Pineapple Pie",
    "brewery": "Brewski",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "ori shuster",
    "time": "Mon, 22 Jan 2024 18:24:52 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Fixelli IPA",
    "brewery": "OneTwo",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Shmupi Koto",
    "time": "Mon, 22 Jan 2024 18:23:54 +0000",
    "serving": "can",
    "data_rating": "3.6",
    "beer_name": "Fixelli IPA",
    "brewery": "OneTwo",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Itai Snai",
    "time": "Mon, 22 Jan 2024 18:22:33 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Fixelli IPA",
    "brewery": "OneTwo",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Yaron Sh",
    "time": "Mon, 22 Jan 2024 18:22:21 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Fixelli IPA",
    "brewery": "OneTwo",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 18:20:59 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Fixelli IPA",
    "brewery": "OneTwo",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Shachar Granot-Mayer",
    "time": "Mon, 22 Jan 2024 17:53:25 +0000",
    "serving": "draft",
    "data_rating": "2.5",
    "beer_name": "Edelweiss Snowfresh / Wheat Beer",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Shachar Granot-Mayer",
    "time": "Mon, 22 Jan 2024 17:52:07 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Shachar Granot-Mayer",
    "time": "Mon, 22 Jan 2024 17:48:07 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Delirium Tremens",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 16:49:45 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "berlin-florentin",
    "user": "Mikhail Stolov",
    "time": "Mon, 22 Jan 2024 16:06:21 +0000",
    "serving": "draft",
    "data_rating": "4.75",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Oleg",
    "time": "Mon, 22 Jan 2024 14:54:04 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Oleg",
    "time": "Mon, 22 Jan 2024 14:52:43 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "berlin-florentin",
    "user": "Michael Bunin",
    "time": "Sun, 21 Jan 2024 19:13:10 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 20 Jan 2024 20:20:46 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Grind",
    "brewery": "BrewDog",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eden_k",
    "time": "Wed, 17 Jan 2024 20:36:31 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "N\u00e4cken 2023",
    "brewery": "Siren Craft Brew",
    "beer_type": "Wheat Beer - Hopfenweisse"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eden_k",
    "time": "Wed, 17 Jan 2024 20:35:00 +0000",
    "serving": "can",
    "data_rating": "2.75",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "berlin-florentin",
    "user": "Liad Shaked",
    "time": "Wed, 17 Jan 2024 20:26:56 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Grind",
    "brewery": "BrewDog",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "berlin-florentin",
    "user": "Eden_k",
    "time": "Wed, 17 Jan 2024 20:24:43 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Grind",
    "brewery": "BrewDog",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "berlin-florentin",
    "user": "Liad Shaked",
    "time": "Wed, 17 Jan 2024 20:21:48 +0000",
    "serving": "can",
    "data_rating": "2.5",
    "beer_name": "N\u00e4cken 2.0",
    "brewery": "Casita Brewing Company",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "berlin-florentin",
    "user": "Jonathan Gonen",
    "time": "Sat, 13 Jan 2024 15:42:55 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "Jonathan Gonen",
    "time": "Sat, 13 Jan 2024 15:40:59 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Hop Frenzy",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Yotam Bar-natan",
    "time": "Sat, 13 Jan 2024 14:56:24 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Ur-Krostitzer Schwarzes",
    "brewery": "Krostitzer Brauerei",
    "beer_type": "Schwarzbier"
  },
  {
    "venue": "beerline",
    "user": "Roman",
    "time": "Thu, 11 Jan 2024 17:45:28 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "L\u00f6wenbr\u00e4u M\u00e4rzen",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "M\u00e4rzen"
  },
  {
    "venue": "beerline",
    "user": "Roman",
    "time": "Thu, 11 Jan 2024 17:30:13 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Roman",
    "time": "Thu, 11 Jan 2024 17:14:26 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Jaipur",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Roman",
    "time": "Thu, 11 Jan 2024 16:39:54 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Roman",
    "time": "Thu, 11 Jan 2024 16:35:18 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Bacchus Frambozenbier",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Wed, 10 Jan 2024 20:01:14 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Hop Frenzy",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Wed, 10 Jan 2024 19:40:24 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Wed, 10 Jan 2024 18:44:34 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Jack Hammer",
    "brewery": "BrewDog",
    "beer_type": "IPA - American"
  },
  {
    "venue": "berlin-florentin",
    "user": "barak luzon",
    "time": "Wed, 10 Jan 2024 18:18:15 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Wingman Session IPA",
    "brewery": "BrewDog",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "berlin-florentin",
    "user": "Omri Gill",
    "time": "Wed, 10 Jan 2024 18:08:13 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Grind",
    "brewery": "BrewDog",
    "beer_type": "Stout - Coffee"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 05 Jan 2024 22:19:23 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Sour Series - Unicorn Magic - Sparkle Edition",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Sour - Smoothie / Pastry"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 05 Jan 2024 16:35:35 +0000",
    "serving": "",
    "data_rating": "4.75",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 28 Dec 2023 19:02:20 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 27 Dec 2023 20:34:11 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "1664 Blanc",
    "brewery": "Kronenbourg Brewery",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 27 Dec 2023 20:28:31 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Bitburger Premium Pils",
    "brewery": "Bitburger Brauerei",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerline",
    "user": "Gabriel Gugel",
    "time": "Fri, 22 Dec 2023 16:42:23 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Ich Bin Raspberry",
    "brewery": "Mikkeller",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Wed, 20 Dec 2023 20:20:34 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Benediktiner Weissbier",
    "brewery": "Benediktiner Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Sat, 16 Dec 2023 17:06:10 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Hop Guru",
    "brewery": "Shevet (\u05e9\u05d1\u05d8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Oleg",
    "time": "Fri, 15 Dec 2023 17:01:35 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Fri, 15 Dec 2023 11:09:15 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Belgian White",
    "brewery": "Blue Moon Brewing Company",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "ursa",
    "user": "Elad Schitrit",
    "time": "Sat, 09 Dec 2023 19:04:55 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "N\u00e4cken 2.0",
    "brewery": "Casita Brewing Company",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "ursa",
    "user": "Elad Schitrit",
    "time": "Sat, 09 Dec 2023 18:50:01 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "West Side Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 08 Dec 2023 17:33:54 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Jaipur",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Thu, 07 Dec 2023 21:49:11 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Happy Pils",
    "brewery": "BRLO",
    "beer_type": "Pilsner - Other"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Thu, 07 Dec 2023 21:48:03 +0000",
    "serving": "bottle",
    "data_rating": "3.0",
    "beer_name": "Happy Pils",
    "brewery": "BRLO",
    "beer_type": "Pilsner - Other"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Thu, 07 Dec 2023 21:31:31 +0000",
    "serving": "can",
    "data_rating": "4.75",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Thu, 07 Dec 2023 21:11:52 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Lunar Haze",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Sharon Confino",
    "time": "Thu, 07 Dec 2023 20:30:18 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Wit",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Thu, 07 Dec 2023 20:30:04 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Thu, 07 Dec 2023 20:28:33 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Instant Crush",
    "brewery": "Siren Craft Brew",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Gabriel Gugel",
    "time": "Thu, 07 Dec 2023 20:00:15 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Erdinger Brauhaus Helles",
    "brewery": "Erdinger Weissbr\u00e4u",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 07 Dec 2023 19:06:02 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Thu, 30 Nov 2023 19:18:39 +0000",
    "serving": "draft",
    "data_rating": "3.6",
    "beer_name": "Czech Mates",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "bartov-holon",
    "user": "Ilya M",
    "time": "Thu, 30 Nov 2023 18:08:37 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "Anagram Blueberry Hazelnut Coffee Cheesecake Stout 2022",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "bartov-holon",
    "user": "Zeev",
    "time": "Sat, 25 Nov 2023 19:47:03 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Shelby",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 24 Nov 2023 18:08:55 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Black Marble",
    "brewery": "Sullivan's Brewing Company",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beerline",
    "user": "Belemnite",
    "time": "Thu, 23 Nov 2023 18:48:50 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Bloody 'Ell",
    "brewery": "Beavertown",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Thu, 23 Nov 2023 12:50:21 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Mandatory Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Sat, 18 Nov 2023 16:22:05 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Bloody 'Ell",
    "brewery": "Beavertown",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "beerline",
    "user": "AlexanderGertsman",
    "time": "Thu, 16 Nov 2023 19:57:00 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Charlie Brown",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Brown Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "asyafobo",
    "time": "Thu, 16 Nov 2023 19:48:44 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 16 Nov 2023 18:02:19 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Thu, 16 Nov 2023 09:55:28 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 11 Nov 2023 11:10:38 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Prior 8",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Belgian Dubbel"
  },
  {
    "venue": "beerline",
    "user": "dorandikiy",
    "time": "Thu, 09 Nov 2023 18:33:01 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerline",
    "user": "asyafobo",
    "time": "Tue, 07 Nov 2023 12:48:07 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Charlie Brown",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Brown Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sun, 05 Nov 2023 11:01:16 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Kriek",
    "brewery": "Brouwerij Lindemans",
    "beer_type": "Lambic - Kriek"
  },
  {
    "venue": "beerline",
    "user": "Roman Gokhman",
    "time": "Sat, 04 Nov 2023 18:42:14 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Benediktiner Weissbier",
    "brewery": "Benediktiner Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "levochkina",
    "time": "Sat, 04 Nov 2023 18:42:08 +0000",
    "serving": "bottle",
    "data_rating": "3.25",
    "beer_name": "Benediktiner Weissbier",
    "brewery": "Benediktiner Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "nik_lerman_9298",
    "time": "Sat, 04 Nov 2023 18:11:21 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Mandatory Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerline",
    "user": "Roman Gokhman",
    "time": "Sat, 04 Nov 2023 17:43:36 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "levochkina",
    "time": "Sat, 04 Nov 2023 17:43:20 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "Roman Gokhman",
    "time": "Sat, 04 Nov 2023 17:42:11 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Charlie Brown",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Brown Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "levochkina",
    "time": "Sat, 04 Nov 2023 17:37:01 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "C\u0113su Nefiltr\u0113tais/Unfiltered",
    "brewery": "C\u0113su Alus",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beerline",
    "user": "levochkina",
    "time": "Sat, 04 Nov 2023 17:32:19 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "London Pride",
    "brewery": "Fuller's Griffin Brewery",
    "beer_type": "Bitter - Session / Ordinary"
  },
  {
    "venue": "beerline",
    "user": "Roman Gokhman",
    "time": "Sat, 04 Nov 2023 17:31:23 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "C\u0113su Nefiltr\u0113tais/Unfiltered",
    "brewery": "C\u0113su Alus",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beerline",
    "user": "levochkina",
    "time": "Sat, 04 Nov 2023 17:30:51 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Charlie Brown",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Brown Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Roman Gokhman",
    "time": "Sat, 04 Nov 2023 17:27:38 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "London Pride",
    "brewery": "Fuller's Griffin Brewery",
    "beer_type": "Bitter - Session / Ordinary"
  },
  {
    "venue": "beerline",
    "user": "Roman Gokhman",
    "time": "Sat, 04 Nov 2023 17:26:23 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Charlie Brown",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Brown Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 04 Nov 2023 17:24:06 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "levochkina",
    "time": "Sat, 04 Nov 2023 17:22:50 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Mandatory Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerline",
    "user": "Roman Gokhman",
    "time": "Sat, 04 Nov 2023 17:22:04 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Mandatory Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerline",
    "user": "Naor Peretz",
    "time": "Sat, 04 Nov 2023 14:07:24 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Edelweiss Blanche",
    "brewery": "Brau Union \u00d6sterreich",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "beerline",
    "user": "Naor Peretz",
    "time": "Sat, 04 Nov 2023 13:12:11 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Mandatory Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerline",
    "user": "Tal",
    "time": "Fri, 03 Nov 2023 23:54:41 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Fri, 20 Oct 2023 18:56:39 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "London Pride",
    "brewery": "Fuller's Griffin Brewery",
    "beer_type": "Bitter - Session / Ordinary"
  },
  {
    "venue": "beerline",
    "user": "jv199109",
    "time": "Wed, 18 Oct 2023 19:34:36 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Spaten M\u00fcnchen / M\u00fcnchner Hell / Premium Lager",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerline",
    "user": "Gabriel Gugel",
    "time": "Wed, 18 Oct 2023 11:26:42 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Lost In Guava",
    "brewery": "BrewDog",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Thu, 12 Oct 2023 18:11:40 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "Mandatory Glory",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beerline",
    "user": "Vik Komlev",
    "time": "Fri, 06 Oct 2023 19:10:35 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Fri, 06 Oct 2023 18:36:35 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "Cocoa Wonderland",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerline",
    "user": "Pupunka Sho",
    "time": "Fri, 06 Oct 2023 16:46:39 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Magners Original Irish Cider",
    "brewery": "Magners Irish Cider",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Fri, 06 Oct 2023 14:13:12 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Space Hulk",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Andrey1975",
    "time": "Fri, 06 Oct 2023 11:32:21 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Spaten M\u00fcnchen / M\u00fcnchner Hell / Premium Lager",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "beerline",
    "user": "Andrey1975",
    "time": "Fri, 06 Oct 2023 11:31:30 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Fri, 06 Oct 2023 11:25:18 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 05 Oct 2023 19:35:20 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Cocoa Wonderland",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Thu, 05 Oct 2023 16:50:59 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Cherry Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Roman Gokhman",
    "time": "Sun, 01 Oct 2023 16:45:22 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "How's It Hanging?",
    "brewery": "LERVIG",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "levochkina",
    "time": "Sun, 01 Oct 2023 16:44:15 +0000",
    "serving": "can",
    "data_rating": "2.75",
    "beer_name": "How's It Hanging?",
    "brewery": "LERVIG",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "levochkina",
    "time": "Sun, 01 Oct 2023 16:05:12 +0000",
    "serving": "can",
    "data_rating": "2.75",
    "beer_name": "N\u00e4cken 2023",
    "brewery": "Siren Craft Brew",
    "beer_type": "Wheat Beer - Hopfenweisse"
  },
  {
    "venue": "ursa",
    "user": "Roman Gokhman",
    "time": "Sun, 01 Oct 2023 16:02:41 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "N\u00e4cken 2023",
    "brewery": "Siren Craft Brew",
    "beer_type": "Wheat Beer - Hopfenweisse"
  },
  {
    "venue": "ursa",
    "user": "Roman Gokhman",
    "time": "Sun, 01 Oct 2023 15:59:00 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "N\u00e4cken",
    "brewery": "Siren Craft Brew",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "ursa",
    "user": "levochkina",
    "time": "Sun, 01 Oct 2023 15:58:53 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "N\u00e4cken",
    "brewery": "Siren Craft Brew",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "ursa",
    "user": "Roman Gokhman",
    "time": "Sun, 01 Oct 2023 15:57:18 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Riffle",
    "brewery": "Thornbridge Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Niv Gellert",
    "time": "Sat, 30 Sep 2023 13:31:29 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Neck Oil",
    "brewery": "Beavertown",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Sat, 30 Sep 2023 11:17:53 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Cherry Chouffe",
    "brewery": "Brasserie d'Achouffe",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Ratam Edri",
    "time": "Fri, 29 Sep 2023 21:43:02 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "L\u00f6wenbr\u00e4u Original",
    "brewery": "Spaten-Franziskaner-L\u00f6wenbr\u00e4u-Gruppe",
    "beer_type": "Lager - Helles"
  },
  {
    "venue": "ursa",
    "user": "Slava Gvantmakher",
    "time": "Fri, 29 Sep 2023 19:45:40 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Weihenstephaner Festbier",
    "brewery": "Bayerische Staatsbrauerei Weihenstephan",
    "beer_type": "Festbier"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Fri, 29 Sep 2023 11:35:10 +0000",
    "serving": "",
    "data_rating": "0.75",
    "beer_name": "Blanc",
    "brewery": "Volfas Engelman",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "bartov-holon",
    "user": "eitanr20",
    "time": "Thu, 28 Sep 2023 14:22:08 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Lost In Guava",
    "brewery": "BrewDog",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Mon, 25 Sep 2023 19:13:52 +0000",
    "serving": "draft",
    "data_rating": "4.1",
    "beer_name": "Quiet Storm - Goldings",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - English"
  },
  {
    "venue": "beerline",
    "user": "Philip Greenberg",
    "time": "Mon, 25 Sep 2023 18:46:38 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Delirium Red",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Mon, 25 Sep 2023 18:39:49 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "O'Hara's Irish Red",
    "brewery": "O'Hara's Brewery",
    "beer_type": "Red Ale - Irish"
  },
  {
    "venue": "ursa",
    "user": "G\u00e1bor G",
    "time": "Fri, 22 Sep 2023 19:33:50 +0000",
    "serving": "can",
    "data_rating": "3.4",
    "beer_name": "How's It Hanging?",
    "brewery": "LERVIG",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Slava Gladchenko",
    "time": "Fri, 22 Sep 2023 16:12:34 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Quiet Storm - Goldings",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - English"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 22 Sep 2023 15:54:51 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Quiet Storm - Centennial",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Fri, 22 Sep 2023 13:16:41 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "Dr Solo",
    "time": "Fri, 22 Sep 2023 12:39:53 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "beerline",
    "user": "Gabriel Gugel",
    "time": "Thu, 21 Sep 2023 21:18:29 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "N\u00e4cken 2.0",
    "brewery": "Casita Brewing Company",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beerline",
    "user": "Beer Opinion",
    "time": "Thu, 21 Sep 2023 18:05:24 +0000",
    "serving": "draft",
    "data_rating": "4.3",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerline",
    "user": "Gabriel Gugel",
    "time": "Thu, 21 Sep 2023 17:25:16 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Instant Crush",
    "brewery": "Siren Craft Brew",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "beerline",
    "user": "Gabriel Gugel",
    "time": "Thu, 21 Sep 2023 17:16:53 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerline",
    "user": "Madlen Maradonov",
    "time": "Wed, 20 Sep 2023 16:15:29 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Hobgoblin Dark Stout",
    "brewery": "Marston's Brewery",
    "beer_type": "Stout - English"
  },
  {
    "venue": "beerline",
    "user": "Pupunka Sho",
    "time": "Wed, 20 Sep 2023 14:58:44 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Magners Original Irish Cider",
    "brewery": "Magners Irish Cider",
    "beer_type": "Cider - Traditional / Apfelwein"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sun, 17 Sep 2023 20:30:45 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sun, 17 Sep 2023 19:38:50 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Quiet Storm - Mosaic",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beerline",
    "user": "evgenia_kuprienko_9973",
    "time": "Sun, 17 Sep 2023 14:52:38 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Evergreen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beerline",
    "user": "kuprienko",
    "time": "Sun, 17 Sep 2023 14:49:50 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "K\u00f6stritzer Schwarzbier",
    "brewery": "K\u00f6stritzer Schwarzbierbrauerei",
    "beer_type": "Schwarzbier"
  },
  {
    "venue": "beerline",
    "user": "Aleksandr Solodkov",
    "time": "Sun, 17 Sep 2023 13:14:41 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Desert Haze",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Anatoly Shvaiger",
    "time": "Sun, 17 Sep 2023 13:14:40 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Desert Haze",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "beerline",
    "user": "Aleksandr Solodkov",
    "time": "Sun, 17 Sep 2023 12:39:17 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Mongozo Banana",
    "brewery": "Mongozo",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Thu, 07 Sep 2023 20:21:13 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Thu, 07 Sep 2023 20:01:16 +0000",
    "serving": "can",
    "data_rating": "5.0",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Yonatan Bashi",
    "time": "Thu, 07 Sep 2023 18:21:46 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Barn Dance",
    "brewery": "BrewDog",
    "beer_type": "Barleywine - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mark Hendriks",
    "time": "Mon, 04 Sep 2023 16:38:32 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Tucher Helles Hefe Weizen",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mark Hendriks",
    "time": "Mon, 04 Sep 2023 16:15:04 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mark Hendriks",
    "time": "Mon, 04 Sep 2023 15:28:34 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Sagiv Ovadia",
    "time": "Sun, 03 Sep 2023 17:18:05 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Juice Punch",
    "brewery": "Frontaal Brewing Co.",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "John Thompson",
    "time": "Tue, 29 Aug 2023 17:36:24 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Tropical IPA",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "John Thompson",
    "time": "Tue, 29 Aug 2023 16:55:27 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Summer IPA",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "IPA - Other"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sun, 27 Aug 2023 16:41:58 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Sun, 27 Aug 2023 16:41:17 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Mesmerist",
    "brewery": "Siren Craft Brew",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "ursa",
    "user": "Omer Zror",
    "time": "Sat, 26 Aug 2023 21:09:46 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Yu Lu",
    "brewery": "Siren Craft Brew",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "ursa",
    "user": "May Mevorat",
    "time": "Sat, 26 Aug 2023 21:06:51 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Yu Lu",
    "brewery": "Siren Craft Brew",
    "beer_type": "Pale Ale - Other"
  },
  {
    "venue": "ursa",
    "user": "Omer Zror",
    "time": "Sat, 26 Aug 2023 20:46:39 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "ursa",
    "user": "May Mevorat",
    "time": "Sat, 26 Aug 2023 20:45:07 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "ursa",
    "user": "Almog Saban",
    "time": "Sat, 26 Aug 2023 20:28:26 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Viking Shake",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "May Mevorat",
    "time": "Sat, 26 Aug 2023 20:28:08 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Viking Shake",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Omer Zror",
    "time": "Sat, 26 Aug 2023 20:26:56 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Viking Shake",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Omer Zror",
    "time": "Sat, 26 Aug 2023 20:06:11 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Heavy Gravity",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "May Mevorat",
    "time": "Sat, 26 Aug 2023 20:05:04 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Heavy Gravity",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "May Mevorat",
    "time": "Sat, 26 Aug 2023 19:54:04 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Omer Zror",
    "time": "Sat, 26 Aug 2023 19:53:42 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Omer Zror",
    "time": "Sat, 26 Aug 2023 19:40:44 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Palm Beach",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "May Mevorat",
    "time": "Sat, 26 Aug 2023 19:38:37 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Palm Beach",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "May Mevorat",
    "time": "Sat, 26 Aug 2023 17:58:37 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Quiet Storm - Mosaic",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Sahar Baruch",
    "time": "Sat, 26 Aug 2023 14:01:09 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Huntington",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Sahar Baruch",
    "time": "Sat, 26 Aug 2023 13:42:53 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Neck Oil",
    "brewery": "Beavertown",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "ursa",
    "user": "Karpatych\u042a Tych",
    "time": "Fri, 25 Aug 2023 18:22:26 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Barn Dance",
    "brewery": "BrewDog",
    "beer_type": "Barleywine - American"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Thu, 24 Aug 2023 16:31:41 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Huntington",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Thu, 17 Aug 2023 20:13:26 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "barak luzon",
    "time": "Thu, 17 Aug 2023 19:29:47 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Quiet Storm - Mosaic",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "odi paneth",
    "time": "Mon, 14 Aug 2023 17:49:46 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Hop Shop",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Jacob Collier",
    "time": "Mon, 14 Aug 2023 14:58:49 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Kasteel Rouge",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "ursa",
    "user": "Arciom Davyda\u016d",
    "time": "Sun, 13 Aug 2023 17:41:03 +0000",
    "serving": "draft",
    "data_rating": "",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "ursa",
    "user": "Arciom Davyda\u016d",
    "time": "Sun, 13 Aug 2023 16:20:16 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Guinness Draught",
    "brewery": "Guinness",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "ursa",
    "user": "Arciom Davyda\u016d",
    "time": "Sun, 13 Aug 2023 15:19:46 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "How's It Hanging?",
    "brewery": "LERVIG",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Fri, 11 Aug 2023 18:19:10 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Wit",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Fri, 11 Aug 2023 17:49:51 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Barn Dance",
    "brewery": "BrewDog",
    "beer_type": "Barleywine - American"
  },
  {
    "venue": "ursa",
    "user": "Ilya M",
    "time": "Fri, 11 Aug 2023 14:22:12 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Mr. President",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "bartov-holon",
    "user": "Ben Angel",
    "time": "Wed, 09 Aug 2023 16:13:03 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Heavy Gravity",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Mawi Dikawo",
    "time": "Tue, 08 Aug 2023 17:05:48 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Space Hulk",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "bartov-holon",
    "user": "Arthur Karahanov",
    "time": "Mon, 07 Aug 2023 12:01:47 +0000",
    "serving": "bottle",
    "data_rating": "4.25",
    "beer_name": "Anagram Blueberry Cheesecake Stout",
    "brewery": "Omnipollo",
    "beer_type": "Stout - Imperial / Double Pastry"
  },
  {
    "venue": "ursa",
    "user": "Dr Solo",
    "time": "Thu, 03 Aug 2023 21:28:12 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Huntington",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Nadav Kaddar",
    "time": "Wed, 02 Aug 2023 20:59:26 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Viking Shake",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Nadav Kaddar",
    "time": "Wed, 02 Aug 2023 20:08:54 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Quiet Storm - Mosaic",
    "brewery": "Thornbridge Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "noam_tish25",
    "time": "Tue, 01 Aug 2023 15:35:37 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Gamma Ray",
    "brewery": "Beavertown",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Alek Shuhmacher",
    "time": "Tue, 01 Aug 2023 15:27:58 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Gamma Ray",
    "brewery": "Beavertown",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Tue, 25 Jul 2023 19:19:11 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Palm Beach",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Tue, 25 Jul 2023 19:15:24 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Palm Beach",
    "brewery": "BrewDog",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Tue, 25 Jul 2023 18:54:16 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "K\u00e6rlighed Spring/Summer 2023",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Tue, 25 Jul 2023 18:53:50 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "K\u00e6rlighed Spring/Summer 2023",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Slava Gvantmakher",
    "time": "Thu, 20 Jul 2023 22:05:29 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Trickster",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Slava Gvantmakher",
    "time": "Thu, 20 Jul 2023 21:24:03 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Mr. President",
    "brewery": "BrewDog",
    "beer_type": "IPA - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Wed, 12 Jul 2023 19:03:44 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "ursa",
    "user": "Lerush",
    "time": "Thu, 06 Jul 2023 17:24:29 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "K\u00e6rlighed Spring/Summer 2023",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Thu, 06 Jul 2023 16:58:26 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "K\u00e6rlighed Spring/Summer 2023",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "ursa",
    "user": "Ilya Markovsky",
    "time": "Thu, 06 Jul 2023 16:46:22 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Hard Apple Cider - Dry (\u05e1\u05d9\u05d9\u05d3\u05e8 \u05ea\u05e4\u05d5\u05d7\u05d9\u05dd \u05d0\u05dc\u05db\u05d5\u05d4\u05d5\u05dc\u05d9 \u05d9\u05d1\u05e9)",
    "brewery": "Hamatsesa (\u05d4\u05de\u05ea\u05e1\u05e1\u05d4)",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Zachary Ozersky",
    "time": "Wed, 05 Jul 2023 18:29:44 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Tropical IPA",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Zachary Ozersky",
    "time": "Wed, 05 Jul 2023 18:11:49 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Bazelet Ale (\u05d1\u05d6\u05dc\u05ea-\u05d0\u05d9\u05d9\u05dc \u05e2\u05e0\u05d1\u05e8\u05d9)",
    "brewery": "Golan Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d5\u05dc\u05df)",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Tue, 04 Jul 2023 21:08:45 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Sandman Hazy Pale Ale",
    "brewery": "Panhead Custom Ales",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Daniel Lindner",
    "time": "Mon, 03 Jul 2023 18:07:05 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Santo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Lager - IPL (India Pale Lager)"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Zachary Ozersky",
    "time": "Sun, 02 Jul 2023 12:27:31 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Zachary Ozersky",
    "time": "Sun, 02 Jul 2023 12:14:13 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Pilsner Urquell",
    "brewery": "Plze\u0148sk\u00fd Prazdroj",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "ursa",
    "user": "Cassidy Oberfeld",
    "time": "Mon, 26 Jun 2023 19:06:25 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Supermoon",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Ohad Pinhas",
    "time": "Sun, 25 Jun 2023 17:52:44 +0000",
    "serving": "can",
    "data_rating": "3.25",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Ilya M",
    "time": "Sat, 24 Jun 2023 16:14:16 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Eva Kuznetsova",
    "time": "Sat, 24 Jun 2023 13:40:47 +0000",
    "serving": "",
    "data_rating": "4.5",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "ursa",
    "user": "Mikhail Stolov",
    "time": "Sat, 24 Jun 2023 13:40:06 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Passion Pool",
    "brewery": "Mikkeller Brewing San Diego",
    "beer_type": "Sour - Fruited Gose"
  },
  {
    "venue": "ursa",
    "user": "Ilya M",
    "time": "Fri, 23 Jun 2023 14:25:38 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "How's It Hanging?",
    "brewery": "LERVIG",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Kobi",
    "time": "Wed, 21 Jun 2023 15:37:13 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Jouska",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Franco Chavez",
    "time": "Tue, 20 Jun 2023 15:20:25 +0000",
    "serving": "can",
    "data_rating": "3.0",
    "beer_name": "Heavy Gravity",
    "brewery": "Beavertown",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Franco Chavez",
    "time": "Tue, 20 Jun 2023 14:48:09 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Bloody 'Ell",
    "brewery": "Beavertown",
    "beer_type": "IPA - Fruited"
  },
  {
    "venue": "ursa",
    "user": "Merav Tink",
    "time": "Thu, 15 Jun 2023 16:59:51 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Pompelmocello",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - Sour"
  },
  {
    "venue": "ursa",
    "user": "Roie Gilad",
    "time": "Sun, 11 Jun 2023 18:44:45 +0000",
    "serving": "can",
    "data_rating": "4.0",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Sun, 11 Jun 2023 18:19:07 +0000",
    "serving": "can",
    "data_rating": "4.25",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Sun, 11 Jun 2023 17:57:07 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Danielle Yona",
    "time": "Sat, 10 Jun 2023 15:47:38 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Aviad Attia",
    "time": "Sat, 10 Jun 2023 15:46:25 +0000",
    "serving": "can",
    "data_rating": "",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Max N",
    "time": "Fri, 09 Jun 2023 23:46:29 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Hop Shop",
    "brewery": "Mikkeller",
    "beer_type": "IPA - New England / Hazy"
  },
  {
    "venue": "ursa",
    "user": "Dan G",
    "time": "Mon, 05 Jun 2023 19:00:24 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Mon, 05 Jun 2023 18:56:08 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Mon, 05 Jun 2023 18:25:41 +0000",
    "serving": "bottle",
    "data_rating": "3.75",
    "beer_name": "Maiden 2022",
    "brewery": "Siren Craft Brew",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "ursa",
    "user": "Dan G",
    "time": "Mon, 05 Jun 2023 18:25:08 +0000",
    "serving": "bottle",
    "data_rating": "4.0",
    "beer_name": "Maiden 2022",
    "brewery": "Siren Craft Brew",
    "beer_type": "Barleywine - English"
  },
  {
    "venue": "ursa",
    "user": "Dan G",
    "time": "Mon, 05 Jun 2023 18:15:03 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Mon, 05 Jun 2023 17:46:21 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Dan G",
    "time": "Mon, 05 Jun 2023 17:43:41 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "UV R",
    "time": "Mon, 05 Jun 2023 17:38:59 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Trickster",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Dan G",
    "time": "Mon, 05 Jun 2023 17:37:24 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Trickster",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Jacob Collier",
    "time": "Mon, 05 Jun 2023 15:40:20 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Hard Apple Cider - Dry (\u05e1\u05d9\u05d9\u05d3\u05e8 \u05ea\u05e4\u05d5\u05d7\u05d9\u05dd \u05d0\u05dc\u05db\u05d5\u05d4\u05d5\u05dc\u05d9 \u05d9\u05d1\u05e9)",
    "brewery": "Hamatsesa (\u05d4\u05de\u05ea\u05e1\u05e1\u05d4)",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "ursa",
    "user": "Omri Wolf",
    "time": "Sat, 03 Jun 2023 19:40:48 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Omri Wolf",
    "time": "Sat, 03 Jun 2023 19:26:34 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "ursa",
    "user": "Ofir Israeli",
    "time": "Sat, 03 Jun 2023 18:56:41 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Hard Apple Cider - Dry (\u05e1\u05d9\u05d9\u05d3\u05e8 \u05ea\u05e4\u05d5\u05d7\u05d9\u05dd \u05d0\u05dc\u05db\u05d5\u05d4\u05d5\u05dc\u05d9 \u05d9\u05d1\u05e9)",
    "brewery": "Hamatsesa (\u05d4\u05de\u05ea\u05e1\u05e1\u05d4)",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "ursa",
    "user": "Omri Wolf",
    "time": "Sat, 03 Jun 2023 18:56:41 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Hard Apple Cider - Dry (\u05e1\u05d9\u05d9\u05d3\u05e8 \u05ea\u05e4\u05d5\u05d7\u05d9\u05dd \u05d0\u05dc\u05db\u05d5\u05d4\u05d5\u05dc\u05d9 \u05d9\u05d1\u05e9)",
    "brewery": "Hamatsesa (\u05d4\u05de\u05ea\u05e1\u05e1\u05d4)",
    "beer_type": "Cider - Dry"
  },
  {
    "venue": "ursa",
    "user": "Nir Langer",
    "time": "Fri, 02 Jun 2023 21:30:00 +0000",
    "serving": "can",
    "data_rating": "3.5",
    "beer_name": "Passion Flick",
    "brewery": "HORIZONT Brewing",
    "beer_type": "Pale Ale - Milkshake"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Wed, 31 May 2023 19:27:31 +0000",
    "serving": "",
    "data_rating": "4.25",
    "beer_name": "Crescendo",
    "brewery": "Siren Craft Brew",
    "beer_type": "Stout - Imperial / Double"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Wed, 31 May 2023 19:07:06 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Trickster",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - English"
  },
  {
    "venue": "ursa",
    "user": "Alex Tsvetkov",
    "time": "Wed, 31 May 2023 18:50:12 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Shadow Paradise",
    "brewery": "Siren Craft Brew",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "ursa",
    "user": "Roie Gilad",
    "time": "Wed, 31 May 2023 18:36:02 +0000",
    "serving": "can",
    "data_rating": "3.75",
    "beer_name": "Lupuloid",
    "brewery": "Beavertown",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Barel",
    "time": "Wed, 03 May 2023 16:57:39 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bravehop Amber IPA",
    "brewery": "Loch Lomond Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Roel Henskens",
    "time": "Wed, 03 May 2023 16:54:16 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Roel Henskens",
    "time": "Wed, 03 May 2023 16:25:06 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Bazelet Ale (\u05d1\u05d6\u05dc\u05ea-\u05d0\u05d9\u05d9\u05dc \u05e2\u05e0\u05d1\u05e8\u05d9)",
    "brewery": "Golan Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d5\u05dc\u05df)",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Roel Henskens",
    "time": "Wed, 03 May 2023 16:00:51 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "IPA Craft Beer",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "\u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0438\u0447",
    "time": "Fri, 21 Apr 2023 13:50:12 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Krombacher Pils",
    "brewery": "Krombacher Gruppe",
    "beer_type": "Pilsner - German"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Marik Sh",
    "time": "Sat, 25 Mar 2023 15:56:34 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Delirium Nocturnum",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Dark Ale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "raz shaked",
    "time": "Mon, 13 Mar 2023 15:47:17 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "\u05d0\u05dc\u05db\u05e1 \u05dc\u05d9\u05db\u05d8\u05e0\u05e9\u05d8\u05d9\u05d9\u05df",
    "time": "Sat, 11 Mar 2023 14:12:29 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "\u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0438\u0447",
    "time": "Sat, 11 Mar 2023 13:57:42 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Soundwave IPA",
    "brewery": "Siren Craft Brew",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Ilya Markovsky",
    "time": "Fri, 03 Mar 2023 13:06:41 +0000",
    "serving": "",
    "data_rating": "3.0",
    "beer_name": "Kloster-Gold Dunkel",
    "brewery": "Kloster-Brauerei Scheyern",
    "beer_type": "Lager - Munich Dunkel"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "\u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0438\u0447",
    "time": "Sun, 26 Feb 2023 15:21:18 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Pilsner Urquell",
    "brewery": "Plze\u0148sk\u00fd Prazdroj",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Evgeniy Rovner",
    "time": "Sun, 26 Feb 2023 14:29:53 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Kloster-Gold Dunkel",
    "brewery": "Kloster-Brauerei Scheyern",
    "beer_type": "Lager - Munich Dunkel"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Sat, 04 Feb 2023 15:48:51 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Leffe Blonde / Blond",
    "brewery": "Abbaye de Leffe",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Sat, 04 Feb 2023 15:48:36 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Hoegaarden Wit / Blanche",
    "brewery": "Brouwerij Hoegaarden",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Samuel Griffith",
    "time": "Thu, 26 Jan 2023 14:36:55 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Delirium Tremens",
    "brewery": "Delirium - Huyghe Brewery",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "GPR",
    "time": "Mon, 02 Jan 2023 18:45:30 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Southern Summit",
    "brewery": "Loch Lomond Brewery",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Sven Van Dijck",
    "time": "Tue, 13 Dec 2022 19:25:22 +0000",
    "serving": "",
    "data_rating": "2.0",
    "beer_name": "Bazelet Ale (\u05d1\u05d6\u05dc\u05ea-\u05d0\u05d9\u05d9\u05dc \u05e2\u05e0\u05d1\u05e8\u05d9)",
    "brewery": "Golan Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d5\u05dc\u05df)",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Sven Van Dijck",
    "time": "Mon, 12 Dec 2022 20:00:33 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "IPA Craft Beer",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Sven Van Dijck",
    "time": "Mon, 12 Dec 2022 19:58:33 +0000",
    "serving": "",
    "data_rating": "2.75",
    "beer_name": "Hop Guru",
    "brewery": "Shevet (\u05e9\u05d1\u05d8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Or Epstein",
    "time": "Mon, 26 Sep 2022 13:33:03 +0000",
    "serving": "can",
    "data_rating": "4.5",
    "beer_name": "Triple Berry Pie (4%)",
    "brewery": "Brewski",
    "beer_type": "Sour - Fruited Berliner Weisse"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Dima Shleifman",
    "time": "Mon, 19 Sep 2022 18:14:29 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Silkie Stout",
    "brewery": "Loch Lomond Brewery",
    "beer_type": "Stout - Oatmeal"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Dima Shleifman",
    "time": "Mon, 19 Sep 2022 17:40:39 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Bravehop Amber IPA",
    "brewery": "Loch Lomond Brewery",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Phil Harvey",
    "time": "Mon, 25 Jul 2022 18:17:50 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Rye",
    "brewery": "Soof Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05e1\u05d5\u05e3)",
    "beer_type": "Rye Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Phil Harvey",
    "time": "Mon, 25 Jul 2022 16:54:54 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Hop Guru",
    "brewery": "Shevet (\u05e9\u05d1\u05d8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Phil Harvey",
    "time": "Mon, 25 Jul 2022 16:52:45 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "IPA Craft Beer",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Mon, 11 Jul 2022 18:33:11 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Gibor Blondie",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Mon, 11 Jul 2022 18:00:57 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Gibor Blondie",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Mon, 11 Jul 2022 14:32:09 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Hoegaarden Wit / Blanche",
    "brewery": "Brouwerij Hoegaarden",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Mon, 11 Jul 2022 14:13:57 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Blanche de Bruxelles",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Wheat Beer - Witbier / Blanche"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Vlad Blok",
    "time": "Sun, 10 Jul 2022 13:54:52 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mats Jaksland",
    "time": "Tue, 24 May 2022 18:15:42 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Gibor Blondie",
    "brewery": "HaGibor Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d4\u05d2\u05d9\u05d1\u05d5\u05e8)",
    "beer_type": "Blonde / Golden Ale - Other"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mats Jaksland",
    "time": "Tue, 24 May 2022 18:14:55 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Staropramen Premium / Le\u017e\u00e1k 12",
    "brewery": "Pivovary Staropramen",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Paul V",
    "time": "Mon, 25 Oct 2021 15:27:55 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Black (\u05d1\u05dc\u05d0\u05e7)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "ksenia",
    "time": "Tue, 05 Oct 2021 16:44:17 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hop Guru",
    "brewery": "Shevet (\u05e9\u05d1\u05d8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "ksenia",
    "time": "Tue, 05 Oct 2021 16:32:34 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "bartov-holon",
    "user": "Zeev",
    "time": "Sat, 02 Oct 2021 18:00:40 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Desert Haze",
    "brewery": "Mikkeller",
    "beer_type": "Pale Ale - New England / Hazy"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "\u05e8\u05d5\u05de\u05df \u05e4\u05d5\u05d2\u05dc\u05d6\u05d5\u05d1",
    "time": "Tue, 31 Aug 2021 14:30:26 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Black (\u05d1\u05dc\u05d0\u05e7)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "Porter - Other"
  },
  {
    "venue": "bartov-holon",
    "user": "Zeev",
    "time": "Sat, 05 Jun 2021 17:53:16 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Gamma Ray",
    "brewery": "Beavertown",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "bartov-holon",
    "user": "Tom Lahav",
    "time": "Sat, 05 Jun 2021 13:01:53 +0000",
    "serving": "draft",
    "data_rating": "2.25",
    "beer_name": "Cisk Excel",
    "brewery": "Simonds Farsons Cisk",
    "beer_type": "Lager - American Light"
  },
  {
    "venue": "bartov-holon",
    "user": "Tom Lahav",
    "time": "Sat, 05 Jun 2021 12:58:44 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Hop Guru",
    "brewery": "Shevet (\u05e9\u05d1\u05d8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Sun, 14 Feb 2021 17:50:25 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Christmas Ale (2020)",
    "brewery": "Brouwerij St.Bernardus",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Bal\u00e1zs Visegr\u00e1di",
    "time": "Thu, 31 Dec 2020 14:30:02 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Maryanne Vardaman",
    "time": "Wed, 04 Mar 2020 19:14:36 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Maryanne Vardaman",
    "time": "Wed, 04 Mar 2020 19:12:18 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Green Gold",
    "brewery": "Mikkeller",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mikhail Braslavsky",
    "time": "Mon, 02 Mar 2020 16:56:56 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Bacchus Frambozenbier",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mikhail Braslavsky",
    "time": "Mon, 02 Mar 2020 16:00:20 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mikhail Braslavsky",
    "time": "Mon, 02 Mar 2020 14:18:06 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Hobgoblin IPA",
    "brewery": "Marston's Brewery",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mikhail Braslavsky",
    "time": "Mon, 02 Mar 2020 11:10:02 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Nastro Azzurro",
    "brewery": "Birra Peroni",
    "beer_type": "Lager - Pale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Mikhail Braslavsky",
    "time": "Mon, 02 Mar 2020 10:47:15 +0000",
    "serving": "draft",
    "data_rating": "3.2",
    "beer_name": "Estrella Damm",
    "brewery": "Damm",
    "beer_type": "Lager - Pale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Michael Embrey",
    "time": "Fri, 29 Nov 2019 16:07:45 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "O'Hara's Irish Stout",
    "brewery": "O'Hara's Brewery",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Bart Delvaux",
    "time": "Sun, 28 Jul 2019 15:55:27 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Patriot American Pale Ale",
    "brewery": "The Dancing Camel Brewing Co., Ltd.",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Ken DeMars",
    "time": "Tue, 11 Jun 2019 21:36:02 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Emek Ha'ela Belgian Triple",
    "brewery": "Srigim (\u05e9\u05e8\u05d9\u05d2\u05d9\u05dd)",
    "beer_type": "Belgian Tripel"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Mon, 13 May 2019 18:42:43 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Bacchus Kriekenbier",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Sour - Flanders Oud Bruin"
  },
  {
    "venue": "bartov-holon",
    "user": "Hagay Muzan",
    "time": "Fri, 29 Mar 2019 22:48:27 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "J P",
    "time": "Thu, 14 Mar 2019 20:32:47 +0000",
    "serving": "draft",
    "data_rating": "3.5",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Pawel",
    "time": "Fri, 22 Feb 2019 17:47:12 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Pawel",
    "time": "Fri, 22 Feb 2019 17:12:16 +0000",
    "serving": "",
    "data_rating": "",
    "beer_name": "Katzra Amber (\u05e7\u05e6\u05e8\u05d4 \u05e2\u05e0\u05d1\u05e8)",
    "brewery": "Arava Brewery (\u05de\u05d1\u05e9\u05dc\u05ea \u05d1\u05d9\u05e8\u05d4 \u05e2\u05e8\u05d1\u05d4)",
    "beer_type": "Red Ale - American Amber / Red"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Sat, 10 Nov 2018 12:48:57 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Paamayim Ki Tog (\u05e4\u05e2\u05de\u05d9\u05d9\u05dd \u05db\u05d9 \u05ea\u05d5\u05d2)",
    "brewery": "Tog (\u05ea\u05d5\u05d2)",
    "beer_type": "Homebrew, IPA - Imperial / Double"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Sat, 10 Nov 2018 12:38:04 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Erdinger Oktoberfest / Festwei\u00dfe",
    "brewery": "Erdinger Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Wed, 10 Oct 2018 08:44:49 +0000",
    "serving": "bottle",
    "data_rating": "5.0",
    "beer_name": "DayTime IPA",
    "brewery": "Lagunitas Brewing Company",
    "beer_type": "IPA - Session"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Naomi Eskira",
    "time": "Mon, 27 Aug 2018 19:25:18 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Naomi Eskira",
    "time": "Mon, 27 Aug 2018 19:01:50 +0000",
    "serving": "draft",
    "data_rating": "3.25",
    "beer_name": "Benediktiner Weissbier",
    "brewery": "Benediktiner Weissbr\u00e4u",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Sat, 28 Jul 2018 12:32:06 +0000",
    "serving": "draft",
    "data_rating": "4.25",
    "beer_name": "\u0442\u0435\u043c\u043d\u0438\u0439 \u0445\u043b\u0456\u0431\u0435\u0446\u044c",
    "brewery": "BeerStation Brewery",
    "beer_type": "Homebrew, Lager - Dark"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Sat, 28 Jul 2018 12:05:56 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "G\u00f6sser Stiftsbr\u00e4u",
    "brewery": "Brauerei G\u00f6ss",
    "beer_type": "Lager - Munich Dunkel"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Sat, 28 Jul 2018 11:39:12 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Tucher Bajuvator Doppelbock",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Bock - Doppelbock"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Sat, 28 Jul 2018 11:13:06 +0000",
    "serving": "draft",
    "data_rating": "2.75",
    "beer_name": "Gambrinus Origin\u00e1l 10",
    "brewery": "Plze\u0148sk\u00fd Prazdroj",
    "beer_type": "Lager - Sv\u011btl\u00e9 (Czech Pale)"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Sat, 21 Jul 2018 11:55:09 +0000",
    "serving": "",
    "data_rating": "5.0",
    "beer_name": "Pale Ale",
    "brewery": "Oak & Ash",
    "beer_type": "Pale Ale - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Sat, 21 Jul 2018 11:53:29 +0000",
    "serving": "",
    "data_rating": "0.75",
    "beer_name": "La Trappe Blond",
    "brewery": "Bierbrouwerij De Koningshoeven",
    "beer_type": "Belgian Blonde"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Fri, 13 Jul 2018 18:20:05 +0000",
    "serving": "",
    "data_rating": "3.5",
    "beer_name": "Gambrinus Origin\u00e1l 10",
    "brewery": "Plze\u0148sk\u00fd Prazdroj",
    "beer_type": "Lager - Sv\u011btl\u00e9 (Czech Pale)"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Tobi Schweickardt",
    "time": "Thu, 10 May 2018 19:41:02 +0000",
    "serving": "",
    "data_rating": "4.0",
    "beer_name": "Fruitesse",
    "brewery": "Brouwerij Liefmans",
    "beer_type": "Fruit Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Tobi Schweickardt",
    "time": "Thu, 10 May 2018 19:40:03 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Weizen",
    "brewery": "Prim\u00e1tor",
    "beer_type": "Wheat Beer - Hefeweizen"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Fri, 16 Feb 2018 12:38:11 +0000",
    "serving": "draft",
    "data_rating": "3.0",
    "beer_name": "Grolsch Premium Lager",
    "brewery": "Koninklijke Grolsch",
    "beer_type": "Pilsner - Other"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 16 Feb 2018 12:36:55 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Zirndorfer Landbier",
    "brewery": "Brauerei Zirndorf",
    "beer_type": "Lager - Amber / Red"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Sun, 04 Feb 2018 20:07:18 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Tucher Bajuvator Doppelbock",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Bock - Doppelbock"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Alex Fux",
    "time": "Sun, 04 Feb 2018 19:50:03 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Tucher Festbier",
    "brewery": "Tucher Br\u00e4u",
    "beer_type": "Festbier"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Zak van Klooten",
    "time": "Mon, 29 Jan 2018 15:57:16 +0000",
    "serving": "draft",
    "data_rating": "3.75",
    "beer_name": "Pale Ale",
    "brewery": "Automatic Beer Station (\u041f\u0438\u0432\u043e\u0432\u0430\u0440\u043d\u044f ABS)",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Sat, 27 Jan 2018 11:58:46 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Kasteel Winter",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Winter Ale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Bart Delvaux",
    "time": "Thu, 14 Sep 2017 15:56:09 +0000",
    "serving": "",
    "data_rating": "3.75",
    "beer_name": "Barb\u00e3r",
    "brewery": "Brasserie Lefebvre",
    "beer_type": "Honey Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Bart Delvaux",
    "time": "Thu, 14 Sep 2017 15:53:06 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "8.8",
    "brewery": "Jem's Beer Factory",
    "beer_type": "Belgian Strong Golden Ale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Bart Delvaux",
    "time": "Thu, 14 Sep 2017 15:51:51 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Bart Delvaux",
    "time": "Thu, 14 Sep 2017 15:44:50 +0000",
    "serving": "",
    "data_rating": "3.25",
    "beer_name": "Green (\u05d2\u05e8\u05d9\u05df)",
    "brewery": "Alexander (\u05d0\u05dc\u05db\u05e1\u05e0\u05d3\u05e8)",
    "beer_type": "IPA - American"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 25 Aug 2017 13:51:58 +0000",
    "serving": "draft",
    "data_rating": "4.0",
    "beer_name": "Estrella Damm",
    "brewery": "Damm",
    "beer_type": "Lager - Pale"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 18 Aug 2017 12:04:26 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Pale Ale",
    "brewery": "Automatic Beer Station (\u041f\u0438\u0432\u043e\u0432\u0430\u0440\u043d\u044f ABS)",
    "beer_type": "IPA - English"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 18 Aug 2017 11:54:55 +0000",
    "serving": "draft",
    "data_rating": "5.0",
    "beer_name": "Pilsner Urquell",
    "brewery": "Plze\u0148sk\u00fd Prazdroj",
    "beer_type": "Pilsner - Czech / Bohemian"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 18 Aug 2017 11:45:02 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "K\u00f6stritzer Kellerbier",
    "brewery": "K\u00f6stritzer Schwarzbierbrauerei",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 18 Aug 2017 11:40:26 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "Shoshana (\u05e9\u05d5\u05e9\u05e0\u05e2)",
    "brewery": "Kasteel Brouwerij Vanhonsebrouck",
    "beer_type": "Spiced / Herbed Beer"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 18 Aug 2017 11:38:11 +0000",
    "serving": "draft",
    "data_rating": "0.5",
    "beer_name": "G\u00f6sser NaturRadler",
    "brewery": "Brauerei G\u00f6ss",
    "beer_type": "Shandy / Radler"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Garry Shteinberg",
    "time": "Fri, 18 Aug 2017 11:33:59 +0000",
    "serving": "draft",
    "data_rating": "4.5",
    "beer_name": "O'Hara's Irish Stout",
    "brewery": "O'Hara's Brewery",
    "beer_type": "Stout - Irish Dry"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Omer Basha",
    "time": "Sun, 02 Jul 2017 17:37:54 +0000",
    "serving": "",
    "data_rating": "1.0",
    "beer_name": "Zirndorfer Kellerbier - Naturtr\u00fcb",
    "brewery": "Brauerei Zirndorf",
    "beer_type": "Kellerbier / Zwickelbier"
  },
  {
    "venue": "beer-station-beersheba-israel",
    "user": "Ohad Bar",
    "time": "Sun, 02 Jul 2017 17:37:46 +0000",
    "serving": "",
    "data_rating": "2.5",
    "beer_name": "Zirndorfer Kellerbier - Naturtr\u00fcb",
    "brewery": "Brauerei Zirndorf",
    "beer_type": "Kellerbier / Zwickelbier"
  }
];

class BeerStatsAnalyzer {
    constructor() {
        this.data = [];
        this.processedData = {};
        this.initializeApp();
    }

    initializeApp() {
        // Use embedded data directly
        this.loadEmbeddedData();
    }

    loadEmbeddedData() {
        try {
            // Process the embedded CSV data
            this.data = [];
            EMBEDDED_CSV_DATA.forEach(row => {
                if (this.validateRow(row)) {
                    this.data.push(this.processRow(row));
                }
            });
            
            this.processData();
            this.updateDashboard();
            this.createVisualizations();
            
        } catch (error) {
            console.error('Error processing embedded data:', error);
            alert('Error processing beer data. Please refresh the page.');
        }
    }

    validateRow(row) {
        return row.venue && row.user && row.time && row.beer_name && row.brewery && row.beer_type;
    }

    processRow(row) {
        return {
            venue: row.venue,
            user: row.user,
            time: new Date(row.time),
            serving: row.serving || 'Unknown',
            rating: row.data_rating ? parseFloat(row.data_rating) : null,
            beer_name: row.beer_name,
            brewery: row.brewery,
            beer_type: row.beer_type
        };
    }

    processData() {
        this.processedData = {
            totalBeers: this.data.length,
            uniqueBreweries: new Set(this.data.map(d => d.brewery)).size,
            uniqueUsers: new Set(this.data.map(d => d.user)).size,
            avgRating: this.calculateAverageRating(),
            topVenue: this.getTopVenue(),
            favoriteBeerType: this.getFavoriteBeerType(),
            topBeers: this.getTopBeers(),
            topBreweries: this.getTopBreweries(),
            topBeerTypes: this.getTopBeerTypes(),
            topVenues: this.getTopVenues(),
            timelineData: this.getTimelineData(),
            ratingDistribution: this.getRatingDistribution(),
            servingTypes: this.getServingTypes(),
            userActivity: this.getUserActivity(),
            styleRatingMatrix: this.getStyleRatingMatrix(),
            breweryNetwork: this.getBreweryNetwork()
        };
    }

    calculateAverageRating() {
        const validRatings = this.data.filter(d => d.rating !== null).map(d => d.rating);
        return validRatings.length > 0 ? 
            (validRatings.reduce((sum, rating) => sum + rating, 0) / validRatings.length).toFixed(2) : 
            'N/A';
    }

    getTopVenue() {
        const venueCount = {};
        this.data.forEach(d => venueCount[d.venue] = (venueCount[d.venue] || 0) + 1);
        return Object.keys(venueCount).reduce((a, b) => venueCount[a] > venueCount[b] ? a : b, '');
    }

    getFavoriteBeerType() {
        const typeCount = {};
        this.data.forEach(d => typeCount[d.beer_type] = (typeCount[d.beer_type] || 0) + 1);
        return Object.keys(typeCount).reduce((a, b) => typeCount[a] > typeCount[b] ? a : b, '');
    }

    getTopBeers() {
        const beerRatings = {};
        const beerCounts = {};
        
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!beerRatings[d.beer_name]) {
                    beerRatings[d.beer_name] = [];
                }
                beerRatings[d.beer_name].push(d.rating);
            }
            beerCounts[d.beer_name] = (beerCounts[d.beer_name] || 0) + 1;
        });

        return Object.keys(beerRatings)
            .filter(beer => beerRatings[beer].length >= 2) // At least 2 ratings
            .map(beer => ({
                name: beer,
                avgRating: (beerRatings[beer].reduce((sum, r) => sum + r, 0) / beerRatings[beer].length).toFixed(2),
                count: beerCounts[beer]
            }))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 10);
    }

    getTopBreweries() {
        const breweryCount = {};
        this.data.forEach(d => breweryCount[d.brewery] = (breweryCount[d.brewery] || 0) + 1);
        
        return Object.entries(breweryCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    }

    getTopBeerTypes() {
        const typeCount = {};
        this.data.forEach(d => typeCount[d.beer_type] = (typeCount[d.beer_type] || 0) + 1);
        
        return Object.entries(typeCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    }

    getTopVenues() {
        const venueCount = {};
        this.data.forEach(d => venueCount[d.venue] = (venueCount[d.venue] || 0) + 1);
        
        return Object.entries(venueCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    }

    getTimelineData() {
        const timelineMap = {};
        this.data.forEach(d => {
            const date = d.time.toISOString().split('T')[0];
            timelineMap[date] = (timelineMap[date] || 0) + 1;
        });

        return Object.entries(timelineMap)
            .sort(([a], [b]) => new Date(a) - new Date(b))
            .map(([date, count]) => ({ date, count }));
    }

    getRatingDistribution() {
        const ratingCount = {};
        this.data.filter(d => d.rating !== null).forEach(d => {
            const rating = Math.floor(d.rating * 2) / 2; // Round to nearest 0.5
            ratingCount[rating] = (ratingCount[rating] || 0) + 1;
        });

        return Object.entries(ratingCount)
            .sort(([a], [b]) => a - b)
            .map(([rating, count]) => ({ rating: parseFloat(rating), count }));
    }

    getServingTypes() {
        const servingCount = {};
        this.data.forEach(d => servingCount[d.serving] = (servingCount[d.serving] || 0) + 1);
        
        return Object.entries(servingCount)
            .map(([type, count]) => ({ type, count }))
            .sort((a, b) => b.count - a.count);
    }

    getUserActivity() {
        const userCount = {};
        this.data.forEach(d => userCount[d.user] = (userCount[d.user] || 0) + 1);
        
        return Object.entries(userCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([user, count]) => ({ user, count }));
    }

    getStyleRatingMatrix() {
        const styleRatings = {};
        this.data.filter(d => d.rating !== null).forEach(d => {
            if (!styleRatings[d.beer_type]) {
                styleRatings[d.beer_type] = [];
            }
            styleRatings[d.beer_type].push(d.rating);
        });

        return Object.entries(styleRatings)
            .filter(([, ratings]) => ratings.length >= 3)
            .map(([style, ratings]) => ({
                style,
                avgRating: (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2),
                count: ratings.length,
                minRating: Math.min(...ratings),
                maxRating: Math.max(...ratings)
            }))
            .sort((a, b) => b.avgRating - a.avgRating);
    }

    getBreweryNetwork() {
        const breweryVenues = {};
        this.data.forEach(d => {
            if (!breweryVenues[d.brewery]) {
                breweryVenues[d.brewery] = new Set();
            }
            breweryVenues[d.brewery].add(d.venue);
        });

        return Object.entries(breweryVenues)
            .map(([brewery, venues]) => ({
                brewery,
                venueCount: venues.size,
                totalBeers: this.data.filter(d => d.brewery === brewery).length
            }))
            .sort((a, b) => b.venueCount - a.venueCount)
            .slice(0, 15);
    }

    updateDashboard() {
        document.getElementById('totalBeers').textContent = this.processedData.totalBeers.toLocaleString();
        document.getElementById('uniqueBreweries').textContent = this.processedData.uniqueBreweries.toLocaleString();
        document.getElementById('avgRating').textContent = this.processedData.avgRating;
        document.getElementById('topVenue').textContent = this.processedData.topVenue;
        document.getElementById('uniqueUsers').textContent = this.processedData.uniqueUsers.toLocaleString();
        document.getElementById('favoriteBeerType').textContent = this.processedData.favoriteBeerType;

        this.updateLeaderboards();
    }

    updateLeaderboards() {
        this.renderLeaderboard('topBeers', this.processedData.topBeers, 
            item => `${item.name.length > 30 ? item.name.substring(0, 30) + '...' : item.name}`, 
            item => `⭐ ${item.avgRating}`);
        
        this.renderLeaderboard('topBreweries', this.processedData.topBreweries, 
            item => item.name, 
            item => `${item.count} beers`);
        
        this.renderLeaderboard('topBeerTypes', this.processedData.topBeerTypes, 
            item => item.name, 
            item => `${item.count}x`);
        
        this.renderLeaderboard('topVenues', this.processedData.topVenues, 
            item => item.name, 
            item => `${item.count} visits`);
    }

    renderLeaderboard(elementId, data, nameFormatter, valueFormatter) {
        const container = document.getElementById(elementId);
        container.innerHTML = data.map((item, index) => `
            <div class="leaderboard-item">
                <span class="leaderboard-rank">#${index + 1}</span>
                <span class="leaderboard-name">${nameFormatter(item)}</span>
                <span class="leaderboard-value">${valueFormatter(item)}</span>
            </div>
        `).join('');
    }

    createVisualizations() {
        this.createTimelineChart();
        this.createRatingChart();
        this.createServingChart();
        this.createUserActivityChart();
        this.createStyleRatingMatrix();
        this.createBreweryNetwork();
    }

    createTimelineChart() {
        const data = [{
            x: this.processedData.timelineData.map(d => d.date),
            y: this.processedData.timelineData.map(d => d.count),
            type: 'scatter',
            mode: 'lines+markers',
            fill: 'tozeroy',
            line: { color: '#d4a574', width: 3 },
            marker: { color: '#f4a261', size: 6 }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Date'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Beers Consumed'
            },
            margin: { t: 20, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('timelineChart', data, layout, {responsive: true});
    }

    createRatingChart() {
        const data = [{
            x: this.processedData.ratingDistribution.map(d => d.rating),
            y: this.processedData.ratingDistribution.map(d => d.count),
            type: 'bar',
            marker: {
                color: '#d4a574',
                line: { color: '#f4a261', width: 2 }
            }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Rating'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Count'
            },
            margin: { t: 20, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('ratingChart', data, layout, {responsive: true});
    }

    createServingChart() {
        const data = [{
            values: this.processedData.servingTypes.map(d => d.count),
            labels: this.processedData.servingTypes.map(d => d.type),
            type: 'pie',
            marker: {
                colors: ['#d4a574', '#f4a261', '#8b4513', '#deb887', '#cd853f', '#a0522d']
            },
            textinfo: 'label+percent',
            textfont: { color: '#ffffff' }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            margin: { t: 20, r: 20, b: 20, l: 20 }
        };

        Plotly.newPlot('servingChart', data, layout, {responsive: true});
    }

    createUserActivityChart() {
        const data = [{
            x: this.processedData.userActivity.map(d => d.count),
            y: this.processedData.userActivity.map(d => d.user),
            type: 'bar',
            orientation: 'h',
            marker: {
                color: '#d4a574',
                line: { color: '#f4a261', width: 1 }
            }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Beers Logged'
            },
            yaxis: { 
                gridcolor: '#404040'
            },
            margin: { t: 20, r: 20, b: 60, l: 120 }
        };

        Plotly.newPlot('userActivityChart', data, layout, {responsive: true});
    }

    createStyleRatingMatrix() {
        const matrixData = this.processedData.styleRatingMatrix;
        
        const data = [{
            x: matrixData.map(d => d.avgRating),
            y: matrixData.map(d => d.count),
            text: matrixData.map(d => d.style),
            mode: 'markers+text',
            marker: {
                size: matrixData.map(d => Math.max(8, Math.min(20, d.count / 2))),
                color: matrixData.map(d => d.avgRating),
                colorscale: 'Viridis',
                opacity: 0.7,
                line: { color: '#ffffff', width: 1 }
            },
            textposition: 'top center',
            textfont: { size: 10, color: '#ffffff' },
            type: 'scatter'
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Average Rating'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Number of Beers'
            },
            margin: { t: 40, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('styleRatingMatrix', data, layout, {responsive: true});
    }

    createBreweryNetwork() {
        const networkData = this.processedData.breweryNetwork;
        
        const data = [{
            x: networkData.map(d => d.venueCount),
            y: networkData.map(d => d.totalBeers),
            text: networkData.map(d => d.brewery),
            mode: 'markers+text',
            marker: {
                size: networkData.map(d => Math.max(8, Math.min(25, d.totalBeers / 5))),
                color: '#d4a574',
                opacity: 0.7,
                line: { color: '#f4a261', width: 2 }
            },
            textposition: 'top center',
            textfont: { size: 9, color: '#ffffff' },
            type: 'scatter'
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Number of Venues'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Total Beers'
            },
            margin: { t: 40, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('breweryNetwork', data, layout, {responsive: true});
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new BeerStatsAnalyzer();
});