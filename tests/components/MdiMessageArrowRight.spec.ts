
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageArrowRight from "../../src/components/MdiMessageArrowRight.vue";

test("MdiMessageArrowRight snapshot", () => {
  const wrapper = mount(MdiMessageArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
