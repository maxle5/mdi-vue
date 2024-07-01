
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightDropCircle from "../../src/components/MdiArrowRightDropCircle.vue";

test("MdiArrowRightDropCircle snapshot", () => {
  const wrapper = mount(MdiArrowRightDropCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
