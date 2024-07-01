
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationExport from "../../src/components/MdiApplicationExport.vue";

test("MdiApplicationExport snapshot", () => {
  const wrapper = mount(MdiApplicationExport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
