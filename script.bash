set -ex

git add -A
git commit -m "Build Travis #$TRAVIS_BUILD_NUMBER"
git push -f "https://${GH_TOKEN}@github.com/raphaelfabeni/raphaelfabeni.github.io"