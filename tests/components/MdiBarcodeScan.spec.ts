
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarcodeScan from "../../src/components/MdiBarcodeScan.vue";

test("MdiBarcodeScan snapshot", () => {
  const wrapper = mount(MdiBarcodeScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
