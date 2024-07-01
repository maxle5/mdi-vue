
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderBottom from "../../src/components/MdiBorderBottom.vue";

test("MdiBorderBottom snapshot", () => {
  const wrapper = mount(MdiBorderBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
