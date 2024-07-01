
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuSwap from "../../src/components/MdiMenuSwap.vue";

test("MdiMenuSwap snapshot", () => {
  const wrapper = mount(MdiMenuSwap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
