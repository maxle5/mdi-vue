
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightFloodDown from "../../src/components/MdiLightFloodDown.vue";

test("MdiLightFloodDown snapshot", () => {
  const wrapper = mount(MdiLightFloodDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
