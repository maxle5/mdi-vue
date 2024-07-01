
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderEye from "../../src/components/MdiFolderEye.vue";

test("MdiFolderEye snapshot", () => {
  const wrapper = mount(MdiFolderEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
