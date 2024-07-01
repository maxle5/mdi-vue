
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBaby from "../../src/components/MdiBaby.vue";

test("MdiBaby snapshot", () => {
  const wrapper = mount(MdiBaby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
