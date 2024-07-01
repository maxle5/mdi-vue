
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatchImport from "../../src/components/MdiWatchImport.vue";

test("MdiWatchImport snapshot", () => {
  const wrapper = mount(MdiWatchImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
