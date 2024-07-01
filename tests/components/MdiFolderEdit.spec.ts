
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderEdit from "../../src/components/MdiFolderEdit.vue";

test("MdiFolderEdit snapshot", () => {
  const wrapper = mount(MdiFolderEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
