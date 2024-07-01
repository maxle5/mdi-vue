
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExportVariant from "../../src/components/MdiExportVariant.vue";

test("MdiExportVariant snapshot", () => {
  const wrapper = mount(MdiExportVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
