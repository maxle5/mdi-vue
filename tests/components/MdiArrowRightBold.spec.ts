
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBold from "../../src/components/MdiArrowRightBold.vue";

test("MdiArrowRightBold snapshot", () => {
  const wrapper = mount(MdiArrowRightBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
