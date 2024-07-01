
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceWoman from "../../src/components/MdiFaceWoman.vue";

test("MdiFaceWoman snapshot", () => {
  const wrapper = mount(MdiFaceWoman, {});
  expect(wrapper.html()).toMatchSnapshot();
});
