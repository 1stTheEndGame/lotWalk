# Versioning (GitHub Best Practice)

1. **Upload files** (this folder’s contents) to the `lotWalk` repo → write a clear **commit message**.
2. Go to **Releases → Draft a new release**.
3. Create **Tag** `vX.Y.Z` from branch **main**. Title = `lotWalk vX.Y.Z`. Paste changelog. **Publish**.
4. **Settings → Pages**: Source = **Deploy from a branch** → Branch **main** / root.
5. To roll back: **Revert** the bad commit, or create a branch from an older **tag** and point Pages to it.
6. Keep `main` as live. Use branches only for staging or hotfixing an old tag.
