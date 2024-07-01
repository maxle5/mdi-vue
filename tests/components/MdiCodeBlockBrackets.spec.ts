
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeBlockBrackets from "../../src/components/MdiCodeBlockBrackets.vue";

test("MdiCodeBlockBrackets snapshot", () => {
  const wrapper = mount(MdiCodeBlockBrackets, {});
  expect(wrapper.html()).toMatchSnapshot();
});
