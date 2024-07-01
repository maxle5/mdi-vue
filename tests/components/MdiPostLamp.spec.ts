
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPostLamp from "../../src/components/MdiPostLamp.vue";

test("MdiPostLamp snapshot", () => {
  const wrapper = mount(MdiPostLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
