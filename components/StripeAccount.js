import { useLayoutEffect, useState } from 'react';
import { useUser } from './User';
import styled from 'styled-components';
import LoadBar from './LoadBar';


const AccountStyles = styled.div`
@media (min-width: 900px) {
width:80%;
margin:0 auto;
}
`;
const StripeAccStyles = styled.div`
  font-size: 1.3em;
  line-height: 1.5;
  color: black;
  border: thin solid #eee;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;
  @media (min-width: 900px) {
width:60%;
margin:0 auto;
margin-bottom: 50px;
}
  `;

export default function StripeAccount(){
    const theUser = useUser();
    const theName = theUser?.name;
    const theEmail = theUser?.email;
    const acc = theUser?.stripeId;
  
    const [data, setData] = useState(true);
    const [futureRequirements, setFutureRequirements] = useState(0);
    const [dataBalance, setDataBalance] = useState(null);
    const [dataLink, setDataLink] = useState(null);
    const [dataPayout, setDataPayout] = useState(null);
    const [payoutNum, setPayoutNum] = useState(0);
    const [isLoading, setLoading] = useState(true);
  
    useLayoutEffect (() => {
      fetch(`/api/stripe/${acc}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.account.details_submitted);
          setFutureRequirements(data.account.requirements.eventually_due);
        })
        .then(
          fetch(`/api/balance/${acc}`)
            .then((res) => res.json())
            .then((dataBalance) => {
              setDataBalance((dataBalance.pendingBalance.available.[0].amount/100).toFixed(2));
            })
        ).then(
          fetch(`/api/payout/${acc}`)
            .then((res) => res.json())
            .then((dataPayout) => {
              setDataPayout(dataPayout.payouts.data);
              setPayoutNum(dataPayout.payouts.data.length);
            })
        )
        .then(
          fetch(`/api/link/${acc}`)
            .then((res) => res.json())
            .then((dataLink) => {
              setDataLink(dataLink.accountLink.url);
              setLoading(false);
            })
        );
    }, []);
  
    if (isLoading) return <LoadBar load={isLoading}/>;

  if (!data)
    return(
    <AccountStyles>
    <h2 style={{textAlign:'center', borderBottom: 'solid thin #000',paddingBottom:'10px',fontWeight:'normal',marginTop:'12px',lineHeight:'1.5em'}}>{theName} <br /> {theEmail}</h2>
    <p style={{textAlign:'center',color:'red',fontSize:'1.2em'}}>
      Do you plan on selling on Indie Bubba? If yes, we need some more information from you!
    </p>
    <p style={{textAlign:'center',fontSize:'1.2em',color:'black',padding:'25px',marginBottom:'0px',}}>
      If you are currently selling, or plan to sell on Indie Bubba, please follow the link below to update KYC verification <br /> and add the bank
      account you would like your funds paid in to.</p>
      <p style={{textAlign:'center',fontSize:'1.2em',marginBottom:'40px',marginTop:'0px',paddingBottom:'20px',borderBottom: 'solid thin #000'}}><a href={dataLink} style={{ color: 'green',marginTop:'0px'}}>
        Update Account
      </a>
    </p>
    <StripeAccStyles> 
    <p style={{marginBottom:'0px'}}>Account balance <span style={{color:'green'}}>&pound;{dataBalance}</span></p>
    <p style={{fontSize:'0.8em',fontStyle:'italic',marginTop:'0px',color:'grey',borderBottom:'solid thin #000000', paddingBottom:'20px'}}>Funds are paid out automatically into your bank account at the end of each working day!</p>
    <h3 style={{fontWeight:'normal',marginBottom:'0px',color:'#015268'}}>Recent Payouts to Bank</h3>
    <table style={{margin:'0 auto',textAlign:'left'}}>
    <tbody>
    {payoutNum === 0 && ( <tr><td rowSpan='3' style={{color:'red',fontStyle:'italic'}}>There are no recent payouts!</td></tr> )}{payoutNum != 0 && ( <tr><td>Amount</td><td></td><td>Expected</td></tr>)}
    {
                dataPayout?.map((payout, i) => {
        let ARdate = new Date(payout.arrival_date*1000);
          ARdate=ARdate.toDateString();	
        return (
          
        <tr style={{color:'green'}} key={i}>
          <td>&pound;{(payout.amount/100).toFixed(2)}</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>{ARdate}</td>
        </tr>
        
        )
      })
    }
    </tbody>
</table>
{payoutNum != 0 && (<p style={{fontSize:'0.6em',fontStyle:'italic',marginTop:'0px',color:'grey',paddingBottom:'20px'}}>Expected is an estimation, initial payouts may take longer!</p>)}
    </StripeAccStyles>
    </AccountStyles>
);
if (data && futureRequirements.length > 0)
    return (
      <AccountStyles>
        <h2 style={{textAlign:'center', borderBottom: 'solid thin #000',paddingBottom:'10px',fontWeight:'normal',marginTop:'12px',lineHeight:'1.5em'}}>{theName} <br /> {theEmail}</h2>
        <p style={{textAlign:'center',color:'red',fontSize:'1.2em'}}>
          We need a little more information from you! Bank payouts may be suspended if your account is not kept up to date.  
        </p>
        <p style={{textAlign:'center',fontSize:'1.2em',color:'black',padding:'25px',marginBottom:'0px',}}>
          Please follow the link below to update KYC verification. <br /> Thank you!</p>
          <p style={{textAlign:'center',fontSize:'1.2em',marginBottom:'40px',marginTop:'0px',paddingBottom:'20px',borderBottom: 'solid thin #000'}}><a href={dataLink} style={{ color: 'green',marginTop:'0px'}}>
            Update Account
          </a>
        </p>
        <StripeAccStyles> 
        <p style={{marginBottom:'0px'}}>Account balance <span style={{color:'green'}}>&pound;{dataBalance}</span></p>
        <p style={{fontSize:'0.8em',fontStyle:'italic',marginTop:'0px',color:'grey',borderBottom:'solid thin #000000', paddingBottom:'20px'}}>Funds are paid out automatically into your bank account at the end of each working day!</p>
        <h3 style={{fontWeight:'normal',marginBottom:'0px',color:'#015268'}}>Recent Payouts to Bank</h3>
        <table style={{margin:'0 auto',textAlign:'left'}}>
        <tbody>
        {payoutNum === 0 && ( <tr><td rowSpan='3' style={{color:'red',fontStyle:'italic'}}>There are no recent payouts!</td></tr> )}{payoutNum != 0 && ( <tr><td>Amount</td><td></td><td>Expected</td></tr>)}
        {
					dataPayout?.map((payout, i) => {
            let ARdate = new Date(payout.arrival_date*1000);
	          ARdate=ARdate.toDateString();	
            return (
              
            <tr style={{color:'green'}} key={i}>
              <td>&pound;{(payout.amount/100).toFixed(2)}</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>{ARdate}</td>
            </tr>
            
            )
          })
        }
        </tbody>
</table>
{payoutNum != 0 && (<p style={{fontSize:'0.6em',fontStyle:'italic',marginTop:'0px',color:'grey',paddingBottom:'20px'}}>Expected is an estimation, initial payouts may take longer!</p>)}
        </StripeAccStyles>
        </AccountStyles>
    );
    return (
        <AccountStyles>
          <h2 style={{textAlign:'center', borderBottom: 'solid thin #000',paddingBottom:'10px',marginTop:'12px',lineHeight:'1.5em'}}>{theName} <br /> {theEmail}</h2>
          <StripeAccStyles> 
            <p style={{marginBottom:'0px'}}>Account balance <span style={{color:'green'}}>&pound;{dataBalance}</span></p>
            <p style={{fontSize:'0.6em',fontStyle:'italic',marginTop:'0px',color:'grey',borderBottom:'solid thin #000000', paddingBottom:'20px'}}>Funds are paid out automatically into your bank account at the end of each working day!</p>
            <h3 style={{fontWeight:'normal',marginBottom:'0px',color:'#015268'}}>Recent Payouts to Bank</h3>
            <table style={{margin:'0 auto',textAlign:'left'}}>
            <tbody>
              {payoutNum === 0 && ( <tr><td rowSpan='3' style={{color:'red',fontStyle:'italic'}}>There are no recent payouts!</td></tr> )}{payoutNum != 0 && ( <tr><td>Amount</td><td></td><td>Expected</td></tr>)}
            {
                        dataPayout?.map((payout, i) => {
                let ARdate = new Date(payout.arrival_date*1000);
                  ARdate=ARdate.toDateString();	
                return (
                  
                <tr style={{color:'green'}} key={i}>
                  <td>&pound;{(payout.amount/100).toFixed(2)}</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>{ARdate}</td>
                </tr>
                
                )
              })
            }
            </tbody>
    </table>
    {payoutNum != 0 && (<p style={{fontSize:'0.6em',fontStyle:'italic',marginTop:'0px',color:'grey',paddingBottom:'20px'}}>Expected is an estimation, initial payouts may take longer!</p>)}
            </StripeAccStyles>
        </AccountStyles>
      );

      return(
        <AccountStyles>
        <h2 style={{textAlign:'center', borderBottom: 'solid thin #000',paddingBottom:'10px',marginTop:'12px',lineHeight:'1.5em'}}>{theName} <br /> {theEmail}</h2>
        <StripeAccStyles> 
          <p style={{marginBottom:'0px'}}>Account balance <span style={{color:'green'}}>&pound;{dataBalance}</span></p>
          <p style={{fontSize:'0.6em',fontStyle:'italic',marginTop:'0px',color:'grey',borderBottom:'solid thin #000000', paddingBottom:'20px'}}>Funds are paid out automatically into your bank account at the end of each working day!</p>
          <h3 style={{fontWeight:'normal',marginBottom:'0px',color:'#015268'}}>Recent Payouts to Bank</h3>
          <table style={{margin:'0 auto',textAlign:'left'}}>
          <tbody>
            {payoutNum === 0 && ( <tr><td rowSpan='3' style={{color:'red',fontStyle:'italic'}}>There are no recent payouts!</td></tr> )}{payoutNum != 0 && ( <tr><td>Amount</td><td></td><td>Expected</td></tr>)}
          {
                      dataPayout?.map((payout, i) => {
              let ARdate = new Date(payout.arrival_date*1000);
                ARdate=ARdate.toDateString();	
              return (
                
              <tr style={{color:'green'}} key={i}>
                <td>&pound;{(payout.amount/100).toFixed(2)}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{ARdate}</td>
              </tr>
              
              )
            })
          }
          </tbody>
      </table>
      {payoutNum != 0 && (<p style={{fontSize:'0.6em',fontStyle:'italic',marginTop:'0px',color:'grey',paddingBottom:'20px'}}>Expected is an estimation, initial payouts may take longer!</p>)}
          </StripeAccStyles>
      </AccountStyles>
      
      );


}