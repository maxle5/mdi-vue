
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunAngle from "../../src/components/MdiSunAngle.vue";

test("MdiSunAngle snapshot", () => {
  const wrapper = mount(MdiSunAngle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
