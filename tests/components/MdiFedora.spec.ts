
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFedora from "../../src/components/MdiFedora.vue";

test("MdiFedora snapshot", () => {
  const wrapper = mount(MdiFedora, {});
  expect(wrapper.html()).toMatchSnapshot();
});
