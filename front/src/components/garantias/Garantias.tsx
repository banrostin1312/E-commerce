//styles
import styles from './Garantias.module.css'


const Garantias = () => {
    return (
        <div className="max-w-screen-md mx-auto p-4 "style={{marginTop:'260px',marginRight:"200px"}}> {/* Aquí se define el tamaño máximo y el centrado */}
          <div className="flex justify-between">
            <div className="w-1/3 border p-4 rounded">
              <img src="/assets/garantias/garantia.png" alt="garantia" width={'50px'} height={'50px'}/>
              <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                Guarantees
              </h5>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                We offer a 30-day return policy for all our products. If for any reason you are not satisfied with your purchase, you can return it within 30 business days from the date of delivery for a full refund or exchange. Please note that the item must be in its original condition and packaging to be eligible for a return.
              </p>
            </div>
    
            <div className="w-1/3 border p-4 rounded">
              <img src="/assets/garantias/seguridad.png" alt="garantia" width={'50px'} height={'50px'}/>
              <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                Security
              </h5>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                Your security is our top priority. We utilize the latest encryption technology to ensure that your personal and financial information is kept safe and secure during every transaction. Rest assured that shopping on our e-commerce platform is both convenient and secure.
              </p>
            </div>
    
            <div className="w-1/3 border p-4 rounded">
              <img src="/assets/garantias/calidad.png" alt="garantia" width={'50px'} height={'50px'}/>
              <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                Quality
              </h5>
              <p className="text-xs text-gray-700 dark:text-gray-400">
                We take pride in offering high-quality electronic products that meet the highest standards of performance and reliability. Each electronic item undergoes rigorous testing and quality assurance procedures to ensure that it functions flawlessly upon arrival. Should you encounter any issues with your electronic purchase, our customer support team is available to assist you promptly and efficiently.
              </p>
            </div>
          </div>
        </div>
      )
}

export default Garantias
