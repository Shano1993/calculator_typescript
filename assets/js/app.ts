import "../styles/style.scss";

let result: HTMLSpanElement = document.getElementById("result") as HTMLSpanElement;
let buttonNumber: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("button_number") as HTMLCollectionOf<HTMLButtonElement>;
let operation: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("operation") as HTMLCollectionOf<HTMLButtonElement>;
let resultButton: HTMLButtonElement = document.getElementById("result_button") as HTMLButtonElement;

for (let button of buttonNumber){
    if (button) {
        button.addEventListener("click", function (): string {
            let dataNumber: string = button.innerHTML;
            return result.innerHTML += dataNumber;
        })
    }
}

for (let button of operation) {
    if (button) {
        button.addEventListener("click", function (): string {
            let data: string = button.innerHTML;
            return result.innerHTML += data;
        })
    }
}

resultButton.addEventListener("click", function (): string {
    return result.innerHTML = eval(result.innerHTML);
})

