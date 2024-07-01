
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableRow from "../../src/components/MdiTableRow.vue";

test("MdiTableRow snapshot", () => {
  const wrapper = mount(MdiTableRow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
