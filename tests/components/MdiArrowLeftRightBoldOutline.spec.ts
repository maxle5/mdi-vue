
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftRightBoldOutline from "../../src/components/MdiArrowLeftRightBoldOutline.vue";

test("MdiArrowLeftRightBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftRightBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
