
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPizza from "../../src/components/MdiPizza.vue";

test("MdiPizza snapshot", () => {
  const wrapper = mount(MdiPizza, {});
  expect(wrapper.html()).toMatchSnapshot();
});
