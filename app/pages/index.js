import Page from '../layouts/page';
import { Button } from 'evergreen-ui';
import '../assets/scss/main.scss'

const Index = (props) => {
    return (
        <Page>
            <h1>Hello from NextJS</h1>
            <Button>I am using 🌲 Evergreen!</Button>

        </Page>
    )
}

export default Index
