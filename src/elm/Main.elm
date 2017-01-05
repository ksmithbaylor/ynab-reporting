module Main exposing (..)

import Html exposing (Html, div, button, text)
import Html.Events exposing (onClick)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }



-- TYPES


type alias Model =
    Int


init : ( Model, Cmd Msg )
init =
    ( 42, Cmd.none )



-- UPDATE


type Msg
    = Inc
    | Dec


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Inc ->
            ( model + 1, Cmd.none )

        Dec ->
            ( model - 1, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Inc ] [ text "plus" ]
        , button [ onClick Dec ] [ text "minus" ]
        , text (toString model)
        ]



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
