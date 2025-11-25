import TabProduct from '@/components/TabProduct'
import Link from 'next/link'
import BannerSlider from "@/components/BannerSlider";

export default function Home() {
  const product = [
    {
      "createdDate": "2022-05-09T14:54:31.261Z",
      "updatedDate": "2023-11-18T07:23:23.000Z",
      "name": "Top Up Game",
      "products": [
        {
          "title": "Mobile Legends: Bang Bang",
          "subTitle": "Moonton",
          "slug": "mobile-legends-bang-bang",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MOBILE-LEGENDS_11zon-(2)-7c8d-original.webp",
          "redirectLink": null
        },
        {
          "title": "Mobile Legends",
          "subTitle": "Global",
          "slug": "mobile-legends-global",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MOBILE-LEGENDS-GLOBAL_11zon-(5)-25da-original.webp",
          "redirectLink": null
        },
        {
          "title": "Magic Chess: Go Go",
          "subTitle": "Vizta Games",
          "slug": "magic-chess-go-go",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MCGG_11zon-(1)-badf-original.webp",
          "redirectLink": null
        },
        {
          "title": "PUBG Mobile",
          "subTitle": "Semua Region",
          "slug": "pubg-mobile",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/PUBG-M_11zon-3141-original.webp",
          "redirectLink": null
        },
        {
          "title": "Free Fire",
          "subTitle": "Garena",
          "slug": "free-fire",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GARENA-FREE-FIRE_11zon-(1)-(1)-c9bc-original.webp",
          "redirectLink": null
        },
        {
          "title": "Free Fire MAX",
          "subTitle": "Garena",
          "slug": "free-fire-max",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/FREE-FIRE-MAX_11zon-(2)-acb4-original.webp",
          "redirectLink": null
        },
        {
          "title": "Genshin Impact",
          "subTitle": "Termurah",
          "slug": "genshin-impact",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GENSHIN-IMPACT_11zon%20(1)-2a04-original.webp",
          "redirectLink": null
        },
        {
          "title": "Honkai: Star Rail",
          "subTitle": "Hoyoverse",
          "slug": "honkai-star-rail",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/HONKAI-STAR-RAIL_11zon-4f28-original.webp",
          "redirectLink": null
        },
        {
          "title": "Zenless Zone Zero",
          "subTitle": "Termurah",
          "slug": "zenless-zone-zero",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ZENLESSS_11zon%20(1)-37b8-original.webp",
          "redirectLink": null
        },
        {
          "title": "Delta Force - Garena",
          "subTitle": "Garena",
          "slug": "delta-force-garena",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/DELTA-FORCE_11zon-(1)-(1)-0437-original.webp",
          "redirectLink": null
        },
        {
          "title": "Delta Force - Steam",
          "subTitle": "TiMi Studio Group",
          "slug": "delta-force-steam",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/DELTA-FORCE-PC_11zon-a90e-original.webp",
          "redirectLink": null
        },
        {
          "title": "Call Of Duty Mobile ID",
          "subTitle": "Garena",
          "slug": "cod-mobile",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/CALL-OF-DUTY-M_11zon-5794-original.webp",
          "redirectLink": null
        },
        {
          "title": "Metal Slug: Awakening",
          "subTitle": "VNG",
          "slug": "metal-slug-awakening",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/METAL-SLUG-AWEKENING_11zon-83102-original.webp",
          "redirectLink": null
        },
        {
          "title": "Honor of Kings",
          "subTitle": "Tokens",
          "slug": "honor-of-kings",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/HONOR-OF-KING_11zon-8e63-original.webp",
          "redirectLink": null
        },
        {
          "title": "Valorant",
          "subTitle": "point",
          "slug": "valorant",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/VALORANT_11zon-(2)-3164-original.webp",
          "redirectLink": null
        },
        {
          "title": "Mythic Samkok - Razer Link",
          "subTitle": "Razer Link",
          "slug": "mythic-samkok-razer-link",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MYTHIC-SAMKOK_11zon-627d-original.webp",
          "redirectLink": null
        },
        {
          "title": "8 Ball Pool,",
          "subTitle": "Miniclip",
          "slug": "8-ball-pool",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/8-BALL-POOL_11zon-(1)-710101-original.webp",
          "redirectLink": null
        },
        {
          "title": "Aether Gazer",
          "subTitle": "Aether Gazer",
          "slug": "aether-gazer",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/AETHER-GAZER_13_11zon-f531-original.webp",
          "redirectLink": null
        },
        {
          "title": "Ace Racer",
          "subTitle": "Proses Kilat",
          "slug": "ace-racer",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ACE-RACER_12_11zon-26e6-original.webp",
          "redirectLink": null
        },
        {
          "title": "Arena Breakout",
          "subTitle": "Level Infinite",
          "slug": "arena-breakout",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ARENA-BREAKOUT_14_11zon-22e3-original.webp",
          "redirectLink": null
        },
        {
          "title": "Arena of Valor",
          "subTitle": "Garena",
          "slug": "arena-of-valor",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ARENA-OF-VALOR_15_11zon-af24-original.webp",
          "redirectLink": null
        },
        {
          "title": "Blood Strike",
          "subTitle": "Netease",
          "slug": "blood-strike",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/BLOOD-STRIKE_18_11zon-a3ec-original.webp",
          "redirectLink": null
        },
        {
          "title": "Bigo Live",
          "subTitle": "Diamond",
          "slug": "bigo-live",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/BIGO-LIVE_16_11zon-446f-original.webp",
          "redirectLink": null
        },
        {
          "title": "Moonlight Blade M",
          "subTitle": "Moonlight Blade M",
          "slug": "moonlight-blade-m",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MOONLIGHT-BLADE_40_11zon-b10310-original.webp",
          "redirectLink": null
        },
        {
          "title": "Punishing: Gray Raven",
          "subTitle": "KURO TECHNOLOGY (HONG KONG) CO., LIMITED",
          "slug": "punishing-gray-raven",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/PUNISHING-GRAY-RAVEN_48_11zon-1e53-original.webp",
          "redirectLink": null
        },
        {
          "title": "Night Crows",
          "subTitle": "Drop Link",
          "slug": "night-crows-drop-link",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/NIGHT-CROWS_43_11zon-c74a-original.webp",
          "redirectLink": null
        },
        {
          "title": "Ragnarok X",
          "subTitle": "ID Number",
          "slug": "ragnarok-x-id-number",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/RAGNAROK-X_51_11zon-d259-original.jpg",
          "redirectLink": null
        },
        {
          "title": "HAGO",
          "subTitle": "HAGO",
          "slug": "hago",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/HAGO_29_11zon-1cba-original.webp",
          "redirectLink": null
        },
        {
          "title": "Draconia Saga",
          "subTitle": "Draconia Saga",
          "slug": "draconia-saga",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/DRACONIA-SAGA_21_11zon-2c98-original.webp",
          "redirectLink": null
        },
        {
          "title": "Garena Undawn",
          "subTitle": "Garena Undawn",
          "slug": "garena-undawn",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GARENA-UNDAWN_27_11zon-f2f5-original.webp",
          "redirectLink": null
        },
        {
          "title": "Super SUS",
          "subTitle": "PIProductions",
          "slug": "super-sus",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/SUPERSUS_55_11zon-b9d5-original.webp",
          "redirectLink": null
        },
        {
          "title": "EA SPORTS FC Mobile",
          "subTitle": "EA SPORTS FC Mobile",
          "slug": "ea-sports-fc-mobile",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/FC-MOBILE_24_11zon-baad-original.webp",
          "redirectLink": null
        },
        {
          "title": "Sausage Man",
          "subTitle": "Candies",
          "slug": "sausage-man",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/SAUSAGE-MAN_53_11zon-ebca-original.webp",
          "redirectLink": null
        },
        {
          "title": "Ragnarok Origin Global - Package",
          "subTitle": "Package",
          "slug": "ragnarok-origin-global-package",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/RAGNAROK-ORIGINAL-GLOBAL-PACKAGE_50_11zon-264f-original.webp",
          "redirectLink": null
        },
        {
          "title": "League of Legends: Wild Rift",
          "subTitle": "Riot Games",
          "slug": "league-of-legends-wild-rift",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/LOL-WILD-RIFT_34_11zon-5497-original.webp",
          "redirectLink": null
        },
        {
          "title": "New State Mobile (NC)",
          "subTitle": "Krafton",
          "slug": "new-state-mobile-nc",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/NEW-STATE-MOBILE_42_11zon-8915-original.webp",
          "redirectLink": null
        },
        {
          "title": "Marvel Snap",
          "subTitle": "Marvel Snap",
          "slug": "marvel-snap",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MARVEL_37_11zon-f714-original.webp",
          "redirectLink": null
        },
        {
          "title": "Marvel Rivals",
          "subTitle": "Marvel Rivals",
          "slug": "marvel-rivals",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/rivals_11zon-4b109-original.jpg",
          "redirectLink": null
        },
        {
          "title": "Egg Party",
          "subTitle": "Exptional Global",
          "slug": "egg-party",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/EGGY-PARTY_22_11zon-97f1-original.webp",
          "redirectLink": null
        },
        {
          "title": "Ragnarok Origin Global",
          "subTitle": "Ragnarok Origin Global",
          "slug": "ragnarok-origin-global",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/RAGNAROK-ORIGINAL-GLOBAL_49_11zon-8b2a-original.webp",
          "redirectLink": null
        },
        {
          "title": "Mango Live",
          "subTitle": "Diamonds",
          "slug": "mango-live",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MANGO-LIVE_36_11zon-69510-original.webp",
          "redirectLink": null
        },
        {
          "title": "Seal Mobile Sea",
          "subTitle": "Proses Kilat",
          "slug": "seal-mobile-sea",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/SEAL-MOBILE-SEA_54_11zon-afff-original.webp",
          "redirectLink": null
        },
        {
          "title": "One Punch Man: The Strongest (SEA)",
          "subTitle": "FingerFun (HK) Limited",
          "slug": "one-punch-man-the-strongest-sea",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ONE-PUNCH-MAN_11zon%20(1)-bc29-original.jpg",
          "redirectLink": null
        },
        {
          "title": "ONE PUNCH MAN: World",
          "subTitle": "Packpage",
          "slug": "one-punch-man-world",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ONE-PUNCH-MAN-WORLD_45_11zon-6599-original.webp",
          "redirectLink": null
        },
        {
          "title": "Tarisland",
          "subTitle": "Drop Link",
          "slug": "tarisland-drop-link",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/TARISLAND-DROP-LINK_56_11zon-5f95-original.webp",
          "redirectLink": null
        },
        {
          "title": "Tarisland",
          "subTitle": "Level Infinite",
          "slug": "tarisland",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/TARISLAND-LEVEL-INFINITE_57_11zon-681d-original.webp",
          "redirectLink": null
        },
        {
          "title": "Teamfight Tactics Mobile",
          "subTitle": "Riot Games",
          "slug": "teamfight-tactics-mobile",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/TEAMFIGHT-TACTICS-MOBILE_58_11zon-0c10-original.webp",
          "redirectLink": null
        },
        {
          "title": "The Ragnarok",
          "subTitle": "Drop Link",
          "slug": "the-ragnarok-drop-link",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/THE-RAGNAROK-DROP-LINK_11zon_11zon-ba72-original.webp",
          "redirectLink": null
        },
        {
          "title": "Honkai Impact",
          "subTitle": "Proses Kilat",
          "slug": "honkai-impact",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/HONKAI-IMPACT_11zon-abee-original.webp",
          "redirectLink": null
        },
        {
          "title": "LifeAfter",
          "subTitle": "NetEase",
          "slug": "lifeafter",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/LIFEAFTER_33_11zon-763d-original.webp",
          "redirectLink": null
        },
        {
          "title": "Ragnarok M Classic - UID",
          "subTitle": "Gravity Interactive, Inc",
          "slug": "ragnarok-m-classic-uid",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/RAGNAROK-M-CLASSIC_11zon%20(1)-cd61-original.jpg",
          "redirectLink": null
        },
        {
          "title": "Revelation Mobile",
          "subTitle": "Packpage",
          "slug": "revelation-mobile",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/REVELATION-MOBILE_52_11zon-2e50-original.webp",
          "redirectLink": null
        },
        {
          "title": "Love and Deepspace",
          "subTitle": "InFold Pte. Ltd.",
          "slug": "love-and-deepspace",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/LOVE-AND-DEEPSPACE_35_11zon-7f24-original.webp",
          "redirectLink": null
        },
        {
          "title": "Crystal of Atlan",
          "subTitle": "Crystal of Atlan",
          "slug": "crystal-of-atlan",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/CRYSTAL-OF-ATLAN_11zon-(1)-(1)-1c99-original.jpg",
          "redirectLink": null
        }
      ]
    },
    {
      "createdDate": "2022-06-27T13:10:29.756Z",
      "updatedDate": "2023-11-18T07:23:23.000Z",
      "name": "Mobile Legend ",
      "products": [
        {
          "title": "Sewa Squad Verified",
          "subTitle": "Squad Verified Murah",
          "slug": "sewa-squad-verified",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/SEWA-SQUAD-VERIFIED_11zon_11zon-7e56-original.webp",
          "redirectLink": null
        },
        {
          "title": "Joki Rank",
          "subTitle": "Aktif 24 Jam",
          "slug": "Joki-Mobilelegends",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/JOKI-RANK_11zon_11zon-8798-original.webp",
          "redirectLink": null
        },
        {
          "title": "Gift Skin Shop",
          "subTitle": "Delay 7-8 Hari",
          "slug": "gift-skin-shop",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GIFT-SKIN-SHOP_11zon_11zon-ce50-original.webp",
          "redirectLink": null
        },
        {
          "title": "Magic Chest",
          "subTitle": "gift",
          "slug": "magic-chest",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GIFT-SKIN-MAGIC-CHESS_11zon_11zon-e310b-original.webp",
          "redirectLink": null
        },
        {
          "title": "Paket Starlight",
          "subTitle": "Proses Kilat",
          "slug": "paket-starlight",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/PAKET-STARLIGHT_11zon_11zon-f105b-original.webp",
          "redirectLink": null
        }
      ]
    },
    {
      "createdDate": "2023-09-05T16:57:59.360Z",
      "updatedDate": "2023-11-18T07:23:23.000Z",
      "name": "Via Login",
      "products": [
        {
          "title": "Roblox - Login",
          "subTitle": "Roblox - Login",
          "slug": "roblox-login",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ROBLOX_11zon%20(1)%20(3)-34be-original.jpg",
          "redirectLink": null
        },
        {
          "title": "Mobile Legends Login",
          "subTitle": "Via Login",
          "slug": "mobile-legends-login",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MOBILE-LEGENDS-LOGIN_11zon_11zon-4f04-original.webp",
          "redirectLink": null
        },
        {
          "title": "Wuthering Waves",
          "subTitle": "via Login",
          "slug": "wuthering-waves-via-login",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/WUTHERING-WAVES_11zon_11zon-fe50-original.webp",
          "redirectLink": null
        },
        {
          "title": "Zenless Zone Zero Login",
          "subTitle": "Via Login ",
          "slug": "zenless-zone-zero-login",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/ZENLESSS-LOGIN_11zon-98fd-original.webp",
          "redirectLink": null
        },
        {
          "title": "Genshin Impact Login",
          "subTitle": "Via Login",
          "slug": "genshin-impact-login",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GENSHIN-IMPACT-LOGIN_11zon%20(1)-8bc5-original.webp",
          "redirectLink": null
        },
        {
          "title": "Honkai Star Rail Login",
          "subTitle": "Hoyoverse",
          "slug": "honkai-star-rail-login",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/HONKAI-STAR-RAIL_11zon%20(1)-1224-original.jpg",
          "redirectLink": null
        }
      ]
    },
    {
      "createdDate": "2023-02-01T05:05:08.103Z",
      "updatedDate": "2023-11-18T07:23:23.000Z",
      "name": "vocher",
      "products": [
        {
          "title": "Garena Shell",
          "subTitle": "Proses Kilat",
          "slug": "garena-shell",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GARENA_11zon_11zon-b186-original.webp",
          "redirectLink": null
        },
        {
          "title": "Razer gold indonesia",
          "subTitle": "Proses Kilat",
          "slug": "razer-gold-indonesia",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/RAZER-GOLD-INDONESIA_11zon_11zon-0aa3-original.webp",
          "redirectLink": null
        },
        {
          "title": "Steam Voucher (Indonesia)",
          "subTitle": "Steam",
          "slug": "steam-voucher-indonesia-rupiah",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/STEAM-VOUCHER_11zon_11zon-fe7c-original.webp",
          "redirectLink": null
        },
        {
          "title": "Token listrik",
          "subTitle": "Proses Kilat",
          "slug": "token-listrik",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/TOKEN-LISTRIK_11zon_11zon-131a-original.webp",
          "redirectLink": null
        },
        {
          "title": "Roblox",
          "subTitle": "Roblox Corporation",
          "slug": "roblox",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/VOUCHER-ROBLOX_11zon_11zon-de46-original.webp",
          "redirectLink": null
        },
        {
          "title": "Point Blank (Voucher Cash)",
          "subTitle": "Zepetto",
          "slug": "point-blank-voucher-cash",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/POINT-BLANK_11zon_11zon-e13e-original.webp",
          "redirectLink": null
        },
        {
          "title": "Nintendo eShop Card (US)",
          "subTitle": "Nintendo",
          "slug": "nintendo-eshop-card-us",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/VOUCHER-NINTENDO_11zon_11zon-5960-original.webp",
          "redirectLink": null
        },
        {
          "title": "Google Play (Indonesia)",
          "subTitle": "Google",
          "slug": "google-play-indonesia",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/GOOGLE-PLAY_11zon_11zon-ef8c-original.webp",
          "redirectLink": null
        },
        {
          "title": "Vidio",
          "subTitle": "PT Vidio Dot Com",
          "slug": "vidio",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/VIDIO-PREMIER_11zon_11zon-2349-original.webp",
          "redirectLink": null
        },
        {
          "title": "PSN Voucher (Indonesia)",
          "subTitle": "Playstation",
          "slug": "psn-voucher-indonesia",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/VOUCHER-PSN_11zon_11zon-f4e1-original.webp",
          "redirectLink": null
        }
      ]
    },
    {
      "createdDate": "2023-07-18T15:23:09.261Z",
      "updatedDate": "2023-11-18T07:23:23.000Z",
      "name": "Premium",
      "products": [
        {
          "title": "NETFLIX",
          "subTitle": "Premium",
          "slug": "netflix",
          "logoUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/Netflix baru-4612-original.jpg",
          "redirectLink": null
        }
      ]
    }
  ]

  const banners = [
    {
      "createdDate": "2025-09-19T11:51:28.897Z",
      "updatedDate": "2025-09-19T11:51:33.000Z",
      "name": "Nomor cs",
      "description": null,
      "content": null,
      "color": "#ffffff",
      "externalLink": null,
      "startDate": null,
      "endDate": null,
      "imageUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/6d0cbc5a-c7dd-46ed-98b2-f8df5f7a5b9a-0b82-original.jpeg",
      "product": null
    },
    {
      "createdDate": "2024-10-19T09:31:01.990Z",
      "updatedDate": "2025-09-19T11:51:33.000Z",
      "name": "Kecepatan Top Up",
      "description": null,
      "content": null,
      "color": null,
      "externalLink": "https://lapakhuda.com",
      "startDate": null,
      "endDate": null,
      "imageUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/NEW-BANNER-3-50b1-original.webp",
      "product": null
    },
    {
      "createdDate": "2022-10-19T12:01:14.166Z",
      "updatedDate": "2025-09-26T01:19:32.000Z",
      "name": "Membership",
      "description": "",
      "content": "<p><br></p>",
      "color": null,
      "externalLink": "https://lapakhuda.com/account/auth/register",
      "startDate": null,
      "endDate": null,
      "imageUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/NEW-BANNER-9-75d10-original.webp",
      "product": null
    },
    {
      "createdDate": "2024-10-19T09:34:01.830Z",
      "updatedDate": "2025-09-19T11:51:33.000Z",
      "name": "Kode Promo",
      "description": null,
      "content": null,
      "color": null,
      "externalLink": null,
      "startDate": null,
      "endDate": null,
      "imageUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/NEW-BANNER-4-fa68-original.webp",
      "product": null
    },
    {
      "createdDate": "2024-10-19T09:32:29.086Z",
      "updatedDate": "2025-09-24T03:56:46.000Z",
      "name": "Transaksi Aman dan Mudah",
      "description": null,
      "content": null,
      "color": null,
      "externalLink": null,
      "startDate": null,
      "endDate": null,
      "imageUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/NEW-BANNER-7_11zon-5963-original.webp",
      "product": null
    },
    {
      "createdDate": "2024-03-01T03:11:47.065Z",
      "updatedDate": "2025-09-24T03:57:59.000Z",
      "name": "valorant",
      "description": null,
      "content": null,
      "color": null,
      "externalLink": null,
      "startDate": null,
      "endDate": null,
      "imageUrl": "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/NEW-BANNER-8_11zon-a5d7-original.webp",
      "product": null
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Payment Project</h1>
        
        {/* Server-rendered content untuk SEO - Hidden dari user tapi visible untuk crawler */}
        <div className="sr-only">
          <h2>Semua Produk Voucher Game dan Premium</h2>
          {product.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h3>{category.name}</h3>
              {category.products.map((prod) => (
                <article key={prod.slug}>
                  <h4>{prod.title} title</h4>
                  <p>{prod.subTitle}</p>
                  <Link href={`/product/${prod.slug}`}>
                    Beli {prod.title} - {prod.subTitle}
                  </Link>
                </article>
              ))}
            </section>
          ))}
        </div>

        <BannerSlider
          // bannerData={banners}
        />

        {/* Client component untuk UI interaktif */}
        <TabProduct data={product} />
      </div>
    </div>
  );
}
