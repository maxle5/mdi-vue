
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleGlass from "../../src/components/MdiGoogleGlass.vue";

test("MdiGoogleGlass snapshot", () => {
  const wrapper = mount(MdiGoogleGlass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
