
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBucket from "../../src/components/MdiBucket.vue";

test("MdiBucket snapshot", () => {
  const wrapper = mount(MdiBucket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
