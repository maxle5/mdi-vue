
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodHotDog from "../../src/components/MdiFoodHotDog.vue";

test("MdiFoodHotDog snapshot", () => {
  const wrapper = mount(MdiFoodHotDog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
