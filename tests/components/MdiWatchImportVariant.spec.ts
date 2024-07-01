
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatchImportVariant from "../../src/components/MdiWatchImportVariant.vue";

test("MdiWatchImportVariant snapshot", () => {
  const wrapper = mount(MdiWatchImportVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
