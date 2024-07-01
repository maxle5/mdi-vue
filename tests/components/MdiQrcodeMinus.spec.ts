
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQrcodeMinus from "../../src/components/MdiQrcodeMinus.vue";

test("MdiQrcodeMinus snapshot", () => {
  const wrapper = mount(MdiQrcodeMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
