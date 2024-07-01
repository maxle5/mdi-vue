
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLavaLamp from "../../src/components/MdiLavaLamp.vue";

test("MdiLavaLamp snapshot", () => {
  const wrapper = mount(MdiLavaLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
