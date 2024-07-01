
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffin from "../../src/components/MdiCoffin.vue";

test("MdiCoffin snapshot", () => {
  const wrapper = mount(MdiCoffin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
