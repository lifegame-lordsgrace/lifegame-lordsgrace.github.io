# Deploy new register web app to heroku
deploy:
	cd client/ && \
    npm run build && \
    (git add -f build || true) && \
    (git commit -m 'Adding `build` to source control for heroku deploy') || true && \
    cd ../../ && git subtree push --prefix register2 heroku master
