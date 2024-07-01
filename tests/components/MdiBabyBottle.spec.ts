
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyBottle from "../../src/components/MdiBabyBottle.vue";

test("MdiBabyBottle snapshot", () => {
  const wrapper = mount(MdiBabyBottle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
