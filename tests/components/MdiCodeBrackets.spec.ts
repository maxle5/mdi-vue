
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeBrackets from "../../src/components/MdiCodeBrackets.vue";

test("MdiCodeBrackets snapshot", () => {
  const wrapper = mount(MdiCodeBrackets, {});
  expect(wrapper.html()).toMatchSnapshot();
});
