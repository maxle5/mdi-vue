
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaletteSwatch from "../../src/components/MdiPaletteSwatch.vue";

test("MdiPaletteSwatch snapshot", () => {
  const wrapper = mount(MdiPaletteSwatch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
