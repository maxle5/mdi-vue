
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExport from "../../src/components/MdiExport.vue";

test("MdiExport snapshot", () => {
  const wrapper = mount(MdiExport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
