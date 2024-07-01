
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationBrackets from "../../src/components/MdiApplicationBrackets.vue";

test("MdiApplicationBrackets snapshot", () => {
  const wrapper = mount(MdiApplicationBrackets, {});
  expect(wrapper.html()).toMatchSnapshot();
});
