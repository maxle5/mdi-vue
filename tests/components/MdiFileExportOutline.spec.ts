
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileExportOutline from "../../src/components/MdiFileExportOutline.vue";

test("MdiFileExportOutline snapshot", () => {
  const wrapper = mount(MdiFileExportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
