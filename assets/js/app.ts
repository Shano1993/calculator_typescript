import "../styles/style.scss";

let result: HTMLInputElement = document.getElementById("result") as HTMLInputElement;
let buttonNumber: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("button_number") as HTMLCollectionOf<HTMLButtonElement>;
let operation: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("operation") as HTMLCollectionOf<HTMLButtonElement>;
let resultButton: HTMLButtonElement = document.getElementById("result_button") as HTMLButtonElement;

let data1: string;
let data2: string;

function valueButtons(collection: HTMLCollectionOf<HTMLButtonElement>) {
    for (let button of collection){
        if (button) {
            button.addEventListener("click", function (): string {
                data1 = button.innerHTML;
                return result.innerHTML += data1;
            })
        }
        if (resultButton) {
            resultButton.addEventListener("click", function () {
                data2 = button.innerHTML;
                result.value = "";

            })
        }
    }
}

valueButtons(buttonNumber);
valueButtons(operation);



