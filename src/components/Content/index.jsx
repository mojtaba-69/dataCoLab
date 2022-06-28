import { useParams } from "react-router-dom";

function Index(props) {

    let params = useParams();

    return (
        <div class={`w-full flex justify-center items-center h-96 p-2 mt-5 ${props.content.color} place-items-center rounded`}>
            <p class="py-2">
                {props.content.text}
                <br />
                {params.q}
            </p>
        </div>
    );
}

export default Index;