
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBench from "../../src/components/MdiBench.vue";

test("MdiBench snapshot", () => {
  const wrapper = mount(MdiBench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
