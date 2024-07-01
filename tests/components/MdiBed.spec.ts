
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBed from "../../src/components/MdiBed.vue";

test("MdiBed snapshot", () => {
  const wrapper = mount(MdiBed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
