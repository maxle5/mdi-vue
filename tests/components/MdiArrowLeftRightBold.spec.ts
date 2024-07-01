
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftRightBold from "../../src/components/MdiArrowLeftRightBold.vue";

test("MdiArrowLeftRightBold snapshot", () => {
  const wrapper = mount(MdiArrowLeftRightBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
