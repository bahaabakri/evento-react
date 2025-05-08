import Button from "@/UI/Button/Button";
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { FC, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthDialog.module.scss";
import Logo from "@/components/Logo/Logo";
import HeroOverlay from "@/components/Hero/HeroOverlay/HeroOverlay";
interface AuthDialogProps {
    children: ReactElement;
    footerContent?:ReactElement
    title: string;
    subtitle:string;
}
const AuthDialog:FC<AuthDialogProps> = ({children, footerContent, title, subtitle}) => {
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
                {title}
            </div>
        </DialogTitle>
        <DialogContent className={styles['auth-dialog-content']}>
          <DialogContentText className={styles['auth-dialog-content-text']}>
            {subtitle}
          </DialogContentText>
        {children}
        </DialogContent>
        <DialogActions className={styles['auth-dialog-action']}>
          <Button type="button" onClick={handleClose} isSecondButton={true}><div>Cancel</div></Button>
          <Button type="submit"><div>Continue</div></Button>
        </DialogActions>
        {footerContent && footerContent}
      </Dialog>
        
        </div>
    )
}
export default AuthDialog