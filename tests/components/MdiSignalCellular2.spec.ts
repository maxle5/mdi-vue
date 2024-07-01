
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalCellular2 from "../../src/components/MdiSignalCellular2.vue";

test("MdiSignalCellular2 snapshot", () => {
  const wrapper = mount(MdiSignalCellular2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
