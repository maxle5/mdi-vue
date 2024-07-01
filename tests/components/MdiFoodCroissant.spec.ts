
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodCroissant from "../../src/components/MdiFoodCroissant.vue";

test("MdiFoodCroissant snapshot", () => {
  const wrapper = mount(MdiFoodCroissant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
