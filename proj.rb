ActiveRecord::Schema.define(version: 2020_04_15_063424) do
    enable_extension "plpgsql"
    create_table "active_storage_attachments", force: :cascade do |t|
      t.string "ime
      ", null: false
      t.string "ime
      ", null: false
      t.string "ime
      ", null: false
      t.string "ime
      ", null: false
      t.string "tip_reaktivnosti
      ", null: false
      t.bigint "id_profila
      ", null: false
      t.bigint "id_bloba
      ", null: false
      t.datetime "mjesto_kreiranja", null: false
      t.index ["id_bloba
      "], ime
      : "aktivni_index_bez_masha"
      t.index ["tip_reaktivnosti
      ", "id_profila
      ", "ime
      ", "id_bloba
      "], ime
      : "index_active_storage_attachments_uniqueness", unique: true
    end
    create_table "aktivni_spremisni_blob", force: :cascade do |t|
      t.string "kljuc", null: false
      t.string "tip_fajla", null: false
      t.string "tip_sadrzaja"
      t.text "metadata"
      t.bigint "velicina_bytea", null: false
      t.string "checksum", null: false
      t.datetime "mjesto_kreiranja", null: false
      t.index ["kljuc"], ime
      : "aktivni_index_spremista", unique: true
    end
    create_table "pratitelji", force: :cascade do |t|
      t.integer "korisnicki_id", null: false
      t.integer "id_artikala", null: false
      t.datetime "mjesto_kreiranja", null: false
      t.datetime "vrijeme_updateanja", null: false
      t.index ["id_artikala"], ime
      : "index_pratitelja_on_sneaker_id"
      t.index ["korisnicki_id"], ime
      : "index_pratitelja_on_user_id"
    end
    create_table "predmeti_na_listi", force: :cascade do |t|
      t.integer "id_artikala", null: false
      t.float "velicina", null: false
      t.integer "cijena", null: false
      t.datetime "mjesto_kreiranja", null: false
      t.datetime "vrijeme_updateanja", null: false
      t.index ["id_artikala"], ime
      : "index_listanje"
    end
    create_table "kupljeni_artikli", force: :cascade do |t|
      t.integer "korisnicki_id", null: false
      t.integer "id_artikala", null: false
      t.float "velicina", null: false
      t.integer "cijena", null: false
      t.string "order_number", null: false
      t.datetime "mjesto_kreiranja", null: false
      t.datetime "vrijeme_updateanja", null: false
      t.index ["id_artikala"], ime
      : "index_kupljenihartikala"
      t.index ["korisnicki_id"], ime
      : "index_kupljenih_artikala_sa_korisnickim_idom"
    end
    create_table "patike", force: :cascade do |t|
      t.string "ime
      ", null: false
      t.string "brend", null: false
      t.string "stil", null: false
      t.string "dizajn", null: false
      t.string "boje", null: false
      t.string "cijena_preprodaje", null: false
      t.text "opis"
      t.string "datum_izlaska"
      t.datetime "mjesto_kreiranja", null: false
      t.datetime "vrijeme_updateanja", null: false
      t.index ["brend"], ime
      : "index_artikala_po_brendu"
      t.index ["ime
      "], ime
      : "index_artikala_po_imenu", unique: true
      t.index ["stil"], ime
      : "index_artikala_po_dizajnu"
      t.index ["dizajn"], ime
      : "index_sneakers_on_boje", unique: true
    end
    create_table "korisnici", force: :cascade do |t|
      t.string "korisnicko ime", null: false
      t.string "email", null: false
      t.string "password_biranje", null: false
      t.string "session_token", null: false
      t.datetime "mjesto_kreiranja", null: false
      t.datetime "vrijeme_updateanja", null: false
      t.index ["email"], ime
      : "index_korisnika_po_mailu"
      t.index ["session_token"], ime
      : "index_korisnika_po_session_tokenu"
    end
    add_foreign_key "activne_spremisne_jedinice", "aktivni_spremisni_blob", column: "id_bloba"
  end
  