
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileExport from "../../src/components/MdiFileExport.vue";

test("MdiFileExport snapshot", () => {
  const wrapper = mount(MdiFileExport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
