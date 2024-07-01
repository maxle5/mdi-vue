
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitCherries from "../../src/components/MdiFruitCherries.vue";

test("MdiFruitCherries snapshot", () => {
  const wrapper = mount(MdiFruitCherries, {});
  expect(wrapper.html()).toMatchSnapshot();
});
