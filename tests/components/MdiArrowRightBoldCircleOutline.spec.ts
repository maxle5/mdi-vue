
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBoldCircleOutline from "../../src/components/MdiArrowRightBoldCircleOutline.vue";

test("MdiArrowRightBoldCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowRightBoldCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
