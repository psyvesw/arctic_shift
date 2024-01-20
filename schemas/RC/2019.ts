interface RedditComment_2019 {
	all_awardings?: {
		award_sub_type?: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: "Silver Award"|"Gold Award"|"Platinum Award"|null,
		end_date?: null|number,
		giver_coin_reward?: null|number,
		icon_format?: null|"PNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: "gid_1"|"gid_2"|"gid_3",
		is_enabled: boolean,
		is_new?: boolean,
		name: "Silver"|"Gold"|"Platinum"|"Lemon Cake"|"Iron Coin"|"Apt Analysis"|"Greenseer"|"Hand of the Queen"|"Crying MJ"|"Crown"|"Hodor"|"Perfect Murder"|"Most Valuable"|"Quality OC"|"Tinfoil"|null,
		penny_donate?: null|number,
		penny_price?: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date?: null|number,
		subreddit_coin_reward?: number,
		subreddit_id: null|"t5_2rjz2"|"t5_2qo4s"|"t5_3hx3r"|"t5_m1n8r"|"t5_2tk95"|"t5_mouw"|"t5_35fmc",
	}[],
	archived?: boolean,
	associated_award?: null|{
		award_sub_type: "GLOBAL"|"COMMUNITY"|"APPRECIATION",
		award_type: "global"|"community",
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward?: null,
		icon_format?: null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: "gid_1"|"gid_2"|"gid_3",
		is_enabled: boolean,
		is_new: boolean,
		name: "Silver"|"Gold"|"Platinum"|"Musical skills!"|"Doggles"|"Artistic skills!"|"SHOW ME YOUR FRIDGE"|"Eek!"|"Gamer alert!"|"Top chef!"|"Bee Happy"|"Thirsty..."|"Space Goat"|"PANANAS"|"Golden PAN",
		penny_donate?: null,
		penny_price?: null,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null,
		subreddit_coin_reward: number,
		subreddit_id: null|"t5_228jbi",
	},
	author: string,
	author_cakeday?: boolean,
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext",
	author_fullname: string|null,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders?: ("Bioniclegenius"|"Belli91"|"shuntzu7"|"wearewildwinter"|"ucbsuperfreak"|"Dragonster82"|"NovaKevin"|"Dev_h1pp0p0t4mu5"|"ForgottenLoreInAutum")[],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic"|"potentially toxic content",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number,
		gid_2?: number,
		gid_3?: number,
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked?: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string,
			id: "emote|emo_pack_1|dance"|"emote|emo_pack_1|clappy"|"emote|emo_pack_1|dab"|"emote|emo_pack_1|respect"|"emote|emo_pack_1|uNfOrTuNaTeLy"|"emote|emo_pack_1|confused"|"emote|emo_pack_1|bush"|"emote|emo_pack_1|cuddle"|"emote|emo_pack_1|oof"|"emote|emo_pack_1|wow"|"emote|emo_pack_1|chug"|"emote|emo_pack_1|default"|"emote|emo_pack_1|blink"|"emote|free_emotes_pack|facepalm"|"emote|emo_pack_1|soon",
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s: {
				gif: string,
				mp4?: string,
				x: number,
				y: number,
			},
			status: "valid",
			t: "sticker"|"emoji"|"giphy",
		},
	},
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined?: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	steward_reports?: [],
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	total_awards_received?: number,
	treatment_tags?: [],
}