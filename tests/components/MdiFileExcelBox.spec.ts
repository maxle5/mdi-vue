
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileExcelBox from "../../src/components/MdiFileExcelBox.vue";

test("MdiFileExcelBox snapshot", () => {
  const wrapper = mount(MdiFileExcelBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
