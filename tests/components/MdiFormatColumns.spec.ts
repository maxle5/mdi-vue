
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatColumns from "../../src/components/MdiFormatColumns.vue";

test("MdiFormatColumns snapshot", () => {
  const wrapper = mount(MdiFormatColumns, {});
  expect(wrapper.html()).toMatchSnapshot();
});
