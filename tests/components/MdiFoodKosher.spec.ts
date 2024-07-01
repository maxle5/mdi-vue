
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodKosher from "../../src/components/MdiFoodKosher.vue";

test("MdiFoodKosher snapshot", () => {
  const wrapper = mount(MdiFoodKosher, {});
  expect(wrapper.html()).toMatchSnapshot();
});
