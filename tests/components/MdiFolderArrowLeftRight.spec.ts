
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowLeftRight from "../../src/components/MdiFolderArrowLeftRight.vue";

test("MdiFolderArrowLeftRight snapshot", () => {
  const wrapper = mount(MdiFolderArrowLeftRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
