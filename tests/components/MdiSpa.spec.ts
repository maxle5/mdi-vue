
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpa from "../../src/components/MdiSpa.vue";

test("MdiSpa snapshot", () => {
  const wrapper = mount(MdiSpa, {});
  expect(wrapper.html()).toMatchSnapshot();
});
