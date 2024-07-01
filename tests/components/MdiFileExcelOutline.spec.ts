
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileExcelOutline from "../../src/components/MdiFileExcelOutline.vue";

test("MdiFileExcelOutline snapshot", () => {
  const wrapper = mount(MdiFileExcelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
