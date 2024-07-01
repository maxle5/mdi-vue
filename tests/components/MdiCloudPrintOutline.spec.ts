
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudPrintOutline from "../../src/components/MdiCloudPrintOutline.vue";

test("MdiCloudPrintOutline snapshot", () => {
  const wrapper = mount(MdiCloudPrintOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
