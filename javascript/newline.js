function paste_func() {
    navigator.clipboard.readText().then(
        (clipText) => document.getElementById("input").value = clipText
    )
}

function get_text() {
    return document.getElementById("input").value
}

function remove_newline(text) {
    if (document.getElementById("InsertSpace").checked) {
        return text.replace(/\r?\n/g, " ")
    } else {
        return text.replace(/\r?\n/g, "")
    }
}

function copy(text) {
    navigator.clipboard.writeText(text).then(
        success => alert('Copy complete😆'),
        error => alert('Something wrong😭')
    )
}

remove.onclick = function () {
    let text = get_text();
    text = remove_newline(text);
    copy(text);
    document.getElementById("paste").focus()
};

paste.onclick = function () {
    paste_func();
    let text = get_text();
    document.getElementById("remove").focus()
};

const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
navigator.permissions.query(queryOpts).then(
    (permissionStatus) => permissionStatus.onchange = () => {
        console.log(permissionStatus.state);
    }
);