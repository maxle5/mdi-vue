
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulb from "../../src/components/MdiLightbulb.vue";

test("MdiLightbulb snapshot", () => {
  const wrapper = mount(MdiLightbulb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
