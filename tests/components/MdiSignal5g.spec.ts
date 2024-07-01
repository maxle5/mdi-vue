
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignal5g from "../../src/components/MdiSignal5g.vue";

test("MdiSignal5g snapshot", () => {
  const wrapper = mount(MdiSignal5g, {});
  expect(wrapper.html()).toMatchSnapshot();
});
