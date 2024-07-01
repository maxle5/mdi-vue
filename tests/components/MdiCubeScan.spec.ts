
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCubeScan from "../../src/components/MdiCubeScan.vue";

test("MdiCubeScan snapshot", () => {
  const wrapper = mount(MdiCubeScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
