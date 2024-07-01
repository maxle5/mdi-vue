
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowRight from "../../src/components/MdiFolderArrowRight.vue";

test("MdiFolderArrowRight snapshot", () => {
  const wrapper = mount(MdiFolderArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
