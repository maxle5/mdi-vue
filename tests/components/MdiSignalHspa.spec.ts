
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalHspa from "../../src/components/MdiSignalHspa.vue";

test("MdiSignalHspa snapshot", () => {
  const wrapper = mount(MdiSignalHspa, {});
  expect(wrapper.html()).toMatchSnapshot();
});
