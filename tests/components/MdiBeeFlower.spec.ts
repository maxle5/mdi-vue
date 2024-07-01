
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeeFlower from "../../src/components/MdiBeeFlower.vue";

test("MdiBeeFlower snapshot", () => {
  const wrapper = mount(MdiBeeFlower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
