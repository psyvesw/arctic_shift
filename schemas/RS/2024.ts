interface RedditPost_2024 {
	_meta: {
		is_edited?: boolean,
		note?: "no_2nd_retrieval"|"initially_unavailable",
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
		retrieved_2nd_on?: number,
		was_deleted_later?: boolean,
		was_initially_deleted?: boolean,
	},
	ad_business?: null,
	ad_promoted_user_posts?: null,
	ad_supplementary_text_md?: null|string,
	ad_user_targeting?: null,
	adserver_click_url?: null,
	adserver_imp_pixel?: null,
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null,
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean,
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
	author_fullname?: string,
	author_id?: string,
	author_is_blocked: boolean,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"View More"|"Apply Now"|"Play Now"|"Order Now"|"Watch Now"|"Contact Us"|"Pre-order Now"|"Get a Quote"|"Get Showtimes"|"See Menu",
	campaign_id?: null,
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography"|"gaming"|"music"|"animals"|"memes",
	clicked: boolean,
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string,
		display_layout: null|"GALLERY"|"TIMELINE",
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		sr_detail?: {
			banner_img: string,
			banner_size: null|number[],
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: string,
			display_name_prefixed: string,
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#7e53c1"|"#ffb000"|"#0079d3"|"#ea0027"|"#46d160"|"#ddbd37"|"#24a0ed",
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: string,
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads"|"some_ads",
		},
		subreddit_id: string,
		title: string,
	}[],
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string,
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean,
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
		author_fullname?: string,
		author_is_blocked: boolean,
		author_patreon_flair?: boolean,
		author_premium?: boolean,
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "",
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"videos"|"gaming"|"food",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"GALLERY"|"TIMELINE",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			sr_detail?: {
				banner_img: "",
				banner_size: null,
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "workcules"|"vktoons"|"lovehair",
				display_name_prefixed: "r/workcules"|"r/vktoons"|"r/lovehair",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_7ovi2c"|"t5_65xl5n"|"t5_6g68ad",
				over_18: boolean,
				primary_color: "#000000"|"",
				sr: "workcules"|"vktoons"|"lovehair",
				sr_display_name_prefixed: "r/workcules"|"r/vktoons"|"r/lovehair",
				subreddit_type: "restricted"|"public",
				subscribers: number,
				title: "Workcules"|"vktoons"|"lovehair",
				url: "/r/workcules/"|"/r/vktoons/"|"/r/lovehair/",
				user_can_crosspost: boolean,
				whitelist_status: null,
			},
			subreddit_id: string,
			title: string,
		}[],
		content_categories: null|("photography"|"drawing_and_painting"|"writing"|"comics"|"diy_and_crafts"|"gaming"|"entertainment"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number,
		event_is_live?: boolean,
		event_start?: number,
		gallery_data?: {
			items: {
				caption?: string,
				id: number,
				media_id: string,
				outbound_url?: string,
			}[],
		}|null,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string,
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		link_flair_template_id?: string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number|null,
				thumbnail_url?: string,
				thumbnail_width?: number|null,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				has_audio?: boolean,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
		},
		media_embed: {
			content?: string|null,
			height?: number,
			scrolling?: boolean,
			width?: number,
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string,
				e?: "Image"|"AnimatedImage"|"RedditVideo",
				hlsUrl?: string,
				id?: string,
				isGif?: boolean,
				m?: "image/jpg"|"image/png"|"image/gif",
				o?: {
					u: string,
					x: number,
					y: number,
				}[],
				p?: {
					u: string,
					x: number,
					y: number,
				}[],
				s?: {
					gif?: string,
					mp4?: string,
					u?: string,
					x: number,
					y: number,
				},
				status: "valid"|"failed"|"unprocessed",
				x?: number,
				y?: number,
			},
		}|null,
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number,
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null,
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery",
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
					gif?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					mp4?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					nsfw?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					obfuscated?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			},
		},
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number|null,
				thumbnail_url?: string,
				thumbnail_width?: number|null,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				has_audio?: boolean,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
		},
		secure_media_embed: {
			content?: string|null,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[],
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null,
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe",
	embed_url?: null|string,
	event_end?: number,
	event_is_live?: boolean,
	event_start?: number,
	events?: [],
	eventsOnRender?: [],
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Watch Now"|"Order Now"|"Install"|"Pre-order Now"|"Apply Now"|"Contact Us"|"Play Now"|"Get a Quote"|"Get Showtimes"|"See Menu",
			caption?: string,
			display_url?: string,
			id: number,
			media_id: string,
			outbound_url?: string,
			product?: {
				description: string,
				price?: string,
				title: string,
			},
		}[],
	}|null,
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string,
	id: string,
	impression_id?: null,
	impression_id_str?: null,
	is_blank?: boolean,
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean,
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	link_flair_template_id?: string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height?: number|null,
			html?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number|null,
			thumbnail_url?: string,
			thumbnail_width?: number|null,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			has_audio?: boolean,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			scrubber_media_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		type?: string,
	},
	media_embed: {
		content?: string|null,
		height?: number,
		scrolling?: boolean,
		width?: number,
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string,
			e?: "Image"|"AnimatedImage"|"RedditVideo",
			hlsUrl?: string,
			id?: string,
			isGif?: boolean,
			m?: "image/jpg"|"image/png"|"image/gif",
			o?: {
				u: string,
				x: number,
				y: number,
			}[],
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s?: {
				gif?: string,
				mp4?: string,
				u?: string,
				x: number,
				y: number,
			},
			status: "valid"|"unprocessed"|"failed",
			x?: number,
			y?: number,
		},
	}|null,
	media_only: boolean,
	mobile_ad_url?: string,
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null,
	outbound_link?: {
	},
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number,
		}[],
		prediction_status: null,
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null,
	post_hint?: "image"|"rich:video"|"link"|"self"|"hosted:video"|"gallery"|"video",
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
				gif?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				mp4?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				nsfw?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				obfuscated?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number,
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		},
	},
	priority_id?: null,
	product_ids?: [],
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO",
	promoted?: boolean,
	promoted_by?: null,
	promoted_display_name?: null,
	promoted_url?: null,
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height?: number|null,
			html?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number|null,
			thumbnail_url?: string,
			thumbnail_width?: number|null,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			has_audio?: boolean,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			scrubber_media_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		type?: string,
	},
	secure_media_embed: {
		content?: string|null,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean,
	sk_ad_network_data?: null,
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [],
	third_party_tracking?: null,
	third_party_tracking_2?: null,
	thumbnail: string|null,
	thumbnail_height?: number|null,
	thumbnail_width?: number|null,
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK",
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string,
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}
