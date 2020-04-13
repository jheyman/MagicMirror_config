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
			disabled: true,
			position: "top_bar"
		},
		{
			module: "MMM-ShoppingList",
			disabled: false,
			position: "bottom_left"
		},
		{
			module: "MMM-TouchPrompt",
			disabled: false,
			position: "bottom_center"
		},		
		{
			module: "MMM-Keyboard",
			disabled: false,
			position: "upper_third",
			config: {
				locale: "fr-FR",
				debug: false
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
					refresh: { title: "Refresh", icon: "recycle", source: "LOCAL" },
					notify1: {
						title: "SLIDESHOW_NEXT",
						icon: "forward",
						notification: "BACKGROUNDSLIDESHOW_NEXT",
						payload: ""
					},
					notify2: {
						title: "SLIDESHOW_PAUSE",
						icon: "pause",
						notification: "BACKGROUNDSLIDESHOW_PAUSE",
						payload: ""
					},
					notify3: {
						title: "SLIDESHOW_RESUME",
						icon: "play",
						notification: "BACKGROUNDSLIDESHOW_PLAY",
						payload: ""
					},
				},
			}
		},
		{
			module: 'MMM-BackgroundSlideshow',
			disabled: false,
			position: 'fullscreen_below',
			config: {
				imagesTopDirectory: 'modules/MMM-BackgroundSlideshow/exampleImages/link',
				//imagesTopDirectory: 'modules/MMM-BackgroundSlideshow/exampleImages',
				excludedImagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/link/.Trash-1000'],
				filteredDirectoriesKeyword: 'NOSHOW_',
				transitionImages: true,
				recursiveSubDirectories: true,
				//recursiveSubDirectories: false,
				slideshowSpeed: 30000,
				backgroundSize: "contain",
				gradient: ["rgba(0, 0, 0, 0.0) 0%", "rgba(0, 0, 0, 0) 100%"]
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
					{ ipAddress: "XXXXXXXXXXXX", name: "NAS", icon: "laptop" },
					{ ipAddress: "XXXXXXXXXXXX", name: "cuisine", icon: "laptop" },
					{ ipAddress: "XXXXXXXXXXXX", name: "alarme", icon: "laptop" },
					{ ipAddress: "XXXXXXXXXXXX", name: "camera portail", icon: "laptop" },
					{ ipAddress: "XXXXXXXXXXXX", name: "central", icon: "laptop" },
					{ ipAddress: "XXXXXXXXXXXX", name: "garage", icon: "laptop" },
				],
				showUnknown: false,
				showOffline: true,
				keepAlive: 120,
				updateInterval: 60
			}
		},
		{
			module: 'MMM-GoogleMapsTraffic',
			disabled: true,
			position: 'top_left',
			config: {
				key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
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
				appid: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
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
				appid: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
