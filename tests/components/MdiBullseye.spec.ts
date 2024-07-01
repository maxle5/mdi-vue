
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBullseye from "../../src/components/MdiBullseye.vue";

test("MdiBullseye snapshot", () => {
  const wrapper = mount(MdiBullseye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
