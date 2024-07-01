
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanHandsdown from "../../src/components/MdiHumanHandsdown.vue";

test("MdiHumanHandsdown snapshot", () => {
  const wrapper = mount(MdiHumanHandsdown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
