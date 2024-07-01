
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompassRose from "../../src/components/MdiCompassRose.vue";

test("MdiCompassRose snapshot", () => {
  const wrapper = mount(MdiCompassRose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
