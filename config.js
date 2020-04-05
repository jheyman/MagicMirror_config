/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0",  // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [],
//	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.0/24"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
			disabled: false,
		},
		{
			module: "updatenotification",
			disabled: false,
			position: "top_bar"
		},
		{
			module: "MMM-Keyboard",
			disabled: true,
			position: "top_left",
			config: {
			locale: "de-DE"
			}
		},
		{
			module: 'MMM-OnScreenMenu',
			disabled: false,
		        position: 'bottom_right',
		        /* Valid positions: 'top_right', 'top_left', 'bottom_right', 'bottom_left' */
		        config: {
		        	touchMode: true,
		                enableKeyboard: false,
				menuItems: {
					moduleHide1: { title: "Hide Clock", icon: "minus-square", name: "clock" },
	                                moduleShow1: { title: "Show Clock", icon: "plus-square", name: "clock" },
					refresh: { title: "Refresh", icon: "recycle", source: "LOCAL" },
					moduleHide2: { title: "XXXXX", icon: "minus-square", name: "clock" },
					moduleShow2: { title: "YYYYY", icon: "plus-square", name: "clock" },
				 //   restart: { title: "Restart MagicMirror", icon: "refresh", source: "ALL" },
				},
			}
	        },
		{
			module: 'MMM-BackgroundSlideshow',
			disabled: false,
			position: 'fullscreen_below',
			config: {
				imagesTopDirectory: 'modules/MMM-BackgroundSlideshow/exampleImages/link',
				excludedImagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/link/.Trash-1000'],
				filteredDirectoriesKeyword: 'NO_SHOW_',
			   	transitionImages: true,
				recursiveSubDirectories: true,
				slideshowSpeed: 30000, 
				backgroundSize: "cover",
				gradient: [ "rgba(0, 0, 0, 0.0) 0%", "rgba(0, 0, 0, 0) 100%" ]
			}
		},
		{
			module: "clock",
			disabled: false,
			position: "top_right",
			displaySeconds: false,
			showSunTimes: true,
			lat: 48.8668619,
			lon: 2.1888326,
		},
		{
			disabled: false,
			module: 'MMM-PIR-Sensor',
			config: {
				sensorPin: 14,
				relayPin: 15,
				powerSavingDelay: 600
			}
		},
		{
			module: 'MMM-NetworkScanner',
			disabled: false,
			position: 'top_left', 
			config: {
		        	devices: [
		                	{ ipAddress: "<IP address>", name: "pi1", icon: "laptop"},
			                { ipAddress: "<IP address>", name: "pi2", icon: "laptop"},
							{ ipAddress: "<IP address>", name: "pi3", icon: "laptop"},
							{ ipAddress: "<IP address>", name: "pi4", icon: "laptop"},
			                { ipAddress: "<IP address>", name: "pi5", icon: "laptop"},
			                { ipAddress: "<IP address>", name: "pi6", icon: "laptop"},
			                ],
		        showUnknown: false,
		        showOffline: true,
		        keepAlive: 120,
		        updateInterval: 60
		    }
		},
		{
			disabled: true,
			module: "calendar",
			header: "Agenda",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/<email>/private-<key>/basic.ics",
						user: "",
						pass: "",
						method: "basic"
					},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/<email>/private-<key>/basic.ics",
						user: "",
						pass: "",
						method: "basic"
					}
				]
			}
		},
		{
            module: 'MMM-GoogleMapsTraffic',
            disabled: false,
            position: 'top_left',
            config: {
                key: '<API key>',
                lat: 48.8589507,
                lng: 2.2770204,
                height: '300px',
                width: '300px',
                styledMapType: "standard",
                disableDefaultUI: true,
                backgroundColor: 'hsla(0, 0%, 0%, 0)',
                markers: [
                    {
                        lat: 48.7379665,
                        lng: 2.0318829,
                        fillColor: '#9966ff'
                    },
                ],
            },
        },
		{
			module: "currentweather",
			disabled: false,
			position: "top_right",
			config: {
				location: "Paris",
				locationID: "2968815",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "<openweathermap addid>"
			}
		},
		{
			module: "weatherforecast",
			disabled: false,
			position: "top_right",
			header: "Prévision météo",
			config: {
				location: "Paris",
				locationID: "2968815",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "<openweathermap addid>"
			}
		},
		{
			module: "newsfeed",
			disabled: false,
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Le Monde",
						url: "https://www.lemonde.fr/rss/en_continu.xml"
					},
					{
                    	title: "Libération",
                        url: "https://www.liberation.fr/rss/latest/"
                    }
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
