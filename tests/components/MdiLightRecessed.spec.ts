
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightRecessed from "../../src/components/MdiLightRecessed.vue";

test("MdiLightRecessed snapshot", () => {
  const wrapper = mount(MdiLightRecessed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
