
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBoldBoxOutline from "../../src/components/MdiArrowRightBoldBoxOutline.vue";

test("MdiArrowRightBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowRightBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
