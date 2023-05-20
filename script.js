function getFestival() {
  var inputVal = document.getElementById("input").value;
  document.getElementById("not").style.display = "none";
  document.getElementById("image").style.display = "block";
  var today = new Date(inputVal);
  var todayMonth = today.getMonth();
  var todayDate = today.getDate();
  var todayYear = today.getFullYear();
  var todayDay = today.getDay();
  var months = [
    "Jan",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (
    todayYear === 2023 &&
    months[todayMonth] === "Jan" &&
    todayDate === 1 &&
    days[todayDay] === "Sunday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCShQFahG24FszXhJtU34NchpTFbOsbDUFw&usqp=CAU`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "New Year's Day";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "Jan" &&
    todayDate === 26 &&
    days[todayDay] === "Thursday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://therealschool.in/blog/wp-content/uploads/2022/02/Basant-Panchami-drawing-for-kids-1200x900.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Basant Panchami";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "Feburary" &&
    todayDate === 5 &&
    days[todayDay] === "Sunday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://img.freepik.com/free-vector/happy-pakistan-day-hand-drawn_23-2148846041.jpg?w=2000`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Pakistan Day";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "Feburary" &&
    todayDate === 19 &&
    days[todayDay] === "Sunday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://www.thefestivalwishes.com/pixlab/uploads/sample_uploads/webp/1676480133_create-personal-touch-on-your-shab-e-meraj-tribute-with-name-image.webp`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Shab e-Meraj";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "March" &&
    todayDate === 7 &&
    days[todayDay] === "Tuesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Happy_Holi_1678110704.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Holi";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "March" &&
    todayDate === 23 &&
    days[todayDay] === "Thursday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://img.freepik.com/free-vector/realistic-three-dimensional-ramadan-kareem-illustration_52683-57837.jpg?w=2000`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Ramadan Start";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 5 &&
    days[todayDay] === "Friday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://www.vedantu.com/seo/content-images/12300c6f-dd1e-4a95-8a55-135a60a55d48.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Good Friday";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 9 &&
    days[todayDay] === "Sunday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://img.freepik.com/free-vector/flat-easter-sunday-illustration_23-2148893470.jpg?w=2000`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Easter Sunday";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 14 &&
    days[todayDay] === "Friday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://static.toiimg.com/photo/msid-90828811/90828811.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Baishaki";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 21 &&
    days[todayDay] === "Friday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://pkrevenue.com/wp-content/uploads/2021/05/eid_announcement.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Eid-ul-Fitr Holiday";
  }

  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 21 &&
    days[todayDay] === "Friday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://english.sanjeevnitoday.com/static/c1e/client/84090/uploaded/c0a4c4ae63d202d5be1213ba76192f94.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Ridván";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 22 &&
    days[todayDay] === "Saturday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://im.indiatimes.in/content/2023/Apr/1_644109f345d81.jpg?w=1200&h=900&cc=1`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Eid-ul-Fitr";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 23 &&
    days[todayDay] === "Sunday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://pkrevenue.com/wp-content/uploads/2021/05/eid_announcement.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Eid-ul-Fitr Holiday";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 24 &&
    days[todayDay] === "Monday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://pkrevenue.com/wp-content/uploads/2021/05/eid_announcement.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "Monday" + " , ";
    document.getElementById("festival").innerHTML = "Eid-ul-Fitr Holiday";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 25 &&
    days[todayDay] === "Tuesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://pkrevenue.com/wp-content/uploads/2021/05/eid_announcement.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Eid-ul-Fitr Holiday";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "May" &&
    todayDate === 1 &&
    days[todayDay] === "Monday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://img.freepik.com/free-vector/organic-flat-labour-day-illustration_23-2148892301.jpg?w=2000`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "Monday" + " , ";
    document.getElementById("festival").innerHTML = "Labour Day";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "May" &&
    todayDate === 5 &&
    days[todayDay] === "Friday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://images.indianexpress.com/2021/05/wp.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Buddha Purnima";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "June" &&
    todayDate === 21 &&
    days[todayDay] === "Wednesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://feeds.abplive.com/onecms/images/uploaded-images/2022/06/20/88cfc79362318c02a5aeedcf6d4a62a8_original.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "Wednesday" + " , ";
    document.getElementById("festival").innerHTML = "June Solstice";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "June" &&
    todayDate === 29 &&
    days[todayDay] === "Thursday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://i1.wp.com/gangatimes.com/wp-content/uploads/2022/07/Eid-Ul-Adha-Pictures-1200x684-1-edited.png`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML =
      "Eid al-Adha (Tentative Date)";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "June" &&
    todayDate === 30 &&
    days[todayDay] === "Friday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://c.tadst.com/gfx/900x506/sacrifice-sheep.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML =
      "Eid al-Adha Holiday (Tentative Date)";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "July" &&
    todayDate === 1 &&
    days[todayDay] === "Saturday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://arynews.tv/wp-content/uploads/2022/05/SBP-banks-Saturday-holiday-3.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "July 1 Bank Holiday";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "July" &&
    todayDate === 1 &&
    days[todayDay] === "Saturday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://c.tadst.com/gfx/900x506/sacrifice-sheep.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML =
      "Eid al-Adha Holiday (Tentative Date)";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "July" &&
    todayDate === 27 &&
    days[todayDay] === "Thursday"
  ) {
    document.getElementById("image").src = `./images/14.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML =
      "https://zamzam.com/blog/wp-content/uploads/2021/06/shutterstock_1497437831.jpg";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "July" &&
    todayDate === 28 &&
    days[todayDay] === "Friday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://www.geo.tv/assets/uploads/updates/2022-08-03/431501_815178_updates.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML =
      "Ashura Holiday (Tentative Date)";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "April" &&
    todayDate === 25 &&
    days[todayDay] === "Tuesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://pkrevenue.com/wp-content/uploads/2021/05/eid_announcement.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Eid-ul-Fitr Holiday";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "August" &&
    todayDate === 14 &&
    days[todayDay] === "Monday"
  ) {
    document.getElementById("image").src = `./images/14.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "MondayAugust" + " , ";
    document.getElementById("festival").innerHTML = "Independence Day";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "August" &&
    todayDate === 30 &&
    days[todayDay] === "Wednesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://images.indianexpress.com/2019/08/raksha-bandhan_759.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "WednesdayAugust" + " , ";
    document.getElementById("festival").innerHTML = "Raksha Bandhan";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "September" &&
    todayDate === 6 &&
    days[todayDay] === "Wednesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://i.dawn.com/primary/2016/11/5832b95670c11.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "Wednesday" + " , ";
    document.getElementById("festival").innerHTML = "Chelum (Tentative Date)";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "September" &&
    todayDate === 6 &&
    days[todayDay] === "Wednesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://media.istockphoto.com/id/1171314049/vector/happy-defence-day-of-pakistan-6th-september.jpg?s=170667a&w=0&k=20&c=TDbfm-Gp_lKIpr-HBWdPhezCy-KXSP5dRnhfNR8PhAA=`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "Wednesday" + " , ";
    document.getElementById("festival").innerHTML = "Defence Day";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "September" &&
    todayDate === 23 &&
    days[todayDay] === "Saturday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://c.tadst.com/gfx/600x337/september-equinox-dark.png?1`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "September Equinox";
  }
  // Date Time
  else if (
    todayYear === 2023 &&
    months[todayMonth] === "September" &&
    todayDate === 26 &&
    days[todayDay] === "Tuesday"
  ) {
    document.getElementById(
      "image"
    ).src = `.https://www.timeanddate.com/scripts/cityog.php?title=Holidays%20%26%20Observations&tint=0xB53E38&country=Today%20and%20Upcoming&state=Pakistan&image=islamabad1`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML =
      "Giarhwin Sharief (Tentative Date)";
  } else if (
    todayYear === 2023 &&
    months[todayMonth] === "September" &&
    todayDate === 27 &&
    days[todayDay] === "Wednesday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://images.indianexpress.com/2020/10/Eid-E-Milad-Un-Nabi-2019_amp.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "Wednesday" + " , ";
    document.getElementById("festival").innerHTML =
      "Eid Milad un-Nabi (Tentative Date)";
  } else if (
    todayYear === 2023 &&
    months[todayMonth] === "November" &&
    todayDate === 9 &&
    days[todayDay] === "Thursday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/634d11129518103.616d2eab9309e.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Iqbal Day";
  } else if (
    todayYear === 2023 &&
    months[todayMonth] === "November" &&
    todayDate === 12 &&
    days[todayDay] === "Sunday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://media.cnn.com/api/v1/images/stellar/prod/221021144246-diwali-lights-stock.jpg?c=3x2`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "Diwali/Deepavali";
  } else if (
    todayYear === 2023 &&
    months[todayMonth] === "December" &&
    todayDate === 25 &&
    days[todayDay] === "Monday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://i.pinimg.com/originals/64/e2/48/64e2488974e69f6d911960da19411730.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = "Monday" + " , ";
    document.getElementById("festival").innerHTML = "Quaid-e-Azam Day";
  } else if (
    todayYear === 2023 &&
    months[todayMonth] === "December" &&
    todayDate === 31 &&
    days[todayDay] === "Sunday"
  ) {
    document.getElementById(
      "image"
    ).src = `https://static.vecteezy.com/system/resources/thumbnails/007/955/592/small/2023-happy-new-year-s-eve-background-suitable-for-luxury-party-invitations-layout-with-luxury-numbers-clock-golden-glitter-and-confetti-vector.jpg`;
    document.getElementById("date").innerHTML = todayDate + " ,";
    document.getElementById("month").innerHTML = months[todayMonth];
    document.getElementById("day").innerHTML = days[todayDay] + " , ";
    document.getElementById("festival").innerHTML = "New Year's Eve";
  } else {
    alert("Festival Doesn't Exist with this Date");
    window.location.reload();
  }
}
