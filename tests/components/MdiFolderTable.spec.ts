
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderTable from "../../src/components/MdiFolderTable.vue";

test("MdiFolderTable snapshot", () => {
  const wrapper = mount(MdiFolderTable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
