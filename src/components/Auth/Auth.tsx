import Button from "@/UI/Button/Button";
import CustomTextField from "@/UI/CustomTextField/CustomTextField";
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.scss";
import Logo from "../Logo/Logo";
import HeroOverlay from "../Hero/HeroOverlay/HeroOverlay";

const Auth = () => {
    const [open, setOpen] = useState<boolean>(true)
    const navigate = useNavigate();
    const handleClose = () => {
        // go back
        navigate(-1);
    }
    useEffect(() => {
        setOpen(true)
        return () => {
            setOpen(false)
        }
    }, [])
    return (
        <div className={styles['auth-dialog-wrapper']}>
        <HeroOverlay />
        <Dialog
        className={styles['auth-dialog']}
        open={open}
        slotProps={{
          paper: {
            component: 'form',
            // onSubmit: (event) => {
            //   event.preventDefault();
            //   const formData = new FormData(event.currentTarget);
            //   const formJson = Object.fromEntries(formData.entries());
            //   const email = formJson.email;
            //   console.log(email);
            //   handleClose();
            // },
          },
        }}
      >
        <DialogTitle className={styles['auth-dialog-header']}>
            <Logo />
            <div className={styles['auth-dialog-title']}>
                Welcome on board.<br/> One place for all events in the world
            </div>
        </DialogTitle>
        <DialogContent className={styles['auth-dialog-content']}>
          <DialogContentText className={styles['auth-dialog-content-text']}>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <CustomTextField placeholder='Enter Email here'/>
        </DialogContent>
        <DialogActions className={styles['auth-dialog-action']}>
          {/* <Button type="button" onClick={handleClose} isSecondButton={true}><div>Cancel</div></Button> */}
          <Button type="submit"><div>Continue</div></Button>
        </DialogActions>
        <div className={styles['auth-dialog-signin-with']}>
            <div className="flex-grow border-b border-white"></div>
            Or sign in with
            <div className="flex-grow border-b border-white"></div>
        </div>
      </Dialog>
        
        </div>
    )
}
export default Auth