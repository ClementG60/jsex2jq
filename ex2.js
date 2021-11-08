function moy() {
    let m1 = mark1.value
    let m2 = mark2.value
    let m3 = mark3.value
    let m4 = mark4.value
    let m5 = mark5.value
    if ((m1 >= 0 && m1 <= 20) && (m2 >= 0 && m2 <= 20) && (m3 >= 0 && m3 <= 20) && (m4 >= 0 && m4 <= 20) && (m5 >= 0 && m5 <= 20)) {
        let sum = parseFloat(m1) + parseFloat(m2) + parseFloat(m3) + parseFloat(m4) + parseFloat(m5)
        let moy = sum / 5
        if (moy < 10) {
            $("#result").text("Votre moyenne est de : " + moy + ". Appreciation : En dessous de la moyenne")
        } else if (moy >= 10 && moy < 13) {
            $("#result").text("Votre moyenne est de : " + moy +". Appreciation : Moyen")
        } else if (moy >= 13 && moy < 16) {
            $("#result").text("Votre moyenne est de : " + moy +". Appreciation : Bien")
        } else if (moy >= 16 && moy < 20) {
            $("#result").text("Votre moyenne est de : " + moy +". Appreciation : Très bien")
        } else {
            $("#result").text("Votre moyenne est de : " + moy +". Appreciation : Excellent")
        }
    } else {
        $("#result").text("Veuillez entrer des notes comprises entre 0 et 20.")
    }
}
