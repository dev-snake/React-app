import {
	Table,
	TableBody,
	TableHeader,
	TableColumn,
	TableCell,
	TableRow,
	Chip,
	Button,
	Input,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	DropdownTrigger,
	Tooltip,
	Avatar
} from '@nextui-org/react';
export default function ProductManagement() {
	return (
		<div className="p-2 mt-4">
			<div className="flex justify-between gap-3">
				<Input
					className="w-full sm:max-w-[20%]"
					placeholder="Search by name..."
					startContent={<i className="fa-solid fa-magnifying-glass"></i>}
					variant="flat"
				/>
				<div className="flex gap-10">
					<Dropdown>
						<DropdownTrigger>
							<Button
								endContent={<i className="fa-solid fa-chevron-down"></i>}
								variant="flat"
							>
								Status
							</Button>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem>active</DropdownItem>
							<DropdownItem>cancel</DropdownItem>
							<DropdownItem>Pendding</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<Button color="primary" endContent={<i className="fa-solid fa-plus"></i>}>
						Add New
					</Button>
				</div>
			</div>
			<Table className="mt-4" isHeaderSticky>
				<TableHeader className="text-center">
					<TableColumn>id</TableColumn>
					<TableColumn>IMAGE</TableColumn>
					<TableColumn>NAME</TableColumn>
					<TableColumn>Price</TableColumn>
					<TableColumn>ROLE</TableColumn>
					<TableColumn>STATUS</TableColumn>
					<TableColumn>Action</TableColumn>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>1</TableCell>
						<TableCell>
							<Avatar />
						</TableCell>
						<TableCell>Zoey Lang</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Technical Lead</TableCell>
						<TableCell>
							<Chip
								className="text-green-400 active:opacity-50 bg-green-100
                        "
							>
								success
							</Chip>
						</TableCell>
						<TableCell>
							<div className="relative flex items-center gap-2">
								<Tooltip content="Edit Product">
									<i className="fa-regular fa-pen-to-square p-3 bg-blue-400 text-white rounded-[1rem] cursor-pointer "></i>
								</Tooltip>
								<Tooltip content="Delete Product ">
									<i className="fa-solid fa-trash bg-red-400 p-3 text-white rounded-[1rem] cursor-pointer"></i>
								</Tooltip>
							</div>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>1</TableCell>
						<TableCell>
							<Avatar />
						</TableCell>
						<TableCell>Zoey Lang</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Technical Lead</TableCell>
						<TableCell>
							<Chip
								className="text-green-400 active:opacity-50 bg-green-100
                        "
							>
								success
							</Chip>
						</TableCell>
						<TableCell>
							<div className="relative flex items-center gap-2">
								<Tooltip content="Edit Product">
									<i className="fa-regular fa-pen-to-square p-3 bg-blue-400 text-white rounded-[1rem] cursor-pointer "></i>
								</Tooltip>
								<Tooltip content="Delete Product ">
									<i className="fa-solid fa-trash bg-red-400 p-3 text-white rounded-[1rem] cursor-pointer"></i>
								</Tooltip>
							</div>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>1</TableCell>
						<TableCell>
							<Avatar />
						</TableCell>
						<TableCell>Zoey Lang</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Technical Lead</TableCell>
						<TableCell>
							<Chip
								className="text-green-400 active:opacity-50 bg-green-100
                        "
							>
								success
							</Chip>
						</TableCell>
						<TableCell>
							<div className="relative flex items-center gap-2">
								<Tooltip content="Edit Product">
									<i className="fa-regular fa-pen-to-square p-3 bg-blue-400 text-white rounded-[1rem] cursor-pointer "></i>
								</Tooltip>
								<Tooltip content="Delete Product ">
									<i className="fa-solid fa-trash bg-red-400 p-3 text-white rounded-[1rem] cursor-pointer"></i>
								</Tooltip>
							</div>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>1</TableCell>
						<TableCell>
							<Avatar />
						</TableCell>
						<TableCell>Zoey Lang</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Technical Lead</TableCell>
						<TableCell>
							<Chip
								className="text-green-400 active:opacity-50 bg-green-100
                        "
							>
								success
							</Chip>
						</TableCell>
						<TableCell>
							<div className="relative flex items-center gap-2">
								<Tooltip content="Edit Product">
									<i className="fa-regular fa-pen-to-square p-3 bg-blue-400 text-white rounded-[1rem] cursor-pointer "></i>
								</Tooltip>
								<Tooltip content="Delete Product ">
									<i className="fa-solid fa-trash bg-red-400 p-3 text-white rounded-[1rem] cursor-pointer"></i>
								</Tooltip>
							</div>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
