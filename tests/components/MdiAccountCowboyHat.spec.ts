
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCowboyHat from "../../src/components/MdiAccountCowboyHat.vue";

test("MdiAccountCowboyHat snapshot", () => {
  const wrapper = mount(MdiAccountCowboyHat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
