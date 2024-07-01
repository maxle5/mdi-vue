
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBilliardsRack from "../../src/components/MdiBilliardsRack.vue";

test("MdiBilliardsRack snapshot", () => {
  const wrapper = mount(MdiBilliardsRack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
