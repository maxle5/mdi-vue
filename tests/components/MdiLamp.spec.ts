
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLamp from "../../src/components/MdiLamp.vue";

test("MdiLamp snapshot", () => {
  const wrapper = mount(MdiLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
