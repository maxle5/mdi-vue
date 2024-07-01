
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableColumnPlusBefore from "../../src/components/MdiTableColumnPlusBefore.vue";

test("MdiTableColumnPlusBefore snapshot", () => {
  const wrapper = mount(MdiTableColumnPlusBefore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
