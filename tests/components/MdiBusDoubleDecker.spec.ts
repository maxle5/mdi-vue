
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusDoubleDecker from "../../src/components/MdiBusDoubleDecker.vue";

test("MdiBusDoubleDecker snapshot", () => {
  const wrapper = mount(MdiBusDoubleDecker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
