
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunAngleOutline from "../../src/components/MdiSunAngleOutline.vue";

test("MdiSunAngleOutline snapshot", () => {
  const wrapper = mount(MdiSunAngleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
