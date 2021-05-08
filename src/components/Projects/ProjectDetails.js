import React from 'react'

const ProjectDetails= (props) =>{
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>
                        Qui ullamco anim velit minim non ipsum veniam quis enim. Lorem sint id proident veniam. Lorem minim est laboris voluptate ea cupidatat.1Nisi cupidatat consectetur anim commodo laborum ea veniam. Minim irure amet amet amet est irure deserunt quis minim. Pariatur adipisicing exercitation exercitation laborum proident tempor ex elit.Tempor est ex ullamco reprehenderit labore magna Lorem. Tempor pariatur eu reprehenderit adipisicing ipsum occaecat ad sint culpa eiusmod. Esse consequat sunt velit irure deserunt non laboris cupidatat aliqua dolore magna enim veniam mollit. Commodo et ad qui commodo.
                        Sunt nulla incididunt cupidatat velit exercitation minim ut nostrud qui. Tempor qui labore dolor quis pariatur. Duis exercitation ipsum anim laborum sunt proident proident eiusmod.Fugiat labore et adipisicing aliquip. Excepteur esse aliqua aute qui exercitation eu consequat qui excepteur velit reprehenderit ex commodo. Quis nostrud dolore exercitation aliqua eu aliquip adipisicing in est Lorem ut. Eiusmod deserunt labore dolor culpa ipsum ut velit nulla fugiat non esse pariatur. Eu ex elit nisi sunt est non reprehenderit qui.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey text">
                    <div>Posted by ABC</div>
                    <div>someday</div>

                </div>

            </div>
            
        </div>
    )
}

export default ProjectDetails
