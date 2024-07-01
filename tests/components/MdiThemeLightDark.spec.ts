
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThemeLightDark from "../../src/components/MdiThemeLightDark.vue";

test("MdiThemeLightDark snapshot", () => {
  const wrapper = mount(MdiThemeLightDark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
