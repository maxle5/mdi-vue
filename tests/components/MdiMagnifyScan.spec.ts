
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyScan from "../../src/components/MdiMagnifyScan.vue";

test("MdiMagnifyScan snapshot", () => {
  const wrapper = mount(MdiMagnifyScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
