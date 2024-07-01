
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBird from "../../src/components/MdiBird.vue";

test("MdiBird snapshot", () => {
  const wrapper = mount(MdiBird, {});
  expect(wrapper.html()).toMatchSnapshot();
});
