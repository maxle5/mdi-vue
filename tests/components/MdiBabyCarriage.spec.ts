
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyCarriage from "../../src/components/MdiBabyCarriage.vue";

test("MdiBabyCarriage snapshot", () => {
  const wrapper = mount(MdiBabyCarriage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
