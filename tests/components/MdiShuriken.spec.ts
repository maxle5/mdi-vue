
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShuriken from "../../src/components/MdiShuriken.vue";

test("MdiShuriken snapshot", () => {
  const wrapper = mount(MdiShuriken, {});
  expect(wrapper.html()).toMatchSnapshot();
});
