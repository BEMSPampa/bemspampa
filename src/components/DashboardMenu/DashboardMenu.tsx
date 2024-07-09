import './DashboardMenu.scss'

import { infographicData } from '@UI/strings'

const DashboardMenu = () => {

  const openFileAtURL = (url: string) => {
      const parts = url.split("/");
      const fileName: string = parts.length > 0 ? parts.pop()! : 'file';
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("open", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
  }

  return (
    <>
      <h2 className='dashbaord-description'>As informações sobre a região geoenergética do BEMSPampa estão organizadas de forma sintetizada nos Infográficos (e-book).</h2>
      <div className='dashboard-container'>
        {
          infographicData.map(item => (
            <>
              <div className='dashboard-item' onClick={() => openFileAtURL(item.file)} key={item.id}>
                <div className='dashboard-item-logo'>
                  <img src={item.image} alt="" />
                </div>
                <div className='dashboard-item-description'>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default DashboardMenu