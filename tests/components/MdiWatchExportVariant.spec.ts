
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatchExportVariant from "../../src/components/MdiWatchExportVariant.vue";

test("MdiWatchExportVariant snapshot", () => {
  const wrapper = mount(MdiWatchExportVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
