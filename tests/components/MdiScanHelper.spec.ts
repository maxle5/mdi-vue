
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScanHelper from "../../src/components/MdiScanHelper.vue";

test("MdiScanHelper snapshot", () => {
  const wrapper = mount(MdiScanHelper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
