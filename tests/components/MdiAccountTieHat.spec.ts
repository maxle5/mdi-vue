
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieHat from "../../src/components/MdiAccountTieHat.vue";

test("MdiAccountTieHat snapshot", () => {
  const wrapper = mount(MdiAccountTieHat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
