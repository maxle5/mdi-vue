
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignal4g from "../../src/components/MdiSignal4g.vue";

test("MdiSignal4g snapshot", () => {
  const wrapper = mount(MdiSignal4g, {});
  expect(wrapper.html()).toMatchSnapshot();
});
