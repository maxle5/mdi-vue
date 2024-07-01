
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowLeftRightOutline from "../../src/components/MdiFolderArrowLeftRightOutline.vue";

test("MdiFolderArrowLeftRightOutline snapshot", () => {
  const wrapper = mount(MdiFolderArrowLeftRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
