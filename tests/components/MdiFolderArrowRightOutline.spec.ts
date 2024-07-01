
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowRightOutline from "../../src/components/MdiFolderArrowRightOutline.vue";

test("MdiFolderArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiFolderArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
