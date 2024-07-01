
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderCheck from "../../src/components/MdiFolderCheck.vue";

test("MdiFolderCheck snapshot", () => {
  const wrapper = mount(MdiFolderCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
