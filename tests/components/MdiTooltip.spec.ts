
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltip from "../../src/components/MdiTooltip.vue";

test("MdiTooltip snapshot", () => {
  const wrapper = mount(MdiTooltip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
