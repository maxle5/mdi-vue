
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFacebookGaming from "../../src/components/MdiFacebookGaming.vue";

test("MdiFacebookGaming snapshot", () => {
  const wrapper = mount(MdiFacebookGaming, {});
  expect(wrapper.html()).toMatchSnapshot();
});
