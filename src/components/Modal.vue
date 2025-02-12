<template>
    <Teleport to="body">
        <div class="content-modal">
            <div class="modal">
                <div class="close-button">
                    <PhXCircle :size="30" class="text" id="close-button"/>
                </div>
                <h3 style="text-align: center;">SOBRE</h3>
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup>
import { PhXCircle } from "@phosphor-icons/vue"
</script>
<style scoped lang="scss">
div.content-modal {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(153, 161, 175, .5);
    color: var(--text-color);
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .modal {
        position: relative;
        width: 500px;
        background-color: white;
        border-radius: 5px;
        padding: 10px;

        .close-button {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            .text {
                cursor: pointer;
                color: black;
                &:hover{
                    color: rgb(199, 0, 54);
                }
            }
        }
    }

}
</style>