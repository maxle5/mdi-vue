
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignal2g from "../../src/components/MdiSignal2g.vue";

test("MdiSignal2g snapshot", () => {
  const wrapper = mount(MdiSignal2g, {});
  expect(wrapper.html()).toMatchSnapshot();
});
