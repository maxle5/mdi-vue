
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBoldBox from "../../src/components/MdiArrowRightBoldBox.vue";

test("MdiArrowRightBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowRightBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
