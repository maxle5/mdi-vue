
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkullScan from "../../src/components/MdiSkullScan.vue";

test("MdiSkullScan snapshot", () => {
  const wrapper = mount(MdiSkullScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
