source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# GitHub Pages' native build ignores this Gemfile entirely — it always builds
# with its own pinned `github-pages` gem server-side, restricted to whatever
# plugins are whitelisted and declared in _config.yml. So this Gemfile only
# needs to satisfy local development, and using plain `jekyll` here (instead
# of the `github-pages` meta-gem) avoids pulling in nokogiri/jekyll-mentions,
# whose native extensions can fail to build on some local machines.
gem "jekyll", "~> 4.3"

# Plugins (must stay within GitHub Pages' whitelisted plugin list)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-redirect-from"
end

gem "webrick", "~> 1.8"
