
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextPlus from "../../src/components/MdiReceiptTextPlus.vue";

test("MdiReceiptTextPlus snapshot", () => {
  const wrapper = mount(MdiReceiptTextPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
