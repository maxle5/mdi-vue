
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBacteria from "../../src/components/MdiBacteria.vue";

test("MdiBacteria snapshot", () => {
  const wrapper = mount(MdiBacteria, {});
  expect(wrapper.html()).toMatchSnapshot();
});
