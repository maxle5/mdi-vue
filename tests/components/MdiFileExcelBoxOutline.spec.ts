
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileExcelBoxOutline from "../../src/components/MdiFileExcelBoxOutline.vue";

test("MdiFileExcelBoxOutline snapshot", () => {
  const wrapper = mount(MdiFileExcelBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
