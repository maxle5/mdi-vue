
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileExcel from "../../src/components/MdiFileExcel.vue";

test("MdiFileExcel snapshot", () => {
  const wrapper = mount(MdiFileExcel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
