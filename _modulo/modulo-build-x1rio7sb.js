window.moduloBuild = window.moduloBuild || { modules: {}, nameToHash: {} };

window.moduloBuild.modules["x1h0vjl4"] = function configuration (modulo) {

     function setupFathom(code) {
        // Check common things we skip
        const host = window.location.host;
        if (host.startsWith('localhost') ||
                host.includes('.local') ||
                host.startsWith('127') ||
                host.startsWith('192') ||
                host.startsWith('dev--'))  {
            return;
        }
        (function(f, a, t, h, o, m){
            a[h]=a[h]||function(){
                (a[h].q=a[h].q||[]).push(arguments)
            };
            o=f.createElement('script'),
            m=f.getElementsByTagName('script')[0];
            o.async=1; o.src=t; o.id='fathom-script';
            m.parentNode.insertBefore(o,m)
        })(document, window, '//an.michaelb.org/tracker.js', 'fathom');
        fathom('set', 'siteId', code);
        fathom('trackPageview');
    }
    setupFathom('JUSMY');

};
window.moduloBuild.nameToHash.configuration = "x1h0vjl4";

window.moduloBuild.modules["xx5qsu45"] = function library1_configuration (modulo) {

    modulo.register('templateFilter', function hlinperson (text) {
        return text
            .replace(/(in.person)/gi, '<span class="text--hlinperson">$1</span>')
            .replace(/(on.site)/gi, '<span class="text--hlinperson">$1</span>');
    });

};
window.moduloBuild.nameToHash.library1_configuration = "xx5qsu45";

window.moduloBuild.modules["xx20j8gb"] = function library_Page (modulo) {

            const def = modulo.definitions['library_Page'];
            class x_Page extends window.HTMLElement {
                constructor() { super(); this.init(); }
            }
            modulo.registry.utils.initComponentClass(modulo, def, x_Page);
            window.customElements.define(def.TagName, x_Page);
            return x_Page;
        
};
window.moduloBuild.nameToHash.library_Page = "xx20j8gb";

window.moduloBuild.modules["xxsvb7q8"] = function library_FeaturedTestimonials (modulo) {

            const def = modulo.definitions['library_FeaturedTestimonials'];
            class x_FeaturedTestimonials extends window.HTMLElement {
                constructor() { super(); this.init(); }
            }
            modulo.registry.utils.initComponentClass(modulo, def, x_FeaturedTestimonials);
            window.customElements.define(def.TagName, x_FeaturedTestimonials);
            return x_FeaturedTestimonials;
        
};
window.moduloBuild.nameToHash.library_FeaturedTestimonials = "xxsvb7q8";

window.moduloBuild.modules["x1d6aghq"] = function library_Testimonials (modulo) {

            const def = modulo.definitions['library_Testimonials'];
            class x_Testimonials extends window.HTMLElement {
                constructor() { super(); this.init(); }
            }
            modulo.registry.utils.initComponentClass(modulo, def, x_Testimonials);
            window.customElements.define(def.TagName, x_Testimonials);
            return x_Testimonials;
        
};
window.moduloBuild.nameToHash.library_Testimonials = "x1d6aghq";

window.moduloBuild.modules["x1ldm2gf"] = function library_FeaturedArticles (modulo) {

            const def = modulo.definitions['library_FeaturedArticles'];
            class x_FeaturedArticles extends window.HTMLElement {
                constructor() { super(); this.init(); }
            }
            modulo.registry.utils.initComponentClass(modulo, def, x_FeaturedArticles);
            window.customElements.define(def.TagName, x_FeaturedArticles);
            return x_FeaturedArticles;
        
};
window.moduloBuild.nameToHash.library_FeaturedArticles = "x1ldm2gf";

