
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadVariant from "../../src/components/MdiGamepadVariant.vue";

test("MdiGamepadVariant snapshot", () => {
  const wrapper = mount(MdiGamepadVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
