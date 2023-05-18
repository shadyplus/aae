setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "Cordis Meridian";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
    
     let gg = new Date; 
    gg.setDate(gg.getDate() + 1 - 1);
    
		const massange = [{
		  m:  "مرحبًا ، اسمي لورانس بيتر. أنا طبيب قلب وجراح. مرحبا بكم في موقعي."
		}, {
			m: "أقدم هنا تشخيصات مجانية عبر الإنترنت وتوصيات مخصصة ساعدت الآلاف من مرضاي في علاج ارتفاع ضغط الدم."
		}, {
			m: "لمعرفة المزيد عن نصائحي لإدارة ارتفاع ضغط الدم ، أجب عن بعض الأسئلة."
		}, {
			m: '<p class="quest">منذ متى وأنت تعاني من ارتفاع ضغط الدم؟</p>'
		}, {
			m: '<p class="quest">ما هو مستوى الضغط الانقباضي؟</p>'
		}, {
			m: '<p class="quest">ما هي نشاطاتك اليومية ؟</p>'
		}, {
			m: '<p class="quest">ما هو نوع الطعام الذي تتناوله ؟</p>'
		}, {
			m: '<p class="quest">كم عمرك ؟</p>'
		}, {
			m: '<p class="quest">ما هو وزنك الحالي ؟</p>'
		}, {
			m: '<p class="quest">ما هو مستوى الضغط الانبساطي؟</p>'
		}, {
			m: "شكرًا لك. نعم ، لديك بالفعل ارتفاع في ضغط الدم ، ويمكن أن يؤدي تطويره إلى مضاعفات خطيرة. لكنك قادر تمامًا على التخلص منه. السبب الرئيسي لارتفاع ضغط الدم هو تلوث الأوعية الدموية وضعف وظائف الكلى. نتيجة لذلك ، تقل سرعة الأوعية الدموية ويتراكم الماء والأملاح في الأنسجة."
		}, {
			m: "في حالتك ، تحتاج إلى تناول الكاسيا ، مستخلص الثوم ، الجينسنغ الأحمر ، الفيتامينات B12 ، C ، D ، E ، Mg."
		}, {
			m: "يمتلك مستخلص الكاسيا والثوم تأثيرًا معقدًا على تنظيف الأوعية الدموية واستعادة مرونة الأوعية الدموية ، مما يسمح لك بتقليل الضغط من الجرعة الأولى."
		}, {
			m: "يعمل الجينسنغ الأحمر مع الفيتامينات على تجديد أنسجة الكلى التالفة واستعادة وظائفها."
		}, {
			m: "توفر الفيتامينات B12 و E و Mg استعادة شاملة للخلايا والأنسجة المتضررة من ارتفاع ضغط الدم. على وجه الخصوص ، هذه هي الجهاز العصبي والقلب والأوعية الدموية والرؤية والبنكرياس."
		}, {
			m: "فيتامين C و D يقويان جهاز المناعة."
		}, {
			m: "يمكنك استخدام جميع المكونات المدرجة بشكل منفصل ، ولكن من الأكثر ملاءمة وفعالية استخدامها معًا في منتج مثل Cordis Meridian. يتم تقديمها في شكل معينات بأقصى تركيز للعناصر الغذائية."
		}, {
			m: 'من أجل الشفاء المناسب ، يمكنك ببساطة تناول كل هذه المكونات ثلاث مرات في اليوم: صباحًا ، وبعد الظهر ، ومساءً. في غضون شهر واحد فقط ، يمكنك تحقيق هدفك.'
		}, {
			m: 'هذا هو شكل المنتج الذي تجتمع به كل هذه الخصائص : <br><br> <img src="img/prod.png" class="product-img" style="width: 100%; max-width: 240px;"> '
		}, {
			m: "يحتوي هذا المنتج على مستخلصات طبيعية عالية التركيز تؤدي إلى الشفاء الذاتي للجسم والتنظيف الشامل للأوعية الدموية واستعادة مرونتها."
		}, {
			m: "لذلك فإن Cordis Meridian يقلل بشكل فعال من مستوى ضغط الدم ويحافظ عليه في المعدل الطبيعي بشكل مستمر ، كما أن Cordis Meridian ينشط أيضًا عملية تقوية جهاز المناعة والحالة العامة للجسم."
		}, {
			m: "نتيجة لذلك ، ستشعر بالصحة والحيوية والهدوء. ستختفي أعراض الألم. سوف تمرض بشكل أقل وتنسى ما هو ارتفاع ضغط الدم."
		}, {
			m: 'فيما يلي بعض نتائج مرضاي الذين تخلصوا من ارتفاع ضغط الدم باستخدام المكمل الغذائي Cordis Meridian: <br> <br><img src="img/1.jpg"> <br> <img src="img/2.jpg"> <br> <img src="img/3.jpg"> <br> <img src="img/4.jpg"> '
		}, {
			m: "بناءً على عمرك ومستويات ضغط الدم الحالية ونمط حياتك ، فإن المدة المثالية لاستخدام هذا المكمل الغذائي هي حوالي 30 يومًا في المتوسط."
		}, {
			m: "خلال هذه الفترة ، سيتم تطهير جسمك من الكوليسترول ، وسيعود ضغط الدم إلى طبيعته وسيتحسن أداء جميع أنظمة الجسم."
		}, {
            m: "لدي نبأ عظيم بالنسبة لك! لقد اتصلت بالشركة المصنعة ورتبت عرضًا ترويجيًا لمرضاي. العرض ساري حتى " + `${gg.getDate() + " " + months[gg.getMonth()]+ " "}` + " فبراير ضمنا. حتى نهاية العرض الترويجي ، يمكن الحصول على منتج «Cordis Meridian» الأصلي بخصم يصل إلى 50٪ من خلال المشاركة في السحب! "
		}, {
			m: "“للمشاركة في السحب ، انقر فوق الزر SPIN أدناه. في الوقت الحالي ، باقي الباقات الترويجية في الجزائر: 17 قطعة ، لذا أنصحك بالإسراع!”"
		}];
