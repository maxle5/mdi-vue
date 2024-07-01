
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBraille from "../../src/components/MdiBraille.vue";

test("MdiBraille snapshot", () => {
  const wrapper = mount(MdiBraille, {});
  expect(wrapper.html()).toMatchSnapshot();
});
