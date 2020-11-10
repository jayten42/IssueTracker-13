//
//  IssueCollectionViewCell.swift
//  IssueTracker
//
//  Created by 강병민 on 2020/10/28.
//

import UIKit

class IssueCollectionViewCell: UICollectionViewListCell {
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var previewLabel: UILabel!
    @IBOutlet weak var milestoneBadgeLabel: MilestoneBadgeLabel!
    @IBOutlet weak var labelBadgeLabel: LabelBadgeLabel!
    
    func configure(with issue: Issue) {
        titleLabel.text = issue.title
        previewLabel.text = issue.preview.isEmpty ? " " : issue.preview
        milestoneBadgeLabel.configure(with: issue.milestone.title)
        if let firstLabel = issue.labels.first {
            labelBadgeLabel.configure(with: firstLabel)
        }
        separatorLayoutGuide.leadingAnchor.constraint(equalTo: titleLabel.leadingAnchor).isActive = true
        accessories = [.multiselect(displayed: .whenEditing, options: .init())]
    }

}
