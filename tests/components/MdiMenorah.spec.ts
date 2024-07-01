
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenorah from "../../src/components/MdiMenorah.vue";

test("MdiMenorah snapshot", () => {
  const wrapper = mount(MdiMenorah, {});
  expect(wrapper.html()).toMatchSnapshot();
});
