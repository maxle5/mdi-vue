
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeMaker from "../../src/components/MdiCoffeeMaker.vue";

test("MdiCoffeeMaker snapshot", () => {
  const wrapper = mount(MdiCoffeeMaker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
