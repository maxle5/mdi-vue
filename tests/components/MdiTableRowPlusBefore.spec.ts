
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableRowPlusBefore from "../../src/components/MdiTableRowPlusBefore.vue";

test("MdiTableRowPlusBefore snapshot", () => {
  const wrapper = mount(MdiTableRowPlusBefore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
