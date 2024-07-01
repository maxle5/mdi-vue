
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDataMatrixScan from "../../src/components/MdiDataMatrixScan.vue";

test("MdiDataMatrixScan snapshot", () => {
  const wrapper = mount(MdiDataMatrixScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
