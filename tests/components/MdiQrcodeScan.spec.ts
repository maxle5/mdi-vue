
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQrcodeScan from "../../src/components/MdiQrcodeScan.vue";

test("MdiQrcodeScan snapshot", () => {
  const wrapper = mount(MdiQrcodeScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
