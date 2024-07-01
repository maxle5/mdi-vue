
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseArrowLeftRightOutline from "../../src/components/MdiBriefcaseArrowLeftRightOutline.vue";

test("MdiBriefcaseArrowLeftRightOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseArrowLeftRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
