
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSwap from "../../src/components/MdiFileSwap.vue";

test("MdiFileSwap snapshot", () => {
  const wrapper = mount(MdiFileSwap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
