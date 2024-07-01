
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarLightDimmed from "../../src/components/MdiCarLightDimmed.vue";

test("MdiCarLightDimmed snapshot", () => {
  const wrapper = mount(MdiCarLightDimmed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
