
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKnob from "../../src/components/MdiKnob.vue";

test("MdiKnob snapshot", () => {
  const wrapper = mount(MdiKnob, {});
  expect(wrapper.html()).toMatchSnapshot();
});
