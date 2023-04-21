# OpenTable Clone
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Restaurant Model
| Field Name   | Data Type  | Description                                                |
|--------------|------------|------------------------------------------------------------|
| id           | integer    | Unique identifier for the record                           |
| name         | text       | Name of the restaurant                                      |
| slug         | text       | Unique identifier used in URLs for the restaurant           |
| price        | enum       | Price range of the restaurant (cheap, regular, or expensive)|
| description  | text       | Description of the restaurant                               |
| main_img     | text       | URL of the main image for the restaurant                    |
| images       | text[]     | Array of URLs for additional images of the restaurant       |
| open_time    | text       | Opening time of the restaurant                              |
| close_time   | text       | Closing time of the restaurant                              |
| items        | Item[]     | Array of items available at the restaurant                  |
| location_id  | integer    | ID of the location where the restaurant is situated         |
| location     | Location   | Location where the restaurant is situated                   |
| cuisine_id   | integer    | ID of the cuisine associated with the restaurant            |
| cuisine      | Cuisine    | Cuisine associated with the restaurant                       |
| created_at   | datetime   | Date and time the record was created                        |
| updated_at   | datetime   | Date and time the record was updated                        |

## Item Model

| Field Name    | Data Type | Description                                               |
|---------------|-----------|-----------------------------------------------------------|
| id            | integer   | Unique identifier for the record                          |
| name          | text      | Name of the item                                          |
| price         | text      | Price of the item                                         |
| description   | text      | Description of the item                                    |
| restaurant_id | integer   | ID of the restaurant that offers the item                  |
| restaurant    | Restaurant| Restaurant that offers the item                            |
| created_at    | datetime  | Date and time the record was created                       |
| updated_at    | datetime  | Date and time the record was updated                       |

## Location Model

| Field Name   | Data Type | Description                           |
|--------------|-----------|---------------------------------------|
| id           | integer   | Unique identifier for the record      |
| name         | text      | Name of the location                   |
| restaurant   | Restaurant[] | Array of restaurants associated with the location |
| created_at   | datetime  | Date and time the record was created  |
| updated_at   | datetime  | Date and time the record was updated  |

## Cuisine Model


| Field Name   | Data Type | Description                           |
|--------------|-----------|---------------------------------------|
| id           | integer   | Unique identifier for the record      |
| name         | text      | Name of the cuisine                    |
| restaurant   | Restaurant[] | Array of restaurants associated with the cuisine |
| created_at   | datetime  | Date and time the record was created  |
| updated_at   | datetime  | Date and time the record was updated  |

## Price Categories

| Enum Value | Description       |
|------------|-------------------|
| CHEAP      | Inexpensive       |
| REGULAR    | Average-priced    |
| EXPENSIVE  | High-end          |
