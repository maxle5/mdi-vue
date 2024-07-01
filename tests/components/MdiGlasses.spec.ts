
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlasses from "../../src/components/MdiGlasses.vue";

test("MdiGlasses snapshot", () => {
  const wrapper = mount(MdiGlasses, {});
  expect(wrapper.html()).toMatchSnapshot();
});
