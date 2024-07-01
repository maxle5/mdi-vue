
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeExportOutline from "../../src/components/MdiHomeExportOutline.vue";

test("MdiHomeExportOutline snapshot", () => {
  const wrapper = mount(MdiHomeExportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
