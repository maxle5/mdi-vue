
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQrcodePlus from "../../src/components/MdiQrcodePlus.vue";

test("MdiQrcodePlus snapshot", () => {
  const wrapper = mount(MdiQrcodePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
