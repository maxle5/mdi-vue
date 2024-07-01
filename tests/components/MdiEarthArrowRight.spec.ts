
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthArrowRight from "../../src/components/MdiEarthArrowRight.vue";

test("MdiEarthArrowRight snapshot", () => {
  const wrapper = mount(MdiEarthArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
