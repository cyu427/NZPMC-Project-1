import { Request, Response } from 'express';
import School from '../model/school.model';

export const getAllSchools = async (req: Request, res: Response) => {
    try {
        // Find all schools in the database
        const schools = await School.find();

        // Return the schools
        res.status(200).json({
            message: 'Schools fetched successfully.',
            schools,
        });
    } catch (error) {
        console.error('Error fetching schools:', error);
    }
};

export const getSchool = async (req: Request, res: Response): Promise<void> => {
    try {
        const { schoolId } = req.params;

        // Find school by ID
        const school = await School.findById(schoolId);

        if (!school) {
            res.status(404).json({ message: 'School not found.' });
            return;
        }

        // Return the school
        res.status(200).json({
            message: 'School fetched successfully.',
            school,
        });
    } catch (error) {
        console.error('Error fetching school:', error);
    }
}