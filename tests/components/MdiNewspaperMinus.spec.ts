
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperMinus from "../../src/components/MdiNewspaperMinus.vue";

test("MdiNewspaperMinus snapshot", () => {
  const wrapper = mount(MdiNewspaperMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
