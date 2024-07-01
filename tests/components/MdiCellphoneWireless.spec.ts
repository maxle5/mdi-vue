
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneWireless from "../../src/components/MdiCellphoneWireless.vue";

test("MdiCellphoneWireless snapshot", () => {
  const wrapper = mount(MdiCellphoneWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
