# WebExtension Helloworld
Simple demo of Firefox's WebExtension

# Test WebExtension
1. Type and go to "about:debugging" in Firefox’s address bar
2. Click "Load Temporary Add-on" and select any file in your add-on's directory. The add-on will now be installed, and will stay until you restart Firefox.
3. Try visiting any page that starts with http:// or https://


# Publish WebExtension
1. Zip your add-on files (the ZIP file must be a ZIP of the add-on's files themselves, not of the containing directory).
2. Create an account on addons.mozilla.org (abbreviated as AMO). 
3. If you already have a Firefox Account, you can use that to log in. Otherwise, click "Register" and you'll be asked to create a Firefox account.
4. Click Tools > Submit a New Add-on, then choose whether to publish it in AMO or not.
5. Upload the zipped add-on to AMO for signing and review. 
6. The AMO server will run some basic checks and immediately notify you about any problems. If you have errors, you must fix them and resubmit. If you only have warnings, it's advisable to address them, but not mandatory: you can continue with the submission.
7. If you have chosen to have the add-on hosted on AMO, AMO will sign the add-on and publish it, and users will then be able to download and install it. If you chose not to publish on AMO, retrieve the signed add-on, and publish it yourself
