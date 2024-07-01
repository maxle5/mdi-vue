
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalCellularOutline from "../../src/components/MdiSignalCellularOutline.vue";

test("MdiSignalCellularOutline snapshot", () => {
  const wrapper = mount(MdiSignalCellularOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
