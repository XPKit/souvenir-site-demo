# XPKit souvenir collection site demo

## Overview

This project is a [Vue](https://vuejs.org/) web app demonstrating how you can create a souvenir site where visitors to your events can collect their digital assets.

:star: :star: [Demo here](https://souvenir-demo.xpkit.net) :star: :star:

Before using this app it is recommended you read the [souvenir collection case study](https://developer.xpkit.com/case-studies/visitor-moments-souvenirs/) on the developer docs website. This guide will introduce you to the XPKit resources and APIs used in this app.

## Initial setup

Before your event you need to create the required resources in [XPKit Portal](https://portal.xpkit.net):

- **objects** that will be used to create certain activities
- **moments** that group these activities together
- **souvenirs** that define the digital assets associated with moments

To do this navigate to the Assets > Catalogue section in XPKit Portal.


## Running the app

### Set the configuration

- Rename the `config.json.example` file to `config.json` and fill in  the missing values. Under the **xpkit** object the following are required:
    - `account_id`: you can find this by clicking on your name in the main menu of XPKit Portal
    - `experience_id`: the experience ID for the desired event
    - `region`: the installation of XPKit you are using. If you are unsure, the options are listed here in the [docs](https://developer.xpkit.com/getting-started/connecting-to-your-instance-of-xpkit/)
    - `user_identifier`: name of the identifier (profile resource field) visitors use to login. Usually *email*, *qr_code* or *rfid*. Has to be a unique field

### Install the dependencies

```sh
npm install
```

### Run the app

```sh
npm run dev
```

### Compile and minify for production

```sh
npm run build
```

## Support

- [XPKit Developer Docs](https://developer.xpkit.com)

## License
[ISC](LICENSE)