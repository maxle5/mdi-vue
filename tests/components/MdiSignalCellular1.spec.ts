
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalCellular1 from "../../src/components/MdiSignalCellular1.vue";

test("MdiSignalCellular1 snapshot", () => {
  const wrapper = mount(MdiSignalCellular1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
