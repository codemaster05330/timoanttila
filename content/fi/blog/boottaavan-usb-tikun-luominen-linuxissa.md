---
title: Boottaavan USB-muistitikun luominen Linuxilla
createdAt: 2021-07-24T00:23:31.000Z
description: Olitpa asentamassa uutta linux distroa tai kokeilemassa liveä, pitää luoda boottaava USB-muistitikku.
tags: tutoriaalit, linux
---

Olitpa asentamassa uutta linux distroa tai kokeilemassa uutta liveä, pitää luoda boottaava USB tikku. Windows ja MacOS on hyvin tuettu erilaisilla ohjelmistoilla, mutta meille Linux-käyttäjille on tarjolla sisäänrakennettu komentorivillä toimiva dd ja erikseen ladattava ja ajettava Etcher.

Suosittelen Etcheriä niille, jotka eivät ole tottuneet käyttämään Linuxin komentokehotetta. Käyn tässä artikkelissa läpi molemmat vaihtoehdot.

## Komentorivityökalu dd

`dd` on komentoriviapuohjelma Unixille ja Unixin kaltaisille käyttöjärjestelmille, joiden ensisijainen tarkoitus on muuntaa ja kopioida tiedostoja. Unixissa laitteisto, laiteohjaimet ja erityiset laitetiedostot näkyvät tiedostojärjestelmässä kuten tavalliset tiedostot.

Hyvin vaarallinen ohjelma väärissä käsissä, mutta tehokas kaveri jos tietää mitä tekee.

Ensin pitää selvittää USB-tikun polku. Tarvitset root/sudo-oikeudet nähdäksesi tarkemmat tiedot käytössä olevista levyistä.

```
fdisk -l
```

USB-muistitikku käyttää polkua `/dev/sda`. Alla oleva komento tarkistaa, että tiedosto on olemassa ja kopioi sen USB-muistitikulle.

Esimerkkikomennossa on Linux distro ladattu aktiivisen käyttäjän `Downloads`-hakemistoon ja sen nimi on `manjaro-xface-21.0.7-210614-linux510.iso`. Lyhenne `bs`tarkoittaa `blocksize`, jonka suositeltu arvo on `4M`. Arvon suurentaminen nopeuttaa prosessia, mutta tuloksena saattaa myös olla toimimaton tulos. Uudemmissa systeemeissä on mahdollista käyttää lisävalintaa `status`. Se näyttää, yllätys yllätys, prosessin statuksen.

Prosessissa saattaa kestää minuuteista noin kymmeneen riippuen tiedoston koosta ja sisällöstä.

```
cd ~/Downloads
dd if=manjaro-xface-21.0.7-210614-linux510.iso of=/dev/sda bs=4M status=progress
```

Boottaava USB-muistitikku on valmis! Ei tarvita nettiyhteyttä tai uusia sovelluksia koneeseen.

### Tutustu myös:

- [Linux Wiki: dd](https://www.linux.fi/wiki/Dd)
- [`dd` command in Linux](https://www.geeksforgeeks.org/dd-command-linux/)
- [How to Calculate Optimal Blocksize to Use With dd](https://www.baeldung.com/linux/dd-optimal-blocksize)

# Boottaava USB-muistitikku Etcherillä

Olipas se vaikeaa vai mitä? Onneksi balena tarjoaa nykyään kaikille tärkeille alustoille erittäin helppokäyttöisen asennusohjelmiston nimeltä [Etcher](https://www.balena.io/etcher/).

- Lataa ohjelmisto yllä olevasta linkistä
- Plussalle asennustiedosto
- Kovalevylle polku minne asennetaan
- Salamalla vauhdilla eteenpäin

Kun Etcher ilmoittaa asennuksen olevan valmis, voit poistaa USB-muistitikun turvallisesti koneesta tai buutata koneen sillä.