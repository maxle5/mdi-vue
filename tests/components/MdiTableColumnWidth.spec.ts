
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableColumnWidth from "../../src/components/MdiTableColumnWidth.vue";

test("MdiTableColumnWidth snapshot", () => {
  const wrapper = mount(MdiTableColumnWidth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
