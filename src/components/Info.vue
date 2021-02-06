<template>
    <div class="container">
        <div class="info_text">
            <p>
                Hi there, I'm <span>Leandro Rodrigo</span>, an Argentinean Visual Communication Designer and Web Developer, currently based in Berlin.
            </p>
            <p>
                I consider myself a fast learner and am able to easily solve challenges as they show up during any project, such as changes in the requirements, motivation in learning new technologies and tools, or being multifaceted with my tasks.
            </p>
            <p>
                Honestly, I like everything related with image and web-based technologies, that's why I'm always learning new tools and methodologies in order to apply in my daily work.
            </p>
            <p>
                In my career to date, I've been learning a variety of skills, from pixel perfectioning and new trends on web, to database and IT administration, which gave me a range of opportunities to perform many different tasks with all the commitment and dedication it requires.
            </p>
            <p>
                Spending my spare time playing around with Processing, p5js and trying to make some noise with my keyboard.
            </p>
            <p>
                Learning by doing as moto.
            </p>
        </div>

        <ul class="social-media">
            <li
                v-for="item in socialMedia"
                :key="item.id"
                class="social-media__list"
            >
                    <a :href="item.link" target="_blank">{{ item.type }}</a>
                <span class="material-icons">{{ item.icon }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Info',

        data: () => {
            return {
                socialMedia: [
                    { id: 1, type: 'E-mail', link: 'leandrorodrigobs@gmail.com', icon: 'alternate_email' },
                    { id: 2, type: 'GitHub', link: 'https://github.com/learodrigo', icon: 'code' },
                    { id: 3, type: 'P5js', link: 'https://editor.p5js.org/learodrigo/sketches', icon: 'smart_toy' },
                    { id: 4, type: 'CodePen', link: 'https://codepen.io/learodrigo/', icon: 'design_services' },
                    { id: 5, type: 'Instagram', link: 'https://instagram.com/lea.rodrigo.sketch/', icon: 'tonality' },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