window.moduloBuild.modules["x1qvrknm"] = function library_Page_script (modulo) {
var script = { exports: {} }; 

        function prepareCallback() {
            // For now, store the navigation array and generate year in JS
            return {
                currentYear: (new Date()).getFullYear(),
                navigation: [
                    /*{
                        title: "Start",
                        file: "index.html",
                    },*/
                    {
                        title: "Courses",
                        file: "courses/",
                    },
                    {
                        title: "Results",
                        file: "results/",
                    },
                    {
                        title: "Learn",
                        //file: "index.html#learn",
                        file: "learn/",
                    },
                    {
                        title: "Outreach",
                        file: "outreach/",
                    },
                ],
            };
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function (o) {}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_Page_script = "x1qvrknm";

window.moduloBuild.modules["xxbcstkp"] = function library_FeaturedTestimonials_staticdata (modulo) {
return [{"name":"Anthony Sifontes","img":"anthony.jpg","location":"New Orleans, Louisiana","profession":"Software Engineer @ Amino","linkedin":"anthonysifontes","featured":"Software Engineer","pullquote":"I eventually received an offer to be a Software Engineer at an exciting\n            healthcare start-up, and only 11 weeks into the program.","text":"\n            My career thus far had been in data analytics. I wanted to\n            transition to a developer role and ultimately be able to create and\n            turn my ideas into reality. I had not taken any coding courses\n            before this, only online tutorials and books, so I was not sure\n            what to expect.  <strong>Class after class, I was blown away by the\n            passion Michael and his team brought to each and every\n            lesson!</strong> The classes were lively, balanced between lecture,\n            demonstrations, guided coding activities, and group work, while\n            still being accessible to a wide range of experience levels.\n\n            A couple of months into the course, I started applying for\n            developer positions, and soon I was excited to be invited for a\n            round of on-site interviews. <strong>Michael was very supportive,\n            coaching me on how to best present my work experience, and guiding\n            me through a mock \"whiteboard\" interview.</strong> Every interview\n            was more challenging than the last, but all of the coaching and\n            prep received at Kickstart beforehand was critical to my moving\n            forward in the process. You can imagine my excitement when I\n            eventually received an offer to be a Software Engineer at an\n            exciting healthcare start-up, and only 11 weeks into the program!\n            Now, I've been at my new position for several months, and I love\n            it.  The work we did in class was instrumental in preparing me for\n            my new day-to-day duties.  I'm very thankful to the Kickstart\n            Coding team and the help they provided in transitioning to my new\n            software engineering career.\n        "},{"name":"Andrew Thorton","img":"andrew.jpg","location":"Alameda, California","profession":"Data Engineer @ Lyft","featured":"Data Engineer","linkedin":"andrew-w-thornton","pullquote":"Using my newly acquired skills, I got a great new job as a Data\n            Engineer just a couple of weeks after finishing the Kickstart Coding\n            course.","text":"\n            After spending years as a software project and product manager flirting\n            with the idea of becoming a software engineer, I finally got up the\n            courage to sign up for a coding bootcamp. I looked at many different\n            options and chose Kickstart Coding because it provides excellent value\n            and is staffed by people that are clearly passionate about teaching\n            technology. I enjoyed the in-class lessons which are an engaging mix of\n            lecture, live-coding walkthroughs, and activities. The homework\n            assignments and group projects built nicely on the stuff we learned in\n            class and helped to reinforce the concepts with very practical\n            examples. <strong>The curriculum does a masterful job of challenging\n            people with some coding experience while also being accessible to\n            people with no coding background at all.</strong> While the vast\n            majority of the curriculum is very focused on teaching specific\n            languages and frameworks, the last couple lessons of the Front-End\n            portion of the course are focused on some more general concepts that\n            were extremely helpful in preparing me for interviews. Using my newly\n            acquired skills, I got a great new job as a Data Engineer just a couple\n            of weeks after finishing the Kickstart Coding course. <strong>I would\n            recommend Kickstart Coding to everyone, even if you don't want a job as\n            a software engineer. Learning to code in this setting was really\n            fun!</strong>\n        "},{"name":"Nicol Hawkins","featured":"Platform Specialist","img":"nicol.jpg","location":"San Franciso, California","profession":"Platform Specialist @ Amplitude","linkedin":"nicol-hawkins","featured_on_frontpage":true,"pullquote":"Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.","featured_text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  <strong>Kickstart Coding is more affordable\n            than most coding bootcamps and the curriculum is top-notch while having\n            a lot of repeat value.</strong> [...] I am blown away by how much I\n            learned since my first day at Kickstart Coding; from my first HTML file\n            all the way to navigating complex frameworks and implementing APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning.\n        ","text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  Kickstart Coding is more affordable than\n            most coding bootcamps and the curriculum is top-notch while having a\n            lot of repeat value.\n\n            I left the course with a personal webpage full of projects to showcase\n            and revisited the curriculum often to tackle bonus activities. The\n            course is approachable whether you're like me and just starting out or\n            already possess programming skills. I am blown away by how much\n            I learned since my first day at Kickstart Coding; from my first HTML\n            file all the way to navigating complex frameworks and implementing\n            APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning. A major part of my new role as a Platform Specialist\n            is communicating with engineers and data analysts, so having a\n            background in software helps me communicate effectively and\n            efficiently. Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.\n        "}];
};
window.moduloBuild.nameToHash.library_FeaturedTestimonials_staticdata = "xxbcstkp";

window.moduloBuild.modules["xxnr3p18"] = function library_Testimonials_staticdata (modulo) {
return [{"name":"Nicolas Miller","img":"nicolas.jpg","location":"Antioch, California","profession":"Software Engineer @ Rooster Grin Media","linkedin":"nicolas-wyatt-miller","pullquote":"The custom paced structure was possibly the most vital component to\n            my success [...] this setup allowed me to pace my progress and\n            uphold my life's balance in the process.","text":"\n            <strong>It sounds cheesy, but Kickstart Coding gave me the\n            opportunity to make a career shift that I never thought I would be\n            able to.</strong> The personalized tutoring helped target my\n            weaknesses and get honest feedback on my projects that large scale\n            programs are unable to provide. The custom paced structure was\n            possibly the most vital component to my success; I've never been\n            the person who gets something new on the first, second, or even\n            third try, but this setup allowed me to pace my progress and uphold\n            my life's balance in the process. The instructional material was\n            intense, but Michael makes some hilarious references and segments\n            the topics into digestible lessons. If I could give any advice, I\n            would say to not let anything stop you, but ESPECIALLY don't let\n            you stop yourself. You 1000% can do this and self doubt or fear of\n            difficulty are likely to be your biggest obstacles -- you just have\n            to be kind to yourself and get up again when JavaScript and CSS\n            inevitably knock you down. <strong>You are going to be so proud of\n            yourself because this is massive and this is worth it!</strong>\n        ","featured":null},{"name":"Anthony Sifontes","img":"anthony.jpg","location":"New Orleans, Louisiana","profession":"Software Engineer @ Amino","linkedin":"anthonysifontes","featured":null,"pullquote":"I eventually received an offer to be a Software Engineer at an exciting\n            healthcare start-up, and only 11 weeks into the program.","text":"\n            My career thus far had been in data analytics. I wanted to\n            transition to a developer role and ultimately be able to create and\n            turn my ideas into reality. I had not taken any coding courses\n            before this, only online tutorials and books, so I was not sure\n            what to expect.  <strong>Class after class, I was blown away by the\n            passion Michael and his team brought to each and every\n            lesson!</strong> The classes were lively, balanced between lecture,\n            demonstrations, guided coding activities, and group work, while\n            still being accessible to a wide range of experience levels.\n\n            A couple of months into the course, I started applying for\n            developer positions, and soon I was excited to be invited for a\n            round of on-site interviews. <strong>Michael was very supportive,\n            coaching me on how to best present my work experience, and guiding\n            me through a mock \"whiteboard\" interview.</strong> Every interview\n            was more challenging than the last, but all of the coaching and\n            prep received at Kickstart beforehand was critical to my moving\n            forward in the process. You can imagine my excitement when I\n            eventually received an offer to be a Software Engineer at an\n            exciting healthcare start-up, and only 11 weeks into the program!\n            Now, I've been at my new position for several months, and I love\n            it.  The work we did in class was instrumental in preparing me for\n            my new day-to-day duties.  I'm very thankful to the Kickstart\n            Coding team and the help they provided in transitioning to my new\n            software engineering career.\n        "},{"name":"Andrew Thorton","img":"andrew.jpg","location":"Alameda, California","profession":"Data Engineer @ Lyft","featured":null,"linkedin":"andrew-w-thornton","pullquote":"Using my newly acquired skills, I got a great new job as a Data\n            Engineer just a couple of weeks after finishing the Kickstart Coding\n            course.","text":"\n            After spending years as a software project and product manager flirting\n            with the idea of becoming a software engineer, I finally got up the\n            courage to sign up for a coding bootcamp. I looked at many different\n            options and chose Kickstart Coding because it provides excellent value\n            and is staffed by people that are clearly passionate about teaching\n            technology. I enjoyed the in-class lessons which are an engaging mix of\n            lecture, live-coding walkthroughs, and activities. The homework\n            assignments and group projects built nicely on the stuff we learned in\n            class and helped to reinforce the concepts with very practical\n            examples. <strong>The curriculum does a masterful job of challenging\n            people with some coding experience while also being accessible to\n            people with no coding background at all.</strong> While the vast\n            majority of the curriculum is very focused on teaching specific\n            languages and frameworks, the last couple lessons of the Front-End\n            portion of the course are focused on some more general concepts that\n            were extremely helpful in preparing me for interviews. Using my newly\n            acquired skills, I got a great new job as a Data Engineer just a couple\n            of weeks after finishing the Kickstart Coding course. <strong>I would\n            recommend Kickstart Coding to everyone, even if you don't want a job as\n            a software engineer. Learning to code in this setting was really\n            fun!</strong>\n        "},{"name":"Sarah Farnsworth-Kumli","img":"sarah.jpg","location":"San Francisco, California","profession":"Solutions Engineer @ Okta","linkedin":"sarah-fk","pullquote":"I walked into Kickstart Coding to brush up on my skills. I\n        left with a new career.","text":"\n            <strong>Now that I am on the other side, have landed a job, and am\n            now working with developers I can honestly say that Kickstart is a\n            quality program.</strong> They take a modern approach to teaching\n            and teach what's current in an adapting industry (also what stacks\n            companies are hiring for!).\n\n            Michael covered CS concepts in an incredibly accessible way for a\n            diverse classroom with different levels of experience.  The course\n            material was the perfect balance of providing introductory guidance\n            and challenge. Group projects exposed us to the challenges of\n            working in a development team and we continued to build on new\n            iterations of our personal projects.\n\n            It's a privilege to have been a part of such a fantastic community,\n            and I'm excited to see it grow. <strong>Amazing how such a short\n            time can change your life, if you're considering taking the plunge,\n            DO IT!</strong>\n        ","featured":null},{"name":"Nicol Hawkins","featured":null,"img":"nicol.jpg","location":"San Franciso, California","profession":"Platform Specialist @ Amplitude","linkedin":"nicol-hawkins","featured_on_frontpage":true,"pullquote":"Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.","featured_text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  <strong>Kickstart Coding is more affordable\n            than most coding bootcamps and the curriculum is top-notch while having\n            a lot of repeat value.</strong> [...] I am blown away by how much I\n            learned since my first day at Kickstart Coding; from my first HTML file\n            all the way to navigating complex frameworks and implementing APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning.\n        ","text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  Kickstart Coding is more affordable than\n            most coding bootcamps and the curriculum is top-notch while having a\n            lot of repeat value.\n\n            I left the course with a personal webpage full of projects to showcase\n            and revisited the curriculum often to tackle bonus activities. The\n            course is approachable whether you're like me and just starting out or\n            already possess programming skills. I am blown away by how much\n            I learned since my first day at Kickstart Coding; from my first HTML\n            file all the way to navigating complex frameworks and implementing\n            APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning. A major part of my new role as a Platform Specialist\n            is communicating with engineers and data analysts, so having a\n            background in software helps me communicate effectively and\n            efficiently. Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.\n        "},{"name":"Yulia Tuzov","img":"yulia.jpg","location":"San Mateo, California","profession":"QA engineer @ Skupos","linkedin":"yuliatuzov","pullquote":"Kickstart’s curriculum gave me technical understanding of\n        all the moving parts involved in building a software product.","text":"\n            I have been in tech for couple of years in a QA role prior to going\n            to this bootcamp.  And now transitioning into an engineering role.\n            Kickstart’s curriculum gave me technical understanding of all the\n            moving parts involved in building a software product as well as\n            practice of building those parts in group projects and individual\n            projects which is extremely valuable experience.\n            \n            The curriculum overall is very well structured in a way that after\n            every topic is introduced students had to apply it in their\n            homework right away as well as final projects at the end of each\n            course. Program also includes industry insights and job prep\n            material. <strong>Michael, Mark and Maddy are very passionate about\n            their students to succeed in the career transitions. You do have to\n            work a lot during the course, so be ready, but you’ll also have\n            amazing support.</strong> Support also doesn’t end after the\n            course, you can come to their hack & learns to get help or\n            guidance.\n        ","featured":null},{"name":"Kyle Pollock","img":"kyle.jpg","location":"San Francisco, California","profession":"Knowledge Base Manager @ Synapse","linkedin":"kylepollock","pullquote":"I got a job offer within 30 days of completing my 4 month summer cohort.","text":"\n            I was looking for a place to learn Python, JavaScript, and how to work\n            with APIs to increase my skills, and make myself more marketable as a\n            former jack of all trades website manager.  I was quite familiar with\n            the coding bootcamps in the Bay Area, as a friend of mine helped start\n            one in San Francisco. When I searched around for programs and found\n            Kickstart Coding, I couldn't find one that could beat it's overall\n            value through affordability, flexibility, and course offerings. I was\n            able to build three strong  projects in Github (along with other\n            projects) and an online portfolio. I got a job offer within 30 days of\n            completing my 4 month summer cohort. <strong>I also more than tripled\n            my income from my previous job as a non-profit communications manager.\n            I am grateful to have gone through Kickstart Coding, and for the\n            ongoing support beyond graduation through the teachers and alumni\n            group.</strong>\n        ","featured":null},{"name":"Rudy Trubitt","img":"rudy.jpg","location":"Oakland, California","profession":"Senior Software Test Engineer @ Dolby","linkedin":"rudy-trubitt-43b2126","pullquote":"Kickstart Coding gave me the key skills I needed to advance my career.","text":"\n            <strong>I needed a career boost and Kickstart delivered.</strong>\n            From the start, I was impressed by my interactions with the\n            program’s staff.  Although I was looking specifically for Python\n            instruction, the additional material in the back-end course turned\n            out to be extremely relevant. The class work was challenging but\n            well-differentiated for students with varying levels of programming\n            experience. And I thoroughly enjoyed getting to know and work with\n            everyone in my cohort.\n\n            During my job hunting and interviewing, I regularly reflected on\n            things I learned in the program. <strong>There were times when I\n            literally could hear Michael's voice in my head while I answered\n            interview questions.</strong> Although my previous skills also\n            helped me land my current position, there's no doubt that Kickstart\n            Coding gave me the key skills I needed to advance my career.\n        ","featured":null},{"name":"Cindy Dovinh","img":"cindy.jpg","location":"Oakland, California","profession":"","pullquote":"Kickstart Coding delivered on commitment to value, education, and passion.","text":"\n            Kickstart Coding could not have been more aptly named and the\n            schedule/format of the class could not have fit my needs better.\n            With my full-time, non-tech job demanding a minimum of 50-60 hrs\n            per week, I still looked forward to every class (2 weekday evenings\n            and Saturday afternoon, each week).  Michael is hands down the best\n            teacher I've ever had. He is an expert at what he does, with an\n            impressively VAST knowledge base and still managed to consistently\n            make you feel comfortable in your learning. Being introduced to so\n            much new information and new ways of thinking, he was always able\n            to answer our questions thoroughly, even though at times, we didn't\n            even know how to ask them.\n        ","featured":null},{"name":"Errin Mixon","img":"errin.jpg","location":"Oakland, California","profession":"Junior Frontend Developer @ GeoEx","linkedin":"errin-mixon-2b289023","pullquote":"I couldn't have afforded the time or money to take a traditional\n            bootcamp. I came out the other end as a web developer – with a new job.","text":"\n            I come from a zero-tech background. I wanted to build an app. Michael\n            said he could teach me that, so I signed up.\n\n            I'm not going to lie. This bootcamp was hard. For a tech newbie with a\n            full-time job and family, the time commitment is intense. I was often\n            frustrated. I cried, a lot. I secretly thought that I shouldn't have\n            been admitted to the course.\n\n            But I came out the other end as a web developer – with a new job. That\n            hadn't even been my goal, and you couldn't find anybody more surprised\n            than me!\n\n            I couldn't have afforded the time or money to take a traditional\n            bootcamp. I never would have tried. <strong>Kickstart Coding made\n            it possible for me to learn these skills, and it's no exaggeration\n            to say that it changed the trajectory of my career, and possibly my\n            life.</strong> Michael is an excellent and engaging teacher, as are\n            TA's Maddy and Mark, and I owe them a debt of gratitude.\n\n            5 stars for Kickstart – well worth your money.\n        ","featured":null},{"name":"Jeremy Johnson","img":"jeremy.jpg","location":"Madison, Wisconsin","profession":"Web Developer @ Know How","linkedin":"jeremy-johnson-80035395","pullquote":"The skills I learned in this course I use every day at my new job\n            as a web developer.","text":"\n            Out of high school I got a 2 year web programming degree at a local\n            technical college. I applied and applied for programming jobs and\n            was unable to land one. I really enjoyed programming but started to\n            think I would never be able to make it my career. A few years went\n            by working odd jobs when I got the opportunity to take this\n            bootcamp online.\n            \n            <strong>I can't begin to say how great this course is. I learned\n            more about programming in a matter of weeks than I did in a matter\n            of years in school.</strong>  Seeing real world examples of what we\n            were learning along the way made me excited to learn and do the\n            work. In addition to the amazing coursework, Micheal equips you\n            with great tools to help you find a job. <strong>I was able to get\n            a programming job just weeks after completing the course.</strong>\n            The skills I learned in this course I use every day at my job as a\n            web developer.\n            \n            I am very happy with my new job and 100% recommend this course to\n            anyone looking to get into tech!\n        ","featured":null}];
};
window.moduloBuild.nameToHash.library_Testimonials_staticdata = "xxnr3p18";

window.moduloBuild.modules["x1dmq5c6"] = function library_FeaturedArticles_staticdata (modulo) {
return {"results":[{"url":"https://kickstartcoding.com/learn/pro-tips/six-important-tips-learning-code/","title":"Six Important Tips for Learning to Code","image":"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/55/01/55011557-4ecf-4ce1-8efe-81555d5180d4/neat-lg-30ca40811ecee7f931167680e6b0412b.jpg"},{"url":"https://kickstartcoding.com/learn/articles/building-debug-trainer-deskop-app-tauri/","title":"Building the Debug Trainer Deskop App with Tauri","image":"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/44/f4/44f43d18-76fc-47d2-aae7-0756d395fda4/tauri_homepage.png"},{"url":"https://kickstartcoding.com/learn/articles/bootcamp-education-worth-it/","title":"Is a Bootcamp Education Worth the Cost?","image":"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/cc/45/cc45281d-bef1-4ccc-ab0d-1da8fd1368e8/book-731199_1920.jpg"}]};
};
window.moduloBuild.nameToHash.library_FeaturedArticles_staticdata = "x1dmq5c6";

window.moduloBuild.modules["x1jj69dd"] = function library_FeaturedArticles_script (modulo) {
var script = { exports: {} }; var state;

        const hardcodedData = {"results": [{"url":
        "https://kickstartcoding.com/learn/pro-tips/six-important-tips-learning-code/",
        "title": "Six Important Tips for Learning to Code", "image":
        "https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/55/01/55011557-4ecf-4ce1-8efe-81555d5180d4/neat-lg-30ca40811ecee7f931167680e6b0412b.jpg?AWSAccessKeyId=SQ2H24YZ2CVAWZIUNIC2&Signature=I8gFEnKJmZfY1bFG81cyiMJwKwY%3D&Expires=1678548551"},
        {"url":
        "https://kickstartcoding.com/learn/articles/building-debug-trainer-deskop-app-tauri/",
        "title": "Building the Debug Trainer Deskop App with Tauri", "image":
        "https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/44/f4/44f43d18-76fc-47d2-aae7-0756d395fda4/tauri_homepage.png?AWSAccessKeyId=SQ2H24YZ2CVAWZIUNIC2&Signature=598nX2P36FOUspHce9oA9uSKzeE%3D&Expires=1678548551"},
        {"url":
        "https://kickstartcoding.com/learn/articles/bootcamp-education-worth-it/",
        "title": "Is a Bootcamp Education Worth the Cost?", "image":
        "https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/cc/45/cc45281d-bef1-4ccc-ab0d-1da8fd1368e8/book-731199_1920.jpg?AWSAccessKeyId=SQ2H24YZ2CVAWZIUNIC2&Signature=ce%2BC4bBeUveSy%2F5Z3Ix%2F4UrVLdY%3D&Expires=1678548551"}]}
        function initializedCallback() {
            state.articles = hardcodedData.results;
            /*
            fetch("https://kickstartcoding.online/learn/api/featured/")
              .then(response => response.json())
              .then(data => {
                    console.log('featured data');
              });
            */
        }
    
return {"initializedCallback": typeof initializedCallback !== "undefined" ? initializedCallback : undefined, setLocalVariables: function (o) {state=o.state}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_FeaturedArticles_script = "x1jj69dd";

window.moduloBuild.modules["xx5fd681"] = function library1_PlanMenu (modulo) {

            const def = modulo.definitions['library1_PlanMenu'];
            class x_PlanMenu extends window.HTMLElement {
                constructor() { super(); this.init(); }
            }
            modulo.registry.utils.initComponentClass(modulo, def, x_PlanMenu);
            window.customElements.define(def.TagName, x_PlanMenu);
            return x_PlanMenu;
        
};
window.moduloBuild.nameToHash.library1_PlanMenu = "xx5fd681";

window.moduloBuild.modules["x1fulrpb"] = function library1_Courses (modulo) {

            const def = modulo.definitions['library1_Courses'];
            class x_Courses extends window.HTMLElement {
                constructor() { super(); this.init(); }
            }
            modulo.registry.utils.initComponentClass(modulo, def, x_Courses);
            window.customElements.define(def.TagName, x_Courses);
            return x_Courses;
        
};
window.moduloBuild.nameToHash.library1_Courses = "x1fulrpb";

window.moduloBuild.modules["xxx16580"] = function library1_PlanMenu_staticdata (modulo) {
return [{"title":"Videos & Self-Paced","online":"Online only","lectures":"Prerecorded","crossedPrice":"$284","price":149,"length":"2 months","summary":"For only $135, unlock lifetime access to entire video\n        curriculum for self-study.<br />\n        <span style=\"font-family: Raleway; background: var(--sunshine);line-height: 1.8\"><strong>New to Kickstart</strong> Discount</span><br />\n        For only $14, add 2 months of group review & Linux Lab!\n        <br /><em>(renews at $149 for 2 months)</em>","enrollInfo":"Open Enrollment: Start self-paced, pop into Office Hours when you get stuck."},{"title":"Private Tutoring","online":"Online only","lectures":"Prerecorded","price":499,"length":"2 months","summary":"Level up your skills by purchasing a 1:1 tutoring\n        program, affordably priced to renew every 2 months. Includes\n        video curriculum and all group tutoring and lab options as well.","enrollInfo":"Open Enrollment: Rolling enrollment, enroll now to get 1:1 help\n        immediately."},{"title":"Hybrid Bootcamp","mostPopular":true,"online":"In-person and/or online","lectures":"Prerecorded","price":2499,"length":"9 months","summary":"We guide a beginner or intermediate coder to job-ready status\n        in 9 months.  We combine 1:1 tutoring with on-site and Zoom workgroup\n        sessions and help you kickstart your career in tech.","enrollInfo":"Limited Enrollment: Enroll right away to save a spot & start preparing!"},{"title":"Oakland Bootcamp","online":"In-person only","lectures":"Live, On-Site","crossedPrice":"$10,992","price":8499,"length":"9 month bundle","inquire":"Limited Enrollment: Contact us if interested","summary":"Join us in Oakland for our live, on-site full stack\n        coding bootcamp. Bundle consists of five courses, and 1:1\n        tutoring plan."}];
};
window.moduloBuild.nameToHash.library1_PlanMenu_staticdata = "xxx16580";

window.moduloBuild.modules["x1ers8lt"] = function library1_Courses_staticdata (modulo) {
return [{"title":"Foundations","subtitle":"Web Design: Intro to HTML and CSS","course":"prep","content":"Open Curriculum. Learn foundational skills while creating\n        cool, useful websites from scratch.  Learn how to embed music, videos,\n        maps, e-commerce stores, and more!","skill":1,"img":"computer-g0e7058b72_1280.jpg","imgalt":"A computer with rainbow","imgfg":"white","modules":[{"num":"1.1","title":"HTML basics"},{"num":"1.2","title":"Tags and Styles"},{"num":"1.3","title":"Lab: Single Page Projects"},{"num":"2.1","title":"Multipage Sites"},{"num":"2.2","title":"Flex Layouts"},{"num":"2.3","title":"Lab: Multi-Page Projects"}]},{"title":"Foundations","subtitle":"Web Design: Components & Frameworks","course":"prep","content":"\n            Open Curriculum. Learn design trends, re-usable components, and how\n            to use frameworks, such as Tailwind CSS. Finally, use Modulo.js to\n            launch a JAMStack app on Netlify.\n        ","skill":1,"img":"hd-wallpaper-g721518917_1280.jpg","imgalt":"Illustration of rainbow going through monitor","imgfg":"white","modules":[{"num":"3.1","title":"Tailwind"},{"num":"3.2","title":"Forms"},{"num":"3.3","title":"Lab: Forms and Frameworks"},{"num":"4.1","title":"Web Components"},{"num":"4.2","title":"Component Reuse"},{"num":"4.3","title":"Lab: JAMStack Apps"}]},{"course":"prep","subtitle":"Kickstart Prework","img":"plans-gb63d02c1d_1280.jpg","content":"\n            Get acquainted to coding on your personal computer or a provided\n            Linux Lab account. Prep your computer, get familiar with tech\n            terms, and learn markdown.\n        ","skill":1,"modules":[{"num":"1","title":"Intro to Coding Bootcamps"},{"num":"2","title":"Linux, macOS, & online setup"},{"num":"3","title":"Terminology research"},{"num":"4","title":"Markdown and Fast Typing"},{"num":"5","title":"Skill Check: Dive into Coding"},{"num":"6","title":"Skill Check: Deeper with Coding"},{"num":"7","title":"Beyond Prework"}]},{"course":"fundamentals","img":"laptop-g4d7844033_1280.png","subtitle":"Static Sites & Bootstrap","content":"Start peeling back the layers of the web in this whirlwind\n        tour of HTML, CSS, Dev Tools, column-based layouts, responsive design\n        and Bootstrap 5","skill":2,"project":"Static Profile Page","modules":[{"num":"1.1","title":"HTML","topics":["HTML","tech stack","GitHub","Publishing","template editing"]},{"num":"1.2","title":"CSS","topics":["CSS","Dev tools","selectors","classes"]},{"num":"1.3","title":"Bootstrap","topics":["Bootstrap 5","column layouts","grid systems","responsive design","stylesheet linking"]}]},{"course":"fundamentals","img":"apple-ga7d81315e_1280.png","subtitle":"Automation: Bash, Git, and Python Scripts","content":"Learn how to use Git to keep your code safe under version control.\n        Learn effective terminal use, and how to write Bash and Python scripts\n        to replace tedious tasks.","skill":2,"project":"Simple automation of page assembly in Bash and Python","modules":[{"num":"2.1","title":"Bash","topics":["bash","zsh","shell scripting","directory navigation","redirection","piping","wildcards","ls","cd","mkdir","touch","echo","cat"]},{"num":"2.2","title":"Git","topics":["git","commits","remotes","branching","merging","commit history","sharing with GitHub","pull requests"]},{"num":"2.3","title":"Python","topics":["python","python scripting","variables","assignment operator","reading files","writing files","combining files"]}]},{"course":"fundamentals","img":"background-g8ee7d113b_1280.jpg","subtitle":"Computer Programming with Python","project":"Python-based static site generator, bonus assignment includes computer-vision powered OCR and face detection image gallery","content":"Begin a classic introduction to backend programming with\n        Python, learning core data types and control-flow structures. Go deeper\n        with OOP, Pipenv, and Jinja templating.","skill":2,"modules":[{"num":"3.1","title":"Flow"},{"num":"3.2","title":"Functions"},{"num":"3.3","title":"Loops"},{"num":"4.1","title":"OOP"},{"num":"4.2","title":"Modules"},{"num":"4.3","title":"Templating"}]},{"course":"backend","subtitle":"Intro to Networking with Python","img":"background-ged739cdbf_1280.jpg","imgfg":"white","project":"API-driven Dashboard","content":"Learn about the Internet, networking, and server-side\n        programming. You will use web APIs, implement HTTP over TCP/IP, and\n        finally basic request routing and web apps.","skill":3,"modules":[{"num":"1.1","title":"Requests and APIs"},{"num":"1.2","title":"Servers, HTTP over TCP/IP, and Routing"},{"num":"1.3","title":"Web Apps and Deployment"}]},{"course":"backend","subtitle":"Practical Django","imgalt":"Cube in a world of cubes","img":"cubes-g21a82afce_1280.jpg","imgfg":"white","project":"Multi-user shareable DB-driven dashboard","content":"Learn the best practices from an experienced Django\n        developer: MVC, CRUD, forms, urls, users, admin, models, data\n        cardinality (eg Many-To-Many), unit testing, and much more.","skill":3,"modules":[{"num":"2.1","title":"Django"},{"num":"2.2","title":"Forms"},{"num":"2.3","title":"Users"},{"num":"3.1","title":"CRUD"},{"num":"3.2","title":"Models"},{"num":"3.3","title":"Unit testing"}]},{"course":"backend","img":"server-g6892d162b_1280.jpg","imgfg":"white","subtitle":"Intro to Databases with Postgres SQL","content":"Learn SQL basics on a Postgres DB, before getting practice\n        with JOINs, constraints, query analysis, indexes and optimization,\n        full-text search, geo-spatial features, and more.","skill":3,"modules":[{"num":"4.1","title":"Postgres SQL"},{"num":"4.2","title":"Joins and Indices"}]},{"course":"frontend","imgfg":"white","img":"retro-g526726a00_1280.jpg","subtitle":"JavaScript in the Modern Web","project":"Data Viz SPA in pure CSS and vanilla JS","content":"Learn modern JavaScript, including let, const, iterators, and\n        DOM manipulation. Explore tricky CSS concepts like animations and\n        pseudo-elements.","skill":3,"modules":[{"num":"1.1","title":"Box Model & BEM"},{"num":"1.2","title":"Grid & Animations"},{"num":"1.3","title":"Flexbox & JS Events"},{"num":"2.1","title":"Modern JavaScript"},{"num":"2.2","title":"DOM Manipulation"},{"num":"2.3","title":"API & Single Page Apps"}]},{"course":"frontend","img":"colorful-g427212bf2_1280.jpg","imgfg":"white","subtitle":"Thinking in React","project":"Data Viz SPA in React JS","content":"In this hooks-based React course segment, you go beyond just\n        learning the JSX syntax, and practice \"thinking in React\" with\n        data-flow, lifting state, and more.","skill":4,"modules":[{"num":"3.1","title":"React"},{"num":"3.2","title":"State"},{"num":"3.3","title":"Lifecycle"},{"num":"4.1","title":"Components"},{"num":"4.2","title":"Data-flow"},{"num":"4.3","title":"Patterns"}]},{"course":"frontend","imgfg":"white","img":"wallpaper-gbaac742b2_1280.jpg","subtitle":"Full Stack JS: MERN, Redux, and Routing","project":"React Widget Library: Design, launch and release on NPM","content":"Take your React JS skills to the full stack by learning\n        MongoDB, Express.JS, and Node.js. Learn Redux for state management, and\n        Routing for multi-page apps.","skill":4,"modules":[{"num":"4.4","title":"Full-stack"},{"num":"5.1","title":"Router"},{"num":"5.2","title":"Redux"},{"num":"5.3","title":"MERN"},{"num":"5.4","title":"Testing"}]},{"course":"career","img":"people-g923420017_1280.jpg","imgfg":"white","subtitle":"Kickstart Career","content":"Redo your resume, polish your profile, and hone your\n        networking skills. Practice interviews and develop a \"elevator pitch\"\n        to market yourself for your next job.","skill":3,"modules":[{"num":"M1","title":"Resume"},{"num":"M2","title":"Narrative"},{"num":"M3","title":"Communication"},{"num":"M4","title":"Interviews"},{"num":"M5","title":"Professionalism"}]},{"course":"career","subtitle":"Algorithms: Computer Science for Job Seekers","img":"fractal-gdd9943fe4_1280.jpg","imgfg":"white","content":"A CS course hyper-focused on whiteboard interviews. Learn\n        time complexity analysis (BigO), sorting, solving problems in dynamic\n        programming, recursion and async coding puzzles, and more.","skill":4,"modules":[{"num":"1.1","title":"Algorithms for Job Seekers"},{"num":"1.2","title":"Recursion and Async"},{"num":"1.3","title":"Sorting Algorithms"},{"num":"2.1","title":"ADT - Abstract Data Types"},{"num":"2.2","title":"Computer Engineering & Data Structures"}]},{"course":"career","img":"drawing-g538254e05_1280.jpg","subtitle":"Industry Capstone","content":"Use a 5-milestone process to build a software product from\n        specs to launch. Learn how tech industry roles interlock, including\n        agile Product Management and DevOps.","project":"A full-stack app using Python, JavaScript, and other technologies","skill":4,"modules":[{"num":"M1","title":"Industry: Product Management & Agile"},{"num":"M2","title":"Project Proposal"},{"num":"M3","title":"Project Spec"},{"num":"M4","title":"Project MVP"},{"num":"M5","title":"Industry: DevOps & Server Topology"},{"num":"M6","title":"Project Launch"},{"num":"M7","title":"Project Presentation"}]}];
};
window.moduloBuild.nameToHash.library1_Courses_staticdata = "x1ers8lt";

window.moduloBuild.modules["xxckidp5"] = function library1_Courses_script (modulo) {
var script = { exports: {} }; var props, staticdata, state;

        const courses = [
            {
                title: 'Prep',
                weeks: '2-6 weeks',
                step: 1,
            },
            {
                title: 'Fundamentals',
                weeks: '4-12 weeks',
                step: 2,
            },
            {
                title: 'Backend',
                weeks: '4-12 weeks',
                step: 3,
            },
            {
                title: 'Frontend',
                weeks: '6-14 weeks',
                step: 4,
            },
            {
                title: 'Career' ,
                weeks: '4-12 weeks',
                step: 5,
            },
        ];

        function selectCourse(slug) {
            state.selected = slug;
        }

        function prepareCallback() {
            let segments = staticdata;
            let visibleSegments = staticdata;
            if (props.topthree) {
                const allowed = 'Thinking in React|Practical Django|Web Design: Intro to HTML and CSS';
                visibleSegments = staticdata.filter(seg => allowed.toLowerCase().includes(seg.subtitle.toLowerCase()));
            }
            if (state.selected) {
                visibleSegments = staticdata.filter(seg => seg.course.toLowerCase() === state.selected);
            }
            return { courses, segments, visibleSegments };
        }
    
return {"selectCourse": typeof selectCourse !== "undefined" ? selectCourse : undefined, "prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function (o) {props=o.props; staticdata=o.staticdata; state=o.state}, exports: script.exports }

};
window.moduloBuild.nameToHash.library1_Courses_script = "xxckidp5";

window.moduloBuild.modules["x1qrfb7p"] = function library_Page_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<head>\n    <title>");
  OUT.push(G.escapeText(CTX.props.title));
  OUT.push("</title>\n    <meta charset=\"utf8\" />\n\n    <meta name=\"title\" content=\"");
  OUT.push(G.escapeText(CTX.props.title));
  OUT.push(" | Kickstart Coding\">\n    <meta name=\"description\" content=\"Learn to code with our one-on-one bootcamp program\">\n    <meta name=\"keywords\" content=\"bootcamp, python, learn to code, free coding, coding lessons. online bootcamp, tutoring, computer science, programming, javascript, react, coding school, coding academy\">\n    <meta name=\"robots\" content=\"index, follow\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"language\" content=\"English\">\n    <meta name=\"revisit-after\" content=\"5 days\">\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"//fonts.googleapis.com/css?family=Raleway:300,400,700,800%7CLato:300,400,700\" rel=\"stylesheet\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"//use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n\n    <link rel=\"stylesheet\" href=\"/static/css/site.css\" />\n</head>\n<body>\n    <a name=\"nav\"></a>\n    <nav class=\"Page-nav layout-container\">\n        <a href=\"/\" style=\"grid-column: 1\"><img src=\"/static/images/kickstartcodinglogo.svg\" /></a>\n        <ul>\n            ");
  var ARR0=CTX.script.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY];
  OUT.push("\n                <li>\n                    <a href=\"");
  if (CTX.page.file === CTX.props.navselected) {
  OUT.push("#c");
  } else {
  OUT.push("/");
  OUT.push(G.escapeText(CTX.page.file));
  }
  OUT.push("\"\n                        title=\"");
  OUT.push(G.escapeText(CTX.page.title));
  OUT.push("\"\n                        class=\"\n                            Page-navLink\n                            ");
  if (CTX.page.file === CTX.props.navselected) {
  OUT.push("Page-navLink--selected");
  }
  OUT.push("\n                        \">\n                        ");
  OUT.push(G.escapeText(G.filters["upper"](CTX.page.title)));
  OUT.push("\n                    </a>\n                </li>\n            ");
  }
  OUT.push("\n        </ul>\n        <div class=\"right-links\" style=\"grid-column: 3\">\n            <a href=\"https://kickstartcoding.online/\">Student Portal &raquo;</a>\n        </div>\n    </nav>\n\n    <div class=\"Page-navHBMenu\">\n        <a href=\"#nav\" class=\"btn-hbmenu\">☰</a>\n    </div>\n\n    <a name=\"c\"></a> <!-- c = content -->\n    ");
  if (CTX.props.toptitle) {
  OUT.push("\n        <div class=\"Page-container layout-container\" style=\"background: WhiteSmoke; padding-bottom: 100px\">\n            <h1 class=\"hero-text-top layout-container\" style=\"z-index: 3\">\n                <div>\n                    ");
  OUT.push(G.escapeText(CTX.props.toptitle));
  OUT.push("\n                </div>\n            </h1>\n            ");
  if (CTX.props.bottomtitle) {
  OUT.push("\n                <h1 class=\"hero-text-bottom layout-container\" style=\"font-size: 2.3rem\">\n                    <div>");
  OUT.push(G.escapeText(G.filters["safe"](CTX.props.bottomtitle)));
  OUT.push("</div>\n                </h1>\n            ");
  }
  OUT.push("\n        </div>\n        ");
  if (CTX.props.rightimage) {
  OUT.push("\n            <img\n                style=\"border: 10px solid var(--bluebird); max-width: 400px; float: right; margin-top: -150px; margin-left: 0\"\n                src=\"");
  OUT.push(G.escapeText(CTX.props.rightimage));
  OUT.push("\"\n            />\n        ");
  }
  OUT.push("\n        ");
  if (CTX.props.tlcutout) {
  OUT.push("\n            <div style=\"width: 25vw; position: relative; top: -300px; margin: 60px; margin-left: 5vw;\">\n                <img\n                    style=\"border: 2px solid var(--bluebird); max-width: 100%; position: absolute; top: 0; left: 0; z-index: 2; border-radius: 8px; padding: 5px\"\n                    src=\"");
  OUT.push(G.escapeText(CTX.props.tlcutoutbg));
  OUT.push("\"\n                />\n                <img\n                    style=\"border: 2px solid var(--bluebird); max-width: 100%; position: absolute; top: 0; left: 0; z-index: 4;  border-radius: 30px 100px 40px 50px; padding: 5px\"\n                    src=\"");
  OUT.push(G.escapeText(CTX.props.tlcutout));
  OUT.push("\"\n                />\n            </div>\n        ");
  }
  OUT.push("\n    ");
  }
  OUT.push("\n    <slot class=\"Page-container layout-container\">\n    </slot>\n\n    <footer class=\"Page-footer layout-container\">\n        <div class=\"u--layout\">\n            <ul>\n                <h3>Contact</h3>\n                <li><a href=\"mailto:info@kickstartcoding.com\">info@kickstartcoding.com</a></li>\n                <li><tt>1721 Broadway #201</tt></li>\n                <li><tt>Oakland, CA 94612</tt></li>\n            </ul>\n\n            <ul>\n                <h3>Links</h3>\n                ");
  var ARR0=CTX.script.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY];
  OUT.push("\n                    <li>\n                        <a href=\"/");
  OUT.push(G.escapeText(CTX.page.file));
  OUT.push("\"> ");
  OUT.push(G.escapeText(CTX.page.title));
  OUT.push("</a>\n                    </li>\n                ");
  }
  OUT.push("\n            </ul>\n\n            <ul>\n                <h3>&nbsp;</h3>\n                <li>\n                    <a href=\"https://kickstartcoding.online/\">Student Portal</a>\n                </li>\n                <li>\n                    <a href=\"https://kickstartcoding.online/apply/\">Apply</a>\n                </li>\n                <li>\n                    <a href=\"https://kickstartcoding.online/info/jobs/\">Jobs</a>\n                </li>\n                <li>\n                    <a href=\"https://kickstartcoding.online/info/code-of-conduct/\">Conduct</a>\n                </li>\n            </ul>\n\n            <ul>\n                <h3>Follow Us</h3>\n                <li class=\"inline-links\">\n                    <a target=\"_blank\" href=\"https://www.facebook.com/kickstartcoding/\"><i class=\"fab fa-facebook fa-2x\"></i></a>\n                    &nbsp;\n                    <a target=\"_blank\" href=\"http://instagram.com/kickstartcoding/\"><i class=\"fab fa-instagram fa-2x\"></i></a>\n                    &nbsp;\n                    <a target=\"_blank\" href=\"https://www.meetup.com/Hack-and-Learn/\"><i class=\"fab fa-meetup fa-2x\"></i></a>\n                </li>\n                <li class=\"inline-links\">\n                    <a target=\"_blank\" href=\"https://www.linkedin.com/company/kickstartcoding/about/\"><i class=\"fab fa-linkedin fa-2x\"></i></a>\n                    &nbsp;\n                    <a target=\"_blank\" href=\"https://twitter.com/kscoding\"><i class=\"fab fa-twitter-square fa-2x\"></i></a>\n                    &nbsp;\n                    <a target=\"_blank\" href=\"https://github.com/kickstartcoding/\"><i class=\"fab fa-github fa-2x\"></i></a>\n                </li>\n            </ul>\n\n\n        </div>\n        <p style=\"text-align: center\">\n            &copy; ");
  OUT.push(G.escapeText(CTX.script.currentYear));
  OUT.push(" | Kickstart Coding LLC\n            ");
  OUT.push(" ");
  OUT.push("\n            | <a href=\"https://modulojs.org/\" title=\"Made with Modulo.js\" target=\"_blank\">%</a>\n        </p>\n    </footer>\n</body>\n");

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Page_template = "x1qrfb7p";

window.moduloBuild.modules["xxpklu5o"] = function library_FeaturedTestimonials_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<main>\n    ");
  var ARR0=CTX.staticdata;for (var KEY in ARR0) {CTX. testimonial=ARR0[KEY];
  OUT.push("\n    <div class=\"sliding-box ");
  if (CTX.state.selected === CTX.testimonial.name) {
  OUT.push("sliding-box--selected");
  }
  OUT.push("\">\n        <article>\n            <label for=\"testimonial-");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("\">\n                <img src=\"/static/images/testimonials/");
  OUT.push(G.escapeText(CTX.testimonial.img));
  OUT.push("\" alt=\"Portrait photograph of ");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("\">\n                ");
  if (CTX.testimonial.featured) {
  OUT.push("\n                    <p class=\"featured\">");
  OUT.push(G.escapeText(CTX.testimonial.featured));
  OUT.push("</p>\n                ");
  }
  OUT.push("\n                ");
  if (CTX.testimonial.pullquote) {
  OUT.push("\n                    <p class=\"pullquote\">&ldquo;");
  OUT.push(G.escapeText(CTX.testimonial.pullquote));
  OUT.push("&rdquo;</p>\n                ");
  }
  OUT.push("\n                ");
  if (CTX.testimonial.name) {
  OUT.push("\n                    <p class=\"name\">");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("</p>\n                    <p class=\"location\">");
  OUT.push(G.escapeText(CTX.testimonial.location));
  OUT.push("</p>\n                ");
  }
  OUT.push("\n                ");
  if (CTX.testimonial.featured === CTX.null) {
  OUT.push("\n                    <p>&ldquo;");
  OUT.push(G.escapeText(G.filters["safe"](CTX.testimonial.text)));
  OUT.push("&rdquo;</p>\n                ");
  }
  OUT.push("\n            </label>\n            ");
  /*
  OUT.push("\n            <div class=\"box-title\">\n                <span class=\"hidden-xs\">\n                    <h4>");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push(" <span>");
  OUT.push(G.escapeText(CTX.testimonial.location));
  OUT.push("</span></h4>\n                    <h5>");
  OUT.push(G.escapeText(CTX.testimonial.profession));
  OUT.push("</h5>\n                </span>\n                <span class=\"visible-xs\">\n                    <h4>");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("</h4>\n                    <h5>");
  OUT.push(G.escapeText(CTX.testimonial.location));
  OUT.push("</h5>\n                </span>\n            </div>\n            <div class=\"text-box\">\n                <div class=\"text-content\">\n                    <span class=\"visible-xs\">\n                        <h5>");
  OUT.push(G.escapeText(CTX.testimonial.profession));
  OUT.push("</h5>\n                    </span>\n                    ");
  if (CTX.testimonial.pullquote) {
  OUT.push("\n                        <p class=\"pullquote\">&ldquo;");
  OUT.push(G.escapeText(CTX.testimonial.pullquote));
  OUT.push("&rdquo;</p>\n                    ");
  }
  OUT.push("\n                    ");
  if (CTX.testimonial.featured_text) {
  OUT.push("\n                        <p>&ldquo;");
  OUT.push(G.escapeText(G.filters["safe"](CTX.testimonial.featured_text)));
  OUT.push("&rdquo;</p>\n                    ");
  } else {
  OUT.push("\n                        <p>&ldquo;");
  OUT.push(G.escapeText(G.filters["safe"](CTX.testimonial.text)));
  OUT.push("&rdquo;</p>\n                    ");
  }
  OUT.push("\n                </div>\n            </div>\n            ");
  */
  OUT.push("\n        </article>\n    </div>\n    ");
  if (CTX.testimonial.featured) {
  OUT.push("\n        <input type=\"radio\" style=\"display:none\" name=\"testimonial-");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("\" />\n    ");
  }
  OUT.push("\n    ");
  }
  OUT.push("\n</main>\n");

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_FeaturedTestimonials_template = "xxpklu5o";

window.moduloBuild.modules["xxpklu5o"] = function library_Testimonials_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<main>\n    ");
  var ARR0=CTX.staticdata;for (var KEY in ARR0) {CTX. testimonial=ARR0[KEY];
  OUT.push("\n    <div class=\"sliding-box ");
  if (CTX.state.selected === CTX.testimonial.name) {
  OUT.push("sliding-box--selected");
  }
  OUT.push("\">\n        <article>\n            <label for=\"testimonial-");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("\">\n                <img src=\"/static/images/testimonials/");
  OUT.push(G.escapeText(CTX.testimonial.img));
  OUT.push("\" alt=\"Portrait photograph of ");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("\">\n                ");
  if (CTX.testimonial.featured) {
  OUT.push("\n                    <p class=\"featured\">");
  OUT.push(G.escapeText(CTX.testimonial.featured));
  OUT.push("</p>\n                ");
  }
  OUT.push("\n                ");
  if (CTX.testimonial.pullquote) {
  OUT.push("\n                    <p class=\"pullquote\">&ldquo;");
  OUT.push(G.escapeText(CTX.testimonial.pullquote));
  OUT.push("&rdquo;</p>\n                ");
  }
  OUT.push("\n                ");
  if (CTX.testimonial.name) {
  OUT.push("\n                    <p class=\"name\">");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("</p>\n                    <p class=\"location\">");
  OUT.push(G.escapeText(CTX.testimonial.location));
  OUT.push("</p>\n                ");
  }
  OUT.push("\n                ");
  if (CTX.testimonial.featured === CTX.null) {
  OUT.push("\n                    <p>&ldquo;");
  OUT.push(G.escapeText(G.filters["safe"](CTX.testimonial.text)));
  OUT.push("&rdquo;</p>\n                ");
  }
  OUT.push("\n            </label>\n            ");
  /*
  OUT.push("\n            <div class=\"box-title\">\n                <span class=\"hidden-xs\">\n                    <h4>");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push(" <span>");
  OUT.push(G.escapeText(CTX.testimonial.location));
  OUT.push("</span></h4>\n                    <h5>");
  OUT.push(G.escapeText(CTX.testimonial.profession));
  OUT.push("</h5>\n                </span>\n                <span class=\"visible-xs\">\n                    <h4>");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("</h4>\n                    <h5>");
  OUT.push(G.escapeText(CTX.testimonial.location));
  OUT.push("</h5>\n                </span>\n            </div>\n            <div class=\"text-box\">\n                <div class=\"text-content\">\n                    <span class=\"visible-xs\">\n                        <h5>");
  OUT.push(G.escapeText(CTX.testimonial.profession));
  OUT.push("</h5>\n                    </span>\n                    ");
  if (CTX.testimonial.pullquote) {
  OUT.push("\n                        <p class=\"pullquote\">&ldquo;");
  OUT.push(G.escapeText(CTX.testimonial.pullquote));
  OUT.push("&rdquo;</p>\n                    ");
  }
  OUT.push("\n                    ");
  if (CTX.testimonial.featured_text) {
  OUT.push("\n                        <p>&ldquo;");
  OUT.push(G.escapeText(G.filters["safe"](CTX.testimonial.featured_text)));
  OUT.push("&rdquo;</p>\n                    ");
  } else {
  OUT.push("\n                        <p>&ldquo;");
  OUT.push(G.escapeText(G.filters["safe"](CTX.testimonial.text)));
  OUT.push("&rdquo;</p>\n                    ");
  }
  OUT.push("\n                </div>\n            </div>\n            ");
  */
  OUT.push("\n        </article>\n    </div>\n    ");
  if (CTX.testimonial.featured) {
  OUT.push("\n        <input type=\"radio\" style=\"display:none\" name=\"testimonial-");
  OUT.push(G.escapeText(CTX.testimonial.name));
  OUT.push("\" />\n    ");
  }
  OUT.push("\n    ");
  }
  OUT.push("\n</main>\n");

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Testimonials_template = "xxpklu5o";

window.moduloBuild.modules["xxhspd2g"] = function library_FeaturedArticles_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<main>\n    ");
  var ARR0=CTX.state.articles;for (var KEY in ARR0) {CTX. article=ARR0[KEY];
  OUT.push("\n        <article>\n            <img src=\"");
  OUT.push(G.escapeText(CTX.article.image));
  OUT.push("\" />\n            <label>");
  OUT.push(G.escapeText(CTX.article.title));
  OUT.push("</label>\n        </article>\n    ");
  }
  OUT.push("\n</main>\n\n\n");

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_FeaturedArticles_template = "xxhspd2g";

window.moduloBuild.modules["x1u7chu9"] = function library1_PlanMenu_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n");
  var ARR0=CTX.staticdata;for (var KEY in ARR0) {CTX. plan=ARR0[KEY];
  OUT.push("\n    <article\n        title=\"");
  OUT.push(G.escapeText(CTX.plan.title));
  OUT.push("\"\n        class=\" ");
  if (CTX.plan.inquire) {
  OUT.push(" bootcamp ");
  }
  OUT.push(" \"\n    >\n        ");
  if (CTX.plan.title) {
  OUT.push("\n            <div class=\"\n                h3-wrapper\n                ");
  if (CTX.plan.inquire) {
  OUT.push("\n                h3-wrapper--inquire\n                ");
  }
  OUT.push("\n            \">\n                <h3>");
  OUT.push(G.escapeText(CTX.plan.title));
  OUT.push("</h3>\n            </div>\n        ");
  }
  OUT.push("\n        ");
  if (CTX.plan.mostPopular) {
  OUT.push("\n            <p class=\"most-popular\"><strong>Most popular</strong></p>\n        ");
  }
  OUT.push("\n        <p class=\"online\">(");
  OUT.push(G.escapeText(G.filters["safe"](G.filters["hlinperson"](G.filters["lower"](CTX.plan.online)))));
  OUT.push(")</p>\n        <p class=\"lectures\">\n            ");
  OUT.push(G.escapeText(G.filters["safe"](G.filters["hlinperson"](CTX.plan.lectures))));
  OUT.push(" Lectures\n        </p>\n        <p class=\"summary\">");
  OUT.push(G.escapeText(G.filters["safe"](CTX.plan.summary)));
  OUT.push("</p>\n        ");
  if (CTX.plan.crossedPrice) {
  OUT.push("\n            <p class=\"prices\">\n                <span class=\"crossed-price\">\n                    ");
  OUT.push(G.escapeText(CTX.plan.crossedPrice));
  OUT.push("\n                </span>\n            </p>\n        ");
  } else {
  OUT.push("\n            <p class=\"stars\">\n                &#9733;&#9733;&#9733;&#9733;&#9733;<br />\n                <span>Five-star rated program*</span>\n            </p>\n        ");
  }
  OUT.push("\n\n        <p class=\"prices\">\n            <span class=\"big-price\">");
  OUT.push(G.escapeText(CTX.plan.price));
  OUT.push("</span>\n        </p>\n        <p class=\"length\">\n            ");
  OUT.push(G.escapeText(CTX.plan.length));
  OUT.push("\n        </p>\n\n        ");
  /*
  OUT.push("\n        ");
  if (CTX.plan.price < 900) {
  OUT.push("\n            <a class=\"buy-btn\" href=\"#\">Purchase</a>\n        ");
  }
  OUT.push("\n        ");
  */
  OUT.push("\n\n        ");
  if (CTX.plan.inquire) {
  OUT.push("\n            <a class=\"buy-btn buy--inquire\" href=\"https://kickstartcoding.online/apply/\">Inquire*</a>\n        ");
  } else {
  OUT.push("\n            <a class=\"buy-btn buy--apply\" href=\"https://kickstartcoding.online/apply/\">Apply</a>\n        ");
  }
  OUT.push("\n        ");
  if (CTX.plan.inquire) {
  OUT.push("\n            <p class=\"inquire\">* ");
  OUT.push(G.escapeText(CTX.plan.inquire));
  OUT.push("</p>\n        ");
  }
  OUT.push("\n        ");
  if (CTX.plan.enrollInfo) {
  OUT.push("\n            <p class=\"inquire\">");
  OUT.push(G.escapeText(CTX.plan.enrollInfo));
  OUT.push("</p>\n        ");
  }
  OUT.push("\n    </article>\n");
  }
  OUT.push("\n<div style=\"grid-column: span 4; font-size: 0.8rem;\">\n    <p>* We are proud to have earned 5/5 for our commitment to\n    excellence in affordable coding education. Review sites:\n    <a href=\"https://www.coursereport.com/schools/kickstart-coding\" target=\"_blank\">Course Report</a>,\n    <a href=\"https://www.switchup.org/bootcamps/kickstart-coding\" target=\"_blank\">Switch Up</a>,\n    and <a href=\"https://www.switchup.org/bootcamps/kickstart-coding\" target=\"_blank\">Yelp</a>.\n</div>\n\n");

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library1_PlanMenu_template = "x1u7chu9";

window.moduloBuild.modules["xxea65nc"] = function library1_Courses_template (modulo) {
return function (CTX, G) { var OUT=[];
  if (!(CTX.props.topthree)) {
  OUT.push("\n    <h1>Courses</h1>\n    <p>Our curriculum consists of 5 multi-segmented courses, which we use to\n    create a custom paced full stack curriculum for each student in our\n    program.</p>\n    <nav>\n        <ul>\n            ");
  var ARR1=CTX.script.courses;for (var KEY in ARR1) {CTX. course=ARR1[KEY];
  OUT.push("\n                <li>\n                    <button @click:=script.selectCourse payload=\"");
  OUT.push(G.escapeText(G.filters["lower"](CTX.course.title)));
  OUT.push("\">\n                        <span class=\"step\">");
  OUT.push(G.escapeText(CTX.course.step));
  OUT.push("</span>\n                        <span class=\"label\">");
  OUT.push(G.escapeText(CTX.course.title));
  OUT.push("</span>\n                        <span class=\"weeks\">");
  OUT.push(G.escapeText(CTX.course.weeks));
  OUT.push("</span>\n                    </button>\n                </li>\n            ");
  }
  OUT.push("\n        </ul>\n    </nav>\n\n    <h1>Course Segments</h1>\n");
  }
  OUT.push("\n\n<main>\n\n");
  if (CTX.state.selected) {
  OUT.push("\n    <aside>\n        ");
  OUT.push(G.escapeText(G.filters["length"](CTX.script.visibleSegments)));
  OUT.push("/");
  OUT.push(G.escapeText(G.filters["length"](CTX.script.segments)));
  OUT.push("\n        <button @click:=script.selectCourse payload=\"\">");
  OUT.push(G.escapeText(CTX.state.selected));
  OUT.push(" x</button>\n    </aside>\n");
  }
  OUT.push("\n\n\n");
  var ARR0=CTX.script.visibleSegments;for (var KEY in ARR0) {CTX. seg=ARR0[KEY];
  OUT.push("\n    <article title=\"");
  OUT.push(G.escapeText(CTX.seg.subtitle));
  OUT.push("\">\n        <div class=\"course-wrapper ");
  if (CTX.state.selected) {
  OUT.push("course-wrapper--selected");
  }
  OUT.push("\">\n            <div class=\"h3-wrapper\">\n                ");
  if (CTX.seg.title) {
  OUT.push("\n                    <h3>");
  OUT.push(G.escapeText(CTX.seg.title));
  OUT.push("</h3>\n                ");
  } else {
  OUT.push("\n                    <h3>");
  OUT.push(G.escapeText(G.filters["capfirst"](CTX.seg.course)));
  OUT.push("</h3>\n                ");
  }
  OUT.push("\n                <div style=\"\n                      background-image: \n                          ");
  if (CTX.seg.imgfg === "white") {
  OUT.push("\n                            linear-gradient(to bottom left, #11111155, #33333355),\n                          ");
  } else {
  OUT.push("\n                            linear-gradient(to bottom left, #eeeeee55, #cccccc55),\n                          ");
  }
  OUT.push("\n                          url(/static/images/new_course_photos/");
  OUT.push(G.escapeText(G.filters["default"](CTX.seg.img,"laptop-g4d7844033_1280.png")));
  OUT.push(");\n                      color: ");
  OUT.push(G.escapeText(G.filters["default"](CTX.seg.imgfg,"black")));
  OUT.push("\n                  \"\n                  class=\"courseimg\"\n                >\n                ");
  if (CTX.seg.subtitle) {
  OUT.push("\n                    <h4>");
  OUT.push(G.escapeText(CTX.seg.subtitle));
  OUT.push("</h4>\n                ");
  }
  OUT.push("\n                </div>\n            </div>\n            ");
  if (CTX.seg.free) {
  OUT.push("\n                <p class=\"free\" title=\"This course is free. Start immediately!\">FREE!</p>\n            ");
  }
  OUT.push("\n            ");
  if (CTX.seg.content) {
  OUT.push("\n                <p>");
  OUT.push(G.escapeText(CTX.seg.content));
  OUT.push("</p>\n            ");
  }
  OUT.push("\n            ");
  if (CTX.seg.updated) {
  OUT.push("\n                <p>");
  OUT.push(G.escapeText(CTX.seg.updated));
  OUT.push("</p>\n            ");
  }
  OUT.push("\n            <div class=\"bottom-wrapper\">\n            ");
  if (CTX.seg.skill) {
  OUT.push("\n                <p class=\"skill skill-level");
  OUT.push(G.escapeText(CTX.seg.skill));
  OUT.push("\">\n                    ");
  OUT.push("\n                    ");
  if (CTX.seg.skill === 1) {
  OUT.push("  □ □ □    <br />Warm-Up\n                    ");
  } else if (CTX.seg.skill === 2) {
  OUT.push("▣ □ □    <br />Beginner\n                    ");
  } else if (CTX.seg.skill === 3) {
  OUT.push("▣ ▣ □    <br />Intermediate\n                    ");
  } else if (CTX.seg.skill === 4) {
  OUT.push("▣ ▣ ▣    <br />Advanced\n                    ");
  }
  OUT.push("\n                </p>\n            ");
  }
  OUT.push("\n            <div class=\"buy-button-wrapper\">\n                ");
  if (CTX.seg.modules) {
  OUT.push("\n                    <strong class=\"modules\" title=\"");
  OUT.push(G.escapeText(G.filters["length"](CTX.seg.modules)));
  OUT.push(" modules\">");
  OUT.push(G.escapeText(G.filters["length"](CTX.seg.modules)));
  OUT.push(" <i class=\"fa fa-cubes\" aria-hidden=\"true\"></i></strong>\n                    <br />\n                ");
  }
  OUT.push("\n                ");
  if (CTX.seg.project) {
  OUT.push("\n                    <strong class=\"project-tag\" title=\"Project based learning: ");
  OUT.push(G.escapeText(CTX.seg.project));
  OUT.push("\"><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i> PROJECT</strong>\n                ");
  }
  OUT.push("\n                ");
  if (!(CTX.seg.url)) {
  OUT.push("\n                    ");
  OUT.push("\n                    <div class=\"included-explainer\">\n                        ");
  if (CTX.seg.project) {
  OUT.push("\n                            <strong>Project based learning:</strong> ");
  OUT.push(G.escapeText(CTX.seg.project));
  OUT.push("<br />\n                        ");
  }
  OUT.push("\n                        ");
  if (CTX.seg.modules) {
  OUT.push("\n                            <strong>Module Count:</strong> ");
  OUT.push(G.escapeText(G.filters["length"](CTX.seg.modules)));
  OUT.push("\n                        ");
  }
  OUT.push("\n                    </div>\n                ");
  }
  OUT.push("\n            </div>\n\n            ");
  if (CTX.seg.url) {
  OUT.push("\n                <p class=\"url\">\n                    <a href=\"");
  OUT.push(G.escapeText(CTX.seg.url));
  OUT.push("\" class=\"Page-navLink\" style=\"min-width: 40px; font-size: 1rem\">\n                        BEGIN&nbsp;&raquo;\n                    </a>\n                    ");
  if (CTX.props.topthree) {
  OUT.push("\n                        <span class=\"sticky-note\">\n                            <span class=\"sticky-note-arrow\">⬆</span>\n                            <strong>Free Course for Beginners!</strong>\n                        </span>\n                    ");
  }
  OUT.push("\n\n                </p>\n            ");
  } else if (CTX.props.topthree) {
  OUT.push("\n                ");
  OUT.push("\n            ");
  } else {
  OUT.push("\n                <div class=\"buy-button-wrapper\">\n                    <a href=\"/courses/#plans\" class=\"getbtn\">\n                    GET&nbsp;<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n                    </a>\n                    <div class=\"included-explainer\">\n                        <strong style=\"font-size: 1.5rem;\">$149</strong>\n                        <em>BUNDLE</em>\n                        <p>Video Course &amp;<br />Group Tutoring Bundle</p>\n                        &raquo; Lifetime Access to All Courses<br />\n                        <em>($135 separately)</em><br />\n                        &raquo; 2 Months Video Help<br />\n                        <em>($149 separately)</em>\n                        <!--\n                        <a href=\"https://kickstartcoding.online/apply/\" class=\"Page-navLink\" style=\"min-width: 40px; font-size: 1rem\">\n                          🛒&nbsp;GET&nbsp;&raquo;\n                        </a>\n                        -->\n                    </div>\n                </div>\n            ");
  }
  OUT.push("\n            </div>\n        </div>\n    </article>\n");
  }
  OUT.push("\n\n</main>\n");

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library1_Courses_template = "xxea65nc";

window.moduloBuild.definitions = { 
modulo: {"Parent":null,"DefName":null,"Type":"Modulo","ChildPrefix":"","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"defaultDef":{"DefTarget":null,"DefinedAs":null,"DefName":null},"defaultDefLoaders":["DefTarget","DefinedAs","Src"],"defaultFactory":["RenderObj","factoryCallback"],"src":"/static/js/Modulo.js","Name":"modulo","DefinitionName":"modulo","Source":"http://127.0.0.1:6627/static/libraries/","ChildrenNames":["configuration","library","library1"]}, 

 

 

 

 

 

 

 

configuration: {"Parent":"modulo","DefName":null,"Type":"Configuration","DefLoaders":["DefTarget","DefinedAs","Src|SrcSync","Content|Code","DefinitionName|MainRequire"],"Name":"configuration"}, 

library: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library","DefinitionName":"library","Source":"http://127.0.0.1:6627/static/libraries/layout.html","ChildrenNames":["library_Page","library_FeaturedTestimonials","library_Testimonials","library_FeaturedArticles"]}, 

library1: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library1","DefinitionName":"library1","Source":"http://127.0.0.1:6627/static/libraries/shop.html","ChildrenNames":["library1_configuration","library1_PlanMenu","library1_Courses"]}, 

library_Page: {"Parent":"library","DefName":null,"mode":"vanish-into-document","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Page","Name":"Page","DefinitionName":"library_Page","ChildrenNames":["library_Page_props","library_Page_template","library_Page_style","library_Page_script"],"namespace":"x","TagName":"x-page"}, 

library_FeaturedTestimonials: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"FeaturedTestimonials","Name":"FeaturedTestimonials","DefinitionName":"library_FeaturedTestimonials","ChildrenNames":["library_FeaturedTestimonials_template","library_FeaturedTestimonials_style","library_FeaturedTestimonials_state","library_FeaturedTestimonials_staticdata"],"namespace":"x","TagName":"x-featuredtestimonials"}, 

library_Testimonials: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Testimonials","Name":"Testimonials","DefinitionName":"library_Testimonials","ChildrenNames":["library_Testimonials_template","library_Testimonials_style","library_Testimonials_state","library_Testimonials_staticdata"],"namespace":"x","TagName":"x-testimonials"}, 

library_FeaturedArticles: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"FeaturedArticles","Name":"FeaturedArticles","DefinitionName":"library_FeaturedArticles","ChildrenNames":["library_FeaturedArticles_template","library_FeaturedArticles_state","library_FeaturedArticles_staticdata","library_FeaturedArticles_script","library_FeaturedArticles_style"],"namespace":"x","TagName":"x-featuredarticles"}, 

library_Page_props: {"Parent":"library_Page","DefName":null,"Content":"","Type":"Props","title":"","toptitle":"","rightimage":"","tlcutout":"","tlcutoutbg":"","bottomtitle":"","navselected":"","Name":"props","DefinitionName":"library_Page_props"}, 

library_Page_template: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"opTokens":"==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt","opAliases":{"==":"X === Y","is":"X === Y","gt":"X > Y","lt":"X < Y","is not":"X !== Y","not":"!(Y)","in":"(Y).includes ? (Y).includes(X) : (X in Y)","not in":"!((Y).includes ? (Y).includes(X) : (X in Y))"},"modeTokens":["{% %}","{{ }}","{# #}"],"modes":{},"defaultFilters":{},"defaultTags":{},"Name":"template","DefinitionName":"library_Page_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Page.html"}, 

library_Page_style: {"Parent":"library_Page","DefName":null,"Type":"Style","isolateSelector":null,"isolateClass":null,"prefix":null,"DefBuilders":["AutoIsolate","Content|ProcessCSS"],"Name":"style","DefinitionName":"library_Page_style","Source":"http://127.0.0.1:6627/static/libraries/layout/Page.css"}, 

library_Page_script: {"Parent":"library_Page","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|AutoExport","Code"],"Name":"script","DefinitionName":"library_Page_script","Directives":[]}, 

library_FeaturedTestimonials_template: {"Parent":"library_FeaturedTestimonials","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"opTokens":"==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt","opAliases":{"==":"X === Y","is":"X === Y","gt":"X > Y","lt":"X < Y","is not":"X !== Y","not":"!(Y)","in":"(Y).includes ? (Y).includes(X) : (X in Y)","not in":"!((Y).includes ? (Y).includes(X) : (X in Y))"},"modeTokens":["{% %}","{{ }}","{# #}"],"modes":{},"defaultFilters":{},"defaultTags":{},"Name":"template","DefinitionName":"library_FeaturedTestimonials_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Testimonials.html"}, 

library_FeaturedTestimonials_style: {"Parent":"library_FeaturedTestimonials","DefName":null,"Type":"Style","isolateSelector":[],"isolateClass":null,"prefix":"x-FeaturedTestimonials","DefBuilders":["AutoIsolate","Content|ProcessCSS"],"Name":"style","DefinitionName":"library_FeaturedTestimonials_style","Source":"http://127.0.0.1:6627/static/libraries/layout/Testimonials.css"}, 

library_FeaturedTestimonials_state: {"Parent":"library_FeaturedTestimonials","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"selected":"","Name":"state","DefinitionName":"library_FeaturedTestimonials_state"}, 

library_FeaturedTestimonials_staticdata: {"Parent":"library_FeaturedTestimonials","DefName":null,"Content":"[\n    {\n        name: 'Nicolas Miller',\n        img: 'nicolas.jpg',\n        location: 'Antioch, California',\n        profession: 'Software Engineer @ Rooster Grin Media',\n        linkedin: 'nicolas-wyatt-miller',\n        pullquote: `The custom paced structure was possibly the most vital component to\n            my success [...] this setup allowed me to pace my progress and\n            uphold my life's balance in the process.`,\n        text: `\n            <strong>It sounds cheesy, but Kickstart Coding gave me the\n            opportunity to make a career shift that I never thought I would be\n            able to.</strong> The personalized tutoring helped target my\n            weaknesses and get honest feedback on my projects that large scale\n            programs are unable to provide. The custom paced structure was\n            possibly the most vital component to my success; I've never been\n            the person who gets something new on the first, second, or even\n            third try, but this setup allowed me to pace my progress and uphold\n            my life's balance in the process. The instructional material was\n            intense, but Michael makes some hilarious references and segments\n            the topics into digestible lessons. If I could give any advice, I\n            would say to not let anything stop you, but ESPECIALLY don't let\n            you stop yourself. You 1000% can do this and self doubt or fear of\n            difficulty are likely to be your biggest obstacles -- you just have\n            to be kind to yourself and get up again when JavaScript and CSS\n            inevitably knock you down. <strong>You are going to be so proud of\n            yourself because this is massive and this is worth it!</strong>\n        `,\n    },\n\n    {\n        name: 'Anthony Sifontes',\n        img: 'anthony.jpg',\n        location: 'New Orleans, Louisiana',\n        profession: 'Software Engineer @ Amino',\n        linkedin: 'anthonysifontes',\n        featured: 'Software Engineer',\n        pullquote: `I eventually received an offer to be a Software Engineer at an exciting\n            healthcare start-up, and only 11 weeks into the program.`,\n        text: `\n            My career thus far had been in data analytics. I wanted to\n            transition to a developer role and ultimately be able to create and\n            turn my ideas into reality. I had not taken any coding courses\n            before this, only online tutorials and books, so I was not sure\n            what to expect.  <strong>Class after class, I was blown away by the\n            passion Michael and his team brought to each and every\n            lesson!</strong> The classes were lively, balanced between lecture,\n            demonstrations, guided coding activities, and group work, while\n            still being accessible to a wide range of experience levels.\n\n            A couple of months into the course, I started applying for\n            developer positions, and soon I was excited to be invited for a\n            round of on-site interviews. <strong>Michael was very supportive,\n            coaching me on how to best present my work experience, and guiding\n            me through a mock \"whiteboard\" interview.</strong> Every interview\n            was more challenging than the last, but all of the coaching and\n            prep received at Kickstart beforehand was critical to my moving\n            forward in the process. You can imagine my excitement when I\n            eventually received an offer to be a Software Engineer at an\n            exciting healthcare start-up, and only 11 weeks into the program!\n            Now, I've been at my new position for several months, and I love\n            it.  The work we did in class was instrumental in preparing me for\n            my new day-to-day duties.  I'm very thankful to the Kickstart\n            Coding team and the help they provided in transitioning to my new\n            software engineering career.\n        `,\n    },\n\n    {\n        name: 'Andrew Thorton',\n        img: 'andrew.jpg',\n        location: 'Alameda, California',\n        profession: 'Data Engineer @ Lyft',\n        featured: 'Data Engineer',\n        linkedin: 'andrew-w-thornton',\n        pullquote: `Using my newly acquired skills, I got a great new job as a Data\n            Engineer just a couple of weeks after finishing the Kickstart Coding\n            course.`,\n        text: `\n            After spending years as a software project and product manager flirting\n            with the idea of becoming a software engineer, I finally got up the\n            courage to sign up for a coding bootcamp. I looked at many different\n            options and chose Kickstart Coding because it provides excellent value\n            and is staffed by people that are clearly passionate about teaching\n            technology. I enjoyed the in-class lessons which are an engaging mix of\n            lecture, live-coding walkthroughs, and activities. The homework\n            assignments and group projects built nicely on the stuff we learned in\n            class and helped to reinforce the concepts with very practical\n            examples. <strong>The curriculum does a masterful job of challenging\n            people with some coding experience while also being accessible to\n            people with no coding background at all.</strong> While the vast\n            majority of the curriculum is very focused on teaching specific\n            languages and frameworks, the last couple lessons of the Front-End\n            portion of the course are focused on some more general concepts that\n            were extremely helpful in preparing me for interviews. Using my newly\n            acquired skills, I got a great new job as a Data Engineer just a couple\n            of weeks after finishing the Kickstart Coding course. <strong>I would\n            recommend Kickstart Coding to everyone, even if you don't want a job as\n            a software engineer. Learning to code in this setting was really\n            fun!</strong>\n        `,\n    },\n\n    {\n        name: 'Sarah Farnsworth-Kumli',\n        img: 'sarah.jpg',\n        location: 'San Francisco, California',\n        profession: 'Solutions Engineer @ Okta',\n        linkedin: 'sarah-fk',\n        pullquote: `I walked into Kickstart Coding to brush up on my skills. I\n        left with a new career.`,\n        text: `\n            <strong>Now that I am on the other side, have landed a job, and am\n            now working with developers I can honestly say that Kickstart is a\n            quality program.</strong> They take a modern approach to teaching\n            and teach what's current in an adapting industry (also what stacks\n            companies are hiring for!).\n\n            Michael covered CS concepts in an incredibly accessible way for a\n            diverse classroom with different levels of experience.  The course\n            material was the perfect balance of providing introductory guidance\n            and challenge. Group projects exposed us to the challenges of\n            working in a development team and we continued to build on new\n            iterations of our personal projects.\n\n            It's a privilege to have been a part of such a fantastic community,\n            and I'm excited to see it grow. <strong>Amazing how such a short\n            time can change your life, if you're considering taking the plunge,\n            DO IT!</strong>\n        `,\n    },\n\n    {\n        name: 'Nicol Hawkins',\n        featured: 'Platform Specialist',\n        img: 'nicol.jpg',\n        location: 'San Franciso, California',\n        profession: 'Platform Specialist @ Amplitude',\n        linkedin: 'nicol-hawkins',\n        featured_on_frontpage: true,\n        pullquote: `Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.`,\n        featured_text: `\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  <strong>Kickstart Coding is more affordable\n            than most coding bootcamps and the curriculum is top-notch while having\n            a lot of repeat value.</strong> [...] I am blown away by how much I\n            learned since my first day at Kickstart Coding; from my first HTML file\n            all the way to navigating complex frameworks and implementing APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning.\n        `,\n        text: `\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  Kickstart Coding is more affordable than\n            most coding bootcamps and the curriculum is top-notch while having a\n            lot of repeat value.\n\n            I left the course with a personal webpage full of projects to showcase\n            and revisited the curriculum often to tackle bonus activities. The\n            course is approachable whether you're like me and just starting out or\n            already possess programming skills. I am blown away by how much\n            I learned since my first day at Kickstart Coding; from my first HTML\n            file all the way to navigating complex frameworks and implementing\n            APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning. A major part of my new role as a Platform Specialist\n            is communicating with engineers and data analysts, so having a\n            background in software helps me communicate effectively and\n            efficiently. Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.\n        `,\n    },\n\n    {\n        name: 'Yulia Tuzov',\n        img: 'yulia.jpg',\n        location: 'San Mateo, California',\n        profession: 'QA engineer @ Skupos',\n        linkedin: 'yuliatuzov',\n        pullquote: `Kickstart’s curriculum gave me technical understanding of\n        all the moving parts involved in building a software product.`,\n        text: `\n            I have been in tech for couple of years in a QA role prior to going\n            to this bootcamp.  And now transitioning into an engineering role.\n            Kickstart’s curriculum gave me technical understanding of all the\n            moving parts involved in building a software product as well as\n            practice of building those parts in group projects and individual\n            projects which is extremely valuable experience.\n            \n            The curriculum overall is very well structured in a way that after\n            every topic is introduced students had to apply it in their\n            homework right away as well as final projects at the end of each\n            course. Program also includes industry insights and job prep\n            material. <strong>Michael, Mark and Maddy are very passionate about\n            their students to succeed in the career transitions. You do have to\n            work a lot during the course, so be ready, but you’ll also have\n            amazing support.</strong> Support also doesn’t end after the\n            course, you can come to their hack & learns to get help or\n            guidance.\n        `,\n    },\n\n    {\n        name: 'Kyle Pollock',\n        img: 'kyle.jpg',\n        location: 'San Francisco, California',\n        profession: 'Knowledge Base Manager @ Synapse',\n        linkedin: 'kylepollock',\n        pullquote: `I got a job offer within 30 days of completing my 4 month summer cohort.`,\n        text: `\n            I was looking for a place to learn Python, JavaScript, and how to work\n            with APIs to increase my skills, and make myself more marketable as a\n            former jack of all trades website manager.  I was quite familiar with\n            the coding bootcamps in the Bay Area, as a friend of mine helped start\n            one in San Francisco. When I searched around for programs and found\n            Kickstart Coding, I couldn't find one that could beat it's overall\n            value through affordability, flexibility, and course offerings. I was\n            able to build three strong  projects in Github (along with other\n            projects) and an online portfolio. I got a job offer within 30 days of\n            completing my 4 month summer cohort. <strong>I also more than tripled\n            my income from my previous job as a non-profit communications manager.\n            I am grateful to have gone through Kickstart Coding, and for the\n            ongoing support beyond graduation through the teachers and alumni\n            group.</strong>\n        `,\n    },\n\n    {\n        name: 'Rudy Trubitt',\n        img: 'rudy.jpg',\n        location: 'Oakland, California',\n        profession: 'Senior Software Test Engineer @ Dolby',\n        linkedin: 'rudy-trubitt-43b2126',\n        pullquote: `Kickstart Coding gave me the key skills I needed to advance my career.`,\n        text: `\n            <strong>I needed a career boost and Kickstart delivered.</strong>\n            From the start, I was impressed by my interactions with the\n            program’s staff.  Although I was looking specifically for Python\n            instruction, the additional material in the back-end course turned\n            out to be extremely relevant. The class work was challenging but\n            well-differentiated for students with varying levels of programming\n            experience. And I thoroughly enjoyed getting to know and work with\n            everyone in my cohort.\n\n            During my job hunting and interviewing, I regularly reflected on\n            things I learned in the program. <strong>There were times when I\n            literally could hear Michael's voice in my head while I answered\n            interview questions.</strong> Although my previous skills also\n            helped me land my current position, there's no doubt that Kickstart\n            Coding gave me the key skills I needed to advance my career.\n        `,\n    },\n\n    {\n        name: 'Cindy Dovinh',\n        img: 'cindy.jpg',\n        location: 'Oakland, California',\n        profession: '',\n        pullquote: `Kickstart Coding delivered on commitment to value, education, and passion.`,\n        text: `\n            Kickstart Coding could not have been more aptly named and the\n            schedule/format of the class could not have fit my needs better.\n            With my full-time, non-tech job demanding a minimum of 50-60 hrs\n            per week, I still looked forward to every class (2 weekday evenings\n            and Saturday afternoon, each week).  Michael is hands down the best\n            teacher I've ever had. He is an expert at what he does, with an\n            impressively VAST knowledge base and still managed to consistently\n            make you feel comfortable in your learning. Being introduced to so\n            much new information and new ways of thinking, he was always able\n            to answer our questions thoroughly, even though at times, we didn't\n            even know how to ask them.\n        `,\n    },\n\n\n    {\n        name: 'Errin Mixon',\n        img: 'errin.jpg',\n        location: 'Oakland, California',\n        profession: 'Junior Frontend Developer @ GeoEx',\n        linkedin: 'errin-mixon-2b289023',\n        pullquote: `I couldn't have afforded the time or money to take a traditional\n            bootcamp. I came out the other end as a web developer – with a new job.`,\n        text: `\n            I come from a zero-tech background. I wanted to build an app. Michael\n            said he could teach me that, so I signed up.\n\n            I'm not going to lie. This bootcamp was hard. For a tech newbie with a\n            full-time job and family, the time commitment is intense. I was often\n            frustrated. I cried, a lot. I secretly thought that I shouldn't have\n            been admitted to the course.\n\n            But I came out the other end as a web developer – with a new job. That\n            hadn't even been my goal, and you couldn't find anybody more surprised\n            than me!\n\n            I couldn't have afforded the time or money to take a traditional\n            bootcamp. I never would have tried. <strong>Kickstart Coding made\n            it possible for me to learn these skills, and it's no exaggeration\n            to say that it changed the trajectory of my career, and possibly my\n            life.</strong> Michael is an excellent and engaging teacher, as are\n            TA's Maddy and Mark, and I owe them a debt of gratitude.\n\n            5 stars for Kickstart – well worth your money.\n        `,\n    },\n\n    {\n        name: 'Jeremy Johnson',\n        img: 'jeremy.jpg',\n        location: 'Madison, Wisconsin',\n        profession: 'Web Developer @ Know How',\n        linkedin: 'jeremy-johnson-80035395',\n        pullquote: `The skills I learned in this course I use every day at my new job\n            as a web developer.`,\n        text: `\n            Out of high school I got a 2 year web programming degree at a local\n            technical college. I applied and applied for programming jobs and\n            was unable to land one. I really enjoyed programming but started to\n            think I would never be able to make it my career. A few years went\n            by working odd jobs when I got the opportunity to take this\n            bootcamp online.\n            \n            <strong>I can't begin to say how great this course is. I learned\n            more about programming in a matter of weeks than I did in a matter\n            of years in school.</strong>  Seeing real world examples of what we\n            were learning along the way made me excited to learn and do the\n            work. In addition to the amazing coursework, Micheal equips you\n            with great tools to help you find a job. <strong>I was able to get\n            a programming job just weeks after completing the course.</strong>\n            The skills I learned in this course I use every day at my job as a\n            web developer.\n            \n            I am very happy with my new job and 100% recommend this course to\n            anyone looking to get into tech!\n        `,\n    },\n]\n\n        .filter(\n            item => item.featured // only show featured\n        )\n    ","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS","Code","RequireData"],"Name":"staticdata","DefinitionName":"library_FeaturedTestimonials_staticdata","Source":"http://127.0.0.1:6627/static/libraries/layout/Testimonials.js","data":[{"name":"Anthony Sifontes","img":"anthony.jpg","location":"New Orleans, Louisiana","profession":"Software Engineer @ Amino","linkedin":"anthonysifontes","featured":"Software Engineer","pullquote":"I eventually received an offer to be a Software Engineer at an exciting\n            healthcare start-up, and only 11 weeks into the program.","text":"\n            My career thus far had been in data analytics. I wanted to\n            transition to a developer role and ultimately be able to create and\n            turn my ideas into reality. I had not taken any coding courses\n            before this, only online tutorials and books, so I was not sure\n            what to expect.  <strong>Class after class, I was blown away by the\n            passion Michael and his team brought to each and every\n            lesson!</strong> The classes were lively, balanced between lecture,\n            demonstrations, guided coding activities, and group work, while\n            still being accessible to a wide range of experience levels.\n\n            A couple of months into the course, I started applying for\n            developer positions, and soon I was excited to be invited for a\n            round of on-site interviews. <strong>Michael was very supportive,\n            coaching me on how to best present my work experience, and guiding\n            me through a mock \"whiteboard\" interview.</strong> Every interview\n            was more challenging than the last, but all of the coaching and\n            prep received at Kickstart beforehand was critical to my moving\n            forward in the process. You can imagine my excitement when I\n            eventually received an offer to be a Software Engineer at an\n            exciting healthcare start-up, and only 11 weeks into the program!\n            Now, I've been at my new position for several months, and I love\n            it.  The work we did in class was instrumental in preparing me for\n            my new day-to-day duties.  I'm very thankful to the Kickstart\n            Coding team and the help they provided in transitioning to my new\n            software engineering career.\n        "},{"name":"Andrew Thorton","img":"andrew.jpg","location":"Alameda, California","profession":"Data Engineer @ Lyft","featured":"Data Engineer","linkedin":"andrew-w-thornton","pullquote":"Using my newly acquired skills, I got a great new job as a Data\n            Engineer just a couple of weeks after finishing the Kickstart Coding\n            course.","text":"\n            After spending years as a software project and product manager flirting\n            with the idea of becoming a software engineer, I finally got up the\n            courage to sign up for a coding bootcamp. I looked at many different\n            options and chose Kickstart Coding because it provides excellent value\n            and is staffed by people that are clearly passionate about teaching\n            technology. I enjoyed the in-class lessons which are an engaging mix of\n            lecture, live-coding walkthroughs, and activities. The homework\n            assignments and group projects built nicely on the stuff we learned in\n            class and helped to reinforce the concepts with very practical\n            examples. <strong>The curriculum does a masterful job of challenging\n            people with some coding experience while also being accessible to\n            people with no coding background at all.</strong> While the vast\n            majority of the curriculum is very focused on teaching specific\n            languages and frameworks, the last couple lessons of the Front-End\n            portion of the course are focused on some more general concepts that\n            were extremely helpful in preparing me for interviews. Using my newly\n            acquired skills, I got a great new job as a Data Engineer just a couple\n            of weeks after finishing the Kickstart Coding course. <strong>I would\n            recommend Kickstart Coding to everyone, even if you don't want a job as\n            a software engineer. Learning to code in this setting was really\n            fun!</strong>\n        "},{"name":"Nicol Hawkins","featured":"Platform Specialist","img":"nicol.jpg","location":"San Franciso, California","profession":"Platform Specialist @ Amplitude","linkedin":"nicol-hawkins","featured_on_frontpage":true,"pullquote":"Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.","featured_text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  <strong>Kickstart Coding is more affordable\n            than most coding bootcamps and the curriculum is top-notch while having\n            a lot of repeat value.</strong> [...] I am blown away by how much I\n            learned since my first day at Kickstart Coding; from my first HTML file\n            all the way to navigating complex frameworks and implementing APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning.\n        ","text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  Kickstart Coding is more affordable than\n            most coding bootcamps and the curriculum is top-notch while having a\n            lot of repeat value.\n\n            I left the course with a personal webpage full of projects to showcase\n            and revisited the curriculum often to tackle bonus activities. The\n            course is approachable whether you're like me and just starting out or\n            already possess programming skills. I am blown away by how much\n            I learned since my first day at Kickstart Coding; from my first HTML\n            file all the way to navigating complex frameworks and implementing\n            APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning. A major part of my new role as a Platform Specialist\n            is communicating with engineers and data analysts, so having a\n            background in software helps me communicate effectively and\n            efficiently. Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.\n        "}]}, 

library_Testimonials_template: {"Parent":"library_Testimonials","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"opTokens":"==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt","opAliases":{"==":"X === Y","is":"X === Y","gt":"X > Y","lt":"X < Y","is not":"X !== Y","not":"!(Y)","in":"(Y).includes ? (Y).includes(X) : (X in Y)","not in":"!((Y).includes ? (Y).includes(X) : (X in Y))"},"modeTokens":["{% %}","{{ }}","{# #}"],"modes":{},"defaultFilters":{},"defaultTags":{},"Name":"template","DefinitionName":"library_Testimonials_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Testimonials.html"}, 

library_Testimonials_style: {"Parent":"library_Testimonials","DefName":null,"Type":"Style","isolateSelector":[],"isolateClass":null,"prefix":"x-Testimonials","DefBuilders":["AutoIsolate","Content|ProcessCSS"],"Name":"style","DefinitionName":"library_Testimonials_style","Source":"http://127.0.0.1:6627/static/libraries/layout/Testimonials.css"}, 

library_Testimonials_state: {"Parent":"library_Testimonials","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"selected":"","Name":"state","DefinitionName":"library_Testimonials_state"}, 

library_Testimonials_staticdata: {"Parent":"library_Testimonials","DefName":null,"Content":"[\n    {\n        name: 'Nicolas Miller',\n        img: 'nicolas.jpg',\n        location: 'Antioch, California',\n        profession: 'Software Engineer @ Rooster Grin Media',\n        linkedin: 'nicolas-wyatt-miller',\n        pullquote: `The custom paced structure was possibly the most vital component to\n            my success [...] this setup allowed me to pace my progress and\n            uphold my life's balance in the process.`,\n        text: `\n            <strong>It sounds cheesy, but Kickstart Coding gave me the\n            opportunity to make a career shift that I never thought I would be\n            able to.</strong> The personalized tutoring helped target my\n            weaknesses and get honest feedback on my projects that large scale\n            programs are unable to provide. The custom paced structure was\n            possibly the most vital component to my success; I've never been\n            the person who gets something new on the first, second, or even\n            third try, but this setup allowed me to pace my progress and uphold\n            my life's balance in the process. The instructional material was\n            intense, but Michael makes some hilarious references and segments\n            the topics into digestible lessons. If I could give any advice, I\n            would say to not let anything stop you, but ESPECIALLY don't let\n            you stop yourself. You 1000% can do this and self doubt or fear of\n            difficulty are likely to be your biggest obstacles -- you just have\n            to be kind to yourself and get up again when JavaScript and CSS\n            inevitably knock you down. <strong>You are going to be so proud of\n            yourself because this is massive and this is worth it!</strong>\n        `,\n    },\n\n    {\n        name: 'Anthony Sifontes',\n        img: 'anthony.jpg',\n        location: 'New Orleans, Louisiana',\n        profession: 'Software Engineer @ Amino',\n        linkedin: 'anthonysifontes',\n        featured: 'Software Engineer',\n        pullquote: `I eventually received an offer to be a Software Engineer at an exciting\n            healthcare start-up, and only 11 weeks into the program.`,\n        text: `\n            My career thus far had been in data analytics. I wanted to\n            transition to a developer role and ultimately be able to create and\n            turn my ideas into reality. I had not taken any coding courses\n            before this, only online tutorials and books, so I was not sure\n            what to expect.  <strong>Class after class, I was blown away by the\n            passion Michael and his team brought to each and every\n            lesson!</strong> The classes were lively, balanced between lecture,\n            demonstrations, guided coding activities, and group work, while\n            still being accessible to a wide range of experience levels.\n\n            A couple of months into the course, I started applying for\n            developer positions, and soon I was excited to be invited for a\n            round of on-site interviews. <strong>Michael was very supportive,\n            coaching me on how to best present my work experience, and guiding\n            me through a mock \"whiteboard\" interview.</strong> Every interview\n            was more challenging than the last, but all of the coaching and\n            prep received at Kickstart beforehand was critical to my moving\n            forward in the process. You can imagine my excitement when I\n            eventually received an offer to be a Software Engineer at an\n            exciting healthcare start-up, and only 11 weeks into the program!\n            Now, I've been at my new position for several months, and I love\n            it.  The work we did in class was instrumental in preparing me for\n            my new day-to-day duties.  I'm very thankful to the Kickstart\n            Coding team and the help they provided in transitioning to my new\n            software engineering career.\n        `,\n    },\n\n    {\n        name: 'Andrew Thorton',\n        img: 'andrew.jpg',\n        location: 'Alameda, California',\n        profession: 'Data Engineer @ Lyft',\n        featured: 'Data Engineer',\n        linkedin: 'andrew-w-thornton',\n        pullquote: `Using my newly acquired skills, I got a great new job as a Data\n            Engineer just a couple of weeks after finishing the Kickstart Coding\n            course.`,\n        text: `\n            After spending years as a software project and product manager flirting\n            with the idea of becoming a software engineer, I finally got up the\n            courage to sign up for a coding bootcamp. I looked at many different\n            options and chose Kickstart Coding because it provides excellent value\n            and is staffed by people that are clearly passionate about teaching\n            technology. I enjoyed the in-class lessons which are an engaging mix of\n            lecture, live-coding walkthroughs, and activities. The homework\n            assignments and group projects built nicely on the stuff we learned in\n            class and helped to reinforce the concepts with very practical\n            examples. <strong>The curriculum does a masterful job of challenging\n            people with some coding experience while also being accessible to\n            people with no coding background at all.</strong> While the vast\n            majority of the curriculum is very focused on teaching specific\n            languages and frameworks, the last couple lessons of the Front-End\n            portion of the course are focused on some more general concepts that\n            were extremely helpful in preparing me for interviews. Using my newly\n            acquired skills, I got a great new job as a Data Engineer just a couple\n            of weeks after finishing the Kickstart Coding course. <strong>I would\n            recommend Kickstart Coding to everyone, even if you don't want a job as\n            a software engineer. Learning to code in this setting was really\n            fun!</strong>\n        `,\n    },\n\n    {\n        name: 'Sarah Farnsworth-Kumli',\n        img: 'sarah.jpg',\n        location: 'San Francisco, California',\n        profession: 'Solutions Engineer @ Okta',\n        linkedin: 'sarah-fk',\n        pullquote: `I walked into Kickstart Coding to brush up on my skills. I\n        left with a new career.`,\n        text: `\n            <strong>Now that I am on the other side, have landed a job, and am\n            now working with developers I can honestly say that Kickstart is a\n            quality program.</strong> They take a modern approach to teaching\n            and teach what's current in an adapting industry (also what stacks\n            companies are hiring for!).\n\n            Michael covered CS concepts in an incredibly accessible way for a\n            diverse classroom with different levels of experience.  The course\n            material was the perfect balance of providing introductory guidance\n            and challenge. Group projects exposed us to the challenges of\n            working in a development team and we continued to build on new\n            iterations of our personal projects.\n\n            It's a privilege to have been a part of such a fantastic community,\n            and I'm excited to see it grow. <strong>Amazing how such a short\n            time can change your life, if you're considering taking the plunge,\n            DO IT!</strong>\n        `,\n    },\n\n    {\n        name: 'Nicol Hawkins',\n        featured: 'Platform Specialist',\n        img: 'nicol.jpg',\n        location: 'San Franciso, California',\n        profession: 'Platform Specialist @ Amplitude',\n        linkedin: 'nicol-hawkins',\n        featured_on_frontpage: true,\n        pullquote: `Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.`,\n        featured_text: `\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  <strong>Kickstart Coding is more affordable\n            than most coding bootcamps and the curriculum is top-notch while having\n            a lot of repeat value.</strong> [...] I am blown away by how much I\n            learned since my first day at Kickstart Coding; from my first HTML file\n            all the way to navigating complex frameworks and implementing APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning.\n        `,\n        text: `\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  Kickstart Coding is more affordable than\n            most coding bootcamps and the curriculum is top-notch while having a\n            lot of repeat value.\n\n            I left the course with a personal webpage full of projects to showcase\n            and revisited the curriculum often to tackle bonus activities. The\n            course is approachable whether you're like me and just starting out or\n            already possess programming skills. I am blown away by how much\n            I learned since my first day at Kickstart Coding; from my first HTML\n            file all the way to navigating complex frameworks and implementing\n            APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning. A major part of my new role as a Platform Specialist\n            is communicating with engineers and data analysts, so having a\n            background in software helps me communicate effectively and\n            efficiently. Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.\n        `,\n    },\n\n    {\n        name: 'Yulia Tuzov',\n        img: 'yulia.jpg',\n        location: 'San Mateo, California',\n        profession: 'QA engineer @ Skupos',\n        linkedin: 'yuliatuzov',\n        pullquote: `Kickstart’s curriculum gave me technical understanding of\n        all the moving parts involved in building a software product.`,\n        text: `\n            I have been in tech for couple of years in a QA role prior to going\n            to this bootcamp.  And now transitioning into an engineering role.\n            Kickstart’s curriculum gave me technical understanding of all the\n            moving parts involved in building a software product as well as\n            practice of building those parts in group projects and individual\n            projects which is extremely valuable experience.\n            \n            The curriculum overall is very well structured in a way that after\n            every topic is introduced students had to apply it in their\n            homework right away as well as final projects at the end of each\n            course. Program also includes industry insights and job prep\n            material. <strong>Michael, Mark and Maddy are very passionate about\n            their students to succeed in the career transitions. You do have to\n            work a lot during the course, so be ready, but you’ll also have\n            amazing support.</strong> Support also doesn’t end after the\n            course, you can come to their hack & learns to get help or\n            guidance.\n        `,\n    },\n\n    {\n        name: 'Kyle Pollock',\n        img: 'kyle.jpg',\n        location: 'San Francisco, California',\n        profession: 'Knowledge Base Manager @ Synapse',\n        linkedin: 'kylepollock',\n        pullquote: `I got a job offer within 30 days of completing my 4 month summer cohort.`,\n        text: `\n            I was looking for a place to learn Python, JavaScript, and how to work\n            with APIs to increase my skills, and make myself more marketable as a\n            former jack of all trades website manager.  I was quite familiar with\n            the coding bootcamps in the Bay Area, as a friend of mine helped start\n            one in San Francisco. When I searched around for programs and found\n            Kickstart Coding, I couldn't find one that could beat it's overall\n            value through affordability, flexibility, and course offerings. I was\n            able to build three strong  projects in Github (along with other\n            projects) and an online portfolio. I got a job offer within 30 days of\n            completing my 4 month summer cohort. <strong>I also more than tripled\n            my income from my previous job as a non-profit communications manager.\n            I am grateful to have gone through Kickstart Coding, and for the\n            ongoing support beyond graduation through the teachers and alumni\n            group.</strong>\n        `,\n    },\n\n    {\n        name: 'Rudy Trubitt',\n        img: 'rudy.jpg',\n        location: 'Oakland, California',\n        profession: 'Senior Software Test Engineer @ Dolby',\n        linkedin: 'rudy-trubitt-43b2126',\n        pullquote: `Kickstart Coding gave me the key skills I needed to advance my career.`,\n        text: `\n            <strong>I needed a career boost and Kickstart delivered.</strong>\n            From the start, I was impressed by my interactions with the\n            program’s staff.  Although I was looking specifically for Python\n            instruction, the additional material in the back-end course turned\n            out to be extremely relevant. The class work was challenging but\n            well-differentiated for students with varying levels of programming\n            experience. And I thoroughly enjoyed getting to know and work with\n            everyone in my cohort.\n\n            During my job hunting and interviewing, I regularly reflected on\n            things I learned in the program. <strong>There were times when I\n            literally could hear Michael's voice in my head while I answered\n            interview questions.</strong> Although my previous skills also\n            helped me land my current position, there's no doubt that Kickstart\n            Coding gave me the key skills I needed to advance my career.\n        `,\n    },\n\n    {\n        name: 'Cindy Dovinh',\n        img: 'cindy.jpg',\n        location: 'Oakland, California',\n        profession: '',\n        pullquote: `Kickstart Coding delivered on commitment to value, education, and passion.`,\n        text: `\n            Kickstart Coding could not have been more aptly named and the\n            schedule/format of the class could not have fit my needs better.\n            With my full-time, non-tech job demanding a minimum of 50-60 hrs\n            per week, I still looked forward to every class (2 weekday evenings\n            and Saturday afternoon, each week).  Michael is hands down the best\n            teacher I've ever had. He is an expert at what he does, with an\n            impressively VAST knowledge base and still managed to consistently\n            make you feel comfortable in your learning. Being introduced to so\n            much new information and new ways of thinking, he was always able\n            to answer our questions thoroughly, even though at times, we didn't\n            even know how to ask them.\n        `,\n    },\n\n\n    {\n        name: 'Errin Mixon',\n        img: 'errin.jpg',\n        location: 'Oakland, California',\n        profession: 'Junior Frontend Developer @ GeoEx',\n        linkedin: 'errin-mixon-2b289023',\n        pullquote: `I couldn't have afforded the time or money to take a traditional\n            bootcamp. I came out the other end as a web developer – with a new job.`,\n        text: `\n            I come from a zero-tech background. I wanted to build an app. Michael\n            said he could teach me that, so I signed up.\n\n            I'm not going to lie. This bootcamp was hard. For a tech newbie with a\n            full-time job and family, the time commitment is intense. I was often\n            frustrated. I cried, a lot. I secretly thought that I shouldn't have\n            been admitted to the course.\n\n            But I came out the other end as a web developer – with a new job. That\n            hadn't even been my goal, and you couldn't find anybody more surprised\n            than me!\n\n            I couldn't have afforded the time or money to take a traditional\n            bootcamp. I never would have tried. <strong>Kickstart Coding made\n            it possible for me to learn these skills, and it's no exaggeration\n            to say that it changed the trajectory of my career, and possibly my\n            life.</strong> Michael is an excellent and engaging teacher, as are\n            TA's Maddy and Mark, and I owe them a debt of gratitude.\n\n            5 stars for Kickstart – well worth your money.\n        `,\n    },\n\n    {\n        name: 'Jeremy Johnson',\n        img: 'jeremy.jpg',\n        location: 'Madison, Wisconsin',\n        profession: 'Web Developer @ Know How',\n        linkedin: 'jeremy-johnson-80035395',\n        pullquote: `The skills I learned in this course I use every day at my new job\n            as a web developer.`,\n        text: `\n            Out of high school I got a 2 year web programming degree at a local\n            technical college. I applied and applied for programming jobs and\n            was unable to land one. I really enjoyed programming but started to\n            think I would never be able to make it my career. A few years went\n            by working odd jobs when I got the opportunity to take this\n            bootcamp online.\n            \n            <strong>I can't begin to say how great this course is. I learned\n            more about programming in a matter of weeks than I did in a matter\n            of years in school.</strong>  Seeing real world examples of what we\n            were learning along the way made me excited to learn and do the\n            work. In addition to the amazing coursework, Micheal equips you\n            with great tools to help you find a job. <strong>I was able to get\n            a programming job just weeks after completing the course.</strong>\n            The skills I learned in this course I use every day at my job as a\n            web developer.\n            \n            I am very happy with my new job and 100% recommend this course to\n            anyone looking to get into tech!\n        `,\n    },\n]\n\n        .map(\n            item => ({\n                ...item,\n                featured: null, // Blank out \"featured\" field for all Testimonials\n            })\n        )\n    ","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS","Code","RequireData"],"Name":"staticdata","DefinitionName":"library_Testimonials_staticdata","Source":"http://127.0.0.1:6627/static/libraries/layout/Testimonials.js","data":[{"name":"Nicolas Miller","img":"nicolas.jpg","location":"Antioch, California","profession":"Software Engineer @ Rooster Grin Media","linkedin":"nicolas-wyatt-miller","pullquote":"The custom paced structure was possibly the most vital component to\n            my success [...] this setup allowed me to pace my progress and\n            uphold my life's balance in the process.","text":"\n            <strong>It sounds cheesy, but Kickstart Coding gave me the\n            opportunity to make a career shift that I never thought I would be\n            able to.</strong> The personalized tutoring helped target my\n            weaknesses and get honest feedback on my projects that large scale\n            programs are unable to provide. The custom paced structure was\n            possibly the most vital component to my success; I've never been\n            the person who gets something new on the first, second, or even\n            third try, but this setup allowed me to pace my progress and uphold\n            my life's balance in the process. The instructional material was\n            intense, but Michael makes some hilarious references and segments\n            the topics into digestible lessons. If I could give any advice, I\n            would say to not let anything stop you, but ESPECIALLY don't let\n            you stop yourself. You 1000% can do this and self doubt or fear of\n            difficulty are likely to be your biggest obstacles -- you just have\n            to be kind to yourself and get up again when JavaScript and CSS\n            inevitably knock you down. <strong>You are going to be so proud of\n            yourself because this is massive and this is worth it!</strong>\n        ","featured":null},{"name":"Anthony Sifontes","img":"anthony.jpg","location":"New Orleans, Louisiana","profession":"Software Engineer @ Amino","linkedin":"anthonysifontes","featured":null,"pullquote":"I eventually received an offer to be a Software Engineer at an exciting\n            healthcare start-up, and only 11 weeks into the program.","text":"\n            My career thus far had been in data analytics. I wanted to\n            transition to a developer role and ultimately be able to create and\n            turn my ideas into reality. I had not taken any coding courses\n            before this, only online tutorials and books, so I was not sure\n            what to expect.  <strong>Class after class, I was blown away by the\n            passion Michael and his team brought to each and every\n            lesson!</strong> The classes were lively, balanced between lecture,\n            demonstrations, guided coding activities, and group work, while\n            still being accessible to a wide range of experience levels.\n\n            A couple of months into the course, I started applying for\n            developer positions, and soon I was excited to be invited for a\n            round of on-site interviews. <strong>Michael was very supportive,\n            coaching me on how to best present my work experience, and guiding\n            me through a mock \"whiteboard\" interview.</strong> Every interview\n            was more challenging than the last, but all of the coaching and\n            prep received at Kickstart beforehand was critical to my moving\n            forward in the process. You can imagine my excitement when I\n            eventually received an offer to be a Software Engineer at an\n            exciting healthcare start-up, and only 11 weeks into the program!\n            Now, I've been at my new position for several months, and I love\n            it.  The work we did in class was instrumental in preparing me for\n            my new day-to-day duties.  I'm very thankful to the Kickstart\n            Coding team and the help they provided in transitioning to my new\n            software engineering career.\n        "},{"name":"Andrew Thorton","img":"andrew.jpg","location":"Alameda, California","profession":"Data Engineer @ Lyft","featured":null,"linkedin":"andrew-w-thornton","pullquote":"Using my newly acquired skills, I got a great new job as a Data\n            Engineer just a couple of weeks after finishing the Kickstart Coding\n            course.","text":"\n            After spending years as a software project and product manager flirting\n            with the idea of becoming a software engineer, I finally got up the\n            courage to sign up for a coding bootcamp. I looked at many different\n            options and chose Kickstart Coding because it provides excellent value\n            and is staffed by people that are clearly passionate about teaching\n            technology. I enjoyed the in-class lessons which are an engaging mix of\n            lecture, live-coding walkthroughs, and activities. The homework\n            assignments and group projects built nicely on the stuff we learned in\n            class and helped to reinforce the concepts with very practical\n            examples. <strong>The curriculum does a masterful job of challenging\n            people with some coding experience while also being accessible to\n            people with no coding background at all.</strong> While the vast\n            majority of the curriculum is very focused on teaching specific\n            languages and frameworks, the last couple lessons of the Front-End\n            portion of the course are focused on some more general concepts that\n            were extremely helpful in preparing me for interviews. Using my newly\n            acquired skills, I got a great new job as a Data Engineer just a couple\n            of weeks after finishing the Kickstart Coding course. <strong>I would\n            recommend Kickstart Coding to everyone, even if you don't want a job as\n            a software engineer. Learning to code in this setting was really\n            fun!</strong>\n        "},{"name":"Sarah Farnsworth-Kumli","img":"sarah.jpg","location":"San Francisco, California","profession":"Solutions Engineer @ Okta","linkedin":"sarah-fk","pullquote":"I walked into Kickstart Coding to brush up on my skills. I\n        left with a new career.","text":"\n            <strong>Now that I am on the other side, have landed a job, and am\n            now working with developers I can honestly say that Kickstart is a\n            quality program.</strong> They take a modern approach to teaching\n            and teach what's current in an adapting industry (also what stacks\n            companies are hiring for!).\n\n            Michael covered CS concepts in an incredibly accessible way for a\n            diverse classroom with different levels of experience.  The course\n            material was the perfect balance of providing introductory guidance\n            and challenge. Group projects exposed us to the challenges of\n            working in a development team and we continued to build on new\n            iterations of our personal projects.\n\n            It's a privilege to have been a part of such a fantastic community,\n            and I'm excited to see it grow. <strong>Amazing how such a short\n            time can change your life, if you're considering taking the plunge,\n            DO IT!</strong>\n        ","featured":null},{"name":"Nicol Hawkins","featured":null,"img":"nicol.jpg","location":"San Franciso, California","profession":"Platform Specialist @ Amplitude","linkedin":"nicol-hawkins","featured_on_frontpage":true,"pullquote":"Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.","featured_text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  <strong>Kickstart Coding is more affordable\n            than most coding bootcamps and the curriculum is top-notch while having\n            a lot of repeat value.</strong> [...] I am blown away by how much I\n            learned since my first day at Kickstart Coding; from my first HTML file\n            all the way to navigating complex frameworks and implementing APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning.\n        ","text":"\n            When I started Kickstart Coding, I had very few programming skills and\n            no prior work experience in tech. It was a huge leap for me and it\n            literally changed my life!  Kickstart Coding is more affordable than\n            most coding bootcamps and the curriculum is top-notch while having a\n            lot of repeat value.\n\n            I left the course with a personal webpage full of projects to showcase\n            and revisited the curriculum often to tackle bonus activities. The\n            course is approachable whether you're like me and just starting out or\n            already possess programming skills. I am blown away by how much\n            I learned since my first day at Kickstart Coding; from my first HTML\n            file all the way to navigating complex frameworks and implementing\n            APIs.\n\n            This program not only gave me the technical skills required for a\n            career in tech -- it helped me recognize the potential and capacity I\n            have for learning. A major part of my new role as a Platform Specialist\n            is communicating with engineers and data analysts, so having a\n            background in software helps me communicate effectively and\n            efficiently. Thanks to the skills I learned at Kickstart Coding, I was\n            able to market myself for entry-level positions in the tech industry.\n        "},{"name":"Yulia Tuzov","img":"yulia.jpg","location":"San Mateo, California","profession":"QA engineer @ Skupos","linkedin":"yuliatuzov","pullquote":"Kickstart’s curriculum gave me technical understanding of\n        all the moving parts involved in building a software product.","text":"\n            I have been in tech for couple of years in a QA role prior to going\n            to this bootcamp.  And now transitioning into an engineering role.\n            Kickstart’s curriculum gave me technical understanding of all the\n            moving parts involved in building a software product as well as\n            practice of building those parts in group projects and individual\n            projects which is extremely valuable experience.\n            \n            The curriculum overall is very well structured in a way that after\n            every topic is introduced students had to apply it in their\n            homework right away as well as final projects at the end of each\n            course. Program also includes industry insights and job prep\n            material. <strong>Michael, Mark and Maddy are very passionate about\n            their students to succeed in the career transitions. You do have to\n            work a lot during the course, so be ready, but you’ll also have\n            amazing support.</strong> Support also doesn’t end after the\n            course, you can come to their hack & learns to get help or\n            guidance.\n        ","featured":null},{"name":"Kyle Pollock","img":"kyle.jpg","location":"San Francisco, California","profession":"Knowledge Base Manager @ Synapse","linkedin":"kylepollock","pullquote":"I got a job offer within 30 days of completing my 4 month summer cohort.","text":"\n            I was looking for a place to learn Python, JavaScript, and how to work\n            with APIs to increase my skills, and make myself more marketable as a\n            former jack of all trades website manager.  I was quite familiar with\n            the coding bootcamps in the Bay Area, as a friend of mine helped start\n            one in San Francisco. When I searched around for programs and found\n            Kickstart Coding, I couldn't find one that could beat it's overall\n            value through affordability, flexibility, and course offerings. I was\n            able to build three strong  projects in Github (along with other\n            projects) and an online portfolio. I got a job offer within 30 days of\n            completing my 4 month summer cohort. <strong>I also more than tripled\n            my income from my previous job as a non-profit communications manager.\n            I am grateful to have gone through Kickstart Coding, and for the\n            ongoing support beyond graduation through the teachers and alumni\n            group.</strong>\n        ","featured":null},{"name":"Rudy Trubitt","img":"rudy.jpg","location":"Oakland, California","profession":"Senior Software Test Engineer @ Dolby","linkedin":"rudy-trubitt-43b2126","pullquote":"Kickstart Coding gave me the key skills I needed to advance my career.","text":"\n            <strong>I needed a career boost and Kickstart delivered.</strong>\n            From the start, I was impressed by my interactions with the\n            program’s staff.  Although I was looking specifically for Python\n            instruction, the additional material in the back-end course turned\n            out to be extremely relevant. The class work was challenging but\n            well-differentiated for students with varying levels of programming\n            experience. And I thoroughly enjoyed getting to know and work with\n            everyone in my cohort.\n\n            During my job hunting and interviewing, I regularly reflected on\n            things I learned in the program. <strong>There were times when I\n            literally could hear Michael's voice in my head while I answered\n            interview questions.</strong> Although my previous skills also\n            helped me land my current position, there's no doubt that Kickstart\n            Coding gave me the key skills I needed to advance my career.\n        ","featured":null},{"name":"Cindy Dovinh","img":"cindy.jpg","location":"Oakland, California","profession":"","pullquote":"Kickstart Coding delivered on commitment to value, education, and passion.","text":"\n            Kickstart Coding could not have been more aptly named and the\n            schedule/format of the class could not have fit my needs better.\n            With my full-time, non-tech job demanding a minimum of 50-60 hrs\n            per week, I still looked forward to every class (2 weekday evenings\n            and Saturday afternoon, each week).  Michael is hands down the best\n            teacher I've ever had. He is an expert at what he does, with an\n            impressively VAST knowledge base and still managed to consistently\n            make you feel comfortable in your learning. Being introduced to so\n            much new information and new ways of thinking, he was always able\n            to answer our questions thoroughly, even though at times, we didn't\n            even know how to ask them.\n        ","featured":null},{"name":"Errin Mixon","img":"errin.jpg","location":"Oakland, California","profession":"Junior Frontend Developer @ GeoEx","linkedin":"errin-mixon-2b289023","pullquote":"I couldn't have afforded the time or money to take a traditional\n            bootcamp. I came out the other end as a web developer – with a new job.","text":"\n            I come from a zero-tech background. I wanted to build an app. Michael\n            said he could teach me that, so I signed up.\n\n            I'm not going to lie. This bootcamp was hard. For a tech newbie with a\n            full-time job and family, the time commitment is intense. I was often\n            frustrated. I cried, a lot. I secretly thought that I shouldn't have\n            been admitted to the course.\n\n            But I came out the other end as a web developer – with a new job. That\n            hadn't even been my goal, and you couldn't find anybody more surprised\n            than me!\n\n            I couldn't have afforded the time or money to take a traditional\n            bootcamp. I never would have tried. <strong>Kickstart Coding made\n            it possible for me to learn these skills, and it's no exaggeration\n            to say that it changed the trajectory of my career, and possibly my\n            life.</strong> Michael is an excellent and engaging teacher, as are\n            TA's Maddy and Mark, and I owe them a debt of gratitude.\n\n            5 stars for Kickstart – well worth your money.\n        ","featured":null},{"name":"Jeremy Johnson","img":"jeremy.jpg","location":"Madison, Wisconsin","profession":"Web Developer @ Know How","linkedin":"jeremy-johnson-80035395","pullquote":"The skills I learned in this course I use every day at my new job\n            as a web developer.","text":"\n            Out of high school I got a 2 year web programming degree at a local\n            technical college. I applied and applied for programming jobs and\n            was unable to land one. I really enjoyed programming but started to\n            think I would never be able to make it my career. A few years went\n            by working odd jobs when I got the opportunity to take this\n            bootcamp online.\n            \n            <strong>I can't begin to say how great this course is. I learned\n            more about programming in a matter of weeks than I did in a matter\n            of years in school.</strong>  Seeing real world examples of what we\n            were learning along the way made me excited to learn and do the\n            work. In addition to the amazing coursework, Micheal equips you\n            with great tools to help you find a job. <strong>I was able to get\n            a programming job just weeks after completing the course.</strong>\n            The skills I learned in this course I use every day at my job as a\n            web developer.\n            \n            I am very happy with my new job and 100% recommend this course to\n            anyone looking to get into tech!\n        ","featured":null}]}, 

library_FeaturedArticles_template: {"Parent":"library_FeaturedArticles","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"opTokens":"==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt","opAliases":{"==":"X === Y","is":"X === Y","gt":"X > Y","lt":"X < Y","is not":"X !== Y","not":"!(Y)","in":"(Y).includes ? (Y).includes(X) : (X in Y)","not in":"!((Y).includes ? (Y).includes(X) : (X in Y))"},"modeTokens":["{% %}","{{ }}","{# #}"],"modes":{},"defaultFilters":{},"defaultTags":{},"Name":"template","DefinitionName":"library_FeaturedArticles_template","Source":"http://127.0.0.1:6627/static/libraries/layout/FeaturedArticles.html"}, 

library_FeaturedArticles_state: {"Parent":"library_FeaturedArticles","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"articles":[],"Name":"state","DefinitionName":"library_FeaturedArticles_state"}, 

library_FeaturedArticles_staticdata: {"Parent":"library_FeaturedArticles","DefName":null,"Content":"\n        {\"results\": [{\"url\":\n        \"https://kickstartcoding.com/learn/pro-tips/six-important-tips-learning-code/\",\n        \"title\": \"Six Important Tips for Learning to Code\", \"image\":\n        \"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/55/01/55011557-4ecf-4ce1-8efe-81555d5180d4/neat-lg-30ca40811ecee7f931167680e6b0412b.jpg\"},\n        {\"url\":\n        \"https://kickstartcoding.com/learn/articles/building-debug-trainer-deskop-app-tauri/\",\n        \"title\": \"Building the Debug Trainer Deskop App with Tauri\", \"image\":\n        \"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/44/f4/44f43d18-76fc-47d2-aae7-0756d395fda4/tauri_homepage.png\"},\n        {\"url\": \"https://kickstartcoding.com/learn/articles/bootcamp-education-worth-it/\",\n        \"title\": \"Is a Bootcamp Education Worth the Cost?\", \"image\":\n        \"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/cc/45/cc45281d-bef1-4ccc-ab0d-1da8fd1368e8/book-731199_1920.jpg\"}\n        ]}\n\n    ","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS","Code","RequireData"],"Name":"staticdata","DefinitionName":"library_FeaturedArticles_staticdata","data":{"results":[{"url":"https://kickstartcoding.com/learn/pro-tips/six-important-tips-learning-code/","title":"Six Important Tips for Learning to Code","image":"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/55/01/55011557-4ecf-4ce1-8efe-81555d5180d4/neat-lg-30ca40811ecee7f931167680e6b0412b.jpg"},{"url":"https://kickstartcoding.com/learn/articles/building-debug-trainer-deskop-app-tauri/","title":"Building the Debug Trainer Deskop App with Tauri","image":"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/44/f4/44f43d18-76fc-47d2-aae7-0756d395fda4/tauri_homepage.png"},{"url":"https://kickstartcoding.com/learn/articles/bootcamp-education-worth-it/","title":"Is a Bootcamp Education Worth the Cost?","image":"https://sfo2.digitaloceanspaces.com/livesyllabus/ls1/filer_public/cc/45/cc45281d-bef1-4ccc-ab0d-1da8fd1368e8/book-731199_1920.jpg"}]}}, 

library_FeaturedArticles_script: {"Parent":"library_FeaturedArticles","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|AutoExport","Code"],"Name":"script","DefinitionName":"library_FeaturedArticles_script","Directives":[]}, 

library_FeaturedArticles_style: {"Parent":"library_FeaturedArticles","DefName":null,"Type":"Style","isolateSelector":[],"isolateClass":null,"prefix":"x-FeaturedArticles","DefBuilders":["AutoIsolate","Content|ProcessCSS"],"Name":"style","DefinitionName":"library_FeaturedArticles_style","Source":"http://127.0.0.1:6627/static/libraries/layout/FeaturedArticles.css"}, 

library1_configuration: {"Parent":"library1","DefName":null,"Type":"Configuration","DefLoaders":["DefTarget","DefinedAs","Src|SrcSync","Content|Code","DefinitionName|MainRequire"],"Name":"configuration"}, 

library1_PlanMenu: {"Parent":"library1","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"PlanMenu","Name":"PlanMenu","DefinitionName":"library1_PlanMenu","ChildrenNames":["library1_PlanMenu_template","library1_PlanMenu_style","library1_PlanMenu_staticdata"],"namespace":"x","TagName":"x-planmenu"}, 

library1_Courses: {"Parent":"library1","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Courses","Name":"Courses","DefinitionName":"library1_Courses","ChildrenNames":["library1_Courses_props","library1_Courses_template","library1_Courses_style","library1_Courses_staticdata","library1_Courses_state","library1_Courses_script"],"namespace":"x","TagName":"x-courses"}, 

library1_PlanMenu_template: {"Parent":"library1_PlanMenu","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"opTokens":"==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt","opAliases":{"==":"X === Y","is":"X === Y","gt":"X > Y","lt":"X < Y","is not":"X !== Y","not":"!(Y)","in":"(Y).includes ? (Y).includes(X) : (X in Y)","not in":"!((Y).includes ? (Y).includes(X) : (X in Y))"},"modeTokens":["{% %}","{{ }}","{# #}"],"modes":{},"defaultFilters":{},"defaultTags":{},"Name":"template","DefinitionName":"library1_PlanMenu_template","Source":"http://127.0.0.1:6627/static/libraries/shop/PlanMenu.html"}, 

library1_PlanMenu_style: {"Parent":"library1_PlanMenu","DefName":null,"Type":"Style","isolateSelector":[],"isolateClass":null,"prefix":"x-PlanMenu","DefBuilders":["AutoIsolate","Content|ProcessCSS"],"Name":"style","DefinitionName":"library1_PlanMenu_style","Source":"http://127.0.0.1:6627/static/libraries/shop/PlanMenu.css"}, 

library1_PlanMenu_staticdata: {"Parent":"library1_PlanMenu","DefName":null,"Content":"/* JSON data, but evaluated as a JS expression */\n[\n    {\n        title: 'Videos & Self-Paced',\n        online: 'Online only',\n        lectures: 'Prerecorded',\n        crossedPrice: '$284',\n        price: 149,\n        length: '2 months',\n        summary: `For only $135, unlock lifetime access to entire video\n        curriculum for self-study.<br />\n        <span style=\"font-family: Raleway; background: var(--sunshine);line-height: 1.8\"><strong>New to Kickstart</strong> Discount</span><br />\n        For only $14, add 2 months of group review & Linux Lab!\n        <br /><em>(renews at $149 for 2 months)</em>`,\n        enrollInfo: 'Open Enrollment: Start self-paced, pop into Office Hours when you get stuck.',\n    },\n    {\n        title: 'Private Tutoring',\n        online: 'Online only',\n        lectures: 'Prerecorded',\n        price: 499,\n        length: '2 months',\n        summary: `Level up your skills by purchasing a 1:1 tutoring\n        program, affordably priced to renew every 2 months. Includes\n        video curriculum and all group tutoring and lab options as well.`,\n        enrollInfo: `Open Enrollment: Rolling enrollment, enroll now to get 1:1 help\n        immediately.`,\n    },\n    {\n        title: 'Hybrid Bootcamp',\n        mostPopular: true,\n        online: 'In-person and/or online',\n        lectures: 'Prerecorded',\n        price: 2499,\n        length: '9 months',\n        summary: `We guide a beginner or intermediate coder to job-ready status\n        in 9 months.  We combine 1:1 tutoring with on-site and Zoom workgroup\n        sessions and help you kickstart your career in tech.`,\n        enrollInfo: `Limited Enrollment: Enroll right away to save a spot & start preparing!`\n    },\n    {\n        title: 'Oakland Bootcamp',\n        online: 'In-person only',\n        lectures: 'Live, On-Site',\n        crossedPrice: '$10,992',\n        price: 8499,\n        length: '9 month bundle',\n        inquire: `Limited Enrollment: Contact us if interested`,\n        summary: `Join us in Oakland for our live, on-site full stack\n        coding bootcamp. Bundle consists of five courses, and 1:1\n        tutoring plan.`,\n    },\n]\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS","Code","RequireData"],"Name":"staticdata","DefinitionName":"library1_PlanMenu_staticdata","Source":"http://127.0.0.1:6627/static/libraries/shop/PlanMenu.js","data":[{"title":"Videos & Self-Paced","online":"Online only","lectures":"Prerecorded","crossedPrice":"$284","price":149,"length":"2 months","summary":"For only $135, unlock lifetime access to entire video\n        curriculum for self-study.<br />\n        <span style=\"font-family: Raleway; background: var(--sunshine);line-height: 1.8\"><strong>New to Kickstart</strong> Discount</span><br />\n        For only $14, add 2 months of group review & Linux Lab!\n        <br /><em>(renews at $149 for 2 months)</em>","enrollInfo":"Open Enrollment: Start self-paced, pop into Office Hours when you get stuck."},{"title":"Private Tutoring","online":"Online only","lectures":"Prerecorded","price":499,"length":"2 months","summary":"Level up your skills by purchasing a 1:1 tutoring\n        program, affordably priced to renew every 2 months. Includes\n        video curriculum and all group tutoring and lab options as well.","enrollInfo":"Open Enrollment: Rolling enrollment, enroll now to get 1:1 help\n        immediately."},{"title":"Hybrid Bootcamp","mostPopular":true,"online":"In-person and/or online","lectures":"Prerecorded","price":2499,"length":"9 months","summary":"We guide a beginner or intermediate coder to job-ready status\n        in 9 months.  We combine 1:1 tutoring with on-site and Zoom workgroup\n        sessions and help you kickstart your career in tech.","enrollInfo":"Limited Enrollment: Enroll right away to save a spot & start preparing!"},{"title":"Oakland Bootcamp","online":"In-person only","lectures":"Live, On-Site","crossedPrice":"$10,992","price":8499,"length":"9 month bundle","inquire":"Limited Enrollment: Contact us if interested","summary":"Join us in Oakland for our live, on-site full stack\n        coding bootcamp. Bundle consists of five courses, and 1:1\n        tutoring plan."}]}, 

library1_Courses_props: {"Parent":"library1_Courses","DefName":null,"Content":"","Type":"Props","topthree":"","Name":"props","DefinitionName":"library1_Courses_props"}, 

library1_Courses_template: {"Parent":"library1_Courses","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"opTokens":"==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt","opAliases":{"==":"X === Y","is":"X === Y","gt":"X > Y","lt":"X < Y","is not":"X !== Y","not":"!(Y)","in":"(Y).includes ? (Y).includes(X) : (X in Y)","not in":"!((Y).includes ? (Y).includes(X) : (X in Y))"},"modeTokens":["{% %}","{{ }}","{# #}"],"modes":{},"defaultFilters":{},"defaultTags":{},"Name":"template","DefinitionName":"library1_Courses_template","Source":"http://127.0.0.1:6627/static/libraries/shop/Courses.html"}, 

library1_Courses_style: {"Parent":"library1_Courses","DefName":null,"Type":"Style","isolateSelector":[],"isolateClass":null,"prefix":"x-Courses","DefBuilders":["AutoIsolate","Content|ProcessCSS"],"Name":"style","DefinitionName":"library1_Courses_style","Source":"http://127.0.0.1:6627/static/libraries/shop/Courses.css"}, 

library1_Courses_staticdata: {"Parent":"library1_Courses","DefName":null,"Content":"/* JSON data, but evaluated as a JS expression */\n[\n    {\n        title: 'Foundations',\n        subtitle: 'Web Design: Intro to HTML and CSS',\n        course: 'prep',\n        content: `Open Curriculum. Learn foundational skills while creating\n        cool, useful websites from scratch.  Learn how to embed music, videos,\n        maps, e-commerce stores, and more!`,\n        skill: 1,\n        img: 'computer-g0e7058b72_1280.jpg',\n        imgalt: 'A computer with rainbow',\n        imgfg: 'white',\n        //free: true,\n        //url: 'https://freecodinglessons.com/foundations/1.1/',\n        modules: [\n            { num: '1.1', title: 'HTML basics' },\n            { num: '1.2', title: 'Tags and Styles' },\n            { num: '1.3', title: 'Lab: Single Page Projects' },\n            { num: '2.1', title: 'Multipage Sites' },\n            { num: '2.2', title: 'Flex Layouts' },\n            { num: '2.3', title: 'Lab: Multi-Page Projects' },\n        ],\n    },\n\n    {\n        title: 'Foundations',\n        subtitle: 'Web Design: Components & Frameworks',\n        course: 'prep',\n        content: `\n            Open Curriculum. Learn design trends, re-usable components, and how\n            to use frameworks, such as Tailwind CSS. Finally, use Modulo.js to\n            launch a JAMStack app on Netlify.\n        `,\n        skill: 1,\n        img: 'hd-wallpaper-g721518917_1280.jpg',\n        imgalt: 'Illustration of rainbow going through monitor',\n        imgfg: 'white',\n        //free: true,\n        //url: 'https://freecodinglessons.com/foundations/3.1/',\n        modules: [\n            { num: '3.1', title: 'Tailwind' },\n            { num: '3.2', title: 'Forms' },\n            { num: '3.3', title: 'Lab: Forms and Frameworks'},\n            { num: '4.1', title: 'Web Components' },\n            { num: '4.2', title: 'Component Reuse' },\n            { num: '4.3', title: 'Lab: JAMStack Apps' },\n        ],\n    },\n\n    {\n        course: 'prep',\n        subtitle: 'Kickstart Prework',\n        img: 'plans-gb63d02c1d_1280.jpg',\n        content: `\n            Get acquainted to coding on your personal computer or a provided\n            Linux Lab account. Prep your computer, get familiar with tech\n            terms, and learn markdown.\n        `,\n        skill: 1,\n        modules: [\n            { num: '1', title: 'Intro to Coding Bootcamps' },\n            { num: '2', title: 'Linux, macOS, & online setup' },\n            { num: '3', title: 'Terminology research' },\n            { num: '4', title: 'Markdown and Fast Typing' },\n            { num: '5', title: 'Skill Check: Dive into Coding' },\n            { num: '6', title: 'Skill Check: Deeper with Coding' },\n            { num: '7', title: 'Beyond Prework' },\n        ],\n    },\n\n    {\n        course: 'fundamentals',\n        img: 'laptop-g4d7844033_1280.png',\n        subtitle: 'Static Sites & Bootstrap',\n        content: `Start peeling back the layers of the web in this whirlwind\n        tour of HTML, CSS, Dev Tools, column-based layouts, responsive design\n        and Bootstrap 5`,\n        skill: 2,\n        project: 'Static Profile Page',\n        modules: [\n            { num: '1.1', title: 'HTML', topics: [ 'HTML', 'tech stack', 'GitHub', 'Publishing', 'template editing' ] },\n            { num: '1.2', title: 'CSS', topics: [ 'CSS', 'Dev tools', 'selectors', 'classes' ] },\n            { num: '1.3', title: 'Bootstrap', topics: [ 'Bootstrap 5', 'column layouts', 'grid systems', 'responsive design', 'stylesheet linking'  ]  },\n        ],\n\n    },\n\n    {\n        course: 'fundamentals',\n        img: 'apple-ga7d81315e_1280.png',\n        subtitle: 'Automation: Bash, Git, and Python Scripts',\n        content: `Learn how to use Git to keep your code safe under version control.\n        Learn effective terminal use, and how to write Bash and Python scripts\n        to replace tedious tasks.`,\n        skill: 2,\n        project: 'Simple automation of page assembly in Bash and Python',\n        modules: [\n            { num: '2.1', title: 'Bash', topics: [\n              'bash', 'zsh', 'shell scripting', 'directory navigation',\n              'redirection', 'piping', 'wildcards', 'ls', 'cd', 'mkdir',\n              'touch', 'echo', 'cat' ]  },\n            { num: '2.2', title: 'Git', topics: [\n              'git', 'commits', 'remotes', 'branching',\n              'merging', 'commit history', 'sharing with GitHub',\n              'pull requests' ] },\n            { num: '2.3', title: 'Python', topics: [\n              'python', 'python scripting', 'variables', 'assignment operator',\n              'reading files', 'writing files', 'combining files' ] },\n        ],\n    },\n\n    {\n        course: 'fundamentals',\n        img: 'background-g8ee7d113b_1280.jpg',\n        subtitle: 'Computer Programming with Python',\n        project: 'Python-based static site generator, bonus assignment includes computer-vision powered OCR and face detection image gallery',\n        content: `Begin a classic introduction to backend programming with\n        Python, learning core data types and control-flow structures. Go deeper\n        with OOP, Pipenv, and Jinja templating.`,\n        skill: 2,\n        modules: [\n            { num: '3.1', title: 'Flow' },\n            { num: '3.2', title: 'Functions' },\n            { num: '3.3', title: 'Loops' },\n            { num: '4.1', title: 'OOP' },\n            { num: '4.2', title: 'Modules' },\n            { num: '4.3', title: 'Templating' },\n        ],\n    },\n\n    {\n        course: 'backend',\n        subtitle: 'Intro to Networking with Python',\n        img: 'background-ged739cdbf_1280.jpg',\n        imgfg: 'white',\n        project: 'API-driven Dashboard',\n        content: `Learn about the Internet, networking, and server-side\n        programming. You will use web APIs, implement HTTP over TCP/IP, and\n        finally basic request routing and web apps.`,\n        skill: 3,\n        modules: [\n            { num: '1.1', title: 'Requests and APIs' },\n            { num: '1.2', title: 'Servers, HTTP over TCP/IP, and Routing' },\n            { num: '1.3', title: 'Web Apps and Deployment' },\n        ],\n    },\n\n    {\n        course: 'backend',\n        subtitle: 'Practical Django',\n        imgalt: 'Cube in a world of cubes',\n        img: 'cubes-g21a82afce_1280.jpg',\n        imgfg: 'white',\n        project: 'Multi-user shareable DB-driven dashboard',\n        content: `Learn the best practices from an experienced Django\n        developer: MVC, CRUD, forms, urls, users, admin, models, data\n        cardinality (eg Many-To-Many), unit testing, and much more.`,\n        skill: 3,\n        modules: [\n            { num: '2.1', title: 'Django' },\n            { num: '2.2', title: 'Forms' },\n            { num: '2.3', title: 'Users' },\n            { num: '3.1', title: 'CRUD' },\n            { num: '3.2', title: 'Models' },\n            { num: '3.3', title: 'Unit testing' },\n        ],\n\n    },\n\n    {\n        course: 'backend',\n        img: 'server-g6892d162b_1280.jpg',\n        imgfg: 'white',\n        subtitle: 'Intro to Databases with Postgres SQL',\n        content: `Learn SQL basics on a Postgres DB, before getting practice\n        with JOINs, constraints, query analysis, indexes and optimization,\n        full-text search, geo-spatial features, and more.`,\n        skill: 3,\n        modules: [\n            { num: '4.1', title: 'Postgres SQL' },\n            { num: '4.2', title: 'Joins and Indices' },\n        ],\n    },\n\n    {\n        course: 'frontend',\n        imgfg: 'white',\n        img: 'retro-g526726a00_1280.jpg',\n        subtitle: 'JavaScript in the Modern Web',\n        project: 'Data Viz SPA in pure CSS and vanilla JS',\n        content: `Learn modern JavaScript, including let, const, iterators, and\n        DOM manipulation. Explore tricky CSS concepts like animations and\n        pseudo-elements.`,\n        skill: 3,\n        modules: [\n            { num: '1.1', title: 'Box Model & BEM' },\n            { num: '1.2', title: 'Grid & Animations' },\n            { num: '1.3', title: 'Flexbox & JS Events' },\n            { num: '2.1', title: 'Modern JavaScript' },\n            { num: '2.2', title: 'DOM Manipulation' },\n            { num: '2.3', title: 'API & Single Page Apps' },\n        ],\n    },\n\n    {\n        course: 'frontend',\n        img: 'colorful-g427212bf2_1280.jpg',\n        imgfg: 'white',\n        subtitle: 'Thinking in React',\n        project: 'Data Viz SPA in React JS',\n        content: `In this hooks-based React course segment, you go beyond just\n        learning the JSX syntax, and practice \"thinking in React\" with\n        data-flow, lifting state, and more.`,\n        skill: 4,\n        modules: [\n            { num: '3.1', title: 'React' },\n            { num: '3.2', title: 'State' },\n            { num: '3.3', title: 'Lifecycle' },\n            { num: '4.1', title: 'Components' },\n            { num: '4.2', title: 'Data-flow' },\n            { num: '4.3', title: 'Patterns' },\n        ],\n    },\n\n    {\n        course: 'frontend',\n        imgfg: 'white',\n        img: 'wallpaper-gbaac742b2_1280.jpg',\n        subtitle: 'Full Stack JS: MERN, Redux, and Routing',\n        project: 'React Widget Library: Design, launch and release on NPM',\n        content: `Take your React JS skills to the full stack by learning\n        MongoDB, Express.JS, and Node.js. Learn Redux for state management, and\n        Routing for multi-page apps.`,\n        skill: 4,\n        modules: [\n            { num: '4.4', title: 'Full-stack' },\n            { num: '5.1', title: 'Router' },\n            { num: '5.2', title: 'Redux' },\n            { num: '5.3', title: 'MERN' },\n            { num: '5.4', title: 'Testing' },\n        ],\n    },\n\n    {\n        course: 'career',\n        img: 'people-g923420017_1280.jpg',\n        imgfg: 'white',\n        subtitle: 'Kickstart Career',\n        content: `Redo your resume, polish your profile, and hone your\n        networking skills. Practice interviews and develop a \"elevator pitch\"\n        to market yourself for your next job.`,\n        skill: 3,\n        modules: [\n            { num: 'M1', title: 'Resume' },\n            { num: 'M2', title: 'Narrative' },\n            { num: 'M3', title: 'Communication' },\n            { num: 'M4', title: 'Interviews' },\n            { num: 'M5', title: 'Professionalism' },\n        ],\n    },\n\n    {\n        course: 'career',\n        subtitle: 'Algorithms: Computer Science for Job Seekers',\n        img: 'fractal-gdd9943fe4_1280.jpg',\n        imgfg: 'white',\n        content: `A CS course hyper-focused on whiteboard interviews. Learn\n        time complexity analysis (BigO), sorting, solving problems in dynamic\n        programming, recursion and async coding puzzles, and more.`,\n        skill: 4,\n        modules: [\n            { num: '1.1', title: 'Algorithms for Job Seekers' },\n            { num: '1.2', title: 'Recursion and Async' },\n            { num: '1.3', title: 'Sorting Algorithms' },\n            { num: '2.1', title: 'ADT - Abstract Data Types' },\n            { num: '2.2', title: 'Computer Engineering & Data Structures' },\n        ],\n    },\n\n    {\n        course: 'career',\n        img: 'drawing-g538254e05_1280.jpg',\n        subtitle: 'Industry Capstone',\n        content: `Use a 5-milestone process to build a software product from\n        specs to launch. Learn how tech industry roles interlock, including\n        agile Product Management and DevOps.`,\n        project: 'A full-stack app using Python, JavaScript, and other technologies',\n        skill: 4,\n        modules: [\n            { num: 'M1', title: 'Industry: Product Management & Agile' },\n            { num: 'M2', title: 'Project Proposal' },\n            { num: 'M3', title: 'Project Spec' },\n            { num: 'M4', title: 'Project MVP' },\n            { num: 'M5', title: 'Industry: DevOps & Server Topology' },\n            { num: 'M6', title: 'Project Launch' },\n            { num: 'M7', title: 'Project Presentation' },\n        ],\n    },\n]\n\n\n\n/*\n DEAD CODE\n    {\n        course: 'fundamentals',\n        subtitle: 'Modular Python',\n    },\n\n    {\n        title: 'Backend: Django and Postgres' ,\n        time: '4-12 weeks',\n        content: 'Web application programming with Python 3, Django, and Postgres SQL',\n        updated: 'Updated for Django&nbsp;4+',\n        description: [\n            'Build a full-stack web application with Python / Django',\n            'Round out your backend knowledge with PosgreSQL',\n            'Implement a HTTP web server in Python',\n        ],\n    },\n\n    {\n        title: \"Frontend: React and Mern\",\n        time: '5-15 weeks',\n        content: 'Cutting-edge frontend web development with modern vanilla JavaScript and React.js JSX',\n        updated: 'Updated for React.js Hooks and ES6+',\n        description: [\n            'Develop and launch a data visualization React charting component',\n            'Modernized frontend with CSS grid and vanilla JS',\n            'A crash course in MERN for full-stack JS Single Page Apps',\n        ],\n    },\n\n    {\n        title: \"Algorithms: Computer Science for Job Seekers\",\n        time: '2-6 weeks',\n        content: 'Tech career development and fundamentals of algorithms',\n        description: [\n            'Learn techniques on how to make your dream career in tech a reality',\n            'Redo your resume, polish your online profile, and hone your networking skills',\n            'Learn CS concepts and problem solving techniques to beat interviews',\n        ],\n    },\n\n    {\n        title: \"Career Capstone\",\n        time: '2-6 weeks',\n        content: 'Tech career development and fundamentals of algorithms',\n        description: [\n            'Learn techniques on how to make your dream career in tech a reality',\n            'Redo your resume, polish your online profile, and hone your networking skills',\n            'Learn CS concepts and problem solving techniques to beat interviews',\n        ],\n    },\n        description: [\n            'Great for both beginners, and pros looking to brush up',\n            'Indulge your creative side! Create your own e-commerce store or business page.',\n            'Learn to integrate with Etsy, Shopify, YouTube, Soundcloud, Bandcamp, Google Maps and others.',\n            'Build band pages, artist profiles, personal pages, artistic blogs and personal writing spots.',\n            'Learn HTML, CSS',\n            'Learn how to use design principles to create designs from scratch',\n        ],\n\n        description: [\n            'Great for both beginners, and pros looking to brush up',\n            'Indulge your creative side! Create your own e-commerce store or business page.',\n            'Learn to integrate with Etsy, Shopify, YouTube, Soundcloud, Bandcamp, Google Maps and others.',\n            'Build band pages, artist profiles, personal pages, artistic blogs and personal writing spots.',\n            'Learn HTML, CSS',\n            'Learn how to use design principles to create designs from scratch',\n        ],\n\n{ num: '1.1', title: 'Intro to Coding Bootcamps' },\n{ num: '1.2', title: 'Intro to Prework' },\n{ num: '2.1', title: 'Online setup' },\n{ num: '2.2', title: 'macOS setup' },\n{ num: '2.3', title: 'Linux setup' },\n{ num: '3.1', title: 'Terminology immersion' },\n{ num: '3.2', title: 'Jargon research' },\n{ num: '3.3', title: 'Tech news research' },\n{ num: '3.4', title: 'Free software research' },\n{ num: '4.1', title: 'Git and GitHub research' },\n{ num: '4.2', title: 'Touch typing' },\n{ num: '4.3', title: 'Markdown' },\n{ num: '5.1', title: '(Optional) Dive into HTML' },\n{ num: '5.2', title: '(Optional) Dive into Python' },\n{ num: '6.1', title: '(Optional) Deeper with HTML' },\n{ num: '6.2', title: '(Optional) Deeper with CSS' },\n{ num: '6.3', title: '(Optional) Deeper with Python' },\n{ num: '7.1', title: 'Learning with Kickstart Coding' },\n{ num: '7.2', title: 'Additional Prework' },\n*/\n\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS","Code","RequireData"],"Name":"staticdata","DefinitionName":"library1_Courses_staticdata","Source":"http://127.0.0.1:6627/static/libraries/shop/Courses.js","data":[{"title":"Foundations","subtitle":"Web Design: Intro to HTML and CSS","course":"prep","content":"Open Curriculum. Learn foundational skills while creating\n        cool, useful websites from scratch.  Learn how to embed music, videos,\n        maps, e-commerce stores, and more!","skill":1,"img":"computer-g0e7058b72_1280.jpg","imgalt":"A computer with rainbow","imgfg":"white","modules":[{"num":"1.1","title":"HTML basics"},{"num":"1.2","title":"Tags and Styles"},{"num":"1.3","title":"Lab: Single Page Projects"},{"num":"2.1","title":"Multipage Sites"},{"num":"2.2","title":"Flex Layouts"},{"num":"2.3","title":"Lab: Multi-Page Projects"}]},{"title":"Foundations","subtitle":"Web Design: Components & Frameworks","course":"prep","content":"\n            Open Curriculum. Learn design trends, re-usable components, and how\n            to use frameworks, such as Tailwind CSS. Finally, use Modulo.js to\n            launch a JAMStack app on Netlify.\n        ","skill":1,"img":"hd-wallpaper-g721518917_1280.jpg","imgalt":"Illustration of rainbow going through monitor","imgfg":"white","modules":[{"num":"3.1","title":"Tailwind"},{"num":"3.2","title":"Forms"},{"num":"3.3","title":"Lab: Forms and Frameworks"},{"num":"4.1","title":"Web Components"},{"num":"4.2","title":"Component Reuse"},{"num":"4.3","title":"Lab: JAMStack Apps"}]},{"course":"prep","subtitle":"Kickstart Prework","img":"plans-gb63d02c1d_1280.jpg","content":"\n            Get acquainted to coding on your personal computer or a provided\n            Linux Lab account. Prep your computer, get familiar with tech\n            terms, and learn markdown.\n        ","skill":1,"modules":[{"num":"1","title":"Intro to Coding Bootcamps"},{"num":"2","title":"Linux, macOS, & online setup"},{"num":"3","title":"Terminology research"},{"num":"4","title":"Markdown and Fast Typing"},{"num":"5","title":"Skill Check: Dive into Coding"},{"num":"6","title":"Skill Check: Deeper with Coding"},{"num":"7","title":"Beyond Prework"}]},{"course":"fundamentals","img":"laptop-g4d7844033_1280.png","subtitle":"Static Sites & Bootstrap","content":"Start peeling back the layers of the web in this whirlwind\n        tour of HTML, CSS, Dev Tools, column-based layouts, responsive design\n        and Bootstrap 5","skill":2,"project":"Static Profile Page","modules":[{"num":"1.1","title":"HTML","topics":["HTML","tech stack","GitHub","Publishing","template editing"]},{"num":"1.2","title":"CSS","topics":["CSS","Dev tools","selectors","classes"]},{"num":"1.3","title":"Bootstrap","topics":["Bootstrap 5","column layouts","grid systems","responsive design","stylesheet linking"]}]},{"course":"fundamentals","img":"apple-ga7d81315e_1280.png","subtitle":"Automation: Bash, Git, and Python Scripts","content":"Learn how to use Git to keep your code safe under version control.\n        Learn effective terminal use, and how to write Bash and Python scripts\n        to replace tedious tasks.","skill":2,"project":"Simple automation of page assembly in Bash and Python","modules":[{"num":"2.1","title":"Bash","topics":["bash","zsh","shell scripting","directory navigation","redirection","piping","wildcards","ls","cd","mkdir","touch","echo","cat"]},{"num":"2.2","title":"Git","topics":["git","commits","remotes","branching","merging","commit history","sharing with GitHub","pull requests"]},{"num":"2.3","title":"Python","topics":["python","python scripting","variables","assignment operator","reading files","writing files","combining files"]}]},{"course":"fundamentals","img":"background-g8ee7d113b_1280.jpg","subtitle":"Computer Programming with Python","project":"Python-based static site generator, bonus assignment includes computer-vision powered OCR and face detection image gallery","content":"Begin a classic introduction to backend programming with\n        Python, learning core data types and control-flow structures. Go deeper\n        with OOP, Pipenv, and Jinja templating.","skill":2,"modules":[{"num":"3.1","title":"Flow"},{"num":"3.2","title":"Functions"},{"num":"3.3","title":"Loops"},{"num":"4.1","title":"OOP"},{"num":"4.2","title":"Modules"},{"num":"4.3","title":"Templating"}]},{"course":"backend","subtitle":"Intro to Networking with Python","img":"background-ged739cdbf_1280.jpg","imgfg":"white","project":"API-driven Dashboard","content":"Learn about the Internet, networking, and server-side\n        programming. You will use web APIs, implement HTTP over TCP/IP, and\n        finally basic request routing and web apps.","skill":3,"modules":[{"num":"1.1","title":"Requests and APIs"},{"num":"1.2","title":"Servers, HTTP over TCP/IP, and Routing"},{"num":"1.3","title":"Web Apps and Deployment"}]},{"course":"backend","subtitle":"Practical Django","imgalt":"Cube in a world of cubes","img":"cubes-g21a82afce_1280.jpg","imgfg":"white","project":"Multi-user shareable DB-driven dashboard","content":"Learn the best practices from an experienced Django\n        developer: MVC, CRUD, forms, urls, users, admin, models, data\n        cardinality (eg Many-To-Many), unit testing, and much more.","skill":3,"modules":[{"num":"2.1","title":"Django"},{"num":"2.2","title":"Forms"},{"num":"2.3","title":"Users"},{"num":"3.1","title":"CRUD"},{"num":"3.2","title":"Models"},{"num":"3.3","title":"Unit testing"}]},{"course":"backend","img":"server-g6892d162b_1280.jpg","imgfg":"white","subtitle":"Intro to Databases with Postgres SQL","content":"Learn SQL basics on a Postgres DB, before getting practice\n        with JOINs, constraints, query analysis, indexes and optimization,\n        full-text search, geo-spatial features, and more.","skill":3,"modules":[{"num":"4.1","title":"Postgres SQL"},{"num":"4.2","title":"Joins and Indices"}]},{"course":"frontend","imgfg":"white","img":"retro-g526726a00_1280.jpg","subtitle":"JavaScript in the Modern Web","project":"Data Viz SPA in pure CSS and vanilla JS","content":"Learn modern JavaScript, including let, const, iterators, and\n        DOM manipulation. Explore tricky CSS concepts like animations and\n        pseudo-elements.","skill":3,"modules":[{"num":"1.1","title":"Box Model & BEM"},{"num":"1.2","title":"Grid & Animations"},{"num":"1.3","title":"Flexbox & JS Events"},{"num":"2.1","title":"Modern JavaScript"},{"num":"2.2","title":"DOM Manipulation"},{"num":"2.3","title":"API & Single Page Apps"}]},{"course":"frontend","img":"colorful-g427212bf2_1280.jpg","imgfg":"white","subtitle":"Thinking in React","project":"Data Viz SPA in React JS","content":"In this hooks-based React course segment, you go beyond just\n        learning the JSX syntax, and practice \"thinking in React\" with\n        data-flow, lifting state, and more.","skill":4,"modules":[{"num":"3.1","title":"React"},{"num":"3.2","title":"State"},{"num":"3.3","title":"Lifecycle"},{"num":"4.1","title":"Components"},{"num":"4.2","title":"Data-flow"},{"num":"4.3","title":"Patterns"}]},{"course":"frontend","imgfg":"white","img":"wallpaper-gbaac742b2_1280.jpg","subtitle":"Full Stack JS: MERN, Redux, and Routing","project":"React Widget Library: Design, launch and release on NPM","content":"Take your React JS skills to the full stack by learning\n        MongoDB, Express.JS, and Node.js. Learn Redux for state management, and\n        Routing for multi-page apps.","skill":4,"modules":[{"num":"4.4","title":"Full-stack"},{"num":"5.1","title":"Router"},{"num":"5.2","title":"Redux"},{"num":"5.3","title":"MERN"},{"num":"5.4","title":"Testing"}]},{"course":"career","img":"people-g923420017_1280.jpg","imgfg":"white","subtitle":"Kickstart Career","content":"Redo your resume, polish your profile, and hone your\n        networking skills. Practice interviews and develop a \"elevator pitch\"\n        to market yourself for your next job.","skill":3,"modules":[{"num":"M1","title":"Resume"},{"num":"M2","title":"Narrative"},{"num":"M3","title":"Communication"},{"num":"M4","title":"Interviews"},{"num":"M5","title":"Professionalism"}]},{"course":"career","subtitle":"Algorithms: Computer Science for Job Seekers","img":"fractal-gdd9943fe4_1280.jpg","imgfg":"white","content":"A CS course hyper-focused on whiteboard interviews. Learn\n        time complexity analysis (BigO), sorting, solving problems in dynamic\n        programming, recursion and async coding puzzles, and more.","skill":4,"modules":[{"num":"1.1","title":"Algorithms for Job Seekers"},{"num":"1.2","title":"Recursion and Async"},{"num":"1.3","title":"Sorting Algorithms"},{"num":"2.1","title":"ADT - Abstract Data Types"},{"num":"2.2","title":"Computer Engineering & Data Structures"}]},{"course":"career","img":"drawing-g538254e05_1280.jpg","subtitle":"Industry Capstone","content":"Use a 5-milestone process to build a software product from\n        specs to launch. Learn how tech industry roles interlock, including\n        agile Product Management and DevOps.","project":"A full-stack app using Python, JavaScript, and other technologies","skill":4,"modules":[{"num":"M1","title":"Industry: Product Management & Agile"},{"num":"M2","title":"Project Proposal"},{"num":"M3","title":"Project Spec"},{"num":"M4","title":"Project MVP"},{"num":"M5","title":"Industry: DevOps & Server Topology"},{"num":"M6","title":"Project Launch"},{"num":"M7","title":"Project Presentation"}]}]}, 

library1_Courses_state: {"Parent":"library1_Courses","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"selected":"","Name":"state","DefinitionName":"library1_Courses_state"}, 

library1_Courses_script: {"Parent":"library1_Courses","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|AutoExport","Code"],"Name":"script","DefinitionName":"library1_Courses_script","Directives":[]}, 
 };
// Copyright 2023 MichaelB | https://modulojs.org | LGPLv3
// Modulo LGPLv3 NOTICE: Any direct modifications to the Modulo.js source code
// must be LGPL or compatible. It is acceptable to distribute dissimilarly
// licensed code built with the Modulo framework bundled in the same file for
// efficiency instead of "linking", as long as this notice and license remains
// intact with the Modulo.js source code itself and any direct modifications.
if (typeof window === "undefined") { // Node.js environment
    var window = {};
}
window.ModuloPrevious = window.Modulo;
window.moduloPrevious = window.modulo;
window.Modulo = class Modulo {
    constructor() {
        window._moduloID = (window._moduloID || 0) + 1;
        this.id = window._moduloID; // Every Modulo instance gets a unique ID.
        this._configSteps = 0; // Used to check for an infinite loop during load
        this.registry = { registryCallbacks: {} }; // All classes and functions
        this.config = {}; // Default confs for classes (e.g. all Components)
        this.definitions = {}; // For specific definitions (e.g. one Component)
        this.stores = {}; // Global data store (by default, only used by State)
    }

    register(type, cls, defaults = undefined) {
        type = (`${type}s` in this.registry) ? `${type}s` : type; // pluralize
        if (type in this.registry.registryCallbacks) {
            this.registry.registryCallbacks[type](this,  cls, defaults);
        }
        this.assert(type in this.registry, 'Unknown registry type: ' + type);
        this.registry[type][cls.name] = cls;
        if (cls.name[0].toUpperCase() === cls.name[0]) { // e.g. class FooBar
            const conf = this.config[cls.name.toLowerCase()] || {};
            Object.assign(conf, { Type: cls.name }, cls.defaults, defaults);
            this.config[cls.name.toLowerCase()] = conf; // e.g. config.foobar
        }
    }

    instance(def, extra) {
        const isLower = key => key[0].toLowerCase() === key[0];
        const registry = def.Type === 'Component' ? 'coreDefs' : 'cparts'; // TODO: make compatible with any registration type
        const inst = new this.registry[registry][def.Type](this, def, extra.element || null); // TODO rm the element arg
        const id = ++window._moduloID;
        //const conf = Object.assign({}, this.config[name.toLowerCase()], def);
        const conf = Object.assign({}, def); // Just shallow copy "def"
        const attrs = this.registry.utils.keyFilter(conf, isLower);
        Object.assign(inst, { id, attrs, conf }, extra, { modulo: this });
        if (inst.constructedCallback) {
            inst.constructedCallback();
        }
        return inst;
    }

    instanceParts(def, extra, parts = {}) {
        // Loop through all children, instancing each class with configuration
        const allNames = [ def.DefinitionName ].concat(def.ChildrenNames);
        for (const def of allNames.map(name => this.definitions[name])) {
            parts[def.RenderObj || def.Name] = this.instance(def, extra);
        }
        return parts;
    }

    lifecycle(parts, renderObj, lifecycleNames) {
        for (const lifecycleName of lifecycleNames) {
            const methodName = lifecycleName + 'Callback';
            for (const [ name, obj ] of Object.entries(parts)) {
                if (!(methodName in obj)) {
                    continue; // Skip if obj has not registered callback
                }
                const result = obj[methodName].call(obj, renderObj);
                if (result) { // TODO: Change to (result !== undefined) and test
                    renderObj[obj.conf.RenderObj || obj.conf.Name] = result;
                }
            }
        }
    }

    preprocessAndDefine(cb) {
        this.fetchQueue.wait(() => {
            this.repeatProcessors(null, 'DefBuilders', () => {
                this.repeatProcessors(null, 'DefFinalizers', cb || (() => {}));
            });
        });
    }

    loadString(text, parentName = null) { // TODO: Refactor this method away
        return this.loadFromDOM(this.registry.utils.makeDiv(text), parentName);
    }

    loadFromDOM(elem, parentName = null, quietErrors = false) { // TODO: Refactor this method away
        const loader = new this.registry.core.DOMLoader(this);
        return loader.loadFromDOM(elem, parentName, quietErrors);
    }

    repeatProcessors(defs, field, cb) {
        let changed = true; // Run at least once
        const defaults = this.config.modulo['default' + field] || [];
        while (changed) {
            this.assert(this._configSteps++ < 90000, 'Config steps: 90000+');
            changed = false;
            for (const def of (defs || Object.values(this.definitions))) {
                const processors = def[field] || defaults;
                //changed = changed || this.applyProcessors(def, processors);
                const result = this.applyNextProcessor(def, processors);
                if (result === 'wait') { // TODO: Test or document, or delete
                    changed = false;
                    break;
                }
                changed = changed || result;
            }
        }
        const repeat = () => this.repeatProcessors(defs, field, cb);
        if (Object.keys(this.fetchQueue ? this.fetchQueue.queue : {}).length === 0) { // TODO: Remove ?: after core object refactor
            if (cb) {
                cb(); // Synchronous path
            }
        } else {
            this.fetchQueue.enqueueAll(repeat);
        }
    }

    applyNextProcessor(def, processorNameArray) {
        const cls = this.registry.cparts[def.Type] || this.registry.coreDefs[def.Type] || {}; // TODO: Fix this
        const { processors } = this.registry;
        for (const name of processorNameArray) {
            const [ attrName, aliasedName ] = name.split('|');
            if (attrName in def) {
                const funcName = aliasedName || attrName;
                const proc = this.registry.processors[funcName.toLowerCase()];
                const func = funcName in cls ? cls[funcName].bind(cls) : proc;
                const value = def[attrName]; // Pluck value & remove attribute
                delete def[attrName]; // TODO: document 'wait' or rm -v
                return func(this, def, value) === true ? 'wait' : true;
            }
        }
        return false; // No processors were applied, return false
    }

    assert(value, ...info) {
        if (!value) {
            console.error(this.id, ...info);
            throw new Error(`Modulo Error: "${Array.from(info).join(' ')}"`);
        }
    }
}

// TODO: Move to conf
window.Modulo.INVALID_WORDS = new Set((`
    break case catch class const continue debugger default delete do else enum
    export extends finally for if implements import in instanceof interface new
    null package private protected public return static super switch throw try
    typeof var let void  while with await async true false
`).split(/\s+/ig));

// TODO: Condense window.moduloBuild into window.modulo as well, gets "hydrated"
//window.modulo = Object.assign(new Modulo(), window.modulo || {});
// Create a new modulo instance to be the global default instance
window.modulo = new window.Modulo();
if (typeof modulo === "undefined" || modulo.id !== window.modulo.id) {
    var modulo = window.modulo; // TODO: RM when global modulo is cleaned up
}

window.modulo.registry = Object.fromEntries([
    'cparts', 'coreDefs', 'utils', 'core', 'engines', 'commands',
    'templateFilters', 'templateTags', 'processors', 'elements',
].map(registryType => ([ registryType, {} ]))); // Build {} for each

window.modulo.registry.registryCallbacks = {
    commands(modulo, cls) {
        window.m = window.m || {}; // Avoid overwriting existing truthy m
        window.m[cls.name] = () => cls(modulo); // Attach shortcut to global "m"
    },
    processors(modulo, cls) {
        modulo.registry.processors[cls.name.toLowerCase()] = cls; // Alias lower
    },
    core(modulo, cls) { // Global / core class getting registered
        const lowerName = cls.name[0].toLowerCase() + cls.name.slice(1);
        modulo[lowerName] = new cls(modulo);
        modulo.assets = modulo.assetManager; // TODO Rm
    },
};

// TODO: Static: true to "squash" to a single global attached to window.
// modulo.register('coreDef', window.Modulo, { 
modulo.register('coreDef', class Modulo {}, {
    ChildPrefix: '', // Prevents all children from getting modulo_ prefixed
    Contains: 'coreDefs',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
    defaultDef: { DefTarget: null, DefinedAs: null, DefName: null },
    defaultDefLoaders: [ 'DefTarget', 'DefinedAs', 'Src' ],
    defaultFactory: [ 'RenderObj', 'factoryCallback' ],
});

window.modulo.DEVLIB_SOURCE = (`
<Artifact name="css" bundle="link[rel=stylesheet]" exclude="[modulo-asset]">
    <Template>{% for elem in bundle %}{{ elem.bundledContent|safe }}{% endfor %}
              {% for css in assets.cssAssetsArray %}{{ css|safe }}
              {% endfor %}</Template>
</Artifact>
<Artifact name="js" bundle="script[src]" exclude="[modulo-asset]">
    <Template macros="yesplease">window.moduloBuild = window.moduloBuild || { modules: {}, nameToHash: {} };
        {% for name, hash in assets.nameToHash %}{% if hash in assets.moduleSources %}{% if name|first is not "_" %}
            window.moduloBuild.modules["{{ hash }}"] = function {{ name }} (modulo) {
                {{ assets.moduleSources|get:hash|safe }}
            };
            window.moduloBuild.nameToHash.{{ name }} = "{{ hash }}";
        {% endif %}{% endif %}{% endfor %}
        window.moduloBuild.definitions = { {% for name, value in definitions %}
            {% if name|first is not "_" %}{{ name }}: {{ value|json|safe }},{% endif %} 
        {% endfor %} };
        {% for elem in bundle %}{{ elem.bundledContent|safe }}{% endfor %}
        modulo.assets.modules = window.moduloBuild.modules;
        modulo.assets.nameToHash = window.moduloBuild.nameToHash;
        modulo.definitions = window.moduloBuild.definitions;
        {% for name in assets.mainRequires %}
            modulo.assets.require("{{ name|escapejs }}");
        {% endfor %}
    </Template>
</Artifact>
<Artifact name="html" remove="script[src],link[href],[modulo-asset],template[modulo],script[modulo],modulo">
    <Script>
        const head = window.document.head || { innerHTML: '' };
        const body = window.document.body || { innerHTML: '', id: '' };
        script.exports.prefix = '<!DOCTYPE html><html><head>' + head.innerHTML;
        script.exports.interfix = '</head><body id="' + body.id + '">' + body.innerHTML;
        script.exports.suffix = '</body></html>';
    </S` + `cript>
    <Template>{{ script.prefix|safe }}<link rel="stylesheet" href="{{ definitions._artifact_css.OutputPath }}" />
        {{ script.interfix|safe }}<script src="{{ definitions._artifact_js.OutputPath }}"></s` + `cript>
        {{ script.suffix|safe }}</Template>
</Artifact>
`).replace(/^\s+/gm, '');


modulo.register('core', class ValueResolver {
    constructor(contextObj = null) {
        this.ctxObj = contextObj;
    }

    get(key, ctxObj = null) {
        ctxObj = ctxObj || this.ctxObj;
        if (!/^[a-z]/i.test(key) || Modulo.INVALID_WORDS.has(key)) { // XXX global ref
            return JSON.parse(key); // Not a valid identifier, try JSON
        }
        return window.modulo.registry.utils.get(ctxObj, key); // Drill down
    }

    set(obj, keyPath, val) {
        const index = keyPath.lastIndexOf('.') + 1; // Index at 1 (0 if missing)
        const key = keyPath.slice(index).replace(/:$/, ''); // Between "." & ":"
        const path = keyPath.slice(0, index - 1); // Exclude "."
        const target = index ? this.get(path, obj) : obj; // Get ctxObj or obj
        target[key] = keyPath.endsWith(':') ? this.get(val) : val;
    }
});


modulo.register('core', class DOMLoader {
    constructor(modulo) {
        this.modulo = modulo; // TODO: need to standardize back references to prevent mismatches
    }

    getAllowedChildTags(parentName) {
        let tagsLower = this.modulo.config.domloader.topLevelTags; // "Modulo"
        if (/^_[a-z][a-zA-Z]+$/.test(parentName)) { // _likethis, e.g. _artifact
            tagsLower = [ parentName.toLowerCase().replace('_', '') ];
        } else if (parentName) { // Normal parent, e.g. Library, Component etc
            const parentDef = this.modulo.definitions[parentName];
            const msg = `Invalid parent: ${ parentName } (${ parentDef })`;
            this.modulo.assert(parentDef && parentDef.Contains, msg);
            const names = Object.keys(this.modulo.registry[parentDef.Contains]);
            tagsLower = names.map(s => s.toLowerCase()); // Ignore case
        }
        return tagsLower;
    }

    loadFromDOM(elem, parentName = null, quietErrors = false) {
        const resolver = new this.modulo.registry.core.ValueResolver(this.modulo);
        const { defaultDef } = this.modulo.config.modulo;
        const toCamel = s => s.replace(/-([a-z])/g, g => g[1].toUpperCase());
        const tagsLower = this.getAllowedChildTags(parentName);
        const array = [];
        for (const node of elem.children || []) {
            const partTypeLC = this.getDefType(node, tagsLower, quietErrors);
            if (node._moduloLoadedBy || partTypeLC === null) {
                continue; // Already loaded, or an ignorable or silenced error
            }
            node._moduloLoadedBy = this.modulo.id; // First time loading, mark
            // Valid definition, now create the "def" object
            const def = Object.assign({ Parent: parentName }, defaultDef);
            def.Content = node.tagName === 'SCRIPT' ? node.textContent : node.innerHTML;
            array.push(Object.assign(def, this.modulo.config[partTypeLC]));
            for (let name of node.getAttributeNames()) { // Loop through attrs
                const value = node.getAttribute(name);
                if (partTypeLC === name && !value) { // e.g. <def Script>
                    continue; // This is the "Type" attribute itself, skip
                }
                def[toCamel(name)] = value; // "-kebab-case" to "CamelCase"
            }
        }
        this.modulo.repeatProcessors(array, 'DefLoaders');
        return array;
    }

    getDefType(node, tagsLower, quiet = false) {
        const { tagName, nodeType, textContent } = node;
        if (nodeType !== 1) { // Text nodes, comment nodes, etc
            if (nodeType === 3 && textContent && textContent.trim() && !quiet) {
                console.error(`Unexpected text in definition: ${textContent}`);
            }
            return null;
        }
        let defType = tagName.toLowerCase();
        if (defType in this.modulo.config.domloader.genericDefTags) {
            for (const attrUnknownCase of node.getAttributeNames()) {
                const attr = attrUnknownCase.toLowerCase();
                if (!node.getAttribute(attr) && tagsLower.includes(attr)) {
                    defType = attr; // Has an empty string value, is a def
                }
                break; // Always break: We will only look at first attribute
            }
        }
        if (!(tagsLower.includes(defType))) { // Were any discovered?
            if (defType === 'testsuite') { return null; } /* XXX Remove and add recipe to stub / silence TestSuite not found errors */
            if (!quiet) { // Invalid def / cPart: This type is not allowed here
                console.error(`"${ defType }" is not one of: ${ tagsLower }`);
            }
            return null // Return null to signify not a definition
        }
        return defType; // Valid, expected definition: Return lowercase type
    }
}, {
    topLevelTags: [ 'modulo' ], // Only "Modulo" is top
    genericDefTags: { def: 1, script: 1, template: 1, style: 1 },
});

modulo.register('processor', function src (modulo, def, value) {
    const { getParentDefPath } = modulo.registry.utils;
    def.Source = (new window.URL(value, getParentDefPath(modulo, def))).href;
    modulo.fetchQueue.fetch(def.Source).then(text => {
        def.Content = (text || '') + (def.Content || '');
    });
});

modulo.register('processor', function srcSync (modulo, def, value) {
    modulo.registry.processors.src(modulo, def, value);
    return true; // Only difference is return "true" for "wait"
});

modulo.register('processor', function defTarget (modulo, def, value) {
    const resolverName = def.DefResolver || 'ValueResolver'; // TODO: document, make it switch to Template Resolver if there is {% or {{
    const resolver = new modulo.registry.core[resolverName](modulo);
    const target = value === null ? def : resolver.get(value);
    for (const [ key, defValue ] of Object.entries(def)) {
        if (key.endsWith(':') || key.includes('.')) {
            delete def[key]; // Remove & replace unresolved value
            resolver.set(/^[a-z]/.test(key) ? target : def, key, defValue);
        }
    }
});

modulo.register('processor', function content (modulo, conf, value) {
    modulo.loadString(value, conf.DefinitionName);
});

modulo.register('processor', function definedAs (modulo, def, value) {
    def.Name = value ? def[value] : (def.Name || def.Type.toLowerCase());
    const parentDef = modulo.definitions[def.Parent];
    const parentPrefix = parentDef && ('ChildPrefix' in parentDef) ?
        parentDef.ChildPrefix : (def.Parent ? def.Parent + '_' : '');
    def.DefinitionName = parentPrefix + def.Name;
    // Search for the next free Name by suffixing numbers
    while (def.DefinitionName in modulo.definitions) {
        const match = /([0-9]+)$/.exec(def.Name);
        const number = match ? match[0] : '';
        def.Name = def.Name.replace(number, '') + ((number * 1) + 1);
        def.DefinitionName = parentPrefix + def.Name;
    }
    modulo.definitions[def.DefinitionName] = def; // store definition
    const parentConf = modulo.definitions[def.Parent];
    if (parentConf) {
        parentConf.ChildrenNames = parentConf.ChildrenNames || [];
        parentConf.ChildrenNames.push(def.DefinitionName);
    }
});

modulo.register('util', function initComponentClass (modulo, def, cls) {
    // Run factoryCallback static lifecycle method to create initRenderObj
    const initRenderObj = { elementClass: cls };
    for (const defName of def.ChildrenNames) {
        const cpartDef = modulo.definitions[defName];
        const cpartCls = modulo.registry.cparts[cpartDef.Type];
        if (cpartCls.factoryCallback) {
            const result = cpartCls.factoryCallback(initRenderObj, cpartDef, modulo);
            initRenderObj[cpartDef.RenderObj || cpartDef.Name] = result;
        }
    }

    cls.prototype.init = function init () {
        this.modulo = modulo;
        this.isMounted = false;
        this.isModulo = true;
        this.originalHTML = null;
        this.originalChildren = [];
        this.cparts = modulo.instanceParts(def, { element: this });
    };
    modulo._connectedQueue = modulo._connectedQueue || []; // Ensure array
    modulo._drainQueue = () => { // "Clusters" all moduloMount calls
        while (modulo._connectedQueue.length > 0) { // Drains + invokes
            modulo._connectedQueue.shift().moduloMount();
        }
    };
    cls.prototype.connectedCallback = function connectedCallback () {
        modulo._connectedQueue.push(this);
        window.setTimeout(modulo._drainQueue, 0);
    };
    cls.prototype.moduloMount = function moduloMount(force = false) {
        if ((!this.isMounted && window.document.contains(this)) || force) {
            this.cparts.component._lifecycle([ 'initialized', 'mount', 'mountRender' ]);
        }
    };
    cls.prototype.initRenderObj = initRenderObj;
    cls.prototype.rerender = function (original = null) {
        if (!this.isMounted) { // Not mounted, do Mount which will also rerender
            return this.moduloMount();
        }
        this.cparts.component.rerender(original); // Otherwise, normal rerender
    };
    cls.prototype.getCurrentRenderObj = function () {
        return this.cparts.component.getCurrentRenderObj();
    };
    modulo.register('element', cls); // All elements get registered centrally
});

modulo.register('util', function makeStore (modulo, def) {
    const isLower = key => key[0].toLowerCase() === key[0]; // skip "-prefixed"
    let data = modulo.registry.utils.keyFilter(def, isLower); // Get defaults
    data = JSON.parse(JSON.stringify(data)); // Deep copy to ensure primitives
    return { data, boundElements: {}, subscribers: [] };
});

modulo.register('processor', function mainRequire (modulo, conf, value) {
    modulo.assets.mainRequire(value);
});

modulo.register('cpart', class Artifact {
    buildCommandCallback({ modulo, def }) {
        const finish = () => {
            const { saveFileAs, hash } = modulo.registry.utils;
            const children = (def.ChildrenNames || []).map(n => modulo.definitions[n]);
            //for (const child of children
            const tDef = children.filter(({ Type }) => Type === 'Template')[0] || null;
            const sDef = children.filter(({ Type }) => Type === 'Script')[0] || null;
            let result = { exports: {} };
            if (sDef) {
                result = modulo.assets.require(sDef.DefinitionName);
            }
            const ctx = Object.assign({}, modulo, { script: result.exports });
            ctx.bundle = bundledElems;
            if (!(tDef.DefinitionName in modulo.assets.nameToHash)) {
                modulo.registry.cparts.Template.TemplatePrebuild(modulo, tDef);
            }
            const template = modulo.instance(tDef, { });
            template.initializedCallback();
            let code = template.render(ctx);
            if (tDef && tDef.macros) { // TODO: Refactor this code, maybe turn into Template core feature to allow 2 tier / "macro" templating?
                const tDef2 = Object.assign({}, tDef, {
                    modeTokens: ['/' + '*-{-% %-}-*/', '/' + '*-{-{ }-}-*/', '/' + '*-{-# #-}-*/'],
                    modes: {
                        ['/' + '*-{-%']: template.modes['{%'], // alias
                        ['/' + '*-{-{']: template.modes['{{'], // alias
                        ['/' + '*-{-#']: template.modes['{#'], // alias
                        text: template.modes.text,
                    },
                    Content: code,
                    DefinitionName: tDef.DefinitionName + '_macro',
                    Hash: undefined,
                });
                if (!(tDef2.DefinitionName in modulo.assets.nameToHash)) {
                    modulo.registry.cparts.Template.TemplatePrebuild(modulo, tDef2);
                }
                const template2 = modulo.instance(tDef2, { });
                template2.initializedCallback();
                code = template2.render(ctx);
            }
            def.FileName = `modulo-build-${ hash(code) }.${ def.name }`;
            if (def.name === 'html') { // TODO: Make this only happen during SSG
                def.FileName = window.location.pathname.split('/').pop() || 'index.html';
            }
            def.OutputPath = saveFileAs(def.FileName, code);
        }

        const bundledElems = [];
        if (def.bundle) {
            for (const elem of document.querySelectorAll(def.bundle)) {
                if (def.exclude && elem.matches(def.exclude)) {
                    continue;
                }
                const url = elem.getAttribute('src') || elem.getAttribute('href');
                if (url) { // Needed, since otherwise it chokes on blank src
                    modulo.fetchQueue.fetch(url).then(text => {
                        delete modulo.fetchQueue.data[url];
                        elem.bundledContent = text;
                    });
                }
                bundledElems.push(elem);
            }
        }
        if (def.remove) {
            document.querySelectorAll(def.remove).forEach(elem => elem.remove());
        }
        modulo.fetchQueue.enqueueAll(() => finish(bundledElems));
    }
}, {
    Contains: 'cparts',
    DefinedAs: 'name',
    RenderObj: 'artifact',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
});

/*
modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
    directives: [ 'component.event', 'component.dataProp' ],
};
*/

modulo.config.component = {
    mode: 'regular',
    rerender: 'event',
    engine: 'Reconciler', // TODO: 'Engine':, depends on Instbuilders
    // namespace: 'x',
    Contains: 'cparts',
    CustomElement: 'window.HTMLElement',
    DefinedAs: 'name',
    RenderObj: 'component', // Make features available as "renderObj.component" 
    // Children: 'cparts', // How we can implement Parentage: Object.keys((get('modulo.registry.' + value))// cparts))
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
    DefBuilders: [ 'CustomElement', 'Code' ],
    DefFinalizers: [ 'MainRequire' ],
    Directives: [ 'slotLoad', 'eventMount', 'eventUnmount', 'dataPropMount', 'dataPropUnmount' ],
    //InstBuilders: [ 'CreateChildren' ],
};

modulo.register('coreDef', class Component {
    static CustomElement (modulo, def, value) {
        if (!def.ChildrenNames || def.ChildrenNames.length === 0) {
            console.warn('Empty ChildrenNames specified:', def.DefinitionName);
            return;
        }
        def.namespace = def.namespace || 'x';
        def.name = def.name || def.DefName || def.Name;
        def.TagName = `${ def.namespace }-${ def.name }`.toLowerCase();
        def.MainRequire = def.DefinitionName;
        const className =  `${ def.namespace }_${ def.name }`;
        def.Code = `
            const def = modulo.definitions['${ def.DefinitionName }'];
            class ${ className } extends ${ value } {
                constructor() { super(); this.init(); }
            }
            modulo.registry.utils.initComponentClass(modulo, def, ${ className });
            window.customElements.define(def.TagName, ${ className });
            return ${ className };
        `;
    }

    rerender(original = null) {
        if (original) {
            if (this.element.originalHTML === null) {
                this.element.originalHTML = original.innerHTML;
            }
            this.element.originalChildren = Array.from(
                original.hasChildNodes() ? original.childNodes : []);
        }
        this._lifecycle([ 'prepare', 'render', 'dom', 'reconcile', 'update' ]);
    }

    buildCallback() {
        const PRE = 'modulo-mount-'; // Prefix used for attributes
        if (this.element.originalHTML !== this.element.innerHTML) {
            this.element.setAttribute(PRE + 'html', this.element.originalHTML);
        }
        const nodes = Array.from(this.element.querySelectorAll('*'));
        for (const [ node, method, arg ] of this._mountPatchset || []) {
            const { rawName, el } = arg || {}; // Extract needed directive info
            const count = el ? nodes.filter(e => e.contains(el)).length : 0;
            if (count) { // The element exists, and is contained by 1 or more
                const existing = el.getAttribute(PRE + 'patches') || '';
                if (!existing.includes(count + ',' + rawName)) { // Not a dupe
                    const value = existing + '\n' + count + ',' + rawName;
                    el.setAttribute(PRE + 'patches', value.trim());
                }
            }
        }
    }

    getCurrentRenderObj() {
        return (this.element.eventRenderObj || this.element.renderObj || this.element.initRenderObj);
    }

    _lifecycle(lifecycleNames, rObj={}) {
        const renderObj = Object.assign({}, rObj, this.getCurrentRenderObj());
        this.element.renderObj = renderObj;
        this.modulo.lifecycle(this.element.cparts, renderObj, lifecycleNames);
        //this.element.renderObj = null; // ?rendering is over, set to null
    }

    scriptTagLoad({ el }) {
        const newScript = el.ownerDocument.createElement('script');
        newScript.src = el.src; // TODO: Possibly copy other attrs?
        el.remove(); // delete old element
        this.element.ownerDocument.head.append(newScript);
    }

    initializedCallback(renderObj) {
        const { makeDiv } = this.modulo.registry.utils;
        const opts = { directiveShortcuts: [], directives: [] };
        for (const cPart of Object.values(this.element.cparts)) {
            const def = (cPart.def || cPart.conf);
            for (const method of def.Directives || []) {
                const dirName = (def.RenderObj || def.Name) + '.' + method;
                opts.directives[dirName] = cPart;
            }
        }
        const addHead = ({ el }) => this.element.ownerDocument.head.append(el);
        if (this.attrs.mode === 'shadow') {
            this.element.attachShadow({ mode: 'open' });
        } else { // TODO: Refactor logic here
            opts.directives.slot = this;
            this.slotTagLoad = this.slotLoad.bind(this); // TODO switch to only slotTagLoad
            if (this.attrs.mode === 'vanish-into-document') {
                opts.directives.script = this;
                for (const headTag of [ 'link', 'title', 'meta' ]) {
                    opts.directives[headTag] = this;
                    this[headTag + 'TagLoad'] = addHead;
                }
            }
        }
        this.reconciler = new this.modulo.registry.engines.Reconciler(this.modulo, opts);
        this.resolver = new this.modulo.registry.core.ValueResolver(this.modulo);
        const html = this.element.getAttribute('modulo-mount-html');
        this._rival = (html !== null) ? makeDiv(html) : this.element;
        this.element.originalHTML = html || this._rival.innerHTML;
    }

    mountCallback() { // Prepare the element, "hydrating" the "mount-patches"
        const ATTR = 'modulo-mount-patches'; // Attribute used
        const { get } = this.modulo.registry.utils;
        for (const elem of this.element.querySelectorAll(`[${ ATTR }]`)) {
            for (const line of elem.getAttribute(ATTR).split('\n')) {
                const [ count, rawName ] = line.split(','); // Comma seperated
                const nodePath = '.parentNode'.repeat(count).substr(1);
                if (this.element === get(elem, nodePath)) { // It's me!
                    this.reconciler.patchDirectives(elem, rawName, 'Mount');
                    const newVal = elem.getAttribute(ATTR).replace(line, '');
                    elem.setAttribute(ATTR, newVal); // "Consume" line from attr
                }
            }
        }
    }

    mountRenderCallback() { // First "mount", trigger render & hydration
        this.reconciler.applyPatches(this.reconciler.patches); // From "mount"
        this.rerender(this._rival); // render + mount childNodes
        this.element.isMounted = true; // Mark as mounted
    }

    prepareCallback() {
        const { originalHTML } = this.element;
        return { originalHTML, innerDOM: null, innerHTML: null, patches: null, id: this.id };
    }

    domCallback(renderObj) {
        let { root, innerHTML, innerDOM } = renderObj.component;
        if (innerHTML !== null && !innerDOM) {
            innerDOM = this.reconciler.loadString(innerHTML, this.localNameMap);
            this.reconciler.patches = []; // clear
        }
        return { root, innerHTML, innerDOM };
    }

    reconcileCallback(renderObj) {
        let { innerHTML, innerDOM, patches, root } = renderObj.component;
        this.mode = this.attrs.mode || 'regular';
        if (innerHTML !== null) {
            if (this.mode === 'regular' || this.mode === 'vanish') {
                root = this.element; // default, use element as root
            } else if (this.mode === 'shadow') {
                root = this.element.shadowRoot;
            } else if (this.mode === 'vanish-into-document') {
                root = this.element.ownerDocument.body; // render into body
            } else {
                this.modulo.assert(this.mode === 'custom-root', 'Invalid mode');
            }
            const rival = innerDOM || innerHTML || '';
            patches = this.reconciler.reconcile(root, rival, this.localNameMap);
        }
        return { patches, innerHTML }; // TODO remove innerHTML from here
    }

    updateCallback(renderObj) {
        const { patches, innerHTML } = renderObj.component;
        if (patches) {
            this._mountPatchset = this._mountPatchset || patches; // 1st render
            this.reconciler.applyPatches(patches);
        }
        if (!this.element.isMounted && (this.mode === 'vanish' ||
                                        this.mode === 'vanish-into-document')) {
            // First time initialized, and is one of the vanish modes
            this.element.replaceWith(...this.element.childNodes); // Replace self
        }
    }

    handleEvent(func, payload, ev) {
        this._lifecycle([ 'event' ]);
        const { value } = (ev.target || {}); // Get value if is <INPUT>, etc
        func.call(null, payload === undefined ? value : payload, ev);
        this._lifecycle([ 'eventCleanup' ]); // todo: should this go below rerender()?
        if (this.attrs.rerender !== 'manual') {
            this.element.rerender(); // always rerender after events
        }
    }

    slotLoad({ el, value }) {
        let chosenSlot = value || el.getAttribute('name') || null;
        const getSlot = c => c.getAttribute ? (c.getAttribute('slot') || null) : null;
        let childs = this.element.originalChildren;
        childs = childs.filter(child => getSlot(child) === chosenSlot);
        if (!el.moduloSlotHasLoaded) { // clear innerHTML if this is first load
            el.innerHTML = '';
            el.moduloSlotHasLoaded = true;
        }
        el.append(...childs);
    }

    eventMount({ el, value, attrName, rawName }) {
        // Note: attrName becomes "event name"
        // TODO: Make it @click.payload, and then have this see if '.' exists
        // in attrName and attach as payload if so
        const { resolveDataProp } = this.modulo.registry.utils;
        const get = (key, key2) => resolveDataProp(key, el, key2 && get(key2));
        const func = get(attrName);
        this.modulo.assert(func, `No function found for ${rawName} ${value}`);
        if (!el.moduloEvents) {
            el.moduloEvents = {};
        }
        const listen = ev => {
            ev.preventDefault();
            const payload = get(attrName + '.payload', 'payload');
            const currentFunction = resolveDataProp(attrName, el);
            this.handleEvent(currentFunction, payload, ev);
        };
        el.moduloEvents[attrName] = listen;
        el.addEventListener(attrName, listen);
    }

    eventUnmount({ el, attrName }) {
        if (el.moduloEvents) { // TODO: Remove this check
            el.removeEventListener(attrName, el.moduloEvents[attrName]);
            delete el.moduloEvents[attrName];
        }
    }

    dataPropMount({ el, value, attrName, rawName }) { // element, 
        // Resolve the given value and attach to dataProps
        if (!el.dataProps) {
            el.dataProps = {};
            el.dataPropsAttributeNames = {};
        }
        const resolver = new this.modulo.registry.core.ValueResolver(// OLD TODO: Global modulo
                      this.element && this.element.getCurrentRenderObj());
        resolver.set(el.dataProps, attrName + ':', value);
        el.dataPropsAttributeNames[rawName] = attrName;
    }

    dataPropUnmount({ el, attrName, rawName }) {
        if (!el.dataProps) { console.log('Modulo ERROR: Could not Unmount', attrName, rawName, el); }
        if (el.dataProps) {
            delete el.dataProps[attrName];
            delete el.dataPropsAttributeNames[rawName];
        }
    }
});

modulo.register('coreDef', class Library { }, {
    Contains: 'coreDefs',
    DefTarget: 'config.component',
    // DefinedAs: 'namespace', // TODO: Write tests for Library, the add this
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
});

modulo.register('util', function keyFilter (obj, func) {
    const keys = func.call ? Object.keys(obj).filter(func) : func;
    return Object.fromEntries(keys.map(key => [ key, obj[key] ]));
});

modulo.register('util', function resolveDataProp (key, elem, defaultVal) {
    if (elem.dataProps && key in elem.dataProps) {
        return elem.dataProps[key];
    }
    return elem.hasAttribute(key) ? elem.getAttribute(key) : defaultVal;
});

modulo.register('util', function cleanWord (text) {
    // todo: should merge with stripWord ? See if "strip" functionality is enough
    return (text + '').replace(/[^a-zA-Z0-9$_\.]/g, '') || '';
});

modulo.register('util', function stripWord (text) {
    return text.replace(/^[^a-zA-Z0-9$_\.]/, '')
               .replace(/[^a-zA-Z0-9$_\.]$/, '');
});

modulo.register('util', function hash (str) {
    // Simple, insecure, "hashCode()" implementation. Returns base32 hash
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        //h = ((h << 5 - h) + str.charCodeAt(i)) | 0;
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    const hash8 = ('---------' + (h || 0).toString(32)).slice(-8);
    return hash8.replace(/-/g, 'x'); // Pad with 'x'
});

modulo.register('util', function makeDiv(html) {
    const div = window.document.createElement('div');
    div.innerHTML = html;
    return div;
});

modulo.register('util', function normalize(html) {
    // Normalize space to ' ' & trim around tags
    return html.replace(/\s+/g, ' ').replace(/(^|>)\s*(<|$)/g, '$1$2').trim();
});

modulo.register('util', function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\" + "\x24" + "&");
});

modulo.register('util', function saveFileAs(filename, text) {
    const element = window.document.createElement('a');
    const enc = window.encodeURIComponent(text);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + enc);
    element.setAttribute('download', filename);
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
    return `./${filename}`; // by default, return local path
});

modulo.register('util', function get(obj, key) {
    return (key in obj) ? obj[key] : (key + '').split('.').reduce((o, name) => o[name], obj);
});

modulo.register('util', function set(obj, keyPath, val) {
    return new window.modulo.registry.core.ValueResolver(window.modulo).set(obj, keyPath, val);
});

modulo.register('util', function getParentDefPath(modulo, def) {
    const { getParentDefPath } = modulo.registry.utils; // Use to recurse
    const pDef = def.Parent ? modulo.definitions[def.Parent] : null;
    const url = String(window.location).split('?')[0]; // Remove ? and #
    return pDef ? pDef.Source || getParentDefPath(modulo, pDef) : url;
});

modulo.register('core', class AssetManager {
    constructor (modulo) {
        this.modulo = modulo;
        this.stylesheets = {}; // Object with hash of CSS (prevents double add)
        this.cssAssetsArray = []; // List of CSS assets added, in order
        this.modules = {}; // Object containing JS functions with hashed keys
        this.moduleSources = {}; // Source code of JS functions (for build)
        this.nameToHash = {}; // Reversable hash / human name for modules
        this.mainRequires = []; // List of globally invoked modules
    }

    mainRequire(moduleName) {
        this.mainRequires.push(moduleName);
        this.require(moduleName);
    }

    require(moduleName) {
        // TODO: Don't use nameToHash for simpler look-up, but include
        // "hashToName" for deduping during add (just create extra refs)
        this.modulo.assert(moduleName in this.nameToHash,
            `${ moduleName } not in ${ Object.keys(this.nameToHash).join(', ') }`);
        const hash = this.nameToHash[moduleName];
        this.modulo.assert(hash in this.modules,
            `${ moduleName } / ${ hash } not in ${ Object.keys(this.modules).join(', ') }`);
        return this.modules[hash].call(window, this.modulo);
    }

    define(name, code) {
        const hash = this.modulo.registry.utils.hash(code);
        this.modulo.assert(!(name in this.nameToHash), `Duplicate: ${ name }`);
        this.nameToHash[name] = hash;
        if (!(hash in this.modules)) {
            this.moduleSources[hash] = code;
            const assignee = `window.modulo.assets.modules["${ hash }"] = `;
            const prefix = assignee + `function ${ name } (modulo) {\n`;
            this.appendToHead('script', `"use strict";${ prefix }${ code }};\n`);
        }
    }

    registerStylesheet(text) {
        const hash = this.modulo.registry.utils.hash(text);
        if (!(hash in this.stylesheets)) {
            this.stylesheets[hash] = true;
            this.cssAssetsArray.push(text);
            this.appendToHead('style', text);
        }
    }

    appendToHead(tagName, codeStr) {
        const doc = window.document;
        const elem = doc.createElement(tagName);
        elem.setAttribute('modulo-asset', 'y'); // Mark as an "asset"
        if (doc.head === null) {
            console.log('Modulo WARNING: Head not ready.');
            setTimeout(() => doc.head.append(elem), 0);
        } else {
            doc.head.append(elem);
        }
        elem.textContent = codeStr; // Blocking, causes eval
    }
});

modulo.register('core', class FetchQueue {
    constructor(modulo) {
        this.modulo = modulo;
        this.queue = {};
        this.data = {};
        this.waitCallbacks = [];
    }

    fetch(src) {
        const label = 'testlabel'; // XXX rm label concept
        //if (src in this.data) { // Already found, resolve immediately
        //    const then = resolve => resolve(this.data[src], label, src);
        //    return { then, catch: () => {} }; // Return synchronous Then-able
        //}
        //return new Promise((resolve, reject) => {
        //});
        return { then : (resolve, reject) => {
            if (src in this.data) { // Already found, resolve immediately
                resolve(this.data[src], label, src);
            } else if (!(src in this.queue)) { // First time, make queue
                this.queue[src] = [ resolve ];
                // TODO: Think about if we want to keep cache:no-store
                window.fetch(src, { cache: 'no-store' })
                    .then(response => response.text())
                    .then(text => this.receiveData(text, label, src))
                    .catch(reject);
            } else {
                this.queue[src].push(resolve); // add to end of src queue
            }
        }};
    }

    receiveData(text, label, src) {
        this.data[src] = text; // load data
        const queue = this.queue[src];
        delete this.queue[src]; // delete queue
        queue.forEach(func => func(text, label, src));
        this.checkWait();
    }

    enqueueAll(callback) {
        const allQueues = Array.from(Object.values(this.queue));
        if (allQueues.length === 0) {
            return callback();
        }
        let callbackCount = 0;
        for (const queue of allQueues) {
            queue.push(() => {
                callbackCount++;
                if (callbackCount >= allQueues.length) {
                    //console.log(Array.from(Object.values(this.queue)).length);
                    callback();
                }
            });
        }
    }

    wait(callback) {
        // NOTE: There is a bug with this vs enqueueAll, specifically if we are
        // already in a wait callback, it can end up triggering the next one
        // immediately
        //console.log({ wait: Object.keys(this.queue).length === 0 }, Object.keys(this.queue));
        this.waitCallbacks.push(callback); // add to end of queue
        this.checkWait(); // attempt to consume wait queue
    }

    checkWait() {
        if (Object.keys(this.queue).length === 0) {
            while (this.waitCallbacks.length > 0) {
                this.waitCallbacks.shift()(); // clear while invoking
            }
        }
    }
});


modulo.register('cpart', class Props {
    initializedCallback(renderObj) {
        const props = {};
        const { resolveDataProp } = this.modulo.registry.utils;
        for (const [ propName, def ] of Object.entries(this.attrs)) {
            props[propName] = resolveDataProp(propName, this.element, def);
            // TODO: Implement type-checked, and required
        }
        return props;
    }

    prepareCallback(renderObj) {
        /* TODO: Remove after observedAttributes is implemented, e.g.:
          static factoryCallback({ attrs }, { componentClass }, renderObj) {
              //componentClass.observedAttributes = Object.keys(attrs);
          }
        */
        return this.initializedCallback(renderObj);
    }
});

modulo.register('cpart', class Style {
    static AutoIsolate(modulo, def, value) {
        const { AutoIsolate } = modulo.registry.cparts.Style;
        const { namespace, mode, Name } = modulo.definitions[def.Parent] || {};
        if (value === true) { // Auto-detect based on parent's mode
            AutoIsolate(modulo, def, mode); // Check "mode" instead (1x recurse)
        } else if (value === 'regular' && !def.isolateClass) { // Use prefix
            def.prefix = def.prefix || `${ namespace }-${ Name }`;
        } else if (value === 'vanish') { // Vanish-based, specify "isolateClass"
            def.isolateClass = def.isolateClass || def.Parent;
        }
    }

    static processSelector (modulo, def, selector) {
        const hostPrefix = def.prefix || ('.' + def.isolateClass);
        if (def.isolateClass || def.prefix) {
            // Upgrade the ":host" or :root pseudo-elements to be the full name
            const hostRegExp = new RegExp(/:(host|root)(\([^)]*\))?/, 'g');
            selector = selector.replace(hostRegExp, hostClause => {
                hostClause = hostClause.replace(/:(host|root)/gi, '');
                return hostPrefix + (hostClause ? `:is(${ hostClause })` : '');
            });
        }
        const selectorOnly = selector.replace(/\s*[\{,]\s*,?$/, '').trim();
        if (def.isolateClass && selectorOnly !== hostPrefix) {
            // Remove extraneous characters (and strip ',' for isolateSelector)
            const suffix = /{\s*$/.test(selector) ? ' {' : ', ';
            def.isolateSelector.push(selectorOnly);
            selector = `.${ def.isolateClass }:is(${ selectorOnly })` + suffix;
        }
        if (def.prefix && !selector.startsWith(def.prefix)) {
            // If it is not prefixed at this point, then be sure to prefix
            selector = `${def.prefix} ${selector}`;
        }
        return selector;
    }

    static ProcessCSS (modulo, def, value) {
        if (def.isolateClass || def.prefix) {
            if (!def.keepComments) {
                value = value.replace(/\/\*.+?\*\//g, ''); // strip comments
            }
            def.isolateSelector = []; // Used to accumulate elements to select
            value = value.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/gi, selector => {
                selector = selector.trim();
                if (selector.startsWith('@') || selector.startsWith('from')
                                              || selector.startsWith('to')) {
                    return selector; // Skip (e.g. is @media or @keyframes)
                }
                return this.processSelector(modulo, def, selector);
            });
        }
        const { mode } = modulo.definitions[def.Parent] || {};
        if (mode === 'shadow') { // Stash in the definition configuration
            def.shadowContent = (def.shadowContent || '') + value;
        } else { // Otherwise, just "register" as a modulo asset
            // TODO: Refactor this inline, change modulo.assets into plain
            // object, and move the dom to "windowMount" or "factory" etc
            modulo.assets.registerStylesheet(value);
        }
    }

    static factoryCallback(renderObj, def, modulo) {
        // OLD TODO: "windowReadyCallback" - Refactor to put stylesheet in head?
    }

    domCallback(renderObj) {
        const { mode } = modulo.definitions[this.conf.Parent] || {};
        const { innerDOM, Parent } = renderObj.component;
        const { isolateClass, isolateSelector, shadowContent } = this.conf;
        if (isolateClass && isolateSelector) { // Attach "silo'ed" class to elem
            const selector = isolateSelector.filter(s => s).join(',\n');
            for (const elem of innerDOM.querySelectorAll(selector)){
                elem.classList.add(isolateClass);
            }
        }
        if (shadowContent) {
            const style = window.document.createElement('style');
            style.textContent = shadowContent;
            innerDOM.append(style); // Append to element to reconcile
        }
    }
}, {
    AutoIsolate: true, // null is "default behavior" (autodetect)
    isolateSelector: null, // Later has list of selectors
    isolateClass: null, // No class-based isolate
    prefix: null, // No prefix-based isolation
    DefBuilders: [ 'AutoIsolate', 'Content|ProcessCSS' ]
});

modulo.register('cpart', class Template {
    static TemplatePrebuild (modulo, def, value) {
        modulo.assert(def.Content, `Empty Template: ${def.DefinitionName}`);
        const template = modulo.instance(def, { });
        const compiledCode = template.compileFunc(def.Content);
        const code = `return function (CTX, G) { ${ compiledCode } };`;
        // TODO: Refactor this to use define processor?
        modulo.assets.define(def.DefinitionName, code);
        delete def.Content;
    }

    constructedCallback() {
        this.stack = []; // Parsing tag stack, used to detect unclosed tags
        // Combine conf from all sources: config, defaults, and "registered"
        const { filters, tags } = this.conf;
        const { defaultFilters, defaultTags } = this.modulo.config.template;
        const { templateFilters, templateTags } = this.modulo.registry;
        Object.assign(this, this.modulo.config.template, this.conf);
        // Set "filters" and "tags" with combined / squashed configuration
        this.filters = Object.assign({}, defaultFilters, templateFilters, filters);
        this.tags = Object.assign({}, defaultTags, templateTags, tags);
    }

    initializedCallback() {
        // When component mounts, expose a reference to the "render" function
        this.renderFunc = this.modulo.assets.require(this.conf.DefinitionName);
        return { render: this.render.bind(this) };
    }

    renderCallback(renderObj) {
        // Set component.innerHTML (for DOM reconciliation) with render() call
        renderObj.component.innerHTML = this.render(renderObj);
    }

    parseExpr(text) {
        // Output JS code that evaluates an equivalent template code expression
        const filters = text.split('|');
        let results = this.parseVal(filters.shift()); // Get left-most val
        for (const [ fName, arg ] of filters.map(s => s.trim().split(':'))) {
            // TODO: Store a list of variables / paths, so there can be
            // warnings or errors when variables are unspecified
            // TODO: Support this-style-var being turned to thisStyleVar
            const argList = arg ? ',' + this.parseVal(arg) : '';
            results = `G.filters["${fName}"](${results}${argList})`;
        }
        return results;
    }

    parseCondExpr(string) {
        // Return an Array that splits around ops in an "if"-style statement
        const regExpText = ` (${this.opTokens.split(',').join('|')}) `;
        return string.split(RegExp(regExpText));
    }

    parseVal(string) {
        // Parses str literals, de-escaping as needed, numbers, and context vars
        const { cleanWord } = this.modulo.registry.utils;
        const s = string.trim();
        if (s.match(/^('.*'|".*")$/)) { // String literal
            return JSON.stringify(s.substr(1, s.length - 2));
        }
        return s.match(/^\d+$/) ? s : `CTX.${cleanWord(s)}`
    }

    escapeText(text) {
        if (text && text.safe) {
            return text;
        }
        return (text + '').replace(/&/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/'/g, '&#x27;').replace(/"/g, '&quot;');
    }

    tokenizeText(text) {
        // Join all modeTokens with | (OR in regex).
        const { escapeRegExp } = this.modulo.registry.utils;
        const re = '(' + this.modeTokens.map(escapeRegExp).join('|(').replace(/ +/g, ')(.+?)');
        return text.split(RegExp(re)).filter(token => token !== undefined);
    }

    compileFunc(text) {
        const { normalize } = this.modulo.registry.utils;
        let code = 'var OUT=[];\n'; // Variable used to accumulate code
        let mode = 'text'; // Start in text mode
        const tokens = this.tokenizeText(text);
        for (const token of tokens) {
            if (mode) { // If in a "mode" (text or token), then call mode func
                const result = this.modes[mode](token, this, this.stack);
                if (result) { // Mode generated text output, add to code
                    const comment = !this.disableComments ? '' :
                        ' // ' + JSON.stringify(normalize(token).trim());
                    code += `  ${ result }${ comment }\n`;
                }
            }
            // FSM for mode: ('text' -> null) (null -> token) (* -> 'text')
            mode = (mode === 'text') ? null : (mode ? 'text' : token);
        }
        code += '\nreturn OUT.join("");'
        const unclosed = this.stack.map(({ close }) => close).join(', ');
        this.modulo.assert(!unclosed, `Unclosed tags: ${ unclosed }`);
        return code;
    }

    render(renderObj) {
        return this.renderFunc(Object.assign({ renderObj }, renderObj), this);
    }
}, {
    TemplatePrebuild: "y", // TODO: Refactor
    DefFinalizers: [ 'TemplatePrebuild' ],
    opTokens: '==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt',
    // TODO: Consider reserving "x" and "y" as temp vars, e.g.
    // (x = X, y = Y).includes ? y.includes(x) : (x in y)
    opAliases: {
        '==': 'X === Y',
        'is': 'X === Y',
        'gt': 'X > Y',
        'lt': 'X < Y',
        'is not': 'X !== Y',
        'not': '!(Y)',
        'in': '(Y).includes ? (Y).includes(X) : (X in Y)',
        'not in': '!((Y).includes ? (Y).includes(X) : (X in Y))',
    },
});

modulo.config.template.modeTokens = [ '{% %}', '{{ }}', '{# #}' ];
modulo.config.template.modes = {
    '{%': (text, tmplt, stack) => {
        const tTag = text.trim().split(' ')[0];
        const tagFunc = tmplt.tags[tTag];
        if (stack.length && tTag === stack[stack.length - 1].close) {
            return stack.pop().end; // Closing tag, return it's end code
        } else if (!tagFunc) { // Undefined template tag
            throw new Error(`Unknown template tag "${tTag}": ${text}`);
        } // Normal opening tag
        const result = tagFunc(text.slice(tTag.length + 1), tmplt);
        if (result.end) { // Not self-closing, push to stack
            stack.push({ close: `end${ tTag }`, ...result });
        }
        return result.start || result;
    },
    '{#': (text, tmplt) => false, // falsy values are ignored
    '{{': (text, tmplt) => `OUT.push(G.escapeText(${tmplt.parseExpr(text)}));`,
    text: (text, tmplt) => text && `OUT.push(${JSON.stringify(text)});`,
};

modulo.config.template.defaultFilters = (function () {
    const { get } = modulo.registry.utils;
    const safe = s => Object.assign(new String(s), { safe: true });
    const filters = {
        add: (s, arg) => s + arg,
        allow: (s, arg) => arg.split(',').includes(s) ? s : '',
        camelcase: s => s.replace(/-([a-z])/g, g => g[1].toUpperCase()),
        capfirst: s => s.charAt(0).toUpperCase() + s.slice(1),
        concat: (s, arg) => s.concat ? s.concat(arg) : s + arg,
        combine: (s, arg) => s.concat ? s.concat(arg) : Object.assign({}, s, arg),
        default: (s, arg) => s || arg,
        divisibleby: (s, arg) => ((s * 1) % (arg * 1)) === 0,
        dividedinto: (s, arg) => Math.ceil((s * 1) / (arg * 1)),
        escapejs: s => JSON.stringify(String(s)).replace(/(^"|"$)/g, ''),
        first: s => Array.from(s)[0],
        join: (s, arg) => (s || []).join(arg === undefined ? ", " : arg),
        json: (s, arg) => JSON.stringify(s, null, arg || undefined),
        last: s => s[s.length - 1],
        length: s => s.length !== undefined ? s.length : Object.keys(s).length,
        lower: s => s.toLowerCase(),
        multiply: (s, arg) => (s * 1) * (arg * 1),
        number: (s) => Number(s),
        pluralize: (s, arg) => (arg.split(',')[(s === 1) * 1]) || '',
        skipfirst: (s, arg) => Array.from(s).slice(arg || 1),
        subtract: (s, arg) => s - arg,
        truncate: (s, arg) => ((s && s.length > arg*1) ? (s.substr(0, arg-1) + '…') : s),
        type: s => s === null ? 'null' : (Array.isArray(s) ? 'array' : typeof s),
        renderas: (rCtx, template) => safe(template.render(rCtx)),
        reversed: s => Array.from(s).reverse(),
        upper: s => s.toUpperCase(),
        yesno: (s, arg) => `${ arg || 'yes,no' },,`.split(',')[s ? 0 : s === null ? 2 : 1],
    };
    const { values, keys, entries } = Object;
    const extra = { get, safe, values, keys, entries };
    return Object.assign(filters, extra);
})();

modulo.config.template.defaultTags = {
    'debugger': () => 'debugger;',
    'if': (text, tmplt) => {
        // Limit to 3 (L/O/R)
        const [ lHand, op, rHand ] = tmplt.parseCondExpr(text);
        const condStructure = !op ? 'X' : tmplt.opAliases[op] || `X ${op} Y`;
        const condition = condStructure.replace(/([XY])/g,
            (k, m) => tmplt.parseExpr(m === 'X' ? lHand : rHand));
        const start = `if (${condition}) {`;
        return { start, end: '}' };
    },
    'else': () => '} else {',
    'elif': (s, tmplt) => '} else ' + tmplt.tags['if'](s, tmplt).start,
    'comment': () => ({ start: "/*", end: "*/"}),
    'include': (text) => `OUT.push(CTX.${ text.trim() }.render(CTX));`,
    'for': (text, tmplt) => {
        // Make variable name be based on nested-ness of tag stack
        const { cleanWord } = modulo.registry.utils;
        const arrName = 'ARR' + tmplt.stack.length;
        const [ varExp, arrExp ] = text.split(' in ');
        let start = `var ${arrName}=${tmplt.parseExpr(arrExp)};`;
        // TODO: Upgrade to for...of loop (after good testing)
        start += `for (var KEY in ${arrName}) {`;
        const [keyVar, valVar] = varExp.split(',').map(cleanWord);
        if (valVar) {
            start += `CTX.${keyVar}=KEY;`;
        }
        start += `CTX.${valVar ? valVar : varExp}=${arrName}[KEY];`;
        return {start, end: '}'};
    },
    'empty': (text, {stack}) => {
        // Make variable name be based on nested-ness of tag stack
        const varName = 'G.FORLOOP_NOT_EMPTY' + stack.length;
        const oldEndCode = stack.pop().end; // get rid of dangling for
        const start = `${varName}=true; ${oldEndCode} if (!${varName}) {`;
        const end = `}${varName} = false;`;
        return { start, end, close: 'endfor' };
    },
};

modulo.register('processor', function contentCSV (modulo, def, value) {
    const parse = s => s.trim().split('\n').map(line => line.trim().split(','));
    def.Code = 'return ' + JSON.stringify(parse(def.Content || ''));
});

modulo.register('processor', function contentJS (modulo, def, value) {
    const tmpFunc = new Function('return (' + (def.Content || 'null') + ');');
    def.Code = 'return ' + JSON.stringify(tmpFunc()) + ';'; // Evaluate
});

modulo.register('processor', function contentJSON (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(JSON.parse(def.Content || '{}')) + ';';
});

modulo.register('processor', function contentTXT (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(def.Content);
});

modulo.register('processor', function dataType (modulo, def, value) {
    if (value === '?') { // '?' means determine based on extension
        const ext = def.Src && def.Src.match(/(?<=\.)[a-z]+$/i);
        value = ext ? ext[0] : 'json';
    }
    def['Content' + value.toUpperCase()] = value;
});

modulo.register('processor', function code (modulo, def, value) {
    if (def.DefinitionName in modulo.assets.nameToHash) {
        console.error("ERROR: Duped def:", def.DefinitionName);
        return;
    }
    // TODO: Refactor this inline, change modulo.assets into plain object
    modulo.assets.define(def.DefinitionName, value);
});

modulo.register('cpart', class StaticData {
    static RequireData (modulo, def, value) {
        def.data = modulo.assets.require(def[value]);
    }
    prepareCallback() {
        return this.conf.data;
    }
}, {
    DataType: '?', // Default behavior is to guess based on Src ext
    RequireData: 'DefinitionName',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'DataType', 'Src' ],
    DefBuilders: [ 'ContentCSV', 'ContentTXT', 'ContentJSON', 'ContentJS', 'Code', 'RequireData' ],
});

modulo.register('coreDef', class Configuration { }, {
    DefTarget: 'config',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src|SrcSync', 'Content|Code', 'DefinitionName|MainRequire' ],
});

modulo.register('cpart', class Script {
    static AutoExport (modulo, def, value) {
        const { getAutoExportNames } = modulo.registry.utils;
        if (def.lifecycle && def.lifecycle !== 'initialized') {
            value = `function ${ def.lifecycle }Callback (renderObj) {${ value }}`;
        }
        const isDirRegEx = /(Unmount|Mount)$/;
        def.Directives = getAutoExportNames(value).filter(s => s.match(isDirRegEx));
        const { ChildrenNames } = modulo.definitions[def.Parent] || { };
        const sibs = (ChildrenNames || []).map(n => modulo.definitions[n].Name);
        sibs.push('component', 'element', 'cparts'); // Add in extras
        const varNames = sibs.filter(name => value.includes(name)); // Used only
        // Build def.Code to wrap the user-provided code and export local vars
        def.Code = `var script = { exports: {} }; `;
        def.Code += varNames.length ? `var ${ varNames.join(', ') };` : '';
        def.Code += '\n' + value + '\nreturn {';
        for (const s of getAutoExportNames(value)) {
            def.Code += `"${s}": typeof ${s} !== "undefined" ? ${s} : undefined, `;
        }
        def.Code += `setLocalVariables: function (o) {`
        def.Code += varNames.map(name => `${ name }=o.${ name }`).join('; ');
        def.Code += `}, exports: script.exports }\n`
    }

    static factoryCallback(renderObj, def, modulo) {
        //modulo.assert(results || !def.Parent, 'Invalid script return');
        const hash = modulo.assets.nameToHash[def.DefinitionName];
        const func = () => modulo.assets.modules[hash].call(window, modulo);
        if (def.lifecycle === 'initialized') {
            return { initializedCallback: func }; // Attach as callback
        }
        return func(); // Otherwise, should run in static context (e.g. now)
    }

    initializedCallback(renderObj) {
        // Create all lifecycle callbacks, wrapping around the inner script
        const script = renderObj[this.conf.Name];
        this.eventCallback = (rObj) => { // Create eventCallback to set inner
            const vars = { element: this.element, cparts: this.element.cparts };
            const setLocal = script.setLocalVariables || (() => {});
            setLocal(Object.assign(vars, rObj)); // Set inner vars (or no-op)
        };

        if (script.initializedCallback) { // If defined, trigger inner init
            this.eventCallback(renderObj); // Prep before (used by lc=false)
            Object.assign(script, script.initializedCallback(renderObj));
            this.eventCallback(renderObj); // Prep again (used by lc=initialize)
        }

        const isCallback = /(Mount|Unmount|Callback)$/;
        for (const cbName of Object.keys(script)) {
            if (cbName === 'initializedCallback' || !cbName.match(isCallback)) {
                continue; // Skip over initialized (already handled) and non-CBs
            }
            this[cbName] = arg => { // Arg: Either renderObj or directive obj
                const renderObj = this.element.getCurrentRenderObj();
                const script = renderObj[this.conf.Name]; // Get new render obj
                this.eventCallback(renderObj); // Prep before lifecycle method
                Object.assign(script, script[cbName](arg) || {});
            };
        }
    }
}, {
    lifecycle: null,
    DefBuilders: [ 'Content|AutoExport', 'Code' ],
});


modulo.register('cpart', class State {
    static factoryCallback(renderObj, def, modulo) {
        if (def.Store) {
            const store = modulo.registry.utils.makeStore(modulo, def);
            if (!(def.Store in modulo.stores)) {
                modulo.stores[def.Store] = store;
            } else {
                Object.assign(modulo.stores[def.Store].data, store.data);
            }
        }
    }

    initializedCallback(renderObj) {
        const store = this.conf.Store ? this.modulo.stores[this.conf.Store]
                : this.modulo.registry.utils.makeStore(this.modulo, this.conf);
        store.subscribers.push(Object.assign(this, store));
        this.types = { range: Number, number: Number, checkbox: (val, el) => el.checked };
        return store.data; // TODO: Possibly, push ALL sibling CParts with stateChangedCallback
    }

    bindMount({ el, attrName, value }) {
        const name = attrName || el.getAttribute('name');
        const val = this.modulo.registry.utils.get(this.data, name);
        this.modulo.assert(val !== undefined, `state.bind "${name}" undefined`);
        const isText = el.tagName === 'TEXTAREA' || el.type === 'text';
        const evName = value ? value : (isText ? 'keyup' : 'change');
        if (!(name in this.boundElements)) {
            this.boundElements[name] = [];
        }
        // Bind the "listen" event to propagate to all, and trigger initial vals
        const listen = () => this.propagate(name, el.value, el);
        this.boundElements[name].push([ el, evName, listen ]);
        el.addEventListener(evName, listen); // todo: make optional, e.g. to support cparts?
        this.propagate(name, val, this); // trigger initial assignment(s)
    }

    bindUnmount({ el, attrName }) {
        const name = attrName || el.getAttribute('name');
        if (!(name in this.boundElements)) { // XXX HACK
            return console.log('Modulo ERROR: Could not unbind', name);
        }
        const remainingBound = [];
        for (const row of this.boundElements[name]) {
            if (row[0] === el) {
                row[0].removeEventListener(row[1], row[2]);
            } else {
                remainingBound.push(row);
            }
        }
        this.boundElements[name] = remainingBound;
    }

    stateChangedCallback(name, value, el) {
        this.modulo.registry.utils.set(this.data, name, value);
        if (!this.conf.Only || this.conf.Only.includes(name)) { // TODO: Test & document
            this.element.rerender();
        }
    }

    eventCallback() {
        this._oldData = Object.assign({}, this.data);
    }

    propagate(name, val, originalEl = null) {
        const elems = (this.boundElements[name] || []).map(row => row[0]);
        const typeConv = this.types[ originalEl ? originalEl.type : null ];
        val = typeConv ? typeConv(val, originalEl) : val; // Apply conversion
        for (const el of this.subscribers.concat(elems)) {
            if (originalEl && el === originalEl) {
                continue; // don't propagate to originalEl (avoid infinite loop)
            }
            if (el.stateChangedCallback) { // A callback was found, use instead
                el.stateChangedCallback(name, val, originalEl);
            } else if (el.type === 'checkbox') { // Check input use ".checkbox"
                el.checked = !!val;
            } else { // Normal inputs use ".value"
                el.value = val;
            }
        }
    }

    eventCleanupCallback() {
        for (const name of Object.keys(this.data)) {
            this.modulo.assert(!this.conf.AllowNew && name in this._oldData,
                `State variable "${ name }" is undeclared (no "-allow-new")`);
            if (this.data[name] !== this._oldData[name]) {
                this.propagate(name, this.data[name], this);
            }
        }
        this._oldData = null;
    }
}, {
    Directives: [ 'bindMount', 'bindUnmount' ],
    Store: null,
});

modulo.register('engine', class DOMCursor {
    constructor(parentNode, parentRival) {
        this.initialize(parentNode, parentRival);
        this.instanceStack = [];
    }

    initialize(parentNode, parentRival) {
        this.parentNode = parentNode;
        this.nextChild = parentNode.firstChild;
        this.nextRival = parentRival.firstChild;
        this.keyedChildren = {};
        this.keyedRivals = {};
        this.keyedChildrenArr = null;
        this.keyedRivalsArr = null;
    }

    saveToStack() {
        // TODO: Once we finalize this class, write "_.pick" helper
        const { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr } = this;
        const instance = { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr };
        this.instanceStack.push(instance);
    }

    loadFromStack() {
        const stack = this.instanceStack;
        return stack.length > 0 && Object.assign(this, stack.pop());
    }

    hasNext() {
        if (this.nextChild || this.nextRival) {
            return true; // Is pointing at another node
        }

        // Convert objects into arrays so we can pop
        if (!this.keyedChildrenArr) {
            this.keyedChildrenArr = Object.values(this.keyedChildren);
        }
        if (!this.keyedRivalsArr) {
            this.keyedRivalsArr = Object.values(this.keyedRivals);
        }

        if (this.keyedRivalsArr.length || this.keyedChildrenArr.length) {
            return true; // We have queued up nodes from keyed values
        }

        return this.loadFromStack() && this.hasNext();
    }

    next() {
        let child = this.nextChild;
        let rival = this.nextRival;
        if (!child && !rival) { // reached the end
            if (!this.keyedRivalsArr) {
                return [null, null];
            }
            // There were excess keyed rivals OR children, pop()
            return this.keyedRivalsArr.length ?
                  [ null, this.keyedRivalsArr.pop() ] :
                  [ this.keyedChildrenArr.pop(), null ];
        }

        // Handle keys
        this.nextChild = child ? child.nextSibling : null;
        this.nextRival = rival ? rival.nextSibling : null;

        let matchedRival = this.getMatchedNode(child, this.keyedChildren, this.keyedRivals);
        let matchedChild = this.getMatchedNode(rival, this.keyedRivals, this.keyedChildren);
        // TODO refactor this
        if (matchedRival === false) {
            // Child has a key, but does not match rival, so SKIP on child
            child = this.nextChild;
            this.nextChild = child ? child.nextSibling : null;
        } else if (matchedChild === false) {
            // Rival has a key, but does not match child, so SKIP on rival
            rival = this.nextRival;
            this.nextRival = rival ? rival.nextSibling : null;
        }
        const keyWasFound = matchedRival !== null || matchedChild !== null;
        const matchFound = matchedChild !== child && keyWasFound;
        if (matchFound && matchedChild) {
            // Rival matches, but not with child. Swap in child.
            this.nextChild = child;
            child = matchedChild;
        }

        if (matchFound && matchedRival) {
            // Child matches, but not with rival. Swap in rival.
            this.modulo.assert(matchedRival !== rival, 'Dupe!'); // (We know this due to ordering)
            this.nextRival = rival;
            rival = matchedRival;
        }

        return [ child, rival ];
    }

    getMatchedNode(elem, keyedElems, keyedOthers) {
        const key = elem && elem.getAttribute && elem.getAttribute('key');
        if (!key) {
            return null;
        }
        if (key in keyedOthers) {
            const matched = keyedOthers[key];
            delete keyedOthers[key];
            return matched;
        } else {
            if (key in keyedElems) {
                console.error('MODULO WARNING: Duplicate key:', key);
            }
            keyedElems[key] = elem;
            return false;
        }
    }
});

modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
};
modulo.register('engine', class Reconciler {
    constructor(modulo, def) {
        this.modulo = modulo;
        this.constructor_old(def);
    }
    constructor_old(opts) {
        opts = opts || {};
        this.shouldNotDescend = !!opts.doNotDescend;
        this.directives = opts.directives || {};
        this.tagTransforms = opts.tagTransforms;
        this.directiveShortcuts = opts.directiveShortcuts || [];
        if (this.directiveShortcuts.length === 0) { // XXX horrible HACK
            this.directiveShortcuts = this.modulo.config.reconciler.directiveShortcuts; // OLD TODO global modulo
        }
        this.patch = this.pushPatch;
        this.patches = [];
    }

    parseDirectives(rawName, directiveShortcuts) { //, foundDirectives) {
        if (/^[a-z0-9-]$/i.test(rawName)) {
            return null; // if alpha-only, stop right away
            // TODO: If we ever support key= as a shortcut, this will break
        }

        // "Expand" shortcuts into their full versions
        let name = rawName;
        for (const [regexp, directive] of directiveShortcuts) {
            if (rawName.match(regexp)) {
                name = `[${directive}]` + name.replace(regexp, '');
            }
        }
        if (!name.startsWith('[')) {
            return null; // There are no directives, regular attribute, skip
        }

        // There are directives... time to resolve them
        const { cleanWord, stripWord } = this.modulo.registry.utils; // old TODO global modulo
        const arr = [];
        const attrName = stripWord((name.match(/\][^\]]+$/) || [ '' ])[0]);
        for (const directiveName of name.split(']').map(cleanWord)) {
            // Skip the bare name itself, and filter for valid directives
            if (directiveName !== attrName) {// && directiveName in directives) {
                arr.push({ attrName, rawName, directiveName, name })
            }
        }
        return arr;
    }

    loadString(rivalHTML, tagTransforms) {
        this.patches = [];
        const rival = this.modulo.registry.utils.makeDiv(rivalHTML);
        const transforms = Object.assign({}, this.tagTransforms, tagTransforms);
        this.applyLoadDirectives(rival, transforms);
        return rival;
    }

    reconcile(node, rival, tagTransforms) {
        if (typeof rival === 'string') {
            rival = this.loadString(rival, tagTransforms);
        }
        this.reconcileChildren(node, rival);
        this.cleanRecDirectiveMarks(node);
        return this.patches;
    }

    applyLoadDirectives(elem, tagTransforms) {
        this.patch = this.applyPatch; // Apply patches immediately
        for (const node of elem.querySelectorAll('*')) {
            // legacy -v, TODO rm
            const newTag = tagTransforms[node.tagName.toLowerCase()];
            //console.log('this is tagTransforms', tagTransforms);
            if (newTag) {
                this.modulo.registry.utils.transformTag(node, newTag);
            }
            ///////

            const lowerName = node.tagName.toLowerCase();
            if (lowerName in this.directives) {
                this.patchDirectives(node, `[${lowerName}]`, 'TagLoad');
            }

            for (const rawName of node.getAttributeNames()) {
                // Apply load-time directive patches
                this.patchDirectives(node, rawName, 'Load');
            }
        }
        this.markRecDirectives(elem); // TODO rm
        this.patch = this.pushPatch;
    }

    markRecDirectives(elem) {
        // TODO remove this after we reimplement [component.ignore]
        // Mark all children of modulo-ignore with mm-ignore
        for (const node of elem.querySelectorAll('[modulo-ignore] *')) {
            // TODO: Very important: also mark to ignore children that are
            // custom!
            node.setAttribute('mm-ignore', 'mm-ignore');
        }

        // TODO: hacky / leaky solution to attach like this
        //for (const rivalChild of elem.querySelectorAll('*')) {
        //    rivalChild.moduloDirectiveContext = this.directives;
        //}
    }

    cleanRecDirectiveMarks(elem) {
        // Remove all mm-ignores
        for (const node of elem.querySelectorAll('[mm-ignore]')) {
            node.removeAttribute('mm-ignore');
        }
    }

    applyPatches(patches) {
        for (const patch of patches) { // Simply loop through given iterable
            this.applyPatch(patch[0], patch[1], patch[2], patch[3]);
        }
    }

    reconcileChildren(childParent, rivalParent) {
        // Nonstandard nomenclature: "The rival" is the node we wish to match
        const cursor = new this.modulo.registry.engines.DOMCursor(childParent, rivalParent);
        while (cursor.hasNext()) {
            const [ child, rival ] = cursor.next();
            const needReplace = child && rival && (
                child.nodeType !== rival.nodeType ||
                child.nodeName !== rival.nodeName
            ); // Does this node to be swapped out? Swap if exist but mismatched

            if ((child && !rival) || needReplace) { // we have more rival, delete child
                this.patchAndDescendants(child, 'Unmount');
                this.patch(cursor.parentNode, 'removeChild', child);
            }

            if (needReplace) { // do swap with insertBefore
                this.patch(cursor.parentNode, 'insertBefore', rival, child.nextSibling);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (!child && rival) { // we have less than rival, take rival
                // TODO: Possibly add directive resolution context to rival / child.originalChildren?
                this.patch(cursor.parentNode, 'appendChild', rival);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (child && rival && !needReplace) {
                // Both exist and are of same type, let's reconcile nodes
                if (child.nodeType !== 1) { // text or comment node
                    if (child.nodeValue !== rival.nodeValue) { // update
                        this.patch(child, 'node-value', rival.nodeValue);
                    }
                } else if (!child.isEqualNode(rival)) { // sync if not equal
                    this.reconcileAttributes(child, rival);
                    if (rival.hasAttribute('modulo-ignore')) {
                        // console.log('Skipping ignored node');
                    } else if (child.isModulo) { // is a Modulo component
                        // TODO: Possibly add directive resolution context to rival / child.originalChildren?
                        this.patch(child, 'rerender', rival);
                    } else if (!this.shouldNotDescend) {
                        cursor.saveToStack();
                        cursor.initialize(child, rival);
                    }
                }
            }
        }
    }

    pushPatch(node, method, arg, arg2 = null) {
        this.patches.push([ node, method, arg, arg2 ]);
    }

    applyPatch(node, method, arg, arg2) { // take that, rule of 3!
        if (method === 'node-value') {
            node.nodeValue = arg;
        } else if (method === 'insertBefore') {
            node.insertBefore(arg, arg2); // Needs 2 arguments
        } else if (method.startsWith('directive-')) {
            method = method.substr('directive-'.length); // TODO: RM prefix (or generalizze)
            node[method].call(node, arg); // invoke directive method
        } else if (method.startsWith('weak-')) {
            method = method.substr('weak-'.length);
            if (document.body.contains(node)) {
                node[method].call(node, arg);
            }
        } else {
            node[method].call(node, arg); // invoke method
        }
    }

    patchDirectives(el, rawName, suffix, copyFromEl = null) {
        const foundDirectives = this.parseDirectives(rawName, this.directiveShortcuts);
        if (!foundDirectives || foundDirectives.length === 0) {
            return;
        }

        const value = (copyFromEl || el).getAttribute(rawName); // Get value
        for (const directive of foundDirectives) {
            const dName = directive.directiveName; // e.g. "state.bind", "link"
            const fullName = dName + suffix; // e.g. "state.bindMount"

            // Hacky: Check if this elem has a different moduloDirectiveContext than expected
            //const directives = (copyFromEl || el).moduloDirectiveContext || this.directives;
            //if (el.moduloDirectiveContext) {
            //    console.log('el.moduloDirectiveContext', el.moduloDirectiveContext);
            //}
            const { directives } = this;

            const thisContext = directives[dName] || directives[fullName];
            if (thisContext) { // If a directive matches...
                const methodName = fullName.split('.')[1] || fullName;
                Object.assign(directive, { value, el });
                this.patch(thisContext, 'directive-' + methodName, directive);
            }
        }
    }

    reconcileAttributes(node, rival) {
        const myAttrs = new Set(node ? node.getAttributeNames() : []);
        const rivalAttributes = new Set(rival.getAttributeNames());

        // Check for new and changed attributes
        for (const rawName of rivalAttributes) {
            const attr = rival.getAttributeNode(rawName);
            if (myAttrs.has(rawName) && node.getAttribute(rawName) === attr.value) {
                continue; // Already matches, on to next
            }

            if (myAttrs.has(rawName)) { // If exists, trigger Unmount first
                this.patchDirectives(node, rawName, 'Unmount');
            }
            // Set attribute node, and then Mount based on rival value
            this.patch(node, 'setAttributeNode', attr.cloneNode(true));
            this.patchDirectives(node, rawName, 'Mount', rival);
        }

        // Check for old attributes that were removed (ignoring modulo- prefixed ones)
        for (const rawName of myAttrs) {
            if (!rivalAttributes.has(rawName) && !rawName.startsWith('modulo-')) {
                this.patchDirectives(node, rawName, 'Unmount');
                this.patch(node, 'removeAttribute', rawName);
            }
        }
    }

    patchAndDescendants(parentNode, actionSuffix) {
        if (parentNode.nodeType !== 1) { // cannot have descendants
            return;
        }
        let nodes = [ parentNode ]; // also, patch self (but last)
        if (!this.shouldNotDescend) {
            nodes = Array.from(parentNode.querySelectorAll('*')).concat(nodes);
        }
        for (let rival of nodes) { // loop through nodes to patch
            if (rival.hasAttribute('mm-ignore')) {
                // Skip any marked to ignore
                continue;
            }

            for (const rawName of rival.getAttributeNames()) {
                // Loop through each attribute patching foundDirectives as necessary
                this.patchDirectives(rival, rawName, actionSuffix);
            }
        }
    }
});

modulo.register('util', function getAutoExportNames(contents) {
    // TODO: Change exports/Directives/etc to def processor to better expose
    const regexpG = /(function|class)\s+(\w+)/g;
    const regexp2 = /(function|class)\s+(\w+)/; // hack, refactor
    return (contents.match(regexpG) || []).map(s => s.match(regexp2)[2])
        .filter(s => s && !Modulo.INVALID_WORDS.has(s));
});



modulo.assets.modules = window.moduloBuild.modules;
modulo.assets.nameToHash = window.moduloBuild.nameToHash;
modulo.definitions = window.moduloBuild.definitions;

modulo.assets.require("configuration");

modulo.assets.require("library1_configuration");

modulo.assets.require("library_Page");

modulo.assets.require("library_FeaturedTestimonials");

modulo.assets.require("library_Testimonials");

modulo.assets.require("library_FeaturedArticles");

modulo.assets.require("library1_PlanMenu");

modulo.assets.require("library1_Courses");

