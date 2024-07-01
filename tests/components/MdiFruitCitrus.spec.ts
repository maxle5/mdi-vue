
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitCitrus from "../../src/components/MdiFruitCitrus.vue";

test("MdiFruitCitrus snapshot", () => {
  const wrapper = mount(MdiFruitCitrus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
