/// <refrence path="../util/@types/global.d.ts" />

import * as https from "https";
import * as fs from "fs";

const config = {

    web: {
		userAgent: `Octogo.nl`,
		host: "localhost",
		secure: false,
		get port() { return 0 || (config.web.secure ? 443 : 80); },
		serverOptions: {
			ca: fs.readFileSync(`${__dirname}/ssl/CA-Chain-X1.crt`).toString(),
			cert: fs.readFileSync(`${__dirname}/ssl/plunge.gg.crt`).toString(),
			key: fs.readFileSync(`${__dirname}/ssl/plunge.gg.key`).toString()
		} as https.ServerOptions,
		cookieSecret: "ZTXTfjbMVdqWryvaJz9s9mT2Q3zbxAUeUGU7mwMX"
	}

};

export default config;