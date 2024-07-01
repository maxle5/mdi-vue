
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeekeeper from "../../src/components/MdiBeekeeper.vue";

test("MdiBeekeeper snapshot", () => {
  const wrapper = mount(MdiBeekeeper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
