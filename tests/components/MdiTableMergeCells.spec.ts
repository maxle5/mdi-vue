
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableMergeCells from "../../src/components/MdiTableMergeCells.vue";

test("MdiTableMergeCells snapshot", () => {
  const wrapper = mount(MdiTableMergeCells, {});
  expect(wrapper.html()).toMatchSnapshot();
});
