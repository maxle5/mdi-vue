
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDataMatrixPlus from "../../src/components/MdiDataMatrixPlus.vue";

test("MdiDataMatrixPlus snapshot", () => {
  const wrapper = mount(MdiDataMatrixPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
