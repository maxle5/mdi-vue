
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatchExport from "../../src/components/MdiWatchExport.vue";

test("MdiWatchExport snapshot", () => {
  const wrapper = mount(MdiWatchExport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