var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    // speedtext = 0,
    speedtext = 55,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="img-doc"><img src="img/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">لورنس بيتر</span><div class="chat-content-desc-item manager ch1"><p class="text text_img" id="mass' + mass_id + '"></p></div><p class="message-time" id="time">' + t + '</p></div></div>';
    $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
        let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><span class="doc-name doc-dir">أنت</span><div class="chat-content-desc-item user"><p class="text" class="users_mass">' + e + "</p></div>"+ '<p className="message-time new_time" id="time">' + (("0" + s.getHours()).slice(-2) + ':' + t) + '</p></div></div>';
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}

function question1() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">تصل إلى 5 سنوات</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">5-10 سنوات</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">10-15 سنوات</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">أكثر من 15 عاما</span></div></div>')
}

function choise1() {
	$(".question1M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("تصل إلى 5 سنوات"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question1W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("5-10 سنوات"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question1P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("10-15 سنوات"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question1T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 15 عاما"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question2() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">حتى 160</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">161-180</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">181-200</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">فوق 200</span></div></div>')
}

function choise2() {
	$(".question2M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("محتى 160"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question2W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("161-180"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question2P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("181-200"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question2T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("فوق 200"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question3() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">أنا امارس الرياضة من  3 - 5 مرات بالأسبوع </span></div><div class="chat-content-buttons-gender-block"><span class="question3W">أنا امارس الرياضة من 1 - 3 مرات بالأسبوع </span></div><div class="chat-content-buttons-gender-block"><span class="question3P">أنا لا امارس الرياضة, و لكن أمشي كثيرا </span></div><div class="chat-content-buttons-gender-block"><span class="question3T">أسلوب حياتي مستقر إلي حد ما</span></div></div>')
}

function choise3() {
	$(".question3M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا امارس الرياضة من  3 - 5 مرات بالأسبوع "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question3W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا امارس الرياضة من 1 - 3 مرات بالأسبوع "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question3P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا لا امارس الرياضة, و لكن أمشي كثيرا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question3T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أسلوب حياتي مستقر إلي حد ما"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question4() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">طعام طبيعي, لا حلويات أو معجنات</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">تقريباً 50% حلويات و 50% طعام طبيعي</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">أنا احب الوجبات السريعة و الجاهزة و الحلويات </span></div><div class="chat-content-buttons-gender-block"><span class="question4T">أتناول اطعمة غير صحية كثيراً</span></div></div>')
}

function choise4() {
	$(".question4M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("طعام طبيعي, لا حلويات أو معجنات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question4W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("تقريباً 50% حلويات و 50% طعام طبيعي"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question4P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا احب الوجبات السريعة و الجاهزة و الحلويات "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question4T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أتناول اطعمة غير صحية كثيراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question5() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">أقل من 20 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">من 20 - 30 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">من 31 - 40 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">من 41 - 50 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">أكثر من 50 عاماً</span></div></div>')
}

function choise5() {
	$(".question5M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 20 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 20 - 30 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 31 - 40 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 41 - 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5G").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question6() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">حتي 60 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">من 60 إلي 70 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">من 71 إلي 80 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">من 81 إلي 90 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">أكثر من 90 كجم</span></div></div>')
}

function choise6() {
	$(".question6M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتي 60 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 60 إلي 70 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 71 إلي 80 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 81 إلي 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6O").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question7() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">ما يصل الى 100</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">101-120</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">121-140</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">فوق 140</span></div></div>')
}

function choise7() {
	$(".question7M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ما يصل الى 100"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question7W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("101-120"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question7P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("121-140"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question7G").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("فوق 140"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}
setTimeout(() => {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="img-doc"><img src="img/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">لورنس بيتر</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' + mass_id + '"></p></div><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app()
                }
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});

function viewDiv(){
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";
  };

  function viewDiv2(){
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";

  };
  function viewDiv3(){
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";

  };
  function viewDiv4(){
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";

  };
