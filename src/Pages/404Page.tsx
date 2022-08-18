import { Button } from "@mui/material"

import { useNavigation } from "../Hooks/useNavigation"

const Page404 = () => {
  const [handleNavigation] = useNavigation()

  return (
    <section
      style={
        { minHeight: 'calc(100vh - 100px)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }
      }
    >
      <h1 style={{ marginBottom: '10px', fontSize: '25px' }}>
        404 Page not found
      </h1>
      <Button variant="outlined" onClick={() => handleNavigation('/')}>
        Back
      </Button>
    </section>
  )
}

export default Page404