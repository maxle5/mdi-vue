
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScannerOff from "../../src/components/MdiScannerOff.vue";

test("MdiScannerOff snapshot", () => {
  const wrapper = mount(MdiScannerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
