
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderRight from "../../src/components/MdiBorderRight.vue";

test("MdiBorderRight snapshot", () => {
  const wrapper = mount(MdiBorderRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
