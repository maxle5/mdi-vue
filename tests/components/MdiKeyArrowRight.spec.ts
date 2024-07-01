
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyArrowRight from "../../src/components/MdiKeyArrowRight.vue";

test("MdiKeyArrowRight snapshot", () => {
  const wrapper = mount(MdiKeyArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
