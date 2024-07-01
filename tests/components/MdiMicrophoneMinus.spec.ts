
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneMinus from "../../src/components/MdiMicrophoneMinus.vue";

test("MdiMicrophoneMinus snapshot", () => {
  const wrapper = mount(MdiMicrophoneMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
