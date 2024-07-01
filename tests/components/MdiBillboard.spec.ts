
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBillboard from "../../src/components/MdiBillboard.vue";

test("MdiBillboard snapshot", () => {
  const wrapper = mount(MdiBillboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
