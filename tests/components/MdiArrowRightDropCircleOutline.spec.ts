
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightDropCircleOutline from "../../src/components/MdiArrowRightDropCircleOutline.vue";

test("MdiArrowRightDropCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowRightDropCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
