
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyedropperVariant from "../../src/components/MdiEyedropperVariant.vue";

test("MdiEyedropperVariant snapshot", () => {
  const wrapper = mount(MdiEyedropperVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
