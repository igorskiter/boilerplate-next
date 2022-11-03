# Boilerplate Next

Web app to fill out forms, create login and access dashboard.
- [Boilerplate Next](#boilerplate-next)
- [Requisites](#requisites)
- [Env vars](#env-vars)
  - [app](#app)
- [Starting the server](#starting-the-server)
    - [Start local](#start-local)
- [Examples](#examples)
- [Refs](#refs)

# Requisites

- [Next](https://next.org)

# Env vars

| Name| Description | Get From | Where to store/setup | Default
| --- | --- | --- | --- | ---
|  |  | |  |

## app

1. Create `icons/*` to pwa
2. Duplicate: `cp .env.example .env`
> See [.env.example](/.env.example).
2. Edit: `vim .env`
> without the environment variables the form, login and dashboard pages do not work
3. `yarn install`
# Starting the server
### Start local
```shell
yarn dev
```

# Examples

# Refs

- [Vercel deploy](https://vercel.com/docs/concepts/deployments/overview)
- [Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
- [Server-Side Rendering](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
