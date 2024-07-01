
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBike from "../../src/components/MdiBike.vue";

test("MdiBike snapshot", () => {
  const wrapper = mount(MdiBike, {});
  expect(wrapper.html()).toMatchSnapshot();
});
