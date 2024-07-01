
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeCity from "../../src/components/MdiHomeCity.vue";

test("MdiHomeCity snapshot", () => {
  const wrapper = mount(MdiHomeCity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
