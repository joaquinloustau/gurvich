//
//  ViewController.swift
//  HelloWorldSwift
//
//  Created by Loustau, Joaquin on 1/31/16.
//  Copyright (c) 2016 Loustau, Joaquin. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var nameLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func nameIsEntered(nameTextField: UITextField) {
        nameLabel.text = "Hello \(nameTextField.text)"
    }

}

