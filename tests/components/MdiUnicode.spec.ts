
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnicode from "../../src/components/MdiUnicode.vue";

test("MdiUnicode snapshot", () => {
  const wrapper = mount(MdiUnicode, {});
  expect(wrapper.html()).toMatchSnapshot();
});
