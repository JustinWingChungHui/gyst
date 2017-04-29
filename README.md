# GYS*T

This is the website for gyst.org.uk and hopefully this will provide an overview of how it works and how to get up and running to edit it.

## Jekyll

The site is built using Jekyll.  The Jekyll website provides an excellent overview http://jekyllrb.com/

To develop for it you will need to:
  - Install Ruby https://www.ruby-lang.org/en/documentation/installation/
  - Install Jekyll

    `gem install jekyll bundler`  
  - Clone the repository

    `git clone https://github.com/JustinWingChungHui/gyst.git`  
    `cd gyst`
  - Build the site

    `bundle exec jekyll serve`

Open your browser to http://localhost:4000 and hey presto!

## Deployment

The site is set up to deploy to Amazon Web Services S3 https://aws.amazon.com/s3/ and to be served via Cloudfront https://aws.amazon.com/cloudfront/

Gulp (http://gulpjs.com/) is used to minify files, to deploy to AWS and to invalidate the Cloudfront cache.

To run the deployment you will need to:
  - Install the AWS CLI https://aws.amazon.com/cli/
  - Configure the AWS CLI with the access keys to the site

    `aws configure`
  - Install Node from https://nodejs.org/
  - Install Gulp-Cli

    `npm install gulp-cli -g`
  - Go to the gyst directory and install the node packages

    `npm install`
  - Run Gulp
  
    `gulp`

Remember you need to bundle the Jekyll files (see above) before running Gulp!

## License

This website is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
