
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQrcode from "../../src/components/MdiQrcode.vue";

test("MdiQrcode snapshot", () => {
  const wrapper = mount(MdiQrcode, {});
  expect(wrapper.html()).toMatchSnapshot();
});
