
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYeast from "../../src/components/MdiYeast.vue";

test("MdiYeast snapshot", () => {
  const wrapper = mount(MdiYeast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
