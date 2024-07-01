
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRibbon from "../../src/components/MdiRibbon.vue";

test("MdiRibbon snapshot", () => {
  const wrapper = mount(MdiRibbon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
