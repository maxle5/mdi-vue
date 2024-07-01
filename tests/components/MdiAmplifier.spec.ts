
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAmplifier from "../../src/components/MdiAmplifier.vue";

test("MdiAmplifier snapshot", () => {
  const wrapper = mount(MdiAmplifier, {});
  expect(wrapper.html()).toMatchSnapshot();
});
