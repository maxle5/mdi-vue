
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalCellular3 from "../../src/components/MdiSignalCellular3.vue";

test("MdiSignalCellular3 snapshot", () => {
  const wrapper = mount(MdiSignalCellular3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
