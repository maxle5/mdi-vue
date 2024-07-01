
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDataMatrixRemove from "../../src/components/MdiDataMatrixRemove.vue";

test("MdiDataMatrixRemove snapshot", () => {
  const wrapper = mount(MdiDataMatrixRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
