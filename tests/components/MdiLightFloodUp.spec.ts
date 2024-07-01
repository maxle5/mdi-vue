
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightFloodUp from "../../src/components/MdiLightFloodUp.vue";

test("MdiLightFloodUp snapshot", () => {
  const wrapper = mount(MdiLightFloodUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
