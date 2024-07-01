
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFishbowl from "../../src/components/MdiFishbowl.vue";

test("MdiFishbowl snapshot", () => {
  const wrapper = mount(MdiFishbowl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
