
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUsb from "../../src/components/MdiUsb.vue";

test("MdiUsb snapshot", () => {
  const wrapper = mount(MdiUsb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
