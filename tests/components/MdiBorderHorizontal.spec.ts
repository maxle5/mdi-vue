
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderHorizontal from "../../src/components/MdiBorderHorizontal.vue";

test("MdiBorderHorizontal snapshot", () => {
  const wrapper = mount(MdiBorderHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
