export const makeContractRecord = req => {
    const formatTasks = taskArray =>
      taskArray.map(task => ({
        name: task.name,
        dateLimit: task.dateLimit,
        dateEnd: task.dateEnd,
        task_points: task.task_points,
        notification: task.notification,
        done: task.done
      }));
  
    const formatAgreements = agreementArray =>
      agreementArray.map(agreement => ({
        name: agreement.name,
        description: agreement.description,
        minimum: agreement.minimum
      }));
  
    const contractRecord = (req => ({
      name: req.body.name,
      description: req.body.description,
      contract_file: req.body.contract_file,
      signature: req.body.signature,
      state: req.body.state,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      task_contracts: formatTasks(req.body.task_contracts),
      agreement_contracts: formatAgreements(req.body.agreement_contracts),
      percentage: req.body.percentage,
      in_charge_points: req.body.in_charge_points,
      quality_points: req.body.quality_points,
      contract_points: req.body.contract_points,
      supplier_points: req.body.supplier_points
    }))(req);
  
    return Object.freeze(contractRecord)
  };
  
  