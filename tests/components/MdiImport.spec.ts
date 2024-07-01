
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImport from "../../src/components/MdiImport.vue";

test("MdiImport snapshot", () => {
  const wrapper = mount(MdiImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
