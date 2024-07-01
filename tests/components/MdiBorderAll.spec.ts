
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderAll from "../../src/components/MdiBorderAll.vue";

test("MdiBorderAll snapshot", () => {
  const wrapper = mount(MdiBorderAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
