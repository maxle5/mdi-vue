
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableArrowRight from "../../src/components/MdiTableArrowRight.vue";

test("MdiTableArrowRight snapshot", () => {
  const wrapper = mount(MdiTableArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
