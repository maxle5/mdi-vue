
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBox from "../../src/components/MdiArrowRightBox.vue";

test("MdiArrowRightBox snapshot", () => {
  const wrapper = mount(MdiArrowRightBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
