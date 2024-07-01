
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyBottleOutline from "../../src/components/MdiBabyBottleOutline.vue";

test("MdiBabyBottleOutline snapshot", () => {
  const wrapper = mount(MdiBabyBottleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
